"use client"

import React, { useRef, useState } from "react"

export default function Page() {
  const G = "Inter, system-ui, sans-serif"
  const S = "'Playfair Display', Georgia, serif"

  const refs = {
    resumen: useRef<HTMLElement>(null),
    contexto: useRef<HTMLElement>(null),
    solucion: useRef<HTMLElement>(null),
    impacto: useRef<HTMLElement>(null),
    inversion: useRef<HTMLElement>(null),
    implementacion: useRef<HTMLElement>(null),
    pasos: useRef<HTMLElement>(null),
  }

  const scrollTo = (r: React.RefObject<HTMLElement>) =>
    r.current?.scrollIntoView({ behavior: "smooth", block: "start" })

  const [apendiceOpen, setApendiceOpen] = useState(false)

  const EB: React.CSSProperties = {
    fontFamily: G,
    fontSize: "11px",
    letterSpacing: "0.45em",
    textTransform: "uppercase",
    color: "#999",
    marginBottom: "24px",
  }

  const SUB: React.CSSProperties = {
    fontFamily: G,
    fontSize: "10px",
    letterSpacing: "0.4em",
    textTransform: "uppercase",
    color: "#aaa",
  }

  const SECPAD: React.CSSProperties = {
    padding: "80px clamp(20px,5vw,60px)",
  }

  const MW: React.CSSProperties = {
    maxWidth: "900px",
    margin: "0 auto",
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');

        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html { scroll-behavior: smooth; }

        body {
          font-family: Inter, system-ui, sans-serif;
          background: #fafaf8;
          color: #1a1a1a;
          -webkit-font-smoothing: antialiased;
        }

        .toc-btn {
          display: flex;
          align-items: baseline;
          gap: 16px;
          padding: 16px 0;
          border-top: 1px solid #2e2e2e;
          cursor: pointer;
          background: none;
          width: 100%;
          text-align: left;
          transition: opacity .2s;
        }

        .toc-btn:hover { opacity: .5; }

        .ap-toggle {
          display: flex;
          align-items: center;
          gap: 12px;
          background: none;
          border: 1px solid #e0e0da;
          padding: 16px 24px;
          cursor: pointer;
          width: 100%;
          font-family: Inter, sans-serif;
          font-size: .88rem;
          color: #555;
          text-align: left;
          transition: background .2s;
        }

        .ap-toggle:hover { background: #f0efe9; }

        @media (max-width: 768px) {
          .g2, .g3, .g-impact, .g-inv,
          .g-resp, .g-prog, .g-ctx,
          .g-toc { grid-template-columns: 1fr !important; }

          .g4 { grid-template-columns: 1fr 1fr !important; }
          .g-fases { grid-template-columns: 1fr 1fr !important; }
          .g-kpi { grid-template-columns: 1fr 1fr !important; }
        }

        @media (max-width: 480px) {
          .g4,
          .g-fases,
          .g-kpi { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <main style={{ background: "#fafaf8" }}>
      </main>
    </>
  )
}
