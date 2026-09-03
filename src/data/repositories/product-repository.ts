import type { Product } from "../types";

export interface ProductRepository {
  getAllProducts(): Promise<Product[]>;
  getProductBySlug(slug: string): Promise<Product | null>;
  getProductsByCategorySlug(categorySlug: string): Promise<Product[]>;
  getFeaturedProducts(): Promise<Product[]>;
  getBestSellers(): Promise<Product[]>;
}
