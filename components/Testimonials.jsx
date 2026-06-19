"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Icon from "./Icons";
import { testimonials } from "@/lib/site";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % testimonials.length),
    []
  );

  useEffect(() => {
    const t = setInterval(next, 7000);
    return () => clearInterval(t);
  }, [next]);

  const current = testimonials[index];

  return (
    <section id="testimonials" className="bg-sand py-24 sm:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="Guest Stories"
          title="Days our guests still talk about"
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div
            className="relative min-h-[280px] sm:min-h-[240px]"
            aria-live="polite"
          >
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="text-center"
              >
                <div className="flex justify-center gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="star" className="h-4 w-4" filled />
                  ))}
                </div>
                <p className="mt-6 font-display text-2xl font-medium italic leading-relaxed text-navy sm:text-3xl">
                  "{current.quote}"
                </p>
                <footer className="mt-7">
                  <p className="font-semibold text-navy">{current.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-navy/50">
                    {current.detail}
                  </p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex justify-center gap-2.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Show review ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-400 ${
                  i === index ? "w-8 bg-gold" : "w-2 bg-navy/20 hover:bg-navy/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
