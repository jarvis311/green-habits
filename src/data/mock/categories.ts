import type { Category } from "../types";

/**
 * Placeholder photography: stable, freely-hotlinkable Unsplash images
 * standing in for the final commissioned Figma photography (whose exported
 * asset URLs expire ~7 days after export). Swap `cardImage`/`heroImage` for
 * real asset URLs (or Supabase Storage URLs) when available — no other
 * change is needed anywhere else in the app.
 */
export const categories: Category[] = [
  {
    id: "italian-specialties",
    slug: "italian-specialties",
    name: "Italian Specialties",
    description: "Heritage wheat crusts, slow sauces, and hand-rolled pasta.",
    cardImage: {
      id: "cat-italian",
      url: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=800&q=80",
      alt: "Fresh Italian pasta dish on a rustic table",
    },
    sortOrder: 1,
    isVisible: true,
  },
  {
    id: "mexican-kitchen",
    slug: "mexican-kitchen",
    name: "Mexican Kitchen",
    description: "Colorful, zestful plates built on organic corn and chiles.",
    cardImage: {
      id: "cat-mexican",
      url: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&q=80",
      alt: "Fresh tacos with garnish on a wooden board",
    },
    sortOrder: 2,
    isVisible: true,
  },
  {
    id: "burgers-sandwiches",
    slug: "burgers-sandwiches",
    name: "Burgers & Sandwiches",
    description: "Slow-fermented brioche buns, pasture-raised proteins.",
    cardImage: {
      id: "cat-burgers",
      url: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80",
      alt: "Gourmet burger with crispy fries",
    },
    sortOrder: 3,
    isVisible: true,
  },
  {
    id: "coffee-beverages",
    slug: "coffee-beverages",
    name: "Coffee & Beverages",
    description: "Direct-trade beans, ceremonial matcha, cold-pressed juices.",
    cardImage: {
      id: "cat-coffee",
      url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
      alt: "Matcha latte and iced coffee on a table",
    },
    sortOrder: 4,
    isVisible: true,
  },
  {
    id: "healthy-harvest-bowls",
    slug: "healthy-harvest-bowls",
    name: "Healthy Harvest Bowls",
    description: "Nutrient-dense grain bowls balanced by our nutritionist.",
    cardImage: {
      id: "cat-bowls",
      url: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
      alt: "Colorful grain bowl with fresh vegetables",
    },
    sortOrder: 5,
    isVisible: true,
  },
  {
    id: "artisanal-snacks-plates",
    slug: "artisanal-snacks-plates",
    name: "Artisanal Snacks & Plates",
    description: "Stone-ground pastries and shareable small plates.",
    cardImage: {
      id: "cat-snacks",
      url: "https://images.unsplash.com/photo-1541599468348-e96984315921?w=800&q=80",
      alt: "Artisanal bakery plate with pastries",
    },
    sortOrder: 6,
    isVisible: true,
  },
];
