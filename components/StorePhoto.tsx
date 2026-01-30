"use client";

import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

export default function StorePhoto() {
  return (
    <section className="py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <AnimateOnScroll animation="fadeLeft">
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-6 section-title-bar-left">
                Visitez notre magasin
              </h2>
              <p className="text-body-secondary text-lg leading-relaxed mb-8 mt-8">
                Vous trouverez un vaste choix de pièces de remplacement pour vos
                installations sanitaires et de chauffage dans notre magasin.
                Notre personnel qualifié se tient à votre disposition pour vous
                conseiller.
              </p>
            </AnimateOnScroll>

            <div className="space-y-4">
              <AnimateOnScroll animation="fadeRight" delay={200}>
                <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
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
                    <span className="text-xs font-semibold text-body-secondary uppercase tracking-wider">Adresse</span>
                    <p className="text-secondary font-medium">Place du Nord, 1 — 6030 Marchienne-au-Pont</p>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fadeRight" delay={350}>
                <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
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
                    <span className="text-xs font-semibold text-body-secondary uppercase tracking-wider">Téléphone</span>
                    <a href="tel:071518850" className="block text-secondary font-medium hover:text-primary transition-colors duration-300">
                      071 51 88 50
                    </a>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fadeRight" delay={500}>
                <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
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
                    <span className="text-xs font-semibold text-body-secondary uppercase tracking-wider">Disponibilité</span>
                    <p className="text-secondary font-medium">Disponible 7 jours sur 7</p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>

          <AnimateOnScroll animation="fadeIn" delay={100} className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/images/magasin.jpg"
                alt="Devanture du magasin New Sanical SPRL, plombier chauffagiste à Marchienne-au-Pont, Charleroi"
                width={600}
                height={338}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent p-8">
                <p className="text-white font-bold text-xl">
                  New Sanical SPRL
                </p>
                <p className="text-blue-200 text-sm mt-1">
                  Marchienne-au-Pont, Charleroi
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
