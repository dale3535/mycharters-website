import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Icon from "./Icons";
import { whyUs } from "@/lib/site";

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-navy-deep py-24 text-white sm:py-32"
    >
      {/* Subtle decorative wave */}
      <div className="pointer-events-none absolute -right-24 -top-24 opacity-[0.04]">
        <Icon name="anchor" className="h-[480px] w-[480px]" />
      </div>

      <div className="container-site relative">
        <SectionHeading
          dark
          eyebrow="Why Choose Us"
          title="The difference is in the details"
          subtitle="Plenty of boats will take you to the Blue Lagoon. Very few will give you the day you actually imagined."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 0.08}
              className={`glass-dark group rounded-2xl p-8 transition-all duration-500 hover:border-gold/40 hover:bg-navy-soft/60 ${
                i === whyUs.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-navy-deep">
                <Icon name={item.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-medium">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {item.text}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-14 text-center">
          <a href="/book" className="btn-gold">
            Plan Your Day With Us
          </a>
        </Reveal>
      </div>
    </section>
  );
}
