import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Booking terms and conditions for MyCharters private boat charters in Malta — deposits, cancellation policy, weather policy and guest responsibilities.",
  alternates: { canonical: "/terms" },
};

function Section({ n, title, children }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl font-semibold text-navy">
        {n}. {title}
      </h2>
      <div className="mt-3 space-y-3 leading-relaxed text-navy/75">{children}</div>
    </section>
  );
}

function List({ items }) {
  return (
    <ul className="list-disc space-y-1.5 pl-5">
      {items.map((it) => (
        <li key={it}>{it}</li>
      ))}
    </ul>
  );
}

export default function TermsPage() {
  return (
    <>
      <header className="bg-navy-deep py-5 text-white">
        <div className="container-site flex items-center justify-between">
          <a href="/" className="flex items-center gap-1" aria-label="MyCharters home">
            <img src="/images/logo.svg" alt="" className="h-10 w-10" />
            <span className="font-display text-2xl font-semibold tracking-wide">
              My<span className="text-gold">Charters</span>
            </span>
          </a>
          <a href="/" className="text-sm font-medium text-white/80 transition-colors hover:text-gold">
            ← Back to home
          </a>
        </div>
      </header>

      <main className="bg-foam py-16 sm:py-20">
        <div className="container-site max-w-3xl">
          <p className="eyebrow">MyCharters</p>
          <h1 className="mt-3 font-display text-4xl font-medium text-navy sm:text-5xl">
            Terms &amp; Conditions
          </h1>
          <div className="mt-5 h-px w-24 bg-gold-line" />

          <Section n={1} title="Booking Confirmation">
            <p>All bookings with MyCharters are considered confirmed once:</p>
            <List
              items={[
                "The required deposit has been received; and",
                "The customer receives a booking confirmation from MyCharters.",
              ]}
            />
            <p>
              MyCharters reserves the right to refuse or cancel bookings at its
              discretion where necessary for operational, safety, or legal
              reasons.
            </p>
          </Section>

          <Section n={2} title="Payment Terms">
            <List
              items={[
                "A deposit is required to secure the booking.",
                "The remaining balance is to be paid after the charter has been completed unless otherwise agreed in writing.",
                "Prices quoted include only the services specifically listed in the booking confirmation.",
                "Additional services, fuel surcharges, damages, or overtime may incur extra charges.",
              ]}
            />
          </Section>

          <Section n={3} title="24-Hour Cancellation Policy">
            <p>
              Customers may cancel their booking free of charge up to 24 hours
              before the scheduled charter departure time. Cancellations made:
            </p>
            <List
              items={[
                "More than 24 hours before departure: eligible for a full refund of any deposit paid.",
                "Less than 24 hours before departure: the deposit paid will be non-refundable and retained by MyCharters.",
                "No-shows or late arrivals: treated as a cancellation within 24 hours and the deposit will be non-refundable.",
              ]}
            />
            <p>
              Refunds, where applicable, will be processed using the original
              payment method within a reasonable timeframe.
            </p>
          </Section>

          <Section n={4} title="Food & Beverages">
            <List
              items={[
                "Food and beverages may be served onboard as part of the charter experience.",
                "Guests are responsible for informing MyCharters in advance of any allergies, dietary requirements, or food intolerances.",
                "MyCharters shall not be held liable for allergic reactions or medical issues arising from undisclosed dietary conditions.",
                "Outside food and beverages may only be brought onboard with prior approval from MyCharters.",
              ]}
            />
          </Section>

          <Section n={5} title="Weather & Force Majeure">
            <p>MyCharters reserves the right to cancel, delay, or reschedule charters due to:</p>
            <List
              items={[
                "Unsafe weather conditions;",
                "Mechanical issues;",
                "Government restrictions;",
                "Safety concerns; or",
                "Events beyond reasonable control.",
              ]}
            />
            <p>In such cases, customers will be offered either:</p>
            <List items={["A rescheduled booking; or", "A full refund of any deposit paid."]} />
            <p>No additional compensation shall be payable.</p>
          </Section>

          <Section n={6} title="Customer Responsibilities">
            <p>All guests must:</p>
            <List
              items={[
                "Follow safety instructions provided by the captain or crew;",
                "Behave responsibly and respectfully onboard;",
                "Comply with all local maritime laws and regulations.",
              ]}
            />
            <p>
              MyCharters reserves the right to terminate a charter without
              refund if any guest behaves dangerously, illegally, or abusively.
            </p>
          </Section>

          <Section n={7} title="Alcohol & Illegal Substances">
            <List
              items={[
                "Alcohol consumption is permitted only where legally allowed and responsibly consumed.",
                "Illegal drugs and prohibited substances are strictly forbidden onboard.",
              ]}
            />
            <p>
              MyCharters may immediately terminate the charter without refund
              if these terms are breached.
            </p>
          </Section>

          <Section n={8} title="Damage & Liability">
            <p>
              Customers are responsible for any damage caused by themselves or
              their guests during the charter. MyCharters shall not be held
              liable for:
            </p>
            <List
              items={[
                "Loss or damage of personal belongings;",
                "Injuries resulting from failure to follow safety instructions;",
                "Delays caused by weather, port authorities, or unforeseen circumstances.",
              ]}
            />
            <p>Participation in charter activities is at the customer's own risk.</p>
          </Section>

          <Section n={9} title="Arrival Time">
            <p>
              Customers are requested to arrive at least 15–30 minutes before
              departure. Late arrival may reduce charter time and may not
              qualify for refunds or extensions.
            </p>
          </Section>

          <Section n={10} title="Changes to Bookings">
            <p>
              Requests to amend booking dates or times are subject to
              availability and approval by MyCharters.
            </p>
          </Section>

          <Section n={11} title="Privacy">
            <p>
              Customer information collected during bookings will be used
              solely for reservation management, communication, and legal
              compliance purposes.
            </p>
          </Section>

          <Section n={12} title="Acceptance of Terms">
            <p>
              By confirming a booking with MyCharters, the customer
              acknowledges and agrees to these Terms &amp; Conditions.
            </p>
          </Section>

          <p className="mt-12 border-t border-navy/10 pt-6 text-sm text-navy/50">
            Questions about these terms? Contact us at{" "}
            <a href={`mailto:${site.email}`} className="underline hover:text-gold-deep">
              {site.email}
            </a>{" "}
            or on WhatsApp at {site.phoneDisplay}.
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
}
