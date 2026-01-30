"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top info bar */}
      <div className="bg-secondary text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-5 text-xs sm:text-sm">
            <a
              href="https://maps.google.com/?q=Place+du+Nord+1+6030+Marchienne-au-Pont"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent transition-colors duration-300"
            >
              <svg
                className="w-4 h-4 shrink-0"
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
              <span className="hidden sm:inline">
                Place du Nord, 1 — 6030 Marchienne-au-Pont
              </span>
              <span className="sm:hidden">Marchienne-au-Pont</span>
            </a>
            <a
              href="tel:071518850"
              className="flex items-center gap-2 hover:text-accent transition-colors duration-300"
            >
              <svg
                className="w-4 h-4 shrink-0"
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
              <span className="font-semibold">071 51 88 50</span>
            </a>
            <a
              href="mailto:info@newsanical.be"
              className="flex items-center gap-2 hover:text-accent transition-colors duration-300"
            >
              <svg
                className="w-4 h-4 shrink-0"
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
              <span className="hidden md:inline">info@newsanical.be</span>
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-blue-200">
            <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Disponible 7j/7
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <Link href="/" className="shrink-0 logo-hover-scale inline-block">
              <Image
                src="/images/logo.png"
                alt="New Sanical SPRL - Plombier chauffagiste à Charleroi"
                width={285}
                height={177}
                className="h-14 sm:h-16 w-auto"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-secondary font-medium hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                Accueil
              </Link>
              <Link
                href="/#services"
                className="text-secondary font-medium hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                Services
              </Link>
              <Link
                href="/#pourquoi"
                className="text-secondary font-medium hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                Pourquoi nous
              </Link>
              <Link
                href="/contact"
                className="text-secondary font-medium hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="bg-cta hover:bg-cta-dark text-white font-semibold px-7 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
              >
                Devis gratuit
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-secondary hover:text-primary transition-colors duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile slide-in menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <span className="text-lg font-bold text-secondary">Menu</span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-secondary hover:text-primary transition-colors duration-300"
            aria-label="Fermer le menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav aria-label="Navigation mobile" className={`p-6 flex flex-col gap-1 ${mobileMenuOpen ? 'mobile-menu-stagger' : ''}`}>
          <Link
            href="/"
            className="text-secondary font-medium hover:text-primary hover:bg-light transition-all duration-300 py-3 px-4 rounded-xl"
            onClick={() => setMobileMenuOpen(false)}
          >
            Accueil
          </Link>
          <Link
            href="/#services"
            className="text-secondary font-medium hover:text-primary hover:bg-light transition-all duration-300 py-3 px-4 rounded-xl"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/#pourquoi"
            className="text-secondary font-medium hover:text-primary hover:bg-light transition-all duration-300 py-3 px-4 rounded-xl"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pourquoi nous
          </Link>
          <Link
            href="/contact"
            className="text-secondary font-medium hover:text-primary hover:bg-light transition-all duration-300 py-3 px-4 rounded-xl"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <Link
              href="/contact"
              className="block bg-cta hover:bg-cta-dark text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-300 text-center shadow-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Devis gratuit
            </Link>
            <a
              href="tel:071518850"
              className="mt-3 flex items-center justify-center gap-2 text-primary font-semibold py-3 hover:text-primary-dark transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              071 51 88 50
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
