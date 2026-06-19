import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Icon from "./Icons";
import { boatSpecs, boatAmenities, boatSafety } from "@/lib/site";

export default function Boat() {
  return (
    <section id="boat" className="bg-navy py-24 text-white sm:py-32">
      <div className="container-site">
        <SectionHeading
          dark
          eyebrow="Meet the Boat"
          title="The Capelli Tempest 900"
          subtitle="Italian-built, Mediterranean-proven. A luxury RIB with the speed to reach Gozo while others are still queuing, and the comfort to make the journey part of the pleasure."
        />

        <Reveal className="mt-14">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl sm:aspect-[21/9]">
            {/* Replace with real photography of your Tempest 900 */}
            <Image
              src="https://images.unsplash.com/photo-1468413253725-0d5181091126?q=80&w=2000&auto=format&fit=crop"
              alt="Capelli Tempest 900 luxury RIB on the Mediterranean"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8">
              <p className="font-display text-2xl italic text-white sm:text-3xl">
                Fast. Stable. Beautiful.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Specs */}
        <Reveal className="mt-12">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-3 lg:grid-cols-6">
            {boatSpecs.map((spec) => (
              <div key={spec.label} className="bg-navy-soft/80 p-6 text-center">
                <p className="text-[10px] uppercase tracking-widest2 text-gold">
                  {spec.label}
                </p>
                <p className="mt-2 font-display text-lg font-medium text-white">
                  {spec.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal delay={0.1} className="glass-dark rounded-2xl p-8">
            <div className="flex items-center gap-3">
              <Icon name="star" className="h-6 w-6 text-gold" />
              <h3 className="font-display text-2xl font-medium">On-Board Comfort</h3>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {boatAmenities.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/75">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2} className="glass-dark rounded-2xl p-8">
            <div className="flex items-center gap-3">
              <Icon name="shield" className="h-6 w-6 text-gold" />
              <h3 className="font-display text-2xl font-medium">Safety, Standard</h3>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {boatSafety.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/75">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-12 text-center">
          <a href="/book" className="btn-gold">
            Check Availability
          </a>
        </Reveal>
      </div>
    </section>
  );
}
