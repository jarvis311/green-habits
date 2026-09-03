import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categoryRepository, productRepository } from "@/data";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { HeroFullBleed } from "@/components/sections/HeroFullBleed";
import { CategoryProductBrowser } from "@/components/sections/CategoryProductBrowser";
import { CrossSellCard } from "@/components/cards/CrossSellCard";
import { pageMetadata } from "@/lib/seo";

interface CategoryPageProps {
  params: { category: string };
}

export async function generateStaticParams() {
  const categories = await categoryRepository.getAllCategories();
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = await categoryRepository.getCategoryBySlug(params.category);
  if (!category) return { title: "Menu Category" };
  return pageMetadata({
    title: category.name,
    description: category.description ?? `Explore ${category.name} on the Green Habit menu.`,
    path: `/menu/${category.slug}`,
    image: category.cardImage.url,
  });
}

export default async function MenuCategoryPage({ params }: CategoryPageProps) {
  const category = await categoryRepository.getCategoryBySlug(params.category);
  if (!category) notFound();

  const [products, allProducts] = await Promise.all([
    productRepository.getProductsByCategorySlug(category.slug),
    productRepository.getAllProducts(),
  ]);

  const crossSell = allProducts.filter((p) => p.categoryId !== category.slug).slice(0, 2);

  return (
    <>
      <HeroFullBleed
        eyebrowPrimary="Menu Category"
        title={category.name}
        description={category.description}
        image={category.heroImage ?? category.cardImage}
        height="sm"
      />

      <Section background="cream">
        <CategoryProductBrowser products={products} />
      </Section>

      {crossSell.length > 0 && (
        <Section background="sand">
          <SectionHeader title={`Perfect ${category.name} Pairings`} subtitle="Recommended combinations from our kitchen." />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {crossSell.map((product) => (
              <CrossSellCard key={product.id} product={product} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
