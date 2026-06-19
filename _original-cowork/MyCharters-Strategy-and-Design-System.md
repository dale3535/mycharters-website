# MyCharters — Website Strategy & Design System

## 1. Strategy

**Positioning.** MyCharters is not a tour operator — it is a private charter service. Every line of copy reinforces exclusivity ("one group at a time", "on your terms") against the crowded-tour-boat alternative. Departing from Grand Harbour Marina, Birgu is itself a luxury signal: lead with it.

**Conversion model.** WhatsApp is the booking engine. Tourists plan on their phones, and WhatsApp removes every step between desire and enquiry. The site therefore has one job: build desire and trust quickly, then make the WhatsApp tap inevitable. CTAs appear in the hero, navbar, after the boat, after each experience card, after Why Us, in the booking section, and as a persistent floating button. The booking form itself composes a pre-filled WhatsApp message (name, date, experience, group size) — zero backend, zero friction, and every enquiry arrives structured.

**Audience handling.** One page serves all segments: couples (Sunset Cruise card, proposal mentions), families (FAQ on children, safety section), groups/corporate (Full-Day and Custom cards), luxury travellers (tone, typography, marina). "Price on request" keeps positioning premium and forces a conversation — your conversion moment.

## 2. Wireframe (single page)

Sticky nav → Full-screen hero (video, 2 CTAs) → About (image + story + stats) → Meet the Boat (dark section: showcase image, spec strip, comfort/safety glass cards, CTA) → Experiences (6 cards, light sand background) → Gallery (4-column masonry) → Why Choose Us (dark, 5 glass cards, CTA) → Testimonials (rotating quotes) → FAQ (accordion) → Booking (dark: form + direct-contact cards) → Footer. Floating WhatsApp button throughout.

The light/dark section rhythm (foam → navy → sand → foam → deep navy → sand → foam → navy) creates cinematic pacing and makes the dark "boat" and "booking" sections feel like moments.

## 3. UX recommendations

Mobile-first throughout: full-height hero uses `100svh`, tap targets ≥44px, single-column stacking, form opens native WhatsApp app. Smooth anchor scrolling with scroll-padding for the fixed nav. Scroll-triggered reveals fire once (no re-animation fatigue) and respect `prefers-reduced-motion`. The accordion opens the first FAQ by default so the pattern is self-evident. The form states explicitly that nothing sends until the user presses send in WhatsApp — a small trust line that lifts completion. Future wins: add a reviews widget (Google/TripAdvisor) once reviews accumulate, real availability calendar, and per-experience pages for SEO depth.

## 4. Design system

**Palette**

*(Updated to the baby blue & coral direction matching the logo.)*

| Token | Hex | Use |
|---|---|---|
| Deep Blue | `#0B2A47` | Dark section backgrounds, footer |
| Blue | `#0E3456` | Primary brand dark, text on light |
| Blue Soft | `#1A4A77` | Cards on dark |
| Baby Blue | `#4D9FDB` / `#6FB5E6` | Accents, links |
| Blue Mist | `#BBDDF2` | Subtle highlights on dark |
| Coral | `#F4775C` (light `#F89C86`, deep `#DE5B40`) | CTAs, dividers, eyebrows — used sparingly |
| Sky Tint | `#EAF4FB` | Alternate light background |
| Foam | `#F7FBFE` | Primary light background |

**Typography.** Display: *Cormorant Garamond* (400–700, italics for emotional emphasis) — elegant, maritime, never corporate. Body/UI: *Inter* — clean, highly legible on mobile. Signature moves: letter-spaced gold uppercase eyebrows (`0.28em`), large serif headlines with an italic gold phrase ("on your terms"), thin gold gradient dividers.

**Components.** Pill buttons (gold solid = primary, ghost = secondary on imagery), glassmorphism cards (`backdrop-blur` + low-opacity white borders) on dark sections and image overlays only, 2xl border radii, soft navy shadows that deepen on hover, 600–800ms eased reveals with stagger.

## 5. SEO strategy

**Technical (implemented):** semantic single H1, metadata API with OG/Twitter cards, canonical URL, sitemap.xml, robots.txt, and JSON-LD covering `LocalBusiness` (with geo + sameAs socials), one `TouristTrip` per experience, and `FAQPage` (eligible for rich results). `next/image` everywhere with proper `sizes`, font subsetting via `next/font`, zero layout shift.

**Keywords targeted:** "boat charter Malta", "private boat hire Malta", "Blue Lagoon boat trip", "Comino boat charter", "Gozo boat trip", "sunset cruise Malta", "luxury RIB charter Malta".

**Next steps after launch:** Google Business Profile pinned to Grand Harbour Marina (your single highest-ROI action — most charter bookings start in Maps); collect Google reviews relentlessly and add `AggregateRating` schema once you have 10+; build per-experience landing pages (`/blue-lagoon-boat-trip` etc.) for long-tail rankings; get listed on GetYourGuide/Viator/TripAdvisor for backlinks even if you prefer direct bookings; post Instagram Reels of the water — link in bio to the site.

## 6. Copy

All copy is written and in the codebase (`lib/site.js` + components): hero, about story, boat, six experience descriptions, why-us, FAQs, booking and footer. Tone: confident, warm, specific to Malta — no "unforgettable memories await" filler. Sample testimonials are placeholders to replace with real reviews.

## 7. Pre-launch checklist

Confirm boat specs against your vessel · replace Unsplash placeholders with real photography (the single biggest conversion lever — invest in one golden-hour drone shoot) · add logo files · set final domain in `lib/site.js` · add og-image.jpg · replace sample testimonials · create Google Business Profile.
