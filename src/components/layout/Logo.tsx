import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE_NAME } from "@/lib/constants";

export function Logo({ onDark = false, className }: { onDark?: boolean; className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2 font-serif text-h2 md:text-[2rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage rounded-sm",
        onDark ? "text-white" : "text-ink",
        className
      )}
    >
      {SITE_NAME}
      <span className="size-1.5 rounded-sm bg-sage" aria-hidden />
    </Link>
  );
}
