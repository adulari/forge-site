# forge-website

Product website for Forge, served at https://forge.adulari.dev.

- `site/` — deployed static site (built output from Claude Design project). Live copy at `/var/www/forge.adulari.dev` on the forge server, served by nginx with Let's Encrypt TLS.
- `design-src/` — Claude Design source files (`.dc.html` canvases, `support.js` runtime, `banner.html`).

Design project: https://claude.ai/design/p/eeae8c8b-31e0-47cd-a38d-c1bb96c7de90

## Deploy

```sh
sudo cp -r site/. /var/www/forge.adulari.dev/
sudo chown -R www-data:www-data /var/www/forge.adulari.dev
```

nginx vhost: `/etc/nginx/sites-available/forge.adulari.dev` (`/docs` → `docs.html`). Cert auto-renews via `certbot.timer`.
