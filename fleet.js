// =====================================================================
//  MYCHARTERS FLEET — every boat on the site lives in this one file.
// =====================================================================
//
//  ADD A PARTNER BOAT: copy one whole { ... } block below, paste it into
//  the BOATS list, and change the details. Give it a unique `id` (lowercase,
//  hyphens, no spaces): it becomes the boat's web address, e.g.
//  /boat?boat=azure-sunseeker.
//
//  FIELDS
//    published   true = shown on the site. false = hidden (draft).
//    sample      true = demo listing. Only shows on preview links and when
//                the page address ends with ?samples=1, never on the live
//                site. Delete the sample boats once real ones are added.
//    charters    the trips this boat offers, with the starting price in EUR.
//    extras      optional add-ons the customer picks when booking (leave [] for none).
//    deposit     deposit in EUR taken through Stripe to secure the booking.
//    depositLink a Stripe Payment Link for exactly that deposit amount.
//    bookedDates dates already taken, one "YYYY-MM-DD" per line. They show
//                crossed out and can't be picked.
//    skipper     optional { name, photo, bio } shown on the boat's page.
// =====================================================================

const DEFAULT_DEPOSIT_LINK = "https://buy.stripe.com/14A28saRS8B08MjfooaEE00"; // €100 deposit

const BOATS = [
  {
    id: "capelli-tempest-900",
    published: true,
    sample: false,
    name: "Capelli Tempest 900",
    type: "RIB",
    operator: "MyCharters",
    marina: "Grand Harbour Marina, Birgu",
    length: "9 m",
    guests: 10,
    summary: "A fast, elegant Italian luxury RIB with a cabin, toilet and freshwater shower. Quick enough to reach Gozo while others are still queuing.",
    // Stock placeholders: replace with real photos of the boat (put them in the
    // site folder and use e.g. "tempest-1.jpg").
    photos: [
      "https://images.unsplash.com/photo-1556094837-d13d5dc561d6?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613993854053-151c103d3fb6?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=1800&auto=format&fit=crop",
    ],
    charters: [
      { name: "Harbour Cruise", duration: "2 hours", price: 400 },
      { name: "Half Day", duration: "4 hours", price: 450 },
      { name: "Day Charter", duration: "8 hours", price: 850 },
      { name: "Comino Day", duration: "Full day", price: 850 },
      { name: "Sunset Cruise", duration: "Evening", price: 400 },
      { name: "Gift Card", duration: "Any charter", price: null },
    ],
    extras: [
      { name: "Basic food package (platter included)", price: 0 },
      { name: "High-end food package (platter included)", price: 50 },
    ],
    includes: ["Licensed skipper", "Fuel", "Snorkelling gear", "Soft drinks & ice", "Bluetooth sound system", "Cabin, toilet & freshwater shower", "Life jackets incl. children's sizes"],
    deposit: 100,
    depositLink: DEFAULT_DEPOSIT_LINK,
    bookedDates: [
      "2026-06-27",
      "2026-07-04",
      // "2026-08-15",   ← example: copy this line, change the date, remove the //
    ],
    skipper: {
      name: "Lyon Axiaq",
      photo: "captain.jpg",
      bio: "With extensive experience on the water and a calm, professional approach, Lyon knows these coasts intimately, making sure every charter runs safely, smoothly and exactly the way you imagined.",
    },
  },

  // ---------------- SAMPLE LISTINGS (preview only) ----------------
  {
    id: "sample-motor-yacht",
    published: true,
    sample: true,
    name: "12 m Motor Yacht",
    type: "Motor yacht",
    operator: "Partner operator",
    marina: "Msida Yacht Marina",
    length: "12 m",
    guests: 12,
    summary: "Sample listing. A flybridge motor yacht with a shaded cockpit, saloon and two cabins, for groups who want space and comfort.",
    photos: [
      "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1800&auto=format&fit=crop",
    ],
    charters: [
      { name: "Half Day", duration: "4 hours", price: 750 },
      { name: "Day Charter", duration: "8 hours", price: 1350 },
      { name: "Sunset Cruise", duration: "Evening", price: 650 },
    ],
    extras: [],
    includes: ["Licensed skipper", "Snorkelling gear", "Soft drinks & ice", "Two cabins & saloon"],
    deposit: 100,
    depositLink: DEFAULT_DEPOSIT_LINK,
    bookedDates: [],
  },
  {
    id: "sample-catamaran",
    published: true,
    sample: true,
    name: "Sailing Catamaran",
    type: "Catamaran",
    operator: "Partner operator",
    marina: "Mġarr Harbour, Gozo",
    length: "13 m",
    guests: 16,
    summary: "Sample listing. A stable sailing catamaran with trampoline nets and a big sun deck, ideal for families and celebrations.",
    photos: [
      "https://images.unsplash.com/photo-1540946485063-a40da27545f8?q=80&w=1800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1800&auto=format&fit=crop",
    ],
    charters: [
      { name: "Half Day", duration: "4 hours", price: 900 },
      { name: "Comino Day", duration: "Full day", price: 1500 },
    ],
    extras: [],
    includes: ["Licensed skipper", "Snorkelling gear", "Paddleboard", "Water & soft drinks"],
    deposit: 100,
    depositLink: DEFAULT_DEPOSIT_LINK,
    bookedDates: [],
  },
  {
    id: "sample-day-boat",
    published: true,
    sample: true,
    name: "7 m Day Boat",
    type: "Speedboat",
    operator: "Partner operator",
    marina: "Ċirkewwa",
    length: "7 m",
    guests: 6,
    summary: "Sample listing. A nimble open day boat for small groups, short hops to the Blue Lagoon and quick swim stops.",
    photos: [
      "https://images.unsplash.com/photo-1635776033909-ffa6a9b19ab6?q=80&w=1800&auto=format&fit=crop",
    ],
    charters: [
      { name: "Harbour Cruise", duration: "2 hours", price: 250 },
      { name: "Half Day", duration: "4 hours", price: 320 },
    ],
    extras: [],
    includes: ["Licensed skipper", "Fuel", "Snorkelling gear"],
    deposit: 100,
    depositLink: DEFAULT_DEPOSIT_LINK,
    bookedDates: [],
  },
];

// ---------------------------------------------------------------------
//  Helpers used by the pages. No need to edit below this line.
// ---------------------------------------------------------------------
(function () {
  const LIVE_HOSTS = ["mycharters-website.vercel.app", "dale3535.github.io"];
  const qs = new URLSearchParams(location.search);
  const showSamples = qs.get("samples") === "1" || !LIVE_HOSTS.includes(location.hostname);

  const visible = BOATS.filter((b) => b.published && (!b.sample || showSamples));

  function fromPrice(boat) {
    const prices = boat.charters.map((c) => c.price).filter((p) => typeof p === "number");
    return prices.length ? Math.min(...prices) : null;
  }

  function localKey(id) { return "mc_booked_" + id; }

  function bookedSet(boat) {
    let local = [];
    try { local = JSON.parse(localStorage.getItem(localKey(boat.id)) || "[]"); } catch (e) {}
    return new Set([...(boat.bookedDates || []), ...local]);
  }

  function rememberBooked(id, date) {
    try {
      const a = JSON.parse(localStorage.getItem(localKey(id)) || "[]");
      if (!a.includes(date)) { a.push(date); localStorage.setItem(localKey(id), JSON.stringify(a)); }
    } catch (e) {}
  }

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  window.MC = {
    boats: visible,
    showSamples,
    get: (id) => visible.find((b) => b.id === id) || null,
    types: [...new Set(visible.map((b) => b.type))],
    fromPrice,
    bookedSet,
    rememberBooked,
    esc,
    euro: (n) => (typeof n === "number" ? "€" + n.toLocaleString("en-GB") : "On request"),
  };
})();
