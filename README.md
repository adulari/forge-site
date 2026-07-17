# forge-website

Product website for Forge, served at https://forge.adulari.dev.

- `site/` — deployed static site (built output from Claude Design). Live copy at `/var/www/forge.adulari.dev` on the Forge server, served by nginx with Let's Encrypt TLS.
- `design-src/` — authoritative Claude Design source files (`.dc.html` canvases, `support.js` runtime, `banner.html`).
- `design-prompts/` — product briefs to run through Claude Design before adding new UI to `design-src/` or `site/`.

Design project: https://claude.ai/design/p/eeae8c8b-31e0-47cd-a38d-c1bb96c7de90

## Forge Anywhere design

Forge Anywhere UI must be designed in Claude Design, starting from the existing Forge project and visual language. The complete brief is [design-prompts/forge-anywhere-claude-design.md](design-prompts/forge-anywhere-claude-design.md). Do not hand-build or independently restyle these surfaces before the approved Claude Design export is committed.

## Deploy

```sh
sudo cp -r site/. /var/www/forge.adulari.dev/
sudo chown -R www-data:www-data /var/www/forge.adulari.dev
```

nginx vhost: `/etc/nginx/sites-available/forge.adulari.dev` (`/docs` → `docs.html`). Cert auto-renews via `certbot.timer`.
