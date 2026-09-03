import { MockProductRepository } from "./repositories/mock-product-repository";
import { MockCategoryRepository } from "./repositories/mock-category-repository";

/**
 * Single swap point for the Supabase migration. Pages/components only ever
 * import `productRepository`/`categoryRepository` from here — never a
 * concrete repository class directly — so replacing the two lines below
 * with Supabase-backed implementations is the entire migration.
 */
export const productRepository = new MockProductRepository();
export const categoryRepository = new MockCategoryRepository();

export type { ProductRepository } from "./repositories/product-repository";
export type { CategoryRepository } from "./repositories/category-repository";
export * from "./types";
