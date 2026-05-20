# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static marketing site for **Fleetmool** (fleet operations) and **F4W / Fleetmool for Workshops**, targeted at Mexico & LATAM. Pure vanilla HTML/CSS/JS — no framework, no transpiler. `package.json` exists only to pin `wrangler` for Cloudflare Pages deployment.

## Run locally

```bash
python3 -m http.server 8080   # http://localhost:8080
```

Hard-refresh after editing `styles.css` / `script.js`. The HTML files cache-bust with `?v=N` on the stylesheet link (`<link rel="stylesheet" href="styles.css?v=9">`) — **bump that integer in both `index.html` and `f4w.html`** when shipping CSS or JS changes you need to land for returning visitors. The two files must stay in sync.

`npm run preview` boots `wrangler pages dev dist` instead, which mirrors Cloudflare's response headers/edge behavior. Use it when debugging anything Pages-specific (cache, redirects).

## Deploy

Cloudflare Pages project **`fleetmool-landing`** (auto-created on first CI run). Pushes to `main` deploy to production via `.github/workflows/deploy.yml`.

`npm run build` is a literal copy step:

```
cp index.html f4w.html styles.css script.js dist/
```

**Add any new top-level asset (image, font, third HTML page) to that `cp` list in `package.json`** — anything not listed is silently dropped. The explicit allowlist is what keeps `CLAUDE.md`, `README.md`, `.remember/`, etc. out of the public bundle.

`npm run deploy` runs build + `wrangler pages deploy` locally. Without `--branch=main` (CI passes it; the local script doesn't) it creates a **preview** deployment — useful for sharing a one-off URL without overwriting production.

### PR previews

Opening or pushing to a PR triggers `.github/workflows/preview.yml`, which deploys the branch to `https://preview-pr-<N>.dev.fleetmool.com` (PR number, stable across pushes — newer pushes overwrite the same URL). A sticky comment on the PR shows the link. The custom subdomain requires `*.dev.fleetmool.com` to be configured as a Pages preview-alias custom domain on the project (one-time Cloudflare dashboard step); the `<branch>.fleetmool-landing.pages.dev` fallback always works regardless.

`preview-cleanup.yml` deletes a PR's preview deployments when the PR is closed, and runs a daily sweep that also removes previews for PRs untouched for **14 days** (`MAX_INACTIVE_DAYS`, overridable on manual `workflow_dispatch`).

Required GitHub Actions secrets: `CLOUDFLARE_API_TOKEN` (scoped to `Cloudflare Pages: Edit`) and `CLOUDFLARE_ACCOUNT_ID`. The cleanup workflow additionally uses the built-in `GITHUB_TOKEN` to check PR state.

## Architecture

`index.html` (Fleetmool, `<body data-page="index">`) and `f4w.html` (F4W, `<body data-page="f4w" data-accent="blue">`) share `styles.css` and `script.js`. Every JS module is feature-detected by root selector and no-ops when its anchor is absent, so the same script serves both pages without branching.

### Accent theming via `data-accent`

`:root` defines tokens with the Fleetmool **oxblood** (`#9F1F2E`) as the primary accent, named `--red`, `--red-hover`, `--red-text`, `--red-glow-rgb`, etc. `body[data-accent="blue"]` (F4W) **rebinds the same `--red*` slots** to cobalt (`#2563EB`). All downstream components (buttons, badges, gradients, glows, links) reference only the `--red*` names.

**To add another accent**: append a `body[data-accent="X"] { --red: ...; --red-hover: ...; ... }` block in section 2 of `styles.css`. Do **not** introduce parallel `--blue-primary` / `--green-primary` tokens — that breaks the rebinding pattern.

### `styles.css` structure

~2000 lines, numbered sections marked with `/* ── N. TITLE ── */`. Order is **primitives → in-DOM-order sections → utilities**:

1. Reset, tokens (`:root`), base, typography, layout — sections 1–5
2. Primitives reused everywhere (nav, buttons, chips) — sections 6–8
3. Page sections in roughly the order they appear in `index.html` (hero with dashboard mockup, trust bar, ecosystem tabs, feature stories, AI, connected workflow, metrics, cases, pricing, final CTA, footer) — sections 9–20
4. Cross-cutting at the end: reveal animation (21), F4W comparison table (21b), responsive overrides (22)

When adding a new page section, slot the CSS at the matching numbered position rather than appending — the file is read top-to-bottom for review.

### i18n: `data-t` keys + central `T` dictionary

Translations live entirely in `script.js` in `const T = { es: {...}, en: {...} }`. `setLanguage(lang)` walks every `[data-t="namespace.key"]` element and writes `T[lang][namespace][key]` into `textContent`.

When adding copy:

1. Pick a namespace (`hero`, `pricing`, `f4w_hero`, `ecosystem`, `footer`, …) and a key.
2. Add the string to **both** `T.es` **and** `T.en`. A missing key leaves the original HTML text in place — no warning, no error. Run through both locales after adding strings (`localStorage.setItem('fm-lang', 'en'); location.reload()`).
3. Set `data-t="namespace.key"` on the element. The default text in the HTML markup should be the **Spanish** version (the site is Spanish-first; LATAM is the primary market).
4. `<title>` is **not** driven by `data-t` — it's special-cased per page inside `setLanguage()`. If you rename the page or add a new one, update that block.

Language detection order (`detectLanguage()`): stored `localStorage.fm-lang` → timezone heuristic (Mexico TZs → `es`, US/Canada TZs → `en`) → `navigator.language` → default `es`. **There is intentionally no UI language toggle** — don't add one without product approval.

### Interactive modules in `script.js`

All initialized in the `DOMContentLoaded` handler at the bottom of the file. Each is gated by a single root selector and silently exits if absent:

- `initReveal()` — IntersectionObserver adds `.visible` to `.reveal` elements. Stagger with `.d1`–`.d4` (250ms per step). Each element is observed once then released.
- `initCounters()` — animates `[data-counter="500"][data-counter-suffix="+"]`. The attribute is the **numeric target**; the rendered HTML text is replaced during the 1.6s ease-out animation.
- `initEcoTabs()` — segmented pill on the Ecosystem section (`#eco-switcher` → `.eco-panel[data-side]`). Re-measures slider position on resize and after `document.fonts.ready` (the Hanken Grotesk fallback would otherwise misposition it on first paint).
- `initAiAnimation()` — cycles `.ai-node.active` and randomizes `.ai-sensor-bar` heights on each loop in `#ai-viz`.
- `initFlowAutoplay()` — autoplays `.flow-step` in `#flow-list` every 4s. Any click on a step **permanently** stops autoplay (`.user-stopped`); pauses while tab is hidden via `visibilitychange`.
- `initNav()`, `initAnchors()`, `initMobileNav()` — sticky-nav scroll state (`.scrolled` after 16px), smooth-scroll with a **72px header offset** (hard-coded — adjust if nav height changes), hamburger menu.

### CTAs are WhatsApp deep links

All primary CTAs are `https://wa.me/525573221028?text=<url-encoded-message>`. The number is **hard-coded in both HTML files** (~21 occurrences total). When changing it, search-replace across `index.html` and `f4w.html`; `script.js` has none. Preset messages differ by surface: F4W ones reference "F4W" / "mi taller", Fleetmool ones reference "Fleetmool" / "mi flota" — preserve this when adding new CTAs so WhatsApp routing on the receiving end can disambiguate.
