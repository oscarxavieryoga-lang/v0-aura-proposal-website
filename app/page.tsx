"use client"
import React, { useRef } from "react"

export default function Page() {

  const G = "Inter, system-ui, sans-serif"
  const S = "'Playfair Display', Georgia, serif"

  const sectionRefs = {
    resumen: useRef<HTMLElement>(null),
    contexto: useRef<HTMLElement>(null),
    solucion: useRef<HTMLElement>(null),
    impacto: useRef<HTMLElement>(null),
    financiero: useRef<HTMLElement>(null),
    inversion: useRef<HTMLElement>(null),
    implementacion: useRef<HTMLElement>(null),
    pasos: useRef<HTMLElement>(null),
  }

  const scrollTo = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const toc = [
    { n: "01", label: "Resumen Ejecutivo", ref: sectionRefs.resumen },
    { n: "02", label: "El Contexto", ref: sectionRefs.contexto },
    { n: "03", label: "La Solución", ref: sectionRefs.solucion },
    { n: "04", label: "El Impacto: Personas", ref: sectionRefs.impacto },
    { n: "05", label: "El Impacto: Financiero", ref: sectionRefs.financiero },
    { n: "06", label: "Inversión", ref: sectionRefs.inversion },
    { n: "07", label: "Implementación", ref: sectionRefs.implementacion },
    { n: "08", label: "Próximos Pasos", ref: sectionRefs.pasos },
  ]

  const challenges = [
    { index: "I", title: "Calidad de sueño", stat: "75%", statLabel: "de developers remotos reportan problemas de sueño", impact: "11.3 días de productividad perdida por persona al año", source: "Harvard Business Review, 2019" },
    { index: "II", title: "Dolor postural crónico", stat: "80%", statLabel: "experimenta dolor postural por posición de escritorio", impact: "12–15% de reducción directa en productividad", source: "OSHA – Datos Ocupacionales" },
    { index: "III", title: "Estrés crónico", stat: "65%", statLabel: "reporta estrés crónico sin herramientas de regulación", impact: "18–22% de reducción de productividad + riesgo de depresión silenciosa", source: "American Psychological Association, 2024" },
  ]

  const pillars = [
    { label: "Prácticas Reales", body: "Meditación, yoga, breathing y movimiento guiados por especialistas certificados. Basados en investigación científica, diseñados para resolver problemas específicos." },
    { label: "Estructura Sin Fricción", body: "Programas con inicio, proceso e integración claros. Generan logro genuino y continuidad natural en quien los completa." },
    { label: "Privacidad Total", body: "Espacio completamente separado de los sistemas corporativos. Sin vigilancia, sin presión, sin reportes individuales. Datos 100% privados." },
    { label: "Comunidad Global", body: "Parte de una plataforma abierta al público. Usuarios de distintas industrias y roles. La sensación de no estar solo en el desafío." },
  ]

  const programs = [
    { tag: "14 días", title: "Para el insomnio", subtitle: "Meditación · Breathing · Educación", result: "+1–2 horas de sueño real", science: "Capacidad cognitiva +30% · Riesgo depresión –40%", source: "Harvard Business Review", image: "/images/sleep-wellness.jpg" },
    { tag: "21 días", title: "Para el dolor postural", subtitle: "Yoga · Stretching · Educación", result: "–35 a 50% reducción de dolor", science: "Ansiedad –40% · Depresión –30%", source: "American Psychological Association", image: "/images/yoga-nature.jpg" },
    { tag: "7 días", title: "Para el estrés crónico", subtitle: "Meditación · Breathing · Educación", result: "Reducción visible de estrés en 7 días", science: "Depresión clínica –60% · Burnout –50%", source: "WHO Global Mental Health Report 2023", image: "/images/stress-relief.jpg" },
  ]

  const impactos = [
    {
      title: "Cuando mejora el sueño", pull: "El sistema nervioso se regula. La mente descansa. El trabajo fluye.",
      points: [
        { h: "Menos ansiedad", b: "El sistema nervioso regulado reduce la reactividad emocional durante el día. Menos conflictos, menos errores por tensión acumulada." },
        { h: "Claridad mental", b: "Decisiones más sólidas, menos errores en código, mejor concentración en problemas complejos." },
        { h: "Energía recuperada", b: "La vida fuera del trabajo vuelve a ser posible. Las relaciones mejoran. El developer deja de operar en modo supervivencia." },
      ],
      stat: "+30% capacidad cognitiva · –40% riesgo de depresión", source: "Harvard Business Review, 2019",
    },
    {
      title: "Cuando recupera su cuerpo", pull: "El movimiento libera lo que el escritorio acumula.",
      points: [
        { h: "Tensión liberada", b: "Vuelve a sentirse presente en su cuerpo. Menos disociación. Más conexión consigo mismo." },
        { h: "Sin dolor, más foco", b: "Deja de lidiar con el dolor de espalda o cuello. Puede concentrarse en trabajo, no en malestar físico." },
        { h: "Autoestima recuperada", b: "Recupera sensación de control sobre sí mismo. Hay dignidad en moverse y estar bien en el cuerpo." },
      ],
      stat: "–40% ansiedad · –30% depresión", source: "American Psychological Association",
    },
    {
      title: "Cuando aprende a regular el estrés", pull: "Herramientas reales que funcionan — no presión que reprime.",
      points: [
        { h: "Sensación de control", b: "Ya no es víctima del estrés. Tiene herramientas concretas que generan agencia sobre su estado emocional." },
        { h: "Menos resentimiento", b: "Regula en el momento, no llega al fin de semana explotando o desconectado de su entorno." },
        { h: "Prevención de crisis", b: "El developer con herramientas puede anticipar el colapso. La depresión silenciosa tiene una salida." },
      ],
      stat: "–60% riesgo depresión clínica · –50% burnout", source: "WHO Global Mental Health Report, 2023",
    },
  ]

  const tableRows = [
    { label: "Sueño", devs: 35, retorno: 5932, pct: 40 },
    { label: "Movimiento", devs: 30, retorno: 11250, pct: 36 },
    { label: "Estrés", devs: 22, retorno: 13750, pct: 44 },
  ]

  const fases = [
    { n: "01", title: "Preparación", time: "3–4 semanas", items: ["Setup técnico del acceso corporativo", "Configuración del dashboard privado", "Preparación de materiales de comunicación"] },
    { n: "02", title: "Lanzamiento", time: "Semana 4–5", items: ["Presentaciones a equipos pequeños (30–45 min)", "Link de acceso disponible — sin presión", "Soporte técnico activo para dudas"] },
    { n: "03", title: "Monitoreo", time: "Mes 1, 2 y 3", items: ["Reportes mensuales de participación", "Recolección de feedback de usuarios", "Ajustes si los datos lo indican"] },
    { n: "04", title: "Evaluación", time: "Final del Mes 3", items: ["Reporte final con datos completos", "Decisión conjunta: Continuar · Expandir · Pausar"] },
  ]

  const px = { padding: "80px 60px" }
  const pxSm = "clamp(20px, 5vw, 60px)"

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: Inter, system-ui, sans-serif; background: #fafaf8; color: #1a1a1a; -webkit-font-smoothing: antialiased; }

        .toc-item {
          display: flex; align-items: baseline; gap: 16px;
          padding: 16px 0; border-top: 1px solid #2e2e2e;
          cursor: pointer; transition: opacity 0.2s;
          background: none; border-left: none; border-right: none; border-bottom: none;
          width: 100%; text-align: left;
        }
        .toc-item:hover { opacity: 0.6; }

        .stat-bar { height: 6px; background: #e0e0da; border-radius: 3px; overflow: hidden; margin-top: 10px; }
        .stat-bar-fill { height: 100%; background: #1a1a1a; border-radius: 3px; transition: width 0.8s ease; }

        @media (max-width: 768px) {
          .grid-2 { grid-template-columns: 1fr !important; }
          .grid-3 { grid-template-columns: 1fr !important; }
          .grid-4 { grid-template-columns: 1fr 1fr !important; }
          .grid-toc { grid-template-columns: 1fr !important; }
          .hide-mobile { display: none !important; }
          .prog-row { grid-template-columns: 1fr !important; }
          .prog-img { height: 260px !important; }
          .hero-metrics { gap: 24px !important; }
          .section-pad { padding: 56px 24px !important; }
          .hero-pad { padding: 40px 24px 32px !important; }
          .toc-pad { padding: 48px 24px !important; }
          .resp-table { font-size: 0.85rem !important; }
          .resp-table td, .resp-table th { padding: 14px 12px !important; }
          .inversion-grid { grid-template-columns: 1fr !important; }
          .fases-grid { grid-template-columns: 1fr 1fr !important; }
          .resp-grid { grid-template-columns: 1fr !important; }
          .kpi-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .fases-grid { grid-template-columns: 1fr !important; }
          .grid-4 { grid-template-columns: 1fr !important; }
          .kpi-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      <main style={{ background: "#fafaf8", color: "#1a1a1a" }}>

        {/* ── HERO ──────────────────────────────────────────── */}
        <section style={{ background: "#fff", display: "flex", flexDirection: "column", minHeight: "100svh" }}>

          <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px clamp(20px,5vw,60px)", borderBottom: "1px solid #e8e8e4" }}>
            <span style={{ fontFamily: G, fontSize: "11px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#666", fontWeight: 600 }}>AURA</span>
            <span style={{ fontFamily: G, fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#999" }}>Confidencial · Febrero 2025</span>
          </header>

          <div className="hero-pad" style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "56px clamp(20px,5vw,60px) 40px" }}>

            {/* PROPUESTA COMERCIAL — protagonista */}
            <h1 style={{ fontFamily: S, fontWeight: 500, fontSize: "clamp(2.2rem, 6vw, 5rem)", lineHeight: 1.05, color: "#1a1a1a", letterSpacing: "-0.01em", marginBottom: "20px", maxWidth: "800px" }}>
              Propuesta Comercial
              <br />
              <span style={{ color: "#555", fontWeight: 400, fontSize: "0.65em" }}>para Willdom · 2025</span>
            </h1>

            <div style={{ width: "40px", height: "2px", background: "#1a1a1a", margin: "0 auto 24px" }} />

            {/* Subtítulo — secundario */}
            <p style={{ fontFamily: S, fontStyle: "italic", fontSize: "clamp(1rem, 2.2vw, 1.4rem)", color: "#777", lineHeight: 1.6, maxWidth: "560px", marginBottom: "32px" }}>
              Bienestar integral para el equipo —<br />un piloto de 3 meses con retorno medible.
            </p>

            <p style={{ fontFamily: G, fontSize: "clamp(0.85rem, 1.4vw, 0.95rem)", color: "#999", lineHeight: 1.7, marginBottom: "36px" }}>
              ROI estimado 3.9× · Inversión base $8,000 USD · 87 developers activos
            </p>

            {/* Imagen — cara completa visible */}
            <div style={{ width: "100%", maxWidth: "720px", height: "clamp(220px, 35vw, 400px)", overflow: "hidden", borderRadius: "12px", marginBottom: "36px" }}>
              <img
                src="/images/hero-meditation.jpg"
                alt="Developer en bienestar"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%", display: "block" }}
              />
            </div>

            {/* Métricas */}
            <div className="hero-metrics" style={{ display: "flex", gap: "48px", alignItems: "center" }}>
              {[
                { val: "3.9×", label: "ROI estimado" },
                { val: "25%", label: "Participación" },
                { val: "3 meses", label: "Piloto" },
              ].map((m, i, arr) => (
                <React.Fragment key={m.label}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: S, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#1a1a1a", lineHeight: 1 }}>{m.val}</div>
                    <div style={{ fontFamily: G, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#aaa", marginTop: "6px" }}>{m.label}</div>
                  </div>
                  {i < arr.length - 1 && <div className="hide-mobile" style={{ width: "1px", height: "36px", background: "#e0e0da" }} />}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", paddingBottom: "24px" }}>
            <div style={{ width: "1px", height: "32px", background: "#ccc" }} />
            <span style={{ fontFamily: G, fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#bbb" }}>Scroll</span>
          </div>
        </section>

        {/* ── TABLA DE CONTENIDO ────────────────────────────── */}
        <section className="toc-pad" style={{ background: "#1a1a1a", padding: "64px clamp(20px,5vw,60px)" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontFamily: G, fontSize: "11px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#555", marginBottom: "32px" }}>Contenido</p>
            <div className="grid-toc" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }}>
              {toc.map((item) => (
                <button key={item.n} className="toc-item" onClick={() => scrollTo(item.ref)}>
                  <span style={{ fontFamily: G, fontSize: "11px", color: "#555", letterSpacing: "0.1em", minWidth: "28px" }}>{item.n}</span>
                  <span style={{ fontFamily: S, fontSize: "clamp(1rem, 1.8vw, 1.2rem)", color: "#e8e8e0", fontWeight: 400 }}>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── RESUMEN EJECUTIVO ─────────────────────────────── */}
        <section ref={sectionRefs.resumen} className="section-pad" style={{ background: "#fafaf8", padding: "80px clamp(20px,5vw,60px)" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontFamily: G, fontSize: "11px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#999", marginBottom: "24px" }}>01 · Resumen Ejecutivo</p>
            <h2 style={{ fontFamily: S, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400, lineHeight: 1.2, color: "#1a1a1a", marginBottom: "18px" }}>
              Willdom enfrentó una crisis de salud mental en su equipo.
              <br /><em>La pregunta que surgió fue inevitable:</em>
            </h2>
            <p style={{ fontFamily: S, fontSize: "clamp(1.1rem, 2vw, 1.5rem)", fontStyle: "italic", color: "#444", marginBottom: "24px", lineHeight: 1.5 }}>
              "¿Cómo mejoramos genuinamente el bienestar de nuestro equipo?"
            </p>
            <p style={{ fontFamily: G, fontSize: "1rem", color: "#555", lineHeight: 1.85, maxWidth: "680px", marginBottom: "48px" }}>
              AURA es la respuesta. Una plataforma digital de bienestar integral con acceso corporativo — diseñada para developers remotos que cargan con insomnio, dolor postural y estrés crónico sin herramientas para manejarlo. Acceso 24/7, privacidad total, sin vigilancia corporativa.
            </p>
            <div style={{ borderTop: "1px solid #e0e0da", paddingTop: "40px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "32px" }}>
              {[
                { label: "La solución", value: "AURA", sub: "Plataforma de bienestar integral" },
                { label: "Participación esperada", value: "25%", sub: "87 de 350 developers" },
                { label: "Retorno estimado", value: "3.9×", sub: "ROI en 3 meses de piloto" },
                { label: "Inversión base", value: "$8,000", sub: "Piloto 3 meses · pagos escalonados" },
              ].map((item) => (
                <div key={item.label}>
                  <p style={{ fontFamily: G, fontSize: "10px", letterSpacing: "0.35em", textTransform: "uppercase", color: "#aaa", marginBottom: "10px" }}>{item.label}</p>
                  <p style={{ fontFamily: S, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "#1a1a1a", lineHeight: 1, marginBottom: "8px" }}>{item.value}</p>
                  <p style={{ fontFamily: G, fontSize: "0.875rem", color: "#777", lineHeight: 1.5 }}>{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EL CONTEXTO ───────────────────────────────────── */}
        <section ref={sectionRefs.contexto} className="section-pad" style={{ background: "#f0efe9", padding: "80px clamp(20px,5vw,60px)" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontFamily: G, fontSize: "11px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#999", marginBottom: "24px" }}>02 · El Contexto</p>
            <h2 style={{ fontFamily: S, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400, lineHeight: 1.2, color: "#1a1a1a", marginBottom: "18px" }}>
              El developer remoto carga con dolor real,
              <br /><em>sin herramientas para manejarlo.</em>
            </h2>
            <p style={{ fontFamily: G, fontSize: "1rem", color: "#555", lineHeight: 1.85, maxWidth: "640px", marginBottom: "48px" }}>
              Tres desafíos documentados por investigación científica que afectan directamente la productividad, la salud mental y la retención del talento en la industria tech. No son percepciones — son datos.
            </p>
            <div style={{ borderTop: "1px solid #d8d7d0" }}>
              {challenges.map((c) => (
                <div key={c.index} style={{ display: "grid", gridTemplateColumns: "48px 1fr 1fr", gap: "clamp(20px,4vw,48px)", padding: "40px 0", borderBottom: "1px solid #d8d7d0", alignItems: "start" }} className="grid-3">
                  <p style={{ fontFamily: S, fontSize: "1.5rem", color: "#ccc", lineHeight: 1, paddingTop: "4px" }}>{c.index}</p>
                  <div>
                    <h3 style={{ fontFamily: S, fontSize: "clamp(1.2rem, 2vw, 1.6rem)", fontWeight: 400, color: "#1a1a1a", marginBottom: "14px" }}>{c.title}</h3>
                    <p style={{ fontFamily: S, fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400, color: "#1a1a1a", lineHeight: 1, marginBottom: "8px" }}>{c.stat}</p>
                    <p style={{ fontFamily: G, fontSize: "0.95rem", color: "#666", lineHeight: 1.65 }}>{c.statLabel}</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "14px", justifyContent: "center" }}>
                    <div>
                      <p style={{ fontFamily: G, fontSize: "10px", letterSpacing: "0.35em", textTransform: "uppercase", color: "#aaa", marginBottom: "8px" }}>Impacto documentado</p>
                      <p style={{ fontFamily: S, fontSize: "1.05rem", color: "#1a1a1a", lineHeight: 1.45 }}>{c.impact}</p>
                    </div>
                    <p style={{ fontFamily: G, fontSize: "0.82rem", color: "#999", fontStyle: "italic" }}>{c.source}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LA SOLUCIÓN ───────────────────────────────────── */}
        <section ref={sectionRefs.solucion} className="section-pad" style={{ background: "#fafaf8", padding: "80px clamp(20px,5vw,60px)" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontFamily: G, fontSize: "11px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#999", marginBottom: "24px" }}>03 · La Solución</p>
            <h2 style={{ fontFamily: S, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400, lineHeight: 1.2, color: "#1a1a1a", marginBottom: "18px" }}>
              AURA es una arquitectura de bienestar.
              <br /><em>No un beneficio corporativo. Un espacio real.</em>
            </h2>
            <p style={{ fontFamily: G, fontSize: "1rem", color: "#555", lineHeight: 1.85, maxWidth: "640px", marginBottom: "48px" }}>
              Acceso 24/7, privacidad total, prácticas guiadas por especialistas y comunidad global. El equipo accede por voluntad propia — sin presión, sin integración con sistemas corporativos, sin vigilancia.
            </p>

            {/* Pilares */}
            <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", borderTop: "1px solid #e0e0da", borderBottom: "1px solid #e0e0da", marginBottom: "56px" }}>
              {pillars.map((p, i) => (
                <div key={p.label} style={{ padding: "32px", paddingLeft: i % 2 === 1 ? "32px" : "0", paddingRight: i % 2 === 0 ? "32px" : "0", borderRight: i % 2 === 0 ? "1px solid #e0e0da" : "none", borderTop: i >= 2 ? "1px solid #e0e0da" : "none" }}>
                  <p style={{ fontFamily: G, fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#bbb", marginBottom: "12px" }}>0{i + 1}</p>
                  <h3 style={{ fontFamily: S, fontSize: "1.3rem", fontWeight: 400, color: "#1a1a1a", marginBottom: "10px" }}>{p.label}</h3>
                  <p style={{ fontFamily: G, fontSize: "0.95rem", color: "#666", lineHeight: 1.75 }}>{p.body}</p>
                </div>
              ))}
            </div>

            {/* Cómo funciona */}
            <p style={{ fontFamily: G, fontSize: "11px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#999", marginBottom: "32px" }}>Cómo funciona</p>
            <div className="grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "24px", marginBottom: "56px" }}>
              {[
                { n: "1", label: "Acceso privado", desc: "Link separado. Login individual. Sin integración con los sistemas de Willdom." },
                { n: "2", label: "Elige tu camino", desc: "Cada persona selecciona según su necesidad real. Sin presión para elegir correctamente." },
                { n: "3", label: "Práctica en vivo", desc: "Acceso 24/7. Sin horarios fijos. Tu ritmo, tu tiempo." },
                { n: "4", label: "Datos agregados", desc: "El admin ve participación general — nunca datos individuales ni personales." },
              ].map((s) => (
                <div key={s.n} style={{ borderTop: "3px solid #1a1a1a", paddingTop: "18px" }}>
                  <p style={{ fontFamily: S, fontSize: "2.2rem", color: "#1a1a1a", lineHeight: 1, marginBottom: "12px" }}>{s.n}</p>
                  <p style={{ fontFamily: G, fontSize: "0.95rem", fontWeight: 600, color: "#1a1a1a", marginBottom: "8px" }}>{s.label}</p>
                  <p style={{ fontFamily: G, fontSize: "0.88rem", color: "#666", lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              ))}
            </div>

            {/* Programas */}
            <p style={{ fontFamily: G, fontSize: "11px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#999", marginBottom: "32px" }}>Programas de ejemplo</p>
            <div style={{ borderTop: "1px solid #e0e0da" }}>
              {programs.map((prog, i) => (
                <div key={prog.title} className="prog-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: "1px solid #e0e0da" }}>
                  <div className="prog-img" style={{ order: i % 2 === 1 ? 2 : 1, height: "clamp(220px,28vw,360px)", overflow: "hidden" }}>
                    <img src={prog.image} alt={prog.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                  <div style={{ order: i % 2 === 1 ? 1 : 2, display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(24px,4vw,48px)" }}>
                    <p style={{ fontFamily: G, fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#aaa", marginBottom: "14px" }}>{prog.tag}</p>
                    <h3 style={{ fontFamily: S, fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 400, color: "#1a1a1a", marginBottom: "10px", lineHeight: 1.2 }}>{prog.title}</h3>
                    <p style={{ fontFamily: G, fontSize: "0.9rem", color: "#888", marginBottom: "20px" }}>{prog.subtitle}</p>
                    <div style={{ width: "28px", height: "1px", background: "#ccc", marginBottom: "20px" }} />
                    <p style={{ fontFamily: S, fontSize: "1.1rem", fontStyle: "italic", color: "#1a1a1a", marginBottom: "12px" }}>"{prog.result}"</p>
                    <p style={{ fontFamily: G, fontSize: "0.875rem", color: "#777", marginBottom: "4px" }}>{prog.science}</p>
                    <p style={{ fontFamily: G, fontSize: "0.78rem", color: "#aaa", fontStyle: "italic" }}>{prog.source}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── IMPACTO PERSONAS ──────────────────────────────── */}
        <section ref={sectionRefs.impacto} className="section-pad" style={{ background: "#1c1c1c", padding: "80px clamp(20px,5vw,60px)", position: "relative", overflow: "hidden" }}>

          {/* Imagen de fondo — equipo developers */}
          <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
            <img
              src="/images/team-developers.jpg"
              alt="Equipo de developers"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: 0.15, display: "block" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(28,28,28,0.7) 0%, rgba(28,28,28,0.85) 50%, rgba(28,28,28,0.95) 100%)" }} />
          </div>

          <div style={{ maxWidth: "900px", margin: "0 auto", position: "relative", zIndex: 1 }}>
            <p style={{ fontFamily: G, fontSize: "11px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#555", marginBottom: "24px" }}>04 · El Impacto: Personas</p>
            <h2 style={{ fontFamily: S, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400, lineHeight: 1.2, color: "#f0efe9", marginBottom: "18px" }}>
              Antes de hablar de dinero,
              <br /><em>hablemos de personas.</em>
            </h2>
            <p style={{ fontFamily: G, fontSize: "1rem", color: "#888", lineHeight: 1.85, maxWidth: "640px", marginBottom: "48px" }}>
              El dolor del developer remoto no es "normal en tech". Es real, acumulado e ignorado durante años. Aislamiento, insomnio, dolor postural, estrés sin herramientas — y vulnerabilidad silenciosa a la depresión. Eso fue lo que Willdom vivió de cerca.
            </p>

            <div style={{ borderTop: "1px solid #2e2e2e" }}>
              {impactos.map((imp) => (
                <div key={imp.title} style={{ padding: "44px 0", borderBottom: "1px solid #2e2e2e" }}>
                  <h3 style={{ fontFamily: S, fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 400, color: "#f0efe9", marginBottom: "8px" }}>{imp.title}</h3>
                  <p style={{ fontFamily: S, fontSize: "1rem", fontStyle: "italic", color: "#666", marginBottom: "28px" }}>{imp.pull}</p>
                  <div className="grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px", marginBottom: "28px" }}>
                    {imp.points.map((pt) => (
                      <div key={pt.h} style={{ borderTop: "1px solid #2e2e2e", paddingTop: "18px" }}>
                        <p style={{ fontFamily: G, fontSize: "0.95rem", fontWeight: 600, color: "#e0dfd8", marginBottom: "8px" }}>{pt.h}</p>
                        <p style={{ fontFamily: G, fontSize: "0.88rem", color: "#777", lineHeight: 1.75 }}>{pt.b}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "14px", paddingTop: "18px", borderTop: "1px solid #2e2e2e" }}>
                    <p style={{ fontFamily: G, fontSize: "0.9rem", color: "#bbb" }}>{imp.stat}</p>
                    <div style={{ width: "1px", height: "14px", background: "#333" }} />
                    <p style={{ fontFamily: G, fontSize: "0.78rem", color: "#555", fontStyle: "italic" }}>{imp.source}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── IMPACTO FINANCIERO ────────────────────────────── */}
        <section ref={sectionRefs.financiero} className="section-pad" style={{ background: "#f0efe9", padding: "80px clamp(20px,5vw,60px)" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontFamily: G, fontSize: "11px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#999", marginBottom: "24px" }}>05 · Impacto Financiero</p>
            <h2 style={{ fontFamily: S, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400, lineHeight: 1.2, color: "#1a1a1a", marginBottom: "18px" }}>
              El bienestar también
              <br /><em>tiene retorno medible.</em>
            </h2>
            <p style={{ fontFamily: G, fontSize: "1rem", color: "#555", lineHeight: 1.85, maxWidth: "640px", marginBottom: "48px" }}>
              No significa trabajar más horas. Significa trabajar mejor en las mismas horas. Los estudios documentan cuánta productividad se pierde — y cuánto se puede recuperar con las herramientas adecuadas.
            </p>

            {/* Dato científico */}
            <div style={{ background: "#fff", padding: "clamp(32px,5vw,56px)", textAlign: "center", marginBottom: "48px", borderTop: "3px solid #1a1a1a" }}>
              <p style={{ fontFamily: G, fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#aaa", marginBottom: "16px" }}>Dato científico documentado</p>
              <p style={{ fontFamily: S, fontSize: "clamp(3.5rem, 12vw, 8rem)", fontWeight: 400, color: "#1a1a1a", lineHeight: 1, marginBottom: "12px" }}>11.3</p>
              <p style={{ fontFamily: S, fontSize: "clamp(1rem, 1.8vw, 1.25rem)", color: "#1a1a1a", marginBottom: "8px" }}>días de productividad perdida por persona, por año</p>
              <p style={{ fontFamily: G, fontSize: "0.82rem", color: "#aaa", fontStyle: "italic", marginBottom: "20px" }}>Harvard Business Review, 2019</p>
              <div style={{ width: "36px", height: "1px", background: "#ccc", margin: "0 auto 20px" }} />
              <p style={{ fontFamily: S, fontSize: "1.15rem", color: "#1a1a1a" }}>= $2,260 USD · por developer · por año</p>
            </div>

            {/* Gráfico de barras — retorno por programa */}
            <p style={{ fontFamily: G, fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#aaa", marginBottom: "24px" }}>
              Retorno estimado por programa · 87 usuarios (25% de 350)
            </p>
            <div style={{ background: "#fff", padding: "clamp(24px,4vw,40px)", marginBottom: "12px" }}>
              {tableRows.map((r, i) => {
                const maxRetorno = 13750
                const barWidth = Math.round((r.retorno / maxRetorno) * 100)
                return (
                  <div key={r.label} style={{ marginBottom: i < tableRows.length - 1 ? "28px" : "0" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8px" }}>
                      <div style={{ display: "flex", gap: "16px", alignItems: "baseline" }}>
                        <span style={{ fontFamily: S, fontSize: "1.05rem", color: "#1a1a1a" }}>{r.label}</span>
                        <span style={{ fontFamily: G, fontSize: "0.82rem", color: "#aaa" }}>{r.devs} developers</span>
                      </div>
                      <span style={{ fontFamily: S, fontSize: "1.15rem", color: "#1a1a1a" }}>${r.retorno.toLocaleString()}</span>
                    </div>
                    <div style={{ height: "8px", background: "#f0efe9", borderRadius: "4px", overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${barWidth}%`, background: "#1a1a1a", borderRadius: "4px" }} />
                    </div>
                  </div>
                )
              })}

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "28px", paddingTop: "20px", borderTop: "2px solid #1a1a1a" }}>
                <div>
                  <p style={{ fontFamily: G, fontSize: "10px", letterSpacing: "0.35em", textTransform: "uppercase", color: "#aaa", marginBottom: "4px" }}>Total recuperado · 3 meses</p>
                  <p style={{ fontFamily: G, fontSize: "0.82rem", color: "#aaa", fontStyle: "italic" }}>87 developers · supuestos conservadores al 30%</p>
                </div>
                <p style={{ fontFamily: S, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", color: "#1a1a1a" }}>$30,932</p>
              </div>
            </div>
            <p style={{ fontFamily: G, fontSize: "0.78rem", color: "#aaa", fontStyle: "italic", textAlign: "right", marginBottom: "48px" }}>Supuestos conservadores: 30% del potencial máximo documentado por los estudios</p>

            {/* ROI */}
            <div style={{ textAlign: "center", padding: "clamp(40px,5vw,56px) 0", borderTop: "1px solid #d8d7d0", borderBottom: "1px solid #d8d7d0", marginBottom: "48px" }}>
              <p style={{ fontFamily: G, fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#aaa", marginBottom: "20px" }}>ROI del piloto · 3 meses</p>
              <p style={{ fontFamily: S, fontSize: "clamp(4rem, 13vw, 8rem)", fontWeight: 400, color: "#1a1a1a", lineHeight: 1, marginBottom: "14px" }}>3.9×</p>
              <p style={{ fontFamily: S, fontSize: "1.1rem", color: "#777" }}>$8,000 invertidos · $30,932 recuperados</p>
            </div>

            {/* KPIs */}
            <p style={{ fontFamily: G, fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#aaa", marginBottom: "20px" }}>Métricas de éxito del piloto</p>
            <div className="kpi-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", border: "1px solid #d8d7d0" }}>
              {[
                { label: "Participación Mes 1", value: ">70 usuarios" },
                { label: "Retención Mes 3", value: "40–50%" },
                { label: "NPS al finalizar", value: ">+5" },
                { label: "Completitud", value: "60%+" },
              ].map((k, i, arr) => (
                <div key={k.label} style={{ padding: "28px 16px", textAlign: "center", borderRight: i < arr.length - 1 ? "1px solid #d8d7d0" : "none" }}>
                  <p style={{ fontFamily: S, fontSize: "clamp(1.3rem,2.5vw,1.7rem)", fontWeight: 400, color: "#1a1a1a", lineHeight: 1, marginBottom: "8px" }}>{k.value}</p>
                  <p style={{ fontFamily: G, fontSize: "0.78rem", color: "#999", lineHeight: 1.4 }}>{k.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INVERSIÓN ─────────────────────────────────────── */}
        <section ref={sectionRefs.inversion} className="section-pad" style={{ background: "#fafaf8", padding: "80px clamp(20px,5vw,60px)" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontFamily: G, fontSize: "11px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#999", marginBottom: "24px" }}>06 · Inversión</p>
            <h2 style={{ fontFamily: S, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400, lineHeight: 1.2, color: "#1a1a1a", marginBottom: "18px" }}>
              Pagos escalonados
              <br /><em>y bonos basados en resultados reales.</em>
            </h2>
            <p style={{ fontFamily: G, fontSize: "1rem", color: "#555", lineHeight: 1.85, maxWidth: "640px", marginBottom: "48px" }}>
              La inversión base cubre el piloto completo de 3 meses. Los bonos adicionales solo se activan si se alcanzan los resultados acordados — si no hay resultados, no hay bonos. Sin letra pequeña.
            </p>
            <div className="inversion-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "56px" }}>
              <div>
                <p style={{ fontFamily: G, fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#aaa", marginBottom: "20px" }}>Cronograma de pagos</p>
                <div style={{ borderTop: "1px solid #e0e0da" }}>
                  {[
                    { n: "01", fecha: "Semana 1 — Anticipado", monto: "$3,000", desc: "Activación de acceso corporativo, setup técnico y configuración del dashboard." },
                    { n: "02", fecha: "15 de Abril — Mes 1", monto: "$2,500", desc: "Evaluación completa del primer mes: participación, retención y primeros datos." },
                    { n: "03", fecha: "15 de Mayo — Mes 2", monto: "$2,500", desc: "Evaluación del segundo mes. Ajustes si se requieren basados en feedback real." },
                  ].map((p) => (
                    <div key={p.n} style={{ display: "grid", gridTemplateColumns: "36px 1fr auto", gap: "14px", padding: "22px 0", borderBottom: "1px solid #e0e0da", alignItems: "start" }}>
                      <p style={{ fontFamily: S, fontSize: "1.3rem", color: "#ccc", lineHeight: 1 }}>{p.n}</p>
                      <div>
                        <p style={{ fontFamily: G, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#aaa", marginBottom: "6px" }}>{p.fecha}</p>
                        <p style={{ fontFamily: G, fontSize: "0.88rem", color: "#666", lineHeight: 1.65 }}>{p.desc}</p>
                      </div>
                      <p style={{ fontFamily: S, fontSize: "1.15rem", color: "#1a1a1a", whiteSpace: "nowrap" }}>{p.monto}</p>
                    </div>
                  ))}
                  <div style={{ display: "grid", gridTemplateColumns: "36px 1fr auto", gap: "14px", padding: "20px", background: "#1a1a1a", alignItems: "center" }}>
                    <div />
                    <p style={{ fontFamily: G, fontSize: "0.92rem", color: "#f0efe9" }}>Base total — 3 meses</p>
                    <p style={{ fontFamily: S, fontSize: "1.4rem", color: "#f0efe9" }}>$8,000</p>
                  </div>
                </div>
              </div>
              <div>
                <p style={{ fontFamily: G, fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#aaa", marginBottom: "20px" }}>Bonos por resultados · Mes 3</p>
                <div style={{ borderTop: "1px solid #e0e0da", marginBottom: "32px" }}>
                  {[
                    { cond: "70 usuarios activos en el Mes 1", bono: "+$1,500" },
                    { cond: "100 clases completadas en Mes 2 y 3", bono: "+$2,000" },
                    { cond: "NPS mayor a +5 al finalizar el piloto", bono: "+$1,000" },
                  ].map((b) => (
                    <div key={b.cond} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "14px", padding: "18px 0", borderBottom: "1px solid #e0e0da" }}>
                      <p style={{ fontFamily: G, fontSize: "0.9rem", color: "#555", lineHeight: 1.5 }}>{b.cond}</p>
                      <p style={{ fontFamily: S, fontSize: "1.1rem", color: "#1a1a1a", whiteSpace: "nowrap" }}>{b.bono}</p>
                    </div>
                  ))}
                </div>
                <p style={{ fontFamily: G, fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#aaa", marginBottom: "8px" }}>Máximo total</p>
                <p style={{ fontFamily: S, fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", fontWeight: 400, color: "#1a1a1a", lineHeight: 1, marginBottom: "10px" }}>$12,500</p>
                <p style={{ fontFamily: G, fontSize: "0.82rem", color: "#aaa", fontStyle: "italic" }}>Los bonos se activan únicamente si se alcanzan los resultados acordados.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── IMPLEMENTACIÓN ────────────────────────────────── */}
        <section ref={sectionRefs.implementacion} className="section-pad" style={{ background: "#f0efe9", padding: "80px clamp(20px,5vw,60px)" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontFamily: G, fontSize: "11px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#999", marginBottom: "24px" }}>07 · Implementación</p>
            <h2 style={{ fontFamily: S, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400, lineHeight: 1.2, color: "#1a1a1a", marginBottom: "18px" }}>
              De la firma al primer resultado:
              <br /><em>un proceso simple y sin fricción.</em>
            </h2>
            <p style={{ fontFamily: G, fontSize: "1rem", color: "#555", lineHeight: 1.85, maxWidth: "640px", marginBottom: "48px" }}>
              El piloto inicia con el primer pago. En 3–4 semanas el acceso está activo. En la semana 4–5 el equipo ya puede empezar a practicar. La decisión final se toma en el Mes 3 con datos reales — no promesas.
            </p>
            <div className="fases-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "0", border: "1px solid #d8d7d0", marginBottom: "48px" }}>
              {fases.map((f, i) => (
                <div key={f.n} style={{ padding: "28px clamp(16px,2.5vw,28px)", borderRight: i < fases.length - 1 ? "1px solid #d8d7d0" : "none" }}>
                  <p style={{ fontFamily: S, fontSize: "1.8rem", color: "#ccc", lineHeight: 1, marginBottom: "14px" }}>{f.n}</p>
                  <p style={{ fontFamily: G, fontSize: "0.95rem", fontWeight: 600, color: "#1a1a1a", marginBottom: "4px" }}>{f.title}</p>
                  <p style={{ fontFamily: G, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#aaa", marginBottom: "16px" }}>{f.time}</p>
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
            <p style={{ fontFamily: G, fontSize: "11px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#999", marginBottom: "20px" }}>Responsabilidades</p>
            <div className="resp-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", border: "1px solid #d8d7d0" }}>
              {[
                { who: "AURA", items: ["Setup técnico y activación del acceso corporativo", "Reportes mensuales de datos agregados — nunca datos personales", "Soporte técnico continuo durante el piloto", "Disponibilidad para reuniones con equipos"] },
                { who: "Willdom", items: ["Comunicar el acceso al equipo — como invitación, no obligación", "Facilitar las reuniones de presentación con equipos pequeños", "Recolectar feedback honesto de quienes usen la plataforma", "Participar en la evaluación final del piloto"] },
              ].map((r, i) => (
                <div key={r.who} style={{ padding: "clamp(20px,3vw,36px)", borderRight: i === 0 ? "1px solid #d8d7d0" : "none" }}>
                  <p style={{ fontFamily: S, fontSize: "1.25rem", color: "#1a1a1a", marginBottom: "20px" }}>{r.who}</p>
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

        {/* ── PRÓXIMOS PASOS ────────────────────────────────── */}
        <section ref={sectionRefs.pasos} className="section-pad" style={{ background: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px clamp(20px,5vw,60px)" }}>
          <div style={{ maxWidth: "640px", textAlign: "center" }}>
            <p style={{ fontFamily: G, fontSize: "11px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#555", marginBottom: "24px" }}>08 · Próximos Pasos</p>
            <h2 style={{ fontFamily: S, fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 400, lineHeight: 1.15, color: "#f0efe9", marginBottom: "20px" }}>
              Una reunión de 30 minutos
              <br /><em>para cerrar el acuerdo.</em>
            </h2>
            <p style={{ fontFamily: G, fontSize: "1rem", color: "#888", lineHeight: 1.85, marginBottom: "14px" }}>
              Con Karina y el equipo de decisión. El objetivo es simple: responder preguntas, validar el timeline, alinear expectativas y firmar.
            </p>
            <p style={{ fontFamily: G, fontSize: "0.9rem", color: "#555", lineHeight: 1.8, marginBottom: "40px" }}>
              El piloto puede iniciar en menos de 4 semanas desde la firma. El equipo puede estar practicando antes de que termine el mes.
            </p>
            <a href="mailto:contacto@aura.com" style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.25)", color: "#f0efe9", fontFamily: G, fontSize: "0.82rem", letterSpacing: "0.3em", textTransform: "uppercase", padding: "18px 40px", textDecoration: "none" }}>
              Agendar Reunión
            </a>
            <p style={{ fontFamily: G, fontSize: "0.82rem", color: "#444", fontStyle: "italic", marginTop: "18px" }}>Disponibles en el horario de su preferencia.</p>
          </div>
        </section>

        {/* ── FOOTER ────────────────────────────────────────── */}
        <footer style={{ background: "#f0efe9", borderTop: "1px solid #e0e0da", padding: "36px clamp(20px,5vw,60px)" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "16px" }}>
            <div>
              <p style={{ fontFamily: S, fontSize: "1.2rem", color: "#1a1a1a", marginBottom: "4px" }}>AURA</p>
              <p style={{ fontFamily: G, fontSize: "0.82rem", color: "#888" }}>Plataforma Digital de Bienestar Integral</p>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={{ fontFamily: G, fontSize: "0.78rem", color: "#aaa", marginBottom: "4px" }}>Propuesta Comercial para Willdom · Febrero 2025</p>
              <p style={{ fontFamily: G, fontSize: "0.72rem", color: "#bbb", fontStyle: "italic" }}>Confidencial</p>
            </div>
          </div>
        </footer>

      </main>
    </>
  )
}
