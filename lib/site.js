// ---------------------------------------------------------------
// MyCharters — central site configuration.
// Edit contact details, copy and data here; components read from this file.
// ---------------------------------------------------------------

export const site = {
  name: "MyCharters",
  tagline: "Private Boat Charters in Malta",
  url: "https://www.mycharters.mt", // update when domain is live
  phoneDisplay: "+356 7936 1991",
  phoneRaw: "35679361991",
  email: "mychartersinfo@gmail.com",
  marina: "Grand Harbour Marina, Birgu (Vittoriosa), Malta",
  marinaShort: "Grand Harbour Marina, Birgu",
  instagram: "https://www.instagram.com/mycharters_mlt/",
  facebook: "https://www.facebook.com/profile.php?id=61590744415466",
  geo: { lat: 35.8878, lng: 14.5226 },
};

export function waLink(message) {
  const text = encodeURIComponent(
    message ||
      "Hello MyCharters! I'd like to enquire about a private boat charter."
  );
  return `https://wa.me/${site.phoneRaw}?text=${text}`;
}

// ---- Booking form services ------------------------------------------------
// 1. Email delivery: get a free access key at https://web3forms.com (enter
//    mychartersinfo@gmail.com, the key arrives by email) and paste it below.
//    Until then, submissions open the customer's email app pre-filled instead.
// 2. Deposit: in your Stripe dashboard create a Payment Link for a €100
//    product called "Charter deposit" (Payments → Payment Links → New) and
//    paste the https://buy.stripe.com/... URL below.
export const booking = {
  web3formsKey: "YOUR_WEB3FORMS_ACCESS_KEY",
  stripeDepositLink: "https://buy.stripe.com/REPLACE_WITH_YOUR_LINK",
  deposit: "€100",
  // BOOKED DATES — add a line here each time a deposit is confirmed.
  // These dates appear crossed out in every availability calendar.
  // Format: "YYYY-MM-DD"
  bookedDates: [
    "2026-06-15",
    "2026-06-19",
    "2026-06-27",
    "2026-07-04",
  ],
  foodOptions: [
    "High-End Package (platter included)",
    "Basic Package (platter included)",
  ],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "The Boat", href: "#boat" },
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#booking" },
];

// NOTE ON IMAGES: Unsplash placeholders are used so the site looks complete
// on first run. Replace each `image` URL with your own photography
// (drop files into /public/images and use "/images/your-photo.jpg").
export const experiences = [
  {
    id: "blue-lagoon",
    title: "Blue Lagoon Charter",
    duration: "Half day · 4 hours",
    image:
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=1600&auto=format&fit=crop",
    description:
      "Arrive at Comino's famous turquoise waters before the crowds do. Drop anchor over white sand, swim straight off the boat and let the morning drift by — drinks chilled, music yours.",
    highlights: ["Early or late departures to beat the crowds", "Anchor in the lagoon itself", "Swimming & snorkelling stops"],
  },
  {
    id: "comino",
    title: "Comino Adventure",
    duration: "Half day · 5 hours",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1600&auto=format&fit=crop",
    description:
      "Beyond the lagoon lies the Comino most visitors never see — sea caves you can swim into, the quieter Crystal Lagoon and Santa Marija Bay. A RIB is the only sensible way to explore them.",
    highlights: ["Sea cave exploration", "Crystal Lagoon & Santa Marija Bay", "Snorkelling gear on board"],
  },
  {
    id: "gozo",
    title: "Gozo Exploration",
    duration: "Full day · 7 hours",
    image:
      "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?q=80&w=1600&auto=format&fit=crop",
    description:
      "Trace Gozo's dramatic coastline — the Inland Sea at Dwejra, Xlendi's cliffs, hidden coves only reachable by sea. Stop in Mġarr or Xlendi for a long Gozitan lunch if you like.",
    highlights: ["Dwejra & the Inland Sea", "Cliff-line cruising", "Optional lunch stop ashore"],
  },
  {
    id: "sunset",
    title: "Sunset Cruise",
    duration: "Evening · 2.5 hours",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1600&auto=format&fit=crop",
    description:
      "Golden hour from the water is a different Malta. Glide past Valletta's bastions as the limestone turns amber, then watch the sun drop into the Mediterranean with a glass in hand.",
    highlights: ["Valletta & Grand Harbour by golden light", "Perfect for couples & proposals", "Complimentary prosecco"],
  },
  {
    id: "full-day",
    title: "Full-Day Private Charter",
    duration: "Full day · 8 hours",
    image:
      "https://images.unsplash.com/photo-1468413253725-0d5181091126?q=80&w=1600&auto=format&fit=crop",
    description:
      "The complete experience: Blue Lagoon, Comino's caves, Gozo's coastline and every swim stop in between — at your pace, with no schedule but your own.",
    highlights: ["Blue Lagoon + Comino + Gozo", "Fully flexible itinerary", "The day is entirely yours"],
  },
  {
    id: "custom",
    title: "Custom Experiences",
    duration: "Tailored to you",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
    description:
      "Proposals, birthdays, anniversaries, team days, photo shoots — tell us the occasion and we'll design the day around it, from route to refreshments to the playlist.",
    highlights: ["Proposals & celebrations", "Corporate & team experiences", "Bespoke routes & extras"],
  },
];

export const boatSpecs = [
  { label: "Vessel", value: "Capelli Tempest 900" },
  { label: "Type", value: "Luxury RIB" },
  { label: "Length", value: "9 metres" },
  { label: "Guests", value: "Up to 8 + skipper" },
  { label: "Power", value: "Twin outboard engines" },
  { label: "Cruising area", value: "Malta · Comino · Gozo" },
];

export const boatAmenities = [
  "Spacious bow & stern sun decks",
  "Shaded seating with bimini",
  "Bluetooth sound system",
  "Cool box with ice & refreshments",
  "Snorkelling equipment",
  "Swim ladder & freshwater rinse",
  "Comfortable deck cushions",
  "Dry storage for your belongings",
];

export const boatSafety = [
  "Licensed, experienced local skipper",
  "Life jackets for all guests (incl. children)",
  "Fully insured & Transport Malta compliant",
  "VHF radio & GPS navigation",
  "First aid kit on board",
  "Weather-checked before every departure",
];

export const whyUs = [
  {
    title: "Genuinely Private",
    text: "The boat is yours alone. No strangers, no fixed seats, no queues — just your group and the open sea.",
    icon: "anchor",
  },
  {
    title: "Local Knowledge",
    text: "Our skippers grew up on these waters. They know which cove is calm when the wind turns, and where the crowds aren't.",
    icon: "compass",
  },
  {
    title: "Flexible Itineraries",
    text: "Linger longer at the lagoon, chase a second swim spot, push on to Gozo — the route bends to your day, not the other way around.",
    icon: "route",
  },
  {
    title: "Premium Service",
    text: "Chilled drinks, clean decks, music you choose and a crew that anticipates rather than reacts. Small details, done properly.",
    icon: "star",
  },
  {
    title: "Safety First",
    text: "Licensed skipper, full insurance, daily weather checks and safety equipment for every guest. Relaxation needs a foundation.",
    icon: "shield",
  },
];

// Replace with your real guest reviews as they come in.
export const testimonials = [
  {
    quote:
      "We had the Blue Lagoon almost to ourselves at 9am. Our skipper knew exactly when to arrive and where to anchor — it felt like a secret we'd been let in on.",
    name: "Sophie & James",
    detail: "Couple's charter · United Kingdom",
  },
  {
    quote:
      "Booked the full day for my wife's 40th with three other couples. The crew handled everything — caves, swim stops, a lunch booking in Gozo. Flawless from start to finish.",
    name: "Marco R.",
    detail: "Full-day charter · Italy",
  },
  {
    quote:
      "The sunset cruise past Valletta was the highlight of our honeymoon. Prosecco, golden light on the bastions, and not another boat in sight.",
    name: "Amelia & Tom",
    detail: "Sunset cruise · Australia",
  },
  {
    quote:
      "As a family with two young kids we were nervous about a RIB, but the crew were brilliant — life jackets sized for the children and calm bays chosen just for them.",
    name: "The Keller Family",
    detail: "Family charter · Germany",
  },
];

export const faqs = [
  {
    q: "Where do charters depart from?",
    a: "All charters depart from Grand Harbour Marina in Birgu (Vittoriosa) — one of Malta's most beautiful marinas, ten minutes from Valletta. We'll send you a pin and meeting instructions when you book.",
  },
  {
    q: "How many guests can join?",
    a: "The Capelli Tempest 900 comfortably hosts up to 8 guests plus your skipper. For larger groups, contact us — we can often arrange a second vessel.",
  },
  {
    q: "What's included in the charter?",
    a: "Your private boat and licensed skipper, fuel, snorkelling equipment, bottled water and soft drinks, ice, Bluetooth sound system and all safety equipment. Sunset cruises include complimentary prosecco.",
  },
  {
    q: "What should we bring?",
    a: "Swimwear, towels, sunscreen (reef-safe if possible), sunglasses and a hat. You're welcome to bring your own food and drinks — we'll keep them cold.",
  },
  {
    q: "What happens if the weather turns?",
    a: "Your skipper monitors conditions daily. If the sea isn't right, we'll offer you an alternative route, a new date, or a full refund — your choice. We never compromise on safety.",
  },
  {
    q: "Are children welcome?",
    a: "Absolutely. We carry life jackets in children's sizes and our skippers adapt the route — calmer bays, gentler speeds — so the whole family enjoys the day.",
  },
  {
    q: "How do I book and pay?",
    a: "Message us on WhatsApp or send the booking form below. We'll confirm availability, hold your date with a deposit, and the balance is settled on the day. Cards and cash accepted.",
  },
  {
    q: "Can we customise the itinerary?",
    a: "That's rather the point. Every charter is private, so the route, pace and stops are designed around you. Tell us what you have in mind.",
  },
];

export const galleryItems = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=1200&auto=format&fit=crop",
    alt: "Turquoise waters of the Blue Lagoon, Comino",
    caption: "Blue Lagoon, Comino",
    tall: true,
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=1200&auto=format&fit=crop",
    alt: "Golden Mediterranean sunset from the water",
    caption: "Golden hour off Valletta",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200&auto=format&fit=crop",
    alt: "Snorkelling in crystal-clear water",
    caption: "Snorkelling the caves",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?q=80&w=1200&auto=format&fit=crop",
    alt: "Dramatic sea cliffs on Gozo's coastline",
    caption: "Gozo's western cliffs",
    tall: true,
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1468413253725-0d5181091126?q=80&w=1200&auto=format&fit=crop",
    alt: "Calm evening sea with warm light",
    caption: "Evening stillness",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    alt: "White sand seabed through clear shallow water",
    caption: "Anchored over white sand",
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?q=80&w=1200&auto=format&fit=crop",
    alt: "Open sea horizon from the bow",
    caption: "Open water, open day",
    tall: true,
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200&auto=format&fit=crop",
    alt: "Sun-drenched Mediterranean bay",
    caption: "Swim-stop paradise",
  },
  // To add a video tile: { type: "video", src: "/videos/clip.mp4", poster: "/images/poster.jpg", caption: "On board" }
];
