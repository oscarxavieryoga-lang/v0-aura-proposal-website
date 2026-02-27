const challenges = [
  {
    index: "I",
    title: "Calidad de sueño",
    stat: "75%",
    statLabel: "de developers remotos reportan problemas de sueño",
    impact: "11.3 días de productividad perdida por persona al año",
    source: "Harvard Business Review, 2019",
  },
  {
    index: "II",
    title: "Dolor postural crónico",
    stat: "80%",
    statLabel: "experimenta dolor postural por posición de escritorio",
    impact: "12–15% de reducción directa en productividad",
    source: "OSHA – Datos Ocupacionales",
  },
  {
    index: "III",
    title: "Estrés crónico",
    stat: "65%",
    statLabel: "reporta estrés crónico sin herramientas de regulación",
    impact: "18–22% de reducción de productividad + riesgo de depresión silenciosa",
    source: "American Psychological Association, 2024",
  },
]

export default function ElContexto() {
  return (
    <section className="w-full bg-secondary py-24 px-8 md:px-16">
      <div className="max-w-5xl mx-auto">

        <p className="text-[10px] tracking-[0.45em] uppercase text-muted-foreground mb-8" style={{ fontFamily: "'Geist', sans-serif" }}>
          El Contexto
        </p>

        <h2 className="font-serif font-light text-foreground text-balance mb-6" style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", lineHeight: 1.15 }}>
          El developer remoto carga con dolor real,
          <br />
          <span className="italic">sin herramientas para manejarlo.</span>
        </h2>

        <p className="text-muted-foreground mb-16 max-w-2xl leading-relaxed" style={{ fontFamily: "'Geist', sans-serif", fontSize: "1rem" }}>
          Tres desafíos documentados por investigación científica afectan directamente la productividad, la salud mental y la retención del talento en la industria tech. No son percepciones — son datos.
        </p>

        <div className="space-y-0 divide-y divide-border border-t border-border">
          {challenges.map((c) => (
            <div key={c.index} className="grid grid-cols-1 md:grid-cols-[64px_1fr_1fr] gap-6 md:gap-12 py-12">

              <p className="font-serif font-light text-muted-foreground/50" style={{ fontSize: "2rem", lineHeight: 1 }}>
                {c.index}
              </p>

              <div>
                <h3 className="font-serif font-light text-foreground mb-4" style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.8rem)", lineHeight: 1.2 }}>
                  {c.title}
                </h3>
                <p className="font-serif font-light text-foreground" style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)", lineHeight: 1 }}>
                  {c.stat}
                </p>
                <p className="text-muted-foreground mt-2 leading-relaxed" style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.9rem" }}>
                  {c.statLabel}
                </p>
              </div>

              <div className="flex flex-col justify-center gap-4">
                <div>
                  <p className="text-[9px] tracking-[0.4em] uppercase text-muted-foreground mb-2" style={{ fontFamily: "'Geist', sans-serif" }}>
                    Impacto documentado
                  </p>
                  <p className="font-serif text-foreground leading-snug" style={{ fontSize: "1.05rem" }}>
                    {c.impact}
                  </p>
                </div>
                <p className="text-muted-foreground italic" style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.8rem" }}>
                  {c.source}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
