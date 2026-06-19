"use client";

import { useState } from "react";
import AvailabilityCalendar from "./AvailabilityCalendar";

// Homepage availability dropdown — tap a free date to open the booking
// form with that date pre-filled.
export default function AvailabilityChecker() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="btn-ghost"
        aria-expanded={open}
      >
        {open ? "Hide Availability" : "Check Availability"}
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>▾</span>
      </button>
      {open && (
        <div className="mt-4 flex flex-col items-center">
          <AvailabilityCalendar
            selected={null}
            onSelect={(d) => {
              window.location.href = `/book?date=${d}`;
            }}
          />
          <p className="mt-3 max-w-[290px] text-center text-xs text-white/40">
            Crossed-out dates are already booked. Tap a free date to book it.
          </p>
        </div>
      )}
    </div>
  );
}
