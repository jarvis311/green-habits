import { cn } from "@/lib/utils";

export function Divider({ className }: { className?: string }) {
  return <hr className={cn("w-full border-t border-border", className)} />;
}
