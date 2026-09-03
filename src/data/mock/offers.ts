import type { Offer } from "../types";

export const offers: Offer[] = [
  {
    id: "offer-matcha",
    badgeLabel: "15% OFF",
    validityLabel: "Valid until Nov 30",
    title: "Early Bird Matcha Ritual",
    description: "Enjoy organic ceremonial-grade whisked matcha at a special price every weekday between 7:00 AM — 9:00 AM.",
    ctaLabel: "Claim Offer",
    image: { id: "offer-matcha-img", url: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600&q=80", alt: "Matcha latte" },
  },
  {
    id: "offer-sourdough",
    badgeLabel: "BUY 1 GET 1",
    validityLabel: "Sundays Only",
    title: "Sourdough Sunday Box",
    description: "Order any artisanal sourdough toast and receive a second sourdough dish completely free to share.",
    ctaLabel: "Claim Offer",
    image: { id: "offer-sourdough-img", url: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=600&q=80", alt: "Sourdough toast" },
  },
  {
    id: "offer-cup",
    badgeLabel: "$1.00 OFF",
    validityLabel: "Ongoing Ritual",
    title: "Eco Cup Refill Discount",
    description: "Bring your own reusable clean cup or clay discount vessel and get $1.00 off any signature cold-brewed elixir.",
    ctaLabel: "Claim Offer",
    image: { id: "offer-cup-img", url: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80", alt: "Iced cold brew coffee" },
  },
  {
    id: "offer-app",
    badgeLabel: "FREE DRINK",
    validityLabel: "New Accounts Only",
    title: "First-Time App Habit",
    description: "Download the Green Habit Atelier app and register an account to receive a free organic cold-pressed juice on us.",
    ctaLabel: "Claim Offer",
    image: { id: "offer-app-img", url: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=600&q=80", alt: "Green cold-pressed juice" },
  },
];
