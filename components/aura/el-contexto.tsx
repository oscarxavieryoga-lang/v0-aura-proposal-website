const challenges = [
  {
    num: "01",
    title: "Calidad de sueño",
    stat: "75%",
    statLabel: "reportan problemas de sueño",
    cause: "Pantalla 8–10h, diferencia horaria, ciclos circadianos alterados.",
    impact: "11.3 días de productividad perdida por persona al año",
    source: "Harvard Business Review, 2019",
  },
  {
    num: "02",
    title: "Dolor postural crónico",
    stat: "80%",
    statLabel: "experimenta dolor postural",
    cause: "Escritorio sin movimiento estructurado, rigidez acumulada durante años.",
    impact: "12–15% de reducción directa en productividad",
    source: "OSHA – Datos Ocupacionales",
  },
  {
    num: "03",
    title: "Estrés sin herramientas",
    stat: "65%",
    statLabel: "reporta estrés crónico sin recursos",
    cause: "Aislamiento remoto, control emocional extremo, síndrome del impostor.",
    impact: "18–22% de reducción + riesgo de depresión silenciosa",
    source: "American Psychological Association, 2024",
  },
]

export default function ElContexto() {
  return (
    <section id="contexto" className="w-full py-14 px-6 md:px-12 border-t" style={{ background: "#EEECEA", borderColor: "#DEDAD5" }}>
      <div className="max-w-5xl mx-auto">

        <p className="font-sans text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "#4A7C6F" }}>
          02 · El Contexto
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-10">
          <h2 className="font-serif text-foreground text-balance" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", lineHeight: 1.2, fontWeight: 600 }}>
            El developer remoto trabaja con dolor real — y sin herramientas para manejarlo.
          </h2>
          <div>
            <p className="font-sans text-muted-foreground leading-relaxed mb-4" style={{ fontSize: "0.9rem" }}>
              La investigación científica documenta tres desafíos que afectan de manera consistente a la industria tech remota. No son quejas — son datos verificados con impacto medible en productividad y salud mental.
            </p>
            <div className="overflow-hidden rounded-md" style={{ height: 180 }}>
              <img
                src="/images/dev-focused.jpg"
                alt="Developer trabajando concentrado desde casa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {challenges.map((c) => (
            <div key={c.num} className="bg-card rounded-md p-5 border" style={{ borderColor: "#DEDAD5" }}>
              <div className="flex items-start justify-between mb-4">
                <span className="font-sans text-xs font-medium" style={{ color: "#4A7C6F" }}>{c.num}</span>
                <span className="font-serif font-semibold" style={{ fontSize: "2rem", lineHeight: 1, color: "#1A1A18" }}>{c.stat}</span>
              </div>
              <h3 className="font-serif font-semibold text-foreground mb-1" style={{ fontSize: "1.05rem", lineHeight: 1.3 }}>
                {c.title}
              </h3>
              <p className="font-sans text-xs text-muted-foreground mb-3 leading-relaxed">{c.statLabel}</p>
              <div className="border-t pt-3" style={{ borderColor: "#DEDAD5" }}>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed mb-2">{c.cause}</p>
                <p className="font-sans text-xs font-semibold text-foreground leading-relaxed">{c.impact}</p>
                <p className="font-sans text-xs italic mt-1" style={{ color: "#9B9B95" }}>{c.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
