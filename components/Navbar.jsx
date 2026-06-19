"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-navy-deep/85 py-3 shadow-lg shadow-navy-deep/30 backdrop-blur-xl"
          : "bg-transparent py-5"
      }`}
    >
      <nav
        className="container-site flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo: replace /public/images/logo.svg with your real logo file */}
        <a href="#" className="group flex items-center gap-1" aria-label="MyCharters home">
          <img src="/images/logo.svg" alt="" className="h-11 w-11" />
          <span className="font-display text-2xl font-semibold tracking-wide text-white">
            My<span className="text-gold">Charters</span>
          </span>
          <span className="hidden text-[10px] uppercase tracking-widest2 text-white/50 sm:inline">
            Malta
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium tracking-wide text-white/80 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="/book"
            className="hidden rounded-full bg-gold px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-all hover:bg-gold-light hover:shadow-[0_6px_24px_rgba(244,119,92,0.4)] sm:inline-flex"
          >
            Book Now
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-white/20 text-white lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              className="block h-px w-5 bg-current"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
              className="block h-px w-5 bg-current"
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/10 bg-navy-deep/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="container-site flex flex-col gap-1 py-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-display text-2xl text-white/90 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-4">
                <a
                  href="/book"
                  className="btn-gold w-full"
                  onClick={() => setOpen(false)}
                >
                  Book Your Charter
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
