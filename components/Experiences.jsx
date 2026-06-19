"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Icon from "./Icons";
import { experiences } from "@/lib/site";

function ExperienceCard({ exp, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.12, ease: [0.21, 0.6, 0.35, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_rgba(10,27,46,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_48px_rgba(10,27,46,0.18)]"
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={exp.image}
          alt={exp.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
        <span className="glass absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-medium text-white">
          <Icon name="clock" className="h-3.5 w-3.5" />
          {exp.duration}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-display text-2xl font-semibold text-navy">
          {exp.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/70">
          {exp.description}
        </p>
        <ul className="mt-5 space-y-2">
          {exp.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-xs font-medium text-navy/60">
              <Icon name="check" className="mt-px h-3.5 w-3.5 shrink-0 text-gold-deep" />
              {h}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-center justify-between border-t border-navy/10 pt-5">
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-deep">
            Price on request
          </span>
          <a
            href={`/book?charter=${encodeURIComponent(exp.title)}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors hover:text-gold-deep"
          >
            Enquire
            <Icon name="arrowRight" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Experiences() {
  return (
    <section id="experiences" className="bg-sand py-24 sm:py-32">
      <div className="container-site">
        <SectionHeading
          eyebrow="Experiences"
          title="Choose your day on the water"
          subtitle="Six signature charters — every one private, every one flexible. Or tell us what you're dreaming of and we'll build it."
        />
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
