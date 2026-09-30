# Joran Schaefer — portfolio

Personal portfolio site for Joran Schaefer, creative developer at VML (formerly Wunderman Thompson Benelux) since 2015. English only. Served locally by Herd at `schaeferj.test`.

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the build (port 4173)

Dependencies: `vite` and `sass-embedded` (styles are SCSS, compiled by Vite). No framework. Keep it that way: the page itself claims "no framework, two dependencies: Vite and Sass".

## Structure

| File | What it does |
| --- | --- |
| `index.html` | All page markup and most copy |
| `src/main.js` | Entry: imports everything, renders the client marquee, clock, scroll reveals, Lab cursor bubble |
| `src/style.scss` | Global styles and design tokens (`:root`), dark mode via `prefers-color-scheme` |
| `src/data/clients.json` | Client names for the marquee, alphabetical. Edit this to add or remove clients |
| `src/banner.js` / `banner.scss` | Work A: the demo banner (size switcher, frame timeline, 3-loop IAB limit, clickTag, live kB weight of the compiled CSS via `?inline`) |
| `src/mail.js` / `mail.scss` | Work B: the demo email (Gmail / Outlook 2016 / dark mode, desktop/mobile, VML source view) |
| `src/site.js` | Work C: code viewer showing the real source via `?raw` imports, plus the "Remix this page" token panel |
| `src/highlight.js` | Tiny regex syntax highlighter (js, css, scss, html) used by the code demos |
| `public/work/` | Screenshots of DEFINED sites (currently unused, thumbnails are commented out) |

## Page sections

1. Hero, then the client marquee
2. **01 What I make**: three kinds of work, each with a live demo: A Display ads, B HTML mails, C Campaign pages & minisites
3. **02 Lab**: internal VML tools and personal experiments
4. **03 Then & now**: 2015 CV skill bars vs. now, education/work timeline
5. Contact, footer

## Conventions

- Design tokens live on `:root` in `style.scss`. The remix panel overrides `--accent`, `--radius`, `--marquee-speed` and `--display` at runtime, so use those variables instead of hard-coded values where it makes sense. Anything that must change at runtime stays a CSS custom property; Sass `$variables`, mixins and loops are for build-time constants only.
- Fonts: Bebas Neue (display), Instrument Sans (body), JetBrains Mono (labels/code), from Google Fonts.
- Copy is British English ("colours", "centre"). Brand names are spelled the way the brand writes them: MediaMarkt, bpost, Škoda, KIA.
- `site.js` shows its own source files in the viewer. Keep them readable, and avoid regex literals in shown files (the highlighter doesn't handle them). Regex belongs in `highlight.js`, which isn't shown.
- If you add a source file, add it to the `files` list in `site.js` so the viewer and line count stay honest.
- Keep numbers consistent across the page: hero stats, banner frames and mail copy all say 11 years, 100+ brands and 1k+ mails.

## Content rules

- VML client work is under NDA: **name brands, never show client assets, screenshots or internal/staging URLs.** Every demo is built for this page.
- Don't claim things that can't be backed up by Joran's actual work.
- Deliberately left out: RoadToRank14 / RTR14+ (World of Warcraft automation).
- Contact details come from Joran. The LinkedIn URL `linkedin.com/in/joranschaefer` has not been confirmed yet.

## Open items

- Confirm the LinkedIn URL.
- The DEFINED thumbnails block (Defined Detailing, Antwrap, Shogun PDR, LMNT) is commented out in `index.html`: decide whether to bring it back.
- Pink Dream and Nether Crusade were dropped from the Lab for lack of a good description.
- `og:image` points at `/work/antwrap.png`, so replace it with a proper share image.
