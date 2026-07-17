# Forge site

Maintainable static source for [forge.adulari.dev](https://forge.adulari.dev), including the Forge Anywhere launch pages and legal documents.

## Commands

```sh
npm run check
npm run build
npm run dev
```

`npm run build` copies the deployable site to `dist/`. The project has no runtime or build dependencies.

## Deployment

Serve `dist/` as static files. Route directories use `index.html`, so both `/anywhere` and `/anywhere/` work with standard static hosting. The Anywhere trial and billing URLs are placeholders on `https://app.forge.adulari.dev`; they can be activated independently of this site.

## Analytics contract

`src/site.js` exposes `window.forgeFunnel.track(event)`. It accepts only the funnel events documented in `PRODUCT.md` and sends only the event name, page path, and timestamp to the first-party `/v1/events` endpoint. It never accepts arbitrary properties or reads page content, query strings, referrers, filenames, prompts, commands, diffs, or transcript data.

