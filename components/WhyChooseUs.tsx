"use client";

import AnimateOnScroll from "./AnimateOnScroll";

const reasons = [
  {
    number: "01",
    title: "Le professionnalisme",
    description:
      "Nous mettons à votre service notre expertise et notre savoir-faire.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "La qualité",
    description:
      "Nous travaillons exclusivement avec des marques de haute qualité, notamment Saint Roch, Viessmann et Vaillant.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Le prix",
    description:
      "Nous vous garantissons des prix compétitifs.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "La polyvalence",
    description:
      "Installation, dépannage et vente de pièces détachées : une solution complète pour tous vos besoins.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "La disponibilité",
    description:
      "Nous sommes joignables 7 jours sur 7.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section id="pourquoi" className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fadeUp" className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4 section-title-bar">
            5 bonnes raisons de nous choisir
          </h2>
          <p className="text-body-secondary text-lg max-w-2xl mx-auto mt-6">
            Découvrez pourquoi confier vos installations et dépannages à New Sanical.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5">
          {reasons.map((reason, index) => (
            <AnimateOnScroll
              key={index}
              animation="fadeUp"
              delay={index * 100}
              className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col h-full hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/15 to-accent/15 text-primary mb-5 group-hover:from-primary group-hover:to-accent group-hover:text-white transition-all duration-300 mx-auto icon-hover-rotate">
                {reason.icon}
              </div>
              <div className="text-xs font-bold text-accent mb-2 tracking-widest uppercase">
                Raison {reason.number}
              </div>
              <h3 className="text-lg font-bold text-secondary mb-3">
                {reason.title}
              </h3>
              <p className="text-body-secondary text-sm leading-relaxed">
                {reason.description}
              </p>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
