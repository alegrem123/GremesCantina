import React, { useEffect, useRef } from "react";

export default function MasoPlotegher() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const els = ref.current?.querySelectorAll(".reveal");
          els?.forEach((el, i) => {
            setTimeout(() => {
              el.style.opacity = "1";
              el.style.transform = "translateY(0)";
            }, i * 200);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .maso-root {
          background: #F0E6D3;
          padding: 0;
          overflow: hidden;
        }
        .maso-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 620px;
        }
        .maso-visual {
          position: relative;
          overflow: hidden;
        }
        .maso-img {
          width: 100%;
          height: 100%;
          min-height: 500px;
          object-fit: cover;
          display: block;
          transition: transform 8s ease;
          transform: scale(1.06);
        }
        .maso-visual:hover .maso-img {
          transform: scale(1.02);
        }
        .maso-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, transparent 60%, rgba(240,230,211,0.15));
        }
        .maso-content {
          padding: 5rem 4.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #F0E6D3;
        }
        .reveal {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1);
        }
        .maso-eyebrow {
          font-family: 'Inter', sans-serif;
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #C9A96E;
          margin-bottom: 1.4rem;
        }
        .maso-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 500;
          color: #3D0D1C;
          line-height: 1.15;
          margin-bottom: 1.8rem;
          letter-spacing: -0.01em;
        }
        .maso-divider {
          width: 48px;
          height: 1px;
          background: #C9A96E;
          margin-bottom: 2rem;
        }
        .maso-text {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 300;
          color: #3A2E28;
          line-height: 1.9;
          margin-bottom: 1.2rem;
          letter-spacing: 0.01em;
        }
        .maso-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-top: 2.5rem;
          padding-top: 2.5rem;
          border-top: 1px solid rgba(201,169,110,0.4);
        }
        .maso-stat-value {
          font-family: 'Playfair Display', serif;
          font-size: 1.9rem;
          font-weight: 500;
          color: #5C1A2E;
          line-height: 1;
          margin-bottom: 0.35rem;
        }
        .maso-stat-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.62rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(58,46,40,0.65);
        }
        .maso-section-divider {
          height: 2px;
          background: linear-gradient(to right, transparent, #C9A96E 30%, #C9A96E 70%, transparent);
        }
        @media (max-width: 900px) {
          .maso-inner { grid-template-columns: 1fr; }
          .maso-visual { min-height: 340px; }
          .maso-img { min-height: 340px; }
          .maso-content { padding: 3rem 2rem; }
          .maso-stats { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>

      <div className="maso-section-divider" />
      <section id="maso" className="maso-root" ref={ref}>
        <div className="maso-inner">
          <div className="maso-visual">
            <img
              className="maso-img"
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85&auto=format&fit=crop"
              alt="Maso Plotegher tra i vigneti trentini"
              loading="lazy"
            />
            <div className="maso-img-overlay" />
          </div>
          <div className="maso-content">
            <p className="maso-eyebrow reveal">Maso Plotegher</p>
            <h2 className="maso-title reveal">
              Un maso di montagna.
              <br />
              Radici profonde
              <br />
              come la roccia.
            </h2>
            <div className="maso-divider reveal" />
            <p className="maso-text reveal">
              Il Maso Plotegher sorge a 580 metri sul livello del mare, su
              terreni di origine morenica plasmati dall'ultima glaciazione. I
              nostri vigneti si estendono su pendii esposti a sud-sudovest, con
              suoli ricchi di minerali e drenaggio naturale perfetto.
            </p>
            <p className="maso-text reveal">
              L'identità del luogo si riflette in ogni calice: la tensione
              minerale del porfido, la freschezza alpina, la complessità che
              solo la quota sa donare.
            </p>
            <div className="maso-stats reveal">
              <div>
                <div className="maso-stat-value">580</div>
                <div className="maso-stat-label">m s.l.m.</div>
              </div>
              <div>
                <div className="maso-stat-value">18</div>
                <div className="maso-stat-label">ettari di vigna</div>
              </div>
              <div>
                <div className="maso-stat-value">1987</div>
                <div className="maso-stat-label">anno di fondazione</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="maso-section-divider" />
    </>
  );
}
