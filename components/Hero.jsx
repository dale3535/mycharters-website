"use client";

import { motion } from "framer-motion";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=2400&auto=format&fit=crop";

export default function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[640px] items-center justify-center overflow-hidden">
      {/* Background — drop your drone footage at /public/videos/hero.mp4
          and a still frame at /public/images/hero-poster.jpg.
          The poster/image renders instantly; video fades in when ready. */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={HERO_IMAGE}
          aria-hidden="true"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      <div className="container-site relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="eyebrow"
        >
          Private Charters · Malta · Comino · Gozo
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.05, ease: [0.21, 0.6, 0.35, 1] }}
          className="mx-auto mt-6 max-w-4xl font-hero text-5xl font-normal leading-[1.06] tracking-wide text-white sm:text-7xl lg:text-8xl"
        >
          The Mediterranean,
          <br />
          <em className="font-display font-medium italic text-gold-light">on your terms.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.25 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg"
        >
          Your own boat, your own skipper, your own pace. Blue Lagoon mornings,
          hidden Comino caves and Gozo coastlines — departing Grand Harbour
          Marina, Birgu.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.45 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a href="/book" className="btn-gold w-full sm:w-auto">
            Book Your Charter
          </a>
          <a href="#experiences" className="btn-ghost w-full sm:w-auto">
            Explore Experiences
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to discover"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex h-12 w-7 items-start justify-center rounded-full border border-white/40 p-2"
        >
          <div className="h-2.5 w-1 rounded-full bg-gold" />
        </motion.div>
      </motion.a>
    </section>
  );
}
