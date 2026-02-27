const programaDistribucion = [
  { label: "Programa Sueño", devs: 35, pct: 40, color: "#8B5CF6", bg: "#F5F3FF" },
  { label: "Programa Movimiento", devs: 30, pct: 35, color: "#EC4899", bg: "#FDF2F8" },
  { label: "Programa Estrés", devs: 22, pct: 25, color: "#6B7280", bg: "#F9FAFB" },
]

const tablaAnual = [
  { programa: "Sueño", anual: "$23,625", meses3: "$5,932", color: "#8B5CF6" },
  { programa: "Movimiento", anual: "$45,000", meses3: "$11,250", color: "#EC4899" },
  { programa: "Estrés", anual: "$55,000", meses3: "$13,750", color: "#6B7280" },
]

const kpis = [
  { label: "Participación Mes 1", value: ">70 usuarios", color: "#8B5CF6", bg: "#F5F3FF" },
  { label: "Retención Mes 3", value: "40-50%", color: "#EC4899", bg: "#FDF2F8" },
  { label: "Satisfacción NPS", value: ">+5", color: "#8B5CF6", bg: "#F5F3FF" },
  { label: "Completitud", value: "60%+ usuarios", color: "#6B7280", bg: "#F9FAFB" },
]

export default function ImpactoFinanciero() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div>
          <p className="text-xs font-medium tracking-widest text-[#9CA3AF] uppercase mb-3">Sección 5</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-balance">
            El Impacto: Financiero
          </h2>
          <p className="text-lg text-[#6B7280] mt-3 leading-relaxed">
            ROI medible basado en datos científicos.
          </p>
        </div>

        {/* Modelo de cálculo */}
        <div>
          <h3 className="text-xl font-bold text-black mb-6">El Modelo de Cálculo</h3>
          <p className="text-sm text-[#6B7280] mb-8 leading-relaxed max-w-2xl">
            El ROI no significa trabajar más horas. Significa trabajar <strong className="text-black">mejor</strong> en las mismas horas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="bg-[#FEF2F2] rounded-lg p-6">
              <p className="text-xs font-medium tracking-wider text-[#EF4444] uppercase mb-3">Developer Cansado</p>
              <p className="text-sm text-[#6B7280] leading-relaxed">8h en escritorio</p>
              <p className="text-sm text-[#6B7280] leading-relaxed">3h perdidas en errores, distracciones</p>
              <p className="text-lg font-bold text-[#EF4444] mt-3">5h productivas</p>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#8B5CF6] text-white flex items-center justify-center text-xl font-bold mx-auto">
                  →
                </div>
                <p className="text-xs text-[#9CA3AF] mt-2">AURA</p>
              </div>
            </div>
            <div className="bg-[#F0FDF4] rounded-lg p-6">
              <p className="text-xs font-medium tracking-wider text-[#22C55E] uppercase mb-3">Developer Descansado</p>
              <p className="text-sm text-[#6B7280] leading-relaxed">8h en escritorio</p>
              <p className="text-sm text-[#6B7280] leading-relaxed">1.5h perdidas (la mitad)</p>
              <p className="text-lg font-bold text-[#22C55E] mt-3">6.5h productivas</p>
            </div>
          </div>
          <div className="mt-4 text-center">
            <span className="inline-block bg-[#F5F3FF] text-[#8B5CF6] font-bold text-sm px-5 py-2 rounded-full">
              Diferencia: +1.5 horas de TRABAJO DE CALIDAD en el mismo tiempo
            </span>
          </div>
        </div>

        {/* Dato científico */}
        <div className="bg-[#F5F3FF] rounded-lg p-8 md:p-10 text-center">
          <p className="text-xs font-medium tracking-widest text-[#9CA3AF] uppercase mb-4">Dato Científico</p>
          <p className="text-7xl md:text-8xl font-bold text-[#8B5CF6] mb-3">11.3</p>
          <p className="text-xl font-semibold text-black mb-2">días de productividad perdida por persona / año</p>
          <p className="text-sm text-[#6B7280] italic mb-6">Harvard Business Review, 2019</p>
          <div className="inline-block bg-white rounded-lg px-6 py-3 shadow-sm">
            <p className="text-base font-bold text-[#8B5CF6]">
              = $2,260 USD / año por developer
            </p>
          </div>
        </div>

        {/* Aplicación a Willdom */}
        <div>
          <h3 className="text-xl font-bold text-black mb-2">Aplicación a Willdom</h3>
          <p className="text-sm text-[#6B7280] mb-8 leading-relaxed">
            350 developers × 25% participación ={" "}
            <strong className="text-black">87 usuarios activos</strong>
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {programaDistribucion.map((p) => (
              <div
                key={p.label}
                className="rounded-lg p-5 text-center"
                style={{ background: p.bg }}
              >
                <p className="text-xs font-medium tracking-wider uppercase mb-2" style={{ color: p.color }}>
                  {p.label}
                </p>
                <p className="text-4xl font-bold mb-1" style={{ color: p.color }}>
                  {p.devs}
                </p>
                <p className="text-sm text-[#6B7280]">developers ({p.pct}%)</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tablas */}
        <div>
          <h3 className="text-xl font-bold text-black mb-8">Impacto Financiero</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tabla anual */}
            <div className="rounded-lg overflow-hidden border border-[#F3F4F6] shadow-sm">
              <div className="bg-[#F3F4F6] px-5 py-3">
                <p className="text-sm font-semibold text-black">Impacto Anual</p>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#F9FAFB]">
                    <th className="text-left px-5 py-3 text-xs font-medium text-[#9CA3AF] uppercase tracking-wider">Programa</th>
                    <th className="text-right px-5 py-3 text-xs font-medium text-[#9CA3AF] uppercase tracking-wider">Impacto Anual</th>
                  </tr>
                </thead>
                <tbody>
                  {tablaAnual.map((row, i) => (
                    <tr key={row.programa} className={i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}>
                      <td className="px-5 py-3 font-medium" style={{ color: row.color }}>{row.programa}</td>
                      <td className="px-5 py-3 text-right font-bold text-black">{row.anual}</td>
                    </tr>
                  ))}
                  <tr className="bg-[#F3F4F6]">
                    <td className="px-5 py-3 font-bold text-black">TOTAL</td>
                    <td className="px-5 py-3 text-right font-bold text-[#8B5CF6]">$123,625</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Tabla 3 meses */}
            <div className="rounded-lg overflow-hidden border border-[#F3F4F6] shadow-sm">
              <div className="bg-[#F3F4F6] px-5 py-3">
                <p className="text-sm font-semibold text-black">Impacto 3 Meses (Piloto)</p>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#F9FAFB]">
                    <th className="text-left px-5 py-3 text-xs font-medium text-[#9CA3AF] uppercase tracking-wider">Programa</th>
                    <th className="text-right px-5 py-3 text-xs font-medium text-[#9CA3AF] uppercase tracking-wider">Impacto 3 Meses</th>
                  </tr>
                </thead>
                <tbody>
                  {tablaAnual.map((row, i) => (
                    <tr key={row.programa} className={i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}>
                      <td className="px-5 py-3 font-medium" style={{ color: row.color }}>{row.programa}</td>
                      <td className="px-5 py-3 text-right font-bold text-black">{row.meses3}</td>
                    </tr>
                  ))}
                  <tr className="bg-[#F3F4F6]">
                    <td className="px-5 py-3 font-bold text-black">TOTAL</td>
                    <td className="px-5 py-3 text-right font-bold text-[#8B5CF6]">$30,932</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Bar visual */}
          <div className="mt-8 bg-[#F9FAFB] rounded-lg p-6">
            <p className="text-xs font-medium tracking-wider text-[#9CA3AF] uppercase mb-5">Retorno en 3 meses vs. Inversión</p>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-[#6B7280]">Inversión</span>
                  <span className="font-bold text-black">$8,000</span>
                </div>
                <div className="h-4 bg-[#E5E7EB] rounded-full overflow-hidden">
                  <div className="h-full bg-[#6B7280] rounded-full" style={{ width: "25.8%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-[#8B5CF6]">Retorno estimado</span>
                  <span className="font-bold text-[#8B5CF6]">$30,932</span>
                </div>
                <div className="h-4 bg-[#E5E7EB] rounded-full overflow-hidden">
                  <div className="h-full bg-[#8B5CF6] rounded-full" style={{ width: "100%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROI */}
        <div className="rounded-xl bg-[#8B5CF6] px-8 py-12 md:py-16 text-center shadow-lg">
          <p className="text-xs font-medium tracking-widest text-[#C4B5FD] uppercase mb-4">ROI del Piloto</p>
          <p className="text-8xl md:text-9xl font-bold text-white mb-3">3.9x</p>
          <p className="text-xl md:text-2xl font-semibold text-[#EDE9FE] mb-2">
            Inversión $8,000 · Retorno $30,932 en 3 meses
          </p>
          <p className="text-sm text-[#C4B5FD] italic">
            Supuestos conservadores (30% del potencial máximo documentado)
          </p>
        </div>

        {/* KPIs */}
        <div>
          <h3 className="text-xl font-bold text-black mb-6">Métricas de Éxito</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {kpis.map((k) => (
              <div
                key={k.label}
                className="rounded-lg p-6 text-center shadow-sm"
                style={{ background: k.bg }}
              >
                <p className="text-2xl font-bold mb-2" style={{ color: k.color }}>
                  {k.value}
                </p>
                <p className="text-sm text-[#6B7280] leading-snug">{k.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
