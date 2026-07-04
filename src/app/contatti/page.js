import { Parallax } from '@/components/animations/Parallax';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
import Section from '@/components/common/Section';
import Container from '@/components/common/Container';
import ContactForm from '@/components/forms/ContactForm';
import config from '@/data/config.json';

export const metadata = {
  title: 'Contatti | Cantina Gremes',
  description: 'Contattaci per prenotare una degustazione, richiedere informazioni sui nostri vini o visitare la cantina.',
  openGraph: {
    title: 'Contatti | Cantina Gremes',
    description: 'Contattaci per prenotare esperienze e degustazioni.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 md:h-screen flex items-center justify-center overflow-hidden">
        {/* Background with Parallax */}
        <Parallax speed={0.3}>
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=85&auto=format&fit=crop"
            alt="Cantina Gremes"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </Parallax>

        {/* Overlay */}
        <div className="absolute inset-0 bg-nero bg-opacity-40" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-avorio max-w-3xl px-6">
          <RevealOnScroll>
            <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6">
              Contattaci
            </h1>
            <p className="font-inter text-lg md:text-xl opacity-90">
              Siamo qui per rispondere a tutte le tue domande
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Contact Content Section */}
      <Section className="bg-avorio">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Left Column - Contact Information */}
            <RevealOnScroll>
              <div className="space-y-8">
                <div>
                  <h2 className="font-playfair text-3xl md:text-4xl font-bold text-nero mb-8">
                    Informazioni di Contatto
                  </h2>
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <h3 className="font-playfair text-xl font-bold text-nero">
                    Indirizzo
                  </h3>
                  <p className="font-inter text-nero leading-relaxed">
                    {config.contact.address}
                  </p>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <h3 className="font-playfair text-xl font-bold text-nero">
                    Telefono
                  </h3>
                  <p className="font-inter text-nero">
                    <a
                      href={`tel:${config.contact.phone}`}
                      className="hover:text-oro transition-colors"
                    >
                      {config.contact.phone}
                    </a>
                  </p>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <h3 className="font-playfair text-xl font-bold text-nero">
                    Email
                  </h3>
                  <p className="font-inter text-nero">
                    <a
                      href={`mailto:${config.contact.email}`}
                      className="hover:text-oro transition-colors"
                    >
                      {config.contact.email}
                    </a>
                  </p>
                </div>

                {/* Hours */}
                <div className="space-y-2">
                  <h3 className="font-playfair text-xl font-bold text-nero">
                    Orari di Apertura
                  </h3>
                  <div className="font-inter text-nero space-y-1">
                    <p>Lunedì - Venerdì: 09:00 - 18:00</p>
                    <p>Sabato: 10:00 - 16:00</p>
                    <p>Domenica: Chiuso</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="space-y-2 pt-4">
                  <h3 className="font-playfair text-xl font-bold text-nero">
                    Seguici
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="text-nero hover:text-oro transition-colors"
                      title="Facebook"
                    >
                      <span className="sr-only">Facebook</span>
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-nero hover:text-oro transition-colors"
                      title="Instagram"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <path
                          d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Right Column - Contact Form */}
            <RevealOnScroll delay={0.1}>
              <div className="bg-beige rounded-lg p-8 shadow-md">
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-nero mb-8">
                  Scrivici
                </h2>
                <ContactForm />
              </div>
            </RevealOnScroll>
          </div>
        </Container>
      </Section>

      {/* Map Section (Placeholder) */}
      <Section className="bg-beige">
        <Container>
          <RevealOnScroll>
            <div className="rounded-lg overflow-hidden shadow-lg h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <p className="font-playfair text-2xl font-bold text-nero mb-2">
                  Mappa
                </p>
                <p className="font-inter text-nero">
                  Visita Cantina Gremes nella Valle di Non
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </Container>
      </Section>
    </>
  );
}
