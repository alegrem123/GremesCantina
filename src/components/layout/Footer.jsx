'use client';

import Link from 'next/link';
import Container from '@/components/common/Container';
import config from '@/data/config.json';

const navigationLinks = [
  { label: 'Home', href: '/' },
  { label: 'Storia', href: '/storia' },
  { label: 'Vini', href: '/vini' },
  { label: 'Degustazioni', href: '/degustazioni' },
  { label: 'Contatti', href: '/contatti' },
];

export default function Footer() {
  return (
    <footer className="bg-nero text-avorio py-section-desktop">
      <Container>
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Column 1: Brand */}
          <div>
            <h3 className="text-playfair text-2xl font-bold mb-4">GREMES</h3>
            <p className="text-sm text-avorio text-opacity-75 leading-relaxed">
              Cantina artigianale nella Valle di Non.
            </p>
            <p className="text-sm text-avorio text-opacity-75 leading-relaxed">
              Produciamo vini eccellenti da oltre 130 anni.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-playfair text-lg font-semibold mb-4">
              Esplora
            </h4>
            <nav className="flex flex-col gap-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-avorio text-opacity-75 hover:text-oro transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-playfair text-lg font-semibold mb-4">
              Contatti
            </h4>
            <div className="flex flex-col gap-3 text-sm text-avorio text-opacity-75">
              <p>{config.address.street}</p>
              <p>{config.address.city}</p>
              <a
                href={`mailto:${config.site.email}`}
                className="hover:text-oro transition-colors duration-300"
              >
                {config.site.email}
              </a>
              <a
                href={`tel:${config.site.phone}`}
                className="hover:text-oro transition-colors duration-300"
              >
                {config.site.phone}
              </a>
            </div>
          </div>

          {/* Column 4: Social */}
          <div>
            <h4 className="text-playfair text-lg font-semibold mb-4">
              Seguici
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={config.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-avorio text-opacity-75 hover:text-oro transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href={config.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-avorio text-opacity-75 hover:text-oro transition-colors duration-300"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-avorio border-opacity-20 pt-12 mb-8">
          <h3 className="text-playfair text-xl font-semibold mb-4">
            Iscriviti alla Newsletter
          </h3>
          <p className="text-sm text-avorio text-opacity-75 mb-6">
            Ricevi gli ultimi aggiornamenti, offerte speciali e novità dalla Cantina Gremes.
          </p>
          {/* Placeholder for NewsletterForm (Task 9) */}
          <div className="w-full max-w-sm h-12 bg-avorio bg-opacity-10 rounded-sm flex items-center px-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full bg-transparent text-avorio placeholder-avorio placeholder-opacity-50 outline-none text-sm"
              disabled
            />
            <button
              className="ml-4 text-oro opacity-50 cursor-not-allowed"
              disabled
            >
              Iscriviti
            </button>
          </div>
          <p className="text-xs text-avorio text-opacity-50 mt-3">
            NewsletterForm da implementare in Task 9
          </p>
        </div>

        {/* Copyright */}
        <div className="border-t border-avorio border-opacity-20 pt-8 text-center">
          <p className="text-sm text-avorio text-opacity-60">
            © {new Date().getFullYear()} Cantina Gremes. Tutti i diritti riservati.
          </p>
        </div>
      </Container>
    </footer>
  );
}
