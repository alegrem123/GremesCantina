import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <>
      <style>{`
        .footer-root {
          background: #3D0D1C;
          padding: 0;
        }
        .footer-top {
          padding: 5rem 2rem 4rem;
          border-bottom: 1px solid rgba(201,169,110,0.2);
        }
        .footer-top-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1.5fr;
          gap: 4rem;
        }
        .footer-brand-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          font-weight: 500;
          color: #F7F0E6;
          letter-spacing: 0.04em;
          margin-bottom: 0.3rem;
        }
        .footer-brand-sub {
          font-family: 'Inter', sans-serif;
          font-size: 0.58rem;
          font-weight: 500;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #C9A96E;
          margin-bottom: 1.5rem;
        }
        .footer-brand-desc {
          font-family: 'Inter', sans-serif;
          font-size: 0.84rem;
          font-weight: 300;
          color: rgba(247,240,230,0.5);
          line-height: 1.8;
          max-width: 300px;
        }
        .footer-col-title {
          font-family: 'Inter', sans-serif;
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #C9A96E;
          margin-bottom: 1.5rem;
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .footer-link {
          font-family: 'Inter', sans-serif;
          font-size: 0.84rem;
          font-weight: 300;
          color: rgba(247,240,230,0.55);
          text-decoration: none;
          transition: color 0.25s ease;
          cursor: pointer;
        }
        .footer-link:hover { color: #C9A96E; }
        .footer-contact-item {
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          font-weight: 300;
          color: rgba(247,240,230,0.55);
          line-height: 1.7;
          margin-bottom: 0.5rem;
        }
        .footer-contact-label {
          display: block;
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(201,169,110,0.6);
          margin-bottom: 0.2rem;
        }
        .footer-newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          margin-top: 0.5rem;
        }
        .footer-newsletter-input {
          background: rgba(247,240,230,0.06);
          border: 1px solid rgba(201,169,110,0.2);
          padding: 0.75rem 1rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          font-weight: 300;
          color: #F7F0E6;
          outline: none;
          transition: border-color 0.3s ease;
          width: 100%;
        }
        .footer-newsletter-input::placeholder { color: rgba(247,240,230,0.3); }
        .footer-newsletter-input:focus { border-color: rgba(201,169,110,0.5); }
        .footer-newsletter-btn {
          background: #5C1A2E;
          border: 1px solid #5C1A2E;
          padding: 0.75rem 1.5rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #F7F0E6;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .footer-newsletter-btn:hover { background: #7D2842; border-color: #7D2842; }
        .footer-subscribed {
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          color: #C9A96E;
          font-style: italic;
        }
        .footer-bottom {
          padding: 1.8rem 2rem;
        }
        .footer-bottom-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .footer-legal {
          font-family: 'Inter', sans-serif;
          font-size: 0.72rem;
          font-weight: 300;
          color: rgba(247,240,230,0.3);
        }
        .footer-social {
          display: flex;
          gap: 1.5rem;
        }
        .footer-social-link {
          font-family: 'Inter', sans-serif;
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(247,240,230,0.35);
          text-decoration: none;
          transition: color 0.25s ease;
        }
        .footer-social-link:hover { color: #C9A96E; }
        .footer-age-notice {
          font-family: 'Inter', sans-serif;
          font-size: 0.68rem;
          color: rgba(247,240,230,0.2);
          text-align: center;
          padding: 1rem 2rem;
          border-top: 1px solid rgba(201,169,110,0.08);
        }
        @media (max-width: 900px) {
          .footer-top-inner { grid-template-columns: 1fr 1fr; gap: 2.5rem; }
        }
        @media (max-width: 600px) {
          .footer-top-inner { grid-template-columns: 1fr; gap: 2rem; }
          .footer-top { padding: 3.5rem 1.5rem 3rem; }
          .footer-bottom-inner { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-top">
          <div className="footer-top-inner">
            <div>
              <div className="footer-brand-name">Cantina Gremes</div>
              <div className="footer-brand-sub">Trentino · Alto Adige</div>
              <p className="footer-brand-desc">
                Vignaioli di montagna da tre generazioni. Vini di carattere
                autentico nati a 580 metri tra le Dolomiti trentine.
              </p>
            </div>

            <div>
              <p className="footer-col-title">Navigazione</p>
              <ul className="footer-links">
                {[
                  { label: "Territorio", href: "#territorio" },
                  { label: "Maso Plotegher", href: "#maso" },
                  { label: "Ospitalità", href: "#esperienze" },
                  { label: "Collezione Vini", href: "#collezione" },
                ].map((l) => (
                  <li key={l.href}>
                    <a
                      className="footer-link"
                      href={l.href}
                      onClick={(e) => {
                        e.preventDefault();
                        document
                          .querySelector(l.href)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="footer-col-title">Contatti</p>
              <div>
                <span className="footer-contact-label">Indirizzo</span>
                <p className="footer-contact-item">
                  Via Plotegher 12
                  <br />
                  38123 Trento (TN)
                </p>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <span className="footer-contact-label">Email</span>
                <p className="footer-contact-item">info@cantinagremes.it</p>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <span className="footer-contact-label">Telefono</span>
                <p className="footer-contact-item">+39 0461 123 456</p>
              </div>
            </div>

            <div>
              <p className="footer-col-title">Newsletter</p>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.82rem",
                  fontWeight: 300,
                  color: "rgba(247,240,230,0.5)",
                  lineHeight: 1.7,
                  marginBottom: "1.2rem",
                }}
              >
                Anteprime di annata, eventi esclusivi e allocazioni riservate ai
                soci.
              </p>
              {subscribed ? (
                <p className="footer-subscribed">
                  Grazie, sei iscritto. A presto!
                </p>
              ) : (
                <form
                  className="footer-newsletter-form"
                  onSubmit={handleSubscribe}
                >
                  <input
                    className="footer-newsletter-input"
                    type="email"
                    placeholder="La tua email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-label="Email per newsletter"
                  />
                  <button className="footer-newsletter-btn" type="submit">
                    Iscriviti
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <p className="footer-legal">
              © 2024 Cantina Gremes S.r.l. · P.IVA 01234567890 · Privacy Policy
              · Cookie
            </p>
            <div className="footer-social">
              <a className="footer-social-link" href="#" aria-label="Instagram">
                Instagram
              </a>
              <a className="footer-social-link" href="#" aria-label="Facebook">
                Facebook
              </a>
              <a className="footer-social-link" href="#" aria-label="Vivino">
                Vivino
              </a>
            </div>
          </div>
        </div>

        <p className="footer-age-notice">
          La vendita di bevande alcoliche è riservata ai maggiori di 18 anni.
          Bevi responsabilmente.
        </p>
      </footer>
    </>
  );
}
