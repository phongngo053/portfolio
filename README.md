# Personal portfolio — Ngô Tiến Phong

Static personal portfolio for **Ngô Tiến Phong** — Fullstack Developer & Ubuntu Self-Host Builder. No framework, no build step, no dependencies — just plain HTML, CSS, and vanilla JavaScript.

**Live site:** https://phongngo053.github.io/portfolio/

## Pages

| File            | What it holds                                                                       |
| --------------- | ----------------------------------------------------------------------------------- |
| `index.html`    | Home — hero, about, Ubuntu Home Server, featured projects, stack, experience, CTA   |
| `projects.html` | Curated projects with category filters (Live, Bots & AI, Fullstack, Microservices)  |
| `about.html`    | Full bio, timeline, working principles, and an accessible mailto contact form       |

## Running it locally

Any static file server works:

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

`npx serve .` or opening `index.html` directly from disk also works — the site makes no `fetch()` calls, so there are no CORS requirements.

## Structure

```
.
├── index.html
├── projects.html
├── about.html
├── css/
│   └── main.css        # design tokens, container-query featured card, homelab & components
├── js/
│   ├── i18n.js         # lightweight VN (default) / EN runtime + localized dictionaries
│   └── main.js         # nav drawer, scroll spy, reveal, category filters, mailto form
└── assets/
    ├── avatar.webp / avatar.jpg
    ├── favicon.svg
    └── projects/       # live product screenshots & project glyphs
```

## Internationalisation (i18n)

The site supports **Vietnamese (default)** and **English**:
- Uses `data-i18n`, `data-i18n-html`, `data-i18n-attr`, and `data-i18n-content` attributes.
- Full copy lives in `js/i18n.js` with instant client-side switching and `localStorage` persistence (`phong-lang`).
- Vietnamese text is embedded directly in HTML as the default fallback, paired with a pre-paint locale script to avoid FOUC.
- Both desktop navigation and mobile drawer provide a `VN | EN` toggle pill.

## Design system

The visual language — dark neutral palette, blue accent, 28px card radius, Space Grotesk type scale, underline-link treatments — is inspired by the **Developer X** Webflow template by BRIX Templates. All markup, styles, scripts, glyphs, and copy are original.

## Licence

MIT — see [LICENSE](LICENSE).
