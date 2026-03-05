import React, { useEffect, useRef } from "react";

const esperienze = [
  {
    icon: "◎",
    title: "Visite & Degustazioni Verticali",
    desc: "Percorsi guidati tra le vigne e in cantina, con degustazioni di annate storiche selezionate.",
    tag: "Su prenotazione",
  },
  {
    icon: "◈",
    title: "Hospitality Privata",
    desc: "Esperienze riservate con accoglienza esclusiva al maso, pensate per collezionisti e appassionati d'alto profilo.",
    tag: "Esclusivo",
  },
  {
    icon: "◇",
    title: "Wine Club & Allocazioni",
    desc: "Accesso prioritario alle uscite limitate, riserve selezionate e allocazioni personalizzate per i soci.",
    tag: "Iscrizione",
  },
  {
    icon: "◉",
    title: "Metodo Classico d'Altura",
    desc: "Masterclass dedicate alle bollicine trentine: affinamento, sboccatura e abbinamenti a tavola.",
    tag: "Workshop",
  },
  {
    icon: "◐",
    title: "Eventi in Vigna",
    desc: "Cene al tramonto, vendemmia partecipata, concerti intimi tra i filari: esperienze indimenticabili nel paesaggio dolomitico.",
    tag: "Stagionale",
  },
  {
    icon: "◑",
    title: "Archivio Riserve",
    desc: "Accesso curato alla biblioteca delle annate: bottiglie selezionate da millesimieccezionali, disponibili per degustazione o acquisto.",
    tag: "Collezione",
  },
];

export default function Esperienze() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const els = ref.current?.querySelectorAll(".esp-card");
          els?.forEach((el, i) => {
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }, i * 100);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .esp-root {
          background: #332821;
          padding: 7rem 2rem;
        }
        .esp-inner {
          max-width: 1200px;
          margin: 0 auto;
        }
        .esp-header {
          text-align: center;
          margin-bottom: 4.5rem;
        }
        .esp-eyebrow {
          display: block;
          font-family: 'Inter', sans-serif;
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #C9A96E;
          margin-bottom: 1.2rem;
        }
        .esp-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 400;
          color: #F7F0E6;
          line-height: 1.2;
          margin-bottom: 1.2rem;
        }
        .esp-subheading {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 300;
          color: rgba(247,240,230,0.5);
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.7;
        }
        .esp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5px;
          background: rgba(201,169,110,0.15);
        }
        .esp-card {
          background: #332821;
          padding: 3rem 2.5rem;
          border: 1px solid rgba(201,169,110,0.08);
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1), background 0.35s ease;
          cursor: default;
        }
        .esp-card:hover {
          background: #3A2C24;
        }
        .esp-icon {
          font-size: 1.3rem;
          color: #C9A96E;
          margin-bottom: 1.5rem;
          display: block;
          opacity: 0.8;
        }
        .esp-tag {
          display: inline-block;
          font-family: 'Inter', sans-serif;
          font-size: 0.58rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(201,169,110,0.65);
          margin-bottom: 0.8rem;
        }
        .esp-card-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem;
          font-weight: 500;
          color: #E8D5B0;
          line-height: 1.3;
          margin-bottom: 1rem;
        }
        .esp-card-desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.84rem;
          font-weight: 300;
          color: rgba(247,240,230,0.5);
          line-height: 1.8;
        }
        .esp-card-arrow {
          display: inline-block;
          margin-top: 1.5rem;
          font-size: 0.7rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(201,169,110,0.5);
          font-family: 'Inter', sans-serif;
          transition: color 0.3s ease;
        }
        .esp-card:hover .esp-card-arrow {
          color: #C9A96E;
        }
        .esp-cta {
          text-align: center;
          margin-top: 3.5rem;
        }
        @media (max-width: 900px) {
          .esp-grid { grid-template-columns: repeat(2, 1fr); }
          .esp-root { padding: 4.5rem 1.5rem; }
        }
        @media (max-width: 600px) {
          .esp-grid { grid-template-columns: 1fr; }
          .esp-card { padding: 2.2rem 1.8rem; }
        }
      `}</style>

      <section id="esperienze" className="esp-root" ref={ref}>
        <div className="esp-inner">
          <div className="esp-header">
            <span className="esp-eyebrow">Ospitalità</span>
            <h2 className="esp-heading">Esperienze al Maso</h2>
            <p className="esp-subheading">
              Non solo vino. Una filosofia di accoglienza che trasforma ogni
              visita in un'esperienza autentica di territorio.
            </p>
          </div>

          <div className="esp-grid">
            {esperienze.map((e, i) => (
              <div className="esp-card" key={i}>
                <span className="esp-icon">{e.icon}</span>
                <span className="esp-tag">{e.tag}</span>
                <h3 className="esp-card-title">{e.title}</h3>
                <p className="esp-card-desc">{e.desc}</p>
                <span className="esp-card-arrow">Scopri →</span>
              </div>
            ))}
          </div>

          <div className="esp-cta">
            <a
              className="btn-champagne"
              href="mailto:ospitalita@cantinagremes.it"
            >
              Richiedi Informazioni
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
