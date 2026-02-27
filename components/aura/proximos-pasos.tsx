const pasos = [
  {
    numero: "1",
    texto: "Responder preguntas técnicas, de contenido o de implementación",
  },
  {
    numero: "2",
    texto: "Validar timeline y responsabilidades de cada parte",
  },
  {
    numero: "3",
    texto: "Alinear expectativas y firmar el acuerdo",
  },
]

export default function ProximosPasos() {
  return (
    <section className="w-full bg-black py-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-medium tracking-widest text-[#6B7280] uppercase mb-5">Sección 8</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance mb-4">
          Próximos Pasos
        </h2>
        <p className="text-lg text-[#9CA3AF] mb-12 leading-relaxed">
          Solicitamos una reunión de{" "}
          <span className="text-[#C4B5FD] font-semibold">30 minutos</span> con Karina y el equipo de decisión.
        </p>

        <div className="space-y-4 text-left mb-12 max-w-lg mx-auto">
          {pasos.map((p) => (
            <div key={p.numero} className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#8B5CF6] text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                {p.numero}
              </div>
              <p className="text-[#D1D5DB] leading-relaxed text-sm pt-1">{p.texto}</p>
            </div>
          ))}
        </div>

        <a
          href="mailto:contacto@aura.com"
          className="inline-block bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-semibold text-base px-10 py-4 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
        >
          Agendar Reunión
        </a>

        <p className="mt-6 text-sm text-[#6B7280]">
          Disponibles en horario de su preferencia.
        </p>
      </div>
    </section>
  )
}
