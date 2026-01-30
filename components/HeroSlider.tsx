"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

const slides = [
  { src: "/images/slide1.jpg", alt: "Installation de chauffage central par New Sanical à Charleroi" },
  { src: "/images/slide2.jpg", alt: "Services de plomberie et sanitaire par New Sanical à Marchienne-au-Pont" },
];

const trustBadges = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: "7j/7",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    text: "Agréé",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    text: "Prix compétitif",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    text: "Pièces détachées",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section aria-label="Présentation de New Sanical" className="relative w-full h-[100vh] min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Slide images with crossfade */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === current
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark navy gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/60 to-secondary/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />

      {/* Decorative floating elements */}
      <div className="animate-float-slow absolute top-20 right-[15%] w-32 h-32 bg-accent/5 rounded-full blur-xl pointer-events-none" />
      <div className="animate-float absolute bottom-40 right-[25%] w-24 h-24 bg-primary/5 rounded-full blur-lg pointer-events-none" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="hero-animate hero-animate-delay-1 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full mb-6 border border-white/20">
              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Entreprise agréée — Disponible 7j/7
            </div>
            <h1 className="hero-animate hero-animate-delay-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Votre plombier-chauffagiste agréé à{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Charleroi
              </span>
            </h1>
            <p className="hero-animate hero-animate-delay-3 text-lg sm:text-xl text-blue-100/90 mb-10 leading-relaxed max-w-xl">
              Installation, dépannage et vente de pièces détachées.
              Disponible 7 jours sur 7.
            </p>
            <div className="hero-animate hero-animate-delay-4 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-cta hover:bg-cta-dark text-white font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-lg"
              >
                Devis gratuit
              </Link>
              <a
                href="tel:071518850"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold px-10 py-4 rounded-full transition-all duration-300 border-2 border-white/30 hover:border-white/50 text-lg flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                071 51 88 50
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust badges row at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary/90 to-transparent pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-6">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="hero-badge-stagger flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm font-medium px-4 py-2.5 rounded-full border border-white/15"
                style={{ animationDelay: `${900 + index * 100}ms` }}
              >
                <span className="text-accent">{badge.icon}</span>
                {badge.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/25 text-white p-3 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-110"
        aria-label="Image précédente"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/25 text-white p-3 rounded-full transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-110"
        aria-label="Image suivante"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-24 sm:bottom-20 left-1/2 -translate-x-1/2 flex gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 rounded-full transition-all duration-500 ${
              index === current
                ? "bg-accent w-10"
                : "bg-white/40 hover:bg-white/70 w-3"
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
