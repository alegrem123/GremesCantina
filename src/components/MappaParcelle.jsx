import React, { useState, useRef } from "react";

const parcelle = [
  {
    id: "maso",
    label: "Maso Plotegher",
    tipo: "sede",
    // Posizione sul canvas 800x500
    cx: 390,
    cy: 250,
    rx: 70,
    ry: 55,
    color: "#7A2D45",
    hoverColor: "#9A4860",
    info: {
      luogo: "Maso Plotegher – Trento",
      altitudine: "540–600 m s.l.m.",
      suolo: "Porfido rosso e depositi morenici glaciali",
      vitigni: "Pinot Grigio, Pinot Nero, Teroldego",
      esposizione: "Sud-sudovest",
      note: "Sede storica della cantina. Vigne di proprietà attorno al maso.",
    },
  },
  {
    id: "spagnolli",
    label: "Spagnolli",
    tipo: "vigna",
    cx: 200,
    cy: 160,
    rx: 58,
    ry: 42,
    color: "#7D4E24",
    hoverColor: "#9C6230",
    info: {
      luogo: "Spagnolli – Vallagarina (TN)",
      altitudine: "300–420 m s.l.m.",
      suolo: "Calcare compatto e argille rosse di fondovalle",
      vitigni: "Marzemino, Teroldego, Lagrein",
      esposizione: "Sud",
      note: "Zona di fondovalle con clima più caldo. Dona struttura e morbidezza ai rossi.",
    },
  },
  {
    id: "folgaria",
    label: "Folgaria",
    tipo: "vigna",
    cx: 580,
    cy: 130,
    rx: 65,
    ry: 44,
    color: "#2E5C1A",
    hoverColor: "#3A7D22",
    info: {
      luogo: "Folgaria – Altopiano di Folgaria (TN)",
      altitudine: "900–1100 m s.l.m.",
      suolo: "Dolomia e calcare di alta quota, molto drenante",
      vitigni: "Chardonnay, Pinot Nero (base Trentodoc)",
      esposizione: "Est-sudest",
      note: "Le vigne più alte della selezione. Acidità naturale elevatissima, ideale per la base spumante.",
    },
  },
  {
    id: "dossi",
    label: "I Dossi",
    tipo: "vigna",
    cx: 620,
    cy: 360,
    rx: 60,
    ry: 46,
    color: "#1A3F5C",
    hoverColor: "#22527D",
    info: {
      luogo: "I Dossi – Colline di Trento (TN)",
      altitudine: "380–480 m s.l.m.",
      suolo: "Porfido vulcanico e sabbie grossolane",
      vitigni: "Gewürztraminer, Müller-Thurgau",
      esposizione: "Sud-est",
      note: "Suolo vulcanico ricco di minerali. Conferisce al Gewürz la sua firma aromatica intensa.",
    },
  },
];

// Tracciato SVG decorativo per fiumi/strade
const ROADS = [
  "M 100 300 Q 280 320 390 250 Q 500 180 580 130",
  "M 390 250 Q 480 300 620 360",
  "M 200 160 Q 290 200 390 250",
];

export default function MappaParcelle() {
  const [active, setActive] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const svgRef = React.useRef(null);

  const handleEnter = (p, e) => {
    setActive(p);
    updateTooltipPos(p);
  };

  const handleLeave = () => setActive(null);

  const updateTooltipPos = (p) => {
    setTooltipPos({ x: p.cx, y: p.cy - p.ry - 12 });
  };

  const isAbove = tooltipPos.y < 160;

  return (
    <>
      <style>{`
        .mappa-wrap {
          position: relative;
          width: 100%;
          max-width: 860px;
          margin: 3rem auto 0;
        }
        .mappa-svg {
          width: 100%;
          height: auto;
          display: block;
        }
        .mappa-parcella {
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .mappa-parcella ellipse {
          transition: all 0.25s ease;
          filter: drop-shadow(0 4px 12px rgba(0,0,0,0.35));
        }
        .mappa-parcella:hover ellipse,
        .mappa-parcella.active ellipse {
          filter: drop-shadow(0 6px 20px rgba(0,0,0,0.6));
        }
        .mappa-parcella text {
          pointer-events: none;
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          fill: #F7F0E6;
          dominant-baseline: middle;
          text-anchor: middle;
          opacity: 0.9;
        }
        .mappa-parcella .sub-text {
          font-size: 9px;
          font-weight: 400;
          opacity: 0.65;
          letter-spacing: 0.12em;
        }
        .mappa-road {
          fill: none;
          stroke: rgba(201,169,110,0.2);
          stroke-width: 1.5;
          stroke-dasharray: 5 4;
        }
        .mappa-bg-grid {
          fill: none;
          stroke: rgba(201,169,110,0.06);
          stroke-width: 1;
        }

        /* Tooltip */
        .mappa-tooltip {
          position: absolute;
          pointer-events: none;
          z-index: 10;
          transition: opacity 0.2s ease;
        }
        .mappa-tooltip-inner {
          background: rgba(28,14,10,0.97);
          border: 1px solid rgba(201,169,110,0.35);
          padding: 1.2rem 1.4rem;
          min-width: 240px;
          max-width: 280px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.5);
        }
        .mtt-luogo {
          font-family: 'Playfair Display', serif;
          font-size: 1rem;
          font-weight: 500;
          color: #E8D5B0;
          margin-bottom: 0.2rem;
        }
        .mtt-divider {
          width: 32px;
          height: 1px;
          background: #C9A96E;
          margin: 0.6rem 0 0.8rem;
        }
        .mtt-row {
          display: flex;
          gap: 0.6rem;
          margin-bottom: 0.45rem;
          align-items: flex-start;
        }
        .mtt-label {
          font-family: 'Inter', sans-serif;
          font-size: 0.58rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(201,169,110,0.65);
          min-width: 62px;
          padding-top: 0.05rem;
          flex-shrink: 0;
        }
        .mtt-value {
          font-family: 'Inter', sans-serif;
          font-size: 0.78rem;
          font-weight: 300;
          color: rgba(247,240,230,0.75);
          line-height: 1.5;
        }
        .mtt-note {
          font-family: 'Inter', sans-serif;
          font-size: 0.73rem;
          font-style: italic;
          font-weight: 300;
          color: rgba(247,240,230,0.45);
          line-height: 1.5;
          margin-top: 0.8rem;
          padding-top: 0.8rem;
          border-top: 1px solid rgba(201,169,110,0.12);
        }
        .mappa-legend {
          display: flex;
          gap: 2rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 1.5rem;
        }
        .mappa-legend-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(247,240,230,0.45);
        }
        .mappa-legend-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .mappa-hint {
          text-align: center;
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(201,169,110,0.4);
          margin-top: 1rem;
        }
        @media (max-width: 600px) {
          .mappa-tooltip-inner { min-width: 200px; }
        }
      `}</style>

      <div className="mappa-wrap">
        {/* SVG Map */}
        <svg
          ref={svgRef}
          className="mappa-svg"
          viewBox="0 0 800 500"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Mappa delle parcelle viticole di Cantina Gremes"
        >
          {/* Background */}
          <rect width="800" height="500" fill="#1a110d" rx="4" />

          {/* Grid decorativo */}
          {Array.from({ length: 10 }).map((_, i) => (
            <line
              key={`h${i}`}
              x1="0"
              y1={i * 50}
              x2="800"
              y2={i * 50}
              className="mappa-bg-grid"
            />
          ))}
          {Array.from({ length: 16 }).map((_, i) => (
            <line
              key={`v${i}`}
              x1={i * 50}
              y1="0"
              x2={i * 50}
              y2="500"
              className="mappa-bg-grid"
            />
          ))}

          {/* Contuorno montagne stilizzate */}
          <polyline
            points="0,500 80,320 160,380 240,280 320,320 400,200 480,260 560,180 640,240 720,160 800,220 800,500"
            fill="rgba(201,169,110,0.04)"
            stroke="rgba(201,169,110,0.08)"
            strokeWidth="1.5"
          />

          {/* Strade/fiumi tra le zone */}
          {ROADS.map((d, i) => (
            <path key={i} d={d} className="mappa-road" />
          ))}

          {/* Label "N" bussola */}
          <g transform="translate(750, 50)">
            <circle
              cx="0"
              cy="0"
              r="18"
              fill="none"
              stroke="rgba(201,169,110,0.3)"
              strokeWidth="1"
            />
            <text
              x="0"
              y="1"
              fill="#C9A96E"
              fontSize="12"
              fontWeight="700"
              textAnchor="middle"
              dominantBaseline="middle"
              fontFamily="Inter, sans-serif"
            >
              N
            </text>
            <line
              x1="0"
              y1="-14"
              x2="0"
              y2="-8"
              stroke="#C9A96E"
              strokeWidth="1.5"
            />
          </g>

          {/* Parcelle */}
          {parcelle.map((p) => (
            <g
              key={p.id}
              className={`mappa-parcella${active?.id === p.id ? " active" : ""}`}
              onMouseEnter={(e) => handleEnter(p, e)}
              onMouseLeave={handleLeave}
              onTouchStart={() => setActive(active?.id === p.id ? null : p)}
            >
              <ellipse
                cx={p.cx}
                cy={p.cy}
                rx={p.rx}
                ry={p.ry}
                fill={active?.id === p.id ? p.hoverColor : p.color}
                stroke={
                  active?.id === p.id ? "#C9A96E" : "rgba(201,169,110,0.3)"
                }
                strokeWidth={active?.id === p.id ? "1.5" : "1"}
                opacity={active && active.id !== p.id ? 0.5 : 1}
              />
              {/* Texture punti vigna */}
              {Array.from({ length: 6 }).map((_, i) => (
                <circle
                  key={i}
                  cx={p.cx - 18 + (i % 3) * 18}
                  cy={p.cy - 6 + Math.floor(i / 3) * 12}
                  r="2"
                  fill="rgba(247,240,230,0.12)"
                />
              ))}
              <text x={p.cx} y={p.cy - 5}>
                {p.label}
              </text>
              <text x={p.cx} y={p.cy + 9} className="sub-text">
                {p.info.altitudine.split(" ")[0]}
              </text>
            </g>
          ))}
        </svg>

        {/* Tooltip */}
        {active &&
          (() => {
            // Calcola posizione tooltip in percentuale rispetto all'SVG viewBox
            const svgW = 800,
              svgH = 500;
            const pctX = (active.cx / svgW) * 100;
            const pctY = ((active.cy - active.ry - 16) / svgH) * 100;
            const flipDown = pctY < 28;
            const adjustedY = flipDown
              ? ((active.cy + active.ry + 12) / svgH) * 100
              : pctY;

            return (
              <div
                className="mappa-tooltip"
                style={{
                  left: `${Math.min(Math.max(pctX, 12), 78)}%`,
                  top: `${adjustedY}%`,
                  transform: "translateX(-50%)",
                }}
              >
                <div className="mappa-tooltip-inner">
                  <div className="mtt-luogo">{active.info.luogo}</div>
                  <div className="mtt-divider" />
                  <div className="mtt-row">
                    <span className="mtt-label">Quota</span>
                    <span className="mtt-value">{active.info.altitudine}</span>
                  </div>
                  <div className="mtt-row">
                    <span className="mtt-label">Suolo</span>
                    <span className="mtt-value">{active.info.suolo}</span>
                  </div>
                  <div className="mtt-row">
                    <span className="mtt-label">Vitigni</span>
                    <span className="mtt-value">{active.info.vitigni}</span>
                  </div>
                  <div className="mtt-row">
                    <span className="mtt-label">Espos.</span>
                    <span className="mtt-value">{active.info.esposizione}</span>
                  </div>
                  <p className="mtt-note">{active.info.note}</p>
                </div>
              </div>
            );
          })()}

        {/* Legenda */}
        <div className="mappa-legend">
          <div className="mappa-legend-item">
            <div
              className="mappa-legend-dot"
              style={{ background: "#7A2D45" }}
            />
            Maso Plotegher
          </div>
          <div className="mappa-legend-item">
            <div
              className="mappa-legend-dot"
              style={{ background: "#7D4E24" }}
            />
            Spagnolli
          </div>
          <div className="mappa-legend-item">
            <div
              className="mappa-legend-dot"
              style={{ background: "#2E5C1A" }}
            />
            Folgaria
          </div>
          <div className="mappa-legend-item">
            <div
              className="mappa-legend-dot"
              style={{ background: "#1A3F5C" }}
            />
            I Dossi
          </div>
        </div>
        <p className="mappa-hint">
          — Passa il mouse sulle zone per i dettagli —
        </p>
      </div>
    </>
  );
}
