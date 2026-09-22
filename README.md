# DEEPTRACE AI

Next.js 14 (App Router) + TypeScript + Tailwind CSS rebuild of the site, rebranded
from VOIDTRACE AI to **DEEPTRACE AI**, with the $DEEPT token, built on **Robinhood Chain**.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What changed from the original HTML/CSS

- Rebuilt as a Next.js app (App Router, TypeScript, Tailwind) — one component per section.
- Brand renamed: VOIDTRACE AI → **DEEPTRACE AI**, $VOIDE → **$DEEPT**.
- All "Ethereum" references → **Robinhood Chain**.
- Navbar "Thesis" link renamed to **"Home"** and now points at the hero.
- Hero headline changed to **"Trace The Hided Fragment_"**.
- Hero background is now the video you provided (autoplaying, muted, looped), with an
  animated gradient wave + bouncing scroll indicator at the bottom of the hero.
- The same video plays site-wide as a fixed, dimmed ambient background layer behind
  every section, tying the whole page back to the hero.
- A custom cursor (dot + lagging ring) is active site-wide on desktop; it enlarges over
  links, buttons and cards. It's automatically disabled on touch devices.
- Every card family has its own distinct hover animation instead of one shared effect:
  - Process cards ("How DEEPTRACE AI Works") — lift + a diagonal light sweep around the border.
  - Secondary agent cards — scale up + a top accent bar slides in.
  - Delivery cards — a 3D tilt with a deepening purple shadow.
  - Token utility cards — a pulsing ring on hover.
  - Thesis "number" cards — the underline reveals and the index number pops.
  - Engine feature list — a left accent bar grows in.
  - Roadmap markers — the dot glows and scales.
  - Tag pills — a fill sweep transitions the background.

## Liquidity Dashboard (`/dashboard`)

The navbar and hero "Launch App" buttons now open `/dashboard` — a live
token-supply/liquidity tracker for Robinhood Chain, restyled to match the
main site (purple accents, same fonts, same card and border tokens) but
kept as its own simple layout (logo + "back to site" link) rather than the
full marketing navbar.

```bash
npm install
npm run fetch-tvl      # runs scripts/getTVL.mjs once, writes data/tvl-data.json
npm run dev            # http://localhost:3000/dashboard
```

**Before it shows real numbers**, open `lib/contracts.ts` and
`scripts/getTVL.mjs` and replace the placeholder addresses with real,
independently-verified AAPLx / TSLAx contract addresses — until then every
number reads as `$0`. Full setup (GitHub Actions cron, Vercel deploy,
optional live price proxy) is unchanged from the original dashboard spec —
see the inline comments in `scripts/getTVL.mjs`, `lib/contracts.ts`, and
`.github/workflows/cron-tvl.yml`. Copy `.env.example` to `.env.local` for
local runs of `npm run fetch-tvl`.

One labeling note carried over from the original build: Robinhood's Stock
Tokens have been described as debt securities providing price exposure
rather than confirmed 1:1 on-chain collateral — the dashboard already says
"supply value," not "verified reserves," to stay accurate on that point.

## $DEEPT Presale (coming soon)

A new section (`components/Presale.tsx`, linked from the navbar, footer,
and section 08) sits between Token Utility and the Roadmap. It's marked
with a pulsing "Coming Soon" badge and has its price/allocation/open-date
stats and email capture disabled until you're ready to announce real
terms — flip `disabled` off on the `<input>` and `<button>` in that file
(and give the form a real submit handler) when the presale actually opens.

**Since this update**, the dashboard has:

- **5 tracked tokens** instead of 2 — AAPLx, TSLAx, NVDAx, MSFTx, and AMZNx are all
  defined in `lib/contracts.ts` and `scripts/getTVL.mjs` with the same
  `0xPASTE_YOUR_..._ADDRESS_HERE` placeholder pattern as before. Fill in real,
  independently-verified addresses for each before running the cron.
- **Corrected copy** — the header now reads "Token Supply & Market Value" and the
  chart is labeled "Total Supply Value — History" instead of the old
  "Liquidity & Capital Depth" / "TVL" language, which didn't match what's
  actually being measured (on-chain token supply × price, not pool liquidity).
- **A sidebar** (`components/dashboard/DashboardShell.tsx`) with Overview (the
  live stats/chart/table you already had) plus six not-yet-built sections —
  Buy $DEEPT, Search for Flow, Staking, Tokens, Agents, and API Access — each
  showing a "Coming Soon" panel when clicked. Flip an item's `live: true` in
  `navItems` once that piece is actually built, and fill in its real content
  where `ComingSoonPanel` is currently rendered.
- **An "AI integration and more features coming soon" banner** on the Overview tab.

Two things called out but intentionally left as-is:
- **Prices are still the `FALLBACK_PRICES` stub** in `scripts/getTVL.mjs` — the
  on-chain supply reads are real, but dollar totals will drift from reality
  until `getPrice()` is wired to a real quote API (see the `TODO` there).
- **The chart will look like a straight line** until a few more 6-hour
  snapshots land — two points (the $0 seed and your first real cron run)
  can't show a real trend yet. Nothing to fix, it just needs time.

If you're deploying this over your existing live site rather than a fresh
copy: your deployed `data/tvl-data.json` already has real history from your
cron runs, so keep that file as-is (don't overwrite it with the placeholder
one in this zip) — just add the three new token entries to its `latest.tokens`
and each `snapshots[].tokens` array (0 supply, matching fallback price) so the
next cron run picks them up cleanly.

## Metadata, favicon & social previews

`app/layout.tsx` now exports a full `Metadata` object: title template, description,
keywords, canonical URL, robots directives, Open Graph, and Twitter card data.

Update `siteUrl` at the top of `app/layout.tsx` (or set the `NEXT_PUBLIC_SITE_URL`
env var) to your real production domain once you deploy — it's used to resolve the
absolute URLs for the generated preview images below.

Three images are generated automatically (no image files to manage, no external
tools needed) via Next's built-in `next/og` renderer, and are picked up by Next
automatically:

- `app/icon.tsx` → the browser tab favicon
- `app/opengraph-image.tsx` → the preview image shown when the link is shared on
  Slack, Discord, iMessage, LinkedIn, etc.
- `app/twitter-image.tsx` → the card image shown when shared on X/Twitter

Both preview images share one scene defined in `lib/og-scene.tsx`, so editing the
tagline or colors there updates both at once.

## Logo

A vector logo now lives at `public/assets/logo.svg` (icon + "DEEPTRACE AI"
wordmark, used in the navbar and footer) and `public/assets/logo-mark.svg`
(icon only, on a rounded dark tile — handy for app icons or social avatars).
It's a hand-built SVG rather than a raster export, so it stays crisp at any
size and is easy to recolor — open it in any code editor or vector tool
(Figma, Illustrator) to tweak the gradient or shape. Swap either file out for
your own artwork later and the navbar/footer will pick it up automatically.

## Imagery

Every image slot is now filled with hand-built vector illustrations
(`public/assets/*.svg`) in the site's own palette and network/fragment motif —
no external image files needed, and they stay crisp at any size:

| File                       | Used in                               | Motif |
|-----------------------------|----------------------------------------|-------|
| `liquidity-stream.svg`      | Live Liquidity Stream section          | Flowing parallel liquidity streams |
| `intelligence-engine.svg`   | Liquidity Intelligence Engine section  | Dense neural/network mesh |
| `flow-agent.svg`            | Agents — Flow Agent                    | Directional flow lines |
| `core-agent.svg`            | Agents — Core Agent                    | Concentric core rings |
| `vector-agent.svg`          | Agents — Vector Agent                  | Radiating momentum vectors |
| `orbit-agent.svg`           | Agents — Orbit Agent                   | Orbiting ellipses |
| `veil-agent.svg`            | Agents — Veil Agent                    | Obscured node field |
| `rotor-agent.svg`           | Agents — Rotor Agent                   | Rotor/pinwheel blades |
| `delivery-layer.svg`        | Four Delivery Layers section           | Stacked labeled layers |
| `chain-network.svg`         | "Built on Robinhood Chain" section     | Hub-and-spoke chain clusters |
| `deept-token.svg`           | $DEEPT Utility section                 | Token badge with orbiting nodes |
| `waitlist-background.svg`   | Waitlist section background            | Wide ambient particle field |

They're placeholders in the sense that they're generated art, not photography
or 3D renders — but they're fully finished, on-brand, and safe to ship as-is.
Swap any of them out later for real photography/renders by dropping in a file
with the same name (any format — just update the `src` extension in that
component if it's not `.svg`).

## Notes

- The hero/background video is loaded from the CloudFront URL you shared — no local file needed.
- Reduced-motion is respected: animations are minimized for users with that OS preference set.
