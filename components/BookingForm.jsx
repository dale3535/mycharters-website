"use client";

import { useEffect, useState } from "react";
import Icon from "./Icons";
import AvailabilityCalendar, { rememberLocalBooking } from "./AvailabilityCalendar";
import { site, experiences, booking, waLink } from "@/lib/site";

const fmtDate = (d) =>
  new Date(`${d}T00:00:00`).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

const inputCls =
  "w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-white/40 transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";
const labelCls =
  "mb-2 block text-xs font-semibold uppercase tracking-widest text-white/60";

const EMPTY = {
  firstName: "",
  surname: "",
  phone: "",
  address: "",
  date: "",
  charter: "",
  guests: "",
  food: "",
  allergies: "",
  terms: false,
};

export default function BookingForm() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | done
  const [calOpen, setCalOpen] = useState(false);
  const [dateError, setDateError] = useState(false);

  // CTAs can pre-fill via /book?charter=Sunset%20Cruise&date=2026-07-12
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const c = params.get("charter");
    const d = params.get("date");
    if (c || d) setForm((f) => ({ ...f, ...(c && { charter: c }), ...(d && { date: d }) }));
  }, []);

  const update = (field) => (e) =>
    setForm((f) => ({
      ...f,
      [field]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));

  const summary = () =>
    [
      "New booking request — MyCharters",
      `Name: ${form.firstName} ${form.surname}`,
      `Phone: ${form.phone}`,
      `Address: ${form.address}`,
      `Preferred date: ${form.date}`,
      `Charter: ${form.charter}`,
      `Guests: ${form.guests}`,
      `Food: ${form.food}`,
      `Allergies / dietary: ${form.allergies || "None declared"}`,
      `Deposit: ${booking.deposit} via Stripe`,
      "Terms & Conditions: accepted",
    ].join("\n");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.date) {
      setDateError(true);
      setCalOpen(true);
      return;
    }
    setStatus("sending");
    const text = summary();

    if (booking.web3formsKey !== "YOUR_WEB3FORMS_ACCESS_KEY") {
      try {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: booking.web3formsKey,
            subject: `Booking request — ${form.firstName} ${form.surname} (${form.date})`,
            from_name: "MyCharters Website",
            message: text,
            ...form,
          }),
        });
      } catch (err) {
        // Email service unreachable — customer still confirms via WhatsApp below.
      }
    } else {
      // No email key configured yet: open a pre-filled draft in their mail app.
      window.open(
        `mailto:${site.email}?subject=${encodeURIComponent(
          `Booking request — ${form.firstName} ${form.surname}`
        )}&body=${encodeURIComponent(text)}`,
        "_self"
      );
    }
    // Cross this date out in the availability calendars on this device.
    rememberLocalBooking(form.date);
    setStatus("done");
  };

  if (status === "done") {
    return (
      <div className="glass-dark flex flex-col items-center rounded-2xl p-8 text-center sm:p-12">
        <h3 className="font-display text-3xl font-medium text-white">
          Grazzi, {form.firstName}! One last step.
        </h3>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
          Your booking details are on their way to our crew. Secure your date
          now with the {booking.deposit} deposit — then tap the WhatsApp button
          so we have you in our chat.
        </p>
        <div className="mt-8 flex w-full max-w-sm flex-col gap-3">
          <a
            href={booking.stripeDepositLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold w-full"
          >
            Pay {booking.deposit} Deposit — Stripe
          </a>
          <a
            href={waLink(summary())}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost w-full"
          >
            <Icon name="whatsapp" className="h-5 w-5" filled />
            Confirm on WhatsApp
          </a>
        </div>
        <p className="mt-5 text-xs text-white/40">
          Per our Terms, your booking is confirmed once the deposit is
          received. Free cancellation up to 24h before departure.
        </p>
        <button
          onClick={() => {
            setForm(EMPTY);
            setStatus("idle");
          }}
          className="mt-4 text-xs text-white/40 underline hover:text-gold"
        >
          Make another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-dark grid gap-5 rounded-2xl p-8 sm:grid-cols-2 sm:p-10"
    >
      <div>
        <label htmlFor="bk-first" className={labelCls}>Name</label>
        <input id="bk-first" type="text" required placeholder="Jane"
          value={form.firstName} onChange={update("firstName")} className={inputCls} />
      </div>
      <div>
        <label htmlFor="bk-sur" className={labelCls}>Surname</label>
        <input id="bk-sur" type="text" required placeholder="Smith"
          value={form.surname} onChange={update("surname")} className={inputCls} />
      </div>
      <div>
        <label htmlFor="bk-phone" className={labelCls}>Phone number</label>
        <input id="bk-phone" type="tel" required placeholder="+356 9912 3456"
          value={form.phone} onChange={update("phone")} className={inputCls} />
      </div>
      <div>
        <label htmlFor="bk-addr" className={labelCls}>Address</label>
        <input id="bk-addr" type="text" required placeholder="Street, town, country"
          value={form.address} onChange={update("address")} className={inputCls} />
      </div>
      <div className="relative">
        <label htmlFor="bk-date" className={labelCls}>Preferred date</label>
        <button
          id="bk-date"
          type="button"
          onClick={() => { setCalOpen(!calOpen); setDateError(false); }}
          aria-expanded={calOpen}
          className={`${inputCls} flex items-center justify-between text-left ${dateError ? "border-gold ring-1 ring-gold" : ""}`}
        >
          {form.date ? (
            <span>{fmtDate(form.date)}</span>
          ) : (
            <span className="text-white/40">Select a date</span>
          )}
          <span className={`text-white/50 transition-transform ${calOpen ? "rotate-180" : ""}`}>▾</span>
        </button>
        {dateError && (
          <p className="mt-1.5 text-xs text-gold-light">Please choose an available date.</p>
        )}
        {calOpen && (
          <div className="absolute left-0 top-full z-30 mt-2">
            <AvailabilityCalendar
              selected={form.date}
              onSelect={(d) => {
                setForm((f) => ({ ...f, date: d }));
                setDateError(false);
                setCalOpen(false);
              }}
            />
          </div>
        )}
      </div>
      <div>
        <label htmlFor="bk-charter" className={labelCls}>Charter type</label>
        <select id="bk-charter" required value={form.charter}
          onChange={update("charter")} className={`${inputCls} appearance-none [color-scheme:dark]`}>
          <option value="" disabled>Select a charter</option>
          {experiences.map((exp) => (
            <option key={exp.id} value={exp.title} className="text-navy">{exp.title}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="bk-guests" className={labelCls}>Number of people boarding</label>
        <input id="bk-guests" type="number" min="1" max="8" required placeholder="e.g. 4"
          value={form.guests} onChange={update("guests")} className={inputCls} />
      </div>
      <div>
        <label htmlFor="bk-food" className={labelCls}>
          Food choice <span className="normal-case text-white/40">(platter included)</span>
        </label>
        <select id="bk-food" required value={form.food}
          onChange={update("food")} className={`${inputCls} appearance-none [color-scheme:dark]`}>
          <option value="" disabled>Select a package</option>
          {booking.foodOptions.map((f) => (
            <option key={f} value={f} className="text-navy">{f}</option>
          ))}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="bk-allergy" className={labelCls}>
          Any allergies or dietary requirements? <span className="normal-case text-white/40">(optional)</span>
        </label>
        <textarea id="bk-allergy" rows="3" placeholder="e.g. nut allergy, vegetarian, gluten-free…"
          value={form.allergies} onChange={update("allergies")} className={inputCls} />
      </div>
      <div className="flex items-start gap-3 text-sm text-white/70 sm:col-span-2">
        <input id="bk-terms" type="checkbox" required checked={form.terms}
          onChange={update("terms")} className="mt-0.5 shrink-0 accent-gold"
          style={{ height: 18, width: 18 }} />
        <label htmlFor="bk-terms">
          I have read and accept the{" "}
          <a href="/terms" target="_blank" className="underline hover:text-gold">
            Terms &amp; Conditions
          </a>
          , including the 24-hour cancellation policy.
        </label>
      </div>
      <div className="sm:col-span-2">
        <button type="submit" disabled={status === "sending"} className="btn-gold w-full disabled:opacity-60">
          {status === "sending" ? "Sending…" : `Request Booking · ${booking.deposit} deposit`}
        </button>
        <p className="mt-3 text-center text-xs text-white/40">
          Next step: pay the {booking.deposit} deposit securely via Stripe.
          Balance settled after your charter.
        </p>
      </div>
    </form>
  );
}
