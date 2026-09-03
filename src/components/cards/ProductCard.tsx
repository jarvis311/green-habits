"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import type { Product } from "@/data/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { useOrderingToast } from "@/components/feedback/OrderingToast";

export interface ProductCardProps {
  product: Product;
  layout?: "vertical" | "horizontal";
  /** Horizontal layout only — mirrors the card so the image sits on the right. */
  imageSide?: "left" | "right";
  /** Phase 1 has no cart — defaults to a placeholder toast (see docs/implementation-plan.md §6). */
  onAddToOrder?: (product: Product) => void;
  className?: string;
}

export function ProductCard({
  product,
  layout = "vertical",
  imageSide = "left",
  onAddToOrder,
  className,
}: ProductCardProps) {
  const { notify } = useOrderingToast();
  const primaryImage = product.images[0];
  const href = `/menu/${product.categoryId}/${product.slug}`;

  function handleAddToOrder(e: React.MouseEvent) {
    e.preventDefault();
    if (onAddToOrder) {
      onAddToOrder(product);
    } else {
      notify(`${product.name} — ordering coming soon.`);
    }
  }

  if (layout === "horizontal") {
    return (
      <div
        className={cn(
          "flex overflow-hidden rounded-lg border border-border bg-white",
          imageSide === "right" && "flex-row-reverse",
          className
        )}
      >
        <Link href={href} className="relative h-full w-[45%] shrink-0 md:w-[260px]" tabIndex={-1}>
          <Image
            src={primaryImage.url}
            alt={primaryImage.alt}
            fill
            sizes="260px"
            className="object-cover"
          />
        </Link>
        <div className="flex flex-1 min-w-0 flex-col justify-between gap-3 p-4 md:p-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-start justify-between gap-2 text-ink">
              <Link
                href={href}
                className="font-serif text-h2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage rounded-sm"
              >
                {product.name}
              </Link>
              <span className="shrink-0 font-bold text-h4">{formatCurrency(product.priceCents, product.currency)}</span>
            </div>
            <p className="text-body-sm text-muted line-clamp-2">{product.shortDescription}</p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-wrap gap-1.5">
              {product.badges.map((badge) => (
                <Badge key={badge.id} label={badge.label} tone={badge.tone} />
              ))}
            </div>
            <Button
              size="md"
              variant="tertiary"
              className="bg-ink text-white hover:bg-ink/90 shrink-0"
              leadingIcon={<Plus size={14} aria-hidden />}
              onClick={handleAddToOrder}
              disabled={!product.isAvailable}
            >
              Customize
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col overflow-hidden rounded-lg border border-border bg-white", className)}>
      <Link href={href} className="relative block h-[200px] w-full shrink-0 md:h-[220px]">
        <Image src={primaryImage.url} alt={primaryImage.alt} fill sizes="320px" className="object-cover" />
        {!product.isAvailable && (
          <span className="absolute inset-x-0 top-0 bg-ink/80 py-1.5 text-center text-caption font-semibold uppercase text-white">
            Sold Out
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-4 p-5">
        {product.badges.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {product.badges.map((badge) => (
              <Badge key={badge.id} label={badge.label} tone={badge.tone} />
            ))}
          </div>
        )}
        <div className="flex flex-col gap-1">
          <Link
            href={href}
            className="font-serif text-h2 text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage rounded-sm"
          >
            {product.name}
          </Link>
          <p className="text-body-sm text-muted line-clamp-2">{product.shortDescription}</p>
        </div>
        <div className="mt-auto flex items-center justify-between border-t border-border pt-2">
          <span className="font-bold text-h4 text-ink">{formatCurrency(product.priceCents, product.currency)}</span>
          <Button size="md" onClick={handleAddToOrder} disabled={!product.isAvailable}>
            {product.isAvailable ? "Add to Order" : "Sold Out"}
          </Button>
        </div>
      </div>
    </div>
  );
}
