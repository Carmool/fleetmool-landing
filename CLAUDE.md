# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Remix app served on Cloudflare Pages. Two routes (`/`, `/f4w`) sharing a global stylesheet and a React component library. Bun is the package manager and dev script runner (Cloudflare's Workers runtime is what runs in production). Tailwind v4 + shadcn/ui are installed but reserved for new components — the existing marketing chrome uses the ported `styles.css` under `@layer base` in `app/styles/globals.css`.

## Run locally

```bash
bun install
bun dev          # http://localhost:5173, with HMR
```

`bun run preview` builds and serves through `wrangler pages dev ./build/client`, mirroring Cloudflare's edge behavior. Use it when debugging anything Pages-specific (cache, redirects).

The previous `python3 -m http.server` workflow is gone — there's no longer a static file at the repo root to serve.

## Working without a local environment

The user frequently runs Claude Code from a phone with **no local shell** — no Python, no Node, no curl, no browser-on-localhost. In that mode, treat PR previews as the verification surface in place of local dev:

1. Make the change in `app/` as normal.
2. Commit to a feature branch and push it; open or push to an existing PR. Draft PRs work fine.
3. `.github/workflows/preview.yml` deploys to `https://preview-pr-<N>.fleetmool-landing.pages.dev` within ~30–60s. The URL is stable per PR — pushing more commits redeploys to the same link.
4. Paste the URL back to the user. They open it in their phone browser; Cloudflare Access prompts for sign-in.
5. **Ask them to confirm visually.** Don't try to curl from your sandbox to validate — previews are access-protected and curl will only see the login redirect.

Don't suggest `bun dev`, `wrangler`, or any local command as the verification step in this mode. The preview URL is the substitute.

## Deploy

Cloudflare Pages project **`fleetmool-landing`** (auto-created on first CI run). Pushes to `main` deploy to production via `.github/workflows/deploy.yml`.

`bun run build` runs `remix vite:build`, which writes the client bundle to `build/client/` and the server bundle to `build/server/`.

**To add a new static asset** (image, font, etc.), place it in `public/` — Vite copies it verbatim into `build/client/`. To reference it in a component, import it via JSX or use an absolute `/` path.

`bun run deploy` runs build + `wrangler pages deploy` locally. Without `--branch=main` (CI passes it; the local script doesn't) it creates a **preview** deployment — useful for sharing a one-off URL without overwriting production.

### PR previews

Opening or pushing to a PR triggers `.github/workflows/preview.yml`, which deploys the branch to `https://preview-pr-<N>.fleetmool-landing.pages.dev` — the auto-provisioned Cloudflare Pages alias for the branch. The URL is stable across pushes (PR-numbered), so newer commits overwrite the same URL. A sticky comment on the PR carries the link.

A vanity custom subdomain (`preview-pr-N.dev.fleetmool.com`) was considered but skipped: Cloudflare Pages doesn't accept wildcard custom domains via the dashboard, and per-PR registration adds API surface that isn't worth the aesthetic. If revisited, options are a `*.dev.fleetmool.com` Worker router or a per-PR `Pages domains` API call in the workflow.

`preview-cleanup.yml` deletes a PR's preview deployments when the PR is closed, and runs a daily sweep that also removes previews for PRs untouched for **14 days** (`MAX_INACTIVE_DAYS`, overridable on manual `workflow_dispatch`).

Required GitHub Actions secrets: `CLOUDFLARE_API_TOKEN` (scoped to `Cloudflare Pages: Edit`) and `CLOUDFLARE_ACCOUNT_ID`. The cleanup workflow additionally uses the built-in `GITHUB_TOKEN` to check PR state.

## Architecture

- **Routes:** `app/routes/_index.tsx` (Fleetmool, `/`) and `app/routes/f4w.tsx` (F4W, `/f4w`). Each route exports a `handle` like `{ bodyPage, bodyAccent? }`; `app/root.tsx` reads it via `useMatches()` and renders `<body data-page={...} data-accent={...}>` for SSR-correct accent theming.
- **Components:** `app/components/` — `Nav`, `Footer`, `WhatsAppCta`, `Hero`, `HeroDashboard`, `TrustBar`, `EcoTabs`, `FeatureStories`, `AiViz`, `ConnectedFlow`, `Metrics`, `CaseStudies`, `Pricing`, `FinalCta` (Fleetmool) + `F4WHero`, `F4WHeroDashboard`, `F4WTrustBar`, `F4WFeatures`, `F4WTestimonial`, `F4WEcoCallout`, `ComparisonTable` (F4W-specific). `Pricing` and `FinalCta` take a `surface` prop and render either variant.
- **Hooks:** `app/hooks/` — `useReveal`, `useCounter`, `useNavScrolled`, `useSmoothAnchor` (replaces the old `init*` functions in `script.js`).
- **Lib:** `app/lib/whatsapp.ts` centralizes the WA number + preset messages. `app/lib/utils.ts` is the shadcn `cn()` helper.
- **Styles:** `app/styles/globals.css` imports Tailwind v4, declares shadcn's `@theme`, then ports the entire pre-Remix `styles.css` under `@layer base` (preserves `:root` tokens like `--red`/`--ink` that drive every marketing component).
- **Accent theming:** unchanged — `body[data-accent="blue"]` rebinds `--red` to cobalt for F4W. **To add another accent**: append a `body[data-accent="X"] { --red: ...; --red-hover: ...; ... }` block in `globals.css`. Do **not** introduce parallel `--blue-primary` / `--green-primary` tokens — that breaks the rebinding pattern.
- **i18n:** removed in this migration. The site is Spanish-only now. The `data-t` attribute system from the static era was dropped.

### CTAs are WhatsApp deep links

All primary CTAs are `https://wa.me/525573221028?text=<url-encoded-message>`. The number and preset messages are **centralized in `app/lib/whatsapp.ts`** — one edit changes every CTA everywhere. Preset messages differ by surface: F4W ones reference "F4W" / "mi taller", Fleetmool ones reference "Fleetmool" / "mi flota" — preserve this distinction when adding new CTAs so WhatsApp routing on the receiving end can disambiguate.
