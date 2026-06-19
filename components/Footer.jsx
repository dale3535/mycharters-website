import { site, navLinks, waLink } from "@/lib/site";
import Icon from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy-deep py-16 text-white">
      <div className="container-site">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="flex items-center gap-1 font-display text-3xl font-semibold">
              <img src="/images/logo.svg" alt="" className="h-12 w-12" />
              My<span className="text-gold">Charters</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
              Private boat charters from Grand Harbour Marina, Birgu. The Blue
              Lagoon, Comino, Gozo and the open Mediterranean — one group at a
              time, always on your terms.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MyCharters on Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all hover:border-gold hover:text-gold"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MyCharters on Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all hover:border-gold hover:text-gold"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                </svg>
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all hover:border-gold hover:text-gold"
              >
                <Icon name="whatsapp" className="h-5 w-5" filled />
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest2 text-gold">
              Explore
            </p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={`/${link.href}`}
                    className="text-sm text-white/60 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/terms"
                  className="text-sm text-white/60 transition-colors hover:text-gold"
                >
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest2 text-gold">
              Contact
            </p>
            <ul className="mt-5 space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" />
                <a href={`tel:+${site.phoneRaw}`} className="hover:text-gold">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" />
                <a href={`mailto:${site.email}`} className="break-all hover:text-gold">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" />
                <span>{site.marina}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>
            © {year} {site.name}. All rights reserved. ·{" "}
            <a href="/terms" className="underline transition-colors hover:text-gold">
              Terms &amp; Conditions
            </a>
          </p>
          <p className="font-display italic text-white/50">
            Sajda tajba — fair winds and calm seas.
          </p>
        </div>
      </div>
    </footer>
  );
}
