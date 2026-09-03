"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import type { FAQItem } from "@/data/types";
import { cn } from "@/lib/utils";

export function Accordion({ items }: { items: FAQItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="flex flex-col divide-y divide-border border-t border-border">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const panelId = `faq-panel-${item.id}`;
        const buttonId = `faq-button-${item.id}`;
        return (
          <div key={item.id}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex w-full min-h-[44px] items-center justify-between gap-4 py-5 text-left font-semibold text-body text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
              >
                {item.question}
                <span className="shrink-0 text-sage">
                  {isOpen ? <Minus size={18} aria-hidden /> : <Plus size={18} aria-hidden />}
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn("grid transition-[grid-template-rows] duration-150 ease-out", isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]")}
            >
              <div className="overflow-hidden">
                <p className="text-body-sm text-muted">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
