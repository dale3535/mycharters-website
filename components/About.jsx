import Image from "next/image";
import Reveal from "./Reveal";

const stats = [
  { value: "100%", label: "Private charters" },
  { value: "3", label: "Islands explored" },
  { value: "5★", label: "Guest experience" },
];

export default function About() {
  return (
    <section id="about" className="overflow-hidden bg-foam py-24 sm:py-32">
      <div className="container-site grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop"
              alt="Crystal-clear Mediterranean waters off the Maltese coast"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          {/* Floating glass card */}
          <div className="glass absolute -bottom-6 left-6 right-6 rounded-xl p-5 sm:left-auto sm:right-[-24px] sm:w-72">
            <p className="font-display text-xl italic text-navy">
              "The sea doesn't do schedules. Neither do we."
            </p>
            <p className="mt-2 text-xs uppercase tracking-widest2 text-navy/60">
              — The MyCharters crew
            </p>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">About MyCharters</p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-navy sm:text-5xl">
              Born in Birgu.
              <br />
              At home on the water.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 leading-relaxed text-navy/75">
              MyCharters began with a simple frustration: watching visitors
              experience Malta's most beautiful waters shoulder-to-shoulder on
              crowded tour boats, racing a timetable. We knew there was a
              better way — because it's how we've always done it ourselves.
            </p>
            <p className="mt-4 leading-relaxed text-navy/75">
              From our berth at Grand Harbour Marina in Birgu, we run truly
              private charters aboard our Capelli Tempest 900 — a fast,
              elegant Italian RIB built for exactly these waters. One group at
              a time. No fixed routes. No rushing back for the next sailing.
            </p>
            <p className="mt-4 leading-relaxed text-navy/75">
              Whether it's a quiet morning at the Blue Lagoon before the world
              arrives, an afternoon weaving through Comino's caves, or prosecco
              as the sun drops behind Valletta's bastions — your day on the
              water should feel like yours. That's the entire idea.
            </p>
          </Reveal>

          <Reveal delay={0.2} className="mt-10 grid grid-cols-3 gap-6 border-t border-navy/10 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-semibold text-gold-deep sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-navy/60">
                  {s.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
