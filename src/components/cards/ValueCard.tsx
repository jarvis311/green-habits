import { Globe, Leaf, MapPin, Sparkle, User, type LucideIcon } from "lucide-react";
import type { BrandValue } from "@/data/types";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  leaf: Leaf,
  sparkle: Sparkle,
  "map-pin": MapPin,
  globe: Globe,
  user: User,
};

export interface ValueCardProps {
  value: BrandValue;
  /** "card" wraps the content in a bordered white surface (used on the homepage). */
  variant?: "plain" | "card";
}

export function ValueCard({ value, variant = "plain" }: ValueCardProps) {
  const Icon = ICONS[value.iconName] ?? Leaf;
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        variant === "card" && "rounded-lg border border-border bg-white p-6 md:p-8"
      )}
    >
      <span className="flex size-12 items-center justify-center rounded-full bg-sage-tint text-sage">
        <Icon size={22} aria-hidden />
      </span>
      <span className={cn("text-h3 text-ink", variant === "card" ? "font-serif" : "font-semibold")}>
        {value.title}
      </span>
      <p className="text-body-sm text-muted">{value.description}</p>
    </div>
  );
}
