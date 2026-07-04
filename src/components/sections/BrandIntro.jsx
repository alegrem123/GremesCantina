'use client';

import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import Button from '@/components/ui/button';
import Section from '@/components/common/Section';
import Container from '@/components/common/Container';
import pagesData from '@/data/pages.json';

export default function BrandIntro() {
  const { story } = pagesData;

  return (
    <Section className="bg-avorio">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Column - Text */}
          <RevealOnScroll>
            <div className="space-y-6">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-nero">
                {story.title}
              </h2>
              <p className="font-inter text-lg text-nero leading-relaxed whitespace-pre-line">
                {story.content}
              </p>
              <div className="pt-4">
                <Button variant="primary" href="/storia">
                  Leggi la storia completa
                </Button>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right Column - Image */}
          <RevealOnScroll delay={0.1}>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop"
                alt="Proprietario"
                className="w-full h-auto object-cover"
              />
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </Section>
  );
}
