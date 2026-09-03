import type { Location } from "../types";

export const locations: Location[] = [
  {
    id: "sage-boulevard",
    name: "Flagship Atelier — Sage Boulevard",
    addressLine: "482-B Sage Boulevard, Garden District",
    hours: "07:00 AM — 08:00 PM Daily",
    phone: "+1 (555) 384-4224",
    isFlagship: true,
  },
  {
    id: "ocean-breeze",
    name: "Coastal Outpost — Ocean Breeze Drive",
    addressLine: "12 Marina Terrace, Pacific Cliffs",
    hours: "08:00 AM — 07:00 PM Daily",
    isFlagship: false,
  },
  {
    id: "heritage-plaza",
    name: "Community Corner — Heritage Plaza",
    addressLine: "104 Oakwood Court, Historic West",
    hours: "07:00 AM — 05:00 PM Daily",
    isFlagship: false,
  },
];
