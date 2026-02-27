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
    benefits: [
      { headline: "Sistema nervioso se regula", detail: "Menos ansiedad, mejor manejo de presión, menos reactividad emocional." },
      { headline: "Claridad mental", detail: "Decisiones mejores, menor cantidad de errores, mejor concentración." },
      { headline: "Energía recuperada", detail: "Vida fuera del trabajo posible de nuevo, relaciones mejoran." },
    ],
    stat: "Capacidad cognitiva +30% · Riesgo depresión -40%",
    source: "Harvard Business Review",
  },
  {
    color: "#EC4899",
    bg: "#FDF2F8",
    title: "Cuando Recupera su Cuerpo",
    benefits: [
      { headline: "Libera tensión acumulada", detail: "Vuelve a sentirse vivo en su corporalidad, menos disociación cuerpo-mente." },
      { headline: "Menos dolor = mejor concentración", detail: "Deja de lidiar constantemente con el dolor de espalda." },
      { headline: "Mejor autoestima", detail: "Recupera sensación de control, se siente cuidado por sí mismo." },
    ],
    stat: "Ansiedad -40% · Depresión -30%",
    source: "American Psychological Association",
  },
  {
    color: "#6B7280",
    bg: "#F9FAFB",
    title: "Cuando Regula el Estrés",
    benefits: [
      { headline: "Recupera sensación de control", detail: "Tiene herramientas que funcionan, mayor agencia sobre su experiencia." },
      { headline: "Menos resentimiento acumulado", detail: "Regula en el momento, no llega el fin de semana explotando." },
      { headline: "Prevención de crisis", detail: "Developer con herramientas evita colapso. Depresión silenciosa tiene opciones." },
    ],
    stat: "Depresión clínica -60% · Burnout -50%",
    source: "WHO Global Mental Health Report 2023",
  },
]

export default function ImpactoBienestar() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-medium tracking-widest text-[#9CA3AF] uppercase mb-3">Sección 4</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-balance">
            El Impacto: Bienestar Emocional y Mental
          </h2>
          <p className="text-lg text-[#6B7280] mt-3 italic leading-relaxed">
            Antes de hablar de dinero, hablemos de personas.
          </p>
        </div>

        {/* La realidad */}
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
          <div className="mt-6 pt-6 border-t border-[#F3F4F6]">
            <p className="text-sm font-semibold text-black">
              Esto <span className="text-[#8B5CF6]">NO</span> es "normal en tech". Es dolor real que afecta la calidad de vida.
            </p>
          </div>
        </div>

        {/* 3 impactos — todos visibles, fluidos */}
        <div className="space-y-10">
          {impactos.map((imp) => (
            <div key={imp.title} className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Header stripe */}
              <div
                className="px-8 py-5 border-l-4"
                style={{ borderColor: imp.color, background: imp.bg }}
              >
                <h3 className="text-xl font-bold" style={{ color: imp.color }}>
                  {imp.title}
                </h3>
              </div>

              {/* Content */}
              <div className="px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {imp.benefits.map((b) => (
                    <div key={b.headline} className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: imp.color }}
                        />
                        <p className="text-sm font-semibold text-black">{b.headline}</p>
                      </div>
                      <p className="text-sm text-[#6B7280] leading-relaxed pl-3.5">{b.detail}</p>
                    </div>
                  ))}
                </div>

                {/* Stat destacada */}
                <div
                  className="rounded-md px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                  style={{ background: imp.bg }}
                >
                  <p className="text-base font-bold" style={{ color: imp.color }}>
                    {imp.stat}
                  </p>
                  <p className="text-xs text-[#9CA3AF] italic">{imp.source}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
