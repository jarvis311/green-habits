import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import type { GalleryItem } from "@/data/types";

export interface InstagramGalleryProps {
  eyebrowPrimary: string;
  eyebrowSecondary?: string;
  title: string;
  items: GalleryItem[];
}

export function InstagramGallery({ eyebrowPrimary, eyebrowSecondary, title, items }: InstagramGalleryProps) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div className="flex flex-col gap-2">
          <EyebrowLabel primary={eyebrowPrimary} secondary={eyebrowSecondary} />
          <h2 className="font-serif text-h1 text-ink">{title}</h2>
        </div>
        <Button variant="outline" size="md">
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
