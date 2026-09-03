export interface PromiseManifestoProps {
  eyebrow: string;
  title: string;
  body: string;
}

export function PromiseManifesto({ eyebrow, title, body }: PromiseManifestoProps) {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
      <span className="text-overline font-bold uppercase text-sage">{eyebrow}</span>
      <h2 className="font-serif text-h1 text-ink text-balance">{title}</h2>
      <p className="text-body-lg text-muted">{body}</p>
    </div>
  );
}
