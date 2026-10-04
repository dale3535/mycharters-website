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
//                All prices are currently null = "Price on request".
//                Put a number (e.g. price: 450) to show "from €450" instead.
//    extras      optional add-ons the customer picks when booking (leave [] for none).
//    deposit     deposit in EUR taken through Stripe to secure the booking.
//    depositLink a Stripe Payment Link for exactly that deposit amount.
//    bookedDates dates already taken, one "YYYY-MM-DD" per line. They show
//                crossed out and can't be picked.
//    skipper     optional { name, photo, bio } shown on the boat's page.
//    photos      list of image paths. Leave [] for a 'Photos coming soon' tile.
//    specs       optional list of ["Label", "Value"] pairs shown as a spec table.
// =====================================================================

const DEFAULT_DEPOSIT_LINK = "https://buy.stripe.com/14A28saRS8B08MjfooaEE00"; // €100 deposit

const BOATS = [
  {
    id: "saver-750-wa",
    published: true,
    sample: false,
    name: "Saver 750 WA",
    type: "Walkaround",
    operator: "Captain Nev's Charters",
    marina: "Ta' Xbiex Marina",
    length: "7.5 m",
    guests: 8,
    summary: "A stylish 2021 walkaround for up to 8 guests, with sunbathing areas at the bow and stern, a cosy cabin and a deck shower. Perfect for couples, friends, birthdays, anniversaries and unforgettable day trips.",
    photos: [
      "images/boats/saver-750-wa/marina.jpg",
      "images/boats/saver-750-wa/blue-lagoon.jpg",
      "images/boats/saver-750-wa/cabin.jpg",
      "images/boats/saver-750-wa/night-berth.jpg",
    ],
    specs: [
      ["Model", "Saver 750 WA"],
      ["Year", "2021"],
      ["Length", "7.5 m"],
      ["Guests", "Up to 8"],
      ["Crew", "1 skipper"],
      ["Engines", "Twin Yamaha 150 hp outboards"],
      ["Design", "Walkaround"],
    ],
    charters: [
      { name: "Half Day", duration: "4 hours · 8:30am or 1:30pm", price: null },
      { name: "Day Charter", duration: "Full day · 9am to 5pm", price: null },
      { name: "Sunset Cruise", duration: "Evening", price: null },
    ],
    extras: [],
    includes: ["Licensed skipper", "Comfortable seating", "Sunbathing areas at bow & stern", "Cosy cabin", "Deck shower", "Onboard fridge", "Bluetooth sound system", "Swim platform", "Storage for your belongings"],
    deposit: 100,
    depositLink: DEFAULT_DEPOSIT_LINK,
    bookedDates: [
      // "2026-08-15",   ← example: copy this line, change the date, remove the //
    ],
  },

  {
    id: "eolo-650-wa",
    published: true,
    sample: false,
    name: "Eolo 650 WA",
    type: "Walkaround",
    operator: "Captain Nev's Charters",
    marina: "Ta' Xbiex Marina",
    length: "7.5 m", // TO CONFIRM: a 650 is usually ~6.5 m
    guests: 8,
    summary: "A sporty 2019 walkaround for up to 8 guests, with comfortable shaded seating, sunbathing space and plenty of storage. Perfect for couples, friends, birthdays, anniversaries and unforgettable day trips around Comino and the coast.",
    photos: [
      "images/boats/eolo-650-wa/berth.jpg",
      "images/boats/eolo-650-wa/comino-bow.jpg",
      "images/boats/eolo-650-wa/seating.jpg",
      "images/boats/eolo-650-wa/helm.jpg",
      "images/boats/eolo-650-wa/night-marina.jpg",
    ],
    specs: [
      ["Model", "Eolo 650 WA"],
      ["Year", "2019"],
      ["Length", "7.5 m"],
      ["Guests", "Up to 8"],
      ["Crew", "1 skipper"],
      ["Engines", "Twin Yamaha 150 hp outboards"], // TO CONFIRM: photos show one outboard
      ["Design", "Walkaround"],
    ],
    charters: [
      { name: "Half Day", duration: "4 hours · 8:30am or 1:30pm", price: null },
      { name: "Day Charter", duration: "Full day · 9am to 5pm", price: null },
      { name: "Sunset Cruise", duration: "Evening", price: null },
    ],
    extras: [],
    includes: ["Licensed skipper", "Comfortable seating", "Shaded bimini top", "Sunbathing areas", "Storage for your belongings"],
    deposit: 100,
    depositLink: DEFAULT_DEPOSIT_LINK,
    bookedDates: [
      // "2026-08-15",   ← example: copy this line, change the date, remove the //
    ],
  },

  {
    id: "beneteau-swift-trawler-50",
    published: true,
    sample: false,
    name: "Beneteau Swift Trawler 50",
    type: "Motor yacht",
    operator: "Captain Nev's Charters",
    marina: "Ta' Xbiex Marina",
    length: "14.74 m",
    guests: 8,
    summary: "A spacious 2018/19 flybridge trawler yacht with two crew, for up to 8 guests. Stretch out on the big sun deck at the bow, take in the view from the flybridge, and cruise in real comfort. Perfect for special occasions, birthdays, anniversaries and unforgettable day trips.",
    photos: [
      "images/boats/beneteau-swift-trawler-50/anchored.jpg",
      "images/boats/beneteau-swift-trawler-50/flybridge-helm.jpg",
      "images/boats/beneteau-swift-trawler-50/bow-deck.jpg",
      "images/boats/beneteau-swift-trawler-50/sun-pad.jpg",
    ],
    specs: [
      ["Model", "Beneteau Swift Trawler 50"],
      ["Year", "2018/19"],
      ["Length", "14.74 m"],
      ["Guests", "Up to 8"],
      ["Crew", "2 (skipper & deckhand)"],
      ["Engines", "Twin Cummins 425 hp inboards"],
      ["Design", "Flybridge trawler yacht"],
    ],
    charters: [
      { name: "Half Day", duration: "4 hours · 8:30am or 1:30pm", price: null },
      { name: "Day Charter", duration: "Full day · 9am to 5pm", price: null },
      { name: "Sunset Cruise", duration: "Evening", price: null },
    ],
    extras: [],
    includes: ["Skipper & deckhand", "Flybridge with panoramic views", "Comfortable seating", "Large sunbathing areas", "Storage for your belongings"],
    deposit: 100,
    depositLink: DEFAULT_DEPOSIT_LINK,
    bookedDates: [
      // "2026-08-15",   ← example: copy this line, change the date, remove the //
    ],
  },

  {
    id: "saver-870-wa",
    published: true,
    sample: false,
    name: "Saver 870 WA",
    type: "Center console",
    operator: "Sea La Vie Boat Charters",
    marina: "Msida Marina",
    length: "30 ft",
    guests: 9,
    summary: "A brand-new 2026 Saver 870 WA for up to 9 guests, with twin 200 hp Yamahas and a top speed of 40 knots for fast island hopping. Bow sundeck, bimini shade, cabin with private toilet, fridge, premium sound and WiFi. Skippered by Christian Mifsud, who knows every hidden bay around Comino and the Blue Lagoon.",
    // No clean photos yet (the BoatBooker ones are watermarked). Ask Sea La Vie
    // for originals, put them in images/boats/saver-870-wa/ and list them here.
    photos: [],
    specs: [
      ["Model", "Saver 870 WA"],
      ["Year", "2026"],
      ["Length", "30 ft"],
      ["Guests", "Up to 9"],
      ["Crew", "1 skipper (Christian Mifsud)"],
      ["Engines", "Twin Yamaha 200 hp outboards"],
      ["Top speed", "40 knots"],
      ["Design", "Center console"],
    ],
    charters: [
      { name: "Sunset Cruise", duration: "3 hours · from 5:30pm", price: null },
      { name: "Half Day", duration: "4 hours · 9:30am or 1:30pm", price: null },
      { name: "Day Charter", duration: "8 hours · from 9am", price: null },
    ],
    extras: [],
    includes: ["Licensed skipper", "Bimini shade", "Bow sundeck", "Cabin", "Private toilet", "Refrigerator", "Premium sound system & WiFi", "Snorkelling gear available", "Life jackets for all guests", "GPS, chartplotter & VHF radio"],
    deposit: 100,
    depositLink: DEFAULT_DEPOSIT_LINK,
    bookedDates: [
      // "2026-08-15",   ← example: copy this line, change the date, remove the //
    ],
  },

  {
    id: "bombard-explorer-600",
    published: true,
    sample: false,
    name: "Bombard Explorer 600",
    type: "RIB",
    operator: "Prestige Charters Malta",
    marina: "Ta' Xbiex (flexible pick-up)",
    length: "20 ft",
    guests: 5,
    summary: "A nimble RIB for up to 5 guests, restored in 2021, reaching 23 knots for easy hops to the Blue Lagoon, Crystal Lagoon, Elephant Rock and the south coast of Gozo. No fixed itinerary, flexible pick-up near where you're staying, and children welcome. Runs May to October.",
    // No clean photos yet (the BoatBooker ones are watermarked). Ask Prestige
    // Charters for originals, put them in images/boats/bombard-explorer-600/.
    photos: [],
    specs: [
      ["Model", "Bombard Explorer 600"],
      ["Year", "2001, restored 2021"],
      ["Length", "20 ft"],
      ["Guests", "Up to 5"],
      ["Engine", "Yamaha 115 hp outboard"],
      ["Top speed", "23 knots"],
      ["Season", "1 May to 30 October"],
    ],
    charters: [
      { name: "Sunset Cruise", duration: "2 hours · harbour cruise from 5pm", price: null },
      { name: "Half Day", duration: "4 hours · Comino & caves", price: null },
      { name: "Comino Day", duration: "6 hours · Comino & caves, from 8am", price: null },
    ],
    extras: [],
    includes: ["Skipper", "Bimini shade", "Bow sundeck", "Ice box", "Audio system with outside speakers", "Flexible pick-up", "Life jackets & VHF radio", "Snorkelling gear (optional extra)", "Alcohol allowed on board"],
    deposit: 100,
    depositLink: DEFAULT_DEPOSIT_LINK,
    bookedDates: [
      // "2026-08-15",   ← example: copy this line, change the date, remove the //
    ],
  },

  {
    id: "capelli-tempest-900",
    published: false, // hidden: Saver is the first live boat. Set to true to show it again.
    sample: false,
    name: "Capelli Tempest 900",
    type: "RIB",
    operator: "MyCharters",
    marina: "Malta (pick-up point confirmed on booking)",
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
      { name: "Harbour Cruise", duration: "2 hours", price: null },
      { name: "Half Day", duration: "4 hours", price: null },
      { name: "Day Charter", duration: "8 hours", price: null },
      { name: "Comino Day", duration: "Full day", price: null },
      { name: "Sunset Cruise", duration: "Evening", price: null },
      { name: "Gift Card", duration: "Any charter", price: null, priceLabel: "Any amount" },
    ],
    extras: [
      { name: "Basic food package (platter included)", price: null },
      { name: "High-end food package (platter included)", price: null },
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

  // Branded stand-in when a boat has no photos yet.
  function placeholder(name) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0E3456"/><stop offset="1" stop-color="#08182a"/></linearGradient></defs>
<rect width="1200" height="800" fill="url(#g)"/>
<path d="M0 560 C200 520 400 600 600 560 S1000 520 1200 560 V800 H0Z" fill="#4D9FDB" opacity=".18"/>
<path d="M0 620 C220 585 420 655 620 620 S1000 585 1200 620 V800 H0Z" fill="#4D9FDB" opacity=".14"/>
<text x="600" y="380" text-anchor="middle" font-family="Georgia,serif" font-size="64" fill="#ffffff">${esc(name)}</text>
<text x="600" y="450" text-anchor="middle" font-family="Arial,sans-serif" font-size="26" letter-spacing="8" fill="#F89C86">PHOTOS COMING SOON</text>
</svg>`;
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }

  function cover(boat) { return (boat.photos && boat.photos[0]) || placeholder(boat.name); }

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
    cover,
    bookedSet,
    rememberBooked,
    esc,
    euro: (n) => (typeof n === "number" ? "€" + n.toLocaleString("en-GB") : "On request"),
  };
})();
