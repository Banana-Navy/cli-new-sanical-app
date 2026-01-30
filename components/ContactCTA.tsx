"use client";

import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

export default function ContactCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-secondary via-secondary-light to-primary relative overflow-hidden">
      {/* Decorative floating elements */}
      <div className="animate-float-slow absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="animate-float absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
      <div className="animate-float-slow absolute top-1/2 left-1/4 w-48 h-48 bg-accent/10 rounded-full -translate-y-1/2" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <AnimateOnScroll animation="fadeUp">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Contactez-nous pour un devis gratuit
          </h2>
          <p className="text-blue-100/90 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Que ce soit pour une installation, un dépannage ou l&apos;achat de pièces
            détachées, notre équipe est à votre écoute 7 jours sur 7.
          </p>
        </AnimateOnScroll>

        {/* Phone number displayed prominently */}
        <AnimateOnScroll animation="scaleIn" delay={200} className="mb-10">
          <a
            href="tel:071518850"
            className="inline-flex items-center gap-3 text-3xl sm:text-4xl font-extrabold hover:text-accent transition-colors duration-300"
          >
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="animate-shimmer">071 51 88 50</span>
          </a>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fadeUp" delay={400}>
          <div className="flex flex-wrap justify-center gap-5">
            <Link
              href="/contact"
              className="animate-pulse-subtle bg-cta hover:bg-cta-dark text-white font-bold px-12 py-4.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg"
            >
              Demander un devis
            </Link>
            <a
              href="tel:071518850"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold px-12 py-4.5 rounded-full transition-all duration-300 border-2 border-white/30 hover:border-white/50 text-lg flex items-center gap-2"
            >
              Appelez-nous
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
