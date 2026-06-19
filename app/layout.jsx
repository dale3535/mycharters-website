import { Cormorant_Garamond, Inter, Italiana } from "next/font/google";
import "./globals.css";
import { site, experiences, faqs } from "@/lib/site";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Hero display face — thin, high-contrast, Mediterranean-chic.
const hero = Italiana({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-hero",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "MyCharters | Private Boat Charters Malta — Blue Lagoon, Comino & Gozo",
    template: "%s | MyCharters Malta",
  },
  description:
    "Private boat charters in Malta aboard a Capelli Tempest 900 luxury RIB. Blue Lagoon trips, Comino caves, Gozo adventures and sunset cruises from Grand Harbour Marina, Birgu. Book direct on WhatsApp.",
  keywords: [
    "boat charter Malta",
    "private boat hire Malta",
    "Blue Lagoon boat trip",
    "Comino boat charter",
    "Gozo boat trip",
    "sunset cruise Malta",
    "luxury RIB charter Malta",
    "Capelli Tempest 900",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.url,
    siteName: site.name,
    title: "MyCharters | Private Boat Charters Malta",
    description:
      "Your private boat, your itinerary. Blue Lagoon, Comino, Gozo and sunset cruises from Grand Harbour Marina, Birgu.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MyCharters | Private Boat Charters Malta",
    description:
      "Private Blue Lagoon, Comino & Gozo charters aboard a luxury RIB. Book direct on WhatsApp.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#0A1B2E",
};

function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${site.url}/#business`,
        name: site.name,
        description:
          "Private luxury boat charters in Malta — Blue Lagoon, Comino, Gozo and sunset cruises aboard a Capelli Tempest 900 RIB.",
        url: site.url,
        telephone: site.phoneDisplay,
        email: site.email,
        priceRange: "€€€",
        image: `${site.url}/images/og-image.jpg`,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Grand Harbour Marina",
          addressLocality: "Birgu",
          addressCountry: "MT",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: site.geo.lat,
          longitude: site.geo.lng,
        },
        sameAs: [site.instagram, site.facebook],
      },
      ...experiences.map((exp) => ({
        "@type": "TouristTrip",
        name: `${exp.title} — ${site.name}`,
        description: exp.description,
        provider: { "@id": `${site.url}/#business` },
        touristType: ["Couples", "Families", "Groups", "Luxury travellers"],
      })),
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${hero.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
