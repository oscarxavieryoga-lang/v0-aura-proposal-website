const impactos = [
  {
    title: "Cuando mejora el sueño",
    pull: "El sistema nervioso se regula. La mente descansa. El trabajo fluye.",
    points: [
      { h: "Menos ansiedad", b: "El sistema nervioso regulado reduce reactividad emocional durante el día." },
      { h: "Claridad mental", b: "Decisiones mejores, menos errores, mejor concentración en problemas complejos." },
      { h: "Energía de vuelta", b: "Vida fuera del trabajo posible de nuevo. Relaciones mejoran. Sensación de estar vivo." },
    ],
    stat: "+30% capacidad cognitiva · –40% riesgo de depresión",
    source: "Harvard Business Review, 2019",
  },
  {
    title: "Cuando recupera su cuerpo",
    pull: "El movimiento libera lo que el escritorio acumula.",
    points: [
      { h: "Tensión liberada", b: "Vuelve a sentirse vivo en su corporalidad. Menos disociación cuerpo-mente." },
      { h: "Sin dolor, más foco", b: "Deja de lidiar constantemente con el dolor de espalda para poder concentrarse." },
      { h: "Autoestima recuperada", b: "Sensación de control sobre sí mismo. Se siente cuidado, dignificado." },
    ],
    stat: "–40% ansiedad · –30% depresión",
    source: "American Psychological Association",
  },
  {
    title: "Cuando aprende a regular el estrés",
    pull: "Herramientas que funcionan, no presión que reprime.",
    points: [
      { h: "Sensación de control", b: "No es víctima del estrés. Tiene herramientas reales que generan agencia." },
      { h: "Menos resentimiento", b: "Regula en el momento, no llega el fin de semana explotando o desconectado." },
      { h: "Prevención de crisis", b: "El developer con herramientas evita el colapso. La depresión silenciosa tiene opciones." },
    ],
    stat: "–60% riesgo depresión clínica · –50% burnout",
    source: "WHO Global Mental Health Report, 2023",
  },
]

export default function ImpactoBienestar() {
  return (
    <section className="w-full bg-foreground py-28 px-8 md:px-16">
      <div className="max-w-5xl mx-auto">

        {/* Label */}
        <p className="text-[10px] tracking-[0.45em] uppercase text-background/40 mb-10" style={{ fontFamily: "'Geist', sans-serif" }}>
          El Impacto
        </p>

        {/* Big editorial opener */}
        <h2 className="font-serif font-light text-background text-balance mb-6" style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", lineHeight: 1.15 }}>
          Antes de hablar de dinero,<br />
          <span className="italic">hablemos de personas.</span>
        </h2>

        <p className="text-background/60 mb-20 max-w-lg leading-relaxed" style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.95rem" }}>
          El dolor del developer remoto no es "normal en tech". Es real, acumulado, e ignorado. Aislamiento, insomnio, dolor postural, estrés sin herramientas — vulnerabilidad a depresión silenciosa sin avisos previos.
        </p>

        {/* 3 impact blocks */}
        <div className="space-y-0 divide-y divide-background/15 border-t border-background/15">
          {impactos.map((imp) => (
            <div key={imp.title} className="py-16">

              <h3 className="font-serif font-light text-background mb-4" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", lineHeight: 1.2 }}>
                {imp.title}
              </h3>

              <p className="font-serif italic text-background/70 mb-12" style={{ fontSize: "1.05rem" }}>
                {imp.pull}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
                {imp.points.map((pt) => (
                  <div key={pt.h}>
                    <p className="font-serif text-background mb-2" style={{ fontSize: "1rem" }}>
                      {pt.h}
                    </p>
                    <p className="text-background/55 leading-relaxed" style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.85rem" }}>
                      {pt.b}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-8 border-t border-background/15">
                <p className="font-serif text-background/90" style={{ fontSize: "1.05rem" }}>
                  {imp.stat}
                </p>
                <span className="hidden sm:block w-px h-4 bg-background/20 mx-2" />
                <p className="text-background/40 italic" style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.78rem" }}>
                  {imp.source}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
