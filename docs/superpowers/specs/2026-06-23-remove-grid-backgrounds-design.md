# Remove Grid Background Patterns — Design Spec
**Date:** 2026-06-23  
**Scope:** `app/styles/globals.css` — three CSS pseudo-element blocks removed  
**Status:** Approved

## Problem

Three sections use a repeating `linear-gradient` square grid as a background texture. This is a common AI-generated dark SaaS motif that reads as generic.

## Change

Delete the following pseudo-element blocks entirely. No replacement — the surfaces become clean flat dark.

| Selector | Lines | Grid size |
|---|---|---|
| `.hero::after` | ~585–597 | 56px |
| `.eco-viz::before` | ~1193–1203 | 28px |
| `.ai-viz::before` | ~1404–1413 | 24px |

## What stays

- `.hero::before` — radial red glow gradients. Not a grid; intentional ambient color bloom. Keep.
- All other section backgrounds unchanged.

## Notes

- No component files change — CSS only.
- If texture is desired later, add as a deliberate separate pass (e.g. SVG noise grain).
