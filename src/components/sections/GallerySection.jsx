'use client';

import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import Section from '@/components/common/Section';
import Container from '@/components/common/Container';

const galleryImages = [
  'https://images.unsplash.com/photo-1596838805908-e65e2a2eb6d5?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1559925393-641a415ac8db?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1510812431401-41d2cab2707d?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1608270861620-7c3f7ccbe29f?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1584367694821-e6c6dac3f14d?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1609708536965-244d83b47979?w=600&h=600&fit=crop',
];

export default function GallerySection() {
  return (
    <Section className="bg-avorio">
      <Container>
        <div className="mb-16">
          <RevealOnScroll>
            <h2 className="font-playfair text-5xl md:text-6xl font-bold text-center text-nero">
              Momenti da Gremes
            </h2>
          </RevealOnScroll>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <RevealOnScroll key={index} delay={index * 0.05}>
              <div className="group overflow-hidden rounded-lg shadow-lg aspect-square">
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </Section>
  );
}
