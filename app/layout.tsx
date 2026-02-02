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
    "Entreprise de chauffage agréée : installation, dépannage et entretien de chauffage, plomberie et sanitaire à Charleroi et alentours. Disponible 7j/7.",
  keywords:
    "plombier, chauffagiste, Charleroi, chauffage, plomberie, sanitaire, dépannage, Marchienne-au-Pont, installation chauffage, entretien chaudière, Saint Roch, Viessmann, Vaillant, pièces détachées",
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
      "Entreprise de chauffage agréée : installation, dépannage et entretien de chauffage, plomberie et sanitaire à Charleroi et alentours.",
    locale: "fr_BE",
    type: "website",
    url: "https://www.newsanical.be",
    siteName: "New Sanical SPRL",
    images: [
      {
        url: "/images/magasin.jpg",
        width: 300,
        height: 169,
        alt: "New Sanical SPRL - Plombier chauffagiste à Charleroi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "New Sanical SPRL - Plombier chauffagiste à Charleroi",
    description:
      "Entreprise de chauffage agréée : installation, dépannage et entretien de chauffage, plomberie et sanitaire à Charleroi et alentours.",
    images: ["/images/magasin.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLdBusiness = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "New Sanical SPRL",
  description:
    "Entreprise de chauffage agréée : installation, dépannage et entretien de chauffage, plomberie et sanitaire à Charleroi et alentours.",
  url: "https://www.newsanical.be",
  telephone: "+32 71 51 88 50",
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
  openingHours: "Mo-Su 08:00-18:00",
  image: "https://www.newsanical.be/images/logo.png",
  logo: "https://www.newsanical.be/images/logo.png",
  brand: [
    { "@type": "Brand", name: "Saint Roch" },
    { "@type": "Brand", name: "Viessmann" },
    { "@type": "Brand", name: "Vaillant" },
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
  priceRange: "€€",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 50.41,
      longitude: 4.395,
    },
    geoRadius: "30000",
  },
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "New Sanical SPRL",
  url: "https://www.newsanical.be",
  inLanguage: "fr-BE",
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quels services propose New Sanical ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "New Sanical propose l'installation de chauffage central (gaz et mazout), le dépannage et l'entretien de plomberie et sanitaire, ainsi que la vente de pièces détachées pour installations sanitaires et de chauffage.",
      },
    },
    {
      "@type": "Question",
      name: "New Sanical est-il disponible le week-end ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, New Sanical est joignable 7 jours sur 7, y compris le samedi et le dimanche, pour répondre à vos urgences et demandes.",
      },
    },
    {
      "@type": "Question",
      name: "Où se trouve le magasin New Sanical ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le magasin New Sanical se situe Place du Nord, 1 à 6030 Marchienne-au-Pont (Charleroi), dans la province du Hainaut en Belgique.",
      },
    },
    {
      "@type": "Question",
      name: "Quelles marques sont disponibles chez New Sanical ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "New Sanical travaille avec les meilleures marques : Vaillant, Viessmann, Grohe, Hansgrohe, Geberit, Ideal Standard, Villeroy & Boch, et bien d'autres.",
      },
    },
    {
      "@type": "Question",
      name: "Comment obtenir un devis gratuit ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vous pouvez obtenir un devis gratuit en nous appelant au 071 51 88 50, en envoyant un email à info@newsanical.be, ou en remplissant le formulaire de contact sur notre site web.",
      },
    },
  ],
};

const jsonLdBreadcrumbHome = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: "https://www.newsanical.be",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-BE">
      <head>
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://maps.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumbHome) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-medium"
        >
          Aller au contenu principal
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
