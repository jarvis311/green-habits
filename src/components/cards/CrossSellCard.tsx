"use client";

import Image from "next/image";
import type { Product } from "@/data/types";
import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/lib/utils";
import { useOrderingToast } from "@/components/feedback/OrderingToast";

export function CrossSellCard({ product }: { product: Product }) {
  const { notify } = useOrderingToast();
  const image = product.images[0];
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border bg-white">
      <div className="relative h-[160px] w-full">
        <Image src={image.url} alt={image.alt} fill sizes="280px" className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <span className="font-semibold text-body text-ink">{product.name}</span>
        <p className="text-body-sm text-muted line-clamp-2">{product.shortDescription}</p>
        <div className="mt-auto flex items-center justify-between">
          <span className="font-bold text-body-lg text-ink">{formatCurrency(product.priceCents)}</span>
          <Button size="sm" onClick={() => notify(`${product.name} — ordering coming soon.`)}>
            Add Pair
          </Button>
        </div>
      </div>
    </div>
  );
}
