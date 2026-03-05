import React, { useEffect, useRef } from "react";

export default function Hero() {
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const els = [titleRef, subRef, btnRef];
    els.forEach((r, i) => {
      if (r.current) {
        r.current.style.opacity = "0";
        r.current.style.transform = "translateY(28px)";
        setTimeout(
          () => {
            if (r.current) {
              r.current.style.transition =
                "opacity 1.1s cubic-bezier(0.16,1,0.3,1), transform 1.1s cubic-bezier(0.16,1,0.3,1)";
              r.current.style.opacity = "1";
              r.current.style.transform = "translateY(0)";
            }
          },
          400 + i * 220,
        );
      }
    });
  }, []);

  const handleScrollDown = (e) => {
    e.preventDefault();
    const el = document.querySelector("#territorio");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <style>{`
        .hero-root {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 600px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=85&auto=format&fit=crop');
          background-size: cover;
          background-position: center 40%;
          transform: scale(1.04);
          transition: transform 8s ease;
        }
        .hero-bg.loaded {
          transform: scale(1);
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(28,14,10,0.42) 0%,
            rgba(28,14,10,0.58) 50%,
            rgba(28,14,10,0.82) 100%
          );
        }
        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 860px;
          padding: 0 2rem;
          margin-top: -6vh;
        }
        .hero-eyebrow {
          font-family: 'Inter', sans-serif;
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: #C9A96E;
          margin-bottom: 1.5rem;
          display: block;
        }
        .hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          font-weight: 400;
          line-height: 1.08;
          color: #F7F0E6;
          margin-bottom: 1.6rem;
          letter-spacing: -0.01em;
        }
        .hero-title em {
          font-style: italic;
          color: #E8D5B0;
        }
        .hero-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.88rem, 1.5vw, 1.05rem);
          font-weight: 300;
          color: rgba(247,240,230,0.72);
          letter-spacing: 0.04em;
          line-height: 1.7;
          margin-bottom: 2.8rem;
          max-width: 560px;
          margin-left: auto;
          margin-right: auto;
        }
        .hero-cta-group {
          display: flex;
          gap: 1.2rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        .hero-scroll {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          text-decoration: none;
          opacity: 0;
          animation: fadeIn 1s ease 1.4s forwards;
        }
        .hero-scroll-label {
          font-size: 0.58rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(201,169,110,0.7);
          font-family: 'Inter', sans-serif;
        }
        .scroll-line {
          width: 1px;
          height: 50px;
          background: linear-gradient(to bottom, rgba(201,169,110,0.7), transparent);
          animation: scrollPulse 2s ease infinite;
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.6; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @media (max-width: 768px) {
          .hero-content { margin-top: -4vh; }
          .hero-title { font-size: 2.8rem; }
        }
      `}</style>

      <section className="hero-root" role="banner">
        <div
          className="hero-bg"
          ref={(el) => {
            if (el) {
              const img = new Image();
              img.onload = () => el.classList.add("loaded");
              img.src =
                "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=85&auto=format&fit=crop";
            }
          }}
        />
        <div className="hero-overlay" />

        <div className="hero-content">
          <span className="hero-eyebrow">
            Trentino · 600 m s.l.m. · Est. 1987
          </span>
          <h1 className="hero-title" ref={titleRef}>
            Dove la roccia
            <br />
            <em>diventa vino</em>
          </h1>
          <p className="hero-subtitle" ref={subRef}>
            Dal cuore dolomitico del Trentino, Cantina Gremes custodisce vigne
            d'altura per dare vita a vini di carattere autentico e profondità
            memorabile.
          </p>
          <div className="hero-cta-group" ref={btnRef}>
            <a
              className="btn-champagne"
              href="#collezione"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#collezione")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Scopri la Collezione
            </a>
            <a
              className="btn-champagne"
              style={{
                borderColor: "rgba(247,240,230,0.3)",
                color: "rgba(247,240,230,0.8)",
              }}
              href="#esperienze"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#esperienze")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Esperienze in Cantina
            </a>
          </div>
        </div>

        <a
          className="hero-scroll"
          href="#territorio"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#territorio")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          aria-label="Scorri verso il basso"
        >
          <span className="hero-scroll-label">Scopri</span>
          <span className="scroll-line" />
        </a>
      </section>
    </>
  );
}
