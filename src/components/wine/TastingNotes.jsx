'use client';

import Section from '@/components/common/Section';
import Container from '@/components/common/Container';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import { Card } from '@/components/ui/card';

export default function TastingNotes({ tasting }) {
  const notes = [
    {
      label: 'Colore',
      emoji: '🍷',
      value: tasting.color,
    },
    {
      label: 'Profumo',
      emoji: '👃',
      value: Array.isArray(tasting.aroma) ? tasting.aroma.join(', ') : tasting.aroma,
    },
    {
      label: 'Palato',
      emoji: '👅',
      value: tasting.palate,
    },
    {
      label: 'Persistenza',
      emoji: '✨',
      value: tasting.finish,
    },
  ];

  return (
    <Section className="bg-avorio">
      <Container>
        {/* Heading */}
        <h2 className="font-playfair text-3xl font-bold mb-12 text-center text-nero">
          Note di Degustazione
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {notes.map((note, index) => (
            <RevealOnScroll key={note.label} delay={index * 100}>
              <Card className="border-2 border-beige p-6 hover:border-oro transition-colors">
                {/* Emoji */}
                <div className="text-4xl mb-4">{note.emoji}</div>

                {/* Label */}
                <h3 className="font-playfair text-xl font-bold mb-2 text-nero">
                  {note.label}
                </h3>

                {/* Value */}
                <p className="text-sm text-nero opacity-80">
                  {note.value}
                </p>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </Section>
  );
}
