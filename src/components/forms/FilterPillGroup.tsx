"use client";

import { cn } from "@/lib/utils";

export interface FilterPillOption {
  value: string;
  label: string;
}

export interface FilterPillGroupProps {
  options: FilterPillOption[];
  selected: string[];
  onToggle: (value: string) => void;
  className?: string;
}

export function FilterPillGroup({ options, selected, onToggle, className }: FilterPillGroupProps) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)} role="group">
      {options.map((option) => {
        const isSelected = selected.includes(option.value);
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={isSelected}
            onClick={() => onToggle(option.value)}
            className={cn(
              "min-h-[44px] rounded-full border px-4 py-2 text-body-sm font-medium transition-colors duration-150",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage",
              isSelected
                ? "border-sage bg-sage text-white"
                : "border-border bg-white text-ink hover:border-sage/50"
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
