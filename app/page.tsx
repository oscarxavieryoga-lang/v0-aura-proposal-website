// app/page.tsx
export default function Page() {

  // ── DATA ──────────────────────────────────────────────────────
  const challenges = [
    {
      index: "I", title: "Calidad de sueño", stat: "75%",
      statLabel: "de developers remotos reportan problemas de sueño",
      impact: "11.3 días de productividad perdida por persona al año",
      source: "Harvard Business Review, 2019",
    },
    {
      index: "II", title: "Dolor postural crónico", stat: "80%",
      statLabel: "experimenta dolor postural por posición de escritorio",
      impact: "12–15% de reducción directa en productividad",
      source: "OSHA – Datos Ocupacionales",
    },
    {
      index: "III", title: "Estrés crónico", stat: "65%",
      statLabel: "reporta estrés crónico sin herramientas de regulación",
      impact: "18–22% de reducción de productividad + riesgo de depresión silenciosa",
      source: "American Psychological Association, 2024",
    },
  ]

  const pillars = [
    { label: "Prácticas Reales", body: "Meditación, yoga, breathing y movimiento guiados por especialistas certificados. Basados en investigación científica y diseñados para resolver problemas específicos — no para llenar un calendario de beneficios." },
    { label: "Estructura Sin Fricción", body: "Programas con inicio, proceso e integración claros. No son cargas emocionales que se pueden fallar — generan logro genuino y continuidad natural en quien los completa." },
    { label: "Privacidad Total", body: "Espacio completamente separado de los sistemas corporativos. Sin vigilancia, sin presión, sin reportes individuales. Los datos de cada persona son 100% privados." },
    { label: "Comunidad Global", body: "Parte de una plataforma abierta al público general. Usuarios de distintas industrias, roles y contextos. La sensación de no estar solo en el desafío." },
  ]

  const programs = [
    {
      tag: "14 días", title: "Para el insomnio", subtitle: "Meditación · Breathing · Educación",
      result: "+1–2 horas de sueño real", science: "Capacidad cognitiva +30% · Riesgo depresión –40%",
      source: "Harvard Business Review", image: "/images/sleep-wellness.jpg",
    },
    {
      tag: "21 días", title: "Para el dolor postural", subtitle: "Yoga · Stretching · Educación",
      result: "–35 a 50% reducción de dolor", science: "Ansiedad –40% · Depresión –30%",
      source: "American Psychological Association", image: "/images/yoga-nature.jpg",
    },
    {
      tag: "7 días", title: "Para el estrés crónico", subtitle: "Meditación · Breathing · Educación",
      result: "Reducción visible de estrés en 7 días", science: "Depresión clínica –60% · Burnout –50%",
      source: "WHO Global Mental Health Report 2023", image: "/images/stress-relief.jpg",
    },
  ]

  const impactos = [
    {
      title: "Cuando mejora el sueño", pull: "El sistema nervioso se regula. La mente descansa. El trabajo fluye.",
      points: [
        { h: "Menos ansiedad", b: "El sistema nervioso regulado reduce la reactividad emocional durante el día. Menos conflictos, menos errores por tensión acumulada." },
        { h: "Claridad mental", b: "Decisiones más sólidas, menos errores en código, mejor concentración en problemas complejos que requieren foco sostenido." },
        { h: "Energía recuperada", b: "La vida fuera del trabajo vuelve a ser posible. Las relaciones mejoran. El developer deja de operar en modo supervivencia." },
      ],
      stat: "+30% capacidad cognitiva · –40% riesgo de depresión", source: "Harvard Business Review, 2019",
    },
    {
      title: "Cuando recupera su cuerpo", pull: "El movimiento libera lo que el escritorio acumula.",
      points: [
        { h: "Tensión liberada", b: "Vuelve a sentirse presente en su cuerpo. Menos disociación. Más conexión consigo mismo durante y fuera del trabajo." },
        { h: "Sin dolor, más foco", b: "Deja de lidiar constantemente con el dolor de espalda o cuello. Puede concentrarse en el trabajo, no en el malestar físico." },
        { h: "Autoestima recuperada", b: "Recupera sensación de control sobre sí mismo. Se siente cuidado. Hay dignidad en moverse y en estar bien en el cuerpo." },
      ],
      stat: "–40% ansiedad · –30% depresión", source: "American Psychological Association",
    },
    {
      title: "Cuando aprende a regular el estrés", pull: "Herramientas reales que funcionan — no presión que reprime.",
      points: [
        { h: "Sensación de control", b: "Ya no es víctima del estrés. Tiene herramientas concretas que generan agencia sobre su propio estado emocional." },
        { h: "Menos resentimiento", b: "Regula en el momento, no llega al fin de semana explotando o completamente desconectado de su entorno." },
        { h: "Prevención de crisis", b: "El developer con herramientas de regulación emocional puede anticipar el colapso. La depresión silenciosa tiene una salida." },
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
    { n: "01", title: "Preparación", time: "3–4 semanas", items: ["Setup técnico del acceso corporativo", "Configuración del dashboard privado", "Preparación de materiales de comunicación para el equipo"] },
    { n: "02", title: "Lanzamiento", time: "Semana 4–5", items: ["Presentaciones a equipos pequeños (30–45 min)", "Link de acceso disponible — sin presión ni obligación", "Soporte técnico activo para dudas iniciales"] },
    { n: "03", title: "Monitoreo", time: "Mes 1, 2 y 3", items: ["Reportes mensuales de participación y retención", "Recolección de feedback de usuarios activos", "Ajustes al proceso si los datos lo indican"] },
    { n: "04", title: "Evaluación", time: "Final del Mes 3", items: ["Reporte final con datos completos del piloto", "Decisión conjunta: Continuar · Expandir · Pausar"] },
  ]

  // ── SHARED STYLES ─────────────────────────────────────────────
  const label = { fontFamily: "'Geist', sans-serif" } as React.CSSProperties
  const G = "'Geist', sans-serif"

  return (
    <main className="bg-background text-foreground font-serif">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden flex flex-col bg-white" style={{ height: "100svh", minHeight: 600 }}>
        <header className="relative z-20 flex items-center justify-between px-8 md:px-16 pt-8">
          <span className="text-black/35 text-[10px] tracking-[0.5em] uppercase" style={{ fontFamily: G, fontWeight: 300 }}>AURA</span>
          <span className="text-black/25 text-[10px] tracking-[0.25em] uppercase" style={{ fontFamily: G }}>Confidencial · Febrero 2025</span>
        </header>

        <div className="relative z-10 flex flex-col flex-1 items-center justify-center text-center px-6 gap-8">
          <p className="text-black/40 uppercase" style={{ fontFamily: G, fontSize: "clamp(0.65rem, 1.2vw, 0.78rem)", letterSpacing: "0.45em" }}>
            PROPUESTA COMERCIAL · WILLDOM · 2025
          </p>
          <h1 className="font-serif font-light text-black" style={{ fontSize: "clamp(2.8rem, 7vw, 5.8rem)", lineHeight: 1.05, maxWidth: 820 }}>
            Una plataforma de bienestar integral
            <br /><span className="italic">para el equipo de Willdom.</span>
          </h1>
          <div className="w-10 h-px bg-black/20" />
          <p className="text-black/50 font-serif font-light" style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.2rem)", lineHeight: 1.7, maxWidth: 480 }}>
            Piloto de 3 meses. ROI estimado 3.9×.<br />Inversión base $8,000 USD.
          </p>
          <div className="overflow-hidden rounded-xl w-full" style={{ maxWidth: 680, height: "clamp(180px, 28vw, 340px)" }}>
            <img src="/images/hero-meditation.jpg" alt="Bienestar" className="w-full h-full object-cover object-center" style={{ filter: "grayscale(20%) brightness(0.96)" }} />
          </div>
          <div className="flex items-center gap-10">
            {[{ val: "3.9×", label: "ROI estimado" }, { val: "25%", label: "Participación esperada" }, { val: "3 m.", label: "Piloto" }].map((m, i, arr) => (
              <div key={m.label} className="flex items-center gap-10">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-black font-serif font-light" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", lineHeight: 1 }}>{m.val}</span>
                  <span className="text-black/35 uppercase" style={{ fontFamily: G, fontSize: "0.6rem", letterSpacing: "0.3em" }}>{m.label}</span>
                </div>
                {i < arr.length - 1 && <div className="w-px h-8 bg-black/10" />}
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-20 flex flex-col items-center gap-3 pb-8">
          <div className="w-px h-10 bg-black/15" />
          <span className="text-black/25 text-[9px] tracking-[0.4em] uppercase" style={{ fontFamily: G }}>Scroll</span>
        </div>
      </section>

      {/* ── RESUMEN EJECUTIVO ─────────────────────────────────── */}
      <section className="w-full py-24 px-8 md:px-16 bg-background">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] tracking-[0.45em] uppercase text-muted-foreground mb-8" style={label}>Resumen Ejecutivo</p>
          <h2 className="font-serif font-light text-foreground text-balance mb-6" style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", lineHeight: 1.15 }}>
            Willdom enfrentó una crisis de salud mental en su equipo.
            <br /><span className="italic">La pregunta que surgió fue inevitable:</span>
          </h2>
          <p className="font-serif italic text-muted-foreground mb-10" style={{ fontSize: "clamp(1.2rem, 2.8vw, 1.8rem)", lineHeight: 1.45 }}>
            "¿Cómo mejoramos genuinamente el bienestar de nuestro equipo?"
          </p>
          <p className="text-foreground/70 mb-14 max-w-2xl leading-relaxed" style={{ fontFamily: G, fontSize: "1rem" }}>
            AURA es la respuesta. Una plataforma digital de bienestar integral con acceso corporativo — diseñada para developers remotos que cargan con insomnio, dolor postural y estrés crónico sin herramientas para manejarlo. Acceso 24/7, privacidad total, sin vigilancia corporativa.
          </p>
          <div className="w-full h-px bg-border mb-14" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {[
              { label: "La solución", value: "AURA", sub: "Plataforma de bienestar integral" },
              { label: "Participación esperada", value: "25%", sub: "87 de 350 developers" },
              { label: "Retorno estimado", value: "3.9×", sub: "ROI en 3 meses de piloto" },
              { label: "Inversión base", value: "$8,000", sub: "Piloto 3 meses · pagos escalonados" },
            ].map((item) => (
              <div key={item.label} className="px-0 sm:px-8 py-10 sm:py-0 first:pl-0">
                <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3" style={{ fontFamily: G }}>{item.label}</p>
                <p className="font-serif font-light text-foreground mb-2" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1 }}>{item.value}</p>
                <p className="text-muted-foreground leading-snug" style={{ fontFamily: G, fontSize: "0.85rem" }}>{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EL CONTEXTO ───────────────────────────────────────── */}
      <section className="w-full bg-secondary py-24 px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] tracking-[0.45em] uppercase text-muted-foreground mb-8" style={label}>El Contexto</p>
          <h2 className="font-serif font-light text-foreground text-balance mb-6" style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", lineHeight: 1.15 }}>
            El developer remoto carga con dolor real,
            <br /><span className="italic">sin herramientas para manejarlo.</span>
          </h2>
          <p className="text-muted-foreground mb-16 max-w-2xl leading-relaxed" style={{ fontFamily: G, fontSize: "1rem" }}>
            Tres desafíos documentados por investigación científica afectan directamente la productividad, la salud mental y la retención del talento en la industria tech. No son percepciones — son datos.
          </p>
          <div className="space-y-0 divide-y divide-border border-t border-border">
            {challenges.map((c) => (
              <div key={c.index} className="grid grid-cols-1 md:grid-cols-[64px_1fr_1fr] gap-6 md:gap-12 py-12">
                <p className="font-serif font-light text-muted-foreground/50" style={{ fontSize: "2rem", lineHeight: 1 }}>{c.index}</p>
                <div>
                  <h3 className="font-serif font-light text-foreground mb-4" style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.8rem)", lineHeight: 1.2 }}>{c.title}</h3>
                  <p className="font-serif font-light text-foreground" style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)", lineHeight: 1 }}>{c.stat}</p>
                  <p className="text-muted-foreground mt-2 leading-relaxed" style={{ fontFamily: G, fontSize: "0.9rem" }}>{c.statLabel}</p>
                </div>
                <div className="flex flex-col justify-center gap-4">
                  <div>
                    <p className="text-[9px] tracking-[0.4em] uppercase text-muted-foreground mb-2" style={{ fontFamily: G }}>Impacto documentado</p>
                    <p className="font-serif text-foreground leading-snug" style={{ fontSize: "1.05rem" }}>{c.impact}</p>
                  </div>
                  <p className="text-muted-foreground italic" style={{ fontFamily: G, fontSize: "0.8rem" }}>{c.source}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LA SOLUCIÓN ───────────────────────────────────────── */}
      <section className="w-full bg-background py-24 px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] tracking-[0.45em] uppercase text-muted-foreground mb-8" style={label}>La Solución</p>
          <h2 className="font-serif font-light text-foreground text-balance mb-6" style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", lineHeight: 1.15 }}>
            AURA es una arquitectura de bienestar.
            <br /><span className="italic">No un beneficio corporativo. Un espacio real.</span>
          </h2>
          <p className="text-foreground/65 mb-16 max-w-2xl leading-relaxed" style={{ fontFamily: G, fontSize: "1rem" }}>
            Acceso 24/7, privacidad total, prácticas guiadas por especialistas y comunidad global. El equipo accede por voluntad propia — sin presión, sin integración con sistemas corporativos, sin vigilancia.
          </p>

          {/* Pilares */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 divide-y sm:divide-y-0 border-t border-b border-border mb-20">
            {pillars.map((p, i) => (
              <div key={p.label} className={`py-10 ${i % 2 === 0 ? "sm:pr-12 sm:border-r border-border" : "sm:pl-12"} ${i >= 2 ? "sm:border-t border-border" : ""}`}>
                <p className="text-[9px] tracking-[0.45em] uppercase text-muted-foreground mb-4" style={{ fontFamily: G }}>0{i + 1}</p>
                <h3 className="font-serif font-light text-foreground mb-3" style={{ fontSize: "1.25rem" }}>{p.label}</h3>
                <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: G, fontSize: "0.9rem" }}>{p.body}</p>
              </div>
            ))}
          </div>

          {/* Cómo funciona */}
          <p className="text-[10px] tracking-[0.45em] uppercase text-muted-foreground mb-10" style={label}>Cómo funciona</p>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 mb-20">
            {[
              { n: "1", label: "Acceso privado", desc: "Link separado al entorno corporativo. Login individual. Sin integración con los sistemas de Willdom." },
              { n: "2", label: "Elige tu camino", desc: "Cada persona selecciona el programa según su necesidad real. Sin presión para elegir correctamente." },
              { n: "3", label: "Práctica en vivo", desc: "Acceso 24/7. Sin horarios fijos. Cada persona practica a su ritmo y en su tiempo." },
              { n: "4", label: "Datos agregados", desc: "El administrador ve participación y retención general — nunca datos individuales ni personales." },
            ].map((s) => (
              <div key={s.n}>
                <p className="font-serif font-light text-foreground mb-4" style={{ fontSize: "2.8rem", lineHeight: 1 }}>{s.n}</p>
                <p className="font-serif text-foreground mb-2" style={{ fontSize: "1rem" }}>{s.label}</p>
                <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: G, fontSize: "0.875rem" }}>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Programas */}
          <p className="text-[10px] tracking-[0.45em] uppercase text-muted-foreground mb-10" style={label}>Programas de ejemplo</p>
          <div className="space-y-0 divide-y divide-border border-t border-b border-border">
            {programs.map((prog, i) => (
              <div key={prog.title} className={`grid grid-cols-1 md:grid-cols-2 gap-0 ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
                <div className="overflow-hidden" style={{ height: "clamp(240px, 32vw, 400px)", direction: "ltr" }}>
                  <img src={prog.image} alt={prog.title} className="w-full h-full object-cover" style={{ filter: "grayscale(10%)" }} />
                </div>
                <div className="flex flex-col justify-center px-8 md:px-12 py-12" style={{ direction: "ltr" }}>
                  <p className="text-[9px] tracking-[0.45em] uppercase text-muted-foreground mb-5" style={{ fontFamily: G }}>{prog.tag}</p>
                  <h3 className="font-serif font-light text-foreground mb-3" style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)", lineHeight: 1.15 }}>{prog.title}</h3>
                  <p className="text-muted-foreground mb-6" style={{ fontFamily: G, fontSize: "0.88rem" }}>{prog.subtitle}</p>
                  <div className="w-8 h-px bg-border mb-6" />
                  <p className="font-serif italic text-foreground mb-3" style={{ fontSize: "1.1rem" }}>"{prog.result}"</p>
                  <p className="text-muted-foreground mb-1" style={{ fontFamily: G, fontSize: "0.82rem" }}>{prog.science}</p>
                  <p className="text-muted-foreground italic" style={{ fontFamily: G, fontSize: "0.75rem" }}>{prog.source}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACTO BIENESTAR ─────────────────────────────────── */}
      <section className="w-full bg-foreground py-24 px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] tracking-[0.45em] uppercase text-background/40 mb-8" style={label}>El Impacto</p>
          <h2 className="font-serif font-light text-background text-balance mb-6" style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", lineHeight: 1.15 }}>
            Antes de hablar de dinero,
            <br /><span className="italic">hablemos de personas.</span>
          </h2>
          <p className="text-background/60 mb-16 max-w-2xl leading-relaxed" style={{ fontFamily: G, fontSize: "1rem" }}>
            El dolor del developer remoto no es "normal en tech". Es real, acumulado e ignorado durante años. Aislamiento, insomnio, dolor postural, estrés sin herramientas — y vulnerabilidad silenciosa a la depresión sin avisos previos. Eso fue lo que Willdom vivió de cerca.
          </p>
          <div className="space-y-0 divide-y divide-background/15 border-t border-background/15">
            {impactos.map((imp) => (
              <div key={imp.title} className="py-14">
                <h3 className="font-serif font-light text-background mb-3" style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)", lineHeight: 1.2 }}>{imp.title}</h3>
                <p className="font-serif italic text-background/60 mb-10" style={{ fontSize: "1rem" }}>{imp.pull}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                  {imp.points.map((pt) => (
                    <div key={pt.h}>
                      <p className="font-serif text-background mb-2" style={{ fontSize: "1rem" }}>{pt.h}</p>
                      <p className="text-background/55 leading-relaxed" style={{ fontFamily: G, fontSize: "0.88rem" }}>{pt.b}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-6 border-t border-background/15">
                  <p className="font-serif text-background/85" style={{ fontSize: "1rem" }}>{imp.stat}</p>
                  <span className="hidden sm:block w-px h-4 bg-background/20 mx-2" />
                  <p className="text-background/35 italic" style={{ fontFamily: G, fontSize: "0.78rem" }}>{imp.source}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACTO FINANCIERO ────────────────────────────────── */}
      <section className="w-full bg-secondary py-24 px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] tracking-[0.45em] uppercase text-muted-foreground mb-8" style={label}>Impacto Financiero</p>
          <h2 className="font-serif font-light text-foreground text-balance mb-6" style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", lineHeight: 1.15 }}>
            El bienestar también
            <br /><span className="italic">tiene retorno medible.</span>
          </h2>
          <p className="text-muted-foreground mb-16 max-w-2xl leading-relaxed" style={{ fontFamily: G, fontSize: "1rem" }}>
            No significa trabajar más horas. Significa trabajar mejor en las mismas horas. Los estudios documentan con precisión cuánta productividad se pierde por problemas de bienestar — y cuánto se puede recuperar con las herramientas adecuadas.
          </p>

          <div className="bg-background py-16 px-8 text-center mb-16">
            <p className="text-[9px] tracking-[0.45em] uppercase text-muted-foreground mb-6" style={{ fontFamily: G }}>Dato científico documentado</p>
            <p className="font-serif font-light text-foreground mb-4" style={{ fontSize: "clamp(4.5rem, 16vw, 10rem)", lineHeight: 1 }}>11.3</p>
            <p className="font-serif text-foreground mb-3" style={{ fontSize: "clamp(1rem, 2.2vw, 1.3rem)" }}>días de productividad perdida por persona, por año</p>
            <p className="text-muted-foreground italic mb-6" style={{ fontFamily: G, fontSize: "0.82rem" }}>Harvard Business Review, 2019</p>
            <div className="w-10 h-px bg-border mx-auto mb-6" />
            <p className="font-serif text-foreground" style={{ fontSize: "1.1rem" }}>= $2,260 USD · por developer · por año</p>
          </div>

          <p className="text-[10px] tracking-[0.45em] uppercase text-muted-foreground mb-6" style={label}>Aplicación a Willdom · 87 usuarios activos (25% de 350)</p>
          <div className="bg-background border-t border-border mb-4">
            <div className="grid grid-cols-3 gap-0 border-b border-border">
              {["Programa", "Developers", "Retorno en 3 meses"].map((h) => (
                <p key={h} className="px-6 py-4 text-[9px] tracking-[0.4em] uppercase text-muted-foreground" style={{ fontFamily: G }}>{h}</p>
              ))}
            </div>
            {tableRows.map((r, i) => (
              <div key={r.label} className={`grid grid-cols-3 gap-0 ${i < tableRows.length - 1 ? "border-b border-border" : ""}`}>
                <p className="px-6 py-5 font-serif text-foreground" style={{ fontSize: "1rem" }}>{r.label}</p>
                <p className="px-6 py-5 font-serif text-foreground" style={{ fontSize: "1rem" }}>{r.devs}</p>
                <p className="px-6 py-5 font-serif text-foreground" style={{ fontSize: "1rem" }}>{r.retorno}</p>
              </div>
            ))}
            <div className="grid grid-cols-3 gap-0 border-t border-foreground/20 bg-foreground">
              <p className="px-6 py-5 font-serif font-light text-background" style={{ fontSize: "1rem" }}>Total</p>
              <p className="px-6 py-5 font-serif font-light text-background" style={{ fontSize: "1rem" }}>87</p>
              <p className="px-6 py-5 font-serif font-light text-background" style={{ fontSize: "1.1rem" }}>$30,932</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-20 text-right italic" style={{ fontFamily: G, fontSize: "0.78rem" }}>Supuestos conservadores: 30% del potencial máximo documentado</p>

          <div className="text-center py-16 border-t border-b border-border mb-16">
            <p className="text-[9px] tracking-[0.45em] uppercase text-muted-foreground mb-8" style={{ fontFamily: G }}>ROI del piloto · 3 meses</p>
            <p className="font-serif font-light text-foreground mb-5" style={{ fontSize: "clamp(4.5rem, 16vw, 10rem)", lineHeight: 1 }}>3.9×</p>
            <p className="font-serif text-muted-foreground" style={{ fontSize: "1.1rem" }}>$8,000 invertidos · $30,932 recuperados</p>
          </div>

          <p className="text-[10px] tracking-[0.45em] uppercase text-muted-foreground mb-8" style={label}>Métricas de éxito del piloto</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-border border border-border">
            {kpis.map((k) => (
              <div key={k.label} className="px-6 py-8 text-center">
                <p className="font-serif font-light text-foreground mb-2" style={{ fontSize: "1.7rem", lineHeight: 1 }}>{k.value}</p>
                <p className="text-muted-foreground leading-snug" style={{ fontFamily: G, fontSize: "0.78rem" }}>{k.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INVERSIÓN ─────────────────────────────────────────── */}
      <section className="w-full bg-background py-24 px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] tracking-[0.45em] uppercase text-muted-foreground mb-8" style={label}>Inversión</p>
          <h2 className="font-serif font-light text-foreground text-balance mb-6" style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", lineHeight: 1.15 }}>
            Estructura de pagos escalonada
            <br /><span className="italic">y basada en resultados reales.</span>
          </h2>
          <p className="text-foreground/65 mb-16 max-w-2xl leading-relaxed" style={{ fontFamily: G, fontSize: "1rem" }}>
            La inversión base cubre el piloto completo de 3 meses. Los bonos adicionales solo se activan si se alcanzan los resultados acordados — si no hay resultados, no hay bonos. Sin letra pequeña.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[9px] tracking-[0.4em] uppercase text-muted-foreground mb-8" style={{ fontFamily: G }}>Cronograma de pagos</p>
              <div className="space-y-0 divide-y divide-border border-t border-b border-border">
                {[
                  { n: "01", fecha: "Semana 1 — Anticipado", monto: "$3,000", desc: "Activación de acceso corporativo, setup técnico y configuración inicial del dashboard." },
                  { n: "02", fecha: "15 de Abril — Mes 1", monto: "$2,500", desc: "Evaluación completa del primer mes: participación, retención y primeros datos." },
                  { n: "03", fecha: "15 de Mayo — Mes 2", monto: "$2,500", desc: "Evaluación del segundo mes. Ajustes si se requieren basados en feedback real." },
                ].map((p) => (
                  <div key={p.n} className="grid grid-cols-[48px_1fr_auto] gap-6 py-8 items-start">
                    <p className="font-serif font-light text-muted-foreground/50" style={{ fontSize: "1.6rem", lineHeight: 1 }}>{p.n}</p>
                    <div>
                      <p className="text-[9px] tracking-[0.4em] uppercase text-muted-foreground mb-2" style={{ fontFamily: G }}>{p.fecha}</p>
                      <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: G, fontSize: "0.88rem" }}>{p.desc}</p>
                    </div>
                    <p className="font-serif font-light text-foreground" style={{ fontSize: "1.25rem", lineHeight: 1 }}>{p.monto}</p>
                  </div>
                ))}
                <div className="grid grid-cols-[48px_1fr_auto] gap-6 py-7 items-center bg-foreground">
                  <div />
                  <p className="font-serif text-background" style={{ fontSize: "1rem" }}>Base total — 3 meses</p>
                  <p className="font-serif font-light text-background" style={{ fontSize: "1.5rem", lineHeight: 1 }}>$8,000</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.4em] uppercase text-muted-foreground mb-8" style={{ fontFamily: G }}>Bonos por resultados · evaluados al Mes 3</p>
              <div className="space-y-0 divide-y divide-border border-t border-b border-border mb-10">
                {[
                  { cond: "70 usuarios activos en el Mes 1", bono: "+$1,500" },
                  { cond: "100 clases completadas en Mes 2 y 3", bono: "+$2,000" },
                  { cond: "NPS mayor a +5 al finalizar el piloto", bono: "+$1,000" },
                ].map((b) => (
                  <div key={b.cond} className="flex items-center justify-between gap-6 py-7">
                    <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: G, fontSize: "0.9rem" }}>{b.cond}</p>
                    <p className="font-serif text-foreground flex-shrink-0" style={{ fontSize: "1.1rem" }}>{b.bono}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-end justify-between pt-2">
                <div>
                  <p className="text-[9px] tracking-[0.4em] uppercase text-muted-foreground mb-2" style={{ fontFamily: G }}>Máximo total</p>
                  <p className="font-serif font-light text-foreground" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1 }}>$12,500</p>
                </div>
                <p className="text-muted-foreground italic text-right max-w-[200px]" style={{ fontFamily: G, fontSize: "0.78rem" }}>Los bonos se activan únicamente si se alcanzan los resultados acordados.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPLEMENTACIÓN ────────────────────────────────────── */}
      <section className="w-full bg-background py-24 px-8 md:px-16 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <p className="text-[10px] tracking-[0.45em] uppercase text-muted-foreground mb-8" style={label}>Implementación</p>
          <h2 className="font-serif font-light text-foreground text-balance mb-6" style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", lineHeight: 1.15 }}>
            De la firma al primer resultado:
            <br /><span className="italic">un proceso simple y sin fricción.</span>
          </h2>
          <p className="text-foreground/65 mb-16 max-w-2xl leading-relaxed" style={{ fontFamily: G, fontSize: "1rem" }}>
            El piloto inicia con el primer pago. En 3 a 4 semanas el acceso está activo. En la semana 4 o 5 el equipo ya puede empezar a practicar. La decisión final se toma en el Mes 3 con datos reales — no con promesas.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border border border-border mb-16">
            {fases.map((f) => (
              <div key={f.n} className="p-8">
                <p className="font-serif font-light text-muted-foreground/40 mb-5" style={{ fontSize: "2.2rem", lineHeight: 1 }}>{f.n}</p>
                <p className="font-serif text-foreground mb-1" style={{ fontSize: "1.05rem" }}>{f.title}</p>
                <p className="text-[9px] tracking-[0.35em] uppercase text-muted-foreground mb-5" style={{ fontFamily: G }}>{f.time}</p>
                <ul className="space-y-3">
                  {f.items.map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span className="mt-[7px] w-1 h-1 rounded-full bg-muted-foreground/50 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed" style={{ fontFamily: G, fontSize: "0.85rem" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-[10px] tracking-[0.45em] uppercase text-muted-foreground mb-8" style={label}>Responsabilidades</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-border border border-border">
            {[
              { who: "AURA", items: ["Setup técnico y activación del acceso corporativo", "Reportes mensuales de datos agregados — nunca datos personales", "Soporte técnico continuo durante el piloto", "Disponibilidad para reuniones de presentación con equipos"] },
              { who: "Willdom", items: ["Comunicar el acceso al equipo — como invitación, no como obligación", "Facilitar las reuniones de presentación con equipos pequeños", "Recolectar feedback honesto de quienes usen la plataforma", "Participar en la evaluación final del piloto con criterio abierto"] },
            ].map((r) => (
              <div key={r.who} className="p-10">
                <p className="font-serif font-light text-foreground mb-7" style={{ fontSize: "1.4rem" }}>{r.who}</p>
                <ul className="space-y-4">
                  {r.items.map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span className="mt-[7px] w-1 h-1 rounded-full bg-foreground/40 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed" style={{ fontFamily: G, fontSize: "0.9rem" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRÓXIMOS PASOS ────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-foreground" style={{ minHeight: "65vh" }}>
        <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[65vh] px-8 py-24">
          <p className="text-white/40 text-[10px] tracking-[0.45em] uppercase mb-8" style={{ fontFamily: G }}>Próximos Pasos</p>
          <h2 className="font-serif font-light text-white text-balance mb-6" style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)", lineHeight: 1.1 }}>
            Una reunión de 30 minutos
            <br /><span className="italic">para cerrar el acuerdo.</span>
          </h2>
          <p className="text-white/60 mb-6 max-w-lg leading-relaxed" style={{ fontFamily: G, fontSize: "1rem" }}>
            Con Karina y el equipo de decisión. El objetivo es simple: responder preguntas, validar el timeline, alinear expectativas y firmar.
          </p>
          <p className="text-white/40 mb-14 max-w-md leading-relaxed" style={{ fontFamily: G, fontSize: "0.88rem" }}>
            El piloto puede iniciar en menos de 4 semanas desde la firma. El equipo puede estar practicando antes de que termine el mes.
          </p>
          <a href="mailto:contacto@aura.com" className="inline-block border border-white/50 text-white tracking-[0.3em] uppercase px-10 py-4 hover:bg-white hover:text-black transition-colors duration-300" style={{ fontFamily: G, fontSize: "0.8rem" }}>
            Agendar Reunión
          </a>
          <p className="mt-5 text-white/30 italic" style={{ fontFamily: G, fontSize: "0.8rem" }}>Disponibles en el horario de su preferencia.</p>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────── */}
      <footer className="w-full bg-secondary border-t border-border py-12 px-8 md:px-16">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div>
            <p className="font-serif font-light text-foreground mb-1" style={{ fontSize: "1.4rem" }}>AURA</p>
            <p className="text-muted-foreground" style={{ fontFamily: G, fontSize: "0.82rem" }}>Plataforma Digital de Bienestar Integral</p>
          </div>
          <div className="text-right">
            <p className="text-muted-foreground mb-1" style={{ fontFamily: G, fontSize: "0.78rem" }}>Propuesta Comercial para Willdom · Febrero 2025</p>
            <p className="text-muted-foreground italic" style={{ fontFamily: G, fontSize: "0.72rem" }}>Confidencial</p>
          </div>
        </div>
      </footer>

    </main>
  )
}
