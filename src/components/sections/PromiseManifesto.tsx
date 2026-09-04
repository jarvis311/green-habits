export interface PromiseManifestoProps {
  eyebrow: string;
  /** Eyebrow color — defaults to the sage tone used elsewhere in the app. */
  eyebrowTone?: "sage" | "clay";
  title: string;
  body: string;
}

export function PromiseManifesto({ eyebrow, eyebrowTone = "sage", title, body }: PromiseManifestoProps) {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
      <span className={`text-overline font-bold uppercase ${eyebrowTone === "clay" ? "text-clay" : "text-sage"}`}>
        {eyebrow}
      </span>
      <h2 className="font-serif text-h1 text-ink text-balance">{title}</h2>
      <p className="text-body-lg text-muted">{body}</p>
    </div>
  );
}
