"use client"
import React, { useRef, useState } from "react"

export default function Page() {
  const G = "Inter, system-ui, sans-serif"
  const S = "'Playfair Display', Georgia, serif"

  // Referencias para el scroll suave
  const refs = {
    resumen:        useRef(null),
    contexto:       useRef(null),
    solucion:       useRef(null),
    impacto:        useRef(null),
    inversion:      useRef(null),
    implementacion: useRef(null),
    pasos:          useRef(null),
  }

  const scrollTo = (r) =>
    r.current?.scrollIntoView({ behavior: "smooth", block: "start" })

  const [apendiceOpen, setApendiceOpen] = useState(false)

  const toc = [
    { n: "01", label: "Resumen Ejecutivo",  ref: refs.resumen },
    { n: "02", label: "El Contexto",        ref: refs.contexto },
    { n: "03", label: "La Solución",        ref: refs.solucion },
    { n: "04", label: "El Impacto",         ref: refs.impacto },
    { n: "05", label: "Inversión",          ref: refs.inversion },
    { n: "06", label: "Implementación",     ref: refs.implementacion },
    { n: "07", label: "Próximos Pasos",     ref: refs.pasos },
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
      tag: "14 días", title: "Para el insomnio",
      sub: "Meditación · Breathing · Educación",
      result: "+1–2 horas de sueño real",
      science: "Capacidad cognitiva +30% · Riesgo depresión –40% · Concentración +25%",
      source: "Harvard Business Review",
      img: "/images/sleep-wellness.jpg",
    },
    {
      tag: "21 días", title: "Para el dolor postural",
      sub: "Yoga · Stretching · Educación",
      result: "–35 a 50% reducción de dolor",
      science: "Ansiedad –40% · Depresión –30% · Autoestima y control mejorados",
      source: "American Psychological Association",
      img: "/images/yoga-nature.jpg",
    },
    {
      tag: "7 días",  title: "Para el estrés crónico",
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

  // Estilos reutilizables
  const EB = { fontFamily: G, fontSize: "11px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#999", marginBottom: "24px" }
  const SUB = { fontFamily: G, fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#aaa" }
  const SECPAD = { padding: "80px clamp(20px,5vw,60px)" }
  const MW = { maxWidth: "900px", margin: "0 auto" }

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

        {/* HERO */}
        <section style={{ background: "#fff", display: "flex", flexDirection: "column", minHeight: "100svh" }}>
          <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px clamp(20px,5vw,60px)", borderBottom: "1px solid #e8e8e4" }}>
            <span style={{ fontFamily: G, fontSize: "11px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#555", fontWeight: 600 }}>AURA</span>
            <span style={{ fontFamily: G, fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#999" }}>Confidencial · Febrero 2026</span>
          </header>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "56px clamp(20px,5vw,60px) 40px" }}>
            <span style={{ ...SUB, marginBottom: "20px", display: "block", letterSpacing: "0.5em" }}>PROPUESTA COMERCIAL · WILLDOM · 2026</span>
            <h1 style={{ fontFamily: S, fontWeight: 500, fontSize: "clamp(2.4rem,6vw,5.2rem)", lineHeight: 1.05, color: "#1a1a1a", letterSpacing: "-0.01em", marginBottom: "10px" }}>Propuesta Comercial</h1>
            <p style={{ fontFamily: S, fontStyle: "italic", fontSize: "clamp(1.1rem,2.5vw,1.8rem)", color: "#666", marginBottom: "20px" }}>para Willdom</p>
            <div style={{ width: "40px", height: "2px", background: "#1a1a1a", margin: "0 auto 20px" }} />
            <p style={{ fontFamily: S, fontStyle: "italic", fontSize: "clamp(1rem,2vw,1.3rem)", color: "#888", lineHeight: 1.65, maxWidth: "520px", marginBottom: "16px" }}>Bienestar integral para el equipo —<br />un piloto de 3 meses con retorno medible.</p>
            <p style={{ fontFamily: G, fontSize: "clamp(0.85rem,1.4vw,0.95rem)", color: "#999", textAlign: "center", marginBottom: "28px" }}>Un contenedor de bienestar diseñado para sostener procesos reales.</p>

            <div style={{ width: "100%", maxWidth: "720px", height: "clamp(200px,32vw,380px)", overflow: "hidden", borderRadius: "12px", marginBottom: "36px", background: "#e8e8e4" }}>
              <img src="/images/hero-meditation.jpg" alt="Persona en calma activa" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%", display: "block" }} />
            </div>

            <div className="hero-metrics" style={{ display: "flex", gap: "48px", alignItems: "center" }}>
              {[
                { val: "3.9×",   label: "ROI estimado" },
                { val: "87",     label: "Developers activos" },
                { val: "$8,000", label: "Inversión base" },
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
        </section>

        {/* TOC */}
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

        {/* 01 · RESUMEN EJECUTIVO */}
        <section ref={refs.resumen} style={{ ...SECPAD, background: "#fafaf8" }}>
          <div style={MW}>
            <p style={EB}>01 · Resumen Ejecutivo</p>
            <h2 style={{ fontFamily: S, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2, marginBottom: "18px" }}>Willdom vivió de cerca lo que los datos<br />llevan años diciendo.</h2>
            <p style={{ fontFamily: S, fontSize: "clamp(1rem,1.8vw,1.2rem)", fontStyle: "italic", color: "#555", marginBottom: "12px" }}>La pregunta que surgió fue inevitable:</p>
            <p style={{ fontFamily: S, fontSize: "clamp(1.1rem,2vw,1.45rem)", fontStyle: "italic", color: "#444", marginBottom: "28px", lineHeight: 1.5 }}>"¿Cómo mejoramos genuinamente el bienestar de nuestro equipo?"</p>
            <p style={{ fontFamily: G, fontSize: "1rem", color: "#555", lineHeight: 1.85, maxWidth: "700px", marginBottom: "48px" }}>AURA es la respuesta. Un espacio de bienestar diseñado para developers remotos que cargan con insomnio, dolor postural y estrés crónico. Acceso 24/7, privacidad total, prácticas reales guiadas por especialistas. Sin vigilancia corporativa.</p>

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
                { label: "Inversión base",          value: "$8,000", sub: "Piloto 3 meses · pagos escalonados" },
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

        {/* 02 · EL CONTEXTO */}
        <section ref={refs.contexto} style={{ ...SECPAD, background: "#f0efe9" }}>
          <div style={MW}>
            <p style={EB}>02 · El Contexto</p>
            <h2 style={{ fontFamily: S, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2, marginBottom: "18px" }}>El developer remoto carga con dolor real,<br /><em>sin herramientas para manejarlo.</em></h2>
            <p style={{ fontFamily: G, fontSize: "1rem", color: "#555", lineHeight: 1.85, maxWidth: "680px", marginBottom: "48px" }}>No es el estrés normal de un trabajo exigente. Es acumulado, ignorado, y silencioso. La investigación documenta tres áreas donde el impacto es profundo — y medible.</p>

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
          </div>
        </section>

        {/* 03 · LA SOLUCIÓN */}
        <section ref={refs.solucion} style={{ ...SECPAD, background: "#fafaf8" }}>
          <div style={MW}>
            <p style={EB}>03 · La Solución</p>
            <h2 style={{ fontFamily: S, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2, marginBottom: "18px" }}>AURA · Arquitectura del Bienestar.<br /><em>No un beneficio. Un espacio.</em></h2>
            <p style={{ fontFamily: G, fontSize: "1rem", color: "#555", lineHeight: 1.85, maxWidth: "700px", marginBottom: "48px" }}>Tu equipo entra por voluntad propia — sin presión, sin integración con sistemas corporativos, sin vigilancia. Lo que pasa adentro es de ellos. Lo que Willdom ve son los resultados.</p>

            <div className="g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: "1px solid #e0e0da", borderBottom: "1px solid #e0e0da", marginBottom: "56px" }}>
              {[
                { n: "01", label: "Prácticas Reales", body: "Meditación, yoga, breathing y educación guiados por especialistas certificados. Basados en investigación científica, diseñados para resolver problemas específicos — no para llenar un calendario de beneficios." },
                { n: "02", label: "Estructura Sin Fricción", body: "Programas con inicio, proceso y resultado claros. No son challenges que pueden fallar — generan logro genuino. Cada práctica tiene claridad de qué esperar y qué cambia." },
                { n: "03", label: "Privacidad Total", body: "Tu equipo entra. Lo que pasa adentro, es de ellos. Espacio completamente separado de los sistemas corporativos. Sin vigilancia, sin reportes individuales. Datos 100% privados." },
                { n: "04", label: "Comunidad Global", body: "Parte de una plataforma abierta al público general. Usuarios de distintas industrias, roles y contextos. La sensación real de no estar solo en el desafío." },
              ].map((p, i) => (
                <div key={p.label} style={{
                  padding: "32px",
                  borderRight: i % 2 === 0 ? "1px solid #e0e0da" : "none",
                  borderTop: i >= 2 ? "1px solid #e0e0da" : "none",
                }}>
                  <p style={{ ...SUB, marginBottom: "12px" }}>{p.n}</p>
                  <h3 style={{ fontFamily: S, fontSize: "1.3rem", fontWeight: 400, marginBottom: "10px" }}>{p.label}</h3>
                  <p style={{ fontFamily: G, fontSize: "0.95rem", color: "#666", lineHeight: 1.78 }}>{p.body}</p>
                </div>
              ))}
            </div>

            <div className="g4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "24px", marginBottom: "56px" }}>
              {[
                { n: "1", label: "Acceso privado", desc: "Link separado — no integrado en sistemas corporativos. Login individual. Datos 100% privados desde el inicio." },
                { n: "2", label: "Elige tu camino", desc: "Cada persona selecciona según su necesidad real. Sin presión para elegir correctamente. La plataforma guía." },
                { n: "3", label: "Práctica en vivo", desc: "Acceso 24/7. Sin horarios fijos. Tu ritmo, tu tiempo, sin compromisos rígidos." },
                { n: "4", label: "Datos agregados", desc: "Willdom ve participación y retención general — nunca datos individuales ni personales." },
              ].map((s) => (
                <div key={s.n} style={{ borderTop: "3px solid #1a1a1a", paddingTop: "18px" }}>
                  <p style={{ fontFamily: S, fontSize: "2.2rem", lineHeight: 1, marginBottom: "12px" }}>{s.n}</p>
                  <p style={{ fontFamily: G, fontSize: "0.95rem", fontWeight: 600, marginBottom: "8px" }}>{s.label}</p>
                  <p style={{ fontFamily: G, fontSize: "0.88rem", color: "#666", lineHeight: 1.72 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 04 · EL IMPACTO */}
        <section ref={refs.impacto} style={{ ...SECPAD, background: "#f0efe9" }}>
          <div style={MW}>
            <p style={EB}>04 · El Impacto</p>
            <h2 style={{ fontFamily: S, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2, marginBottom: "14px" }}>El retorno de cuidar a tu equipo.</h2>
            <p style={{ fontFamily: S, fontSize: "clamp(1rem,1.8vw,1.2rem)", fontStyle: "italic", color: "#777", lineHeight: 1.6, maxWidth: "680px", marginBottom: "60px" }}>Cuidar a las personas y cuidar al negocio no son decisiones separadas. Son la misma.</p>

            <div style={{ width: "100%", borderRadius: "16px", overflow: "hidden", background: "#e8e8e4", marginBottom: "40px" }}>
              <img src="/images/stress-relief.jpg" alt="Regulación emocional" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>

            <div style={{ maxWidth: "760px", marginBottom: "80px" }}>
              <p style={{ fontFamily: G, fontSize: "1rem", color: "#555", lineHeight: 1.9, marginBottom: "24px" }}>Cuando una persona aprende a regular su sistema nervioso, dormir mejor y respirar antes de reaccionar, el impacto no se queda en la oficina.</p>
              <p style={{ fontFamily: S, fontSize: "clamp(1.4rem,2.5vw,1.8rem)", fontStyle: "italic", lineHeight: 1.4, color: "#1a1a1a" }}>Equipos más regulados generan familias más estables.<br />Familias más estables sostienen sociedades más sanas.</p>
            </div>
          </div>
        </section>

        {/* 05 · INVERSIÓN */}
        <section ref={refs.inversion} style={{ ...SECPAD, background: "#fafaf8" }}>
          <div style={MW}>
            <p style={EB}>05 · Inversión</p>
            <h2 style={{ fontFamily: S, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", fontWeight: 400, lineHeight: 1.2, marginBottom: "18px" }}>Pagamos el éxito juntos.<br /><em>Si AURA funciona, ambos lo sabemos.</em></h2>
            
            <div className="g-inv" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px" }}>
              <div>
                <p style={{ ...SUB, marginBottom: "20px" }}>Cronograma de pagos</p>
                <div style={{ borderTop: "1px solid #e0e0da" }}>
                  {[
                    { n: "01", fecha: "Semana 1 — Anticipado", monto: "$3,000", desc: "Activación del acceso corporativo y setup técnico." },
                    { n: "02", fecha: "15 de Abril — Mes 1",   monto: "$2,500", desc: "Evaluación completa del primer mes." },
                    { n: "03", fecha: "15 de Mayo — Mes 2",    monto: "$2,500", desc: "Evaluación del segundo mes." },
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
                    <p style={{ fontFamily: S, fontSize: "1.4rem", color: "#f0efe9" }}>$8,000</p>
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
                <p style={{ fontFamily: S, fontSize: "clamp(2.2rem,4.5vw,3.5rem)", fontWeight: 400, lineHeight: 1, marginBottom: "16px" }}>$12,500</p>
              </div>
            </div>
          </div>
        </section>

        {/* 07 · PRÓXIMOS PASOS */}
        <section ref={refs.pasos} style={{ ...SECPAD, background: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ maxWidth: "640px", textAlign: "center" }}>
            <p style={{ ...EB, color: "#555" }}>07 · Próximos Pasos</p>
            <h2 style={{ fontFamily: S, fontSize: "clamp(2rem,5vw,4rem)", fontWeight: 400, lineHeight: 1.15, color: "#f0efe9", marginBottom: "20px" }}>Una reunión de 30 minutos<br /><em>para cerrar el acuerdo.</em></h2>
            <a href="mailto:contacto@aura.com" style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.25)", color: "#f0efe9", fontFamily: G, fontSize: "0.82rem", letterSpacing: "0.3em", textTransform: "uppercase", padding: "18px 40px", textDecoration: "none", marginBottom: "48px" }}>Agendar Reunión</a>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ background: "#f0efe9", borderTop: "1px solid #e0e0da", padding: "36px clamp(20px,5vw,60px)" }}>
          <div style={{ ...MW, display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "16px" }}>
            <div>
              <p style={{ fontFamily: S, fontSize: "1.2rem", marginBottom: "4px" }}>AURA</p>
              <p style={{ fontFamily: G, fontSize: "0.82rem", color: "#888" }}>Arquitectura del Bienestar</p>
            </div>
            <p style={{ fontFamily: G, fontSize: "0.78rem", color: "#aaa" }}>Propuesta Comercial · Willdom · Febrero 2026</p>
          </div>
        </footer>

      </main>
    </>
  )
}
