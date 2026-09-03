import type { LoyaltyTier } from "@/data/types";

export function LoyaltyTierCard({ tier }: { tier: LoyaltyTier }) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-border bg-white p-6">
      <div className="flex items-baseline justify-between">
        <span className="text-overline font-bold uppercase text-sage">{tier.name}</span>
        <span className="text-body-sm text-muted">{tier.pointsRange}</span>
      </div>
      <span className="font-serif text-h2 text-ink">{tier.perkTitle}</span>
      <p className="text-body-sm text-muted">{tier.perkDescription}</p>
    </div>
  );
}
