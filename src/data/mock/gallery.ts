import type { GalleryItem } from "../types";

/** Used for the Instagram-style gallery rows on the Homepage and Experience page. */
export const instagramGallery: GalleryItem[] = [
  { id: "ig-1", image: { id: "ig-1-img", url: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&q=80", alt: "Avocado toast plated" } },
  { id: "ig-2", image: { id: "ig-2-img", url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&q=80", alt: "Matcha latte close up" } },
  { id: "ig-3", image: { id: "ig-3-img", url: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80", alt: "Cafe interior seating area" } },
  { id: "ig-4", image: { id: "ig-4-img", url: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&q=80", alt: "Fresh salad bowl" } },
  { id: "ig-5", image: { id: "ig-5-img", url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80", alt: "Bakery pastries display" } },
];

export const spaceGallery: GalleryItem[] = [
  { id: "space-1", image: { id: "space-1-img", url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", alt: "Garden courtyard seating" }, caption: "The Garden Courtyard" },
  { id: "space-2", image: { id: "space-2-img", url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80", alt: "Coffee brew bar" }, caption: "The Brew Bar" },
  { id: "space-3", image: { id: "space-3-img", url: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80", alt: "Cozy reading library corner" }, caption: "The Quiet Library" },
];
