import type { LoyaltyTier } from "../types";

export const loyaltyTiers: LoyaltyTier[] = [
  { id: "bronze", name: "BRONZE", pointsRange: "0 — 499 pts", perkTitle: "Free Refill Option", perkDescription: "Earn 1 point per $1. Enjoy free soy/oat milk substitutions and walk-in priority status." },
  { id: "silver", name: "SILVER", pointsRange: "500 — 1,499 pts", perkTitle: "Free Friday Pastry", perkDescription: "Get a free sourdough croissant or snack plate every Friday with any signature elixir." },
  { id: "gold", name: "GOLD", pointsRange: "1,500+ pts", perkTitle: "Secret Sourcing Tastings", perkDescription: "Private invitations to head nutritionist tastings and early seasonal menu releases." },
];
