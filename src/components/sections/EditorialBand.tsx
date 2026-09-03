import Image from "next/image";
import type { Image as ImageType } from "@/data/types";

export interface EditorialBandProps {
  eyebrow: string;
  title: string;
  body: string;
  image: ImageType;
  reverse?: boolean;
}

export function EditorialBand({ eyebrow, title, body, image, reverse = false }: EditorialBandProps) {
  return (
    <div className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16 ${reverse ? "" : ""}`}>
      <div className={`relative h-[280px] w-full overflow-hidden rounded-md md:h-[380px] ${reverse ? "lg:order-2" : ""}`}>
        <Image src={image.url} alt={image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-overline font-bold uppercase text-sage">{eyebrow}</span>
        <h2 className="font-serif text-h1 text-ink text-balance">{title}</h2>
        <p className="text-body text-muted">{body}</p>
      </div>
    </div>
  );
}
