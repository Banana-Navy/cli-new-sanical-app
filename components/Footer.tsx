"use client";

import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Company info */}
          <AnimateOnScroll animation="fadeUp" delay={0} className="lg:col-span-1">
            <div className="mb-5">
              <Image
                src="/images/logo.png"
                alt="New Sanical SPRL"
                width={285}
                height={177}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-blue-200/80 text-sm leading-relaxed mb-4">
              Plombier-chauffagiste agréé à Charleroi. Installation, dépannage et vente de pièces détachées.
            </p>
            <div className="mt-5 space-y-3 text-sm text-blue-200/80">
              <p className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 shrink-0 mt-0.5 text-accent"
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
                Place du Nord, 1 — 6030 Marchienne-au-Pont
              </p>
              <p className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 shrink-0 text-accent"
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
                <a href="tel:071518850" className="hover:text-accent transition-colors duration-300">
                  071 51 88 50
                </a>
              </p>
              <p className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 shrink-0 text-accent"
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
                <a
                  href="mailto:info@newsanical.be"
                  className="hover:text-accent transition-colors duration-300"
                >
                  info@newsanical.be
                </a>
              </p>
            </div>
          </AnimateOnScroll>

          {/* Services */}
          <AnimateOnScroll animation="fadeUp" delay={100}>
            <nav aria-label="Nos services">
              <h3 className="text-lg font-bold mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-accent after:rounded">
                Nos services
              </h3>
              <ul className="space-y-3 text-sm text-blue-200/80">
                <li>
                  <Link href="/#services" className="hover:text-accent transition-colors duration-300 flex items-center gap-2">
                    <svg className="w-3 h-3 text-accent/60" fill="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                    Chauffage
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-accent transition-colors duration-300 flex items-center gap-2">
                    <svg className="w-3 h-3 text-accent/60" fill="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                    Plomberie - Sanitaire
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-accent transition-colors duration-300 flex items-center gap-2">
                    <svg className="w-3 h-3 text-accent/60" fill="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                    Vente de pièces détachées
                  </Link>
                </li>
              </ul>
            </nav>
          </AnimateOnScroll>

          {/* Quick links */}
          <AnimateOnScroll animation="fadeUp" delay={200}>
            <nav aria-label="Liens rapides">
              <h3 className="text-lg font-bold mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-accent after:rounded">
                Liens rapides
              </h3>
              <ul className="space-y-3 text-sm text-blue-200/80">
                <li>
                  <Link href="/" className="hover:text-accent transition-colors duration-300 flex items-center gap-2">
                    <svg className="w-3 h-3 text-accent/60" fill="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="/#pourquoi" className="hover:text-accent transition-colors duration-300 flex items-center gap-2">
                    <svg className="w-3 h-3 text-accent/60" fill="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                    Pourquoi nous choisir
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-accent transition-colors duration-300 flex items-center gap-2">
                    <svg className="w-3 h-3 text-accent/60" fill="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-accent transition-colors duration-300 flex items-center gap-2">
                    <svg className="w-3 h-3 text-accent/60" fill="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
                    Demander un devis gratuit
                  </Link>
                </li>
              </ul>
            </nav>
          </AnimateOnScroll>

          {/* Horaires */}
          <AnimateOnScroll animation="fadeUp" delay={300}>
            <h3 className="text-lg font-bold mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-accent after:rounded">
              Disponibilité
            </h3>
            <div className="space-y-3 text-sm text-blue-200/80">
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span>Lundi - Vendredi</span>
                <span className="text-white font-medium">Joignable</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span>Samedi</span>
                <span className="text-white font-medium">Joignable</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/10">
                <span>Dimanche</span>
                <span className="text-white font-medium">Joignable</span>
              </div>
              <p className="text-accent text-xs font-semibold mt-3 flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Disponible 7 jours sur 7
              </p>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-blue-200/60">
            &copy; {currentYear} New Sanical SPRL. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4 text-sm text-blue-200/60">
            <span>Place du Nord, 1 — 6030 Marchienne-au-Pont</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
