import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import type { GalleryItem } from "@/data/types";
import { cn } from "@/lib/utils";

export interface InstagramGalleryProps {
  eyebrowPrimary: string;
  eyebrowSecondary?: string;
  /** Eyebrow color — defaults to the sage tone used elsewhere in the app. */
  eyebrowTone?: "sage" | "clay";
  title: string;
  items: GalleryItem[];
  /** Override the default sage outline CTA (e.g. to match an ink-outline treatment). */
  ctaClassName?: string;
}

export function InstagramGallery({
  eyebrowPrimary,
  eyebrowSecondary,
  eyebrowTone = "sage",
  title,
  items,
  ctaClassName,
}: InstagramGalleryProps) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div className="flex flex-col gap-2">
          <EyebrowLabel primary={eyebrowPrimary} secondary={eyebrowSecondary} tone={eyebrowTone} />
          <h2 className="font-serif text-h1 text-ink">{title}</h2>
        </div>
        <Button variant="outline" size="md" className={cn(ctaClassName)}>
          Follow Our Ritual
        </Button>
      </div>
      <div className="flex gap-4 overflow-x-auto scrollbar-none snap-x-mandatory pb-2 -mx-4 px-4 md:mx-0 md:grid md:grid-cols-5 md:gap-4 md:px-0">
        {items.map((item) => (
          <div key={item.id} className="relative aspect-square w-[45%] shrink-0 snap-start overflow-hidden rounded-md md:w-auto">
            <Image src={item.image.url} alt={item.image.alt} fill sizes="220px" className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
