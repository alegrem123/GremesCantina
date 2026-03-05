import React from "react";

const BOTTLE_IMG =
  "/vino.png";

export default function VinoDettaglio({ vino, onClose }) {
  if (!vino) return null;

  return (
    <>
      <style>{`
        .vd-overlay {
          position: fixed;
          inset: 0;
          background: rgba(28,14,10,0.88);
          backdrop-filter: blur(8px);
          z-index: 200;
          overflow-y: auto;
          animation: vdFadeIn 0.4s ease forwards;
        }
        @keyframes vdFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .vd-root {
          max-width: 1100px;
          margin: 0 auto;
          padding: 5rem 2rem 6rem;
          animation: vdSlideUp 0.5s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        @keyframes vdSlideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .vd-close {
          position: fixed;
          top: 2rem;
          right: 2rem;
          background: transparent;
          border: 1px solid rgba(201,169,110,0.4);
          color: #C9A96E;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.2rem;
          transition: all 0.3s ease;
          z-index: 201;
        }
        .vd-close:hover {
          background: rgba(201,169,110,0.15);
        }
        .vd-hero {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: 5rem;
          margin-bottom: 5rem;
          align-items: start;
        }
        .vd-bottle-wrap {
          position: sticky;
          top: 5rem;
          background: #3A2C24;
          padding: 3rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        .vd-bottle-img {
          height: 320px;
          object-fit: contain;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.5));
          transition: transform 0.6s cubic-bezier(0.16,1,0.3,1);
        }
        .vd-bottle-wrap:hover .vd-bottle-img {
          transform: translateY(-8px);
        }
        .vd-bottle-price {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          font-weight: 500;
          color: #C9A96E;
        }
        .vd-buy-btn {
          width: 100%;
          padding: 0.9rem;
          background: #7A2D45;
          border: none;
          color: #F7F0E6;
          font-family: 'Inter', sans-serif;
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .vd-buy-btn:hover { background: #9A4860; }

        .vd-info { }
        .vd-tipo-badge {
          display: inline-block;
          font-family: 'Inter', sans-serif;
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #C9A96E;
          border: 1px solid rgba(201,169,110,0.35);
          padding: 0.3rem 0.8rem;
          margin-bottom: 1.2rem;
        }
        .vd-name {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          font-weight: 400;
          color: #F7F0E6;
          line-height: 1.1;
          margin-bottom: 0.4rem;
        }
        .vd-varietale {
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          font-weight: 300;
          color: rgba(247,240,230,0.5);
          letter-spacing: 0.06em;
          margin-bottom: 2rem;
        }
        .vd-divider {
          width: 48px;
          height: 1px;
          background: #C9A96E;
          margin-bottom: 2rem;
        }
        .vd-desc {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          font-weight: 300;
          color: rgba(247,240,230,0.7);
          line-height: 1.9;
          margin-bottom: 2.5rem;
        }

        .vd-scheda-title {
          font-family: 'Inter', sans-serif;
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #C9A96E;
          margin-bottom: 1.5rem;
          padding-bottom: 0.8rem;
          border-bottom: 1px solid rgba(201,169,110,0.2);
        }
        .vd-scheda-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          margin-bottom: 3rem;
          border: 1px solid rgba(201,169,110,0.15);
        }
        .vd-scheda-item {
          padding: 1rem 1.2rem;
          border-bottom: 1px solid rgba(201,169,110,0.1);
          border-right: 1px solid rgba(201,169,110,0.1);
        }
        .vd-scheda-item:nth-child(even) { border-right: none; }
        .vd-scheda-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(201,169,110,0.6);
          margin-bottom: 0.3rem;
        }
        .vd-scheda-value {
          font-family: 'Inter', sans-serif;
          font-size: 0.86rem;
          font-weight: 300;
          color: rgba(247,240,230,0.8);
          line-height: 1.5;
        }

        .vd-organolettica {
          margin-bottom: 3rem;
        }
        .vd-org-item {
          display: flex;
          align-items: flex-start;
          gap: 1.2rem;
          margin-bottom: 1rem;
        }
        .vd-org-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #C9A96E;
          margin-top: 0.45rem;
          flex-shrink: 0;
        }
        .vd-org-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(201,169,110,0.7);
          min-width: 80px;
          margin-top: 0.3rem;
        }
        .vd-org-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.86rem;
          font-weight: 300;
          color: rgba(247,240,230,0.7);
          line-height: 1.6;
        }

        /* Sezione Processo */
        .vd-processo {
          border-top: 1px solid rgba(201,169,110,0.2);
          padding-top: 4rem;
          margin-top: 1rem;
        }
        .vd-processo-header {
          margin-bottom: 3rem;
        }
        .vd-processo-eyebrow {
          font-family: 'Inter', sans-serif;
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #C9A96E;
          margin-bottom: 1rem;
          display: block;
        }
        .vd-processo-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 400;
          color: #F7F0E6;
          line-height: 1.2;
          margin-bottom: 0.8rem;
        }
        .vd-processo-sub {
          font-family: 'Inter', sans-serif;
          font-size: 0.88rem;
          font-weight: 300;
          color: rgba(247,240,230,0.45);
          line-height: 1.7;
        }
        .vd-steps {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .vd-step {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 0;
          position: relative;
        }
        .vd-step-left {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 0.5rem;
        }
        .vd-step-num {
          width: 40px;
          height: 40px;
          border: 1px solid rgba(201,169,110,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Playfair Display', serif;
          font-size: 0.9rem;
          color: #C9A96E;
          flex-shrink: 0;
        }
        .vd-step-line {
          width: 1px;
          flex: 1;
          background: rgba(201,169,110,0.15);
          margin-top: 0.5rem;
          min-height: 30px;
        }
        .vd-step:last-child .vd-step-line { display: none; }
        .vd-step-content {
          padding: 0 0 3rem 2rem;
        }
        .vd-step-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem;
          font-weight: 500;
          color: #E8D5B0;
          margin-bottom: 0.6rem;
        }
        .vd-step-desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.86rem;
          font-weight: 300;
          color: rgba(247,240,230,0.55);
          line-height: 1.8;
          margin-bottom: 1.2rem;
        }
        .vd-step-media {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.8rem;
        }
        .vd-media-slot {
          aspect-ratio: 4/3;
          background: #3A2C24;
          border: 1px dashed rgba(201,169,110,0.2);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: border-color 0.3s ease, background 0.3s ease;
        }
        .vd-media-slot:hover {
          border-color: rgba(201,169,110,0.5);
          background: #2e2018;
        }
        .vd-media-slot-icon {
          font-size: 1.2rem;
          opacity: 0.4;
        }
        .vd-media-slot-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.6rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(201,169,110,0.4);
        }

        @media (max-width: 900px) {
          .vd-hero { grid-template-columns: 1fr; gap: 2.5rem; }
          .vd-bottle-wrap { position: static; }
          .vd-scheda-grid { grid-template-columns: 1fr; }
          .vd-scheda-item { border-right: none; }
          .vd-step-media { grid-template-columns: repeat(2, 1fr); }
          .vd-root { padding: 3rem 1.2rem 5rem; }
          .vd-close { top: 1rem; right: 1rem; }
        }
        @media (max-width: 600px) {
          .vd-step-media { grid-template-columns: 1fr 1fr; }
          .vd-step { grid-template-columns: 50px 1fr; }
        }
      `}</style>

      <div className="vd-overlay">
        <button className="vd-close" onClick={onClose} aria-label="Chiudi">
          ✕
        </button>
        <div className="vd-root">
          {/* Hero: bottiglia + info principali */}
          <div className="vd-hero">
            <div className="vd-bottle-wrap">
              <img
                className="vd-bottle-img"
                src={vino.img || BOTTLE_IMG}
                alt={vino.name}
              />
              <div className="vd-bottle-price">{vino.prezzo}</div>
              <button className="vd-buy-btn">Acquista</button>
            </div>

            <div className="vd-info">
              <span className="vd-tipo-badge">{vino.tipoLabel}</span>
              <h1 className="vd-name">{vino.name}</h1>
              <p className="vd-varietale">
                {vino.varietale} · Millesimo {vino.annata}
              </p>
              <div className="vd-divider" />
              <p className="vd-desc">{vino.descLunga}</p>

              {/* Scheda tecnica */}
              <p className="vd-scheda-title">Scheda Tecnica</p>
              <div className="vd-scheda-grid">
                {vino.scheda.map((s) => (
                  <div className="vd-scheda-item" key={s.label}>
                    <div className="vd-scheda-label">{s.label}</div>
                    <div className="vd-scheda-value">{s.value}</div>
                  </div>
                ))}
              </div>

              {/* Note organolettiche */}
              <p className="vd-scheda-title">Note Organolettiche</p>
              <div className="vd-organolettica">
                {vino.organolettica.map((o) => (
                  <div className="vd-org-item" key={o.tipo}>
                    <div className="vd-org-dot" />
                    <span className="vd-org-label">{o.tipo}</span>
                    <span className="vd-org-text">{o.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Processo di produzione */}
          <div className="vd-processo">
            <div className="vd-processo-header">
              <span className="vd-processo-eyebrow">
                Dal Vigneto alla Bottiglia
              </span>
              <h2 className="vd-processo-title">
                Il processo di produzione
                <br />
                di {vino.name}
              </h2>
              <p className="vd-processo-sub">
                Ogni fase racconta una scelta. Aggiungi le tue foto e video per
                documentare il percorso autentico di questo vino.
              </p>
            </div>

            <div className="vd-steps">
              {vino.processo.map((step, i) => (
                <div className="vd-step" key={i}>
                  <div className="vd-step-left">
                    <div className="vd-step-num">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="vd-step-line" />
                  </div>
                  <div className="vd-step-content">
                    <h3 className="vd-step-title">{step.titolo}</h3>
                    <p className="vd-step-desc">{step.desc}</p>
                    <div className="vd-step-media">
                      {[0, 1, 2].map((j) => (
                        <div
                          className="vd-media-slot"
                          key={j}
                          title="Aggiungi foto o video"
                        >
                          <span className="vd-media-slot-icon">
                            {j === 2 ? "▶" : "＋"}
                          </span>
                          <span className="vd-media-slot-label">
                            {j === 2 ? "Video" : "Foto"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
