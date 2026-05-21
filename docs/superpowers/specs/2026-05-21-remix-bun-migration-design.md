# Remix + Bun migration — design

**Date:** 2026-05-21
**Status:** Approved, pending implementation plan
**Driver:** Hugo Duarte (hugod@carmool.com)

## Motivation

The current site is pure static HTML/CSS/JS — a 1.2k-line `index.html`, an 800-line `f4w.html`, ~2k lines of `styles.css`, and ~875 lines of `script.js`. It works and ships, but lacks the moving parts needed for upcoming dynamic features (lead capture forms, demo booking, gated content, A/B test instrumentation, integrations). Rather than bolt those onto vanilla JS, migrate to the Remix + Cloudflare Pages stack already used by `misc-webviews` so future work has the same primitives as the rest of the org.

Bun is added as the local package manager and dev script runner. **Bun does not run in production** — Cloudflare Pages serves the Remix app on the Workers runtime (V8 isolates). Vite's build output is what reaches the edge.

## Goals

- Visual parity 1:1 with the current site. No design changes during the migration.
- Two routes preserved: `/` (Fleetmool) and `/f4w` (F4W), identical content.
- All interactive behavior (reveal animations, counters, ecosystem tabs, AI viz, connected-flow autoplay, sticky nav, smooth anchors, mobile menu) ported as React hooks.
- Tailwind v4 and shadcn/ui pre-installed so future dynamic components have a fast path.
- Same Cloudflare Pages project; no DNS / SSL / custom domain changes.
- Same PR-preview pipeline; same `preview-pr-<N>.fleetmool-landing.pages.dev` URLs.
- Bun as package manager (`bun install`) and script runner (`bun dev`, `bun run build`).

## Non-goals (explicit YAGNI)

- **i18n.** Spanish-only at launch. The existing `data-t` / `T` dictionary system is dropped. EN visitors will see ES until/unless i18n is reintroduced. Documented as a product call.
- **No `loader`/`action` functions yet.** Pages are pure SSR'd React; no server-side data fetching.
- **No Cloudflare KV / D1 / R2 / Queues bindings** at launch. Add them when a feature needs them.
- **No auth / sessions / cookies.**
- **No CMS or Markdoc.**
- **No animation library** (Framer Motion etc.) — existing CSS + IntersectionObserver is sufficient.
- **No design changes.** Components ported as-is. Tailwind utilities are reserved for *new* shadcn components, not for rewriting existing `.btn-primary` / `.hero-eyebrow-pill` styles.
- **No tests** beyond a smoke `bun run build` in CI.

## Project structure

```
fleetmool-landing/
├── app/
│   ├── root.tsx                    # <html>/<body>, sets body[data-page|data-accent] from leaf route handle
│   ├── entry.client.tsx            # Hydration entry (template default)
│   ├── entry.server.tsx            # Cloudflare SSR entry (template default)
│   ├── routes/
│   │   ├── _index.tsx              # /     → Fleetmool landing
│   │   └── f4w.tsx                 # /f4w  → F4W landing
│   ├── components/
│   │   ├── Nav.tsx
│   │   ├── Footer.tsx
│   │   ├── WhatsAppCta.tsx
│   │   ├── Reveal.tsx
│   │   ├── HeroDashboard.tsx       # Fleetmool-only
│   │   ├── EcoTabs.tsx
│   │   ├── AiViz.tsx
│   │   ├── ConnectedFlow.tsx
│   │   ├── ComparisonTable.tsx     # F4W-only
│   │   └── ui/                     # shadcn output dir (empty at launch)
│   ├── hooks/
│   │   ├── useReveal.ts
│   │   ├── useCounter.ts
│   │   ├── useNavScrolled.ts
│   │   └── useSmoothAnchor.ts
│   ├── lib/
│   │   ├── utils.ts                # cn() — shadcn convention
│   │   └── whatsapp.ts             # WA_NUMBER + message presets
│   └── styles/
│       └── globals.css             # @import "tailwindcss"; @theme; @layer base { ported styles.css }
├── public/                         # favicons etc. (empty at launch)
├── load-context.ts                 # Cloudflare bindings → typed AppLoadContext
├── vite.config.ts
├── tsconfig.json                   # baseUrl + ~/* alias
├── wrangler.jsonc                  # pages_build_output_dir = ./build/client
├── components.json                 # shadcn config
├── worker-configuration.d.ts       # `wrangler types` output
├── package.json
├── bun.lockb                       # committed
└── (CLAUDE.md, README.md updated)
```

**Key decisions:**

- **Tailwind v4, CSS-first config.** No `tailwind.config.ts`, no `postcss.config.js`. Theme tokens declared via `@theme { … }` in `globals.css`. Per Tailwind v4 best practice for new projects.
- **Import alias `~/*`** — Remix convention, shadcn CLI accepts it.
- **`globals.css` layering:**
  ```css
  @import "tailwindcss";

  @theme {
    /* shadcn defaults; used only by new components */
  }

  @layer base {
    /* The entire existing styles.css pasted verbatim.
       :root tokens (--red, --ink, etc.) continue driving every marketing component. */
  }
  ```
  New Tailwind utilities can reference the existing tokens (`text-[--ink]`, `bg-[--surface]`), so shadcn components inherit the brand automatically.
- **`<body data-page>` and `data-accent`** rendered SSR via `useMatches()`. Each route exports `handle = { bodyPage, bodyAccent? }`; `root.tsx` reads the leaf handle and applies the attributes in JSX. No FOUC, no flash of wrong accent.
- **`bun.lockb`** (binary) is committed like any lockfile.
- **No `functions/` directory.** `@remix-run/cloudflare-pages` handles SSR via `entry.server.tsx`.

## Routes & component breakdown

| File | URL | `handle` | Composes |
|---|---|---|---|
| `app/routes/_index.tsx` | `/` | `{ bodyPage: "index" }` | `<Nav />`, hero, trust bar, ecosystem, feature stories, AI, connected flow, metrics, cases, pricing, final CTA, `<Footer />` |
| `app/routes/f4w.tsx` | `/f4w` | `{ bodyPage: "f4w", bodyAccent: "blue" }` | `<Nav />`, hero, F4W sections, `<ComparisonTable />`, pricing, final CTA, `<Footer />` |

Each marketing section in `styles.css` (Ecosystem, Big Feature Stories, AI Section, Connected Workflow, Metrics, Case Studies, Pricing, Final CTA) becomes its own functional component in `app/components/`. Plain components, no state unless interactive.

## `script.js` → React hooks mapping

| Old (`script.js`) | New | Notes |
|---|---|---|
| `initReveal()` | `useReveal()` consumed by `<Reveal>` wrapper (`<Reveal stagger={2}>…</Reveal>` renders `<div class="reveal d2">…</div>` with the observer attached) | IntersectionObserver, one per element, unobserve on visible |
| `initCounters()` | `useCounter(target, suffix)` inside metrics component | Same ease-out math, fires on first-visible via IntersectionObserver |
| `initEcoTabs()` | Local `useState` in `<EcoTabs>` + `useLayoutEffect` for slider position; listens for `resize` and `document.fonts.ready` | FOUC fix preserved |
| `initAiAnimation()` | `useEffect` inside `<AiViz>` | `setInterval` tick, randomized bar heights on each loop |
| `initFlowAutoplay()` | `useEffect` inside `<ConnectedFlow>` | Click sets `stopped` permanently; pauses on `visibilitychange` |
| `initNav()` | `useNavScrolled()` | `.scrolled` after 16px scroll |
| `initAnchors()` | `useSmoothAnchor()` in `root.tsx` (delegated handler) | 72px header offset kept as a `NAV_HEIGHT` constant |
| `initMobileNav()` | `useState` inside `<Nav>` + Tailwind class toggle | The inline-style block from the original goes away |

## WhatsApp CTA centralization

The 21 hard-coded `wa.me/525573221028?text=…` URLs in `index.html` and `f4w.html` collapse into `<WhatsAppCta preset="trial" surface="fleetmool" size="lg" />`. The number and message presets live in `app/lib/whatsapp.ts`:

```ts
export const WA_NUMBER = "525573221028";

export const PRESETS = {
  fleetmool: {
    signin: "Hola! Quisiera iniciar sesión en Fleetmool",
    trial:  "Hola! Quiero iniciar mi prueba gratuita de Fleetmool",
    demo:   "Hola! Quisiera ver una demo de Fleetmool",
  },
  f4w: {
    signin: "Hola! Quisiera iniciar sesión en F4W",
    trial:  "Hola! Quiero registrar mi taller en F4W",
    demo:   "Hola! Quisiera ver una demo de F4W",
  },
} as const;
```

Changing the number becomes a one-line edit. Preset divergence between Fleetmool and F4W is preserved (downstream WhatsApp routing on the receiving end depends on the message wording).

## Build & deploy

**`package.json` scripts:**

```json
{
  "scripts": {
    "dev":        "remix vite:dev",
    "build":      "remix vite:build",
    "preview":    "bun run build && wrangler pages dev ./build/client",
    "deploy":     "bun run build && CLOUDFLARE_ACCOUNT_ID=416f74acd9056965776eb0103b3b1ee7 wrangler pages deploy",
    "typecheck":  "tsc",
    "typegen":    "wrangler types"
  },
  "engines": { "bun": ">=1.1.0" }
}
```

**`wrangler.jsonc`:**

```jsonc
{
  "name": "fleetmool-landing",
  "compatibility_date": "2026-05-21",
  "compatibility_flags": ["nodejs_compat"],
  "pages_build_output_dir": "./build/client",
  "observability": { "enabled": true }
}
```

`nodejs_compat` is required by Remix's Cloudflare adapter for a few `node:` shims; matches `misc-webviews`.

**GitHub Actions:** `deploy.yml` and `preview.yml` swap `actions/setup-node` + `npm ci` for `oven-sh/setup-bun@v2` + `bun install --frozen-lockfile`. The build command becomes `bun run build`. The wrangler-action step's `command` updates the output directory: `pages deploy build/client …`. `preview-cleanup.yml` is unchanged — it queries Cloudflare's API by branch name, build-system agnostic.

## Migration strategy

1. **Branch:** `migrate/remix-bun` off `main`.
2. **Scaffold in place:** new Remix files added at the repo root alongside the existing `index.html` / `f4w.html` / `styles.css` / `script.js`. Both stacks coexist during development; only `package.json`'s `build` script and `wrangler.jsonc`'s `pages_build_output_dir` control which Pages actually serves.
3. **Iterate via PR preview:** every push to the migration PR gets its own `preview-pr-<N>.fleetmool-landing.pages.dev` URL showing the *new* Remix version. Production keeps serving the static site throughout. Hugo verifies visually on his phone via the preview URL.
4. **Cut over on merge:** PR merges to `main` → `deploy.yml` runs the Remix build → Cloudflare serves the new `build/client/` output → live site becomes the Remix version.
5. **Clean up:** remove the four root-level static files (`index.html`, `f4w.html`, `styles.css`, `script.js`) in the same PR as the cut-over. Their content lives entirely in `app/` by that point.
6. **Rollback:** revert the merge commit; `pages_build_output_dir` flips back to `./dist`; the static site returns. No Cloudflare dashboard changes needed at any point.

## Verification approach

Hugo frequently works from his phone via Claude Code with no local shell. Implementation must be verifiable through the PR preview URL alone:

- Each meaningful change pushed → workflow deploys preview → Hugo confirms visually in browser.
- No "run this locally and check" instructions during the implementation phase.
- Cloudflare Access protects previews; Hugo signs in from his phone browser.

## Open questions / risks

- **shadcn CLI under Bun.** `bunx shadcn@latest add <component>` should work transparently (shadcn is a Node CLI; Bun proxies it). If it misbehaves, fall back to `npx shadcn@latest add ...` — both produce the same files.
- **Tailwind v4 + Remix Vite plugin compatibility.** Should be clean — both use Vite-native plugins. If a regression appears, drop to v3 with `tailwind.config.ts` + `postcss.config.js` (the misc-webviews layout). Acceptable downgrade.
- **`nodejs_compat` flag and bundle size.** Adds some weight to the Workers bundle. Cloudflare's free tier limits should not be touched for a marketing site; if they ever are, prune carefully.
- **First preview deploy of the Remix branch will take longer** than the current `cp`-based builds (~30s vs ~5s). Expected and one-time.

## Out-of-band setup

None. Cloudflare project, custom domain, API token, and secrets are all already in place from the static-site setup. The migration is purely repo-side.
