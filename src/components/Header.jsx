import React, { useState, useEffect } from "react";

const navLinks = [
  { label: "Territorio", href: "#territorio" },
  { label: "Maso Plotegher", href: "#maso" },
  { label: "Ospitalità", href: "#esperienze" },
  { label: "Collezione", href: "#collezione" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <style>{`
        .header-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          transition: all 0.5s cubic-bezier(0.16,1,0.3,1);
          padding: 1.6rem 0;
        }
        .header-root.scrolled {
          background: rgba(51, 40, 33, 0.94);
          backdrop-filter: blur(12px);
          padding: 1rem 0;
          box-shadow: 0 1px 0 rgba(201,169,110,0.15);
        }
        .header-inner {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 2.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          cursor: pointer;
        }
        .logo-img {
          width: auto;
          height: 24px;
          object-fit: contain;
          display: block;
          background: transparent;
          mix-blend-mode: multiply;
          filter: contrast(1.15);
        }
        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 3rem;
        }
        .nav-link {
          font-family: 'Inter', sans-serif;
          font-size: 0.7rem;
          font-weight: 400;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(247,240,230,0.75);
          text-decoration: none;
          position: relative;
          padding-bottom: 2px;
          transition: color 0.3s ease;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 1px;
          background: #C9A96E;
          transition: width 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .nav-link:hover {
          color: #F7F0E6;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .hamburger-btn {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          width: 36px;
          height: 36px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .hamburger-line {
          height: 1px;
          background: #F7F0E6;
          transition: all 0.35s cubic-bezier(0.16,1,0.3,1);
          transform-origin: center;
        }
        .hamburger-btn.open .hamburger-line:nth-child(1) {
          transform: translateY(6px) rotate(45deg);
        }
        .hamburger-btn.open .hamburger-line:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .hamburger-btn.open .hamburger-line:nth-child(3) {
          transform: translateY(-6px) rotate(-45deg);
        }
        .hamburger-line:nth-child(1) { width: 26px; }
        .hamburger-line:nth-child(2) { width: 20px; }
        .hamburger-line:nth-child(3) { width: 26px; }

        .mobile-menu {
          position: fixed;
          inset: 0;
          background: rgba(51, 40, 33, 0.96);
          backdrop-filter: blur(20px);
          z-index: 99;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 2.5rem;
          transition: opacity 0.4s ease, visibility 0.4s ease;
          opacity: 0;
          visibility: hidden;
        }
        .mobile-menu.open {
          opacity: 1;
          visibility: visible;
        }
        .mobile-nav-link {
          font-family: 'Playfair Display', serif;
          font-size: 2.2rem;
          font-weight: 400;
          color: rgba(247,240,230,0.8);
          text-decoration: none;
          letter-spacing: 0.03em;
          transition: color 0.3s ease;
        }
        .mobile-nav-link:hover {
          color: #C9A96E;
        }
        .mobile-menu-divider {
          width: 40px;
          height: 1px;
          background: rgba(201,169,110,0.4);
        }
        @media (max-width: 768px) {
          .nav-desktop { display: none; }
          .hamburger-btn { display: flex; }
          .header-inner { padding: 0 1.5rem; }
        }
      `}</style>

      <header className={`header-root${scrolled ? " scrolled" : ""}`}>
        <div className="header-inner">
          <a
            className="logo"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            aria-label="Torna all'inizio"
          >
            <img
              className="logo-img"
              src="/logo-cantina.png"
              alt="Logo Cantina Gremes"
            />
          </a>

          <nav
            className="nav-desktop"
            role="navigation"
            aria-label="Navigazione principale"
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                className="nav-link"
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <button
            className={`hamburger-btn${menuOpen ? " open" : ""}`}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </header>

      <nav
        id="mobile-menu"
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        role="navigation"
        aria-label="Menu mobile"
        aria-hidden={!menuOpen}
      >
        {navLinks.map((l, i) => (
          <React.Fragment key={l.href}>
            <a
              className="mobile-nav-link"
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              tabIndex={menuOpen ? 0 : -1}
            >
              {l.label}
            </a>
            {i < navLinks.length - 1 && (
              <span className="mobile-menu-divider" />
            )}
          </React.Fragment>
        ))}
      </nav>
    </>
  );
}
