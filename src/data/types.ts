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
  label: string;
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
  label: string;
  priceCents: Cents;
}

export interface ProductAddOn {
  id: string;
  label: string;
  priceDeltaCents: Cents;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description?: string;
  cardImage: Image;
  heroImage?: Image;
  sortOrder: number;
  isVisible: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription?: string;
  priceCents: Cents;
  compareAtPriceCents?: Cents;
  currency: string;
  categoryId: string;
  images: Image[];
  badges: Badge[];
  nutrition?: NutritionFacts;
  variants?: ProductVariant[];
  addOns?: ProductAddOn[];
  rating?: number;
  reviewCount?: number;
  isAvailable: boolean;
  isFeatured: boolean;
  isBestSeller: boolean;
  isChefPick?: boolean;
  createdAt: string;
  updatedAt: string;
}

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
  rating: number;
  quote: string;
  productId?: string;
}

export interface Location {
  id: string;
  name: string;
  addressLine: string;
  hours: string;
  phone?: string;
  isFlagship: boolean;
}

export interface Offer {
  id: string;
  badgeLabel: string;
  validityLabel: string;
  title: string;
  description: string;
  ctaLabel: string;
  image?: Image;
}

export interface LoyaltyTier {
  id: string;
  name: string;
  pointsRange: string;
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
  stepNumber: string;
  title: string;
  description: string;
}

export interface BrandValue {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ImpactStat {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  image: Image;
  caption?: string;
}
