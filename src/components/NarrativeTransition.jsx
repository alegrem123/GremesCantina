import React, { useEffect, useRef } from "react";
import MappaParcelle from "@/components/MappaParcelle";

export default function NarrativeTransition() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const els = ref.current?.querySelectorAll(".fade-target");
          els?.forEach((el, i) => {
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }, i * 180);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .narrative-root {
          background: #332821;
          padding: 6rem 2rem;
          text-align: center;
        }
        .narrative-inner {
          max-width: 720px;
          margin: 0 auto;
        }
        .fade-target {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1);
        }
        .narrative-line {
          display: block;
          width: 60px;
          height: 1px;
          background: #C9A96E;
          margin: 0 auto 2.2rem;
        }
        .narrative-quote {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.5rem, 3vw, 2.1rem);
          font-weight: 400;
          font-style: italic;
          color: #E8D5B0;
          line-height: 1.5;
          margin-bottom: 2rem;
          letter-spacing: 0.01em;
        }
        .narrative-body {
          font-family: 'Inter', sans-serif;
          font-size: 0.92rem;
          font-weight: 300;
          color: rgba(247,240,230,0.55);
          line-height: 1.85;
          letter-spacing: 0.02em;
        }
        .narrative-author {
          margin-top: 2.2rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.62rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #C9A96E;
        }
        @media (max-width: 768px) {
          .narrative-root { padding: 4rem 1.5rem; }
        }
      `}</style>

      <section id="territorio" className="narrative-root" ref={ref}>
        <div className="narrative-inner">
          <span className="narrative-line fade-target" />
          <blockquote className="narrative-quote fade-target">
            "Il vino non si fa in cantina. Si fa in vigna, con pazienza,
            rispetto e la roccia dolomitica sotto ai piedi."
          </blockquote>
          <p className="narrative-body fade-target">
            A Gremes, ogni annata è un dialogo silenzioso tra il vignaiolo e il
            territorio. Le vigne crescono su suoli morenici di media montagna, a
            quote che oscillano tra i 450 e i 650 metri sul livello del mare.
            Escursioni termiche marcate, sole alpino, venti che scendono dalle
            Dolomiti: condizioni che plasmano vini di tensione naturale e
            profondità raramente raggiungibili altrove.
          </p>
          <p className="narrative-author fade-target">
            — Filosofia di Cantina Gremes
          </p>
        </div>
        <MappaParcelle />
      </section>
    </>
  );
}
