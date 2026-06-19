"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Icon from "./Icons";
import { faqs } from "@/lib/site";

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-navy/10">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
      >
        <span className="font-display text-xl font-medium text-navy sm:text-2xl">
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${
            isOpen ? "border-gold bg-gold text-navy-deep" : "border-navy/20 text-navy/60"
          }`}
        >
          <Icon name="chevron" className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-12 leading-relaxed text-navy/70">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-foam py-24 sm:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="FAQ"
          title="Good questions, honest answers"
          subtitle="Everything most guests ask before booking. Anything else — just message us."
        />
        <div className="mx-auto mt-14 max-w-3xl">
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.q}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
