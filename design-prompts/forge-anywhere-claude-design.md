# Claude Design brief: Forge Anywhere

Use this brief in the existing Forge Claude Design project:

https://claude.ai/design/p/eeae8c8b-31e0-47cd-a38d-c1bb96c7de90

This is the complete product-design scope for Forge Anywhere. Treat the existing Forge website and app as the visual source of truth. Design the new work in Claude Design before any new Forge Anywhere UI is exported or implemented.

## Your role

Act as the lead product designer for Forge Anywhere. Produce a coherent, implementation-ready system covering:

1. The public Forge Anywhere marketing experience inside the existing Forge website.
2. The authenticated Forge Anywhere web and mobile application flows.
3. Every important loading, empty, offline, error, destructive, entitlement, security, and recovery state.

The result should feel like a native expansion of Forge, not a separate SaaS template. Preserve the existing Forge identity and improve only what is necessary to make Anywhere understandable, trustworthy, and easy to operate.

## Non-negotiable source of truth

- Start from the existing Forge Claude Design project and its current landing/docs canvases.
- Preserve the current information hierarchy, Forge mark, orange/cream/near-black palette, typography, terminal/workshop character, navigation language, light/dark behavior, responsive behavior, and motion character.
- The existing public homepage remains a Forge homepage. Do not redesign or replace it with an Anywhere homepage.
- Add Forge Anywhere on top of the existing site through one restrained homepage callout, a navigation entry, and a dedicated `/anywhere` experience.
- For authenticated product screens, preserve the existing Forge mobile/web app structure, session controls, and components. Anywhere should extend the product rather than create a second app shell.
- Do not use the discarded hand-built `forge-site` redesign as a reference.
- Do not invent product capabilities, prices, quotas, legal promises, security guarantees, or team features beyond this brief.
- Legal copy is not part of this design pass. Reserve sensible footer/settings locations for privacy, terms, and refunds, but do not write or design full legal documents yet.

## Product contract

Forge is free and open-source. Local use, local history, loopback/LAN access, direct device pairing, and user-managed `forge serve --anywhere` tunnels remain free.

Forge Anywhere is the optional paid, end-to-end encrypted companion for individual developers. Its positioning is:

> Leave your desk without leaving your Forge session.

The public launch headline is:

> Your Forge sessions, everywhere.

Forge Anywhere provides:

- A managed encrypted relay and stable host identity.
- A personal fleet of up to three active hosts.
- Unlimited personal controller devices.
- 5 GB of encrypted cloud sync/history.
- Remote jobs for enrolled hosts.
- Generic push notifications that never contain workspace content.
- Safe workspace handoff between hosts.
- End-to-end encrypted replay links with expiry and revocation.

Commercial facts:

- EUR 10 per month.
- EUR 79 per year.
- Show monthly and annual pricing together.
- Annual is selected by default.
- 14-day trial without a card.
- The trial starts when the first host connects, not when the user merely visits or signs in.
- One trial per GitHub account.
- Billing is handled by Paddle.
- No permanent hosted free tier, lifetime deal, advertising, model hosting, or AI-provider markup.
- V1 is personal-only. Do not design teams, organizations, shared administration, roles, or enterprise controls.

Limits:

- Three active hosts.
- Unlimited personal controller devices.
- 5 GB encrypted cloud storage.
- Workspace capsules up to 100 MB compressed.
- Individual files over 25 MB are rejected from handoff capsules.
- Replay shares can expire after 24 hours, 7 days, or 30 days; 30 days is the maximum.

Core trust statement:

> Forge stays open source and free. Anywhere is optional and end-to-end encrypted.

Local Forge must visibly remain usable when Anywhere is disabled, unreachable, expired, suspended, over quota, or unpaid.

## Audiences and jobs to be done

Primary audience: an individual developer already using Forge locally, often across a desktop, laptop, iPhone, and browser.

They need to:

- Understand in seconds what Anywhere adds and what remains free.
- Start a no-card trial with GitHub.
- Enroll a first host without wondering whether the trial has already started.
- Securely bootstrap encryption and record a recovery phrase.
- Pair additional personal devices with confidence.
- See which hosts are online, offline, busy, or unavailable.
- Continue controlling a live Forge session away from the original machine.
- Browse encrypted synced history while offline.
- Queue work for a remote host.
- Move an idle session and its complete safe workspace between machines.
- Share a read-only encrypted replay with a clear expiry.
- Diagnose sync, relay, quota, entitlement, and recovery problems.
- Revoke a lost device without creating ambiguity about key rotation.
- Download/export/delete their data and manage billing.

## Design character

Use the current Forge design project as the authority. The desired qualities are:

- Mechanical, candid, energetic, and technically precise.
- A trusted workshop instrument rather than a glossy corporate dashboard.
- Forge orange for action and heat; warm cream and near-black work surfaces for contrast.
- Product demonstrations and real stateful interfaces instead of abstract cloud illustrations.
- Specific security and operational language instead of vague shield imagery or claims such as “military-grade.”
- Dense enough for developers, but calm enough to scan under pressure.

Avoid:

- Generic blue/purple SaaS gradients.
- Glassmorphism and decorative card grids.
- Stock developer photography.
- Oversized cloud/network diagrams as hero art.
- Hidden pricing or an ambiguous free/paid boundary.
- Celebration that trivializes recovery keys, device revocation, deletion, or handoff risk.
- Treating offline status as an error when local Forge is still available.

## Deliverable structure

Create four clearly named canvas groups in the existing project:

1. `Forge Anywhere — Marketing`
2. `Forge Anywhere — App · Desktop/Web`
3. `Forge Anywhere — App · Mobile`
4. `Forge Anywhere — Components & States`

For every major flow, provide:

- A polished desktop/web frame.
- A polished mobile frame where the flow is available on mobile.
- Intermediate and failure states, not just happy-path endpoints.
- Implementation notes for interaction, validation, responsive changes, and accessibility.
- Reusable components and named variants rather than one-off duplicated frames.

Use realistic product copy from this brief. Do not use lorem ipsum.

## Public marketing scope

### Existing Forge homepage additions

Keep the current homepage composition intact. Add only:

- `Anywhere` to the existing navigation without crowding or restructuring it.
- One clearly secondary homepage section showing the three-part story: begin on desktop, respond from iPhone, hand the complete workspace to a laptop.
- The trust statement and a link to `/anywhere`.
- A single homepage CTA for Anywhere. It must not replace the primary open-source Forge installation/GitHub path.

The relationship should be immediately clear:

- Forge is the free local product.
- Anywhere is the optional hosted companion.

### `/anywhere` landing experience

Design one complete, responsive page with this narrative:

1. Hero: “Your Forge sessions, everywhere.”
2. Subhead: “Leave your desk without leaving your Forge session.”
3. Primary CTA: “Start 14-day trial with GitHub.”
4. Trust statement beside or immediately below the CTA.
5. A polished product demonstration showing desktop → iPhone → laptop handoff. Prefer a believable sequence of real UI surfaces over a decorative illustration.
6. A clear “Forge is free / Anywhere adds” boundary comparison.
7. Feature sections for live remote control, encrypted sync/history, host fleet, remote jobs/push, workspace handoff, and replay shares.
8. A security and recovery section that explains end-to-end encryption, recovery words, authorized devices, visible metadata, and the consequence of losing all keys.
9. A pricing section showing EUR 79/year and EUR 10/month together, with annual selected by default and “14 days, no card” stated clearly.
10. A concise limits section: three hosts, unlimited personal devices, 5 GB, personal-only.
11. An entitlement/continuity reassurance: local Forge is unaffected if Anywhere expires or is unavailable.
12. A practical FAQ.
13. Final CTA and existing Forge footer.

FAQ topics:

- What remains free?
- When does the trial start?
- Can the service read sessions, prompts, commands, filenames, diffs, or repositories?
- What happens if the recovery phrase is lost?
- What happens after cancellation or payment failure?
- Does Anywhere replace local backups or Git?
- Can I use it for a team?
- What happens above 5 GB?
- Can I still use my own tunnel?

### Marketing interaction requirements

- Annual/monthly selection must be a real accessible choice, not two competing primary buttons.
- Annual is selected by default.
- CTA destinations should visibly communicate GitHub authentication and no-card trial behavior.
- Animation may demonstrate continuity across devices, but the story must remain understandable with reduced motion or JavaScript disabled.
- Do not add non-essential marketing-cookie UX. Funnel tracking is first-party metadata only.

## Authenticated product information architecture

Anywhere lives inside the existing Forge app. Design the smallest coherent navigation addition that supports:

- Anywhere overview/status.
- Hosts.
- Devices and pairing.
- Synced/offline history.
- Remote jobs.
- Notifications.
- Storage.
- Handoff.
- Replay shares.
- Plan and billing.
- Account export/deletion and logout.

Do not create a separate generic admin dashboard. Make the current session and host context available wherever it prevents mistakes.

## Flow 1: GitHub sign-in and account bootstrap

Design:

1. Entry from marketing CTA and from an existing Forge app settings/connection surface.
2. GitHub device-flow sign-in with clear pending, expired, denied, retry, and success states.
3. Returning-account path that restores access on an authorized device.
4. New-account explanation before recovery material is generated.
5. A one-time 24-word recovery phrase display.
6. Strong instructions to record it offline; support cannot recover it.
7. Sampled-word confirmation using several requested positions.
8. Confirmation failure, restart, and abandon paths.
9. First-host enrollment handoff to the CLI command `forge anywhere enable --name NAME`.
10. A waiting state that explicitly says the trial has not started until the first host connects.

Security requirements:

- Never offer clipboard persistence, analytics, screenshots, cloud backup, or automatic storage for the recovery phrase.
- Make “shown once” and “cannot be recovered by support” unmissable without using panic language.
- Avoid visually exposing recovery words in thumbnails, background frames, or design documentation examples; use numbered redacted placeholders in shared mockups.

## Flow 2: Pairing another device

Design both sides of a ten-minute pairing flow:

- New device displays or presents a QR challenge containing its public exchange key.
- Authorized device scans or pastes the challenge.
- Review shows account identity, new device name/type, key fingerprint, expiry countdown, and a clear approval action.
- Success explains that the account key was wrapped to the new device.
- Expired, already-used, malformed, wrong-account, offline, camera-denied, and rejected states.

Pairing is security-sensitive. Approval must be explicit and should encourage the user to compare the device in front of them. Do not imply that scanning alone grants access.

## Flow 3: Anywhere overview

Design a useful personal fleet overview, not a vanity dashboard. It should answer:

- Am I connected through Direct or Anywhere transport?
- What is my entitlement state?
- Which host currently owns or runs the selected session?
- Which hosts are online?
- Is encrypted sync current?
- How much encrypted storage is used?
- Are there pending jobs, handoffs, device actions, or recovery warnings?

Provide first-use, healthy, degraded, offline, no-host, trial-nearly-over, read-only, suspended, and over-quota variants.

## Flow 4: Hosts and transport selection

Design:

- Host list with a maximum of three active hosts.
- Host detail with stable name/identity, last heartbeat, connector version, capabilities, active sessions, current lease context, and safe revoke/disable action.
- Add-host instructions using the CLI.
- Fourth-host limit state with a direct route to revoke or disable another host.
- Online, connecting, stale, offline, disabled, version-incompatible, relay-unavailable, and entitlement-blocked states.
- A transport selector that distinguishes `Direct` from `Anywhere` without changing existing direct-server behavior.

Direct/LAN access remains available even if Anywhere is down. Status copy and color must never suggest that Forge itself is unusable merely because the managed connector is offline.

## Flow 5: Live remote session control

Extend the current Forge session UI rather than redesigning it. Show:

- Selected host and transport.
- Connection/reconnection quality without exposing unnecessary networking detail.
- The existing remote-v8 session behavior unchanged.
- A handoff entry point only when eligible.
- Generic notifications/inbox indicators.
- Large encrypted transfer progress when payloads move through temporary blob storage.
- Graceful switching back to direct transport when available.

Cover reconnect, duplicate controller, host sleeping, session ended, entitlement transition, and local-only fallback states.

## Flow 6: Encrypted sync and offline history

Design:

- Synced session/history browsing that visually fits the existing history experience.
- Clear last-sync and offline availability language.
- Device-local encrypted cache state.
- Initial sync, incremental sync, paused, retrying, current, offline, read-only, over-quota, and key-epoch mismatch states.
- File-conflict copies that preserve both versions rather than pretending one was overwritten.
- Tombstone/deletion confirmation and eventual consistency messaging.
- Per-record diagnostics only where actionable; avoid overwhelming ordinary users with protocol language.

Content that can sync includes sessions, messages, checkpoints, tool calls, routing decisions, usage, compactions, memories, user settings, commands, skills, agents, and workflows.

Never imply that provider credentials, keyring contents, embeddings/indexes, push secrets, host schedules, queue internals, caches, build output, checkpoint scratch files, pending uploads, or arbitrary uploads are synced.

## Flow 7: Remote jobs and generic push

Remote jobs:

- Select an enrolled host.
- Enter an optional working directory and session title.
- Queue an encrypted request.
- Show queued locally, uploaded, waiting for host, claimed, running, completed, failed, canceled, expired, and entitlement-blocked states.
- Explain that path/title content is encrypted while routing metadata remains visible to the service.

Push notifications:

- Opt-in and iOS permission flow.
- Enabled, denied, disabled, token-refreshing, and service-unavailable states.
- Explain that lock-screen copy is generic: “Open Forge to view an update.”
- Never preview prompts, commands, filenames, repository names, diffs, or transcript content in notification mockups.

## Flow 8: Workspace handoff

Treat handoff as a deliberate, high-trust wizard with visible rollback guarantees.

Design these steps:

1. Choose a session at an idle checkpoint.
2. If a tool call is active, wait for it or explicitly interrupt it before proceeding.
3. Choose source and destination hosts, never the same host.
4. Preflight scan and capsule summary.
5. Show blocked items as a visible actionable list. Do not silently omit non-secret user files.
6. Confirm capsule creation and temporary encrypted upload.
7. Destination verifies base commit and prepares an isolated detached worktree.
8. Patch/extraction/import progress.
9. Destination acknowledgement.
10. Lease transfer only after acknowledgement.
11. Success with a clear “continue on destination” action.

Preflight must communicate rejection of:

- Active tool calls unless finished or interrupted.
- Missing base commits.
- `.git` content.
- Symlinks and special/device files.
- Absolute or traversal paths.
- Detected secrets.
- Ignored caches and build output.
- Files above 25 MB.
- Compressed capsules above 100 MB.

Failure variants:

- Patch conflict.
- Unsafe file.
- Missing commit.
- Destination offline.
- Capsule expired.
- Storage quota exceeded.
- Session ID collision/remap.
- Interrupted upload/download.
- Destination import failure.
- Acknowledgement timeout.

Every failure must state that the temporary destination worktree is removed and the source lease remains unchanged when transfer did not complete. Make recovery actions concrete: inspect details, retry, choose another host, return to source, or cancel.

## Flow 9: Encrypted replay shares

Design:

- Create share from an eligible session/replay.
- Select expiry: 24 hours, 7 days, or 30 days.
- Explain what the recipient can view and that the service stores ciphertext.
- Creation/upload progress.
- Success with copy link, expiry timestamp, and revoke action.
- List active/expired/revoked shares.
- Public no-login retrieval screen with decrypting, ready, wrong/missing key fragment, corrupted, expired, revoked, unavailable, and deleted states.
- Read-only replay viewer that clearly cannot control a live session or browse unrelated account data.

Never put the decryption secret in a server-visible query parameter or imply that the service can recover it.

## Flow 10: Devices and key rotation

Design:

- Device list with “this device,” type, enrollment date, last seen, and key/fingerprint details on demand.
- Pair-device entry point.
- Lost-device revocation requiring strong confirmation.
- Recovery phrase verification where required, with words kept in memory only.
- Atomic progress state: revoke tokens and hosts, create a new data-key epoch, wrap it only to remaining devices and recovery, then commit.
- Success that explains future data uses the new epoch.
- Failure that clearly says whether nothing changed or which recovery action is required.

Avoid a generic red “Delete” action that hides the key-rotation consequence.

## Flow 11: Storage and quota

Design:

- Used bytes versus 5 GB, with accessible text in addition to a meter.
- Plain explanation of what counts toward storage.
- Download and deletion actions that remain available above quota.
- Over-quota state that blocks new writes but not access to existing encrypted data.
- Retention summaries for temporary relay blobs/capsules, superseded sync revisions, tombstones, shares, and expired subscriptions.
- Empty, calculating, stale, nearly full, full, and cleanup-in-progress states.

## Flow 12: Billing and entitlement lifecycle

Use this exact state model:

- `trialing`: full access for 14 days from first host connection.
- `active`: full access through the paid period.
- `grace`: seven days after payment failure; full read access and relay service continue.
- `read_only`: 30 days after trial/period/grace expiry; download, restore, delete, export, and billing work, but new relay work, uploads, commands, shares, and capsules are blocked.
- `suspended`: billing, export, and deletion only until the 90-day retention deadline.

Design:

- Annual and monthly plan choice with annual default.
- Trial status and exact start/end explanation.
- Paddle checkout departure and return states.
- Manage-billing portal action.
- Active renewal, cancel-at-period-end, payment failure, grace countdown, read-only, suspended, resubscribed, webhook-delay, and checkout-failed states.
- Warnings 30 and 7 days before retained cloud data is scheduled for deletion.

Cancellation remains active through the paid-through date. A successful payment restores service immediately. Never imply that cancellation deletes local Forge data.

## Flow 13: Account controls and recovery

Design:

- Log out locally: revoke local tokens/keys while preserving local Forge data.
- Disable/revoke a host: disconnect that host without changing local Forge.
- Account export: include clear preparation/progress/download-expiry states.
- Account deletion: explicit scope, idempotent progress, 24-hour live-data deletion target, and encrypted-backup expiry within 30 days.
- Recovery on a new device using the 24-word phrase.
- Wrong phrase, phrase checksum failure, unavailable wrapped epoch, revoked device, and lost-everything terminal state.

Be honest: if every authorized device and the recovery phrase are lost, encrypted cloud content cannot be recovered by support.

## Shared state system

Create reusable, named variants for:

### Entitlement

- Trial not started.
- Trialing.
- Active.
- Grace.
- Read-only.
- Suspended.
- Retention deadline approaching.

### Host

- Online and idle.
- Online and busy.
- Connecting.
- Stale.
- Offline.
- Disabled/revoked.
- Connector update required.

### Sync

- Current.
- Uploading/downloading.
- Offline with cached data.
- Retrying.
- Conflict copy created.
- Over quota.
- Key update required.
- Read-only.

### Handoff

- Eligible.
- Waiting for checkpoint.
- Scanning.
- Blocked with actionable files.
- Packaging/uploading.
- Waiting for destination.
- Applying/importing.
- Awaiting acknowledgement.
- Complete.
- Rolled back.
- Expired.

### Generic application states

- First-use empty.
- Loading/skeleton.
- Slow network.
- Offline.
- Partial/stale data.
- Permission denied.
- Session expired and re-authentication required.
- Service unavailable while local Forge remains available.
- Destructive action confirmation.
- Success with next action.

Status must never rely on color alone. Pair color with text, iconography, and where useful a timestamp or next action.

## Security and privacy UX

The service may see routing identifiers, timestamps, sizes, object kind, and signatures. It must not be presented as seeing plaintext payloads.

Encryption model to communicate in user language:

- Devices exchange keys using X25519.
- Devices sign with Ed25519.
- Payloads use XChaCha20-Poly1305.
- Account data has key epochs.
- Each encrypted object is signed and replay-protected.
- Device revocation rotates to a new epoch for remaining devices and recovery.

Do not surface algorithm names everywhere. Put them in inspectable technical details while primary copy answers practical questions: who can read this, what happens if a device is lost, what does the service know, and can support recover the data?

Never show these as analytics or notification content:

- Prompts.
- Filenames.
- Repository names.
- Commands.
- Diffs.
- Transcript content.

Marketing analytics are limited to these first-party funnel events:

`landing_view → trial_start → first_host → first_remote_session → first_handoff → checkout → paid`

## Content and terminology

Use consistently:

- `host` for a machine running the Forge connector.
- `device` for a personal controller authorized to decrypt account data.
- `Direct` and `Anywhere` for transport choices.
- `workspace handoff` for moving a paused session and safe workspace capsule.
- `replay share` for an expiring encrypted read-only link.
- `recovery phrase` for the 24 BIP39 words.
- `encrypted storage` rather than generic “cloud drive.”
- `session lease` only in technical/detail views; primary copy should say which host currently owns the session.

Avoid interchangeably calling hosts “devices.” Avoid “sync everything,” “zero knowledge,” “unhackable,” or “military-grade.”

## Responsive behavior

Design for:

- Desktop web at approximately 1440 px.
- Compact desktop/tablet at approximately 1024 px.
- Mobile web/iPhone at approximately 390 px.
- Long localized strings and 200% zoom.

On mobile:

- Prioritize current host/session, next action, and critical state.
- Move secondary technical detail into disclosures or detail screens without hiding consequences.
- Keep security confirmations and recovery flows explicit.
- Do not require hover, drag-only controls, or tiny tap targets.

## Accessibility requirements

Target WCAG 2.2 AA:

- Semantic headings and landmarks.
- Logical keyboard and screen-reader order.
- Visible focus states.
- Minimum 44 px touch targets where practical.
- Sufficient text/control contrast in light and dark modes.
- 200% zoom without loss of actions or content.
- Error summaries plus field-level errors.
- Accessible progress and status announcements.
- Reduced-motion alternatives.
- No information communicated by color, animation, hover, or device mockup alone.
- Recovery word and QR flows must have accessible non-camera/non-visual alternatives.

## Motion and demonstration

Use restrained motion to explain continuity:

- A session update can travel from desktop to iPhone.
- Handoff can visibly pause, package, acknowledge, and continue on laptop.
- Sync and relay status can transition without page jumps.

All animations should be short, interruptible, and meaningful. Provide reduced-motion static alternatives. Never animate recovery words or destructive confirmations decoratively.

## Component inventory

Create implementation-ready components and variants for at least:

- Existing Forge global navigation extended with Anywhere.
- Primary/secondary/destructive actions.
- Transport selector.
- Host row/card and host status.
- Device row and fingerprint detail.
- Entitlement banner/status badge.
- Trial countdown.
- Storage meter.
- Sync status.
- Offline/cached indicator.
- Remote job row and state timeline.
- Handoff stepper and preflight issue list.
- Replay share row and expiry selector.
- QR challenge/scanner fallback.
- Recovery phrase presentation and sampled confirmation.
- Security detail disclosure.
- Destructive confirmation dialog/sheet.
- Inline error, page error, empty state, skeleton, and stale-data banner.
- Pricing choice.
- FAQ disclosure.
- Product demo device frames that reuse real interface components.

## Final output checklist

Before considering the design complete, verify that the project includes:

- Existing Forge homepage with restrained Anywhere additions.
- Complete `/anywhere` marketing page.
- Desktop/web and mobile authenticated information architecture.
- All 13 product flows in this brief.
- Entitlement, host, sync, handoff, offline, error, and destructive variants.
- A three-device desktop → iPhone → laptop demonstration.
- Exact pricing and limits.
- Clear free-versus-paid boundary.
- End-to-end encryption and recovery explained without overclaiming.
- Direct/local Forge continuity in degraded and unpaid states.
- Accessible light/dark and responsive variants consistent with the current Forge project.
- Reusable named components with implementation notes.
- No team/organization UI, no invented legal pages, and no unrelated redesign of Forge.

When finished, present the canvas map and a concise list of unresolved product questions. Do not export production HTML until the full flow and state coverage has been reviewed.
