import type { Category } from "../types";

export interface CategoryRepository {
  getAllCategories(): Promise<Category[]>;
  getCategoryBySlug(slug: string): Promise<Category | null>;
}
