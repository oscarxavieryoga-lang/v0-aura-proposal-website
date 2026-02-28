import React from "react"

export default function Page() {

  const G = "Inter, system-ui, sans-serif"
  const S = "'Playfair Display', Georgia, serif"

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
        { h: "Sin dolor, más foco", b: "Deja de lidiar con el dolor de espalda o cuello. Puede concentrarse en trabajo, no en malestar." },
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
    { label: "Sueño", devs: "35", retorno: "$5,932" },
    { label: "Movimiento", devs: "30", retorno: "$11,250" },
    { label: "Estrés", devs: "22", retorno: "$13,750" },
  ]

  const kpis = [
    { label: "Participación Mes 1", value: ">70 usuarios" },
    { label: "Retención Mes 3", value: "40–50%" },
    { label: "NPS al finalizar", value: ">+5" },
    { label: "Completitud", value: "60%+" },
  ]

  const fases = [
    { n: "01", title: "Preparación", time: "3–4 semanas", items: ["Setup técnico del acceso corporativo", "Configuración del dashboard privado", "Preparación de materiales de comunicación"] },
    { n: "02", title: "Lanzamiento", time: "Semana 4–5", items: ["Presentaciones a equipos pequeños (30–45 min)", "Link de acceso disponible — sin presión", "Soporte técnico activo para dudas iniciales"] },
    { n: "03", title: "Monitoreo", time: "Mes 1, 2 y 3", items: ["Reportes mensuales de participación", "Recolección de feedback de usuarios", "Ajustes si los datos lo indican"] },
    { n: "04", title: "Evaluación", time: "Final del Mes 3", items: ["Reporte final con datos completos", "Decisión conjunta: Continuar · Expandir · Pausar"] },
  ]

  const toc = [
    { n: "01", label: "Resumen Ejecutivo" },
    { n: "02", label: "El Contexto" },
    { n: "03", label: "La Solución" },
    { n: "04", label: "El Impacto: Personas" },
    { n: "05", label: "El Impacto: Financiero" },
    { n: "06", label: "Inversión" },
    { n: "07", label: "Implementación" },
    { n: "08", label: "Próximos Pasos" },
  ]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: Inter, system-ui, sans-serif; background: #fafaf8; color: #1a1a1a; }
        html { scroll-behavior: smooth; }
      `}</style>

      <main style={{ background: "#fafaf8", color: "#1a1a1a" }}>

        {/* ── HERO ──────────────────────────────────────────── */}
        <section style={{ minHeight: "100svh", background: "#fff", display: "flex", flexDirection: "column", padding: "0" }}>
          
          {/* Nav */}
          <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "28px 60px", borderBottom: "1px solid #e8e8e4" }}>
            <span style={{ fontFamily: G, fontSize: "11px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#999", fontWeight: 500 }}>AURA</span>
            <span style={{ fontFamily: G, fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#bbb" }}>Confidencial · Febrero 2025</span>
          </header>

          {/* Hero content */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "60px 40px 40px" }}>
            
            <span style={{ fontFamily: G, fontSize: "11px", letterSpacing: "0.5em", textTransform: "uppercase", color: "#aaa", fontWeight: 500, marginBottom: "20px", display: "block" }}>
              PROPUESTA COMERCIAL · WILLDOM · 2025
            </span>

            <h1 style={{ fontFamily: S, fontWeight: 400, fontSize: "clamp(1.6rem, 4vw, 3.2rem)", lineHeight: 1.2, color: "#1a1a1a", maxWidth: "720px", marginBottom: "24px" }}>
              Bienestar integral para el equipo de Willdom —<br />
              <em>un piloto de 3 meses con retorno medible.</em>
            </h1>

            <div style={{ width: "40px", height: "1px", background: "#ccc", margin: "0 auto 24px" }} />

            <p style={{ fontFamily: G, fontSize: "clamp(1rem, 1.6vw, 1.15rem)", color: "#666", lineHeight: 1.7, maxWidth: "420px", marginBottom: "40px" }}>
              ROI estimado 3.9× · Inversión base $8,000 USD<br />87 developers activos · Acceso 24/7
            </p>

            {/* Imagen contenida correctamente */}
            <div style={{ width: "100%", maxWidth: "700px", height: "clamp(200px, 30vw, 360px)", overflow: "hidden", borderRadius: "12px", marginBottom: "40px", flexShrink: 0 }}>
              <img
                src="/images/hero-meditation.jpg"
                alt="Bienestar"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%", display: "block", filter: "grayscale(15%) brightness(0.97)" }}
              />
            </div>

            {/* 3 métricas */}
            <div style={{ display: "flex", gap: "48px", alignItems: "center" }}>
              {[{ val: "3.9×", label: "ROI estimado" }, { val: "25%", label: "Participación" }, { val: "3 meses", label: "Piloto" }].map((m, i, arr) => (
                <React.Fragment key={m.label}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: S, fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 400, color: "#1a1a1a", lineHeight: 1 }}>{m.val}</div>
                    <div style={{ fontFamily: G, fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#999", marginTop: "6px" }}>{m.label}</div>
                  </div>
                  {i < arr.length - 1 && <div style={{ width: "1px", height: "36px", background: "#ddd" }} />}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Scroll cue */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", paddingBottom: "28px" }}>
            <div style={{ width: "1px", height: "36px", background: "#ccc" }} />
            <span style={{ fontFamily: G, fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#bbb" }}>Scroll</span>
          </div>
        </section>

        {/* ── TABLA DE CONTENIDO ────────────────────────────── */}
        <section style={{ background: "#1a1a1a", padding: "64px 60px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontFamily: G, fontSize: "11px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#666", marginBottom: "40px" }}>Contenido</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "0" }}>
              {toc.map((item, i) => (
                <div key={item.n} style={{ display: "flex", alignItems: "baseline", gap: "16px", padding: "18px 0", borderTop: "1px solid #2e2e2e" }}>
                  <span style={{ fontFamily: G, fontSize: "11px", color: "#555", letterSpacing: "0.1em", minWidth: "28px" }}>{item.n}</span>
                  <span style={{ fontFamily: S, fontSize: "1.15rem", color: "#e8e8e0", fontWeight: 400 }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RESUMEN EJECUTIVO ─────────────────────────────── */}
        <section style={{ background: "#fafaf8", padding: "80px 60px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontFamily: G, fontSize: "11px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#999", marginBottom: "28px" }}>01 · Resumen Ejecutivo</p>
            
            <h2 style={{ fontFamily: S, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400, lineHeight: 1.2, color: "#1a1a1a", marginBottom: "20px" }}>
              Willdom enfrentó una crisis de salud mental en su equipo.
              <br /><em>La pregunta que surgió fue inevitable:</em>
            </h2>

            <p style={{ fontFamily: S, fontSize: "clamp(1.2rem, 2vw, 1.6rem)", fontStyle: "italic", color: "#555", marginBottom: "28px", lineHeight: 1.5 }}>
              "¿Cómo mejoramos genuinamente el bienestar de nuestro equipo?"
            </p>

            <p style={{ fontFamily: G, fontSize: "1rem", color: "#555", lineHeight: 1.8, maxWidth: "680px", marginBottom: "48px" }}>
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
                  <p style={{ fontFamily: S, fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 400, color: "#1a1a1a", lineHeight: 1, marginBottom: "8px" }}>{item.value}</p>
                  <p style={{ fontFamily: G, fontSize: "0.875rem", color: "#777", lineHeight: 1.5 }}>{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EL CONTEXTO ───────────────────────────────────── */}
        <section style={{ background: "#f0efe9", padding: "80px 60px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontFamily: G, fontSize: "11px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#999", marginBottom: "28px" }}>02 · El Contexto</p>

            <h2 style={{ fontFamily: S, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400, lineHeight: 1.2, color: "#1a1a1a", marginBottom: "20px" }}>
              El developer remoto carga con dolor real,
              <br /><em>sin herramientas para manejarlo.</em>
            </h2>

            <p style={{ fontFamily: G, fontSize: "1rem", color: "#555", lineHeight: 1.8, maxWidth: "640px", marginBottom: "48px" }}>
              Tres desafíos documentados por investigación científica que afectan directamente la productividad, la salud mental y la retención del talento en la industria tech. No son percepciones — son datos.
            </p>

            <div style={{ borderTop: "1px solid #d8d7d0" }}>
              {challenges.map((c) => (
                <div key={c.index} style={{ display: "grid", gridTemplateColumns: "48px 1fr 1fr", gap: "40px", padding: "40px 0", borderBottom: "1px solid #d8d7d0", alignItems: "start" }}>
                  <p style={{ fontFamily: S, fontSize: "1.6rem", color: "#bbb", fontWeight: 400, lineHeight: 1, paddingTop: "4px" }}>{c.index}</p>
                  <div>
                    <h3 style={{ fontFamily: S, fontSize: "clamp(1.3rem, 2vw, 1.7rem)", fontWeight: 400, color: "#1a1a1a", marginBottom: "16px", lineHeight: 1.2 }}>{c.title}</h3>
                    <p style={{ fontFamily: S, fontSize: "clamp(2.8rem, 5vw, 4.2rem)", fontWeight: 400, color: "#1a1a1a", lineHeight: 1, marginBottom: "10px" }}>{c.stat}</p>
                    <p style={{ fontFamily: G, fontSize: "0.95rem", color: "#666", lineHeight: 1.6 }}>{c.statLabel}</p>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "16px" }}>
                    <div>
                      <p style={{ fontFamily: G, fontSize: "10px", letterSpacing: "0.35em", textTransform: "uppercase", color: "#aaa", marginBottom: "10px" }}>Impacto documentado</p>
                      <p style={{ fontFamily: S, fontSize: "1.1rem", color: "#1a1a1a", lineHeight: 1.4 }}>{c.impact}</p>
                    </div>
                    <p style={{ fontFamily: G, fontSize: "0.82rem", color: "#999", fontStyle: "italic" }}>{c.source}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LA SOLUCIÓN ───────────────────────────────────── */}
        <section style={{ background: "#fafaf8", padding: "80px 60px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontFamily: G, fontSize: "11px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#999", marginBottom: "28px" }}>03 · La Solución</p>

            <h2 style={{ fontFamily: S, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400, lineHeight: 1.2, color: "#1a1a1a", marginBottom: "20px" }}>
              AURA es una arquitectura de bienestar.
              <br /><em>No un beneficio corporativo. Un espacio real.</em>
            </h2>

            <p style={{ fontFamily: G, fontSize: "1rem", color: "#555", lineHeight: 1.8, maxWidth: "640px", marginBottom: "48px" }}>
              Acceso 24/7, privacidad total, prácticas guiadas por especialistas y comunidad global. El equipo accede por voluntad propia — sin presión, sin integración con sistemas corporativos, sin vigilancia.
            </p>

            {/* Pilares */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", borderTop: "1px solid #e0e0da", borderBottom: "1px solid #e0e0da", marginBottom: "64px" }}>
              {pillars.map((p, i) => (
                <div key={p.label} style={{
                  padding: "36px 0",
                  paddingRight: i % 2 === 0 ? "48px" : "0",
                  paddingLeft: i % 2 === 1 ? "48px" : "0",
                  borderRight: i % 2 === 0 ? "1px solid #e0e0da" : "none",
                  borderTop: i >= 2 ? "1px solid #e0e0da" : "none",
                }}>
                  <p style={{ fontFamily: G, fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#bbb", marginBottom: "14px" }}>0{i + 1}</p>
                  <h3 style={{ fontFamily: S, fontSize: "1.35rem", fontWeight: 400, color: "#1a1a1a", marginBottom: "12px" }}>{p.label}</h3>
                  <p style={{ fontFamily: G, fontSize: "0.95rem", color: "#666", lineHeight: 1.75 }}>{p.body}</p>
                </div>
              ))}
            </div>

            {/* Cómo funciona */}
            <p style={{ fontFamily: G, fontSize: "11px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#999", marginBottom: "36px" }}>Cómo funciona</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "32px", marginBottom: "64px" }}>
              {[
                { n: "1", label: "Acceso privado", desc: "Link separado al entorno corporativo. Login individual. Sin integración con los sistemas de Willdom." },
                { n: "2", label: "Elige tu camino", desc: "Cada persona selecciona el programa según su necesidad real. Sin presión para elegir correctamente." },
                { n: "3", label: "Práctica en vivo", desc: "Acceso 24/7. Sin horarios fijos. Cada persona practica a su ritmo y en su tiempo." },
                { n: "4", label: "Datos agregados", desc: "El administrador ve participación y retención general — nunca datos individuales ni personales." },
              ].map((s) => (
                <div key={s.n} style={{ borderTop: "2px solid #1a1a1a", paddingTop: "20px" }}>
                  <p style={{ fontFamily: S, fontSize: "2.4rem", fontWeight: 400, color: "#1a1a1a", lineHeight: 1, marginBottom: "14px" }}>{s.n}</p>
                  <p style={{ fontFamily: G, fontSize: "0.95rem", fontWeight: 600, color: "#1a1a1a", marginBottom: "10px" }}>{s.label}</p>
                  <p style={{ fontFamily: G, fontSize: "0.9rem", color: "#666", lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              ))}
            </div>

            {/* Programas */}
            <p style={{ fontFamily: G, fontSize: "11px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#999", marginBottom: "36px" }}>Programas de ejemplo</p>
            <div style={{ borderTop: "1px solid #e0e0da" }}>
              {programs.map((prog, i) => (
                <div key={prog.title} style={{ display: "grid", gridTemplateColumns: i % 2 === 0 ? "1fr 1fr" : "1fr 1fr", direction: "ltr", borderBottom: "1px solid #e0e0da" }}>
                  <div style={{ order: i % 2 === 1 ? 2 : 1, height: "clamp(240px, 30vw, 380px)", overflow: "hidden" }}>
                    <img src={prog.image} alt={prog.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  </div>
                  <div style={{ order: i % 2 === 1 ? 1 : 2, display: "flex", flexDirection: "column", justifyContent: "center", padding: "48px" }}>
                    <p style={{ fontFamily: G, fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#aaa", marginBottom: "16px" }}>{prog.tag}</p>
                    <h3 style={{ fontFamily: S, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 400, color: "#1a1a1a", marginBottom: "12px", lineHeight: 1.2 }}>{prog.title}</h3>
                    <p style={{ fontFamily: G, fontSize: "0.9rem", color: "#888", marginBottom: "24px" }}>{prog.subtitle}</p>
                    <div style={{ width: "32px", height: "1px", background: "#ccc", marginBottom: "24px" }} />
                    <p style={{ fontFamily: S, fontSize: "1.15rem", fontStyle: "italic", color: "#1a1a1a", marginBottom: "14px" }}>"{prog.result}"</p>
                    <p style={{ fontFamily: G, fontSize: "0.875rem", color: "#777", marginBottom: "6px" }}>{prog.science}</p>
                    <p style={{ fontFamily: G, fontSize: "0.8rem", color: "#aaa", fontStyle: "italic" }}>{prog.source}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── IMPACTO BIENESTAR ─────────────────────────────── */}
        <section style={{ background: "#1a1a1a", padding: "80px 60px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontFamily: G, fontSize: "11px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#555", marginBottom: "28px" }}>04 · El Impacto: Personas</p>

            <h2 style={{ fontFamily: S, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400, lineHeight: 1.2, color: "#f0efe9", marginBottom: "20px" }}>
              Antes de hablar de dinero,
              <br /><em>hablemos de personas.</em>
            </h2>

            <p style={{ fontFamily: G, fontSize: "1rem", color: "#888", lineHeight: 1.8, maxWidth: "640px", marginBottom: "48px" }}>
              El dolor del developer remoto no es "normal en tech". Es real, acumulado e ignorado durante años. Aislamiento, insomnio, dolor postural, estrés sin herramientas — y vulnerabilidad silenciosa a la depresión. Eso fue lo que Willdom vivió de cerca.
            </p>

            <div style={{ borderTop: "1px solid #2e2e2e" }}>
              {impactos.map((imp) => (
                <div key={imp.title} style={{ padding: "48px 0", borderBottom: "1px solid #2e2e2e" }}>
                  <h3 style={{ fontFamily: S, fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 400, color: "#f0efe9", marginBottom: "10px", lineHeight: 1.2 }}>{imp.title}</h3>
                  <p style={{ fontFamily: S, fontSize: "1.05rem", fontStyle: "italic", color: "#666", marginBottom: "32px" }}>{imp.pull}</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px", marginBottom: "32px" }}>
                    {imp.points.map((pt) => (
                      <div key={pt.h} style={{ borderTop: "1px solid #2e2e2e", paddingTop: "20px" }}>
                        <p style={{ fontFamily: G, fontSize: "0.95rem", fontWeight: 600, color: "#e0dfd8", marginBottom: "10px" }}>{pt.h}</p>
                        <p style={{ fontFamily: G, fontSize: "0.9rem", color: "#777", lineHeight: 1.75 }}>{pt.b}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", paddingTop: "20px", borderTop: "1px solid #2e2e2e" }}>
                    <p style={{ fontFamily: G, fontSize: "0.95rem", color: "#bbb" }}>{imp.stat}</p>
                    <div style={{ width: "1px", height: "16px", background: "#333" }} />
                    <p style={{ fontFamily: G, fontSize: "0.8rem", color: "#555", fontStyle: "italic" }}>{imp.source}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── IMPACTO FINANCIERO ────────────────────────────── */}
        <section style={{ background: "#f0efe9", padding: "80px 60px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontFamily: G, fontSize: "11px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#999", marginBottom: "28px" }}>05 · Impacto Financiero</p>

            <h2 style={{ fontFamily: S, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400, lineHeight: 1.2, color: "#1a1a1a", marginBottom: "20px" }}>
              El bienestar también
              <br /><em>tiene retorno medible.</em>
            </h2>

            <p style={{ fontFamily: G, fontSize: "1rem", color: "#555", lineHeight: 1.8, maxWidth: "640px", marginBottom: "48px" }}>
              No significa trabajar más horas. Significa trabajar mejor en las mismas horas. Los estudios documentan cuánta productividad se pierde — y cuánto se puede recuperar con las herramientas adecuadas.
            </p>

            <div style={{ background: "#fff", padding: "56px", textAlign: "center", marginBottom: "48px", borderTop: "3px solid #1a1a1a" }}>
              <p style={{ fontFamily: G, fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#aaa", marginBottom: "20px" }}>Dato científico documentado</p>
              <p style={{ fontFamily: S, fontSize: "clamp(4rem, 14vw, 9rem)", fontWeight: 400, color: "#1a1a1a", lineHeight: 1, marginBottom: "16px" }}>11.3</p>
              <p style={{ fontFamily: S, fontSize: "clamp(1rem, 1.8vw, 1.3rem)", color: "#1a1a1a", marginBottom: "10px" }}>días de productividad perdida por persona, por año</p>
              <p style={{ fontFamily: G, fontSize: "0.82rem", color: "#aaa", fontStyle: "italic", marginBottom: "24px" }}>Harvard Business Review, 2019</p>
              <div style={{ width: "40px", height: "1px", background: "#ccc", margin: "0 auto 24px" }} />
              <p style={{ fontFamily: S, fontSize: "1.2rem", color: "#1a1a1a" }}>= $2,260 USD · por developer · por año</p>
            </div>

            <p style={{ fontFamily: G, fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#aaa", marginBottom: "20px" }}>Aplicación a Willdom · 87 usuarios activos (25% de 350)</p>

            <div style={{ background: "#fff", marginBottom: "12px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderBottom: "1px solid #e0e0da" }}>
                {["Programa", "Developers", "Retorno en 3 meses"].map((h) => (
                  <p key={h} style={{ fontFamily: G, fontSize: "10px", letterSpacing: "0.35em", textTransform: "uppercase", color: "#aaa", padding: "16px 24px" }}>{h}</p>
                ))}
              </div>
              {tableRows.map((r, i) => (
                <div key={r.label} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderBottom: i < tableRows.length - 1 ? "1px solid #e0e0da" : "none" }}>
                  <p style={{ fontFamily: S, fontSize: "1.05rem", padding: "20px 24px", color: "#1a1a1a" }}>{r.label}</p>
                  <p style={{ fontFamily: S, fontSize: "1.05rem", padding: "20px 24px", color: "#1a1a1a" }}>{r.devs}</p>
                  <p style={{ fontFamily: S, fontSize: "1.05rem", padding: "20px 24px", color: "#1a1a1a" }}>{r.retorno}</p>
                </div>
              ))}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "#1a1a1a", borderTop: "2px solid #1a1a1a" }}>
                <p style={{ fontFamily: S, fontSize: "1.05rem", padding: "20px 24px", color: "#f0efe9" }}>Total</p>
                <p style={{ fontFamily: S, fontSize: "1.05rem", padding: "20px 24px", color: "#f0efe9" }}>87</p>
                <p style={{ fontFamily: S, fontSize: "1.2rem", padding: "20px 24px", color: "#f0efe9" }}>$30,932</p>
              </div>
            </div>

            <p style={{ fontFamily: G, fontSize: "0.78rem", color: "#aaa", fontStyle: "italic", textAlign: "right", marginBottom: "48px" }}>Supuestos conservadores: 30% del potencial máximo documentado</p>

            <div style={{ textAlign: "center", padding: "56px 0", borderTop: "1px solid #d8d7d0", borderBottom: "1px solid #d8d7d0", marginBottom: "48px" }}>
              <p style={{ fontFamily: G, fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#aaa", marginBottom: "24px" }}>ROI del piloto · 3 meses</p>
              <p style={{ fontFamily: S, fontSize: "clamp(4rem, 14vw, 9rem)", fontWeight: 400, color: "#1a1a1a", lineHeight: 1, marginBottom: "16px" }}>3.9×</p>
              <p style={{ fontFamily: S, fontSize: "1.15rem", color: "#777" }}>$8,000 invertidos · $30,932 recuperados</p>
            </div>

            <p style={{ fontFamily: G, fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#aaa", marginBottom: "20px" }}>Métricas de éxito del piloto</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", border: "1px solid #d8d7d0" }}>
              {kpis.map((k, i) => (
                <div key={k.label} style={{ padding: "28px 20px", textAlign: "center", borderRight: i < kpis.length - 1 ? "1px solid #d8d7d0" : "none" }}>
                  <p style={{ fontFamily: S, fontSize: "1.6rem", fontWeight: 400, color: "#1a1a1a", lineHeight: 1, marginBottom: "8px" }}>{k.value}</p>
                  <p style={{ fontFamily: G, fontSize: "0.78rem", color: "#999", lineHeight: 1.4 }}>{k.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── INVERSIÓN ─────────────────────────────────────── */}
        <section style={{ background: "#fafaf8", padding: "80px 60px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontFamily: G, fontSize: "11px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#999", marginBottom: "28px" }}>06 · Inversión</p>

            <h2 style={{ fontFamily: S, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400, lineHeight: 1.2, color: "#1a1a1a", marginBottom: "20px" }}>
              Pagos escalonados
              <br /><em>y bonos basados en resultados reales.</em>
            </h2>

            <p style={{ fontFamily: G, fontSize: "1rem", color: "#555", lineHeight: 1.8, maxWidth: "640px", marginBottom: "48px" }}>
              La inversión base cubre el piloto completo de 3 meses. Los bonos adicionales solo se activan si se alcanzan los resultados acordados. Si no hay resultados, no hay bonos.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px" }}>
              <div>
                <p style={{ fontFamily: G, fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#aaa", marginBottom: "24px" }}>Cronograma de pagos</p>
                <div style={{ borderTop: "1px solid #e0e0da" }}>
                  {[
                    { n: "01", fecha: "Semana 1 — Anticipado", monto: "$3,000", desc: "Activación de acceso corporativo, setup técnico y configuración del dashboard." },
                    { n: "02", fecha: "15 de Abril — Mes 1", monto: "$2,500", desc: "Evaluación completa del primer mes: participación, retención y primeros datos." },
                    { n: "03", fecha: "15 de Mayo — Mes 2", monto: "$2,500", desc: "Evaluación del segundo mes. Ajustes si se requieren basados en feedback real." },
                  ].map((p) => (
                    <div key={p.n} style={{ display: "grid", gridTemplateColumns: "40px 1fr auto", gap: "16px", padding: "24px 0", borderBottom: "1px solid #e0e0da", alignItems: "start" }}>
                      <p style={{ fontFamily: S, fontSize: "1.4rem", color: "#ccc", fontWeight: 400, lineHeight: 1 }}>{p.n}</p>
                      <div>
                        <p style={{ fontFamily: G, fontSize: "10px", letterSpacing: "0.35em", textTransform: "uppercase", color: "#aaa", marginBottom: "8px" }}>{p.fecha}</p>
                        <p style={{ fontFamily: G, fontSize: "0.9rem", color: "#666", lineHeight: 1.65 }}>{p.desc}</p>
                      </div>
                      <p style={{ fontFamily: S, fontSize: "1.2rem", color: "#1a1a1a", fontWeight: 400, whiteSpace: "nowrap" }}>{p.monto}</p>
                    </div>
                  ))}
                  <div style={{ display: "grid", gridTemplateColumns: "40px 1fr auto", gap: "16px", padding: "24px", background: "#1a1a1a", alignItems: "center" }}>
                    <div />
                    <p style={{ fontFamily: G, fontSize: "0.95rem", color: "#f0efe9" }}>Base total — 3 meses</p>
                    <p style={{ fontFamily: S, fontSize: "1.5rem", color: "#f0efe9", fontWeight: 400 }}>$8,000</p>
                  </div>
                </div>
              </div>

              <div>
                <p style={{ fontFamily: G, fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#aaa", marginBottom: "24px" }}>Bonos por resultados · Mes 3</p>
                <div style={{ borderTop: "1px solid #e0e0da", marginBottom: "32px" }}>
                  {[
                    { cond: "70 usuarios activos en el Mes 1", bono: "+$1,500" },
                    { cond: "100 clases completadas en Mes 2 y 3", bono: "+$2,000" },
                    { cond: "NPS mayor a +5 al finalizar el piloto", bono: "+$1,000" },
                  ].map((b) => (
                    <div key={b.cond} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", padding: "20px 0", borderBottom: "1px solid #e0e0da" }}>
                      <p style={{ fontFamily: G, fontSize: "0.9rem", color: "#555", lineHeight: 1.5 }}>{b.cond}</p>
                      <p style={{ fontFamily: S, fontSize: "1.15rem", color: "#1a1a1a", whiteSpace: "nowrap" }}>{b.bono}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <p style={{ fontFamily: G, fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", color: "#aaa", marginBottom: "10px" }}>Máximo total</p>
                  <p style={{ fontFamily: S, fontSize: "clamp(2.5rem, 4.5vw, 3.8rem)", fontWeight: 400, color: "#1a1a1a", lineHeight: 1, marginBottom: "12px" }}>$12,500</p>
                  <p style={{ fontFamily: G, fontSize: "0.82rem", color: "#aaa", fontStyle: "italic" }}>Los bonos se activan únicamente si se alcanzan los resultados acordados.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── IMPLEMENTACIÓN ────────────────────────────────── */}
        <section style={{ background: "#f0efe9", padding: "80px 60px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <p style={{ fontFamily: G, fontSize: "11px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#999", marginBottom: "28px" }}>07 · Implementación</p>

            <h2 style={{ fontFamily: S, fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400, lineHeight: 1.2, color: "#1a1a1a", marginBottom: "20px" }}>
              De la firma al primer resultado:
              <br /><em>un proceso simple y sin fricción.</em>
            </h2>

            <p style={{ fontFamily: G, fontSize: "1rem", color: "#555", lineHeight: 1.8, maxWidth: "640px", marginBottom: "48px" }}>
              El piloto inicia con el primer pago. En 3–4 semanas el acceso está activo. En la semana 4–5 el equipo ya puede empezar a practicar. La decisión final se toma en el Mes 3 con datos reales — no promesas.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0", border: "1px solid #d8d7d0", marginBottom: "48px" }}>
              {fases.map((f, i) => (
                <div key={f.n} style={{ padding: "32px 28px", borderRight: i < fases.length - 1 ? "1px solid #d8d7d0" : "none" }}>
                  <p style={{ fontFamily: S, fontSize: "2rem", fontWeight: 400, color: "#ccc", lineHeight: 1, marginBottom: "16px" }}>{f.n}</p>
                  <p style={{ fontFamily: G, fontSize: "1rem", fontWeight: 600, color: "#1a1a1a", marginBottom: "6px" }}>{f.title}</p>
                  <p style={{ fontFamily: G, fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#aaa", marginBottom: "20px" }}>{f.time}</p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                    {f.items.map((item) => (
                      <li key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                        <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#aaa", flexShrink: 0, marginTop: "8px" }} />
                        <span style={{ fontFamily: G, fontSize: "0.875rem", color: "#666", lineHeight: 1.65 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p style={{ fontFamily: G, fontSize: "11px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#999", marginBottom: "24px" }}>Responsabilidades</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", border: "1px solid #d8d7d0" }}>
              {[
                { who: "AURA", items: ["Setup técnico y activación del acceso corporativo", "Reportes mensuales de datos agregados — nunca datos personales", "Soporte técnico continuo durante el piloto", "Disponibilidad para reuniones con equipos"] },
                { who: "Willdom", items: ["Comunicar el acceso al equipo — como invitación, no obligación", "Facilitar las reuniones de presentación con equipos pequeños", "Recolectar feedback honesto de quienes usen la plataforma", "Participar en la evaluación final del piloto"] },
              ].map((r, i) => (
                <div key={r.who} style={{ padding: "36px", borderRight: i === 0 ? "1px solid #d8d7d0" : "none" }}>
                  <p style={{ fontFamily: S, fontSize: "1.3rem", fontWeight: 400, color: "#1a1a1a", marginBottom: "24px" }}>{r.who}</p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
                    {r.items.map((item) => (
                      <li key={item} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                        <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#888", flexShrink: 0, marginTop: "9px" }} />
                        <span style={{ fontFamily: G, fontSize: "0.92rem", color: "#555", lineHeight: 1.7 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRÓXIMOS PASOS ────────────────────────────────── */}
        <section style={{ background: "#1a1a1a", minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "80px 60px" }}>
          <div style={{ maxWidth: "680px", textAlign: "center" }}>
            <p style={{ fontFamily: G, fontSize: "11px", letterSpacing: "0.45em", textTransform: "uppercase", color: "#555", marginBottom: "28px" }}>08 · Próximos Pasos</p>
            <h2 style={{ fontFamily: S, fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 400, lineHeight: 1.15, color: "#f0efe9", marginBottom: "24px" }}>
              Una reunión de 30 minutos
              <br /><em>para cerrar el acuerdo.</em>
            </h2>
            <p style={{ fontFamily: G, fontSize: "1rem", color: "#888", lineHeight: 1.8, marginBottom: "16px" }}>
              Con Karina y el equipo de decisión. El objetivo es simple: responder preguntas, validar el timeline, alinear expectativas y firmar.
            </p>
            <p style={{ fontFamily: G, fontSize: "0.9rem", color: "#555", lineHeight: 1.8, marginBottom: "40px" }}>
              El piloto puede iniciar en menos de 4 semanas desde la firma.
            </p>
            <a href="mailto:contacto@aura.com" style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.3)", color: "#f0efe9", fontFamily: G, fontSize: "0.82rem", letterSpacing: "0.3em", textTransform: "uppercase", padding: "18px 40px", textDecoration: "none", transition: "all 0.3s" }}>
              Agendar Reunión
            </a>
            <p style={{ fontFamily: G, fontSize: "0.82rem", color: "#444", fontStyle: "italic", marginTop: "20px" }}>Disponibles en el horario de su preferencia.</p>
          </div>
        </section>

        {/* ── FOOTER ────────────────────────────────────────── */}
        <footer style={{ background: "#f0efe9", borderTop: "1px solid #e0e0da", padding: "40px 60px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <p style={{ fontFamily: S, fontSize: "1.3rem", fontWeight: 400, color: "#1a1a1a", marginBottom: "4px" }}>AURA</p>
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
