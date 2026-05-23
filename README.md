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
