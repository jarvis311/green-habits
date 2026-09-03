import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { getDirectionsUrl, getEmbedUrl } from "@/lib/maps";

export interface LocationSectionProps {
  eyebrowPrimary: string;
  eyebrowSecondary?: string;
  title: string;
  description: string;
  address: string;
  hours: string;
  phone?: string;
}

/**
 * Uses a free, no-API-key Google Maps embed + directions link (see
 * docs/implementation-plan.md §5). Swapping to a full Maps SDK later only
 * means changing `src/lib/maps.ts` — this component's markup stays the same.
 */
export function LocationSection({
  eyebrowPrimary,
  eyebrowSecondary,
  title,
  description,
  address,
  hours,
  phone,
}: LocationSectionProps) {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <EyebrowLabel primary={eyebrowPrimary} secondary={eyebrowSecondary} />
          <h2 className="font-serif text-h1 text-ink">{title}</h2>
          <p className="text-body text-muted">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col gap-1">
            <span className="text-overline font-bold uppercase text-sage">Address</span>
            <span className="text-body-sm text-ink">{address}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-overline font-bold uppercase text-sage">Hours of Atelier</span>
            <span className="text-body-sm text-ink">{hours}</span>
          </div>
          {phone && (
            <div className="flex flex-col gap-1">
              <span className="text-overline font-bold uppercase text-sage">Telephone</span>
              <span className="text-body-sm text-ink">{phone}</span>
            </div>
          )}
        </div>
        <a
          href={getDirectionsUrl(address)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit min-h-[44px] items-center justify-center rounded-md bg-sage px-6 py-3.5 text-body-lg font-semibold text-white transition-colors duration-150 hover:bg-sage/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage active:scale-[0.98]"
        >
          Get Directions
        </a>
      </div>
      <div className="h-[320px] w-full overflow-hidden rounded-md lg:h-full">
        <iframe
          title={`Map showing ${address}`}
          src={getEmbedUrl(address)}
          className="size-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
