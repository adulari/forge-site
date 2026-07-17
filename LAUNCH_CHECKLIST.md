# Forge Anywhere launch blockers

The public launch and homepage CTA remain blocked until every item below is checked by the named owner. These are deployment gates, not build-time checks, so local and offline builds remain deterministic.

## Infrastructure owner

- [ ] `forge.adulari.dev`, `app.forge.adulari.dev`, and the Anywhere API DNS records resolve from outside the operator network to the intended Cloudflare zones and restricted origin.
- [ ] `npm run smoke:external` passes against production after DNS and TLS are active.
- [ ] Production serves the policy in `src/_headers` (or an equivalent nginx configuration) on HTML and error responses.
- [ ] The same-origin marketing `POST /v1/events` route proxies to the Anywhere service with its strict body and rate limits intact.

## Product owner and counsel

- [ ] `[LEGAL ENTITY NAME]`: update the legal-document source only after counsel confirms the contracting and data-controller identity.
- [ ] `[LEGAL POSTAL ADDRESS]`: add the owner-approved public contact only after counsel confirms the required details.
- [ ] `[GOVERNING LAW AND JURISDICTION]`: update the terms only after counsel approves the consumer and business wording.
- [ ] Counsel reviews privacy, terms, refunds, Paddle merchant-of-record language, retention, export/deletion, and AGPL separation before paid launch.

Do not infer or publish these placeholder values from repository names, domain registration, VPS location, or developer residence.
