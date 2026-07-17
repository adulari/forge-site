# forge-website

Product website for Forge, served at https://forge.adulari.dev.

- `site/` — deployed static site (built output from Claude Design). Live copy at `/var/www/forge.adulari.dev` on the Forge server, served by nginx with Let's Encrypt TLS.
- `design-src/` — authoritative Claude Design source files (`.dc.html` canvases, `support.js` runtime, `banner.html`).
- `design-prompts/` — product briefs to run through Claude Design before adding new UI to `design-src/` or `site/`.

Design project: https://claude.ai/design/p/eeae8c8b-31e0-47cd-a38d-c1bb96c7de90

## Forge Anywhere design

Forge Anywhere marketing must be designed in the existing website Claude Design project. The
website-only brief is
[design-prompts/forge-anywhere-claude-design.md](design-prompts/forge-anywhere-claude-design.md).
Authenticated Anywhere UI belongs in the existing Forge app Claude Design project and Emberline
app shell; its separate extension brief lives at
`mobile/redesign/FORGE_ANYWHERE_CLAUDE_DESIGN_PROMPT.md` in the Forge repository. Never create a
second app or independently restyle either surface before the relevant Claude Design export is
approved.

## Deploy

```sh
sudo cp -r site/. /var/www/forge.adulari.dev/
sudo chown -R www-data:www-data /var/www/forge.adulari.dev
```

nginx vhost: `/etc/nginx/sites-available/forge.adulari.dev` (`/docs` → `docs.html`). Cert auto-renews via `certbot.timer`.
