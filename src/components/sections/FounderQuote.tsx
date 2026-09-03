export interface FounderQuoteProps {
  quote: string;
  attribution: string;
}

export function FounderQuote({ quote, attribution }: FounderQuoteProps) {
  return (
    <figure className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
      <blockquote className="font-serif text-h1 italic text-ink text-balance">&ldquo;{quote}&rdquo;</blockquote>
      <figcaption className="text-overline font-bold uppercase text-sage">— {attribution}</figcaption>
    </figure>
  );
}
