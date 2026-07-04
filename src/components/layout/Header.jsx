'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from './Navigation';
import Button from '@/components/ui/button';
import Container from '@/components/common/Container';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-avorio shadow-md' : 'bg-transparent'
      }`}
    >
      <Container className="flex items-center justify-between py-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-playfair text-2xl font-bold text-nero hover:text-oro transition-colors duration-300"
        >
          GREMES
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Navigation mobile={false} />
        </div>

        {/* Right Side: Mobile Nav + CTA Button */}
        <div className="flex items-center gap-4">
          <Navigation mobile={true} />
          <Button variant="primary" className="hidden md:inline-block">
            Prenota Degustazione
          </Button>
        </div>
      </Container>
    </header>
  );
}
