import type { ReactNode } from "react";

export interface EmptyStateProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-3 py-16 text-center">
      <span className="font-serif text-h2 text-ink">{title}</span>
      {description && <p className="max-w-sm text-body-sm text-muted">{description}</p>}
      {action}
    </div>
  );
}
