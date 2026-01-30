import type { Metadata } from "next";
import { ContactHero, ContactInfoCards, ContactFormSection } from "@/components/ContactPageClient";

export const metadata: Metadata = {
  title: "Contact - Devis gratuit",
  description:
    "Contactez New Sanical SPRL pour un devis gratuit. Plomberie, chauffage, dépannage et vente de pièces détachées à Charleroi et alentours. Disponible 7j/7.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact - Devis gratuit | New Sanical SPRL",
    description:
      "Contactez New Sanical SPRL pour un devis gratuit. Plomberie, chauffage, dépannage à Charleroi.",
    url: "https://www.newsanical.be/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="py-20 sm:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-secondary mb-2 section-title-bar-left">
                Nos coordonnées
              </h2>

              <ContactInfoCards />

              {/* Map */}
              <div className="mt-6 rounded-2xl overflow-hidden shadow-md border border-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.5!2d4.395!3d50.41!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2263e7c100001%3A0x0!2sPlace+du+Nord+1%2C+6030+Marchienne-au-Pont!5e0!3m2!1sfr!2sbe!4v1700000000000"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="New Sanical - Localisation"
                ></iframe>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <ContactFormSection />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
