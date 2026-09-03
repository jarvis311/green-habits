import type { Product } from "@/data/types";
import { ProductCard } from "@/components/cards/ProductCard";
import { cn } from "@/lib/utils";

export interface ProductGridProps {
  products: Product[];
  columns?: 3 | 4;
  /** Mobile collapses to a horizontal-scroll row instead of stacking (per docs/responsive-strategy.md). */
  scrollOnMobile?: boolean;
  emptyMessage?: string;
}

const columnClasses: Record<3 | 4, string> = {
  3: "md:grid-cols-2 lg:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
};

export function ProductGrid({
  products,
  columns = 3,
  scrollOnMobile = true,
  emptyMessage = "No dishes match these filters yet.",
}: ProductGridProps) {
  if (products.length === 0) {
    return <p className="py-12 text-center text-body text-muted">{emptyMessage}</p>;
  }

  if (scrollOnMobile) {
    return (
      <div
        className={cn(
          "flex gap-4 overflow-x-auto scrollbar-none snap-x-mandatory pb-2 -mx-4 px-4",
          "md:mx-0 md:px-0 md:grid md:gap-6",
          columnClasses[columns]
        )}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="min-w-[80%] snap-start md:min-w-0"
          />
        ))}
      </div>
    );
  }

  return (
    <div className={cn("grid grid-cols-1 gap-6", columnClasses[columns])}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
