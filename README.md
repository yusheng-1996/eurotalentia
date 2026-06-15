# EuroTalentia — Recruitment Landing Page

A high-conversion, fully responsive recruitment landing page for candidates across Europe.
Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS** and **lucide-react**.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```

## Design system

- **Primary blue:** `#1982d2` (`brand`), dark `#1267a6`, tint `#e8f3fb`
- **Ink (headings/body):** `#121518`
- **Muted text:** `#606161`
- **Light background:** `#ecedf3` (`haze`)
- **Headings:** Playfair Display (serif) · **Body:** Inter (sans)
- Tokens live in `tailwind.config.ts`; shared component classes (`.btn`, `.btn-primary`, `.eyebrow`, `.section-title`, `.container-page`) in `app/globals.css`.

## Structure

```
app/
  layout.tsx          Fonts + global SEO/OpenGraph metadata
  page.tsx            Landing page composition + FAQ JSON-LD schema
  thank-you/page.tsx  Post-submission confirmation page
  globals.css         Tailwind layers + component classes
components/
  Header.tsx          Sticky header + working mobile hamburger menu
  Hero.tsx            Background image + white content card + 3 trust points
  TrustBar.tsx        Proof bar (countries / role levels / flexibility / 24h)
  JobCategories.tsx   Horizontal carousel (arrows on desktop, swipe on mobile)
  WhyUs.tsx           6 candidate benefits
  FeaturedRoles.tsx   8 role-type cards (work type + experience + CTA)
  HowItWorks.tsx      4-step process
  ApplySection.tsx    #apply section wrapping the form
  FormCraftEmbed.tsx  CLIENT: iframe auto-resize + duplicate-submit protection
  Faq.tsx             6 FAQ accordion items
  FinalCta.tsx        Closing call-to-action
  Footer.tsx          Brand, nav, contact, legal
  data.ts             Categories, roles, FAQ, nav (single source of truth)
```

## FormCraft embed behaviour (`components/FormCraftEmbed.tsx`)

Client component (`"use client"`), all `window`/`postMessage` logic inside `useEffect`.

- Listens for `message` events **only** from `https://formcraft.app`.
- `event.data.iframeHeight` → resizes the iframe to fit content.
- On `rf-submitted`:
  - **Duplicate protection** via `hasSubmittedRef` + `sessionStorage["eurotalentia_form_submitted"]`.
    The flag is read on mount, so a page refresh after submitting will **not** re-fire tracking or redirect.
  - Runs conversion tracking **once** (`runConversionTracking()` — wire your GTM/gtag/fbq there).
  - Resolves `thankYouUrl` from the payload, defaulting to `/thank-you`; relative paths are made absolute with `window.location.origin`.
  - **Desktop:** opens WhatsApp (if provided) in a new tab, then redirects this tab to thank-you.
  - **Mobile:** redirects to WhatsApp first (same tab), then to thank-you; if no WhatsApp, redirects to thank-you after a short tracking delay.
  - Shows a lightweight status ("Submitting…" → "Application received. Redirecting…").

> **Note:** True server-side duplicate prevention must also be enabled in the FormCraft dashboard if available. The front-end only prevents the *parent page* from processing/redirecting/tracking more than once.

## Conversion + SEO notes

- All CTAs link to `#apply` (or relevant pages); category cards set `?category=<slug>` and scroll to the form.
- `app/layout.tsx` provides title/description/OpenGraph/Twitter/canonical; FAQ schema (`FAQPage` JSON-LD) is injected on the home page.
- `/thank-you` is `noindex`.

## Manual test checklist

1. `npm run dev`, open `http://localhost:3000`.
2. Resize to **375px / tablet / desktop** — no overflow or overlap; hamburger menu opens/closes.
3. Click any **Job Category** → URL gains `?category=…` and the page scrolls to the form.
4. Every **Apply** button scrolls to `#apply`.
5. Submit the form once → status shows, tracking fires once, redirect to `/thank-you`.
6. Refresh the page after submitting → tracking/redirect do **not** fire again.
7. Visit `/thank-you` directly — styled consistently, links back to home/categories.
```
