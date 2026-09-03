import type { MetadataRoute } from "next";
import { categoryRepository, productRepository } from "@/data";
import { SITE_URL } from "@/lib/constants";

const staticRoutes = ["", "/menu", "/about", "/experience", "/offers", "/contact"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [categories, products] = await Promise.all([
    categoryRepository.getAllCategories(),
    productRepository.getAllProducts(),
  ]);

  const staticEntries = staticRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));

  const categoryEntries = categories.map((category) => ({
    url: `${SITE_URL}/menu/${category.slug}`,
    lastModified: new Date(),
  }));

  const productEntries = products.map((product) => ({
    url: `${SITE_URL}/menu/${product.categoryId}/${product.slug}`,
    lastModified: product.updatedAt,
  }));

  return [...staticEntries, ...categoryEntries, ...productEntries];
}
