'use client';

import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import Section from '@/components/common/Section';
import Container from '@/components/common/Container';
import winesData from '@/data/wines.json';

// Placeholder for WineCard - to be created in Task 8
function WineCard({ wine }) {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={wine.image}
        alt={wine.name}
        className="w-full h-auto object-cover rounded-lg shadow-lg mb-6"
      />
      <h3 className="font-playfair text-2xl font-bold mb-2">{wine.name}</h3>
      <p className="font-inter text-sm opacity-80 mb-2">
        {wine.vintage} • {wine.type}
      </p>
      <p className="font-inter text-sm leading-relaxed">
        {wine.shortDescription}
      </p>
    </div>
  );
}

export default function WinesSection() {
  return (
    <Section className="bg-nero text-avorio">
      <Container>
        <div className="mb-16">
          <RevealOnScroll>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-center">
              I Nostri Vini
            </h2>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {winesData.map((wine, index) => (
            <RevealOnScroll key={wine.id} delay={index * 0.1}>
              <WineCard wine={wine} />
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </Section>
  );
}
