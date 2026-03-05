import React from "react";

export default function Layout({ children, currentPageName }) {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html, body { 
          margin: 0; 
          padding: 0; 
          background: #F7F0E6;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        #root {
          margin: 0;
          padding: 0;
        }
        .btn-champagne {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 2rem;
          border: 1px solid #C9A96E;
          color: #C9A96E;
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
          background: #C9A96E;
          color: #3D0D1C;
        }
        .btn-burgundy {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 2rem;
          border: 1px solid #5C1A2E;
          color: #F7F0E6;
          background: #5C1A2E;
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
          background: #3D0D1C;
          border-color: #3D0D1C;
        }
      `}</style>
      {children}
    </div>
  );
}
