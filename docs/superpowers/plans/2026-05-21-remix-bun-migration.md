# Remix + Bun migration — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate the pure-static Fleetmool landing site to a Remix + Bun + Cloudflare Pages stack with Tailwind v4 and shadcn/ui pre-installed, preserving visual parity 1:1 and the existing PR-preview pipeline.

**Architecture:** Remix v2 with the Vite plugin and `@remix-run/cloudflare-pages` adapter. Bun is the package manager and dev script runner (production runs on Cloudflare's Workers runtime, not Bun). Existing `styles.css` is pasted verbatim into `app/styles/globals.css` under `@layer base`; Tailwind utilities + shadcn components are reserved for future work.

**Tech Stack:** Remix 2.x, Vite 6, React 18, TypeScript, Bun 1.1+, Tailwind v4 (CSS-first config), shadcn/ui (CLI-driven), Cloudflare Pages, Wrangler 3.

**Spec:** [`docs/superpowers/specs/2026-05-21-remix-bun-migration-design.md`](../specs/2026-05-21-remix-bun-migration-design.md)

**Verification model.** Most tasks have no unit test — they produce visual output. Verification is: (1) `bun run build` succeeds locally and in CI, (2) the PR preview URL renders correctly. Hugo verifies visually from his phone via `preview-pr-<N>.fleetmool-landing.pages.dev`. Tasks call out which surfaces to check.

---

## Phase 1 — Branch and base scaffolding

### Task 1: Create migration branch

**Files:** none

- [ ] **Step 1: Branch from `main`**

```bash
git checkout main
git pull
git checkout -b migrate/remix-bun
```

- [ ] **Step 2: Confirm clean state**

```bash
git status
```

Expected: `On branch migrate/remix-bun` / `nothing to commit, working tree clean`.

---

### Task 2: Replace `package.json` with Remix scaffold

**Files:**
- Modify: `package.json`
- Delete: `package-lock.json` (replaced by `bun.lockb`)

- [ ] **Step 1: Overwrite `package.json`**

```json
{
  "name": "fleetmool-landing",
  "private": true,
  "type": "module",
  "sideEffects": false,
  "description": "Marketing site for Fleetmool and F4W — Remix on Cloudflare Pages.",
  "scripts": {
    "dev": "remix vite:dev",
    "build": "remix vite:build",
    "preview": "bun run build && wrangler pages dev ./build/client",
    "deploy": "bun run build && CLOUDFLARE_ACCOUNT_ID=416f74acd9056965776eb0103b3b1ee7 wrangler pages deploy",
    "typecheck": "tsc",
    "typegen": "wrangler types"
  },
  "dependencies": {
    "@remix-run/cloudflare": "^2.16.5",
    "@remix-run/cloudflare-pages": "^2.16.5",
    "@remix-run/react": "^2.16.5",
    "isbot": "^4.1.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@cloudflare/workers-types": "^4.20250417.0",
    "@remix-run/dev": "^2.16.5",
    "@tailwindcss/vite": "^4.0.0",
    "@types/react": "^18.3.20",
    "@types/react-dom": "^18.3.5",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.6.0",
    "vite": "^6.0.0",
    "vite-tsconfig-paths": "^4.3.2",
    "wrangler": "^3.114.6"
  },
  "engines": {
    "bun": ">=1.1.0"
  }
}
```

- [ ] **Step 2: Delete the npm lockfile**

```bash
rm package-lock.json
```

- [ ] **Step 3: Install with Bun**

```bash
bun install
```

Expected: `bun.lockb` created. Some warnings about peer deps are fine; no errors.

- [ ] **Step 4: Commit**

```bash
git add package.json bun.lockb
git rm package-lock.json
git commit -m "scaffold: replace static package.json with Remix deps + Bun lockfile"
```

---

### Task 3: Add TypeScript and Vite config

**Files:**
- Create: `tsconfig.json`
- Create: `vite.config.ts`
- Create: `load-context.ts`

- [ ] **Step 1: Create `tsconfig.json`**

```json
{
  "include": [
    "**/*.ts",
    "**/*.tsx",
    "**/.server/**/*.ts",
    "**/.server/**/*.tsx",
    "**/.client/**/*.ts",
    "**/.client/**/*.tsx",
    "load-context.ts",
    "worker-configuration.d.ts"
  ],
  "compilerOptions": {
    "lib": ["DOM", "DOM.Iterable", "ES2022"],
    "types": ["@remix-run/cloudflare", "vite/client", "@cloudflare/workers-types/2023-07-01"],
    "isolatedModules": true,
    "esModuleInterop": true,
    "jsx": "react-jsx",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "resolveJsonModule": true,
    "target": "ES2022",
    "strict": true,
    "allowJs": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "baseUrl": ".",
    "paths": {
      "~/*": ["./app/*"]
    },
    "noEmit": true
  }
}
```

- [ ] **Step 2: Create `load-context.ts`**

```ts
import { type AppLoadContext } from "@remix-run/cloudflare";
import { type PlatformProxy } from "wrangler";

interface Env {}

type Cloudflare = Omit<PlatformProxy<Env>, "dispose">;

declare module "@remix-run/cloudflare" {
  interface AppLoadContext {
    cloudflare: Cloudflare;
  }
}

type GetLoadContext = (args: {
  request: Request;
  context: { cloudflare: Cloudflare };
}) => AppLoadContext;

export const getLoadContext: GetLoadContext = ({ context }) => {
  return { ...context };
};
```

- [ ] **Step 3: Create `vite.config.ts`**

```ts
import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from "@remix-run/dev";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import { getLoadContext } from "./load-context";

export default defineConfig({
  plugins: [
    remixCloudflareDevProxy({ getLoadContext }),
    remix(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
```

- [ ] **Step 4: Commit**

```bash
git add tsconfig.json vite.config.ts load-context.ts
git commit -m "scaffold: add tsconfig, vite config, and Cloudflare load-context"
```

---

### Task 4: Update `wrangler.jsonc` for Remix output

**Files:**
- Modify: `wrangler.jsonc`

- [ ] **Step 1: Overwrite `wrangler.jsonc`**

```jsonc
/**
 * Cloudflare Pages config for fleetmool-landing.
 * Docs: https://developers.cloudflare.com/workers/wrangler/configuration/
 */
{
  "$schema": "node_modules/wrangler/config-schema.json",
  "name": "fleetmool-landing",
  "compatibility_date": "2026-05-21",
  "compatibility_flags": ["nodejs_compat"],
  "pages_build_output_dir": "./build/client",
  "observability": {
    "enabled": true
  }
}
```

- [ ] **Step 2: Generate the worker-configuration types**

```bash
bun run typegen
```

Expected: creates `worker-configuration.d.ts`.

- [ ] **Step 3: Commit**

```bash
git add wrangler.jsonc worker-configuration.d.ts
git commit -m "scaffold: point wrangler.jsonc at build/client + nodejs_compat"
```

---

### Task 5: Add Remix entry files and empty routes

**Files:**
- Create: `app/entry.client.tsx`
- Create: `app/entry.server.tsx`
- Create: `app/root.tsx`
- Create: `app/routes/_index.tsx`
- Create: `app/routes/f4w.tsx`
- Create: `app/styles/globals.css`

- [ ] **Step 1: Create `app/entry.client.tsx`**

```tsx
import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
    </StrictMode>
  );
});
```

- [ ] **Step 2: Create `app/entry.server.tsx`**

```tsx
import type { AppLoadContext, EntryContext } from "@remix-run/cloudflare";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToReadableStream } from "react-dom/server";

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
  _loadContext: AppLoadContext
) {
  const body = await renderToReadableStream(
    <RemixServer context={remixContext} url={request.url} />,
    {
      signal: request.signal,
      onError(error: unknown) {
        // Log to console; Cloudflare will pick it up
        console.error(error);
        responseStatusCode = 500;
      },
    }
  );

  if (isbot(request.headers.get("user-agent") || "")) {
    await body.allReady;
  }

  responseHeaders.set("Content-Type", "text/html");
  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode,
  });
}
```

- [ ] **Step 3: Create `app/styles/globals.css` (minimal — will be filled in Phase 3)**

```css
@import "tailwindcss";
```

- [ ] **Step 4: Create `app/root.tsx`**

```tsx
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/cloudflare";

import globalsHref from "./styles/globals.css?url";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,300..900;1,400..700&family=JetBrains+Mono:wght@400;500;600&display=swap",
  },
  { rel: "stylesheet", href: globalsHref },
];

type RouteHandle = { bodyPage?: string; bodyAccent?: string };

export default function App() {
  const matches = useMatches();
  const leafHandle = (matches[matches.length - 1]?.handle ?? {}) as RouteHandle;

  return (
    <html lang="es" data-lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
      </head>
      <body data-page={leafHandle.bodyPage} data-accent={leafHandle.bodyAccent}>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
```

- [ ] **Step 5: Create `app/routes/_index.tsx`**

```tsx
import type { MetaFunction } from "@remix-run/cloudflare";

export const handle = { bodyPage: "index" };

export const meta: MetaFunction = () => [
  { title: "Fleetmool — Inteligencia operacional para tu flota" },
  {
    name: "description",
    content:
      "Plataforma de gestión de flotas con IA. Mantenimiento predictivo, diagnósticos en tiempo real y conexión directa con talleres. Para México y LATAM.",
  },
];

export default function Index() {
  return (
    <main style={{ padding: 40, color: "white", background: "#0D0B0A", minHeight: "100vh" }}>
      <h1>Fleetmool — scaffolding alive</h1>
      <p>This placeholder gets replaced section-by-section in later tasks.</p>
    </main>
  );
}
```

- [ ] **Step 6: Create `app/routes/f4w.tsx`**

```tsx
import type { MetaFunction } from "@remix-run/cloudflare";

export const handle = { bodyPage: "f4w", bodyAccent: "blue" };

export const meta: MetaFunction = () => [
  { title: "F4W — Tu taller, digitalizado en minutos" },
  {
    name: "description",
    content:
      "La plataforma para talleres modernos. Gestiona servicios, genera cotizaciones y conecta tu taller directamente con flotas. 3 meses gratis.",
  },
];

export default function F4W() {
  return (
    <main style={{ padding: 40, color: "white", background: "#0D0B0A", minHeight: "100vh" }}>
      <h1>F4W — scaffolding alive</h1>
      <p>This placeholder gets replaced section-by-section in later tasks.</p>
    </main>
  );
}
```

- [ ] **Step 7: Verify build passes locally**

```bash
bun run build
```

Expected: `vite v6.x.x building for production...` followed by `✓ built in <time>` for both client and server bundles. Output appears in `build/client/` and `build/server/`.

- [ ] **Step 8: Commit**

```bash
git add app/ load-context.ts
git commit -m "scaffold: entry files, root, placeholder index and f4w routes"
```

---

## Phase 2 — Update `.gitignore` and CI workflows

### Task 6: Update `.gitignore` for Remix/Bun

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Replace `.gitignore` contents**

```
node_modules/
build/
.cache/
.wrangler/
dist/
.DS_Store
.env
.env.*
!.env.example

# Bun
.bun/
```

- [ ] **Step 2: Commit**

```bash
git add .gitignore
git commit -m "ci: gitignore build/, .cache/, .bun/ for Remix + Bun"
```

---

### Task 7: Update `.github/workflows/deploy.yml`

**Files:**
- Modify: `.github/workflows/deploy.yml`

- [ ] **Step 1: Overwrite `deploy.yml`**

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: oven-sh/setup-bun@v2
        with:
          bun-version: latest

      - name: Install dependencies
        run: bun install --frozen-lockfile

      - name: Build Remix app
        run: bun run build

      - name: Deploy to Cloudflare Pages
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          preCommands: |
            wrangler pages project create fleetmool-landing --production-branch=main || true
          command: pages deploy build/client --project-name=fleetmool-landing --branch=main
```

- [ ] **Step 2: Commit**

```bash
git add .github/workflows/deploy.yml
git commit -m "ci: deploy.yml uses Bun + builds Remix to build/client"
```

---

### Task 8: Update `.github/workflows/preview.yml`

**Files:**
- Modify: `.github/workflows/preview.yml`

- [ ] **Step 1: Overwrite `preview.yml`**

```yaml
name: Deploy PR preview

on:
  pull_request:
    types: [opened, synchronize, reopened]

concurrency:
  group: preview-pr-${{ github.event.pull_request.number }}
  cancel-in-progress: true

jobs:
  preview:
    runs-on: ubuntu-latest
    if: github.event.pull_request.head.repo.full_name == github.repository
    permissions:
      contents: read
      pull-requests: write
    env:
      BRANCH: preview-pr-${{ github.event.pull_request.number }}
    steps:
      - uses: actions/checkout@v4

      - uses: oven-sh/setup-bun@v2
        with:
          bun-version: latest

      - run: bun install --frozen-lockfile
      - run: bun run build

      - name: Deploy to Cloudflare Pages
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          command: pages deploy build/client --project-name=fleetmool-landing --branch=${{ env.BRANCH }}

      - name: Comment preview URL on PR
        uses: marocchino/sticky-pull-request-comment@v2
        with:
          header: cloudflare-preview
          message: |
            ### 🔍 Preview ready

            **https://${{ env.BRANCH }}.fleetmool-landing.pages.dev**

            <sub>Commit <code>${{ github.event.pull_request.head.sha }}</code></sub>
```

- [ ] **Step 2: Commit**

```bash
git add .github/workflows/preview.yml
git commit -m "ci: preview.yml uses Bun + builds Remix to build/client"
```

Note: `.github/workflows/preview-cleanup.yml` is unchanged — it queries the Cloudflare API by branch name and is build-system agnostic.

---

### Task 9: Push branch, open PR, verify scaffolding preview deploys

**Files:** none

- [ ] **Step 1: Push branch**

```bash
git push -u origin migrate/remix-bun
```

- [ ] **Step 2: Open draft PR**

```bash
gh pr create --draft --base main --head migrate/remix-bun --title "Migrate to Remix + Bun" --body "Tracking PR for the Remix migration. See docs/superpowers/specs/2026-05-21-remix-bun-migration-design.md and docs/superpowers/plans/2026-05-21-remix-bun-migration.md."
```

- [ ] **Step 3: Wait for `preview.yml` to finish**

```bash
gh run watch --exit-status
```

Expected: workflow succeeds; sticky comment appears on PR with preview URL.

- [ ] **Step 4: Hugo verifies preview URL**

Ask Hugo to open the preview URL in his phone browser and confirm:
- `/` renders the "Fleetmool — scaffolding alive" placeholder
- `/f4w` renders the "F4W — scaffolding alive" placeholder
- Both pages return 200, no console errors

**Do not proceed until Hugo confirms.** If the build failed, debug the workflow logs and iterate.

---

## Phase 3 — Install shadcn/ui and port `styles.css`

### Task 10: Initialize shadcn/ui via CLI

**Files:**
- Create: `components.json`
- Create: `app/lib/utils.ts`
- Modify: `app/styles/globals.css`

- [ ] **Step 1: Run the shadcn init command**

```bash
bunx shadcn@latest init
```

When prompted, choose:
- **Framework:** Remix (if the CLI fails to auto-detect, it may ask; pick Remix or "Other" then proceed)
- **TypeScript:** Yes
- **Style:** Default
- **Base color:** Neutral
- **Global CSS file:** `app/styles/globals.css`
- **CSS variables:** Yes
- **Tailwind config:** (leave blank — v4 has no config file)
- **Components alias:** `~/components`
- **Utils alias:** `~/lib/utils`
- **React Server Components:** No
- **Write configuration:** Yes

This creates `components.json` and `app/lib/utils.ts`, and modifies `app/styles/globals.css` to add shadcn's `@theme` block and base layer.

If the CLI errors out with "framework not detected", fall back to manual init: create `components.json` by hand using the schema from the shadcn docs (https://ui.shadcn.com/schema.json) with `tsx: true`, `tailwind.css: "app/styles/globals.css"`, `aliases.components: "~/components"`, `aliases.utils: "~/lib/utils"`. Then `bunx shadcn@latest add button` should work.

- [ ] **Step 2: Smoke test — add and remove the Button component**

```bash
bunx shadcn@latest add button
ls app/components/ui/button.tsx   # should exist
rm app/components/ui/button.tsx   # remove; we don't use it yet
rmdir app/components/ui           # remove empty dir for now
```

If the CLI errors with "framework not detected", create a `react-router.config.ts` shim and retry — but first try without it. shadcn 3.x detects Remix via `package.json` deps.

- [ ] **Step 3: Verify build still passes**

```bash
bun run build
```

- [ ] **Step 4: Commit**

```bash
git add components.json app/lib/utils.ts app/styles/globals.css
git commit -m "feat: initialize shadcn/ui (CLI-driven, no components added yet)"
```

---

### Task 11: Port `styles.css` into `globals.css`

**Files:**
- Modify: `app/styles/globals.css`

- [ ] **Step 1: Read the current `styles.css`**

Open `styles.css` at the repo root. It is ~2000 lines, with 22 numbered sections (1. RESET, 2. TOKENS, ..., 22. RESPONSIVE).

- [ ] **Step 2: Append the entire contents under `@layer base`**

The new `app/styles/globals.css` should look like:

```css
@import "tailwindcss";

@theme {
  /* shadcn defaults — left as-is from `shadcn init`. */
}

@layer base {
  /* ============================================================
     PORTED FROM /styles.css (pre-Remix).
     :root tokens (--red, --ink, etc.) drive every marketing component.
     ============================================================ */

  /* PASTE THE ENTIRE CONTENTS OF /styles.css HERE, sections 1–22 inclusive */
}
```

Concretely: copy lines 1–end of `/styles.css` and paste them between the `@layer base {` and the closing `}`. Do not modify the CSS itself. Don't remove the existing section comments — they're useful for navigation.

- [ ] **Step 3: Verify build passes**

```bash
bun run build
```

Tailwind v4 parses through this; if there are any CSS-syntax surprises (rare — vanilla CSS is fine inside `@layer base`), Vite's error message will point at the line.

- [ ] **Step 4: Commit**

```bash
git add app/styles/globals.css
git commit -m "feat: port styles.css verbatim into globals.css under @layer base"
```

---

### Task 12: Wire up base styles in the placeholder routes

**Files:**
- Modify: `app/routes/_index.tsx`
- Modify: `app/routes/f4w.tsx`

- [ ] **Step 1: Remove inline styles from `_index.tsx`**

```tsx
import type { MetaFunction } from "@remix-run/cloudflare";

export const handle = { bodyPage: "index" };

export const meta: MetaFunction = () => [
  { title: "Fleetmool — Inteligencia operacional para tu flota" },
  {
    name: "description",
    content:
      "Plataforma de gestión de flotas con IA. Mantenimiento predictivo, diagnósticos en tiempo real y conexión directa con talleres. Para México y LATAM.",
  },
];

export default function Index() {
  return (
    <main className="container" style={{ paddingTop: 120 }}>
      <h1>Fleetmool</h1>
      <p>Sections land in Phase 5.</p>
    </main>
  );
}
```

- [ ] **Step 2: Same for `f4w.tsx`**

```tsx
import type { MetaFunction } from "@remix-run/cloudflare";

export const handle = { bodyPage: "f4w", bodyAccent: "blue" };

export const meta: MetaFunction = () => [
  { title: "F4W — Tu taller, digitalizado en minutos" },
  {
    name: "description",
    content:
      "La plataforma para talleres modernos. Gestiona servicios, genera cotizaciones y conecta tu taller directamente con flotas. 3 meses gratis.",
  },
];

export default function F4W() {
  return (
    <main className="container" style={{ paddingTop: 120 }}>
      <h1>F4W</h1>
      <p>Sections land in Phase 5.</p>
    </main>
  );
}
```

- [ ] **Step 3: Push and verify visually**

```bash
git add app/routes/
git commit -m "feat: minimal route shells using ported globals"
git push
```

Wait for the workflow, then ask Hugo to confirm on the preview URL:
- `/` shows "Fleetmool" heading with the brand dark background, oxblood accent context
- `/f4w` shows "F4W" with the cobalt accent body class active (verify by inspecting `<body>` in view-source)

**Do not proceed until Hugo confirms.**

---

## Phase 4 — Shared utilities and components

### Task 13: Create `app/lib/whatsapp.ts`

**Files:**
- Create: `app/lib/whatsapp.ts`

- [ ] **Step 1: Create the file**

```ts
export const WA_NUMBER = "525573221028";

export const PRESETS = {
  fleetmool: {
    signin: "Hola! Quisiera iniciar sesión en Fleetmool",
    trial: "Hola! Quiero iniciar mi prueba gratuita de Fleetmool",
    demo: "Hola! Quisiera ver una demo de Fleetmool",
  },
  f4w: {
    signin: "Hola! Quisiera iniciar sesión en F4W",
    trial: "Hola! Quiero registrar mi taller en F4W",
    demo: "Hola! Quisiera ver una demo de F4W",
  },
} as const;

export type Surface = keyof typeof PRESETS;
export type Preset<S extends Surface> = keyof (typeof PRESETS)[S];

export function whatsappUrl<S extends Surface>(surface: S, preset: Preset<S>): string {
  const message = PRESETS[surface][preset];
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}
```

- [ ] **Step 2: Commit**

```bash
git add app/lib/whatsapp.ts
git commit -m "feat: centralized WhatsApp number + preset messages"
```

---

### Task 14: Create `app/components/WhatsAppCta.tsx`

**Files:**
- Create: `app/components/WhatsAppCta.tsx`

- [ ] **Step 1: Create the component**

```tsx
import { whatsappUrl, type Preset, type Surface } from "~/lib/whatsapp";

type Props<S extends Surface> = {
  surface: S;
  preset: Preset<S>;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

const WhatsAppIcon = () => (
  <svg className="wa-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.6.1-.8-.4-1.7-.9-2.4-1.6-.7-.8-1.3-1.7-1.5-2.5-.1-.3 0-.4.2-.6l.7-.7c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.6-.9-2.2-.2-.5-.5-.4-.6-.4h-.6c-.2 0-.5.1-.7.3-.2.2-1 1-1 2.4 0 1.4 1 2.7 1.2 2.9.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.4.2-.6.2-1.2.2-1.4 0-.2-.2-.3-.5-.4zM12 2C6.5 2 2 6.5 2 12c0 1.7.5 3.4 1.3 4.9L2 22l5.3-1.3c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
  </svg>
);

export function WhatsAppCta<S extends Surface>({
  surface,
  preset,
  variant = "primary",
  size = "md",
  className = "",
  children,
}: Props<S>) {
  const variantClass = variant === "primary" ? "btn-primary" : variant === "secondary" ? "btn-secondary" : "btn-ghost";
  const sizeClass = size === "lg" ? "btn-lg" : size === "sm" ? "btn-sm" : "";
  const classes = ["btn", variantClass, sizeClass, className].filter(Boolean).join(" ");

  return (
    <a href={whatsappUrl(surface, preset)} target="_blank" rel="noopener noreferrer" className={classes}>
      <WhatsAppIcon />
      <span>{children}</span>
    </a>
  );
}
```

- [ ] **Step 2: Verify build**

```bash
bun run build
```

- [ ] **Step 3: Commit**

```bash
git add app/components/WhatsAppCta.tsx
git commit -m "feat: WhatsAppCta component (replaces 21 hard-coded wa.me URLs)"
```

---

### Task 15: Port the `<Nav>` component

**Files:**
- Create: `app/components/Nav.tsx`
- Create: `app/hooks/useNavScrolled.ts`

- [ ] **Step 1: Create the hook**

```ts
import { useEffect, useState } from "react";

export function useNavScrolled(threshold = 16): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > threshold);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
```

- [ ] **Step 2: Create the component**

Port the `<nav class="nav">…</nav>` block from `index.html` (lines ~18–43). Compare with the F4W version in `f4w.html` (lines ~18–43) — they differ only in the link href targets.

```tsx
import { Link } from "@remix-run/react";
import { useState } from "react";
import { useNavScrolled } from "~/hooks/useNavScrolled";
import { WhatsAppCta } from "./WhatsAppCta";

type Surface = "fleetmool" | "f4w";

export function Nav({ surface }: { surface: Surface }) {
  const scrolled = useNavScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`} id="nav">
      <div className="nav-inner">
        <div className="nav-left">
          <Link to="/" className="nav-logo" aria-label="Fleetmool">
            <span className="nav-logo-mark">F</span>
            <span>Fleetmool</span>
          </Link>
          <div className="nav-links" data-open={mobileOpen}>
            <Link to={surface === "f4w" ? "/" : "/#platform"} className="nav-link">
              Plataforma
            </Link>
            <Link to={surface === "f4w" ? "/#ecosystem" : "#ecosystem"} className="nav-link">
              Ecosistema
            </Link>
            <Link to="/f4w" className="nav-link">
              Para talleres
            </Link>
            <Link to="#pricing" className="nav-link">
              Precios
            </Link>
          </div>
        </div>
        <div className="nav-right">
          <WhatsAppCta surface={surface} preset="signin" variant="ghost" size="sm">
            Iniciar sesión
          </WhatsAppCta>
          <WhatsAppCta surface={surface} preset="trial" size="sm">
            {surface === "f4w" ? "Registrar mi taller" : "Comenzar gratis"}
          </WhatsAppCta>
          <button
            className="nav-mobile-toggle"
            aria-label="Menú"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
```

- [ ] **Step 3: Add the mobile-nav CSS adjustment**

The original `script.js` `initMobileNav()` set inline styles. Replace with a CSS rule scoped to `[data-open="true"]`. Append to `app/styles/globals.css` under `@layer base`:

```css
@layer base {
  /* ...existing ported styles... */

  /* Mobile nav open state (replaces inline-style assignment from old script.js) */
  @media (max-width: 768px) {
    .nav-links[data-open="true"] {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: absolute;
      top: 64px;
      left: 0;
      right: 0;
      background: rgba(13, 11, 10, 0.96);
      backdrop-filter: blur(14px);
      padding: 16px 28px;
      border-bottom: 1px solid var(--line-2);
      z-index: 99;
      gap: 8px;
    }
  }
}
```

- [ ] **Step 4: Verify build, commit**

```bash
bun run build
git add app/components/Nav.tsx app/hooks/useNavScrolled.ts app/styles/globals.css
git commit -m "feat: Nav component with scrolled state and mobile toggle"
```

---

### Task 16: Port the `<Footer>` component

**Files:**
- Create: `app/components/Footer.tsx`

- [ ] **Step 1: Create the component**

Port `<footer>` from `index.html` (search for `<footer` to find the section). F4W's footer is identical.

```tsx
export function Footer() {
  return (
    <footer className="footer">
      {/* PASTE the entire <footer>...</footer> contents from index.html here.
          Convert `class` → `className`, `for` → `htmlFor`, self-close <img> / <input>. */}
    </footer>
  );
}
```

Concrete recipe: open `index.html`, find the `<footer class="footer">` opening tag, copy through the matching `</footer>` close (inclusive), paste between the `<footer className="footer">` and `</footer>` lines above, and run an Edit pass to convert attribute names.

- [ ] **Step 2: Verify build, commit**

```bash
bun run build
git add app/components/Footer.tsx
git commit -m "feat: Footer component (ported verbatim from index.html)"
```

---

## Phase 5 — Interactive hooks

### Task 17: `useReveal` + `<Reveal>` wrapper

**Files:**
- Create: `app/hooks/useReveal.ts`
- Create: `app/components/Reveal.tsx`

- [ ] **Step 1: Hook**

```ts
import { useEffect, useRef } from "react";

export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            (e.target as HTMLElement).classList.add("visible");
            obs.unobserve(e.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return ref;
}
```

- [ ] **Step 2: Wrapper component**

```tsx
import { type HTMLAttributes } from "react";
import { useReveal } from "~/hooks/useReveal";

type Props = HTMLAttributes<HTMLDivElement> & {
  stagger?: 1 | 2 | 3 | 4;
};

export function Reveal({ stagger, className = "", children, ...rest }: Props) {
  const ref = useReveal();
  const staggerClass = stagger ? `d${stagger}` : "";
  return (
    <div ref={ref} className={`reveal ${staggerClass} ${className}`.trim()} {...rest}>
      {children}
    </div>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add app/hooks/useReveal.ts app/components/Reveal.tsx
git commit -m "feat: useReveal hook + <Reveal> wrapper component"
```

---

### Task 18: `useCounter` hook

**Files:**
- Create: `app/hooks/useCounter.ts`

- [ ] **Step 1: Create the hook**

```ts
import { useEffect, useRef, useState } from "react";

export function useCounter(target: string | number, suffix = "", duration = 1600) {
  const [text, setText] = useState(typeof target === "string" ? target : `${target}${suffix}`);
  const ref = useRef<HTMLSpanElement | null>(null);
  const fired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const numericTarget = parseFloat(String(target).replace(/[^0-9.]/g, "")) || 0;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !fired.current) {
            fired.current = true;
            const start = performance.now();
            const step = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              const v = Math.round(numericTarget * eased);
              setText(v.toLocaleString("en-US") + suffix);
              if (p < 1) requestAnimationFrame(step);
              else setText(String(target));
            };
            requestAnimationFrame(step);
            obs.unobserve(e.target);
          }
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, suffix, duration]);

  return { ref, text };
}
```

- [ ] **Step 2: Commit**

```bash
git add app/hooks/useCounter.ts
git commit -m "feat: useCounter hook (replaces initCounters from script.js)"
```

---

### Task 19: `useSmoothAnchor` hook

**Files:**
- Create: `app/hooks/useSmoothAnchor.ts`
- Modify: `app/root.tsx` (call the hook)

- [ ] **Step 1: Hook**

```ts
import { useEffect } from "react";

const NAV_HEIGHT = 72;

export function useSmoothAnchor() {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";
      if (!href.startsWith("#")) return;
      const id = href.slice(1);
      if (!id) return;
      const dest = document.getElementById(id);
      if (!dest) return;
      e.preventDefault();
      const y = dest.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
      window.scrollTo({ top: y, behavior: "smooth" });
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);
}
```

- [ ] **Step 2: Wire into `root.tsx`**

Add `import { useSmoothAnchor } from "~/hooks/useSmoothAnchor";` near the other imports, and call `useSmoothAnchor();` at the top of the `App()` function body.

- [ ] **Step 3: Commit**

```bash
git add app/hooks/useSmoothAnchor.ts app/root.tsx
git commit -m "feat: useSmoothAnchor with 72px nav offset, wired in root"
```

---

## Phase 6 — Port the Fleetmool route (`/`)

Each task below: open `index.html`, find the matching section, port it into a component, render it from `app/routes/_index.tsx`, run `bun run build`, push, and ask Hugo to verify visually.

> **Mechanical conversion rules for every section port:**
> - `class` → `className`
> - `for` → `htmlFor`
> - Self-close void elements: `<img />`, `<input />`, `<br />`
> - JS comments (`<!-- ... -->`) become JSX comments (`{/* ... */}`)
> - All `<a href="https://wa.me/...">` blocks become `<WhatsAppCta surface="fleetmool" preset="..." />` (pick the preset that matches the message text)
> - Add `<Reveal>` wrappers where the original had `class="reveal"`. Map `class="reveal d2"` → `<Reveal stagger={2}>`.

### Task 20: `_index.tsx` route shell composes Nav + Footer + WhatsApp CTAs

**Files:**
- Modify: `app/routes/_index.tsx`

- [ ] **Step 1: Replace placeholder with composition shell**

```tsx
import type { MetaFunction } from "@remix-run/cloudflare";
import { Nav } from "~/components/Nav";
import { Footer } from "~/components/Footer";

export const handle = { bodyPage: "index" };

export const meta: MetaFunction = () => [
  { title: "Fleetmool — Inteligencia operacional para tu flota" },
  {
    name: "description",
    content:
      "Plataforma de gestión de flotas con IA. Mantenimiento predictivo, diagnósticos en tiempo real y conexión directa con talleres. Para México y LATAM.",
  },
];

export default function Index() {
  return (
    <>
      <Nav surface="fleetmool" />
      {/* Sections land in Tasks 21–28 */}
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Push, verify Nav + Footer render**

```bash
bun run build
git add app/routes/_index.tsx
git commit -m "feat: _index.tsx composes Nav + Footer"
git push
```

Wait for the preview. Ask Hugo to confirm: nav appears (sticky, oxblood logo mark), footer appears at the bottom of an otherwise empty page.

---

### Task 21: Port `<Hero>` (Fleetmool)

**Files:**
- Create: `app/components/Hero.tsx`
- Modify: `app/routes/_index.tsx`

- [ ] **Step 1: Locate the section**

`index.html` lines ~48–80 contain `<section class="hero">…</section>`. The hero block also includes the dashboard mockup (lines ~83–~485) — that gets its own component in Task 22.

- [ ] **Step 2: Create `Hero.tsx` (hero copy only — no dashboard yet)**

```tsx
import { Reveal } from "./Reveal";
import { WhatsAppCta } from "./WhatsAppCta";

export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <Reveal className="hero-eyebrow-pill">
            <span className="what-new">Nuevo</span>
            <span>IA predictiva — Anticipa fallas con 7 días</span>
          </Reveal>
          <h1 className="reveal d1">
            <span>Inteligencia operacional</span>
            <br />
            <span className="accent">para tu flota.</span>
          </h1>
          <p className="hero-sub reveal d2">
            Conecta tu operación con los talleres que mantienen tu flota. Mantenimiento predictivo,
            diagnósticos en tiempo real y visibilidad total — sin complejidad.
          </p>
          <div className="hero-actions reveal d3">
            <WhatsAppCta surface="fleetmool" preset="trial" size="lg">
              Comenzar gratis por WhatsApp
            </WhatsAppCta>
            <WhatsAppCta surface="fleetmool" preset="demo" variant="secondary" size="lg">
              Ver demo en vivo
            </WhatsAppCta>
          </div>
          <div className="hero-meta reveal d4">
            <span>Sin tarjeta de crédito</span>
            <span className="dot"></span>
            <span>Onboarding en 30 minutos</span>
            <span className="dot"></span>
            <span>Soporte en español</span>
          </div>
        </div>
      </div>
      {/* HeroDashboard slot — added in Task 22 */}
    </section>
  );
}
```

- [ ] **Step 3: Render from `_index.tsx`**

Add `import { Hero } from "~/components/Hero";` and insert `<Hero />` between `<Nav>` and the comment placeholder.

- [ ] **Step 4: Build, push, verify**

```bash
bun run build
git add app/components/Hero.tsx app/routes/_index.tsx
git commit -m "feat: Hero component for Fleetmool landing"
git push
```

Hugo verifies on preview: hero copy renders with reveal animations on scroll into view, two WhatsApp buttons work, accent color is oxblood.

---

### Task 22: Port `<HeroDashboard>` (the mockup)

**Files:**
- Create: `app/components/HeroDashboard.tsx`
- Modify: `app/components/Hero.tsx`

- [ ] **Step 1: Port the dashboard mockup**

`index.html` lines ~83–~485 contain `<div class="hero-dashboard">…</div>` — a static SVG-and-divs mockup. No interactivity beyond CSS. Port the entire markup into `HeroDashboard.tsx` and convert attributes.

```tsx
export function HeroDashboard() {
  return (
    <div className="hero-dashboard">
      {/* PASTE the entire <div class="hero-dashboard">...</div> contents from index.html.
          Inline SVGs port directly — make sure stroke-width → strokeWidth, etc.
          Don't add any React state; this is presentational only. */}
    </div>
  );
}
```

Concrete: copy/paste, then run a search-and-replace pass for these JSX attribute renames:
- `class` → `className`
- `stroke-width` → `strokeWidth`
- `stroke-linecap` → `strokeLinecap`
- `stroke-linejoin` → `strokeLinejoin`
- `fill-rule` → `fillRule`
- `clip-rule` → `clipRule`
- `xmlns:xlink` → `xmlnsXlink`

- [ ] **Step 2: Render from `Hero.tsx`**

Add `import { HeroDashboard } from "./HeroDashboard";` and `<HeroDashboard />` where the comment placeholder was.

- [ ] **Step 3: Build, push, verify**

```bash
bun run build
git add app/components/HeroDashboard.tsx app/components/Hero.tsx
git commit -m "feat: HeroDashboard mockup (Fleetmool-only)"
git push
```

Hugo verifies: dashboard mockup renders pixel-identical to current production hero.

---

### Task 23: Port `<TrustBar>`

**Files:**
- Create: `app/components/TrustBar.tsx`
- Modify: `app/routes/_index.tsx`

- [ ] **Step 1: Locate** the `<section class="trust">` in `index.html` (search for `trust-bar` or `trust`).

- [ ] **Step 2: Port to component**

```tsx
export function TrustBar() {
  return (
    <section className="trust">
      {/* PASTE contents of <section class="trust">...</section> from index.html */}
    </section>
  );
}
```

- [ ] **Step 3: Render, build, push, verify**

```bash
bun run build
git add app/components/TrustBar.tsx app/routes/_index.tsx
git commit -m "feat: TrustBar section"
git push
```

---

### Task 24: Port `<EcoTabs>` (Ecosystem)

**Files:**
- Create: `app/components/EcoTabs.tsx`
- Modify: `app/routes/_index.tsx`

- [ ] **Step 1: Locate** `<section id="ecosystem">` in `index.html`.

- [ ] **Step 2: Component with interactive state**

This section has the segmented-pill switcher. Replace the `initEcoTabs()` imperative code with React state.

```tsx
import { useEffect, useLayoutEffect, useRef, useState } from "react";

type Side = "fleet" | "workshop";

export function EcoTabs() {
  const [active, setActive] = useState<Side>("fleet");
  const switcherRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const fleetTabRef = useRef<HTMLButtonElement | null>(null);
  const workshopTabRef = useRef<HTMLButtonElement | null>(null);

  const position = () => {
    const slider = sliderRef.current;
    const tab = active === "fleet" ? fleetTabRef.current : workshopTabRef.current;
    if (!slider || !tab) return;
    slider.style.width = `${tab.offsetWidth}px`;
    slider.style.transform = `translateX(${tab.offsetLeft - 4}px)`;
  };

  useLayoutEffect(() => {
    position();
  }, [active]);

  useEffect(() => {
    const onResize = () => position();
    window.addEventListener("resize", onResize);
    document.fonts?.ready?.then(position);
    return () => window.removeEventListener("resize", onResize);
  });

  return (
    <section id="ecosystem">
      {/* PORT the whole section markup; for the switcher, wire:
          - <div id="eco-switcher" ref={switcherRef}>
          - <div id="eco-slider" ref={sliderRef}>
          - <button ref={fleetTabRef} className={`eco-tab ${active === "fleet" ? "active" : ""}`} onClick={() => setActive("fleet")}>...</button>
          - <button ref={workshopTabRef} className={`eco-tab ${active === "workshop" ? "active" : ""}`} onClick={() => setActive("workshop")}>...</button>
          - <div className={`eco-panel ${active === "fleet" ? "active" : ""}`} data-side="fleet">...</div>
          - <div className={`eco-panel ${active === "workshop" ? "active" : ""}`} data-side="workshop">...</div>
      */}
    </section>
  );
}
```

Fill in the PORT comment by copying the original section's markup and wiring the refs/handlers above.

- [ ] **Step 3: Render, build, push, verify**

Hugo checks: tab switches work, sliding pill positions correctly on first load and after window resize, accent color matches active side.

---

### Task 25: Port the three big feature stories

**Files:**
- Create: `app/components/FeatureStories.tsx`
- Modify: `app/routes/_index.tsx`

- [ ] **Step 1: Locate** the three big feature story blocks in `index.html` (look for `features` or `feature-story`).

- [ ] **Step 2: Port all three into one component**

The three stories are structurally identical; one component renders all three (no per-story splitting needed for v1).

```tsx
import { Reveal } from "./Reveal";

export function FeatureStories() {
  return (
    <section id="platform">
      {/* PASTE the three feature-story sections from index.html.
          Each has reveal classes — wrap with <Reveal stagger={n}> where the
          original had class="reveal dN", and drop the class. */}
    </section>
  );
}
```

- [ ] **Step 3: Render, build, push, verify**

---

### Task 26: Port `<AiViz>` (AI section)

**Files:**
- Create: `app/components/AiViz.tsx`
- Modify: `app/routes/_index.tsx`

- [ ] **Step 1: Locate** `<section id="ai">` and the `#ai-viz` block.

- [ ] **Step 2: Component with interval animation**

```tsx
import { useEffect, useRef, useState } from "react";

export function AiViz() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [stepIdx, setStepIdx] = useState<number>(-1);
  const [bars, setBars] = useState<number[]>(() => Array.from({ length: 10 }, () => 30 + Math.random() * 65));

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let started = false;
    let interval: ReturnType<typeof setInterval> | null = null;

    const tick = () => {
      setStepIdx((prev) => {
        const next = (prev + 1) % 3; // 3 ai-nodes; adjust if your DOM has more
        if (next === 0) setBars(Array.from({ length: 10 }, () => 30 + Math.random() * 65));
        return next;
      });
    };

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !started) {
            started = true;
            tick();
            interval = setInterval(tick, 1900);
            obs.disconnect();
          }
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);

    return () => {
      obs.disconnect();
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <section id="ai">
      <div ref={containerRef} id="ai-viz">
        {/* PORT the AI viz markup. For each .ai-node element, render:
            <div className={`ai-node ${stepIdx === N ? "active" : ""}`}>...</div>
            For each .ai-sensor-bar, use bars[idx] as inline height %:
            <div className="ai-sensor-bar" style={{ height: `${bars[idx]}%` }} /> */}
      </div>
    </section>
  );
}
```

Adjust the `% 3` modulo if the DOM has a different number of `.ai-node` elements.

- [ ] **Step 3: Render, build, push, verify** — Hugo confirms the animation runs when the AI section scrolls into view, bars reshuffle each loop.

---

### Task 27: Port `<ConnectedFlow>` (connected workflow)

**Files:**
- Create: `app/components/ConnectedFlow.tsx`
- Modify: `app/routes/_index.tsx`

- [ ] **Step 1: Locate** `#flow-list` in `index.html`.

- [ ] **Step 2: Component**

```tsx
import { useEffect, useRef, useState } from "react";

const DURATION = 4000;

export function ConnectedFlow() {
  const listRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const [stopped, setStopped] = useState(false);
  const stepCount = 4; // adjust to match the DOM

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    let interval: ReturnType<typeof setInterval> | null = null;

    const tick = () => setActive((i) => (i + 1) % stepCount);

    const startAutoplay = () => {
      if (interval || stopped) return;
      interval = setInterval(tick, DURATION);
    };

    const onVisibility = () => {
      if (document.hidden && interval) {
        clearInterval(interval);
        interval = null;
      } else if (!document.hidden && !stopped) {
        startAutoplay();
      }
    };

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && !stopped) startAutoplay();
          else if (interval) {
            clearInterval(interval);
            interval = null;
          }
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      obs.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      if (interval) clearInterval(interval);
    };
  }, [stopped]);

  const onStepClick = (i: number) => {
    setStopped(true);
    setActive(i);
  };

  return (
    <section>
      <div
        ref={listRef}
        id="flow-list"
        className={stopped ? "user-stopped" : ""}
      >
        {/* PORT each .flow-step block. Render:
            <button
              className={`flow-step ${active === i ? "is-active" : ""}`}
              onClick={() => onStepClick(i)}
              tabIndex={0}
            >
              ...
            </button>
        */}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Render, build, push, verify**

Hugo confirms: steps cycle every 4 seconds; clicking a step stops cycling permanently.

---

### Task 28: Port the remaining Fleetmool sections (metrics, cases, pricing, final CTA)

**Files:**
- Create: `app/components/Metrics.tsx`
- Create: `app/components/CaseStudies.tsx`
- Create: `app/components/Pricing.tsx`
- Create: `app/components/FinalCta.tsx`
- Modify: `app/routes/_index.tsx`

- [ ] **Step 1: Port each section into its own component**

For each: find the matching `<section>` in `index.html`, paste into the component file, convert attributes, wrap revealed elements with `<Reveal>`, replace `<a href="https://wa.me/...">` with `<WhatsAppCta>`.

`<Metrics>` is the one that uses `data-counter`. For each counter span, replace with:

```tsx
import { useCounter } from "~/hooks/useCounter";

// Inline usage:
function Counter({ target, suffix }: { target: string | number; suffix?: string }) {
  const { ref, text } = useCounter(target, suffix);
  return <span ref={ref}>{text}</span>;
}
```

And in the metrics JSX:
```tsx
<div className="v red"><Counter target={500} suffix="+" /></div>
```

- [ ] **Step 2: Wire all four into `_index.tsx`**

```tsx
import { Metrics } from "~/components/Metrics";
import { CaseStudies } from "~/components/CaseStudies";
import { Pricing } from "~/components/Pricing";
import { FinalCta } from "~/components/FinalCta";

// inside Index():
<>
  <Nav surface="fleetmool" />
  <Hero />
  <TrustBar />
  <EcoTabs />
  <FeatureStories />
  <AiViz />
  <ConnectedFlow />
  <Metrics />
  <CaseStudies />
  <Pricing />
  <FinalCta />
  <Footer />
</>
```

- [ ] **Step 3: Build, push, verify**

Hugo confirms `/` matches the current production site visually, end-to-end. **Do a careful side-by-side comparison** at this checkpoint — production at `fleetmool-landing.pages.dev` vs the preview URL.

---

## Phase 7 — Port the F4W route (`/f4w`)

### Task 29: F4W route shell

**Files:**
- Modify: `app/routes/f4w.tsx`

- [ ] **Step 1: Replace placeholder with composition shell**

```tsx
import type { MetaFunction } from "@remix-run/cloudflare";
import { Nav } from "~/components/Nav";
import { Footer } from "~/components/Footer";

export const handle = { bodyPage: "f4w", bodyAccent: "blue" };

export const meta: MetaFunction = () => [
  { title: "F4W — Tu taller, digitalizado en minutos" },
  {
    name: "description",
    content:
      "La plataforma para talleres modernos. Gestiona servicios, genera cotizaciones y conecta tu taller directamente con flotas. 3 meses gratis.",
  },
];

export default function F4W() {
  return (
    <>
      <Nav surface="f4w" />
      {/* F4W sections land in Tasks 30–32 */}
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Build, commit, push, verify**

Hugo confirms `/f4w` shows nav + footer with cobalt accent (verify `<body data-accent="blue">` in view-source).

---

### Task 30: Port F4W hero and shared-shape sections

**Files:**
- Create: `app/components/F4WHero.tsx`
- Create: `app/components/F4WSections.tsx` (or split as needed)
- Modify: `app/routes/f4w.tsx`

- [ ] **Step 1: Port F4W hero**

`f4w.html` lines ~48–80 contain the F4W hero. Same component shape as Fleetmool Hero but with F4W copy + F4W CTAs (preset="trial" → "Registrar mi taller gratis").

- [ ] **Step 2: Port F4W middle sections**

F4W has its own feature sections (different content from Fleetmool's). Port each — same mechanical pattern as Phase 6.

- [ ] **Step 3: Render, build, push, verify**

---

### Task 31: Port `<ComparisonTable>` (F4W-only)

**Files:**
- Create: `app/components/ComparisonTable.tsx`
- Modify: `app/routes/f4w.tsx`

- [ ] **Step 1: Locate** the comparison table in `f4w.html` (matches styles.css section "21b. COMPARISON TABLE").

- [ ] **Step 2: Port to component**

```tsx
export function ComparisonTable() {
  return (
    <section>
      {/* PASTE the F4W comparison-table markup, attribute-converted */}
    </section>
  );
}
```

- [ ] **Step 3: Render, build, push, verify**

---

### Task 32: Port F4W pricing + final CTA

**Files:**
- Create: `app/components/F4WPricing.tsx` (if pricing copy differs significantly from `<Pricing>`)
- Create: `app/components/F4WFinalCta.tsx` (or reuse `<FinalCta surface="f4w" />` if you generalize it)
- Modify: `app/routes/f4w.tsx`

- [ ] **Step 1: Decide if generalizing**

If F4W pricing and final CTA differ from Fleetmool's only in copy + presets, refactor the Fleetmool versions to accept a `surface` prop and reuse. Otherwise create F4W-specific components. Pick whichever results in less code.

- [ ] **Step 2: Wire into `f4w.tsx`**

Final `f4w.tsx` should compose: `<Nav surface="f4w" />`, F4W hero, F4W sections, `<ComparisonTable />`, F4W pricing, F4W final CTA, `<Footer />`.

- [ ] **Step 3: Build, push, verify**

Hugo confirms `/f4w` matches production F4W page end-to-end.

---

## Phase 8 — Cleanup and cut-over

### Task 33: Delete the static-era files

**Files:**
- Delete: `index.html`
- Delete: `f4w.html`
- Delete: `styles.css`
- Delete: `script.js`

- [ ] **Step 1: Remove**

```bash
git rm index.html f4w.html styles.css script.js
```

- [ ] **Step 2: Verify build still passes** (nothing referenced these at the root)

```bash
bun run build
```

- [ ] **Step 3: Commit**

```bash
git commit -m "chore: delete pre-Remix static files"
```

---

### Task 34: Update `CLAUDE.md`

**Files:**
- Modify: `CLAUDE.md`

- [ ] **Step 1: Rewrite the "Project" section**

Change:
> Pure vanilla HTML/CSS/JS — no framework, no transpiler.

To:
> Remix app served on Cloudflare Pages. Two routes (`/`, `/f4w`) sharing a global stylesheet and a React component library. Bun is the package manager and dev script runner (Cloudflare's Workers runtime is what runs in production). Tailwind v4 + shadcn/ui are installed but reserved for new components — the existing marketing chrome uses the ported `styles.css` under `@layer base`.

- [ ] **Step 2: Replace the "Run locally" section**

```markdown
## Run locally

```bash
bun install
bun dev          # http://localhost:5173, with HMR
```

`bun run preview` builds and serves through `wrangler pages dev ./build/client`, mirroring Cloudflare's edge behavior. Use it when debugging anything Pages-specific (cache, redirects).

The previous `python3 -m http.server` workflow is gone — there's no longer a static file at the repo root to serve.
```

- [ ] **Step 3: Update the "Deploy" section**

Change `npm run build` references to `bun run build`. Note that `dist/` is replaced by `build/client/`.

- [ ] **Step 4: Update the "Working without a local environment" section**

The mobile-Claude workflow doesn't change — preview URL is still the verification mechanism — but bullet (1) should mention that the working tree now includes a Remix project.

- [ ] **Step 5: Rewrite the "Architecture" section**

Replace the vanilla-stack description with the Remix structure:
- Routes (`app/routes/_index.tsx`, `app/routes/f4w.tsx`)
- Shared components (`app/components/`)
- Hooks (`app/hooks/`)
- Lib (`app/lib/`)
- `<body data-page|data-accent>` via `useMatches()` in `root.tsx`
- `globals.css` layering (Tailwind → `@theme` → ported styles in `@layer base`)
- WhatsApp CTA centralization in `app/lib/whatsapp.ts`

Drop the i18n section (no i18n in v1) and replace with a one-liner noting it was removed.

- [ ] **Step 6: Commit**

```bash
git add CLAUDE.md
git commit -m "docs: rewrite CLAUDE.md for Remix + Bun stack"
```

---

### Task 35: Update `README.md`

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Rewrite to match the new stack**

```markdown
# Fleetmool Landing

Marketing site for [Fleetmool](https://fleetmool.com) and F4W (Fleetmool for Workshops). Remix on Cloudflare Pages.

## Routes

| URL | File | Surface |
|-----|------|---------|
| `/`    | `app/routes/_index.tsx` | Fleetmool — fleet managers |
| `/f4w` | `app/routes/f4w.tsx`    | F4W — workshops           |

## Stack

- Remix 2.x + Vite + `@remix-run/cloudflare-pages`
- React 18, TypeScript
- Tailwind v4 (CSS-first config) + shadcn/ui
- Bun (package manager + dev script runner)
- Cloudflare Pages

## Local development

```bash
bun install
bun dev
```

See [`CLAUDE.md`](./CLAUDE.md) for the architecture, deploy flow, and PR-preview pipeline.
```

- [ ] **Step 2: Commit**

```bash
git add README.md
git commit -m "docs: README for the Remix stack"
```

---

### Task 36: Final visual verification + merge

**Files:** none

- [ ] **Step 1: Push the final state**

```bash
git push
```

- [ ] **Step 2: Wait for the preview**

```bash
gh run watch --exit-status
```

- [ ] **Step 3: Hugo does a side-by-side end-to-end check**

Open both URLs in adjacent browser tabs on the same device:
- Production: whatever URL serves the current static site (either `https://fleetmool-landing.pages.dev/` or a custom domain like `https://fleetmool.com/` if attached) and `/f4w`
- Preview: `https://preview-pr-<N>.fleetmool-landing.pages.dev/` and `/f4w`

Verify:
- All sections render
- All animations work (reveal-on-scroll, counters, AI viz, connected flow)
- Ecosystem tabs switch correctly with sliding pill
- WhatsApp CTAs open WhatsApp with the right preset message
- Mobile nav toggle works on a phone-width browser window
- Sticky nav scroll state engages past 16px
- Smooth-scroll anchor links land 72px below the section top
- `/f4w` has cobalt accent everywhere, `/` has oxblood
- No console errors on either page

- [ ] **Step 4: Mark PR ready for review and merge**

```bash
gh pr ready
gh pr merge --merge --auto    # or --squash, per team preference
```

When the merge runs, `deploy.yml` ships `build/client/` to production. Cloudflare flips. The static site is gone.

- [ ] **Step 5: Verify production**

After the deploy workflow finishes, open the production URL (`https://fleetmool-landing.pages.dev/` or the attached custom domain) and confirm the Remix version is live.

**Rollback if needed:** revert the merge commit on `main` (`git revert -m 1 <merge-sha> && git push`). The deploy workflow re-runs against the reverted commit, `wrangler.jsonc` flips back to `./dist`, and the static site returns. Nothing on Cloudflare needs to change.

---

## Done

After Task 36, the migration is complete:
- ✅ Vanilla static files gone; Remix app live
- ✅ Tailwind v4 + shadcn/ui ready for new components
- ✅ PR previews still work, now showing the Remix version
- ✅ WhatsApp CTAs centralized
- ✅ All interactive behavior preserved
- ✅ Visual parity with the pre-migration site
- ✅ CLAUDE.md and README.md reflect the new stack

Future dynamic features (forms, booking flows, gated content) can now use Remix loaders/actions, shadcn components, and Cloudflare bindings — none of which were ergonomically possible in the static stack.
