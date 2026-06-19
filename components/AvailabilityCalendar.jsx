"use client";

import { useEffect, useState } from "react";
import { booking } from "@/lib/site";

// Availability calendar — booked dates (from lib/site.js + bookings made in
// this browser) are crossed out and unclickable; past dates are greyed out.

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const DOW = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

export const iso = (d) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

export function rememberLocalBooking(dateStr) {
  try {
    const arr = JSON.parse(localStorage.getItem("mc_booked") || "[]");
    if (!arr.includes(dateStr)) arr.push(dateStr);
    localStorage.setItem("mc_booked", JSON.stringify(arr));
  } catch (e) {}
}

export default function AvailabilityCalendar({ selected, onSelect }) {
  const [month, setMonth] = useState(() => {
    const n = new Date();
    return new Date(n.getFullYear(), n.getMonth(), 1);
  });
  const [booked, setBooked] = useState(() => new Set(booking.bookedDates));

  // Merge in bookings made in this browser (saved at submit time).
  useEffect(() => {
    try {
      const local = JSON.parse(localStorage.getItem("mc_booked") || "[]");
      setBooked(new Set([...booking.bookedDates, ...local]));
    } catch (e) {}
  }, []);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const startOffset = (month.getDay() + 6) % 7; // Monday-first grid
  const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < startOffset; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push(new Date(month.getFullYear(), month.getMonth(), d));
  }
  const canPrev = month > new Date(today.getFullYear(), today.getMonth(), 1);

  return (
    <div className="w-[290px] rounded-2xl border border-white/15 bg-navy-deep p-4 shadow-[0_24px_60px_rgba(0,0,0,0.5)]">
      <div className="mb-3 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() - 1, 1))}
          disabled={!canPrev}
          aria-label="Previous month"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-30"
        >
          ‹
        </button>
        <p className="font-display text-lg font-medium text-white">
          {MONTHS[month.getMonth()]} {month.getFullYear()}
        </p>
        <button
          type="button"
          onClick={() => setMonth(new Date(month.getFullYear(), month.getMonth() + 1, 1))}
          aria-label="Next month"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-gold hover:text-gold"
        >
          ›
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center">
        {DOW.map((d) => (
          <span key={d} className="py-1 text-[10px] uppercase tracking-widest text-white/45">
            {d}
          </span>
        ))}
        {cells.map((d, i) => {
          if (!d) return <span key={`b${i}`} />;
          const k = iso(d);
          const isPast = d < today;
          const isBooked = booked.has(k);
          const isSel = selected === k;
          let cls = "h-9 rounded-lg text-sm transition-colors ";
          if (isSel) cls += "bg-gold font-semibold text-white";
          else if (isBooked) cls += "cursor-not-allowed text-gold-light/70 line-through decoration-2";
          else if (isPast) cls += "cursor-not-allowed text-white/25";
          else cls += "text-white hover:bg-gold/30";
          return (
            <button
              key={k}
              type="button"
              disabled={isPast || isBooked}
              onClick={() => onSelect && onSelect(k)}
              aria-label={isBooked ? `${k} — already booked` : k}
              className={cls}
            >
              {d.getDate()}
            </button>
          );
        })}
      </div>

      <div className="mt-3 flex items-center gap-4 border-t border-white/10 pt-3 text-[11px] text-white/50">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/80" /> Available
        </span>
        <span className="flex items-center gap-1.5">
          <span className="text-gold-light line-through decoration-2">15</span> Booked
        </span>
      </div>
    </div>
  );
}
