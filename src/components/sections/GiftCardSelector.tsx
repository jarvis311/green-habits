"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useOrderingToast } from "@/components/feedback/OrderingToast";

const AMOUNTS = [25, 50, 100, 200];

export function GiftCardSelector() {
  const [amount, setAmount] = useState(AMOUNTS[0]);
  const { notify } = useOrderingToast();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-3">
        {AMOUNTS.map((value) => (
          <button
            key={value}
            type="button"
            aria-pressed={amount === value}
            onClick={() => setAmount(value)}
            className={`min-h-[44px] min-w-[80px] rounded border px-5 py-2.5 text-body font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage ${
              amount === value ? "border-sage bg-sage text-white" : "border-border bg-white text-ink hover:border-sage/50"
            }`}
          >
            ${value}
          </button>
        ))}
      </div>
      <Button size="lg" className="w-fit" onClick={() => notify(`$${amount} gift card — purchasing coming soon.`)}>
        Purchase Gift Card
      </Button>
    </div>
  );
}
