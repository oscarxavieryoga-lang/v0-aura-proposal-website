const challenges = [
  {
    number: "1",
    color: "#8B5CF6",
    bg: "#F5F3FF",
    title: "Calidad de Sueño",
    stat: "75% reportan problemas",
    cause: "Pantalla 8-10h, zona horaria diferenciada, ciclos circadianos destrozados",
    impact: "11.3 días de productividad perdida / año por persona",
    source: "Harvard Business Review, 2019",
  },
  {
    number: "2",
    color: "#EC4899",
    bg: "#FDF2F8",
    title: "Dolor Postural Crónico",
    stat: "80% experimenta dolor",
    cause: "Escritorio sin movimiento estructurado, rigidez ignorada durante años",
    impact: "12-15% reducción de productividad",
    source: "OSHA – Datos Ocupacionales",
  },
  {
    number: "3",
    color: "#6B7280",
    bg: "#F9FAFB",
    title: "Estrés Crónico",
    stat: "65% sin herramientas",
    cause: "Aislamiento remoto, control emocional extremo, síndrome del impostor",
    impact: "18-22% reducción + riesgo de depresión",
    source: "American Psychological Association, 2024",
  },
]

export default function ElContexto() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-medium tracking-widest text-[#9CA3AF] uppercase mb-3">Sección 2</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-balance">
            El Contexto
          </h2>
          <p className="text-lg text-[#6B7280] mt-3 max-w-xl leading-relaxed">
            Tres desafíos documentados que afectan la productividad de developers remotos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {challenges.map((c) => (
            <div key={c.number} className="flex flex-col gap-5">
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center text-2xl font-bold"
                style={{ background: c.bg, color: c.color }}
              >
                {c.number}
              </div>
              <h3 className="text-xl font-semibold text-black">{c.title}</h3>
              <p className="text-2xl font-bold" style={{ color: c.color }}>
                {c.stat}
              </p>
              <div className="space-y-3">
                <div>
                  <p className="text-xs font-medium tracking-wider text-[#9CA3AF] uppercase mb-1">Causa</p>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{c.cause}</p>
                </div>
                <div>
                  <p className="text-xs font-medium tracking-wider text-[#9CA3AF] uppercase mb-1">Impacto</p>
                  <p className="text-sm font-semibold text-black">{c.impact}</p>
                </div>
                <div>
                  <p className="text-xs font-medium tracking-wider text-[#9CA3AF] uppercase mb-1">Fuente</p>
                  <p className="text-xs text-[#9CA3AF] italic">{c.source}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
