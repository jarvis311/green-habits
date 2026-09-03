import { ArrowUpRight } from "lucide-react";
import type { Location } from "@/data/types";
import { getDirectionsUrl } from "@/lib/maps";

export function LocationCard({ location }: { location: Location }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span className="text-overline font-bold uppercase text-sage">
          {location.isFlagship ? "Flagship Atelier" : "Sister Sanctuary"}
        </span>
        <span className="font-serif text-h2 text-ink">{location.name.split("—")[1]?.trim() ?? location.name}</span>
      </div>
      <p className="text-body-sm text-muted">
        {location.addressLine} — {location.hours}
      </p>
      <hr className="border-border" />
      <a
        href={getDirectionsUrl(location.addressLine)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-fit items-center gap-1 text-body-sm font-semibold text-sage underline decoration-from-font focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage rounded-sm"
      >
        Get Directions
        <ArrowUpRight size={14} aria-hidden />
      </a>
    </div>
  );
}
