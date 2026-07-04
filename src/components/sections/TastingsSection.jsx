'use client';

import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { Parallax } from '@/components/animations/Parallax';
import Button from '@/components/ui/button';
import pagesData from '@/data/pages.json';

export default function TastingsSection() {
  const { degustazioni } = pagesData;
  const experiences = degustazioni.experiences.slice(0, 3);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax */}
      <Parallax speed={0.3}>
        <img
          src="https://images.unsplash.com/photo-1510812431401-41d2cab2707d?w=1800&q=85&auto=format&fit=crop"
          alt="Wine tasting experience"
          className="absolute inset-0 w-full h-screen object-cover"
        />
      </Parallax>

      {/* Overlay */}
      <div className="absolute inset-0 bg-nero bg-opacity-40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center max-w-2xl mx-auto px-6 md:px-12">
        <RevealOnScroll>
          <div className="text-avorio">
            <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-4">
              {degustazioni.title}
            </h2>
            <h3 className="font-inter text-2xl md:text-3xl font-semibold mb-6 opacity-90">
              {degustazioni.headline}
            </h3>
            <p className="font-inter text-lg leading-relaxed mb-8 opacity-85">
              {degustazioni.description}
            </p>

            {/* Experiences List */}
            <div className="mb-8 space-y-4">
              {experiences.map((exp, index) => (
                <div key={index} className="flex items-start">
                  <span className="flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-oro text-nero font-bold text-sm mr-4">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-inter font-semibold text-avorio">
                      {exp.name} • {exp.duration}
                    </p>
                    <p className="font-inter text-sm opacity-85">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button variant="secondary" href="/contatti">
              Lascia il tuo contatto
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
