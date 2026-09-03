export const SITE_NAME = "Green Habit";
export const SITE_TAGLINE = "Eat Better. Feel Better. Make It a Habit.";
export const SITE_DESCRIPTION =
  "Premium wholesome cafe kitchen serving clean fuel for conscious spirits.";
/** Swap via NEXT_PUBLIC_SITE_URL once a production domain is assigned. */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
export const DEFAULT_OG_IMAGE =
  "https://images.unsplash.com/photo-1546007600-8c2e51b3d1cd?w=1200&q=80";

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Menu", href: "/menu" },
  { label: "Our Story", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Offers", href: "/offers" },
  { label: "Contact", href: "/contact" },
];

export interface FooterLinkGroup {
  heading: string;
  links: NavLink[];
}

export const FOOTER_LINK_GROUPS: FooterLinkGroup[] = [
  {
    heading: "Menu",
    links: [
      { label: "Heritage Bowls", href: "/menu" },
      { label: "Matcha Elixirs", href: "/menu" },
      { label: "Bakery Ritual", href: "/menu" },
      { label: "All-Day Toast", href: "/menu" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Atelier", href: "/experience" },
      { label: "Green Sourcing", href: "/about" },
      { label: "Careers", href: "/about" },
    ],
  },
  {
    heading: "Support",
    links: [
      { label: "FAQ & Delivery", href: "/contact" },
      { label: "Group Orders", href: "/contact" },
      { label: "Gift Cards", href: "/offers" },
      { label: "Get in Touch", href: "/contact" },
    ],
  },
];

export const SOCIAL_LINKS = [
  { label: "Instagram", icon: "instagram", href: "https://instagram.com" },
  { label: "Facebook", icon: "facebook", href: "https://facebook.com" },
  { label: "X", icon: "twitter", href: "https://twitter.com" },
] as const;

export const FLAGSHIP_ADDRESS = "482-B Sage Boulevard, Garden District";
export const FLAGSHIP_HOURS = "Monday — Sunday • 07:00 AM — 08:00 PM";
export const FLAGSHIP_PHONE = "+1 (555) 384-4224";
export const FLAGSHIP_EMAIL = "hello@greenhabit.com";
