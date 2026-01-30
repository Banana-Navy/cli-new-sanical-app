import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page introuvable",
  description:
    "La page que vous recherchez n'existe pas ou a été déplacée. Retournez à l'accueil de New Sanical SPRL.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-light">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 text-primary rounded-full mb-8">
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-secondary mb-4">
          404
        </h1>
        <h2 className="text-xl sm:text-2xl font-bold text-secondary mb-4">
          Page introuvable
        </h2>
        <p className="text-body-secondary text-lg mb-10 leading-relaxed">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
          N&apos;hésitez pas à retourner à l&apos;accueil ou à nous contacter directement.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="bg-cta hover:bg-cta-dark text-white font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
          >
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/contact"
            className="bg-white text-secondary font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200 hover:border-primary hover:text-primary"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
