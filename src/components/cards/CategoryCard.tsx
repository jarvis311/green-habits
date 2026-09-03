import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Category } from "@/data/types";
import { cn } from "@/lib/utils";

export interface CategoryCardProps {
  category: Category;
  itemCount?: number;
  variant?: "card" | "immersive";
  className?: string;
}

export function CategoryCard({ category, itemCount, variant = "card", className }: CategoryCardProps) {
  const href = `/menu/${category.slug}`;

  if (variant === "immersive") {
    const image = category.heroImage ?? category.cardImage;
    return (
      <Link
        href={href}
        className={cn(
          "group relative flex h-[280px] flex-col justify-end overflow-hidden rounded-xl p-6",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage",
          className
        )}
      >
        <Image
          src={image.url}
          alt={image.alt}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-ink/35" aria-hidden />
        <div className="relative flex flex-col gap-1 text-white">
          <span className="font-serif text-[2rem]">{category.name}</span>
          {category.description && <span className="text-body-sm text-white/80">{category.description}</span>}
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={cn(
        "group flex flex-col overflow-hidden rounded-xl border border-border bg-white",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage",
        className
      )}
    >
      <div className="relative h-[220px] w-full overflow-hidden">
        <Image
          src={category.cardImage.url}
          alt={category.cardImage.alt}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-2 p-6">
        <span className="font-serif text-h2 text-ink">{category.name}</span>
        <div className="flex items-center justify-between">
          {typeof itemCount === "number" && (
            <span className="text-body-sm text-muted">{itemCount} Items</span>
          )}
          <span className="ml-auto inline-flex items-center gap-1 text-body-sm font-semibold text-sage underline decoration-from-font">
            View Menu
            <ChevronRight size={12} aria-hidden />
          </span>
        </div>
      </div>
    </Link>
  );
}
