"use client";

import { useMemo, useState } from "react";
import { Star } from "lucide-react";
import type { Product } from "@/data/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { QuantitySelector } from "@/components/ui/QuantitySelector";
import { formatCurrency } from "@/lib/utils";
import { useOrderingToast } from "@/components/feedback/OrderingToast";

export function ProductPurchasePanel({ product }: { product: Product }) {
  const { notify } = useOrderingToast();
  const [variantId, setVariantId] = useState(product.variants?.[0]?.id);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);

  const basePrice = useMemo(() => {
    const variant = product.variants?.find((v) => v.id === variantId);
    return variant?.priceCents ?? product.priceCents;
  }, [product, variantId]);

  const addOnsTotal = useMemo(
    () =>
      (product.addOns ?? [])
        .filter((a) => selectedAddOns.includes(a.id))
        .reduce((sum, a) => sum + a.priceDeltaCents, 0),
    [product.addOns, selectedAddOns]
  );

  const total = (basePrice + addOnsTotal) * quantity;

  function toggleAddOn(id: string) {
    setSelectedAddOns((current) => (current.includes(id) ? current.filter((a) => a !== id) : [...current, id]));
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-3">
          {product.badges.map((badge) => (
            <Badge key={badge.id} label={badge.label} tone={badge.tone} />
          ))}
          {product.rating && (
            <span className="inline-flex items-center gap-1 text-body-sm text-ink">
              <Star size={14} className="fill-clay text-clay" aria-hidden />
              {product.rating.toFixed(1)}
              <span className="text-muted">({product.reviewCount} Reviews)</span>
            </span>
          )}
        </div>
        <div className="flex items-baseline justify-between gap-4">
          <h1 className="font-serif text-h1 text-ink">{product.name}</h1>
          <span className="shrink-0 font-bold text-h2 text-ink">{formatCurrency(basePrice)}</span>
        </div>
        <p className="text-body text-muted">{product.longDescription ?? product.shortDescription}</p>
      </div>

      {product.variants && product.variants.length > 0 && (
        <div className="flex flex-col gap-3">
          <span className="text-overline font-bold uppercase text-ink">Choose Size</span>
          <div className="flex flex-wrap gap-2">
            {product.variants.map((variant) => (
              <button
                key={variant.id}
                type="button"
                aria-pressed={variantId === variant.id}
                onClick={() => setVariantId(variant.id)}
                className={`min-h-[44px] rounded border px-4 py-2 text-body-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage ${
                  variantId === variant.id ? "border-sage bg-sage text-white" : "border-border bg-white text-ink hover:border-sage/50"
                }`}
              >
                {variant.label} • {formatCurrency(variant.priceCents)}
              </button>
            ))}
          </div>
        </div>
      )}

      {product.addOns && product.addOns.length > 0 && (
        <div className="flex flex-col gap-3">
          <span className="text-overline font-bold uppercase text-ink">Upgrade Your Habit</span>
          <div className="flex flex-col gap-2">
            {product.addOns.map((addOn) => {
              const isSelected = selectedAddOns.includes(addOn.id);
              return (
                <label
                  key={addOn.id}
                  className="flex min-h-[44px] cursor-pointer items-center justify-between gap-4 rounded border border-border px-4 py-2 text-body-sm text-ink"
                >
                  <span className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleAddOn(addOn.id)}
                      className="size-4 accent-sage"
                    />
                    {addOn.label}
                  </span>
                  <span className="text-muted">+{formatCurrency(addOn.priceDeltaCents)}</span>
                </label>
              );
            })}
          </div>
        </div>
      )}

      <div className="flex flex-col gap-4 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
        <QuantitySelector value={quantity} onChange={setQuantity} />
        <Button
          size="lg"
          className="w-full md:w-auto"
          disabled={!product.isAvailable}
          onClick={() => notify(`${product.name} — ordering coming soon.`)}
        >
          {product.isAvailable ? `Add to Order • ${formatCurrency(total)}` : "Sold Out"}
        </Button>
      </div>
    </div>
  );
}
