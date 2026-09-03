import { Globe, Leaf, MapPin, Sparkle, User, type LucideIcon } from "lucide-react";
import type { BrandValue } from "@/data/types";

const ICONS: Record<string, LucideIcon> = {
  leaf: Leaf,
  sparkle: Sparkle,
  "map-pin": MapPin,
  globe: Globe,
  user: User,
};

export function ValueCard({ value }: { value: BrandValue }) {
  const Icon = ICONS[value.iconName] ?? Leaf;
  return (
    <div className="flex flex-col gap-4">
      <span className="flex size-12 items-center justify-center rounded-full bg-sage-tint text-sage">
        <Icon size={22} aria-hidden />
      </span>
      <span className="font-semibold text-h3 text-ink">{value.title}</span>
      <p className="text-body-sm text-muted">{value.description}</p>
    </div>
  );
}
