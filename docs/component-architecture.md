# Green Habit — Component Architecture

Guiding rule: **UI components render data, they never own or fetch it.**
Every card/section that displays product, category, team, offer, location, or
FAQ content receives that content as typed props (see `data-model.md`). This
is what allows the mock-data phase to be swapped for Supabase later without
touching a single component.

## Layer 1 — UI Primitives (`components/ui/`)
Stateless, style-only, no domain knowledge.

- `Button` — variant: `primary | secondary | tertiary | outline | ghost | link`,
  size: `sm | md | lg`, plus `isLoading`, `isDisabled`, optional leading/trailing icon.
- `Badge` — tone: `dietary | status | promo | neutral`, `label`.
- `IconButton` — wraps a Lucide icon with a required `aria-label`, hover/focus states.
- `Divider` — full-width hairline.
- `SectionHeader` — `eyebrowNumber`, `title`, `subtitle`. Used at the top of
  nearly every section across every page — the single most reused component.
- `EyebrowLabel` — small-caps label + separator + secondary label (hero eyebrows).
- `StarRating` — `value`, `max`, read-only.
- `QuantitySelector` — `-` / value / `+`, controlled.
- `Checkbox`, `Toggle` — standard form controls with checked/disabled states.
- `Pagination` — `currentPage`, `totalPages`, `onPageChange`.
- `Skeleton` — loading placeholder block (new — supports the "loading" state
  required by decision #4, not explicitly in Figma but needed for real data).

## Layer 2 — Layout (`components/layout/`)
- `Navigation` — solid bar only (overlay variant excluded, see design-analysis.md §8).
  Renders nav links from a static config, highlights current route, opens `MobileDrawer`
  below 768px.
- `MobileDrawer` — full-height dark overlay panel, stacked serif links, hours block,
  close control. Rendered by `Navigation`, not a standalone route element.
- `Footer` — brand block + 3 link columns + newsletter block + legal bar. Identical
  on every page — one instance, imported into the root layout.
- `Logo` — serif wordmark + sage dot, used in both `Navigation` and `MobileDrawer`.
- `PageShell` / root layout — wraps every route in `Navigation` + `<main>` + `Footer`.

## Layer 3 — Cards (`components/cards/`)
Each card takes one typed domain object as its primary prop — never raw strings
scattered across props.

- `ProductCard` — `product: Product`, `layout: "vertical" | "horizontal"`.
  Renders image, badges, name, description, price, and a CTA slot (`onAddToOrder`
  callback — see §"Ordering Scope Hook" below).
- `ProductGrid` — `products: Product[]`, responsive column count, empty state.
- `CategoryCard` — `category: Category`, `variant: "card" | "immersive"` (both
  patterns are in scope per design-analysis.md §7).
- `CategoryGrid` — `categories: Category[]`.
- `TeamMemberCard` — `member: TeamMember`.
- `ReviewCard` — `review: Review`.
- `LocationCard` — `location: Location`.
- `OfferCard` — `offer: Offer`.
- `LoyaltyTierCard` — `tier: LoyaltyTier`.
- `ComboCard` — `combo: Combo`.
- `TimelineMilestone` — `milestone: Milestone`.
- `ProcessStep` — `step: ProcessStep`.
- `ValueCard` — `value: BrandValue`.
- `StatCounter` — `stat: ImpactStat`.
- `CrossSellCard` — `product: Product` (reuses the Product model, different layout).

## Layer 4 — Sections (`components/sections/`)
Compose Layer 2/3 components with a `SectionHeader`. Sections are page-specific
compositions, not reused verbatim across pages, but each one is small and pure:
receives already-fetched data as props from the page (server component), no
internal data fetching.

Examples: `HeroSplit`, `HeroFullBleed`, `PromiseManifesto`, `SignatureProductBlock`,
`EditorialBand`, `FounderQuote`, `InstagramGallery`, `LocationSection` (see §Map
below), `NutritionFactsPanel`, `AppStoreButtonGroup`, `SustainabilityStats`,
`CommunityEvents`.

## Layer 5 — Forms & Interactive (`components/forms/`)
- `SearchBar` — controlled input, Lucide `Search` icon.
- `FilterPillGroup` — multi-select pill toggles (menu category filters, dietary filters).
- `SortFilterBar` — sort dropdown + `FilterPillGroup` + result count.
- `NewsletterForm` — email input + submit, client-side validation only (no backend yet).
- `ContactForm` — name/email/phone/subject/message + `FormField` success/error states.
- `Accordion` / `FAQItem` — `aria-expanded`, keyboard operable.

## Layer 6 — Feedback (`components/feedback/`)
- `EmptyState` — used for "no results" (menu filters) and reused for the 404 page's
  search-empty illustration slot.
- `ErrorIllustration` — 404-specific decorative graphic.

## Cross-Cutting: Interaction States (decision #4)
Every interactive primitive (`Button`, `IconButton`, nav links, form inputs,
`FilterPillGroup` pills, `ProductCard` CTA) implements, at minimum:

| State | Rule |
|---|---|
| `hover` | Subtle opacity/tint shift (~90–95% of base color), 150ms ease transition |
| `focus-visible` | 2px `brand-sage` outline with 2px offset — never removed, never mouse-triggered (`:focus-visible` only) |
| `active` | Slight scale (0.98) or darken step, no layout shift |
| `disabled` | 50% opacity (per Figma) + `cursor-not-allowed` + `aria-disabled` |
| `loading` | `Button isLoading` swaps label for a spinner, keeps width, disables interaction |
| `error` | `FormField` shows the documented error color/icon pairing (red text + `AlertCircle` icon) |

No new visual variants are introduced — these states are built from the
existing token set (color, opacity, radius) with subtle transitions only.

## Ordering Scope Hook (decision #6)
`ProductCard`'s CTA (`Add to Order` / `Order Now`) accepts an `onAddToOrder`
callback prop. In Phase 1 this callback is wired to a no-op / a simple local
toast ("Ordering coming soon") — there is no cart, checkout, or persistence.
The prop boundary is what makes the later ordering system additive: a real
cart implementation will pass a real handler into the same components, with
zero changes to `ProductCard`, `ProductGrid`, or any page.

## Map / Location (decision #7)
`LocationSection` renders address, hours, phone, and a **"Get Directions"**
link (`https://www.google.com/maps/search/?api=1&query=<address>`), plus a
static map preview image (or a simple embedded `<iframe>` Google Maps
"place" embed — no API key required for the basic embed). This is
implemented behind a small `MapProvider` interface (`getDirectionsUrl(address)`,
`renderPreview(address)`) so it can be swapped for a full Google Maps
JavaScript SDK or Mapbox GL integration later without touching
`LocationSection`'s call sites.
