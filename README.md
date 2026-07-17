# Forge site

Maintainable static source for [forge.adulari.dev](https://forge.adulari.dev), including the Forge Anywhere launch pages and legal documents.

## Commands

```sh
npm run check
npm run build
npm run dev
npm run smoke:external
```

`npm run build` copies the deployable site to `dist/`. The project has no runtime or build dependencies. `npm run smoke:external` is deliberately separate: run it during a connected launch check, not as part of offline CI or the deterministic build.

## Deployment

Serve `dist/` as static files. Route directories use `index.html`, so both `/anywhere` and `/anywhere/` work with standard static hosting. `src/_headers` is copied into the build for hosts that support the Cloudflare Pages/Netlify header format; nginx deployments must apply the same CSP, Permissions Policy, referrer policy, MIME sniffing, framing, and cross-origin policies with `add_header ... always`.

The Anywhere trial and billing URLs target `https://app.forge.adulari.dev`. DNS, TLS, external CTA responses, the same-origin `/v1/events` proxy, and legal owner/counsel review are explicit blocking gates in [LAUNCH_CHECKLIST.md](LAUNCH_CHECKLIST.md); they do not make offline builds depend on network state.

## Analytics contract

`src/site.js` exposes `window.forgeFunnel.track(event)`. It accepts only the funnel events documented in `PRODUCT.md` and sends only schema version 1, the event name, normalized page path, and client timestamp to the first-party `/v1/events` endpoint. It never accepts arbitrary properties or reads page content, query strings, referrers, filenames, prompts, commands, diffs, or transcript data. The endpoint sets no cookie and stores no IP address or browser identifier.
