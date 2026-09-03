import Image from "next/image";
import type { Image as ImageType } from "@/data/types";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { cn } from "@/lib/utils";

export interface HeroFullBleedProps {
  eyebrowPrimary: string;
  eyebrowSecondary?: string;
  title: string;
  description?: string;
  image: ImageType;
  height?: "sm" | "md" | "lg";
}

const heightClasses: Record<NonNullable<HeroFullBleedProps["height"]>, string> = {
  sm: "h-[280px] md:h-[340px]",
  md: "h-[360px] md:h-[480px]",
  lg: "h-[480px] md:h-[640px] lg:h-[800px]",
};

export function HeroFullBleed({
  eyebrowPrimary,
  eyebrowSecondary,
  title,
  description,
  image,
  height = "md",
}: HeroFullBleedProps) {
  return (
    <section className={cn("relative flex items-end", heightClasses[height])}>
      <Image src={image.url} alt={image.alt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-ink/40" aria-hidden />
      <div className="relative flex w-full flex-col gap-4 px-4 pb-10 text-white md:px-10 md:pb-14 lg:px-20 lg:pb-20">
        <EyebrowLabel primary={eyebrowPrimary} secondary={eyebrowSecondary} onDark />
        <h1 className="max-w-3xl font-serif text-[2.25rem] leading-tight [font-size:clamp(2rem,4vw+1rem,3.5rem)]">
          {title}
        </h1>
        {description && <p className="max-w-xl text-body-lg text-white/85">{description}</p>}
      </div>
    </section>
  );
}
