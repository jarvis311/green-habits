import type { ImpactStat } from "@/data/types";

export function StatCounter({ stat }: { stat: ImpactStat }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-serif text-display-xl text-sage">{stat.value}</span>
      <span className="text-overline font-bold uppercase text-ink">{stat.label}</span>
      <p className="text-body-sm text-muted">{stat.description}</p>
    </div>
  );
}
