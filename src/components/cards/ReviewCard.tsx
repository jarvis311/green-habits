import type { Review } from "@/data/types";
import { StarRating } from "@/components/ui/StarRating";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-border bg-white p-6">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-body text-ink">{review.authorName}</span>
        <StarRating value={review.rating} />
      </div>
      <p className="text-body-sm text-muted">&ldquo;{review.quote}&rdquo;</p>
    </div>
  );
}
