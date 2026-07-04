'use client';

import { useState } from 'react';
import { Section } from '@/components/ui/section';
import { Container } from '@/components/ui/container';

export default function TechnicalDetails({ technical, servingTemp }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Section className="bg-avorio">
      <Container>
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-nero text-avorio px-6 py-4 rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-between"
        >
          <h3 className="font-playfair text-xl font-bold">
            Dettagli Tecnici
          </h3>
          <span
            className={`transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          >
            ▼
          </span>
        </button>

        {/* Expandable Content */}
        {isOpen && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Fermentazione */}
            <div>
              <p className="text-xs uppercase text-gray-600 opacity-60 mb-2">
                Fermentazione
              </p>
              <p className="text-sm text-nero">
                {technical.fermentation}
              </p>
            </div>

            {/* Invecchiamento */}
            <div>
              <p className="text-xs uppercase text-gray-600 opacity-60 mb-2">
                Invecchiamento
              </p>
              <p className="text-sm text-nero">
                {technical.aging}
              </p>
            </div>

            {/* Grado Alcolico */}
            <div>
              <p className="text-xs uppercase text-gray-600 opacity-60 mb-2">
                Grado Alcolico
              </p>
              <p className="text-sm text-nero">
                {technical.abv}
              </p>
            </div>

            {/* Acidità */}
            <div>
              <p className="text-xs uppercase text-gray-600 opacity-60 mb-2">
                Acidità
              </p>
              <p className="text-sm text-nero">
                {technical.acidity}
              </p>
            </div>

            {/* Produzione */}
            <div>
              <p className="text-xs uppercase text-gray-600 opacity-60 mb-2">
                Produzione
              </p>
              <p className="text-sm text-nero">
                {technical.production}
              </p>
            </div>

            {/* Metodo */}
            <div>
              <p className="text-xs uppercase text-gray-600 opacity-60 mb-2">
                Metodo
              </p>
              <p className="text-sm text-nero">
                {technical.method}
              </p>
            </div>

            {/* Temperatura di Servizio */}
            <div>
              <p className="text-xs uppercase text-gray-600 opacity-60 mb-2">
                Temperatura di Servizio
              </p>
              <p className="text-sm text-nero">
                {servingTemp}
              </p>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
