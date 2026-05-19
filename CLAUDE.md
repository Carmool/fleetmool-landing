# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static marketing site for **Fleetmool** (fleet operations) and **F4W / Fleetmool for Workshops**, targeted at Mexico & LATAM. Vanilla HTML/CSS/JS — no framework. `package.json` exists only to pin `wrangler` for Cloudflare Pages deployment.

## Run locally

```bash
python3 -m http.server 8080
# open http://localhost:8080
```

Hard-refresh the browser after editing `styles.css` or `script.js`. Both HTML files cache-bust via a `?v=N` query string on `<link rel="stylesheet" href="styles.css?v=9">` — bump that number when shipping CSS changes that need to bypass user caches.

To test the same output Cloudflare Pages will serve (using wrangler's local dev server instead of python): `npm run preview`.

## Deploy

Cloudflare Pages project: **`fleetmool-landing`** on Cloudflare account `416f74acd9056965776eb0103b3b1ee7`.

**Auto-deploy on push to `main`** via `.github/workflows/deploy.yml`. Required repo secrets: `CLOUDFLARE_API_TOKEN` (token with Pages:Edit + Account:Read) and `CLOUDFLARE_ACCOUNT_ID`.

**Manual deploy from local:**

```bash
npm ci
npm run deploy   # builds dist/ + wrangler pages deploy
```

`npm run build` is a plain copy step: `index.html`, `f4w.html`, `styles.css`, `script.js` → `dist/`. The dist directory is what Pages uploads. **If you add a new top-level asset (image, font, html file), add it to the `cp` list in `package.json`** — anything not listed will not be deployed. This explicit allowlist is intentional: it keeps `CLAUDE.md`, `README.md`, `.remember/`, etc. out of the production bundle.

## Architecture

Two pages share one stylesheet and one script:

- `index.html` — Fleetmool (for fleet managers). `<body data-page="index">`.
- `f4w.html` — F4W (for workshops). `<body data-page="f4w" data-accent="blue">`.
- `styles.css` — single design system for both.
- `script.js` — translations, language detection, all interactive behavior.

### Accent-color theming via `data-accent`

The design system defines its tokens in `:root` with the Fleetmool **oxblood** (`#9F1F2E`) as the primary accent under variables named `--red*`. F4W swaps these to **cobalt** (`#2563EB`) by re-binding the same variable names inside `body[data-accent="blue"] { … }` in `styles.css`. Everything downstream (buttons, badges, gradients, glows) references `--red`, `--red-hover`, `--red-text`, `--red-glow-rgb`, etc. — so to add a new accent, add a new `body[data-accent="X"]` block that overrides those variables. Don't introduce parallel `--blue-primary` tokens; reuse the `--red*` slots.

### i18n: `data-t` keys + central `T` dictionary

Translations live entirely in `script.js` in a `const T = { es: {...}, en: {...} }` object (lines 6–601). The DOM is annotated with `data-t="namespace.key"` attributes; `setLanguage(lang)` walks every `[data-t]` and writes `T[lang][namespace][key]` into `textContent`.

When adding copy:
1. Pick a namespace (`hero`, `pricing`, `f4w_hero`, `footer`, …) and a key.
2. Add the string to **both** `T.es` and `T.en`. Missing keys leave the original markup text intact (no fallback warning).
3. Set `data-t="namespace.key"` on the element. Default content in the HTML should be the Spanish version (the site is Spanish-first; LATAM is the primary market).

Language detection order (`detectLanguage()` in `script.js:626`): stored `localStorage.fm-lang` → timezone heuristic (Mexico TZs → `es`, US/Canada TZs → `en`) → `navigator.language` → default `es`. To force a language while testing: `localStorage.setItem('fm-lang', 'en')` then reload. There is **no UI toggle** — this is intentional.

The page `<title>` is special-cased per page inside `setLanguage()` (`script.js:620`) and not driven by `data-t`.

### Interactive modules in `script.js`

All wired up in the `DOMContentLoaded` handler at the bottom of `script.js`. Each is feature-detected via a root element ID/class and no-ops if absent, so the same script serves both pages:

- `initReveal()` — IntersectionObserver adds `.visible` to `.reveal` elements as they enter the viewport. Add `.reveal` (and optional stagger classes `.d1`–`.d4`) to opt in.
- `initCounters()` — animates elements with `data-counter="123"` (and optional `data-counter-suffix`).
- `initEcoTabs()` — the "Ecosystem" segmented tab on the index page (`#eco-switcher` / `.eco-panel[data-side]`). Re-positions the sliding pill on resize and after fonts load.
- `initAiAnimation()` — cycles `.ai-node.active` and randomizes `.ai-sensor-bar` heights inside `#ai-viz`.
- `initFlowAutoplay()` — autoplays the connected-workflow steps in `#flow-list`. Clicking any `.flow-step` stops autoplay permanently (`.user-stopped`).
- `initNav()`, `initAnchors()`, `initMobileNav()` — sticky-nav scroll state, smooth-scroll with a 72px header offset, and the mobile hamburger.

## CTAs

All primary CTAs deep-link to WhatsApp (`https://wa.me/525573221028?text=...`) with a URL-encoded preset message. The phone number is hard-coded across both HTML files — search/replace to change it. F4W messages reference "F4W" / "mi taller"; Fleetmool messages reference "Fleetmool" / "mi flota".
