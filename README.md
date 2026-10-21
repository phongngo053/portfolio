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
│   └── main.js         # nav drawer, scroll spy, reveal, filters, mailto form
└── assets/
    ├── avatar.png
    ├── favicon.svg
    └── projects/*.svg  # one hand-drawn glyph per project
```

The CSS is organised in eight commented sections: tokens, reset & base, typography,
layout primitives, components, page sections, utilities, responsive.

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
