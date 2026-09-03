import { products } from "../mock/products";
import type { ProductRepository } from "./product-repository";

export class MockProductRepository implements ProductRepository {
  async getAllProducts() {
    return products;
  }

  async getProductBySlug(slug: string) {
    return products.find((p) => p.slug === slug) ?? null;
  }

  async getProductsByCategorySlug(categorySlug: string) {
    return products.filter((p) => p.categoryId === categorySlug);
  }

  async getFeaturedProducts() {
    return products.filter((p) => p.isFeatured);
  }

  async getBestSellers() {
    return products.filter((p) => p.isBestSeller);
  }
}
