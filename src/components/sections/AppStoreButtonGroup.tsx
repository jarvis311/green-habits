import { Apple, PlayCircle } from "lucide-react";

export function AppStoreButtonGroup() {
  return (
    <div className="flex flex-wrap gap-4">
      <button
        type="button"
        className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-ink px-5 py-3 text-body-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
      >
        <Apple size={18} aria-hidden />
        iOS App Store
      </button>
      <button
        type="button"
        className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-ink px-5 py-3 text-body-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
      >
        <PlayCircle size={18} aria-hidden />
        Google Play Store
      </button>
    </div>
  );
}
