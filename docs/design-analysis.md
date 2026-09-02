# Green Habit — Design Analysis

Source of truth: Figma file `FHFKSfucO0jwXZvUlYQZ9n`, containing a self-documenting
`green-habit-design-system` frame (16 numbered spec sections) plus 9 fully designed
desktop (1440px) pages: Homepage, Menu, Menu Category, Product Detail, About,
Experience, Offers, Contact, 404. No tablet/mobile frames exist in the file — the
responsive strategy (see `responsive-strategy.md`) is an extrapolation approved by
the client, not a literal transcription of a Figma frame.

This document is the finalized visual/content spec after the client's Phase 1
decisions. Anything in the raw Figma design-system that is **not** represented on
one of the 9 approved pages has been marked "excluded" and is not part of the
implementation scope (see §8).

## 1. Visual Language
Warm, editorial "organic atelier" aesthetic. Cream/paper backgrounds, generous
whitespace, an italic-serif display face paired with a clean grotesque sans, and
naturally-lit food photography. Structural containers favor 1px hairline borders
over shadows — shadow is a rare accent, not the default depth cue.

## 2. Color Tokens

| Token | Hex | Usage |
|---|---|---|
| `bg-primary` (Cream Base) | `#FDFBF7` | Primary page background |
| `bg-secondary` (Warm Sand) | `#F5F2EB` | Alt section bg, inputs, neutral badges |
| `bg-dark` (Charcoal Ink) | `#1C211F` | Footer, mobile drawer, dark badges, primary text |
| `brand-sage` | `#3D6346` | Primary buttons, links, active nav, icon accents |
| `brand-clay` | `#C4684D` | Secondary buttons, status badges, footer labels |
| `border` | `#E8E4DB` | All card/input borders, dividers |
| `text-muted` | `#6B726E` | Body copy / descriptions |
| `badge-sage-bg` | `#EDF2EE` | Dietary badge background |
| `badge-clay-bg` | `#FBF0EC` | Status/popularity badge background |
| `white` | `#FFFFFF` | Card surfaces, some buttons |
| `success` / `warning` / `error` / `info` | `#2E7D32` / `#ED6C02` / `#D32F2F` / `#0288D1` | Form validation states only |
| Neutral scale N-50…N-900 | `#FAF9F5 → #1C1B19` | Reserved scale, kept as tokens, not visibly used on live pages |

## 3. Typography
Two families only (see `implementation-plan.md` §2 for the final font sourcing decision):

- **Instrument Serif** (Regular + Italic) — display/editorial: hero headlines,
  section titles, product/card titles.
- **Geist** (Regular / Medium / SemiBold / Bold) — functional: body copy, nav,
  buttons, labels, badges.

| Token | Size | Family / Weight | Line-height |
|---|---|---|---|
| `display-xl` | 72px (hero override: 76px) | Serif Regular | 0.95–1.0 |
| `display` | 48px | Serif Italic | 1.1 |
| `h1` | 36px | Serif Regular | 1.2 |
| `h2` | 28px | Serif Regular *(see note below)* | 1.3 |
| `h3` | 20px | Sans SemiBold | 1.4 |
| `h4` | 18px | Sans SemiBold | 1.4 |
| `body-lg` | 18px | Sans Regular | 1.6 |
| `body` | 15px | Sans Regular | 1.6 |
| `body-sm` | 13px | Sans Regular | 1.5 |
| `caption` | 11px | Sans Medium | 1.4 |
| `overline` | 12px | Sans Bold, uppercase | 1.2 |
| `section-eyebrow-number` | 14px | Sans SemiBold, sage | 1.0 |

> **Note:** The design-system's literal "Headline 2" swatch renders in bold sans,
> but every real card/product title on the live pages uses the serif family at
> that size. The token above reflects **real usage**, not the demo swatch.

## 4. Spacing Scale (8pt-based)
`4, 8, 12, 16, 24, 32, 48, 64, 80, 120` (px). Rhythm: 120px section vertical
padding, 80px page margin (desktop), 64px header-to-content / footer padding,
32px card padding/grid gaps, 24px card content padding, 16–20px internal
component spacing, 8–12px label/badge spacing, 4px icon-to-text micro-gap.

## 5. Radius Scale
`4px` (small badges/buttons) · `6px` (default buttons, inputs) · `8px` (base
cards) · `12px` (product cards, panels) · `16px` (category cards — largest) ·
`9999px` / pill (dietary badges, avatar & social circles).

## 6. Shadow
Exactly one shadow exists in the system: `0 8px 12px rgba(0,0,0,0.05)` — used
only for the "elevated" card emphasis state. All other separation uses the
1px `border` token. Do not add additional shadow values.

## 7. Component Specs (approved, in-scope)

**Buttons** — 6 style variants (Primary Sage, Secondary Clay, Tertiary/Sand,
Outline Brand, Ghost, Text Link) × 3 sizes (Small 12×6/r4, Medium 18–20×10–12/r6,
Large 24×16/r8). Disabled = 50% opacity.

**Badges** — 4 tones: dietary (sage-tint pill), status (clay-tint, rounded-4),
promo (dark, rounded-4, or clay-outline), neutral (sand pill).

**Cards** — Base structural (border, r8, no shadow), Elevated (shadow, no
border, r8), Product (border, r12, image+content, vertical or horizontal
layout), Category (border, r16, image-top).

**Navigation** — Solid bar, 88px tall, cream bg, bottom border, 3-zone layout
(logo / links / icons+CTA). Current-page link = bold + sage.

**Footer** — Full-bleed dark panel (not rounded on real pages — the
design-system's rounded "footer card" preview is presentation-only and is
**not** replicated in production). 4-column layout: brand block, 3 link
columns, newsletter block, bottom legal bar.

**Product Card** — Two layouts: vertical (image-top, badges → title →
description → divider → price+CTA) and horizontal/featured (side image,
header row with inline price, bottom row of badges + quick-add).

**Category Card** — Image-top white card (r16) used in the homepage 3-col
grid, **and** a full-bleed image+scrim+caption treatment used for gallery-style
tiles (Experience "space-gallery", Offers "seasonal-specials", Instagram grids).
Both patterns are genuinely used on approved pages and are in scope.

## 8. Explicitly Excluded (Figma-documented, not on any approved page)
Per client decision #5, the following design-system variants exist in Figma
but are **not implemented**, because no approved page uses them:

- Navigation "Variant B" — transparent/overlay navbar over a hero image with a
  dark scrim and white "Reserve Table" button.
- The specific split "MENU SECTION" category card (warm-sand left pane + fixed
  180px right image) — not reproduced on any of the 9 real pages.
- The documented Modal set (Quickview, Newsletter popup, Confirm/Discard) —
  no approved page shows a modal being triggered; deferred until a real
  trigger flow is designed.
- The full Forms section's validation icon/color set beyond what a contact
  form actually needs (kept as tokens for later, not built as UI now).

Mobile navigation is **not** excluded — although only documented in the
design system and not shown on a real frame, it is required by the approved
responsive requirements (see `responsive-strategy.md`) and is the only
available spec for that need, so it is in scope.

## 9. Accessibility Notes Carried Into Implementation
- No focus states exist in Figma — standard focus-visible rings will be
  designed during implementation (see `implementation-plan.md` §4).
- Icon-only controls (search, bag, drawer toggle, social icons) need
  `aria-label`s not present in the design file.
- Current nav item should carry a non-color cue in addition to sage/bold
  (e.g. `aria-current="page"`), for accessibility beyond the visual design.
- FAQ accordion needs proper `aria-expanded`/button semantics.
