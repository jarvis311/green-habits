import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  eyebrowNumber?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrowNumber,
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 w-full",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <div className="flex items-baseline gap-4">
        {eyebrowNumber && (
          <span className="text-sage font-semibold text-sm shrink-0">{eyebrowNumber}</span>
        )}
        <h2 className="font-serif italic text-[2rem] md:text-[2.5rem] text-ink text-balance">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className={cn("text-muted text-body md:max-w-2xl", align === "center" && "mx-auto")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
