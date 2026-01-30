"use client";

import Image from "next/image";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Brands() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fadeUp" className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4 section-title-bar">
            Nos marques partenaires
          </h2>
          <p className="text-body-secondary text-lg max-w-2xl mx-auto mt-6">
            Nous travaillons exclusivement avec des marques de haute qualité,
            notamment Saint Roch, Viessmann et Vaillant.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scaleIn" delay={200} className="flex justify-center">
          <div className="bg-light rounded-2xl p-10 sm:p-14 inline-block border border-primary/10">
            <Image
              src="/images/logos-brands.jpg"
              alt="Logos des marques partenaires de New Sanical : Saint Roch, Viessmann, Vaillant et autres"
              width={300}
              height={500}
              className="max-w-full h-auto max-h-80 sm:max-h-96 w-auto object-contain mx-auto"
            />
          </div>
        </AnimateOnScroll>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {["Saint Roch", "Viessmann", "Vaillant"].map((brand, index) => (
            <AnimateOnScroll
              key={brand}
              animation="fadeUp"
              delay={400 + index * 100}
              className="inline-block"
            >
              <span className="bg-gradient-to-r from-primary/10 to-accent/10 text-secondary font-semibold px-6 py-2.5 rounded-full border border-primary/15 text-sm block">
                {brand}
              </span>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
