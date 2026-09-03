/**
 * Lucide (v1) ships no brand/logo icons at all (they were removed
 * project-wide for trademark reasons) — see docs/implementation-plan.md §3.
 * These three minimal outline glyphs are the one narrow, justified exception
 * to "use Lucide, don't hand-roll icons": there is no Lucide equivalent to
 * fall back to for third-party social brand marks.
 */
export type SocialIconName = "instagram" | "facebook" | "twitter";

const paths: Record<SocialIconName, React.ReactNode> = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: (
    <path d="M15 3h-2a5 5 0 0 0-5 5v2H6v4h2v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3z" />
  ),
  twitter: (
    <path d="M4 4l16 16M20 4L4 20" />
  ),
};

export function SocialIcon({ name, size = 16 }: { name: SocialIconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {paths[name]}
    </svg>
  );
}
