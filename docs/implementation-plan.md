# Green Habit — Implementation Plan

## 1. Tech Stack Decision
The Figma design-to-code extraction already produces React + Tailwind, and
the project's stated future direction (Supabase) makes a React meta-framework
the natural fit. No new/unnecessary dependencies are introduced beyond what's
needed to render the approved design.

| Concern | Choice | Rationale |
|---|---|---|
| Framework | **Next.js (App Router) + TypeScript** | Matches the Figma-extracted React output directly; server components fit the read-heavy catalog pattern; pairs naturally with Supabase later (official SDK support, route handlers for future API needs) without adding a separate backend now |
| Styling | **Tailwind CSS** | Matches the exact utility classes already extracted from Figma (`bg-[#3d6346]`, `rounded-[12px]`, etc.) token-for-token, minimizing translation error |
| Icons | **lucide-react** | Visually matches the Figma outline icon set (see §3) |
| Fonts | **Instrument Serif + Geist**, loaded via `next/font` | See §2 |
| Data (Phase 1) | Local typed mock data behind repository interfaces | See `data-model.md` |
| Backend/Auth/Payments | **None yet** | Explicitly out of scope per client decision #11 |

No state-management library, CMS SDK, animation library, or UI kit is added.
Interaction states (hover/focus/active/disabled/loading) are built with
Tailwind utilities and native CSS transitions — no extra dependency needed.

## 2. Font Decision (Final)
| Figma name | Decision | Source |
|---|---|---|
| Geist | Use as-is | `next/font/google` (Geist is published on Google Fonts as "Geist" and "Geist Mono"; alternatively the official `geist` npm package by Vercel — either is byte-for-byte the same family). Weights needed: Regular 400, Medium 500, SemiBold 600, Bold 700. |
| Instrument Serif | Use as-is | `next/font/google`, family "Instrument Serif", styles: Regular (400) + Italic. |

Both are exact matches to the Figma spec — no substitution was necessary, and
no additional font family is introduced anywhere in the app.

## 3. Icon Decision (Final)
Every icon observed in the Figma file is a simple line/outline icon and maps
directly onto an existing `lucide-react` icon — no custom SVG recreation is
needed:

| Figma icon | Lucide component |
|---|---|
| search | `Search` |
| shopping-bag | `ShoppingBag` |
| menu | `Menu` |
| x-circle (close) | `XCircle` |
| arrow-right | `ArrowRight` |
| chevron-right / chevron-down | `ChevronRight` / `ChevronDown` |
| plus / plus-circle | `Plus` / `PlusCircle` |
| minus | `Minus` |
| check | `Check` |
| star | `Star` |
| leaf | `Leaf` |
| sparkle | `Sparkle` |
| user | `User` |
| globe | `Globe` |
| instagram / facebook / circle-x (Twitter/X) | `Instagram` / `Facebook` / `Twitter` (or `X`) |
| map-pin | `MapPin` |
| phone | `Phone` |
| mail | `Mail` |
| clock | `Clock` |
| alert-circle / alert-triangle | `AlertCircle` / `AlertTriangle` |
| arrow-up-right | `ArrowUpRight` |

No custom Green Habit brand icon was identified in the file (the "brand
mark" is the serif wordmark + a small sage dot, not an icon) — so nothing
needs to be preserved as a bespoke SVG asset. If a bespoke mark is added
later, it will live in `public/brand/` as a single reusable SVG component.

## 4. Interaction States Approach
Implemented purely with Tailwind variants and CSS transitions — no new
visual design, per decision #4:

```
transition-colors duration-150 ease-out
hover:bg-brand-sage/90
focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-sage
active:scale-[0.98]
disabled:opacity-50 disabled:cursor-not-allowed
```

`Button` gets an `isLoading` prop (spinner via a small inline SVG or a
Lucide `Loader2` with `animate-spin` — already covered by the Lucide
dependency, no new package). `FormField` gets an `error` prop rendering the
documented red/`AlertCircle` pairing.

## 5. Map Decision (Final)
No map SDK (Google Maps JS API, Mapbox GL) is installed in Phase 1. Per
decision #7, `LocationSection` uses:
- A static, lightweight embed (`<iframe>` Google Maps "place" embed — free,
  no API key) or a simple styled placeholder graphic matching the Figma look.
- A **"Get Directions"** link built from the address string:
  `https://www.google.com/maps/search/?api=1&query=<encoded address>`.

This is wrapped behind a small `MapProvider` abstraction (see
`component-architecture.md` §Map) so a real Maps SDK can be swapped in later
without touching `LocationSection`'s consumers.

## 6. Ordering Scope (Final)
Per decision #6, `Add to Order` / `Order Now` CTAs are wired to a callback
prop with a no-op/toast placeholder in Phase 1. No cart state, no
persistence, no checkout route, no payment integration, no customer
accounts. The prop-based boundary (see `component-architecture.md`) is the
seam a real ordering system will plug into later.

## 7. Folder Structure (Final)

```
green-habit/
├── docs/
│   ├── design-analysis.md
│   ├── component-architecture.md
│   ├── responsive-strategy.md
│   ├── data-model.md
│   └── implementation-plan.md
├── public/
│   └── images/                    # committed Figma exports (asset URLs expire in 7 days)
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Navigation + Footer shell, font setup
│   │   ├── page.tsx                # Homepage
│   │   ├── globals.css             # Tailwind base + design tokens
│   │   ├── menu/
│   │   │   ├── page.tsx
│   │   │   └── [category]/
│   │   │       ├── page.tsx
│   │   │       └── [product]/
│   │   │           └── page.tsx
│   │   ├── about/page.tsx
│   │   ├── experience/page.tsx
│   │   ├── offers/page.tsx
│   │   ├── contact/page.tsx
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── ui/                     # Button, Badge, IconButton, Divider, SectionHeader,
│   │   │                           # EyebrowLabel, StarRating, QuantitySelector, Checkbox,
│   │   │                           # Toggle, Pagination, Skeleton
│   │   ├── layout/                 # Navigation, MobileDrawer, Footer, Logo
│   │   ├── cards/                  # ProductCard, CategoryCard, TeamMemberCard, ReviewCard,
│   │   │                           # LocationCard, OfferCard, LoyaltyTierCard, ComboCard,
│   │   │                           # TimelineMilestone, ProcessStep, ValueCard, StatCounter,
│   │   │                           # CrossSellCard
│   │   ├── sections/                # HeroSplit, HeroFullBleed, PromiseManifesto,
│   │   │                           # SignatureProductBlock, EditorialBand, FounderQuote,
│   │   │                           # InstagramGallery, LocationSection, NutritionFactsPanel,
│   │   │                           # AppStoreButtonGroup, SustainabilityStats, CommunityEvents,
│   │   │                           # ProductGrid, CategoryGrid
│   │   ├── forms/                  # SearchBar, FilterPillGroup, SortFilterBar,
│   │   │                           # NewsletterForm, ContactForm, Accordion/FAQItem
│   │   └── feedback/                # EmptyState, ErrorIllustration
│   ├── data/
│   │   ├── types.ts
│   │   ├── index.ts                 # active repository exports (the Supabase swap point)
│   │   ├── repositories/
│   │   │   ├── product-repository.ts
│   │   │   ├── mock-product-repository.ts
│   │   │   ├── category-repository.ts
│   │   │   └── mock-category-repository.ts
│   │   └── mock/
│   │       ├── products.ts
│   │       ├── categories.ts
│   │       ├── team.ts
│   │       ├── offers.ts
│   │       ├── locations.ts
│   │       └── faqs.ts
│   ├── lib/
│   │   ├── constants.ts             # nav links, footer link groups
│   │   ├── utils.ts                 # cn() class-merge helper, formatCurrency, etc.
│   │   ├── fonts.ts                 # next/font setup for Geist + Instrument Serif
│   │   └── maps.ts                  # MapProvider (getDirectionsUrl, embed helper)
│   └── styles/
│       └── tokens.css               # CSS custom properties mirrored into tailwind.config
├── tailwind.config.ts
├── next.config.js
├── package.json
└── tsconfig.json
```

## 8. Implementation Order
1. Project scaffold: Next.js + TypeScript + Tailwind, `next/font` setup,
   `tailwind.config.ts` wired to the design tokens from `design-analysis.md`.
2. Data layer: `data/types.ts`, repository interfaces, mock implementations,
   mock content transcribed from Figma.
3. UI primitives (`components/ui/`) — including interaction states.
4. Layout shell — `Navigation` (+ `MobileDrawer`), `Footer`, root `layout.tsx`.
5. Card components (`components/cards/`), built and visually verified against
   Figma screenshots per component.
6. Homepage sections + Homepage assembly (highest-traffic, most component reuse).
7. Menu → Menu Category → Product Detail (the catalog flow — validates the
   data model and `ProductCard`/`ProductGrid` end-to-end).
8. Remaining content pages: About, Experience, Offers, Contact.
9. 404 page.
10. Responsive pass across all pages against `responsive-strategy.md`.
11. Accessibility pass (focus states, aria-labels, landmarks, keyboard nav).
12. Final QA against Figma screenshots, page by page.

## 9. Explicitly Deferred (Not This Phase)
Backend/API routes, Supabase integration, authentication, payment/checkout,
cart persistence, CMS, order management — all deferred per decision #11,
with the data and component boundaries in place so each can be added later
without UI rework.
