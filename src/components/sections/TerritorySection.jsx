'use client';

import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { Parallax } from '@/components/animations/Parallax';
import Button from '@/components/ui/button';
import Section from '@/components/common/Section';
import Container from '@/components/common/Container';
import pagesData from '@/data/pages.json';

export default function TerritorySection() {
  const { territory } = pagesData;

  return (
    <Section className="bg-avorio">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Column - Image with Parallax */}
          <RevealOnScroll>
            <Parallax speed={0.25}>
              <div className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1569718212b8-0fb88f5e6888?w=600&h=600&fit=crop"
                  alt="Valle di Non territory"
                  className="w-full h-auto object-cover"
                />
              </div>
            </Parallax>
          </RevealOnScroll>

          {/* Right Column - Text */}
          <RevealOnScroll delay={0.1}>
            <div className="space-y-6">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-nero">
                {territory.title}
              </h2>
              <p className="font-inter text-lg text-nero leading-relaxed whitespace-pre-line">
                {territory.content}
              </p>
              <div className="pt-4">
                <Button variant="primary" href="/territorio">
                  Scopri i Vigneti
                </Button>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </Section>
  );
}
