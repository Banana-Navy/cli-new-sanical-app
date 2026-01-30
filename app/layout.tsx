import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "New Sanical SPRL - Plombier chauffagiste à Charleroi",
    template: "%s | New Sanical SPRL",
  },
  description:
    "Entreprise de chauffage agréée, spécialisée en entretien, installation et dépannage de chauffage, plomberie et sanitaire à Charleroi et alentours. Disponible 7j/7.",
  keywords:
    "plombier, chauffagiste, Charleroi, chauffage, plomberie, sanitaire, dépannage, Marchienne-au-Pont, installation chauffage, entretien chaudière, Vaillant, Viessmann, Grohe, Geberit",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  metadataBase: new URL("https://www.newsanical.be"),
  alternates: {
    canonical: "/",
    languages: {
      "fr-BE": "/",
    },
  },
  openGraph: {
    title: "New Sanical SPRL - Plombier chauffagiste à Charleroi",
    description:
      "Entreprise de chauffage agréée, spécialisée en entretien, installation et dépannage de chauffage, plomberie et sanitaire à Charleroi et alentours.",
    locale: "fr_BE",
    type: "website",
    url: "https://www.newsanical.be",
    siteName: "New Sanical SPRL",
  },
  twitter: {
    card: "summary_large_image",
    title: "New Sanical SPRL - Plombier chauffagiste à Charleroi",
    description:
      "Entreprise de chauffage agréée, spécialisée en entretien, installation et dépannage de chauffage, plomberie et sanitaire à Charleroi et alentours.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "New Sanical SPRL",
  description:
    "Entreprise de chauffage agréée, spécialisée en entretien, installation et dépannage de chauffage, plomberie et sanitaire à Charleroi et alentours.",
  url: "https://www.newsanical.be",
  telephone: "+3271518850",
  email: "info@newsanical.be",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Place du Nord, 1",
    postalCode: "6030",
    addressLocality: "Marchienne-au-Pont",
    addressRegion: "Hainaut",
    addressCountry: "BE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 50.41,
    longitude: 4.395,
  },
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "€€",
  image: "https://www.newsanical.be/images/logo.png",
  brand: [
    { "@type": "Brand", name: "Vaillant" },
    { "@type": "Brand", name: "Viessmann" },
    { "@type": "Brand", name: "Grohe" },
    { "@type": "Brand", name: "Hansgrohe" },
    { "@type": "Brand", name: "Geberit" },
    { "@type": "Brand", name: "Ideal Standard" },
    { "@type": "Brand", name: "Villeroy & Boch" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services de plomberie et chauffage",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Chauffage",
        description:
          "Installation de chauffage central au gaz ou au mazout, chaudière, radiateurs, thermostat.",
      },
      {
        "@type": "OfferCatalog",
        name: "Plomberie - Sanitaire",
        description:
          "Dépannage en urgence, placement d'installations sanitaires : salle de bain, douche, baignoire.",
      },
      {
        "@type": "OfferCatalog",
        name: "Vente de pièces détachées",
        description:
          "Vaste choix de pièces de remplacement pour installations sanitaires et de chauffage.",
      },
    ],
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 50.41,
      longitude: 4.395,
    },
    geoRadius: "30000",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-BE">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
