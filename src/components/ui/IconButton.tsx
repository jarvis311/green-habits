import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  "aria-label": string;
  variant?: "default" | "on-dark" | "circle";
}

// Each variant owns its full size string so breakpoint utilities never collide.
const variantClasses: Record<NonNullable<IconButtonProps["variant"]>, string> = {
  default: "size-11 md:size-5 text-ink hover:text-sage",
  "on-dark": "size-11 md:size-5 text-white hover:text-white/70",
  circle: "size-11 md:size-9 rounded-full bg-white/10 text-white hover:bg-white/20",
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { icon, variant = "default", className, ...props },
  ref
) {
  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        "inline-flex shrink-0 items-center justify-center",
        "transition-colors duration-150 ease-out",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage",
        "disabled:opacity-50 disabled:pointer-events-none",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {icon}
    </button>
  );
});
