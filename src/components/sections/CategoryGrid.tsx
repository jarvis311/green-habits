import type { Category } from "@/data/types";
import { CategoryCard } from "@/components/cards/CategoryCard";

export interface CategoryGridProps {
  categories: (Category & { itemCount?: number })[];
}

export function CategoryGrid({ categories }: CategoryGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} itemCount={category.itemCount} />
      ))}
    </div>
  );
}
