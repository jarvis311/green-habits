"use client";

import Image from "next/image";
import type { Offer } from "@/data/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function OfferCard({ offer, onClaim }: { offer: Offer; onClaim?: (offer: Offer) => void }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-border bg-white">
      {offer.image && (
        <div className="relative h-[140px] w-full">
          <Image src={offer.image.url} alt={offer.image.alt} fill sizes="320px" className="object-cover" />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-center justify-between">
          <Badge label={offer.badgeLabel} tone="promo" />
          <span className="text-body-sm text-muted">{offer.validityLabel}</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-serif text-h2 text-ink">{offer.title}</span>
          <p className="text-body-sm text-muted">{offer.description}</p>
        </div>
        <Button variant="outline" size="md" className="mt-auto w-fit" onClick={() => onClaim?.(offer)}>
          {offer.ctaLabel}
        </Button>
      </div>
    </div>
  );
}
