# Forge website design system

## Overview

The site preserves the production Forge identity: a dark, ember-lit workshop paired with a warm cream light theme. Orange communicates heat, action, and the Forge mark. Product demonstrations use terminal and device frames as the primary imagery.

## Color

- Dark canvas: `#0A0812`
- Dark surface: `#0C0914`
- Dark raised surface: `#16100E`
- Dark text: `#F2E9DC`
- Dark muted text: `#A8ADC0`
- Light canvas: `#F1EEE8`
- Light surface: `#FAF8F4`
- Light text: `#211F1B`
- Light muted text: `#57544C`
- Forge orange: `#FF8A30` on dark, `#A84400` for text and controls on light
- Hot orange: `#FFB068`
- Success: `#5CD07A` on dark, `#1E8A47` on light

CSS defines these as semantic custom properties and swaps them through `data-theme`.

## Typography

- Display: Bricolage Grotesque, weights 600 to 800.
- Body: Geist, weights 400 to 700.
- Technical labels and terminal content: JetBrains Mono, weights 400 to 700.
- System font fallbacks are always present.
- Display tracking never exceeds `-0.04em`; hero size tops out below 6rem.

## Shape and material

- Buttons and navigation controls may use pills.
- Content surfaces use 10px to 16px radii, restrained borders, and short defined shadows.
- Terminal windows use a thin metal border and orange active states.
- Section separation comes from spacing, background changes, and fine rules rather than repeated cards.

## Layout

- Maximum content width: 1180px.
- Reading columns cap at 70 characters.
- Hero and demonstration layouts become single-column below 800px.
- Spacing uses fluid `clamp()` values and alternates dense demonstrations with open explanatory sections.

## Motion

- One short hero entrance and subtle ember motion provide energy.
- Interactive tabs switch instantly with a short opacity transition.
- `prefers-reduced-motion: reduce` disables continuous and entrance motion.

## Components

- Sticky capsule navigation with Forge mark, primary links, theme control, and action.
- Solid orange primary action and bordered secondary action.
- Terminal and three-device handoff demonstration surfaces.
- Pricing selector with two real radio options; annual is selected by default.
- Native `details` FAQ disclosures.
- Plain legal document layout sharing the global header and footer.
