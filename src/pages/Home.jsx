import React, { useState, useEffect, useRef } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NarrativeTransition from "@/components/NarrativeTransition";
import MasoPlotegher from "@/components/MasoPlotegher";
import OwnerPhilosophy from "@/components/OwnerPhilosophy";
import Esperienze from "@/components/Esperienze";
import Collezione from "@/components/Collezione";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="font-body bg-ivory text-charcoal overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');

        :root {
          --burgundy: #7A2D45;
          --burgundy-deep: #5B2034;
          --burgundy-light: #9A4860;
          --champagne: #C9A96E;
          --champagne-light: #E8D5B0;
          --ivory: #F7F0E6;
          --ivory-warm: #F0E6D3;
          --sand: #DDD0B8;
          --charcoal: #332821;
          --charcoal-soft: #4E4038;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        html {
          scroll-behavior: smooth;
        }

        body {
          font-family: 'Inter', sans-serif;
          background-color: var(--ivory);
          color: var(--charcoal);
        }

        .font-display {
          font-family: 'Playfair Display', serif;
        }

        .font-body {
          font-family: 'Inter', sans-serif;
        }

        .bg-ivory { background-color: var(--ivory); }
        .bg-ivory-warm { background-color: var(--ivory-warm); }
        .bg-burgundy { background-color: var(--burgundy); }
        .bg-burgundy-deep { background-color: var(--burgundy-deep); }
        .bg-champagne { background-color: var(--champagne); }
        .bg-champagne-light { background-color: var(--champagne-light); }
        .bg-sand { background-color: var(--sand); }

        .text-burgundy { color: var(--burgundy); }
        .text-champagne { color: var(--champagne); }
        .text-ivory { color: var(--ivory); }
        .text-charcoal { color: var(--charcoal); }
        .text-charcoal-soft { color: var(--charcoal-soft); }
        .text-sand { color: var(--sand); }

        .divider-champagne {
          height: 1px;
          background: linear-gradient(to right, transparent, var(--champagne), transparent);
          width: 100%;
        }

        .divider-champagne-thick {
          height: 2px;
          background: linear-gradient(to right, transparent, var(--champagne) 30%, var(--champagne) 70%, transparent);
        }

        .section-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--champagne);
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes lineReveal {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fade-up {
          animation: fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease forwards;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }

        .opacity-0-init { opacity: 0; }

        .btn-champagne {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 2rem;
          border: 1px solid var(--champagne);
          color: var(--champagne);
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          background: transparent;
          cursor: pointer;
          transition: all 0.35s ease;
          text-decoration: none;
        }

        .btn-champagne:hover {
          background: var(--champagne);
          color: var(--burgundy-deep);
        }

        .btn-burgundy {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 2rem;
          border: 1px solid var(--burgundy);
          color: var(--ivory);
          background: var(--burgundy);
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.35s ease;
          text-decoration: none;
        }

        .btn-burgundy:hover {
          background: var(--burgundy-deep);
          border-color: var(--burgundy-deep);
        }

        .section-padding {
          padding: 7rem 0;
        }

        @media (max-width: 768px) {
          .section-padding {
            padding: 4.5rem 0;
          }
        }
      `}</style>

      <Header />
      <Hero />
      <NarrativeTransition />
      <MasoPlotegher />
      <OwnerPhilosophy />
      <Esperienze />
      <Collezione />
      <Footer />
    </div>
  );
}
