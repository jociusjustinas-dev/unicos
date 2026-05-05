# UNICOS website

Marketing and product frontend for UNICOS — Next.js (App Router), React 19, Tailwind CSS v4.

Design and component rules for contributors and AI agents: **`AGENTS.md`** (tokens, typography, CTAs).

## Prerequisites

- Node.js 20+ (recommended)
- npm (or pnpm/yarn)

## Scripts

```bash
npm install
npm run dev    # http://localhost:3000
npm run build
npm run lint
```

## Repository layout

| Path | Purpose |
|------|---------|
| `src/app/` | Routes, layouts, `metadata` |
| `src/components/sections/` | Page sections (heroes, grids, footer, nav) |
| `src/components/ui/` | Reusable UI (CTAs, parallax image, drawers) |
| `src/config/` | Static page data (Akademija events, brands, shells) |
| `src/lib/` | Client context: auth (mock), academy cart |
| `src/styles/` | Globals and design tokens (`tokens.css`) |

## What is mock vs production-ready UI

Several flows are **front-end only** until WordPress / WooCommerce (or another backend) is wired in. See **`docs/engineering-notes.md`** for exact files and integration notes.

Rough split:

- **Production-quality UI:** layouts, sections, design system, most pages.
- **Mock / temporary:** user session in `localStorage`, academy cart in `sessionStorage`, demo orders on `/profilis`, optional demo role toggle for “partner” previews, some config `href`s pointing at template pages.

## External systems (planned)

- **B2B platform:** external product on another domain — header link is a placeholder (`#`) until the real URL is set.
- **WordPress:** target for customers, partners, resources gating, and optionally WooCommerce orders — see `docs/engineering-notes.md`.

## Environment variables

No secrets are required for local dev with the current mocks. When integrating WP, add variables only in server-side code (e.g. Route Handlers) — do not expose application passwords to the browser.

## License / ownership

Private project — see repository owner.
