import type { Milestone } from "@/data/types";

export function TimelineMilestone({ milestone }: { milestone: Milestone }) {
  return (
    <div className="flex flex-col gap-2 border-t border-border pt-4">
      <span className="font-serif text-h1 text-sage">{milestone.year}</span>
      <span className="font-semibold text-body-lg text-ink">{milestone.title}</span>
      <p className="text-body-sm text-muted">{milestone.description}</p>
    </div>
  );
}
