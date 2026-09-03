import { categories } from "../mock/categories";
import type { CategoryRepository } from "./category-repository";

export class MockCategoryRepository implements CategoryRepository {
  async getAllCategories() {
    return categories.filter((c) => c.isVisible).sort((a, b) => a.sortOrder - b.sortOrder);
  }

  async getCategoryBySlug(slug: string) {
    return categories.find((c) => c.slug === slug) ?? null;
  }
}
