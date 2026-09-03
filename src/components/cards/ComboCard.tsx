"use client";

import type { Combo } from "@/data/types";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/lib/utils";
import { useOrderingToast } from "@/components/feedback/OrderingToast";

export function ComboCard({ combo }: { combo: Combo }) {
  const { notify } = useOrderingToast();
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-border bg-white p-6">
      <Badge label={combo.badgeLabel} tone="promo" />
      <div className="flex flex-col gap-2">
        <span className="font-serif text-h2 text-ink">{combo.title}</span>
        <p className="text-body-sm text-muted">{combo.description}</p>
      </div>
      <div className="mt-auto flex items-center justify-between">
        <span className="font-bold text-h4 text-ink">{formatCurrency(combo.priceCents)}</span>
        <Button size="md" onClick={() => notify(`${combo.title} — ordering coming soon.`)}>
          Select Combo
        </Button>
      </div>
    </div>
  );
}
