const cards = [
  {
    number: "01",
    title: "Situación Actual",
    body: "Crisis de salud mental en el equipo: un developer en depresión sin avisos previos. La pregunta surgió: ¿cómo mejorar genuinamente el bienestar?",
    color: "#8B5CF6",
  },
  {
    number: "02",
    title: "La Solución",
    body: "AURA es una plataforma digital de bienestar integral con acceso 24/7, privacidad total, prácticas reales y comunidad global.",
    color: "#EC4899",
  },
  {
    number: "03",
    title: "Resultado Esperado",
    body: "20-30% de participación (70-100 colaboradores). ROI 3.9x en 3 meses con $30,932 de retorno sobre $8,000 de inversión.",
    color: "#8B5CF6",
  },
  {
    number: "04",
    title: "Timeline",
    body: "Setup y presentaciones: 3-4 semanas. Piloto completo: 3 meses. Evaluación y decisión final: 10 de Junio.",
    color: "#EC4899",
  },
]

export default function ResumenEjecutivo() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-medium tracking-widest text-[#9CA3AF] uppercase mb-3">Sección 1</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-balance">
            Resumen Ejecutivo
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.number}
              className="bg-[#F3F4F6] rounded-lg p-6 shadow-sm flex flex-col gap-3 hover:shadow-md transition-shadow duration-300"
            >
              <span className="text-2xl font-bold" style={{ color: card.color }}>
                {card.number}
              </span>
              <h3 className="text-base font-semibold text-black">{card.title}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
