import type { ProcessStep } from "@/data/types";

export function ProcessStepCard({ step }: { step: ProcessStep }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="font-serif text-display text-sage">{step.stepNumber}</span>
      <span className="font-semibold text-h3 text-ink">{step.title}</span>
      <p className="text-body-sm text-muted">{step.description}</p>
    </div>
  );
}
