# Green Habit — Responsive Strategy

The Figma file only contains desktop (1440px) frames. Per client decision #1,
responsive behavior below is a **designed extension** of the existing desktop
system (grid/spacing/type tokens), not a literal Figma transcription. It
preserves the desktop visual hierarchy — it does not introduce a new design.

## Breakpoints

| Name | Range | Grid |
|---|---|---|
| Mobile | `< 768px` | 4-column, 16–20px margin |
| Tablet | `768px – 1279px` | 8-column, 40–48px margin |
| Desktop | `>= 1280px` | 12-column, 1280px max content, 80px margin |

Implemented as Tailwind breakpoints: default (mobile-first) / `md:` (768px) /
`lg:` (1280px). No `sm:` tier is used — the design only defines these three
tiers.

## Global Rules
- **Section vertical padding** scales down the 8pt spacing scale:
  `py-[120px]` desktop → `py-16` (tablet, ~64px) → `py-12` (mobile, ~48px).
- **Page margin** scales: `px-20` desktop (80px) → `px-10`/`px-12` tablet →
  `px-4`/`px-5` mobile (16–20px).
- **Grids reflow, not shrink**: a 3-column grid becomes 2 columns at tablet
  and 1 column (or horizontal scroll — see below) at mobile. Card internal
  proportions (image aspect ratio, padding) stay constant; only the grid
  column count and card width change.
- **Typography scales fluidly**, not at fixed breakpoint jumps, using
  `clamp()` for the largest display sizes so the hero headline never
  overflows or looks disproportionately large on small screens:
  - `display-xl` (76px desktop): `clamp(2.25rem, 6vw + 1rem, 4.75rem)`
  - `display` (48px desktop): `clamp(1.75rem, 4vw + 1rem, 3rem)`
  - `h1`/`h2` scale similarly at a smaller ratio; body/caption sizes stay fixed
    across breakpoints (functional text doesn't need fluid scaling).
- **Touch targets**: all buttons and interactive icons maintain a minimum
  44×44px hit area on mobile/tablet, even where the visual button is smaller
  (achieved with padding, not by resizing the visible control).

## Section-by-Section Behavior

| Section | Desktop | Tablet | Mobile |
|---|---|---|---|
| Navigation | Solid bar, full inline link row + icons + CTA | Same bar, link row may condense (hide secondary icons) | Collapses to logo + bag icon + hamburger; links move into `MobileDrawer` |
| Hero (split) | Text left / image right, side-by-side | Same, narrower image | Stacks vertically — text first, image below; fluid display type |
| Hero (full-bleed) | Full-bleed image, centered/bottom text | Same | Same, text sizing scales fluidly |
| Category grid (3-col) | 3 columns | 2 columns | 1 column, full-width cards (stacked) |
| Product grid (3–4 col) | 3–4 columns | 2 columns | **Horizontal scroll** of fixed-width cards (snap-scroll) — chosen over full stacking for menu/bestseller grids to keep browsing fast on mobile, matching the "horizontal-scroll where appropriate" requirement |
| Signature/featured product block (2-up) | Side-by-side | Side-by-side (narrower) | Stacked |
| Bento/media blocks | Fixed large image | Scales with container | Full-width, height reduced proportionally |
| Team / values grid | 3–4 columns | 2 columns | 1 column |
| Stats row | 3 columns | 3 columns (tighter) | 1 column stacked, or horizontal scroll if 3+ stats |
| Instagram gallery | 5-across row | 3–4 across | Horizontal scroll |
| Footer | 4 columns | 2 columns (brand+newsletter / menu+company+support wraps) | Single stacked column, newsletter block last |
| FAQ accordion | Full width | Full width | Full width, unchanged behavior |
| Contact two-column | Form + info side-by-side | Stacked | Stacked |

## Mobile Navigation Detail
Below 768px, `Navigation` renders: logo (left) + bag icon + hamburger (right).
Tapping the hamburger opens `MobileDrawer`: full-height dark (`bg-dark`) panel
sliding in from the right (or top), with large serif nav links stacked
vertically, a divider, and an hours block at the bottom — following the one
mobile-nav pattern documented in the Figma design system (this is the
exception noted in `design-analysis.md` §8: the only spec available for a
requirement the client explicitly asked for). Drawer traps focus while open,
closes on `Escape`, overlay click, or the close icon, and restores focus to
the hamburger button on close.

## What Is Explicitly Not Done
- No separate "mobile design" is invented beyond what's needed to reflow the
  existing desktop sections — no new imagery, no new copy, no new components
  that don't exist on desktop.
- No tablet-specific unique layouts beyond the 2-column reflow rule — tablet
  is treated as an intermediate step between mobile and desktop, not a third
  bespoke design.
