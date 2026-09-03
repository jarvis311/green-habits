"use client";

import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface QuantitySelectorProps {
  value: number;
  onChange: (next: number) => void;
  min?: number;
  max?: number;
  className?: string;
}

export function QuantitySelector({ value, onChange, min = 1, max = 99, className }: QuantitySelectorProps) {
  return (
    <div className={cn("inline-flex items-center gap-4 rounded border border-border px-2 py-1", className)}>
      <button
        type="button"
        aria-label="Decrease quantity"
        disabled={value <= min}
        onClick={() => onChange(Math.max(min, value - 1))}
        className="flex size-11 md:size-6 items-center justify-center text-ink transition-colors hover:text-sage disabled:opacity-40 disabled:pointer-events-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
      >
        <Minus size={14} aria-hidden />
      </button>
      <span className="min-w-4 text-center font-semibold text-body" aria-live="polite">
        {value}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        disabled={value >= max}
        onClick={() => onChange(Math.min(max, value + 1))}
        className="flex size-11 md:size-6 items-center justify-center text-ink transition-colors hover:text-sage disabled:opacity-40 disabled:pointer-events-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
      >
        <Plus size={14} aria-hidden />
      </button>
    </div>
  );
}
