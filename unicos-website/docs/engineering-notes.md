# Engineering notes (UNICOS frontend)

This document is for developers joining the project or integrating **WordPress** (and optionally **WooCommerce**). It describes mock boundaries andwhere to plug in real APIs.

---

## Stack

- **Next.js** 16 (App Router), **React** 19
- **TypeScript**
- **Tailwind CSS** v4 (`@tailwindcss/postcss`)
- **GSAP** — preloader / some motion
- **Lenis** — smooth scroll where used
- Icons: **Iconify** (`@iconify/react`, marketeq pack where mapped in code)

---

## Mock vs real (current state)

### Authentication — **mock**

| Item | Detail |
|------|--------|
| File | `src/lib/auth.tsx` |
| Storage key | `unicos-auth-user` in `localStorage` |
| Behaviour | `signIn` / `signUp` simulate delay; no password verification against a server; session is not secure |
| User shape | `AuthUser`: `id`, `email`, `fullName`, optional `phone`, `company`, `role: 'user' \| 'partner'`, `createdAt` |
| Partner flag | `isPartner` is `user.role === 'partner'` |

**Consumers:** `layout.tsx` (`AuthProvider`), `/prisijungti`, `/sukurti-paskyra`, `/profilis`, `/resursai`, `NavigationBarSection`.

**WP integration:** Replace the implementation inside `auth.tsx` (or swap to NextAuth + Credentials / JWT) so that `signIn` / `signUp` / session reflect WordPress users and server-side session (httpOnly cookie). Map WP role or user meta → `role: 'partner'` for resource gating.

### Academy cart — **mock**

| Item | Detail |
|------|--------|
| File | `src/lib/cart.tsx` |
| Storage | `sessionStorage` |
| UI | `CheckoutCartDrawer`, “Registruotis” flows on academy |

**WP / WC integration:** Persist cart server-side or sync to WooCommerce session; checkout should create real orders and payments when backend exists.

### Profile orders — **demo data**

| Item | Detail |
|------|--------|
| File | `src/app/profilis/page.tsx` |
| Behaviour | `DEMO_ORDERS` array — replace with WC `orders` API or custom WP endpoint |

### Password reset page — **UI only**

| File | `src/app/atkurti-slaptazodi/page.tsx` |
| Behaviour | Shows success message after delay; sends nothing |

### Demo role toggle — **remove in production**

| File | `src/app/profilis/page.tsx` |
| Purpose | Lets QA switch `user` ↔ `partner` without WP to preview `/resursai` paywall |

Remove or hide behind `NODE_ENV === 'development'` once partner status comes only from WP.

### Config-driven links (template destinations)

Files under `src/config/` (e.g. `akademijaPage.ts`, `prekiuZenklaiPage.ts`) may point many cards to **one template route** for demos. Replace with CMS or REST URLs when content lives in WP.

---

## WordPress integration checklist

1. **Auth:** Server Route Handlers (or NextAuth) call WP JWT / Application Password / custom REST; never expose WP credentials in client bundles.
2. **CORS:** Prefer proxying WP through Next `/api/*` so the browser talks only to the Next origin.
3. **`/profilis`:** Load user meta + orders from WP/WC APIs.
4. **`/resursai`:** Today gating uses client `useAuth().isPartner`. For real security, enforce partner status in **middleware** or **server components** using the session, not only `localStorage`.
5. **`/tapkite-partneriu`:** When application is approved in WP, set user meta → map to `partner` on next login.

---

## Design system pointer

Brand and CTA implementation details are intentionally **not** duplicated here — they live in **`AGENTS.md`** and `src/components/ui/ctaShared.tsx`, `src/styles/tokens.css`.

---

## Naming

- **`/akademija/registracija`** — academy checkout (payer + participants), simulated payment until WC exists.
- **`/sukurti-paskyra`** — account creation (distinct from akademija registracija checkout).
