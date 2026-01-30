"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In production, this would send the form data to a server
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 text-accent rounded-full mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-secondary mb-3">
          Merci pour votre demande !
        </h3>
        <p className="text-body-secondary max-w-md mx-auto">
          Nous avons bien reçu votre message et nous vous recontacterons dans
          les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-semibold text-secondary mb-2"
          >
            Prénom *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 bg-light/50 hover:border-gray-300"
            placeholder="Votre prénom"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-semibold text-secondary mb-2"
          >
            Nom *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 bg-light/50 hover:border-gray-300"
            placeholder="Votre nom"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-secondary mb-2"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 bg-light/50 hover:border-gray-300"
            placeholder="votre@email.com"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-semibold text-secondary mb-2"
          >
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 bg-light/50 hover:border-gray-300"
            placeholder="Votre numéro de téléphone"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="service"
          className="block text-sm font-semibold text-secondary mb-2"
        >
          Service souhaité *
        </label>
        <select
          id="service"
          name="service"
          required
          className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 bg-light/50 hover:border-gray-300"
        >
          <option value="">Sélectionnez un service</option>
          <option value="chauffage">Chauffage</option>
          <option value="plomberie">Plomberie - Sanitaire</option>
          <option value="pieces">Vente de pièces détachées</option>
          <option value="depannage">Dépannage urgent</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-secondary mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 resize-vertical bg-light/50 hover:border-gray-300"
          placeholder="Décrivez votre besoin ou votre projet..."
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-cta hover:bg-cta-dark text-white font-bold px-10 py-4.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] text-lg"
      >
        Envoyer ma demande
      </button>
    </form>
  );
}
