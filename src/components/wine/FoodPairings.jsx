'use client';

import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';
import { RevealOnScroll } from '@/components/ui/reveal-on-scroll';
import { Card } from '@/components/ui/card';

const pairingImages = [
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
];

export default function FoodPairings({ pairings }) {
  return (
    <Section className="bg-nero text-avorio">
      <Container>
        {/* Heading */}
        <h2 className="font-playfair text-3xl font-bold mb-12 text-center text-avorio">
          Suggerimenti di Abbinamento
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pairings.map((pairing, index) => (
            <RevealOnScroll key={pairing.name} delay={index * 100}>
              <Card className="bg-nero border-2 border-beige hover:border-oro transition-colors overflow-hidden">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-beige">
                  <img
                    src={pairingImages[index % pairingImages.length]}
                    alt={pairing.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  {/* Name */}
                  <h3 className="font-playfair text-lg font-bold mb-2 text-avorio">
                    {pairing.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-avorio opacity-80">
                    {pairing.description}
                  </p>
                </div>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </Section>
  );
}
