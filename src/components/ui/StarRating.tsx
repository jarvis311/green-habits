import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StarRatingProps {
  value: number;
  max?: number;
  size?: number;
  className?: string;
}

export function StarRating({ value, max = 5, size = 14, className }: StarRatingProps) {
  return (
    <div
      className={cn("flex items-center gap-0.5", className)}
      role="img"
      aria-label={`Rated ${value} out of ${max} stars`}
    >
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          width={size}
          height={size}
          className={i < Math.round(value) ? "fill-clay text-clay" : "fill-none text-border"}
          aria-hidden
        />
      ))}
    </div>
  );
}
