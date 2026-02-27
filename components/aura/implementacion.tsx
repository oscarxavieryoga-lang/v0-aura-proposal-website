const fases = [
  {
    numero: "01",
    titulo: "Preparación",
    duracion: "3-4 semanas",
    color: "#8B5CF6",
    bg: "#F5F3FF",
    items: [
      "Setup técnico del acceso corporativo",
      "Configuración de dashboard privado",
      "Preparación de materiales de comunicación",
    ],
  },
  {
    numero: "02",
    titulo: "Lanzamiento",
    duracion: "Semana 4-5",
    color: "#EC4899",
    bg: "#FDF2F8",
    items: [
      "Presentaciones a equipos pequeños (30-45 min)",
      "Link de acceso disponible en comunicación oficial",
      "Soporte técnico activo para dudas",
    ],
  },
  {
    numero: "03",
    titulo: "Monitoreo",
    duracion: "Mes 1, 2 y 3",
    color: "#6B7280",
    bg: "#F9FAFB",
    items: [
      "Reportes mensuales de participación",
      "Feedback recolectado de usuarios",
      "Ajustes si se requieren",
    ],
  },
  {
    numero: "04",
    titulo: "Evaluación Final",
    duracion: "Final Mes 3",
    color: "#000000",
    bg: "#F3F4F6",
    items: [
      "Reporte final con datos completos",
      "Decisión conjunta: Continuar / Expandir / Pausar",
    ],
  },
]

const responsabilidades = [
  {
    quien: "AURA",
    color: "#8B5CF6",
    bg: "#F5F3FF",
    items: [
      "Setup técnico y acceso corporativo",
      "Reportes mensuales de datos agregados",
      "Soporte técnico continuo",
      "Disponibilidad para reuniones de presentación",
    ],
  },
  {
    quien: "Willdom",
    color: "#EC4899",
    bg: "#FDF2F8",
    items: [
      "Comunicación clara a colaboradores (invitación, no presión)",
      "Facilitar reuniones de presentación a equipos",
      "Recolectar feedback honesto de usuarios",
      "Participar en evaluación final",
    ],
  },
]

export default function Implementacion() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-medium tracking-widest text-[#9CA3AF] uppercase mb-3">Sección 7</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-balance">
            Timeline y Ejecución
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative mb-16">
          {/* Línea conectora visible en desktop */}
          <div className="hidden lg:block absolute top-10 left-16 right-16 h-px bg-[#E5E7EB] z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {fases.map((fase) => (
              <div key={fase.numero} className="flex flex-col gap-4">
                <div className="flex items-center gap-3 lg:flex-col lg:items-start">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{ background: fase.bg, color: fase.color }}
                  >
                    {fase.numero}
                  </div>
                  <div>
                    <p className="font-bold text-black">{fase.titulo}</p>
                    <p className="text-xs text-[#9CA3AF]">{fase.duracion}</p>
                  </div>
                </div>
                <ul className="space-y-2 pl-1">
                  {fase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#6B7280] leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: fase.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Responsabilidades */}
        <div>
          <h3 className="text-lg font-bold text-black mb-6">Responsabilidades</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {responsabilidades.map((r) => (
              <div key={r.quien} className="rounded-lg overflow-hidden border border-[#F3F4F6] shadow-sm">
                <div className="px-6 py-4" style={{ background: r.bg }}>
                  <p className="font-bold text-base" style={{ color: r.color }}>
                    {r.quien}
                  </p>
                </div>
                <div className="px-6 py-5 bg-white">
                  <ul className="space-y-3">
                    {r.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-[#6B7280] leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: r.color }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
