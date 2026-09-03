import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { productRepository } from "@/data";
import { reviews as allReviews } from "@/data/mock/reviews";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { NutritionFactsPanel } from "@/components/sections/NutritionFactsPanel";
import { ProductPurchasePanel } from "@/components/sections/ProductPurchasePanel";
import { ProductGrid } from "@/components/sections/ProductGrid";
import { ReviewCard } from "@/components/cards/ReviewCard";
import { pageMetadata } from "@/lib/seo";

interface ProductPageProps {
  params: { category: string; product: string };
}

export async function generateStaticParams() {
  const products = await productRepository.getAllProducts();
  return products.map((product) => ({ category: product.categoryId, product: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await productRepository.getProductBySlug(params.product);
  if (!product) return { title: "Product" };
  return pageMetadata({
    title: product.name,
    description: product.shortDescription,
    path: `/menu/${product.categoryId}/${product.slug}`,
    image: product.images[0]?.url,
  });
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const product = await productRepository.getProductBySlug(params.product);
  if (!product || product.categoryId !== params.category) notFound();

  const [allProducts, productReviews] = await Promise.all([
    productRepository.getAllProducts(),
    Promise.resolve(allReviews.filter((r) => r.productId === product.id)),
  ]);

  const relatedProducts = allProducts.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <>
      <Section background="cream" divider="none">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-6">
            <div className="relative h-[360px] w-full overflow-hidden rounded-lg md:h-[440px]">
              <Image
                src={product.images[0].url}
                alt={product.images[0].alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
                className="object-cover"
              />
            </div>
            {product.nutrition && (
              <div className="rounded-lg bg-ink p-6">
                <NutritionFactsPanel nutrition={product.nutrition} />
              </div>
            )}
          </div>
          <ProductPurchasePanel product={product} />
        </div>
      </Section>

      {productReviews.length > 0 && (
        <Section background="sand">
          <SectionHeader title="Verified Habit Reviews" subtitle="Guest experiences" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {productReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </Section>
      )}

      <Section background="cream">
        <SectionHeader title="Complete Your Daily Habit" />
        <ProductGrid products={relatedProducts} columns={4} />
      </Section>
    </>
  );
}
