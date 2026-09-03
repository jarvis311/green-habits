import { cn } from "@/lib/utils";

export interface EyebrowLabelProps {
  primary: string;
  secondary?: string;
  onDark?: boolean;
  className?: string;
}

export function EyebrowLabel({ primary, secondary, onDark = false, className }: EyebrowLabelProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span
        className={cn(
          "font-bold text-overline uppercase",
          onDark ? "text-white" : "text-sage"
        )}
      >
        {primary}
      </span>
      {secondary && (
        <>
          <span className={cn("h-px w-6", onDark ? "bg-white/60" : "bg-sage")} aria-hidden />
          <span className="font-medium text-overline text-clay">{secondary}</span>
        </>
      )}
    </div>
  );
}
