# Green Habit — Data Model

Goal (decisions #8 & #9): no product/category/content data is ever hardcoded
inside a UI component. Every component consumes typed interfaces defined here.
Data access goes through a **repository interface**, with a mock
implementation today and a drop-in Supabase implementation later — UI
components never know which one is active.

## Core Types

```ts
// data/types.ts

/** Prices are stored in integer cents to avoid floating-point errors. */
export type Cents = number;

export interface Image {
  id: string;
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export type BadgeTone = "dietary" | "status" | "promo" | "neutral";

export interface Badge {
  id: string;
  label: string;      // "VEGAN", "POPULAR", "15% OFF COMBO"
  tone: BadgeTone;
}

export interface NutritionFacts {
  calories?: number;
  proteinGrams?: number;
  carbsGrams?: number;
  fatGrams?: number;
}

export interface ProductVariant {
  id: string;
  label: string;              // "Regular Slice", "Double Slice"
  priceCents: Cents;          // absolute price for this variant
}

export interface ProductAddOn {
  id: string;
  label: string;              // "Extra Avocado Whip"
  priceDeltaCents: Cents;     // amount added to base price
}

export interface Category {
  id: string;
  slug: string;                // "italian-specialties"
  name: string;                // "Italian Specialties"
  description?: string;
  cardImage: Image;            // used in CategoryCard (grid)
  heroImage?: Image;           // used in immersive/gallery variant
  sortOrder: number;
  isVisible: boolean;
}

export interface Product {
  id: string;
  slug: string;                     // "heritage-avocado-toast"
  name: string;
  shortDescription: string;         // used on cards
  longDescription?: string;         // used on product detail page
  priceCents: Cents;
  compareAtPriceCents?: Cents;      // for future discount display
  currency: string;                 // "USD"
  categoryId: string;
  images: Image[];                  // images[0] = primary card image
  badges: Badge[];
  nutrition?: NutritionFacts;
  variants?: ProductVariant[];
  addOns?: ProductAddOn[];
  rating?: number;                  // 0–5
  reviewCount?: number;
  isAvailable: boolean;             // false = "sold out", hides Add to Order
  isFeatured: boolean;              // homepage "Signature Rituals"
  isBestSeller: boolean;            // "The Daily Habits"
  isChefPick?: boolean;
  createdAt: string;                // ISO date
  updatedAt: string;
}
```

## Supporting Content Models
Used by non-catalog sections (About, Experience, Offers, Contact). Kept in
the same typed pattern for consistency, though these are lower priority than
Product/Category.

```ts
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: Image;
}

export interface Review {
  id: string;
  authorName: string;
  rating: number;         // 1–5
  quote: string;
  productId?: string;
}

export interface Location {
  id: string;
  name: string;            // "Flagship Atelier"
  addressLine: string;
  hours: string;
  phone?: string;
  isFlagship: boolean;
}

export interface Offer {
  id: string;
  badgeLabel: string;       // "15% OFF", "BUY 1 GET 1"
  validityLabel: string;    // "Valid until Nov 30"
  title: string;
  description: string;
  ctaLabel: string;
}

export interface LoyaltyTier {
  id: string;
  name: string;             // "BRONZE"
  pointsRange: string;      // "0 — 499 pts"
  perkTitle: string;
  perkDescription: string;
}

export interface Combo {
  id: string;
  badgeLabel: string;
  title: string;
  description: string;
  priceCents: Cents;
}

export interface Milestone {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  id: string;
  stepNumber: string;       // "01"
  title: string;
  description: string;
  image?: Image;
}

export interface BrandValue {
  id: string;
  title: string;
  description: string;
  iconName: string;         // Lucide icon name
}

export interface ImpactStat {
  id: string;
  value: string;            // "100%", "4,200 lbs"
  label: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
```

## Repository Interfaces
Components and pages depend only on these interfaces — never on the mock
data files or a Supabase client directly.

```ts
// data/repositories/product-repository.ts
export interface ProductRepository {
  getAllProducts(): Promise<Product[]>;
  getProductBySlug(slug: string): Promise<Product | null>;
  getProductsByCategorySlug(categorySlug: string): Promise<Product[]>;
  getFeaturedProducts(): Promise<Product[]>;
  getBestSellers(): Promise<Product[]>;
}

// data/repositories/category-repository.ts
export interface CategoryRepository {
  getAllCategories(): Promise<Category[]>;
  getCategoryBySlug(slug: string): Promise<Category | null>;
}
```

Additional repositories follow the same shape for `TeamMember`, `Review`,
`Location`, `Offer`, `LoyaltyTier`, `Combo`, `Milestone`, `ProcessStep`,
`BrandValue`, `ImpactStat`, `FAQItem` as each page is built — not all are
needed on day one, so they are added incrementally rather than speculatively.

## Mock Implementation (Phase 1)

```ts
// data/repositories/mock-product-repository.ts
import { products } from "../mock/products";
import type { ProductRepository } from "./product-repository";

export class MockProductRepository implements ProductRepository {
  async getAllProducts() { return products; }
  async getProductBySlug(slug: string) {
    return products.find(p => p.slug === slug) ?? null;
  }
  async getProductsByCategorySlug(categorySlug: string) {
    return products.filter(p => p.categoryId === categorySlug);
  }
  async getFeaturedProducts() { return products.filter(p => p.isFeatured); }
  async getBestSellers() { return products.filter(p => p.isBestSeller); }
}
```

## Swap Point (Future Supabase Migration)
A single factory module is the **only** place that decides which
implementation is active. Nothing else in the codebase imports a concrete
repository class directly.

```ts
// data/index.ts
import { MockProductRepository } from "./repositories/mock-product-repository";
import { MockCategoryRepository } from "./repositories/mock-category-repository";

// Later: swap these two lines for SupabaseProductRepository / SupabaseCategoryRepository.
// No changes required anywhere else in the app.
export const productRepository = new MockProductRepository();
export const categoryRepository = new MockCategoryRepository();
```

Pages (server components) call `productRepository.getFeaturedProducts()` etc.
and pass the typed result down as props — components never import a
repository themselves. This keeps the eventual Supabase migration a
data-layer-only change.

## Mock Data Source
Initial mock data is transcribed directly from the approved Figma content
(product names, descriptions, prices, badges) so the storefront looks
correct from day one. It lives in `data/mock/*.ts` as plain typed arrays —
never inline inside a component or page file.
