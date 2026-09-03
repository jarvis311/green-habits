import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import type { BadgeTone } from "@/data/types";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  label: string;
  tone?: BadgeTone;
}

const toneClasses: Record<BadgeTone, string> = {
  dietary: "bg-sage-tint text-sage rounded-full",
  status: "bg-clay-tint text-clay rounded-sm",
  promo: "bg-ink text-white rounded-sm",
  neutral: "bg-sand text-ink rounded-sm",
};

export function Badge({ label, tone = "neutral", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1.5 text-[11px] font-semibold whitespace-nowrap leading-none",
        toneClasses[tone],
        className
      )}
      {...props}
    >
      {label}
    </span>
  );
}
