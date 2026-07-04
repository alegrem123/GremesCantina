'use client';

import { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Storia', href: '/storia' },
  { label: 'Territorio', href: '/territorio' },
  { label: 'Vini', href: '/vini' },
  { label: 'Degustazioni', href: '/degustazioni' },
  { label: 'Galleria', href: '/galleria' },
  { label: 'Contatti', href: '/contatti' },
];

export default function Navigation({ mobile = false }) {
  const [isOpen, setIsOpen] = useState(false);

  if (mobile) {
    return (
      <>
        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1 w-8 h-8 items-center justify-center bg-transparent border-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg
            className={`w-6 h-6 text-nero transition-transform duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-nero bg-opacity-95 z-40 flex flex-col items-center justify-center gap-8">
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 bg-transparent border-none cursor-pointer"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <svg
                className="w-8 h-8 text-avorio"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Menu Items */}
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-playfair text-2xl font-normal text-avorio hover:text-oro transition-colors duration-300"
                style={{
                  animation: isOpen
                    ? `fadeInUp 0.5s ease-out ${index * 0.1}s both`
                    : 'none',
                }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <style>{`
              @keyframes fadeInUp {
                from {
                  opacity: 0;
                  transform: translateY(20px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>
          </div>
        )}
      </>
    );
  }

  // Desktop Navigation
  return (
    <nav className="hidden md:flex gap-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-nero hover:text-oro transition-colors duration-300 font-inter text-sm"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
