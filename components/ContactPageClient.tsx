"use client";

import AnimateOnScroll from "./AnimateOnScroll";
import ContactForm from "./ContactForm";

export function ContactHero() {
  return (
    <section className="bg-gradient-to-br from-secondary via-secondary-light to-primary py-20 sm:py-24 relative overflow-hidden">
      <div className="animate-float-slow absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3" />
      <div className="animate-float absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full -translate-x-1/2 translate-y-1/2" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <AnimateOnScroll animation="fadeIn">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5">
            Contactez-nous
          </h1>
          <p className="text-blue-100/90 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Demandez votre devis gratuit ou contactez-nous pour toute question.
            Notre équipe est disponible 7 jours sur 7.
          </p>
        </AnimateOnScroll>
      </div>
    </section>
  );
}

export function ContactInfoCards() {
  return (
    <div className="space-y-4 mt-8">
      <AnimateOnScroll animation="fadeUp" delay={0}>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shrink-0">
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-secondary text-sm uppercase tracking-wider">Adresse</h3>
              <p className="text-body-secondary mt-1">
                Place du Nord, 1<br />
                6030 Marchienne-au-Pont
              </p>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fadeUp" delay={100}>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shrink-0">
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-secondary text-sm uppercase tracking-wider">Téléphone</h3>
              <a
                href="tel:071518850"
                className="text-primary font-semibold text-lg mt-1 block hover:text-primary-dark transition-colors duration-300"
              >
                071 51 88 50
              </a>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fadeUp" delay={200}>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shrink-0">
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-secondary text-sm uppercase tracking-wider">Email</h3>
              <a
                href="mailto:info@newsanical.be"
                className="text-body-secondary mt-1 block hover:text-primary transition-colors duration-300"
              >
                info@newsanical.be
              </a>
            </div>
          </div>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fadeUp" delay={300}>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center shrink-0">
              <svg
                className="w-5 h-5 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-secondary text-sm uppercase tracking-wider">Disponibilité</h3>
              <p className="text-body-secondary mt-1">
                Joignable 7 jours sur 7
              </p>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </div>
  );
}

export function ContactFormSection() {
  return (
    <AnimateOnScroll animation="fadeRight" delay={200}>
      <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 lg:p-12 border border-gray-100">
        <h2 className="text-2xl font-bold text-secondary mb-2">
          Demande de devis gratuit
        </h2>
        <p className="text-body-secondary mb-8">
          Remplissez le formulaire ci-dessous et nous vous recontacterons
          dans les plus brefs délais.
        </p>
        <ContactForm />
      </div>
    </AnimateOnScroll>
  );
}
