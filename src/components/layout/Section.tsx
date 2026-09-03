import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface SectionProps {
  children: ReactNode;
  background?: "cream" | "sand" | "ink" | "white";
  divider?: "top" | "none";
  className?: string;
  innerClassName?: string;
}

const backgroundClasses: Record<NonNullable<SectionProps["background"]>, string> = {
  cream: "bg-cream",
  sand: "bg-sand",
  ink: "bg-ink text-white",
  white: "bg-white",
};

/** Standard section wrapper: shared responsive padding + optional top divider. */
export function Section({
  children,
  background = "cream",
  divider = "top",
  className,
  innerClassName,
}: SectionProps) {
  return (
    <section
      className={cn(
        "px-4 py-12 md:px-10 md:py-16 lg:px-20 lg:py-[120px]",
        backgroundClasses[background],
        divider === "top" && "border-t border-border",
        className
      )}
    >
      <div className={cn("mx-auto flex max-w-content flex-col gap-12 md:gap-16", innerClassName)}>
        {children}
      </div>
    </section>
  );
}
