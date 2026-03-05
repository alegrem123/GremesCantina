import React, { useEffect, useRef } from "react";

export default function OwnerPhilosophy() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const els = ref.current?.querySelectorAll(".reveal-op");
          els?.forEach((el, i) => {
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }, i * 180);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .op-root {
          background: #F7F0E6;
          padding: 7rem 2rem;
        }
        .op-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .op-header {
          text-align: center;
          margin-bottom: 4.5rem;
        }
        .op-eyebrow {
          display: block;
          font-family: 'Inter', sans-serif;
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #C9A96E;
          margin-bottom: 1.2rem;
        }
        .op-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 400;
          color: #5B2034;
          line-height: 1.2;
        }
        .op-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }
        .reveal-op {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1);
        }
        .op-card {
          overflow: hidden;
          position: relative;
        }
        .op-card-light {
          background: #E8D5B0;
          border: 1px solid rgba(201,169,110,0.3);
        }
        .op-card-dark {
          background: #5B2034;
        }
        .op-card-img-wrap {
          overflow: hidden;
          height: 320px;
        }
        .op-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.16,1,0.3,1);
        }
        .op-card:hover .op-card-img {
          transform: scale(1.05);
        }
        .op-card-body {
          padding: 2.5rem 2.8rem;
        }
        .op-card-role {
          font-family: 'Inter', sans-serif;
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          margin-bottom: 0.8rem;
        }
        .op-card-light .op-card-role { color: #C9A96E; }
        .op-card-dark .op-card-role { color: rgba(201,169,110,0.8); }

        .op-card-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          font-weight: 500;
          line-height: 1.2;
          margin-bottom: 1.2rem;
        }
        .op-card-light .op-card-name { color: #5B2034; }
        .op-card-dark .op-card-name { color: #F7F0E6; }

        .op-card-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.88rem;
          font-weight: 300;
          line-height: 1.85;
        }
        .op-card-light .op-card-text { color: rgba(58,46,40,0.85); }
        .op-card-dark .op-card-text { color: rgba(247,240,230,0.65); }

        .op-card-quote {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          font-style: italic;
          line-height: 1.6;
          margin-top: 1.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(201,169,110,0.25);
        }
        .op-card-light .op-card-quote { color: #7A2D45; }
        .op-card-dark .op-card-quote { color: #E8D5B0; }

        @media (max-width: 768px) {
          .op-root { padding: 4.5rem 1.5rem; }
          .op-grid { grid-template-columns: 1fr; }
          .op-card-body { padding: 2rem; }
          .op-card-img-wrap { height: 260px; }
        }
      `}</style>

      <section className="op-root" ref={ref}>
        <div className="op-inner">
          <div className="op-header">
            <span className="op-eyebrow reveal-op">Persone &amp; Visione</span>
            <h2 className="op-heading reveal-op">Chi è dietro al calice</h2>
          </div>

          <div className="op-grid">
            <div className="op-card op-card-light reveal-op">
              <div className="op-card-img-wrap">
                <img
                  className="op-card-img"
                  src="/proprietario.jpg"
                  alt="Francesco Gremes, proprietario"
                  loading="lazy"
                />
              </div>
              <div className="op-card-body">
                <p className="op-card-role">Proprietario &amp; Vignaiolo</p>
                <h3 className="op-card-name">Francesco Gremes</h3>
                <p className="op-card-text">
                  Tre generazioni di viticultura trentina convergono nella
                  visione di Francesco: riportare il territorio al centro, riducendo
                  ogni intervento in vigna all'essenziale. Una filosofia di
                  ascolto, non di imposizione.
                </p>
                <p className="op-card-quote">
                  "Il mio compito è togliere, non aggiungere. Il vino lo fa la
                  terra."
                </p>
              </div>
            </div>

            <div className="op-card op-card-dark reveal-op">
              <div className="op-card-img-wrap">
                <img
                  className="op-card-img"
                  src="/vinificazione.jpg"
                  alt="Filosofia del vino Gremes"
                  loading="lazy"
                />
              </div>
              <div className="op-card-body">
                <p className="op-card-role">Filosofia di Cantina</p>
                <h3 className="op-card-name">Il vino come luogo</h3>
                <p className="op-card-text">
                  Nessuna ricetta. Nessun protocollo fisso. Ogni annata è
                  un'interpretazione fedele del millesimo: la scelta della
                  vendemmia, la fermentazione spontanea, l'affinamento in legni
                  neutri e grandi botti testimoniano una cantina che non vuole
                  dominare ma accompagnare.
                </p>
                <p className="op-card-quote">
                  "Il territorio parla. Il vignaiolo traduce."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
