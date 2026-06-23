# Color Palette Swap — Design Spec
**Date:** 2026-06-22  
**Scope:** Fleetmool main page (red family) + F4W accent override  
**Status:** Approved

## Palette

| Name | Hex | Role |
|---|---|---|
| Molten Lava | `#780000` | Not used directly — too dark; derived values cover this range |
| Flag Red | `#C1121F` | Fleetmool primary brand accent (`--red`) |
| Papaya Whip | `#FDF0D5` | Not changed — current `--ink: #F3EDE2` is equivalent enough |
| Deep Space Blue | `#003049` | F4W deep/pressed state (`--red-deep` in accent override) |
| Steel Blue | `#669BBC` | F4W primary interactive accent (`--red` in accent override) |

## Section 1 — Fleetmool `--red` family

All changes are in the `:root` block of `app/styles/globals.css`.

| Token | Current | New |
|---|---|---|
| `--red` | `#9F1F2E` | `#C1121F` |
| `--red-hover` | `#B22737` | `#D01528` |
| `--red-deep` | `#7A1620` | `#950E17` |
| `--red-tint` | `rgba(231,136,146,0.10)` | `rgba(193,18,31,0.10)` |
| `--red-soft` | `rgba(231,136,146,0.28)` | `rgba(193,18,31,0.28)` |
| `--red-text` | `#E78892` | `#EF8A93` |
| `--red-light` | `#E78892` | `#EF8A93` |
| `--red-lighter` | `#F2A6B0` | `#F4A8B2` |
| `--red-glow-rgb` | `159, 31, 46` | `193, 18, 31` |

No other `:root` tokens change in this pass.

## Section 2 — F4W `body[data-accent="blue"]` override

The F4W page rebinds `--red` and its family via `body[data-accent="blue"]` in `globals.css`. Replace the current cobalt values with the navy/steel-blue palette.

**Why Steel Blue as `--red` (not Deep Space Blue):** `#003049` is too dark to achieve readable contrast on the page's dark backgrounds. Steel Blue `#669BBC` is the visible interactive accent; Deep Space Blue covers the pressed/deep state.

| Token | Current | New |
|---|---|---|
| `--red` | `#2563EB` | `#669BBC` |
| `--red-hover` | `#1D4ED8` | `#7AAFC9` |
| `--red-deep` | `#1E40AF` | `#003049` |
| `--red-tint` | `var(--blue-tint)` | `rgba(102,155,188,0.10)` |
| `--red-soft` | `var(--blue-soft)` | `rgba(102,155,188,0.28)` |
| `--red-text` | `var(--blue-text)` | `#8EC4DB` |
| `--red-light` | `#93B7FF` | `#8EC4DB` |
| `--red-lighter` | `#BDD2FF` | `#AACFE6` |
| `--red-glow-rgb` | `37, 99, 235` | `102, 155, 188` |

## Implementation Notes

- All changes are confined to `app/styles/globals.css` — no component files need editing.
- The accent rebinding architecture (`body[data-accent="blue"]`) is unchanged; only the values inside it are updated.
- No new tokens are introduced; no tokens are removed.
- Verify in localhost after applying: check buttons, CTAs, badges, hover states, and the AiViz/ConnectedFlow glow effects on both pages.
