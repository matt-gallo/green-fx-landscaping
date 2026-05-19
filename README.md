# Green FX Landscaping — Website

Next.js 16 (App Router) + Tailwind v4. Marketing site built from the Mercenary
Method creative brief. Replaces the templated suburban-landscaper site with a
premium GTA outdoor-living craftsman brand.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy (GitHub → Railway)

Same pattern as the other TF sites: push to GitHub, Railway auto-builds.

- `railway.json` pins the build (`npm run build`) and start (`npm run start`).
- Railway injects `$PORT`; `next start` binds to it automatically.
- No environment variables are required for the static marketing site.

## Where the content lives

All copy and config is centralized so it can be updated without touching JSX:

| File | Contents |
|---|---|
| `src/lib/site.ts` | Phone, email, review URL, service areas, nav, proof points |
| `src/lib/services.ts` | 4 service categories, 5 offer tiers, USP pillars |
| `src/lib/portfolio.ts` | Project list (captions; swap in real photos) |
| `src/lib/areas.ts` | Per-municipality SEO pages (add a municipality here) |

## Open items for Pino (marked `TODO(Pino)` in code)

- Real phone number and email (`src/lib/site.ts`).
- Confirm proof-point numbers: project count, average ticket, Google review
  count + rating (brief section 5 "Open" note).
- Supply real project photography — every `ImageSlot` is a marked placeholder;
  no stock per brief 12.5.
- Wire the estimate form to a CRM/email endpoint, and embed Cal.com / Calendly
  in the contact-page booking slot.
- Optional: buy Canela + Söhne licenses to swap the free Fraunces + Inter
  fonts (configured in `src/app/layout.tsx`).

## Sales / engagement notes (Rob)

- **No Google Business Profile exists yet.** The footer "Read our Google
  reviews" link and any review proof are gated behind `site.hasGoogleProfile`
  (currently `false`) so nothing dead ships. GBP setup + ongoing review
  management is part of the TrueFlow upsell — a concrete, recurring-value gap
  to lead with, not just a missing link.
- Offer structure being floated: ~$1,500 up front to finish the site +
  connect everything through GHL (Rob already uses GHL); $150/wk to maintain
  the SEO-optimized blog so he starts ranking. If he moves to TrueFlow in GHL:
  add Google review management + a booking agent / chat widget (the contact
  page already has a marked booking-embed slot ready for this).
- The site is offered free as-is if he just wants it; the recurring work
  (blog SEO, reviews, booking agent) is the actual business.

## Brand system

Implemented per brief section 12: Forest/Bark/Sandstone/Clay/Limestone/Stone/
Charcoal palette, Fraunces + Inter type, 60/30/10 balance, refreshed vector
wordmark (no JPG, no header coupon), footer-only trust strip, edge-to-edge
captioned image treatment. Tokens are in `src/app/globals.css`.
