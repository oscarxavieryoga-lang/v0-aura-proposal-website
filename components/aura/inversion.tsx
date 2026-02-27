const pagos = [
  {
    pago: "Pago 1",
    fecha: "Semana 1 (Anticipado)",
    monto: "$3,000",
    detalle: "Activación de acceso corporativo, setup técnico, configuración inicial",
    color: "#8B5CF6",
    bg: "#F5F3FF",
  },
  {
    pago: "Pago 2",
    fecha: "Mes 1 · 15 Abril",
    monto: "$2,500",
    detalle: "Evaluación de primer mes completo",
    color: "#EC4899",
    bg: "#FDF2F8",
  },
  {
    pago: "Pago 3",
    fecha: "Mes 2 · 15 Mayo",
    monto: "$2,500",
    detalle: "Evaluación de segundo mes completo",
    color: "#6B7280",
    bg: "#F9FAFB",
  },
]

const bonos = [
  { condicion: "70 usuarios activos en Mes 1", bono: "+$1,500" },
  { condicion: "100 clases completadas en Mes 2-3", bono: "+$2,000" },
  { condicion: "NPS >+5 al finalizar piloto", bono: "+$1,000" },
]

export default function Inversion() {
  return (
    <section className="w-full bg-[#F9FAFB] py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs font-medium tracking-widest text-[#9CA3AF] uppercase mb-3">Sección 6</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-balance">
            Estructura de Inversión
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Pagos */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-6">Cronograma de Pagos</h3>
            <div className="space-y-4">
              {pagos.map((p) => (
                <div
                  key={p.pago}
                  className="flex gap-5 bg-white rounded-lg p-5 shadow-sm"
                >
                  <div
                    className="flex-shrink-0 w-14 text-center rounded-md py-2 flex flex-col items-center justify-center"
                    style={{ background: p.bg }}
                  >
                    <span className="text-lg font-bold" style={{ color: p.color }}>
                      {p.monto}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-black">{p.pago}</p>
                    <p className="text-xs text-[#9CA3AF] mb-1">{p.fecha}</p>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{p.detalle}</p>
                  </div>
                </div>
              ))}

              {/* Base total */}
              <div className="flex items-center justify-between bg-black text-white rounded-lg px-5 py-4">
                <span className="font-semibold">Base Total (3 meses)</span>
                <span className="text-xl font-bold">$8,000</span>
              </div>
            </div>
          </div>

          {/* Bonos */}
          <div>
            <h3 className="text-lg font-semibold text-black mb-6">Bonos por Resultados</h3>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-[#F3F4F6] px-5 py-3">
                <p className="text-xs font-medium text-[#9CA3AF] uppercase tracking-wider">Evaluados al final del Mes 3</p>
              </div>
              <div className="divide-y divide-[#F3F4F6]">
                {bonos.map((b) => (
                  <div key={b.condicion} className="flex items-center justify-between px-5 py-4">
                    <p className="text-sm text-[#6B7280] leading-relaxed">{b.condicion}</p>
                    <span className="text-sm font-bold text-[#8B5CF6] ml-4 flex-shrink-0">{b.bono}</span>
                  </div>
                ))}
              </div>
              <div className="bg-[#F5F3FF] px-5 py-4 flex items-center justify-between">
                <span className="font-semibold text-[#8B5CF6]">Máximo Total</span>
                <span className="text-xl font-bold text-[#8B5CF6]">$12,500</span>
              </div>
            </div>

            {/* Resumen visual */}
            <div className="mt-6 bg-white rounded-lg p-5 shadow-sm">
              <p className="text-xs font-medium tracking-wider text-[#9CA3AF] uppercase mb-4">Rango de inversión</p>
              <div className="flex items-end gap-6">
                <div className="text-center">
                  <div className="w-16 bg-[#6B7280] rounded-t-sm mx-auto" style={{ height: "48px" }} />
                  <p className="text-xs text-[#6B7280] mt-1">Mínimo</p>
                  <p className="text-base font-bold text-black">$8,000</p>
                </div>
                <div className="text-center">
                  <div className="w-16 bg-[#8B5CF6] rounded-t-sm mx-auto" style={{ height: "78px" }} />
                  <p className="text-xs text-[#6B7280] mt-1">Máximo</p>
                  <p className="text-base font-bold text-[#8B5CF6]">$12,500</p>
                </div>
                <div className="text-center flex-1">
                  <p className="text-xs text-[#9CA3AF] leading-relaxed italic">
                    Los bonos se activan únicamente si se alcanzan los resultados acordados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
