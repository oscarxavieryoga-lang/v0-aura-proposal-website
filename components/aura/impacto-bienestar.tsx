const realidadItems = [
  "Aislamiento: sin conexión casual, sin comunidad física",
  "Insomnio: la mente no desconecta del trabajo en casa",
  "Dolor crónico: 8 horas sentado acumula daño ignorado",
  "Estrés acumulado: sin herramientas para regularse emocionalmente",
  "Vulnerabilidad: a depresión silenciosa sin avisos previos",
]

const impactos = [
  {
    color: "#8B5CF6",
    bg: "#F5F3FF",
    title: "Cuando Mejora el Sueño",
    image:
      "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      { headline: "Sistema nervioso se regula", detail: "Menos ansiedad y mejor manejo de presión." },
      { headline: "Claridad mental", detail: "Mejores decisiones y menos errores." },
      { headline: "Energía recuperada", detail: "Más equilibrio entre vida y trabajo." },
    ],
    stat: "Capacidad cognitiva +30% · Riesgo depresión -40%",
    source: "Harvard Business Review",
  },
  {
    color: "#EC4899",
    bg: "#FDF2F8",
    title: "Cuando Recupera su Cuerpo",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      { headline: "Libera tensión acumulada", detail: "Menos rigidez, más movilidad." },
      { headline: "Menos dolor", detail: "Mayor concentración en tareas críticas." },
      { headline: "Mejor autoestima", detail: "Sensación de control y autocuidado." },
    ],
    stat: "Ansiedad -40% · Depresión -30%",
    source: "American Psychological Association",
  },
  {
    color: "#6B7280",
    bg: "#F9FAFB",
    title: "Cuando Regula el Estrés",
    image:
      "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&w=1200&q=80",
    benefits: [
      { headline: "Recupera control emocional", detail: "Mayor agencia en situaciones complejas." },
      { headline: "Menos resentimiento", detail: "Se regula antes de llegar al límite." },
      { headline: "Prevención de crisis", detail: "Reduce burnout y colapsos silenciosos." },
    ],
    stat: "Depresión clínica -60% · Burnout -50%",
    source: "WHO Global Mental Health Report 2023",
  },
]

export default function ImpactoBienestar() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-medium tracking-widest text-[#9CA3AF] uppercase mb-3">Sección 4</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-balance">El Impacto: Bienestar Emocional y Mental</h2>
          <p className="text-lg text-[#6B7280] mt-3 italic leading-relaxed">Antes de hablar de dinero, hablemos de personas.</p>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm mb-14">
          <h3 className="text-xl font-bold text-black mb-6">La Realidad del Developer Remoto</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {realidadItems.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-[#8B5CF6] flex-shrink-0" />
                <p className="text-sm text-[#6B7280] leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          {impactos.map((imp) => (
            <div key={imp.title} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="grid md:grid-cols-2">
                <img src={imp.image} alt={imp.title} className="h-full w-full object-cover min-h-[260px]" loading="lazy" />
                <div className="px-8 py-8">
                  <div className="mb-5 border-l-4 pl-4" style={{ borderColor: imp.color }}>
                    <h3 className="text-xl font-bold" style={{ color: imp.color }}>{imp.title}</h3>
                  </div>
                  <div className="space-y-3 mb-6">
                    {imp.benefits.map((b) => (
                      <p key={b.headline} className="text-sm text-[#6B7280] leading-relaxed">
                        <strong className="text-black">{b.headline}:</strong> {b.detail}
                      </p>
                    ))}
                  </div>
                  <div className="rounded-md px-5 py-4" style={{ background: imp.bg }}>
                    <p className="text-base font-bold" style={{ color: imp.color }}>{imp.stat}</p>
                    <p className="text-xs text-[#9CA3AF] italic mt-1">{imp.source}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
