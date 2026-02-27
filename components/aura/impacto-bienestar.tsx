const impactos = [
  {
    title: "Cuando mejora el sueño",
    pull: "El sistema nervioso se regula. La mente descansa. El trabajo fluye.",
    points: [
      { h: "Menos ansiedad", b: "El sistema nervioso regulado reduce la reactividad emocional durante el día. Menos conflictos, menos errores por tensión acumulada." },
      { h: "Claridad mental", b: "Decisiones más sólidas, menos errores en código, mejor concentración en problemas complejos que requieren foco sostenido." },
      { h: "Energía recuperada", b: "La vida fuera del trabajo vuelve a ser posible. Las relaciones mejoran. El developer deja de operar en modo supervivencia." },
    ],
    stat: "+30% capacidad cognitiva · –40% riesgo de depresión",
    source: "Harvard Business Review, 2019",
  },
  {
    title: "Cuando recupera su cuerpo",
    pull: "El movimiento libera lo que el escritorio acumula.",
    points: [
      { h: "Tensión liberada", b: "Vuelve a sentirse presente en su cuerpo. Menos disociación. Más conexión consigo mismo durante y fuera del trabajo." },
      { h: "Sin dolor, más foco", b: "Deja de lidiar constantemente con el dolor de espalda o cuello. Puede concentrarse en el trabajo, no en el malestar físico." },
      { h: "Autoestima recuperada", b: "Recupera sensación de control sobre sí mismo. Se siente cuidado. Hay dignidad en moverse y en estar bien en el cuerpo." },
    ],
    stat: "–40% ansiedad · –30% depresión",
    source: "American Psychological Association",
  },
  {
    title: "Cuando aprende a regular el estrés",
    pull: "Herramientas reales que funcionan — no presión que reprime.",
    points: [
      { h: "Sensación de control", b: "Ya no es víctima del estrés. Tiene herramientas concretas que generan agencia sobre su propio estado emocional." },
      { h: "Menos resentimiento", b: "Regula en el momento, no llega al fin de semana explotando o completamente desconectado de su entorno." },
      { h: "Prevención de crisis", b: "El developer con herramientas de regulación emocional puede anticipar el colapso. La depresión silenciosa tiene una salida." },
    ],
    stat: "–60% riesgo depresión clínica · –50% burnout",
    source: "WHO Global Mental Health Report, 2023",
  },
]

export default function ImpactoBienestar() {
  return (
    <section className="w-full bg-foreground py-24 px-8 md:px-16">
      <div className="max-w-5xl mx-auto">

        <p className="text-[10px] tracking-[0.45em] uppercase text-background/40 mb-8" style={{ fontFamily: "'Geist', sans-serif" }}>
          El Impacto
        </p>

        <h2 className="font-serif font-light text-background text-balance mb-6" style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", lineHeight: 1.15 }}>
          Antes de hablar de dinero,
          <br />
          <span className="italic">hablemos de personas.</span>
        </h2>

        <p className="text-background/60 mb-16 max-w-2xl leading-relaxed" style={{ fontFamily: "'Geist', sans-serif", fontSize: "1rem" }}>
          El dolor del developer remoto no es "normal en tech". Es real, acumulado e ignorado durante años. Aislamiento, insomnio, dolor postural, estrés sin herramientas — y vulnerabilidad silenciosa a la depresión sin avisos previos. Eso fue lo que Willdom vivió de cerca.
        </p>

        <div className="space-y-0 divide-y divide-background/15 border-t border-background/15">
          {impactos.map((imp) => (
            <div key={imp.title} className="py-14">

              <h3 className="font-serif font-light text-background mb-3" style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)", lineHeight: 1.2 }}>
                {imp.title}
              </h3>

              <p className="font-serif italic text-background/60 mb-10" style={{ fontSize: "1rem" }}>
                {imp.pull}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                {imp.points.map((pt) => (
                  <div key={pt.h}>
                    <p className="font-serif text-background mb-2" style={{ fontSize: "1rem" }}>
                      {pt.h}
                    </p>
                    <p className="text-background/55 leading-relaxed" style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.88rem" }}>
                      {pt.b}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-6 border-t border-background/15">
                <p className="font-serif text-background/85" style={{ fontSize: "1rem" }}>
                  {imp.stat}
                </p>
                <span className="hidden sm:block w-px h-4 bg-background/20 mx-2" />
                <p className="text-background/35 italic" style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.78rem" }}>
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
