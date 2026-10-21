# Personal portfolio — Ngô Tiến Phong

A static personal portfolio and résumé site. No framework, no build step, no dependencies —
just HTML, CSS and a small amount of vanilla JavaScript.

**Live site:** https://phongngo053.github.io/portfolio/

## Pages

| File            | What it holds                                                            |
| --------------- | ------------------------------------------------------------------------ |
| `index.html`    | Home — hero, about, stack, featured projects, experience, stats, CTA     |
| `projects.html` | All projects with a language filter                                       |
| `about.html`    | Long bio, timeline, working principles, and a contact form               |

## Running it locally

Any static file server works. For example:

```bash
python -m http.server 8080
# then open http://localhost:8080
```

`npx serve .` works too. Opening `index.html` directly from disk also works — the site
makes no `fetch()` calls, so there is no CORS problem.

## Structure

```
.
├── index.html
├── projects.html
├── about.html
├── css/
│   └── main.css        # design tokens + all components, in one file
├── js/
│   ├── i18n.js         # lightweight EN/VN runtime + localized dictionaries
│   └── main.js         # nav drawer, scroll spy, reveal, filters, mailto form
└── assets/
    ├── avatar.png
    ├── favicon.svg
    └── projects/*.svg  # one hand-drawn glyph per project
```

The CSS is organised in eight commented sections: tokens, reset & base, typography,
layout primitives, components, page sections, utilities, responsive.

## Internationalisation (i18n)

The site includes built-in support for both **English (default)** and **Vietnamese (VN)**:
- Single-page architecture using `data-i18n`, `data-i18n-html`, `data-i18n-attr`, and `data-i18n-content` attributes.
- Complete copy stored in `js/i18n.js` with instant client-side switching.
- Language selection is persisted in `localStorage` (`phong-lang`).
- Inline pre-paint script prevents flash of untranslated content (FOUC).
- Both desktop nav and mobile drawer include a pill-style EN/VN toggle switch.

## Design system

The visual language — dark neutral palette, blue accent, 28px card radius, Space Grotesk
type scale, underline-link treatments — is modelled on the **Developer X** Webflow template
by BRIX Templates.

Everything in this repository is original: the markup, the stylesheet, the JavaScript, the
project illustrations and the copy. No imagery, icons, logos, text or template code from
Developer X was copied into this project, and this site is not affiliated with, endorsed
by or connected to BRIX Templates.

The only borrowed element is the typeface choice (Space Grotesk, served from Google
Fonts), which is the template's own typeface and central to the look being reproduced.

## Content

Project descriptions, the biography and the contact address come from
[github.com/phongngo053](https://github.com/phongngo053). If anything here is out of date
or wrong, the fix is a pull request away.

## Licence

MIT — see [LICENSE](LICENSE).
