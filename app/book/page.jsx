import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import { booking } from "@/lib/site";

export const metadata = {
  title: "Book Your Charter",
  description:
    "Book your private boat charter in Malta — Blue Lagoon, Comino, Gozo and sunset cruises. Secure your date with a €100 deposit.",
  alternates: { canonical: "/book" },
};

export default function BookPage() {
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

      <main className="bg-navy py-16 text-white sm:py-20">
        <div className="container-site max-w-3xl">
          <div className="text-center">
            <p className="eyebrow">Book Your Charter</p>
            <h1 className="mt-4 font-display text-4xl font-medium leading-tight sm:text-5xl">
              Two minutes to the
              <br />
              <em className="text-gold-light">best day of your trip.</em>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-white/70">
              Tell us who's coming and when. Your date is secured once the{" "}
              {booking.deposit} deposit is received — free cancellation up to
              24 hours before departure.
            </p>
            <div className="gold-divider" />
          </div>

          <div className="mt-12">
            <BookingForm />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
