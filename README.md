# MyCharters — Website

Premium single-page site for MyCharters, private boat charters in Malta.
Built with Next.js 14 (App Router), Tailwind CSS and Framer Motion.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

Deploy free on [Vercel](https://vercel.com): import the repo, press Deploy. Then point your domain at it and update `site.url` in `lib/site.js`.

## Edit your content — one file

Almost everything lives in **`lib/site.js`**: contact details, experiences, boat specs, amenities, FAQs, testimonials, gallery items. Edit text there; no component changes needed.

## Replace placeholder images

The site ships with Unsplash placeholders so it looks finished immediately. To use your own photos:

1. Drop photos into `public/images/` (e.g. `blue-lagoon.jpg`)
2. In `lib/site.js` (and `components/Hero.jsx`, `components/About.jsx`, `components/Boat.jsx`), change the URL to `/images/blue-lagoon.jpg`

Recommended: hero 2400px wide, cards 1600px, gallery 1200px. Use JPG ~80% quality.

## Add your logo

In `components/Navbar.jsx` (and `Footer.jsx`), replace the text wordmark with your logo file — a comment marks the spot. Put the file at `public/images/logo.svg` (or .png).

## Hero video

Drop drone/boat footage at `public/videos/hero.mp4` (keep under ~8 MB, 10–20 s loop, no audio) and a still frame at `public/images/hero-poster.jpg`. Without a video, the poster image shows — the site works either way.

## Things to verify before launch

- **Boat specs** in `lib/site.js` (length, engines, guest capacity) — set to typical Tempest 900 values; confirm against your vessel and licence.
- **Testimonials** are sample copy — replace with real guest reviews.
- **`site.url`** — set to your real domain for correct SEO/sitemap/schema.
- Add a real `public/images/og-image.jpg` (1200×630) for social link previews.

## Availability calendar

Booked dates appear **crossed out** in the calendars (homepage "Check Availability" dropdown + the booking form's date picker) and can't be selected. To mark a date as booked, add it to the `bookedDates` list in `lib/site.js` — one line per confirmed deposit, format `"2026-07-12"`. When a customer submits a booking, their chosen date is also crossed out instantly on their own device. For fully automatic cross-device syncing you'd need a small booking backend (e.g. a database or Google Calendar integration) — ask a developer or Claude when you're ready.

## How bookings work

The booking form lives on its own page at **/book** — every "Book Now" / "Book Your Charter" / "Plan Your Day With Us" CTA leads there, and experience-card "Enquire" links pre-select that charter (`/book?charter=...`). The form collects name, surname, phone, address, charter type, food package, guest count, allergies and Terms acceptance. On submit it (1) emails the details to you, then (2) shows the customer two buttons: pay the €100 deposit via Stripe, and send the summary on WhatsApp with one tap.

Two free setup steps (paste both values into `lib/site.js` under `booking`):

1. **Email delivery** — go to [web3forms.com](https://web3forms.com), enter mychartersinfo@gmail.com, copy the access key into `web3formsKey`. Until then, submissions open the customer's email app with a pre-filled draft instead.
2. **Stripe deposit** — in your [Stripe dashboard](https://dashboard.stripe.com) create a Payment Link (Payments → Payment Links → New) for a €100 product named "Charter deposit", and paste the `https://buy.stripe.com/...` URL into `stripeDepositLink`.

Note: WhatsApp does not allow websites to auto-send messages (that requires the paid WhatsApp Business API). The "Confirm on WhatsApp" button opens the customer's WhatsApp with the full booking summary pre-filled — they just press send.
