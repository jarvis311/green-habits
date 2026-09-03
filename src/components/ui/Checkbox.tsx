"use client";

import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, className, id, ...props },
  ref
) {
  const inputId = id ?? `checkbox-${label.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <label htmlFor={inputId} className={cn("inline-flex items-center gap-3 cursor-pointer select-none text-body-sm text-ink", className)}>
      <span className="relative flex size-5 shrink-0 items-center justify-center rounded-sm border border-border bg-white peer-checked:bg-sage">
        <input
          ref={ref}
          id={inputId}
          type="checkbox"
          className="peer absolute inset-0 size-full cursor-pointer opacity-0"
          {...props}
        />
        <Check
          size={14}
          className="pointer-events-none hidden text-white peer-checked:block [.peer:checked+&]:block"
          aria-hidden
        />
      </span>
      {label}
    </label>
  );
});
