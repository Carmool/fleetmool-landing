# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Remix app served on Cloudflare Pages. Two routes (`/`, `/f4w`) sharing a global stylesheet and a React component library. Bun is the package manager and dev script runner (Cloudflare's Workers runtime is what runs in production). Tailwind v4 + shadcn/ui are installed but reserved for new components — the existing marketing chrome uses the ported `styles.css` under `@layer base` in `app/styles/globals.css`.

## Commands

```bash
bun install
bun dev          # http://localhost:5173, with HMR
bun run build    # remix vite:build → build/client/ + build/server/
bun run preview  # build + wrangler pages dev ./build/client (mirrors edge behavior)
bun run typecheck  # tsc — no test suite or linter is configured
```

## Working without a local environment

The user frequently runs Claude Code from a phone with **no local shell** — no Python, no Node, no curl, no browser-on-localhost. In that mode, treat PR previews as the verification surface in place of local dev:

1. Make the change in `app/` as normal.
2. Commit to a feature branch and push it; open or push to an existing PR. Draft PRs work fine.
3. `.github/workflows/preview.yml` deploys to `https://preview-pr-<N>.fleetmool-landing.pages.dev` within ~30–60s. The URL is stable per PR — pushing more commits redeploys to the same link.
4. Paste the URL back to the user. They open it in their phone browser; Cloudflare Access prompts for sign-in.
5. **Ask them to confirm visually.** Don't try to curl from your sandbox to validate — previews are access-protected and curl will only see the login redirect.

Don't suggest `bun dev`, `wrangler`, or any local command as the verification step in this mode. The preview URL is the substitute.

## Deploy

Cloudflare Pages project **`fleetmool-landing`**. Pushes to `main` deploy to production via `.github/workflows/deploy.yml`.

**To add a new static asset** (image, font, etc.), place it in `public/` — Vite copies it verbatim into `build/client/`. Reference it in a component via JSX import or an absolute `/` path.

`bun run deploy` runs build + `wrangler pages deploy` locally. Without `--branch=main` (CI passes it; the local script doesn't) it creates a **preview** deployment.

### PR previews

Opening or pushing to a PR triggers `.github/workflows/preview.yml`, which deploys to `https://preview-pr-<N>.fleetmool-landing.pages.dev`. A sticky comment on the PR carries the link. `preview-cleanup.yml` removes previews when a PR closes, and runs a daily sweep removing previews for PRs untouched for **14 days**.

Required GitHub Actions secrets: `CLOUDFLARE_API_TOKEN` (scoped to `Cloudflare Pages: Edit`) and `CLOUDFLARE_ACCOUNT_ID`.

## Architecture

- **Cloudflare adapter:** `functions/[[path]].ts` is the Cloudflare Pages Functions catch-all that hands off to Remix. `load-context.ts` bridges Cloudflare's env bindings into Remix's `context`.
- **Routes:** `app/routes/_index.tsx` (Fleetmool, `/`) and `app/routes/f4w.tsx` (F4W, `/f4w`). Each route exports a `handle` like `{ bodyPage, bodyAccent? }`; `app/root.tsx` reads it via `useMatches()` and renders `<body data-page={...} data-accent={...}>` for SSR-correct accent theming.
- **Components:** Fleetmool-specific: `Nav`, `Footer`, `WhatsAppCta`, `Hero`, `HeroDashboard`, `TrustBar`, `EcoTabs`, `FeatureStories`, `AiViz`, `ConnectedFlow`, `Metrics`, `CaseStudies`, `Pricing`, `FinalCta`. F4W-specific: `F4WHero`, `F4WHeroDashboard`, `F4WTrustBar`, `F4WFeatures`, `F4WTestimonial`, `F4WEcoCallout`, `ComparisonTable`. `Pricing` and `FinalCta` take a `surface` prop and render either variant. `Reveal` wraps the `useReveal` hook into a declarative fade-in wrapper.
- **Hooks:** `app/hooks/` — `useReveal` (intersection observer fade-ins), `useCounter` (animated number counts), `useNavScrolled` (scroll-aware nav), `useSmoothAnchor` (in-page anchor scrolling).
- **Lib:** `app/lib/whatsapp.ts` centralizes the WA number + preset messages. `app/lib/utils.ts` is the shadcn `cn()` helper.
- **Styles:** `app/styles/globals.css` imports Tailwind v4, declares shadcn's `@theme`, then ports the marketing CSS under `@layer base` (preserves `:root` tokens like `--red`/`--ink` that drive every marketing component).
- **Fonts:** Hanken Grotesk + JetBrains Mono loaded from Google Fonts (in `root.tsx` links); Geist Variable via `@fontsource-variable/geist` package.
- **Accent theming:** `body[data-accent="blue"]` rebinds `--red` to cobalt for F4W. **To add another accent**: append a `body[data-accent="X"] { --red: ...; --red-hover: ...; ... }` block in `globals.css`. Do **not** introduce parallel `--blue-primary` / `--green-primary` tokens — that breaks the rebinding pattern.
- **i18n:** site is Spanish-only. No translation system.

### CTAs are WhatsApp deep links

All primary CTAs are `https://wa.me/525573221028?text=<url-encoded-message>`. The number and preset messages are **centralized in `app/lib/whatsapp.ts`** — one edit changes every CTA everywhere. Preset messages differ by surface: F4W ones reference "F4W" / "mi taller", Fleetmool ones reference "Fleetmool" / "mi flota" — preserve this distinction when adding new CTAs so WhatsApp routing on the receiving end can disambiguate.
