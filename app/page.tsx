"use client"
import React, { useRef, useState } from "react"

export default function Page() {
  const G = "Inter, system-ui, sans-serif"
  const S = "'Playfair Display', Georgia, serif"

  const refs = {
    resumen:        useRef<HTMLElement>(null),
    contexto:       useRef<HTMLElement>(null),
    impacto:        useRef<HTMLElement>(null),
    solucion:       useRef<HTMLElement>(null),
    financiero:     useRef<HTMLElement>(null),
    inversion:      useRef<HTMLElement>(null),
    implementacion: useRef<HTMLElement>(null),
    pasos:          useRef<HTMLElement>(null),
  }
  const scrollTo = (r: React.RefObject<HTMLElement>) =>
    r.current?.scrollIntoView({ behavior: "smooth", block: "start" })

  const [apendiceOpen, setApendiceOpen] = useState(false)

  const toc = [
    { n: "01", label: "Resumen Ejecutivo", ref: refs.resumen },
    { n: "02", label: "El Contexto", ref: refs.contexto },
    { n: "03", label: "Impacto Humano", ref: refs.impacto },
    { n: "04", label: "La Solución", ref: refs.solucion },
    { n: "05", label: "Impacto Financiero", ref: refs.financiero },
    { n: "06", label: "Inversión", ref: refs.inversion },
    { n: "07", label: "Implementación", ref: refs.implementacion },
    { n: "08", label: "Próximos Pasos", ref: refs.pasos },
  ]

  const challenges = [
    {
      roman: "I",   title: "Calidad de sueño",
      stat: "75%",  statLabel: "de developers remotos reportan problemas de sueño",
      causa: "Pantalla 8–10h diarias, zonas horarias diferenciadas, ciclos circadianos destrozados.",
      impact: "11.3 días de productividad perdida por persona al año",
      source: "Harvard Business Review, 2019",
    },
    {
      roman: "II",  title: "Dolor postural crónico",
      stat: "80%",  statLabel: "experimenta dolor postural crónico por posición de escritorio",
      causa: "Escritorio sin movimiento estructurado, rigidez acumulada e ignorada durante años.",
      impact: "12–15% reducción directa en productividad",
      source: "OSHA – Datos Ocupacionales",
    },
    {
      roman: "III", title: "Estrés y regulación emocional",
      stat: "65%",  statLabel: "reporta estrés crónico sin herramientas de regulación",
      causa: "Aislamiento remoto, control emocional extremo, síndrome del impostor.",
      impact: "18–22% reducción de productividad + riesgo de depresión silenciosa",
      source: "American Psychological Association, 2024",
    },
  ]

  const programas = [
    {
      tag: "14 días", title: "Programa para el insomnio",
      sub: "Meditación · Breathing · Educación",
      result: "+1–2 horas de sueño real",
      science: "Capacidad cognitiva +30% · Riesgo depresión –40% · Concentración +25%",
      source: "Harvard Business Review",
      img: "/images/sleep-wellness.jpg",
    },
    {
      tag: "21 días", title: "Programa para el dolor postural",
      sub: "Yoga · Stretching · Educación",
      result: "–35 a 50% reducción de dolor",
      science: "Ansiedad –40% · Depresión –30% · Autoestima y control mejorados",
      source: "American Psychological Association",
      img: "/images/yoga-nature.jpg",
    },
    {
      tag: "7 días",  title: "Programa para el estrés crónico",
      sub: "Meditación · Breathing · Educación",
      result: "Reducción visible de estrés",
      science: "Depresión clínica –60% · Burnout –50%",
      source: "WHO Global Mental Health Report 2023",
      img: "/images/stress-relief.jpg",
    },
  ]

  const fases = [
    { n: "01", title: "Preparación",  time: "3–4 semanas",    items: ["Setup técnico del acceso corporativo", "Configuración del dashboard privado", "Preparación de materiales de comunicación"] },
    { n: "02", title: "Lanzamiento",  time: "Semana 4–5",     items: ["Presentaciones a equipos pequeños (30–45 min)", "Link de acceso disponible — sin presión", "Soporte técnico activo para dudas"] },
    { n: "03", title: "Monitoreo",    time: "Mes 1, 2 y 3",   items: ["Reportes mensuales de participación agregada", "Feedback recolectado de usuarios activos", "Ajustes si los datos lo indican"] },
    { n: "04", title: "Evaluación",   time: "Final del Mes 3", items: ["Reporte final con datos completos del piloto", "Evaluación de bonos por resultados", "Decisión conjunta: Continuar · Expandir · Pausar"] },
  ]

  const EB: React.CSSProperties = { fontFamily: G, fontSize: "11px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#999", marginBottom: "24px" }
  const SUB: React.CSSProperties = { fontFamily: G, fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#aaa" }
  const SECPAD: React.CSSProperties = { padding: "80px clamp(20px,5vw,60px)" }
  const MW: React.CSSProperties = { maxWidth: "900px", margin: "0 auto" }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: Inter, system-ui, sans-serif; background: #fafaf8; color: #1a1a1a; -webkit-font-smoothing: antialiased; }

        .toc-btn {
          display: flex; align-items: baseline; gap: 16px; padding: 16px 0;
          border-top: 1px solid #2e2e2e; border-bottom: none; border-left: none; border-right: none;
          cursor: pointer; background: none; width: 100%; text-align: left; transition: opacity .2s;
        }
        .toc-btn:hover { opacity: .5; }

        .ap-toggle {
          display: flex; align-items: center; gap: 12px; background: none;
          border: 1px solid #e0e0da; padding: 16px 24px; cursor: pointer;
          width: 100%; font-family: Inter, sans-serif; font-size: .88rem;
          color: #555; text-align: left; transition: background .2s;
        }
        .ap-toggle:hover { background: #f0efe9; }

        @media (max-width: 768px) {
          .g2          { grid-template-columns: 1fr !important; }
          .g3          { grid-template-columns: 1fr !important; }
          .g4          { grid-template-columns: 1fr 1fr !important; }
          .g-toc       { grid-template-columns: 1fr !important; }
          .g-impact    { grid-template-columns: 1fr !important; }
          .g-inv       { grid-template-columns: 1fr !important; }
          .g-resp      { grid-template-columns: 1fr !important; }
          .g-fases     { grid-template-columns: 1fr 1fr !important; }
          .g-kpi       { grid-template-columns: 1fr 1fr !important; }
          .g-prog      { grid-template-columns: 1fr !important; }
          .g-ctx       { grid-template-columns: 1fr !important; }
          .hide-mob    { display: none !important; }
          .hero-metrics{ gap: 20px !important; flex-wrap: wrap; justify-content: center; }
          .prog-img    { height: 240px !important; }
        }
        @media (max-width: 480px) {
          .g-fases { grid-template-columns: 1fr !important; }
          .g4      { grid-template-columns: 1fr !important; }
          .g-kpi   { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <main style={{ background: "#fafaf8" }}>

        {/* ══════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════ */}
        <section style={{ background: "#fff", display: "flex", flexDirection: "column", minHeight: "100svh" }}>

          <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px clamp(20px,5vw,60px)", borderBottom: "1px solid #e8e8e4" }}>
            <span style={{ fontFamily: G, fontSize: "11px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#555", fontWeight: 600 }}>AURA</span>
            <span style={{ fontFamily: G, fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#999" }}>Confidencial · Febrero 2026</span>
          </header>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "56px clamp(20px,5vw,60px) 40px" }}>

            <span style={{ ...SUB, marginBottom: "20px", display: "block", letterSpacing: "0.5em" }}>
              PROPUESTA COMERCIAL · WILLDOM · 2026
            </span>

            <h1 style={{ fontFamily: S, fontWeight: 500, fontSize: "clamp(2.4rem,6vw,5.2rem)", lineHeight: 1.05, color: "#1a1a1a", letterSpacing: "-0.01em", marginBottom: "10px" }}>
              Propuesta Comercial
            </h1>
            <p style={{ fontFamily: S, fontStyle: "italic", fontSize: "clamp(1.1rem,2.5vw,1.8rem)", color: "#666", marginBottom: "20px" }}>
              para Willdom
            </p>

            <div style={{ width: "40px", height: "2px", background: "#1a1a1a", margin: "0 auto 20px" }} />

            <p style={{ fontFamily: S, fontStyle: "italic", fontSize: "clamp(1rem,2vw,1.3rem)", color: "#888", lineHeight: 1.65, maxWidth: "520px", marginBottom: "16px" }}>
              Bienestar integral para el equipo —<br />un piloto de 3 meses con retorno medible.
            </p>

            <p style={{ fontFamily: G, fontSize: "clamp(0.85rem,1.4vw,0.95rem)", color: "#999", textAlign: "center", marginBottom: "28px" }}>
              Un contenedor de bienestar diseñado para sostener procesos reales.
            </p>

            <div style={{ width: "100%", maxWidth: "720px", height: "clamp(200px,32vw,380px)", overflow: "hidden", borderRadius: "12px", marginBottom: "36px", background: "#e8e8e4" }}>
              <img src="/images/hero-meditation.jpg" alt="Persona en calma activa"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%", display: "block" }} />
            </div>

            <div className="hero-metrics" style={{ display: "flex", gap: "48px", alignItems: "center" }}>
              {[
                { val: "3.9×",   label: "ROI estimado" },
                { val: "87",     label: "Developers activos" },
                { val: "$9,300", label: "Inversión base" },
              ].map((m, i, arr) => (
                <React.Fragment key={m.label}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: S, fontSize: "clamp(1.5rem,3vw,2rem)", color: "#1a1a1a", lineHeight: 1 }}>{m.val}</div>
                    <div style={{ fontFamily: G, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#aaa", marginTop: "6px" }}>{m.label}</div>
                  </div>
                  {i < arr.length - 1 && <div className="hide-mob" style={{ width: "1px", height: "32px", background: "#e0e0da" }} />}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", paddingBottom: "24px" }}>
            <div style={{ width: "1px", height: "32px", background: "#ccc" }} />
            <span style={{ fontFamily: G, fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#ccc" }}>Scroll</span>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            TOC
        ══════════════════════════════════════════════ */}
        <section style={{ background: "#1a1a1a", padding: "64px clamp(20px,5vw,60px)" }}>
          <div style={MW}>
            <p style={{ ...EB, color: "#555", marginBottom: "32px" }}>Contenido de la Propuesta</p>
            <div className="g-toc" style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
              {toc.map((t) => (
                <button key={t.n} className="toc-btn" onClick={() => scrollTo(t.ref)}>
                  <span style={{ fontFamily: G, fontSize: "11px", color: "#444", letterSpacing: ".1em", minWidth: "28px" }}>{t.n}</span>
                  <span style={{ fontFamily: S, fontSize: "clamp(1rem,1.8vw,1.2rem)", color: "#e0dfd8", fontWeight: 400 }}>{t.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            01 · RESUMEN EJECUTIVO
        ══════════════════════════════════════════════ */}
        <section ref={refs.resumen} style={{ ...SECPAD, background: "#fafaf8" }}>
          <div style={MW}>
            <p style={EB}>01 · Resumen Ejecutivo</p>

            <h2 style={{ fontFamily: S, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2, marginBottom: "18px" }}>
              Willdom vivió de cerca lo que los datos<br />llevan años diciendo.
            </h2>

            <p style={{ fontFamily: S, fontSize: "clamp(1rem,1.8vw,1.2rem)", fontStyle: "italic", color: "#555", marginBottom: "12px" }}>
              La pregunta que surgió fue inevitable:
            </p>
            <p style={{ fontFamily: S, fontSize: "clamp(1.1rem,2vw,1.45rem)", fontStyle: "italic", color: "#444", marginBottom: "28px", lineHeight: 1.5 }}>
              "¿Cómo mejoramos genuinamente el bienestar de nuestro equipo?"
            </p>

            <p style={{ fontFamily: G, fontSize: "1rem", color: "#555", lineHeight: 1.85, maxWidth: "700px", marginBottom: "48px" }}>
              AURA es la respuesta. Un espacio de bienestar diseñado para developers remotos que cargan con insomnio, dolor postural y estrés crónico. Acceso 24/7, privacidad total, prácticas reales guiadas por especialistas. Sin vigilancia corporativa.
            </p>

            <div style={{ background: "#f0efe9", padding: "24px 32px", marginBottom: "40px", borderLeft: "3px solid #1a1a1a", display: "flex", gap: "40px", flexWrap: "wrap" }}>
              {[
                { val: "3–4 semanas", label: "Setup y presentaciones" },
                { val: "3 meses",     label: "Evaluación completa" },
                { val: "10 de Junio", label: "Evaluación y decisión" },
              ].map((t, i, arr) => (
                <React.Fragment key={t.label}>
                  <div>
                    <p style={{ fontFamily: S, fontSize: "1.05rem", color: "#1a1a1a", marginBottom: "4px" }}>{t.val}</p>
                    <p style={{ fontFamily: G, fontSize: "0.85rem", color: "#777" }}>{t.label}</p>
                  </div>
                  {i < arr.length - 1 && <div className="hide-mob" style={{ width: "1px", background: "#d8d7d0", alignSelf: "stretch" }} />}
                </React.Fragment>
              ))}
            </div>

            <div style={{ borderTop: "1px solid #e0e0da", paddingTop: "40px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))", gap: "32px" }}>
              {[
                { label: "La solución",            value: "AURA",   sub: "Arquitectura del Bienestar" },
                { label: "Participación esperada",  value: "25%",    sub: "87 de 350 developers" },
                { label: "Retorno estimado",        value: "3.9×",   sub: "ROI en 3 meses de piloto" },
                { label: "Inversión base",          value: "$9,300", sub: "Piloto 3 meses · pagos escalonados" },
              ].map((m) => (
                <div key={m.label}>
                  <p style={{ ...SUB, marginBottom: "10px" }}>{m.label}</p>
                  <p style={{ fontFamily: S, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1, marginBottom: "8px" }}>{m.value}</p>
                  <p style={{ fontFamily: G, fontSize: "0.875rem", color: "#777", lineHeight: 1.5 }}>{m.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            02 · EL CONTEXTO
        ══════════════════════════════════════════════ */}
        <section ref={refs.contexto} style={{ ...SECPAD, background: "#f0efe9" }}>
          <div style={MW}>
            <p style={EB}>02 · El Contexto</p>

            <h2 style={{ fontFamily: S, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2, marginBottom: "18px" }}>
              El developer remoto carga con dolor real,<br /><em>sin herramientas para manejarlo.</em>
            </h2>

            <p style={{ fontFamily: G, fontSize: "1rem", color: "#555", lineHeight: 1.85, maxWidth: "680px", marginBottom: "48px" }}>
              No es el estrés normal de un trabajo exigente. Es acumulado, ignorado, y silencioso. La investigación documenta tres áreas donde el impacto es profundo — y medible.
            </p>

            <div style={{ borderTop: "1px solid #d8d7d0" }}>
              {challenges.map((c) => (
                <div key={c.roman} className="g-ctx" style={{ display: "grid", gridTemplateColumns: "40px 1fr 1fr", gap: "clamp(16px,4vw,48px)", padding: "40px 0", borderBottom: "1px solid #d8d7d0", alignItems: "start" }}>

                  <p style={{ fontFamily: S, fontSize: "1.5rem", color: "#ccc", lineHeight: 1, paddingTop: "4px" }}>{c.roman}</p>

                  <div>
                    <h3 style={{ fontFamily: S, fontSize: "clamp(1.2rem,2vw,1.6rem)", fontWeight: 400, marginBottom: "14px" }}>{c.title}</h3>
                    <p style={{ fontFamily: S, fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 400, lineHeight: 1, marginBottom: "8px" }}>{c.stat}</p>
                    <p style={{ fontFamily: G, fontSize: "0.95rem", color: "#666", lineHeight: 1.65, marginBottom: "16px" }}>{c.statLabel}</p>
                    <div style={{ borderTop: "1px solid #d8d7d0", paddingTop: "14px" }}>
                      <p style={{ fontFamily: G, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#bbb", marginBottom: "6px" }}>Causa documentada</p>
                      <p style={{ fontFamily: G, fontSize: "0.88rem", color: "#888", lineHeight: 1.6, fontStyle: "italic" }}>{c.causa}</p>
                    </div>
                  </div>

                  <div style={{ paddingTop: "4px" }}>
                    <p style={{ fontFamily: S, fontSize: "1.05rem", lineHeight: 1.45, marginBottom: "14px" }}>{c.impact}</p>
                    <p style={{ fontFamily: G, fontSize: "0.82rem", color: "#aaa", fontStyle: "italic" }}>{c.source}</p>
                  </div>
                </div>
              ))}
            </div>

            <p style={{ fontFamily: S, fontStyle: "italic", color: "#777", fontSize: "1rem", textAlign: "center", marginTop: "36px" }}>
              Esto fue lo que Willdom vivió de cerca.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            03 · IMPACTO HUMANO (ANTES SECCIÓN 04)
        ══════════════════════════════════════════════ */}
        <section ref={refs.impacto} style={{ ...SECPAD, background: "#f0efe9" }}>
          <div style={MW}>
            <p style={EB}>03 · Impacto Humano</p>

            <h2 style={{
              fontFamily: S,
              fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
              fontWeight: 400,
              lineHeight: 1.2,
              marginBottom: "14px"
            }}>
              El retorno de cuidar a tu equipo.
            </h2>

            <p style={{
              fontFamily: S,
              fontSize: "clamp(1rem,1.8vw,1.2rem)",
              fontStyle: "italic",
              color: "#777",
              lineHeight: 1.6,
              maxWidth: "680px",
              marginBottom: "60px"
            }}>
              Cuidar a las personas y cuidar al negocio no son decisiones separadas. Son la misma.
            </p>

            {/* ───────── BLOQUE 1 · VIDA REAL + IMAGEN ───────── */}

            <p style={{ ...SUB, marginBottom: "20px" }}>
              Impacto en la vida cotidiana
            </p>

            <div style={{
              width: "100%",
              borderRadius: "16px",
              overflow: "hidden",
              background: "#e8e8e4",
              marginBottom: "40px"
            }}>
              <img
                src="/emotional-regulation-man.jpg"
                alt="Persona en presencia consciente con su entorno"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block"
                }}
              />
            </div>

            <div style={{ maxWidth: "760px", marginBottom: "80px" }}>
              <p style={{
                fontFamily: G,
                fontSize: "1rem",
                color: "#555",
                lineHeight: 1.9,
                marginBottom: "24px"
              }}>
                Cuando una persona aprende a regular su sistema nervioso,
                dormir mejor y respirar antes de reaccionar,
                el impacto no se queda en la oficina.
              </p>

              <p style={{
                fontFamily: G,
                fontSize: "1rem",
                color: "#555",
                lineHeight: 1.9,
                marginBottom: "24px"
              }}>
                Se traslada a su casa.<br/>
                A sus relaciones.<br/>
                A cómo responde ante el conflicto.<br/>
                A cómo escucha.<br/>
                A cómo se vincula.
              </p>

              <p style={{
                fontFamily: G,
                fontSize: "1rem",
                color: "#555",
                lineHeight: 1.9,
                marginBottom: "32px"
              }}>
                Una persona regulada piensa antes de actuar,
                responde en lugar de reaccionar,
                reconoce sus emociones sin negarlas
                y toma decisiones con mayor conciencia.
              </p>

              <p style={{
                fontFamily: S,
                fontSize: "clamp(1.4rem,2.5vw,1.8rem)",
                fontStyle: "italic",
                lineHeight: 1.4,
                color: "#1a1a1a"
              }}>
                Equipos más regulados generan familias más estables.<br/>
                Familias más estables sostienen sociedades más sanas.
              </p>
            </div>

            <div className="g-impact" style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0 48px"
            }}>

              <div>
                <p style={{ ...SUB, marginBottom: "20px" }}>
                  Beneficios para las personas
                </p>

                <div style={{ borderTop: "1px solid #d8d7d0", paddingTop: "24px" }}>
                  <h3 style={{
                    fontFamily: S,
                    fontSize: "clamp(1.1rem,1.8vw,1.35rem)",
                    fontWeight: 400,
                    marginBottom: "14px"
                  }}>
                    Regulación emocional sostenida
                  </h3>

                  <ul style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px"
                  }}>
                    {[
                      "Menos ansiedad reactiva",
                      "Mayor claridad mental",
                      "Mejor toma de decisiones",
                      "Prevención de burnout",
                      "Mejores vínculos interpersonales"
                    ].map(item => (
                      <li key={item} style={{
                        display: "flex",
                        gap: "10px",
                        alignItems: "flex-start"
                      }}>
                        <span style={{
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          background: "#999",
                          marginTop: "8px"
                        }} />
                        <span style={{
                          fontFamily: G,
                          fontSize: "0.9rem",
                          color: "#555",
                          lineHeight: 1.6
                        }}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ───────── QUÉ INCLUYE AURA ───────── */}
            <div style={{ marginTop: "64px" }}>

              <p style={{ ...SUB, marginBottom: "32px" }}>
                Qué incluye AURA
              </p>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "24px",
                marginBottom: "40px"
              }}>

                {/* CARD 1 */}
                <div style={{
                  background: "#fff",
                  border: "1px solid #e0e0da",
                  borderRadius: "8px",
                  padding: "24px"
                }}>
                  <p style={{ fontFamily: G, fontWeight: 600, fontSize: "0.95rem", marginBottom: "8px", color: "#1a1a1a" }}>
                    • Biblioteca activa de clases grabadas
                  </p>
                  <p style={{ fontFamily: G, fontSize: "0.95rem", color: "#666", lineHeight: 1.7 }}>
                    Contenido estructurado en video, organizado por áreas y niveles. Cada práctica tiene una intención concreta y una ejecución clara.
                  </p>
                </div>

                {/* CARD 2 */}
                <div style={{
                  background: "#fff",
                  border: "1px solid #e0e0da",
                  borderRadius: "8px",
                  padding: "24px"
                }}>
                  <p style={{ fontFamily: G, fontWeight: 600, fontSize: "0.95rem", marginBottom: "8px", color: "#1a1a1a" }}>
                    • Programas funcionales diseñados para practicarse desde cualquier lugar
                  </p>
                  <p style={{ fontFamily: G, fontSize: "0.95rem", color: "#666", lineHeight: 1.7 }}>
                    Secuencias guiadas paso a paso que permiten sostener un proceso sin depender de horarios fijos ni espacios específicos.
                  </p>
                </div>

                {/* CARD 3 */}
                <div style={{
                  background: "#fff",
                  border: "1px solid #e0e0da",
                  borderRadius: "8px",
                  padding: "24px"
                }}>
                  <p style={{ fontFamily: G, fontWeight: 600, fontSize: "0.95rem", marginBottom: "8px", color: "#1a1a1a" }}>
                    • Sesión semanal en vivo con facilitadores certificados
                  </p>
                  <p style={{ fontFamily: G, fontSize: "0.95rem", color: "#666", lineHeight: 1.7 }}>
                    Práctica en tiempo real orientada a regulación del sistema nervioso, prevención del desgaste emocional y fortalecimiento del bienestar sostenible.
                  </p>
                </div>

                {/* CARD 4 */}
                <div style={{
                  background: "#fff",
                  border: "1px solid #e0e0da",
                  borderRadius: "8px",
                  padding: "24px"
                }}>
                  <p style={{ fontFamily: G, fontWeight: 600, fontSize: "0.95rem", marginBottom: "8px", color: "#1a1a1a" }}>
                    • Nuevos programas lanzados cada mes
                  </p>
                  <p style={{ fontFamily: G, fontSize: "0.95rem", color: "#666", lineHeight: 1.7 }}>
                    Actualización constante con métodos y secuencias funcionales que amplían la biblioteca sin saturarla.
                  </p>
                </div>

                {/* CARD 5 - ANCHO COMPLETO */}
                <div style={{
                  background: "#fff",
                  border: "1px solid #e0e0da",
                  borderRadius: "8px",
                  padding: "24px",
                  gridColumn: "1 / -1"
                }}>
                  <p style={{ fontFamily: G, fontWeight: 600, fontSize: "0.95rem", marginBottom: "8px", color: "#1a1a1a" }}>
                    • Progreso personal visible dentro de la plataforma
                  </p>
                  <p style={{ fontFamily: G, fontSize: "0.95rem", color: "#666", lineHeight: 1.7 }}>
                    Seguimiento individual de prácticas completadas y avance en programas — visible únicamente para el usuario.
                  </p>
                </div>

              </div>

              {/* ÁREAS ACTIVAS */}
              <div style={{ marginBottom: "40px" }}>
                <p style={{ fontFamily: G, fontSize: "0.9rem", color: "#999", fontStyle: "italic" }}>
                  Áreas activas: Yoga · Meditación · Entrenamiento · Respiración
                </p>
              </div>

              {/* FRASE DE CIERRE */}
              <div style={{
                borderTop: "1px solid #e0e0da",
                paddingTop: "32px"
              }}>
                <p style={{
                  fontFamily: S,
                  fontSize: "clamp(1.2rem,2vw,1.5rem)",
                  fontStyle: "italic",
                  lineHeight: 1.5,
                  color: "#1a1a1a"
                }}>
                  Cuando la regulación se sostiene, la estabilidad emocional y el rendimiento también.
                </p>
              </div>

            </div>
        {/* ══════════════════════════════════════════════
            05 · IMPACTO FINANCIERO (NUEVA SECCIÓN)
        ══════════════════════════════════════════════ */}
        <section ref={refs.financiero} style={{ ...SECPAD, background: "#f0efe9" }}>
          <div style={MW}>

            <p style={EB}>05 · Impacto Financiero</p>

            <h2 style={{
              fontFamily: S,
              fontSize: "clamp(1.8rem,3.5vw,2.8rem)",
              fontWeight: 400,
              lineHeight: 1.2,
              marginBottom: "18px"
            }}>
              El bienestar también<br/><em>tiene retorno medible.</em>
            </h2>

            <p style={{
              fontFamily: S,
              fontSize: "clamp(1rem,1.8vw,1.2rem)",
              fontStyle: "italic",
              color: "#777",
              lineHeight: 1.6,
              maxWidth: "680px",
              marginBottom: "60px"
            }}>
              No significa trabajar más horas. Significa trabajar mejor en las mismas horas. Los estudios documentan cuánta productividad se pierde — y cuánta se puede recuperar.
            </p>

            {/* BLOQUE · DATO CIENTÍFICO DOCUMENTADO */}
            <div style={{
              background: "#fff",
              padding: "clamp(32px,5vw,48px)",
              borderRadius: "12px",
              marginBottom: "56px",
              borderTop: "3px solid #1a1a1a"
            }}>
              <p style={{ ...SUB, marginBottom: "16px", textAlign: "center" }}>DATO CIENTÍFICO DOCUMENTADO</p>
              
              <p style={{
                fontFamily: S,
                fontSize: "clamp(2.5rem,6vw,4.5rem)",
                fontWeight: 400,
                lineHeight: 1,
                textAlign: "center",
                marginBottom: "12px"
              }}>
                11.3
              </p>

              <p style={{
                fontFamily: G,
                fontSize: "clamp(0.95rem,1.5vw,1.05rem)",
                color: "#555",
                textAlign: "center",
                marginBottom: "8px"
              }}>
                días de productividad perdida por persona, por año
              </p>

              <p style={{
                fontFamily: G,
                fontSize: "0.82rem",
                color: "#999",
                textAlign: "center",
                fontStyle: "italic"
              }}>
                Harvard Business Review, 2019
              </p>

              <div style={{
                borderTop: "1px solid #e0e0da",
                marginTop: "20px",
                paddingTop: "16px",
                textAlign: "center"
              }}>
                <p style={{
                  fontFamily: G,
                  fontSize: "0.88rem",
                  color: "#777"
                }}>
                  −$2,260 USD · por developer · por año
                </p>
              </div>
            </div>

            {/* GRÁFICAS DE RETORNO */}
            <div style={{ marginBottom: "56px" }}>
              <p style={{ ...SUB, marginBottom: "32px" }}>Retorno estimado por programa (25% participación)</p>

              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "28px"
              }}>
                {[
                  { label: "Sueño",      devs: "35 developers", retorno: "$5,912", pct: 43 },
                  { label: "Movimiento", devs: "30 developers", retorno: "$11,250", pct: 82 },
                  { label: "Estrés",     devs: "22 developers", retorno: "$13,750", pct: 100 },
                ].map((r) => (
                  <div key={r.label} style={{
                    display: "grid",
                    gridTemplateColumns: "140px 1fr auto",
                    gap: "24px",
                    alignItems: "center",
                    paddingBottom: "28px",
                    borderBottom: "1px solid #e0e0da"
                  }}>
                    <div>
                      <p style={{ fontFamily: G, fontSize: "0.95rem", fontWeight: 600, color: "#1a1a1a" }}>
                        {r.label}
                      </p>
                      <p style={{ fontFamily: G, fontSize: "0.82rem", color: "#999", marginTop: "4px" }}>
                        {r.devs}
                      </p>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{
                        width: `${r.pct}%`,
                        height: "8px",
                        background: "#1a1a1a",
                        borderRadius: "2px"
                      }} />
                    </div>

                    <p style={{
                      fontFamily: S,
                      fontSize: "clamp(1.1rem,2vw,1.3rem)",
                      fontWeight: 400,
                      color: "#1a1a1a",
                      whiteSpace: "nowrap"
                    }}>
                      {r.retorno}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* TOTAL */}
            <div style={{
              background: "#fff",
              padding: "clamp(24px,4vw,36px)",
              borderRadius: "8px",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "24px",
              alignItems: "center",
              borderTop: "2px solid #1a1a1a"
            }}>
              <div>
                <p style={{ fontFamily: G, fontSize: "0.9rem", color: "#555" }}>
                  Total recuperado en 3 meses
                </p>
                <p style={{ fontFamily: G, fontSize: "0.82rem", color: "#999", marginTop: "4px" }}>
                  87 developers · supuestos conservadores al 30%
                </p>
              </div>
              <p style={{
                fontFamily: S,
                fontSize: "clamp(1.8rem,3.5vw,2.5rem)",
                fontWeight: 400,
                color: "#1a1a1a"
              }}>
                $30,912
              </p>
            </div>

          </div>
        </section>

        {/* ══════════════════════════════════════════════
            06 · INVERSIÓN
        ══════════════════════════════════════════════ */}
        <section ref={refs.inversion} style={{ ...SECPAD, background: "#fafaf8" }}>
          <div style={MW}>
            <p style={EB}>06 · Inversión</p>

            <h2 style={{ fontFamily: S, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2, marginBottom: "18px" }}>
              Pagamos el éxito juntos.<br />
              <em>Si AURA funciona, ambos lo sabemos.</em>
            </h2>

            <p style={{ fontFamily: G, fontSize: "1rem", color: "#555", lineHeight: 1.85, maxWidth: "680px", marginBottom: "48px" }}>
              La inversión base cubre el piloto completo de 3 meses. Los bonos adicionales solo se activan si se alcanzan los resultados — si no hay resultados, no hay bonos. Willdom tiene acceso al dashboard en tiempo real durante todo el proceso.
            </p>

            <div className="g-inv" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px" }}>

              <div>
                <p style={{ ...SUB, marginBottom: "20px" }}>Cronograma de pagos</p>
                <div style={{ borderTop: "1px solid #e0e0da" }}>
                  {[
                    { n: "01", fecha: "Semana 1 — Anticipado", monto: "$3,100", desc: "Activación del acceso corporativo y setup técnico." },
                    { n: "02", fecha: "15 de Abril — Mes 1",   monto: "$3,100", desc: "Evaluación completa del primer mes." },
                    { n: "03", fecha: "15 de Mayo — Mes 2",    monto: "$3,100", desc: "Evaluación del segundo mes." },
                  ].map((p) => (
                    <div key={p.n} style={{ display: "grid", gridTemplateColumns: "36px 1fr auto", gap: "14px", padding: "22px 0", borderBottom: "1px solid #e0e0da", alignItems: "start" }}>
                      <p style={{ fontFamily: S, fontSize: "1.3rem", color: "#ccc", lineHeight: 1 }}>{p.n}</p>
                      <div>
                        <p style={{ fontFamily: G, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#aaa", marginBottom: "6px" }}>{p.fecha}</p>
                        <p style={{ fontFamily: G, fontSize: "0.88rem", color: "#666", lineHeight: 1.65 }}>{p.desc}</p>
                      </div>
                      <p style={{ fontFamily: S, fontSize: "1.15rem", whiteSpace: "nowrap" }}>{p.monto}</p>
                    </div>
                  ))}
                  <div style={{ display: "grid", gridTemplateColumns: "36px 1fr auto", gap: "14px", padding: "20px", background: "#1a1a1a", alignItems: "center" }}>
                    <div />
                    <p style={{ fontFamily: G, fontSize: "0.92rem", color: "#f0efe9" }}>Total base obligatorio — 3 meses</p>
                    <p style={{ fontFamily: S, fontSize: "1.4rem", color: "#f0efe9" }}>$9,300</p>
                  </div>
                </div>
              </div>

              <div>
                <p style={{ ...SUB, marginBottom: "20px" }}>Bonos adicionales · evaluados al Mes 3</p>
                <div style={{ borderTop: "1px solid #e0e0da", marginBottom: "28px" }}>
                  {[
                    { cond: "Más de 70 usuarios activos en el Mes 1",         bono: "+$1,500" },
                    { cond: "Más de 100 prácticas completadas en Mes 2–3",     bono: "+$2,000" },
                    { cond: "NPS mayor a +5 al finalizar el piloto",           bono: "+$1,000" },
                  ].map((b) => (
                    <div key={b.cond} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "14px", padding: "18px 0", borderBottom: "1px solid #e0e0da" }}>
                      <p style={{ fontFamily: G, fontSize: "0.9rem", color: "#555", lineHeight: 1.5 }}>{b.cond}</p>
                      <p style={{ fontFamily: S, fontSize: "1.1rem", whiteSpace: "nowrap" }}>{b.bono}</p>
                    </div>
                  ))}
                </div>

                <p style={{ ...SUB, marginBottom: "8px" }}>Máximo total</p>
                <p style={{ fontFamily: S, fontSize: "clamp(2.2rem,4.5vw,3.5rem)", fontWeight: 400, lineHeight: 1, marginBottom: "16px" }}>$13,800</p>

                <p style={{ fontFamily: G, fontSize: "0.82rem", color: "#aaa", fontStyle: "italic", lineHeight: 1.7 }}>
                  "Willdom ve en tiempo real qué metas se están cumpliendo. No hay sorpresas."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            07 · IMPLEMENTACIÓN
        ══════════════════════════════════════════════ */}
        <section ref={refs.implementacion} style={{ ...SECPAD, background: "#f0efe9" }}>
          <div style={MW}>
            <p style={EB}>07 · Implementación</p>

            <h2 style={{ fontFamily: S, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2, marginBottom: "18px" }}>
              De la firma al primer resultado:<br /><em>un proceso simple y sin fricción.</em>
            </h2>

            <p style={{ fontFamily: G, fontSize: "1rem", color: "#555", lineHeight: 1.85, maxWidth: "680px", marginBottom: "48px" }}>
              El piloto inicia con el primer pago. En 3–4 semanas el acceso está activo. En la semana 4–5 el equipo ya puede empezar a practicar. La decisión al final del Mes 3 la toman juntos, con datos en mano. Sin promesas, sin presión.
            </p>

            <div className="g-fases" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", border: "1px solid #d8d7d0", marginBottom: "48px" }}>
              {fases.map((f, i) => (
                <div key={f.n} style={{ padding: "28px clamp(16px,2.5vw,28px)", borderRight: i < fases.length - 1 ? "1px solid #d8d7d0" : "none" }}>
                  <p style={{ fontFamily: S, fontSize: "1.8rem", color: "#ccc", lineHeight: 1, marginBottom: "14px" }}>{f.n}</p>
                  <p style={{ fontFamily: G, fontSize: "0.95rem", fontWeight: 600, marginBottom: "4px" }}>{f.title}</p>
                  <p style={{ fontFamily: G, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#bbb", marginBottom: "16px" }}>{f.time}</p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                    {f.items.map((item) => (
                      <li key={item} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                        <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#bbb", flexShrink: 0, marginTop: "8px" }} />
                        <span style={{ fontFamily: G, fontSize: "0.875rem", color: "#666", lineHeight: 1.65 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p style={{ ...EB, marginBottom: "20px" }}>Responsabilidades</p>
            <div className="g-resp" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", border: "1px solid #d8d7d0" }}>
              {[
                {
                  who: "AURA",
                  items: [
                    "Setup técnico y activación del acceso corporativo",
                    "Reportes mensuales de datos agregados — nunca datos personales",
                    "Soporte técnico continuo durante el piloto",
                    "Disponibilidad para reuniones de presentación con los equipos",
                  ],
                },
                {
                  who: "Willdom",
                  items: [
                    "Comunicar al equipo — como invitación. Nunca como obligación.",
                    "Facilitar las reuniones de presentación con equipos pequeños",
                    "Recolectar feedback honesto de quienes usen la plataforma",
                    "Participar en la evaluación final del piloto con criterio abierto",
                  ],
                },
              ].map((r, i) => (
                <div key={r.who} style={{ padding: "clamp(20px,3vw,36px)", borderRight: i === 0 ? "1px solid #d8d7d0" : "none" }}>
                  <p style={{ fontFamily: S, fontSize: "1.25rem", marginBottom: "20px" }}>{r.who}</p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
                    {r.items.map((item) => (
                      <li key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                        <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#888", flexShrink: 0, marginTop: "9px" }} />
                        <span style={{ fontFamily: G, fontSize: "0.9rem", color: "#555", lineHeight: 1.7 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            08 · PRÓXIMOS PASOS
        ══════════════════════════════════════════════ */}
        <section ref={refs.pasos} style={{ ...SECPAD, background: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ maxWidth: "640px", textAlign: "center" }}>
            <p style={{ ...EB, color: "#555" }}>08 · Próximos Pasos</p>

            <h2 style={{ fontFamily: S, fontSize: "clamp(2rem,5vw,4rem)", fontWeight: 400, lineHeight: 1.15, color: "#f0efe9", marginBottom: "20px" }}>
              Una reunión de 30 minutos<br /><em>para cerrar el acuerdo.</em>
            </h2>

            <p style={{ fontFamily: G, fontSize: "1rem", color: "#888", lineHeight: 1.85, marginBottom: "12px" }}>
              Con el equipo de decisión de Willdom. Responder preguntas, ver la plataforma en vivo, firmar.
            </p>

            <p style={{ fontFamily: G, fontSize: "0.88rem", color: "#555", lineHeight: 1.8, marginBottom: "40px" }}>
              El piloto puede iniciar en menos de 4 semanas.<br />
              El equipo puede estar practicando antes de que termine el mes.
            </p>

            <a
              href="mailto:contacto@aura.com"
              style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.25)", color: "#f0efe9", fontFamily: G, fontSize: "0.82rem", letterSpacing: "0.3em", textTransform: "uppercase", padding: "18px 40px", textDecoration: "none", marginBottom: "48px" }}
            >
              Agendar Reunión
            </a>

            <div style={{ borderTop: "1px solid #2e2e2e", paddingTop: "32px" }}>
              <p style={{ ...SUB, color: "#444", marginBottom: "20px" }}>Presentado por</p>
              <div style={{ display: "flex", justifyContent: "center", gap: "clamp(20px,5vw,56px)", flexWrap: "wrap" }}>
                {[
                  { name: "Oscar Xavier Mantilla Sandoval", role: "Founder & Director — AURA" },
                  { name: "Paula Hernández",                role: "Program Co-Lead & Wellness Instructor" },
                ].map((p) => (
                  <div key={p.name} style={{ textAlign: "center" }}>
                    <p style={{ fontFamily: S, fontSize: "1rem", color: "#e0dfd8", marginBottom: "4px" }}>{p.name}</p>
                    <p style={{ fontFamily: G, fontSize: "0.78rem", color: "#555" }}>{p.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════
            APÉNDICES
        ══════════════════════════════════════════════ */}
        <section style={{ background: "#fafaf8", padding: "40px clamp(20px,5vw,60px)" }}>
          <div style={MW}>
            <button className="ap-toggle" onClick={() => setApendiceOpen(!apendiceOpen)}>
              <span style={{ fontFamily: S, fontSize: "1rem", color: "#555" }}>Apéndices</span>
              <span style={{ fontFamily: G, fontSize: "0.82rem", color: "#aaa" }}>Referencias científicas · Fuentes salariales · Metodología</span>
              <span style={{ marginLeft: "auto", fontFamily: G, fontSize: "0.82rem", color: "#aaa" }}>{apendiceOpen ? "Cerrar ↑" : "Ver ↓"}</span>
            </button>

            {apendiceOpen && (
              <div style={{ border: "1px solid #e0e0da", borderTop: "none", padding: "40px" }}>

                <p style={{ ...EB, marginBottom: "20px" }}>A · Referencias Científicas</p>
                {[
                  { n: "1", ref: "Harvard Business Review (2019) — \"The Economic Case for Sleep\"",            hall: "Sleep-deprived workers lose 11.3 days of productivity per year" },
                  { n: "2", ref: "American Psychological Association — \"Physical Activity and Mental Health\"",  hall: "Physical movement reduces anxiety 40%, depression 30%" },
                  { n: "3", ref: "OSHA — Worker Safety Standards, Postural Injuries",                           hall: "Postural pain reduces productivity 12–15%" },
                  { n: "4", ref: "WHO Global Mental Health Report (2023)",                                       hall: "Emotional regulation tools reduce depression risk 60%" },
                ].map((r) => (
                  <div key={r.n} style={{ marginBottom: "16px", paddingBottom: "16px", borderBottom: "1px solid #f0efe9" }}>
                    <p style={{ fontFamily: G, fontSize: "0.88rem", color: "#555", marginBottom: "4px" }}>[{r.n}] {r.ref}</p>
                    <p style={{ fontFamily: G, fontSize: "0.85rem", color: "#999", fontStyle: "italic" }}>Hallazgo: {r.hall}</p>
                  </div>
                ))}

                <p style={{ ...EB, marginBottom: "20px", marginTop: "32px" }}>B · Fuentes Salariales</p>
                {[
                  { ref: "Arc.dev (2024) — Survey de 1,354 remote developers LATAM",  hall: "Mid-level = $40,000/año" },
                  { ref: "Howdy.com (2025) — Verified payroll de 12,500+ developers", hall: "Mid-level = $38,400–52,800/año" },
                  { ref: "Curotec (2025) — Market analysis LATAM developers",          hall: "Mid-level = $45–55/hora" },
                ].map((r) => (
                  <div key={r.ref} style={{ marginBottom: "12px" }}>
                    <p style={{ fontFamily: G, fontSize: "0.88rem", color: "#555", marginBottom: "4px" }}>{r.ref}</p>
                    <p style={{ fontFamily: G, fontSize: "0.85rem", color: "#999", fontStyle: "italic" }}>Hallazgo: {r.hall}</p>
                  </div>
                ))}
                <p style={{ fontFamily: G, fontSize: "0.82rem", color: "#aaa", marginTop: "10px" }}>Referencia: $50,000/año = $200/día (250 días laborales)</p>

                <p style={{ ...EB, marginBottom: "16px", marginTop: "32px" }}>C · Metodología de Cálculo</p>
                <p style={{ fontFamily: G, fontSize: "0.88rem", color: "#666", lineHeight: 1.8, marginBottom: "16px" }}>
                  Participación: 25% (87 de 350) · Sueño 40% = 35 devs · Movimiento 35% = 30 devs · Estrés 25% = 22 devs<br />
                  Beneficios conservadores: Sueño 30% potencial · Movimiento 3% productividad · Estrés 5% productividad
                </p>
                {[
                  { l: "Sueño",      c: "35 × 3.39 días × $200 = $23,730/año", r: "$5,932 en 3 meses" },
                  { l: "Movimiento", c: "30 × $50,000 × 3% = $45,000/año",     r: "$11,250 en 3 meses" },
                  { l: "Estrés",     c: "22 × $50,000 × 5% = $55,000/año",     r: "$13,750 en 3 meses" },
                ].map((c) => (
                  <div key={c.l} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #f0efe9", flexWrap: "wrap", gap: "8px" }}>
                    <span style={{ fontFamily: S, fontSize: "1rem", minWidth: "80px" }}>{c.l}</span>
                    <span style={{ fontFamily: G, fontSize: "0.85rem", color: "#888" }}>{c.c}</span>
                    <span style={{ fontFamily: S, fontSize: "1rem" }}>{c.r}</span>
                  </div>
                ))}
                <div style={{ display: "flex", justifyContent: "space-between", padding: "14px 0", borderTop: "2px solid #1a1a1a" }}>
                  <span style={{ fontFamily: G, fontSize: "0.9rem", color: "#555" }}>Total · Inversión $8,000 · ROI 3.9×</span>
                  <span style={{ fontFamily: S, fontSize: "1.1rem" }}>$30,932</span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ background: "#f0efe9", borderTop: "1px solid #e0e0da", padding: "36px clamp(20px,5vw,60px)" }}>
          <div style={{ ...MW, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px" }}>
            <div>
              <p style={{ fontFamily: S, fontSize: "1.2rem", marginBottom: "4px" }}>AURA</p>
              <p style={{ fontFamily: G, fontSize: "0.82rem", color: "#888" }}>Arquitectura del Bienestar</p>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={{ fontFamily: G, fontSize: "0.78rem", color: "#aaa", marginBottom: "4px" }}>Propuesta Comercial · Willdom · Febrero 2026</p>
              <p style={{ fontFamily: G, fontSize: "0.72rem", color: "#bbb", fontStyle: "italic" }}>Confidencial</p>
            </div>
          </div>
        </footer>

      </main>
    </>
  )
}
