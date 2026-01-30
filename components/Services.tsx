"use client";

import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

const services = [
  {
    title: "Chauffage",
    description:
      "Installation de chauffage central au gaz ou au mazout, chaudière, radiateurs, thermostat. Intervention rapide et efficace pour tous vos besoins en chauffage.",
    features: [
      "Installation chaudières gaz & mazout",
      "Radiateurs et thermostat",
      "Entretien annuel",
      "Dépannage rapide",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
        />
      </svg>
    ),
  },
  {
    title: "Plomberie - Sanitaire",
    description:
      "Notre équipe dynamique et professionnelle intervient en urgence pour tout dépannage. Placement de vos installations sanitaires : salle de bain, douche, baignoire.",
    features: [
      "Dépannage d'urgence",
      "Salle de bain complète",
      "Douche et baignoire",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728M12 2v4m0 12v4M2 12h4m12 0h4"
        />
        <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
      </svg>
    ),
  },
  {
    title: "Vente de pièces détachées",
    description:
      "Vaste choix de pièces de remplacement pour vos installations sanitaires et de chauffage. Notre personnel qualifié se tient à votre disposition pour vous conseiller.",
    features: [
      "Vaste choix de pièces",
      "Personnel qualifié",
      "Conseil sur place",
    ],
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fadeUp" className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4 section-title-bar">
            Nos services
          </h2>
          <p className="text-body-secondary text-lg max-w-2xl mx-auto mt-6">
            New Sanical vous propose une gamme complète de services en plomberie
            et chauffage pour répondre à tous vos besoins.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <AnimateOnScroll
              key={index}
              animation="fadeUp"
              delay={index * 200}
              className="group card-gradient-border bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-primary mb-6 group-hover:from-primary group-hover:to-accent group-hover:text-white transition-all duration-300 icon-hover-pulse">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-secondary mb-3">
                {service.title}
              </h3>
              <p className="text-body-secondary leading-relaxed mb-6">
                {service.description}
              </p>
              {/* Feature bullets */}
              <ul className="space-y-2.5 mb-8 flex-grow">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-body">
                    <svg className="w-4.5 h-4.5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary/10 text-primary font-semibold py-3.5 rounded-xl hover:bg-primary hover:text-white transition-all duration-300 mt-auto"
              >
                Demander un devis
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
