# Claude Design brief: Forge Anywhere marketing

> **Website project only.** Run this brief in the existing Forge website Claude Design project:
> https://claude.ai/design/p/eeae8c8b-31e0-47cd-a38d-c1bb96c7de90
>
> Do not design an authenticated Forge app, app shell, dashboard, host manager, session interface,
> mobile app, desktop app, or web app in this project. The Forge application already has a
> separate completed Claude Design project and implemented Emberline design system. Authenticated
> Anywhere UX must extend that project using the separate app brief in
> `mobile/redesign/FORGE_ANYWHERE_CLAUDE_DESIGN_PROMPT.md` in the Forge repository.

## Objective

Extend the existing Forge product website with the public marketing experience for Forge Anywhere.
Preserve the current website as the visual and structural source of truth. Add a restrained homepage
entry point and a complete `/anywhere` page without redesigning Forge or creating a second product
identity.

Forge Anywhere is the optional paid, end-to-end encrypted companion to free, open-source Forge. Its
positioning is:

> Leave your desk without leaving your Forge session.

The launch headline is:

> Your Forge sessions, everywhere.

## Non-negotiable boundaries

- Start from the current landing and docs canvases in this Claude Design project.
- Preserve the current Forge mark, navigation, typography, orange/cream/near-black palette,
  terminal/workshop character, theme behavior, spacing language, responsive behavior, and motion
  character.
- The homepage remains a Forge homepage. Do not turn it into an Anywhere homepage.
- Do not alter the existing Forge app design. Any product UI shown in a marketing demonstration must
  use approved screenshots/exports from the separate Forge app Claude Design project.
- If approved app screens are unavailable, use clearly labeled neutral placeholders. Do not invent
  a parallel app shell or speculative controls.
- Do not create sign-in, onboarding, billing, settings, host, device, storage, history, handoff, or
  session-management screens in this website project.
- Do not create a second visual system, component library, or mobile application.
- Do not use the discarded hand-built `forge-site` redesign as a reference.
- Legal pages and final legal copy are out of scope for this pass. Reserve existing footer locations
  for future privacy, terms, and refund links without writing those documents.
- Do not invent capabilities, prices, quotas, security promises, or team features.

## Product contract

Forge remains free and open-source. These remain free:

- Forge CLI, TUI, daemon, and local session history.
- Loopback and LAN access.
- Direct device pairing.
- User-managed `forge serve --anywhere` tunnels.
- User-managed networking and storage.
- Local workspace export/import.

Forge Anywhere adds:

- Managed encrypted relay and stable host identity.
- Up to three active hosts in a personal fleet.
- Unlimited personal controller devices.
- 5 GB encrypted cloud sync/history.
- Remote jobs.
- Generic push notifications with no workspace content.
- Safe workspace handoff between hosts.
- End-to-end encrypted replay links with expiry and revocation.

Commercial facts:

- EUR 10 per month.
- EUR 79 per year.
- Show both prices together; annual is selected by default.
- 14-day trial without a card.
- The trial starts only when the first host connects.
- One trial per GitHub account.
- Paddle handles billing.
- No permanent hosted free tier, lifetime deal, advertising, model hosting, or provider markup.
- V1 is for individual developers only. Do not market teams or organizations.

Hard limits:

- Three active hosts.
- Unlimited personal controller devices.
- 5 GB encrypted storage.
- Workspace capsules up to 100 MB compressed.
- Replay-share expiry choices of 24 hours, 7 days, or 30 days.

Core trust statement:

> Forge stays open source and free. Anywhere is optional and end-to-end encrypted.

Local Forge remains usable when Anywhere is disabled, unreachable, expired, suspended, over quota,
or unpaid.

## Audience and marketing job

The audience is an individual developer who already uses or is evaluating Forge and wants to work
across a desktop, laptop, iPhone, and browser.

The page must let them understand quickly:

- What Anywhere adds.
- What remains free.
- How desktop → iPhone → laptop continuity works.
- Why the relay and storage cannot read plaintext workspace content.
- Why recovery words matter.
- When the trial begins.
- What the subscription costs and includes.
- What happens after cancellation, payment failure, or service unavailability.

## Design character

Use the current Forge website project as authority. The result should feel:

- Mechanical, candid, energetic, and technically precise.
- Like a trusted workshop instrument, not a generic SaaS dashboard.
- Product-led: real approved interface imagery and terminal/device continuity instead of abstract
  cloud illustrations.
- Specific about trust and operational boundaries rather than relying on shield graphics or vague
  claims.

Avoid:

- Generic blue or purple SaaS gradients.
- Glassmorphism and decorative card grids.
- Stock developer photography.
- Oversized cloud/network diagrams.
- Hidden pricing or an ambiguous free/paid boundary.
- “Military-grade,” “unhackable,” “sync everything,” or “zero knowledge.”
- Marketing Anywhere as a replacement for local Forge, Git, or independent backups.

## Existing homepage additions

Keep the current homepage composition intact. Add only:

1. `Anywhere` to the existing navigation without restructuring it.
2. One visually secondary homepage section showing the three-part story:
   - Start work on desktop.
   - Respond from iPhone.
   - Hand the complete safe workspace to a laptop.
3. The trust statement.
4. One link to `/anywhere`.
5. One homepage Anywhere CTA that does not replace the primary open-source installation/GitHub
   path.

The relationship must be immediately clear: Forge is the free local product; Anywhere is its
optional hosted companion.

## `/anywhere` page narrative

Design one complete responsive page with this order:

1. Hero headline: “Your Forge sessions, everywhere.”
2. Subhead: “Leave your desk without leaving your Forge session.”
3. Primary CTA: “Start 14-day trial with GitHub.”
4. Trust statement beside or immediately below the CTA.
5. A polished desktop → iPhone → laptop continuity demonstration using approved app-project
   screens. Show the same session moving through the sequence; do not design a new app around the
   demo.
6. A clear “Forge is free / Anywhere adds” boundary comparison.
7. Focused feature sections for:
   - Live remote control through the managed relay.
   - Encrypted sync and offline history.
   - Personal host fleet and remote jobs.
   - Generic push notifications.
   - Workspace handoff.
   - Expiring encrypted replay links.
8. A security and recovery section.
9. Pricing with EUR 79/year and EUR 10/month together, annual selected by default, and “14 days,
   no card” stated clearly.
10. Limits: three hosts, unlimited personal devices, 5 GB, personal-only.
11. Continuity reassurance: local Forge is unaffected if Anywhere expires or is unavailable.
12. Practical FAQ.
13. Final CTA and the existing Forge footer.

## Demonstration storyboard

Use a 60–90 second product story that can also be understood as a static sequence:

1. Desktop Forge is working in a real session.
2. The developer leaves the desk.
3. A generic phone alert says only “Open Forge to view an update.”
4. The existing Forge app opens the same live session on iPhone.
5. The developer responds or approves an action.
6. Later, the session reaches an idle checkpoint.
7. The developer initiates workspace handoff to a laptop.
8. A safe encrypted capsule is prepared, verified, acknowledged, and transferred.
9. The existing Forge app continues the same session on the laptop.

The marketing canvas may compose approved screens into device frames, but must not change their
navigation, components, status language, or control placement.

## Security and recovery content

Communicate practical answers first:

- Devices encrypt before upload and decrypt after download.
- The service can see routing identifiers, timestamps, size, object kind, and signatures, but not
  plaintext prompts, commands, filenames, repository names, diffs, or transcripts.
- A 24-word recovery phrase protects account-key recovery.
- It is shown once and support cannot recover it.
- Authorized devices receive wrapped account keys.
- Device revocation rotates future data to a new key epoch for remaining devices and recovery.
- Losing every authorized device and the recovery phrase makes encrypted cloud content
  unrecoverable.

Technical algorithm names may appear in an inspectable detail disclosure, not as headline copy:
X25519, Ed25519, HKDF-SHA256, and XChaCha20-Poly1305.

Do not display realistic recovery words, secrets, QR payloads, prompts, commands, filenames,
repository names, diffs, or transcripts in marketing mockups.

## Pricing interaction

- Present annual and monthly as one accessible plan choice.
- Annual is selected by default.
- Do not use two competing primary buttons.
- Show EUR 79/year and EUR 10/month simultaneously.
- State that the no-card trial starts with the first host connection.
- CTA destinations should make GitHub authentication clear.
- Paddle is the merchant of record, but payment details do not need visual prominence on the
  marketing page.

## FAQ content

Answer:

- What remains free?
- When does the trial start?
- Can the service read sessions, prompts, commands, filenames, repositories, diffs, or transcripts?
- What happens if the recovery phrase is lost?
- What happens after cancellation or payment failure?
- Does Anywhere replace Git or backups?
- Can I use it for a team?
- What happens above 5 GB?
- Can I keep using my own tunnel?
- What happens if the service is offline?

## Responsive and accessibility requirements

Design at approximately 1440 px, 1024 px, and 390 px. Support long localized strings and 200%
zoom.

Target WCAG 2.2 AA:

- Semantic landmarks and heading order.
- Logical keyboard and screen-reader order.
- Visible focus states.
- Minimum 44 px touch targets where practical.
- Sufficient contrast in light and dark themes.
- No information communicated by color, animation, hover, or device mockup alone.
- Reduced-motion alternatives.
- Pricing controls and FAQ disclosures must be keyboard and screen-reader operable.
- The continuity story must remain understandable when animation or JavaScript is disabled.

## Motion

Use restrained motion only to explain continuity across approved app screenshots:

- Session update travels from desktop to iPhone.
- Handoff visibly pauses, packages, acknowledges, and continues on laptop.

Motion must be short, interruptible, meaningful, and replaceable with a static sequence. Do not
animate recovery words or security-sensitive content decoratively.

## Analytics boundary

Do not add non-essential marketing-cookie UX. First-party funnel metadata is limited to:

`landing_view → trial_start → first_host → first_remote_session → first_handoff → checkout → paid`

Never collect or visually imply collection of prompts, filenames, repository names, commands,
diffs, or transcript content.

## Deliverables

Create one canvas group named `Forge Anywhere — Website Marketing` containing:

- Existing homepage desktop/mobile frames with restrained Anywhere additions.
- Complete `/anywhere` desktop, tablet, and mobile frames.
- Light and dark states consistent with the existing website.
- Static and motion storyboards for desktop → iPhone → laptop continuity.
- Reusable website-only components and variants for pricing, boundary comparison, security detail,
  limits, FAQ, and CTA sections.
- Interaction, responsive, reduced-motion, and accessibility notes.
- A list of required approved app screenshots from the separate app design project.

Do not create authenticated app canvases in this project. When finished, present the canvas map and
the list of app-project exports needed for the marketing demonstration. Do not export production
HTML until the marketing design has been reviewed.
