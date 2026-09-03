import { forwardRef } from "react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "outline"
  | "ghost"
  | "link";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 font-sans font-semibold whitespace-nowrap " +
  "transition-colors duration-150 ease-out select-none " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage " +
  "active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-sage text-white hover:bg-sage/90",
  secondary: "bg-clay text-white hover:bg-clay/90",
  tertiary: "bg-sand text-ink border border-border hover:bg-sand/70",
  outline: "bg-transparent text-sage border-[1.5px] border-sage hover:bg-sage/5",
  ghost: "bg-transparent text-ink hover:bg-ink/5",
  link: "bg-transparent text-clay underline decoration-from-font p-0 h-auto hover:text-clay/80",
};

const sizeClasses: Record<ButtonVariant, Record<ButtonSize, string>> = {
  primary: { sm: "text-xs px-3 py-1.5 rounded-sm", md: "text-[13px] px-5 py-2.5 rounded", lg: "text-body-lg px-6 py-3.5 rounded-md" },
  secondary: { sm: "text-xs px-3 py-1.5 rounded-sm", md: "text-[13px] px-5 py-2.5 rounded", lg: "text-body-lg px-6 py-3.5 rounded-md" },
  tertiary: { sm: "text-xs px-3 py-1.5 rounded-sm", md: "text-[13px] px-5 py-2.5 rounded", lg: "text-body-lg px-6 py-3.5 rounded-md" },
  outline: { sm: "text-xs px-3 py-1.5 rounded-sm", md: "text-[13px] px-5 py-2.5 rounded", lg: "text-body-lg px-6 py-3.5 rounded-md" },
  ghost: { sm: "text-xs px-3 py-1.5 rounded-sm", md: "text-[13px] px-5 py-2.5 rounded", lg: "text-body-lg px-6 py-3.5 rounded-md" },
  link: { sm: "text-body-sm", md: "text-body-sm", lg: "text-body" },
};

// Touch-target guarantee on small/medium buttons without changing the visible size.
const touchTarget = "min-h-[44px] md:min-h-0";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "primary",
    size = "md",
    isLoading = false,
    leadingIcon,
    trailingIcon,
    disabled,
    className,
    children,
    ...props
  },
  ref
) {
  const isLink = variant === "link";
  return (
    <button
      ref={ref}
      className={cn(
        base,
        variantClasses[variant],
        sizeClasses[variant][size],
        !isLink && touchTarget,
        className
      )}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="size-4 animate-spin" aria-hidden />
      ) : (
        leadingIcon
      )}
      {children}
      {!isLoading && trailingIcon}
    </button>
  );
});
