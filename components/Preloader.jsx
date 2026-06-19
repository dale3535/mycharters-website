"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-deep"
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center"
          >
            <img src="/images/logo.svg" alt="" className="h-24 w-24" />
            <span className="mt-4 font-display text-4xl font-semibold tracking-wide text-white">
              My<span className="text-gold">Charters</span>
            </span>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, delay: 0.3, ease: "easeInOut" }}
            className="mt-5 h-px w-40 origin-left bg-gold-line"
          />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-4 text-[10px] uppercase tracking-widest2 text-white/50"
          >
            Private Boat Charters · Malta
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
