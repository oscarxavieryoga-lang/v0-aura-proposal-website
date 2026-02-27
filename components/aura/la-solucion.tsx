const pillars = [
  {
    icon: "✦",
    title: "Prácticas Reales",
    description:
      "Meditación, yoga, breathing y movimiento guiados por especialistas certificados, basados en investigación científica.",
  },
  {
    icon: "◈",
    title: "Estructura Sin Fricción",
    description:
      "Programas diseñados para completarse con claridad de inicio, proceso e integración. Generan sensación de logro genuino.",
  },
  {
    icon: "◎",
    title: "Privacidad Total",
    description:
      "Espacio completamente separado de sistemas corporativos. Sin vigilancia, sin presión. Datos 100% privados.",
  },
  {
    icon: "⬡",
    title: "Comunidad Global",
    description:
      "Parte de plataforma abierta al público general. Usuarios de distintas industrias y roles. No estás solo.",
  },
]

const programs = [
  {
    color: "#8B5CF6",
    bg: "#F5F3FF",
    tag: "Programa 1",
    title: "Para Problemas de Sueño",
    target: "Personas que no duermen bien",
    includes: "Meditación, breathing, educación",
    duration: "14 días",
    result: "+1-2 horas de sueño real",
    why: "Meditación + breathing regulan cortisol, permitiendo sueño profundo. Capacidad cognitiva +30%, depresión -40%.",
    source: "Harvard Business Review",
  },
  {
    color: "#EC4899",
    bg: "#FDF2F8",
    tag: "Programa 2",
    title: "Para Dolor Postural",
    target: "Personas con dolor por postura",
    includes: "Yoga, stretching, educación",
    duration: "21 días",
    result: "-35-50% reducción de dolor",
    why: "Movimiento físico libera endorfinas y regula cortisol. Ansiedad -40%, depresión -30%, autoestima mejorada.",
    source: "American Psychological Association",
  },
  {
    color: "#6B7280",
    bg: "#F9FAFB",
    tag: "Programa 3",
    title: "Para Estrés y Ansiedad",
    target: "Personas con estrés crónico",
    includes: "Meditación, breathing, educación",
    duration: "7 días",
    result: "Reducción visible de estrés",
    why: "Herramientas de regulación emocional reducen riesgo de depresión clínica 60% y previenen burnout.",
    source: "WHO Global Mental Health Report 2023",
  },
]

export default function LaSolucion() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs font-medium tracking-widest text-[#9CA3AF] uppercase mb-3">Sección 3</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-balance">
            ¿Qué es AURA?
          </h2>
          <p className="text-lg text-[#6B7280] mt-3 max-w-xl leading-relaxed">
            Arquitectura de Bienestar Comprobada
          </p>
        </div>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-[#F9FAFB] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <span className="text-2xl text-[#8B5CF6] mb-4 block">{p.icon}</span>
              <h3 className="text-base font-semibold text-black mb-2">{p.title}</h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="mb-16 p-8 bg-[#F9FAFB] rounded-lg">
          <h3 className="text-xl font-bold text-black mb-6">Cómo Funciona</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: "1", label: "Acceso Privado", desc: "Link separado, login individual, datos completamente privados." },
              { step: "2", label: "Elige tu Programa", desc: "El usuario selecciona según necesidad específica, sin presión." },
              { step: "3", label: "Práctica en Vivo", desc: "Acceso 24/7, sin horarios fijos, a tu propio ritmo." },
              { step: "4", label: "Medición Transparente", desc: "Dashboard Admin con datos agregados (no personales). Reportes mensuales." },
            ].map((item) => (
              <div key={item.step} className="flex flex-col gap-2">
                <div className="w-8 h-8 rounded-full bg-[#8B5CF6] text-white text-sm font-bold flex items-center justify-center">
                  {item.step}
                </div>
                <p className="text-sm font-semibold text-black">{item.label}</p>
                <p className="text-sm text-[#6B7280] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Programs */}
        <div>
          <h3 className="text-xl font-bold text-black mb-8">Ejemplos de Programas en AURA</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {programs.map((prog) => (
              <div
                key={prog.title}
                className="rounded-lg p-6 shadow-sm border border-[#F3F4F6] flex flex-col gap-4"
              >
                <div>
                  <span
                    className="text-xs font-medium tracking-widest uppercase px-2 py-1 rounded-full"
                    style={{ color: prog.color, background: prog.bg }}
                  >
                    {prog.tag}
                  </span>
                  <h4 className="text-lg font-bold text-black mt-3">{prog.title}</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-medium text-black">Dirigido a: </span>
                    <span className="text-[#6B7280]">{prog.target}</span>
                  </p>
                  <p>
                    <span className="font-medium text-black">Incluye: </span>
                    <span className="text-[#6B7280]">{prog.includes}</span>
                  </p>
                  <p>
                    <span className="font-medium text-black">Duración: </span>
                    <span className="text-[#6B7280]">{prog.duration}</span>
                  </p>
                </div>
                <div
                  className="rounded-md p-3 text-sm font-semibold"
                  style={{ color: prog.color, background: prog.bg }}
                >
                  Resultado esperado: {prog.result}
                </div>
                <p className="text-xs text-[#6B7280] leading-relaxed border-t border-[#F3F4F6] pt-3">
                  {prog.why}
                  <span className="block mt-1 text-[#9CA3AF] italic">{prog.source}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
