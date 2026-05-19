# Fleetmool Landing

Premium SaaS landing page for [Fleetmool](https://fleetmool.com) — operational intelligence for fleet management and workshops in Mexico & LATAM.

## Pages

| File | Description |
|------|-------------|
| `index.html` | Main Fleetmool landing — for fleet managers |
| `f4w.html` | F4W landing — Fleetmool for Workshops |
| `styles.css` | Shared design system |
| `script.js` | Language detection, animations, interactions |

## Design system

- **Font:** Hanken Grotesk + JetBrains Mono
- **Fleetmool accent:** Oxblood `#9F1F2E`
- **F4W accent:** Cobalt `#2563EB` (applied via `body[data-accent="blue"]`)
- **Background:** Warm near-black `#0D0B0A`
- **References:** Stripe, Linear, Vercel

## Development

No build step. Serve the directory with any static file server:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Language

Spanish-first. Language is auto-detected from timezone and browser locale — no manual toggle needed. Manually override via `localStorage.setItem('fm-lang', 'en')`.

All translatable strings use `data-t="key.path"` attributes mapped to the `T` object in `script.js`.

## Structure

```
fleetmool-landing/
├── index.html    # Fleet managers landing
├── f4w.html      # Workshops landing
├── styles.css    # Design system & components
└── script.js     # Translations, animations, interactions
```
