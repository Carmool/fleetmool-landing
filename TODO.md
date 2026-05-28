# TODO — tech debt

## Cache workarounds to clean up

After the stuck Cloudflare cache for the old static site naturally expires (~2026-05-31, when `s-maxage=604800` from 2026-05-24 elapses), revisit these workarounds:

- [ ] Remove `app/routes/script[.]js.tsx` — legacy stub added in commit `64aaab0` to silence 404s for `/script.js?v=6` requested by cached old HTML. Once browsers stop having the old HTML cached, the stub is dead code.
- [ ] Decide whether to keep the apex → www redirect rule in Cloudflare. It was added as a workaround for a stuck DFW edge cache on `fleetmool.com/f4w`. Once that cache expires, the apex domain will serve fresh content directly. Options: (a) remove the redirect so `fleetmool.com` works directly; (b) keep it since many sites prefer the www canonical anyway — if so, also redirect at the Pages level so the canonical URL is consistent across surfaces.

## Cloudflare zone settings to revisit

Open the **fleetmool.com zone** in the Cloudflare dashboard (account `416f74acd9056965776eb0103b3b1ee7`, Carmool):

- [ ] **Caching > Configuration > Browser Cache TTL**: change from `14400` (4hr) to **"Respect Existing Headers"**. The current value forces a 4-hour browser cache regardless of what the origin says, which is what made the original cache problem so sticky.
- [ ] **Caching > Configuration > Caching Level**: change from `Aggressive` to **`Standard`**. Aggressive caches based on query strings which is overkill for a Pages-backed site.
- [ ] **Caching > Configuration > Development Mode**: verify it's OFF (auto-expires after 3hr from when it was enabled, ~2026-05-28 04:30 UTC). Leaving it on indefinitely degrades performance.

## Code

- [ ] Revisit the `.hydrated` class gating on `.reveal` animations in `app/styles/globals.css:2147`. It was added as a defense against the case where Remix client JS fails to load (which was actually a Cloudflare cache symptom, not a routing problem). The defense is still valuable — content stays readable if JS ever fails — but if we add new reveal animations elsewhere, remember they only animate when `.hydrated` is on `<html>`.
- [ ] `app/root.tsx` exports `headers` with `Cache-Control: public, max-age=0, must-revalidate`. This is conservative — every HTML request revalidates with the origin. If we later want CDN-level caching on HTML (with proper purge-on-deploy), this is the knob to tune.
