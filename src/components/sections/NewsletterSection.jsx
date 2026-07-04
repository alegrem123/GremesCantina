'use client';

import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import Section from '@/components/common/Section';

// Placeholder for NewsletterForm - to be created in Task 9
function NewsletterForm() {
  return (
    <div className="bg-avorio bg-opacity-10 rounded-lg p-8 backdrop-blur-sm">
      <input
        type="email"
        placeholder="Il tuo indirizzo email"
        className="w-full bg-transparent border-b border-avorio text-avorio placeholder-avorio placeholder-opacity-50 py-3 mb-6 focus:outline-none focus:border-oro transition-colors"
      />
      <button className="w-full bg-oro text-nero font-inter font-medium py-3 rounded-sm hover:bg-avorio transition-colors">
        Iscriviti
      </button>
    </div>
  );
}

export default function NewsletterSection() {
  return (
    <Section className="bg-nero text-avorio">
      <div className="flex items-center justify-center min-h-[600px]">
        <RevealOnScroll>
          <div className="max-w-2xl text-center px-6">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
              Rimani connesso con Gremes
            </h2>
            <p className="font-inter text-lg md:text-xl opacity-85 mb-12">
              News, rilasci, storie dal territorio...
            </p>

            <NewsletterForm />
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
