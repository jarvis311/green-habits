"use client";

import { cn } from "@/lib/utils";

export interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  className?: string;
}

export function Toggle({ checked, onChange, label, className }: ToggleProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={cn(
        "inline-flex items-center gap-3 text-body-sm text-ink",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage rounded-full",
        className
      )}
    >
      <span
        className={cn(
          "relative h-6 w-11 rounded-full transition-colors duration-150",
          checked ? "bg-sage" : "bg-border"
        )}
      >
        <span
          className={cn(
            "absolute top-0.5 size-5 rounded-full bg-white transition-transform duration-150",
            checked ? "translate-x-[22px]" : "translate-x-0.5"
          )}
        />
      </span>
      {label}
    </button>
  );
}
