type ClassValue = string | number | false | null | undefined;

/**
 * Minimal class-name joiner. Deliberately does not pull in `clsx` /
 * `tailwind-merge` — our variant maps never produce conflicting utility
 * classes, so a plain filter+join is all that's needed.
 */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}

/** Formats integer cents as a localized currency string, e.g. 1650 -> "$16.50". */
export function formatCurrency(cents: number, currency = "USD"): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(cents / 100);
}
