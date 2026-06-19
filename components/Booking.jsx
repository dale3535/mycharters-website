import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Icon from "./Icons";
import AvailabilityChecker from "./AvailabilityChecker";
import { site, booking, waLink } from "@/lib/site";

// Homepage contact section — the booking form itself lives on /book.
export default function Booking() {
  return (
    <section id="booking" className="bg-navy py-24 text-white sm:py-32">
      <div className="container-site">
        <SectionHeading
          dark
          eyebrow="Book Your Charter"
          title="The water is waiting"
          subtitle={`Booking takes about two minutes. Your date is secured once the ${booking.deposit} deposit is received — free cancellation up to 24 hours before departure.`}
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          {/* Booking CTA panel */}
          <Reveal className="glass-dark flex flex-col items-center justify-center rounded-2xl p-10 text-center sm:p-14 lg:col-span-3">
            <h3 className="font-display text-3xl font-medium sm:text-4xl">
              Ready when you are
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
              Your details, your charter, your food package — then a{" "}
              {booking.deposit} deposit locks in the date. The rest is sea,
              sun and someone else doing the driving.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
              <a href="/book" className="btn-gold">
                Open the Booking Form
              </a>
            </div>
            <div className="mt-4">
              <AvailabilityChecker />
            </div>
            <p className="mt-5 text-xs text-white/40">
              Secure payment via Stripe · Balance settled after your charter
            </p>
          </Reveal>

          {/* Direct contact */}
          <Reveal delay={0.15} className="flex flex-col gap-4 lg:col-span-2">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-dark group flex items-center gap-5 rounded-2xl p-6 transition-all hover:border-gold/40"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]">
                <Icon name="whatsapp" className="h-6 w-6" filled />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-widest text-white/50">
                  WhatsApp / Phone
                </span>
                <span className="mt-1 block font-display text-xl text-white group-hover:text-gold-light">
                  {site.phoneDisplay}
                </span>
              </span>
            </a>

            <a
              href={`mailto:${site.email}`}
              className="glass-dark group flex items-center gap-5 rounded-2xl p-6 transition-all hover:border-gold/40"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                <Icon name="mail" className="h-6 w-6" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-widest text-white/50">
                  Email
                </span>
                <span className="mt-1 block truncate font-display text-xl text-white group-hover:text-gold-light">
                  {site.email}
                </span>
              </span>
            </a>

            <div className="glass-dark flex items-center gap-5 rounded-2xl p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ocean/30 text-ocean-mist">
                <Icon name="pin" className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-widest text-white/50">
                  Departure point
                </span>
                <span className="mt-1 block font-display text-xl text-white">
                  Grand Harbour Marina
                </span>
                <span className="text-sm text-white/50">Birgu (Vittoriosa), Malta</span>
              </span>
            </div>

            <p className="mt-2 px-2 text-sm leading-relaxed text-white/50">
              Prefer to talk it through? Call or message any day between 8am
              and 8pm — we're usually on the water, but never far from the
              phone.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
