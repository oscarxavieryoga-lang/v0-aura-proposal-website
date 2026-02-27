const impactos = [
  {
    num: "01",
    title: "Cuando mejora el sueño",
    tagline: "Sistema nervioso regulado. Mente descansada. Trabajo de calidad.",
    points: [
      { h: "Menos ansiedad diaria", b: "El sistema nervioso regulado reduce reactividad emocional y manejo de presión." },
      { h: "Claridad mental real", b: "Decisiones mejores, menos errores en código, mejor concentración en problemas complejos." },
      { h: "Energía recuperada", b: "Vida fuera del trabajo posible de nuevo. Relaciones mejoran. Sensación de estar vivo, no solo funcionar." },
    ],
    stat: "+30% capacidad cognitiva",
    stat2: "–40% riesgo de depresión",
    source: "Harvard Business Review, 2019",
  },
  {
    num: "02",
    title: "Cuando recupera su cuerpo",
    tagline: "El movimiento libera lo que el escritorio acumula.",
    points: [
      { h: "Tensión liberada", b: "Vuelve a sentirse presente en su cuerpo. Menos disociación. Mayor conexión consigo mismo." },
      { h: "Sin dolor, más foco", b: "Deja de lidiar con el dolor de espalda para poder concentrarse en su trabajo." },
      { h: "Autoestima recuperada", b: "Sensación de control sobre su bienestar. Se siente cuidado por sí mismo." },
    ],
    stat: "–40% ansiedad",
    stat2: "–30% depresión",
    source: "American Psychological Association",
  },
  {
    num: "03",
    title: "Cuando regula el estrés",
    tagline: "Herramientas que funcionan. No presión que reprime.",
    points: [
      { h: "Sensación de control", b: "No es víctima del estrés. Tiene herramientas reales que generan agencia sobre su experiencia." },
      { h: "Menos resentimiento acumulado", b: "Regula en el momento. No llega el fin de semana explotando o desconectado." },
      { h: "Prevención de crisis", b: "Developer con herramientas evita el colapso. La depresión silenciosa tiene opciones." },
    ],
    stat: "–60% riesgo depresión clínica",
    stat2: "–50% burnout",
    source: "WHO Global Mental Health Report, 2023",
  },
]

export default function ImpactoBienestar() {
  return (
    <section id="bienestar" className="w-full py-14 px-6 md:px-12 border-t" style={{ background: "#1A2E25", borderColor: "#2A4035" }}>
      <div className="max-w-5xl mx-auto">

        <p className="font-sans text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "#7AB5A8" }}>
          04 · Impacto: Bienestar
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end mb-10">
          <h2 className="font-serif text-white text-balance" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", lineHeight: 1.2, fontWeight: 600 }}>
            Antes de hablar de dinero, hablemos de personas.
          </h2>
          <p className="font-sans leading-relaxed" style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.55)" }}>
            El dolor del developer remoto no es "normal en tech". Es real, acumulado e ignorado. Aislamiento, insomnio, dolor postural, estrés sin herramientas — vulnerabilidad a depresión silenciosa sin avisos previos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {impactos.map((imp) => (
            <div key={imp.num} className="rounded-md overflow-hidden border" style={{ borderColor: "#2A4035" }}>
              {/* Card header */}
              <div className="px-4 py-4 border-b" style={{ background: "rgba(255,255,255,0.05)", borderColor: "#2A4035" }}>
                <span className="font-sans text-xs font-medium" style={{ color: "#7AB5A8" }}>{imp.num}</span>
                <h3 className="font-serif font-semibold text-white mt-1" style={{ fontSize: "1.05rem", lineHeight: 1.3 }}>
                  {imp.title}
                </h3>
                <p className="font-sans text-xs mt-1 italic" style={{ color: "rgba(255,255,255,0.45)" }}>{imp.tagline}</p>
              </div>

              {/* Points */}
              <div className="px-4 py-4 space-y-3">
                {imp.points.map((pt) => (
                  <div key={pt.h}>
                    <p className="font-sans text-xs font-semibold text-white mb-0.5">{pt.h}</p>
                    <p className="font-sans text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{pt.b}</p>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="px-4 py-3 border-t flex items-center gap-4" style={{ borderColor: "#2A4035", background: "rgba(74,124,111,0.15)" }}>
                <div>
                  <p className="font-sans font-semibold text-xs" style={{ color: "#7AB5A8" }}>{imp.stat}</p>
                  <p className="font-sans font-semibold text-xs" style={{ color: "#7AB5A8" }}>{imp.stat2}</p>
                  <p className="font-sans text-xs italic mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>{imp.source}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
