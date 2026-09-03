import Image from "next/image";
import type { ReactNode } from "react";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import type { Image as ImageType } from "@/data/types";

export interface HeroSplitProps {
  eyebrowPrimary: string;
  eyebrowSecondary?: string;
  title: string;
  description: string;
  image: ImageType;
  actions?: ReactNode;
  socialProof?: ReactNode;
}

export function HeroSplit({
  eyebrowPrimary,
  eyebrowSecondary,
  title,
  description,
  image,
  actions,
  socialProof,
}: HeroSplitProps) {
  return (
    <section className="flex flex-col items-center gap-10 px-4 pb-12 pt-10 md:flex-row md:gap-12 md:px-10 md:pb-16 md:pt-20 lg:gap-16 lg:px-20 lg:pb-24 lg:pt-32">
      <div className="flex flex-1 flex-col items-start gap-6 md:gap-8">
        <EyebrowLabel primary={eyebrowPrimary} secondary={eyebrowSecondary} />
        <h1 className="font-serif text-[2.75rem] leading-[0.98] text-ink [font-size:clamp(2.25rem,6vw+1rem,4.75rem)]">
          {title}
        </h1>
        <p className="max-w-xl text-body-lg text-muted">{description}</p>
        {actions && <div className="flex flex-wrap items-center gap-4">{actions}</div>}
        {socialProof && <div className="pt-2">{socialProof}</div>}
      </div>
      <div className="relative h-[320px] w-full overflow-hidden rounded-md md:h-[420px] lg:h-[520px] lg:w-[640px] lg:shrink-0">
        <Image src={image.url} alt={image.alt} fill sizes="(min-width: 1024px) 640px, 100vw" priority className="object-cover" />
      </div>
    </section>
  );
}
