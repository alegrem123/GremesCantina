'use client';

import { Parallax } from '@/components/animations/Parallax';
import Button from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax */}
      <Parallax>
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=85&auto=format&fit=crop"
          alt="Vineyard landscape"
          className="absolute inset-0 w-full h-screen object-cover"
        />
      </Parallax>

      {/* Overlay */}
      <div className="absolute inset-0 bg-nero bg-opacity-30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-avorio max-w-3xl px-6">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
          Tradizione che respira il territorio
        </h1>
        <p className="font-inter text-lg md:text-xl mb-12 opacity-90">
          Vini artigianali dal cuore della Valle di Non
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Button variant="primary" href="/vini">
            Scopri i Vini
          </Button>
          <Button variant="secondary" href="/contatti">
            Prenota Degustazione
          </Button>
        </div>
      </div>
    </section>
  );
}
