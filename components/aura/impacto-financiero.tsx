"use client"

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const productividadData = [
  { estado: "Cansado", perdidas: 3, productivas: 5 },
  { estado: "Descansado", perdidas: 1.5, productivas: 6.5 },
]

const sleepLossData = [
  { concepto: "Días perdidos", valor: 11.3 },
  { concepto: "USD por día", valor: 200 },
  { concepto: "Pérdida anual", valor: 2260 },
]

const programData = [
  { nombre: "Sueño", usuarios: 35, color: "#8B5CF6" },
  { nombre: "Movimiento", usuarios: 30, color: "#EC4899" },
  { nombre: "Estrés", usuarios: 22, color: "#6B7280" },
]

const roiData = [
  { concepto: "Inversión", valor: 8000, color: "#6B7280" },
  { concepto: "Retorno 3M", valor: 30932, color: "#8B5CF6" },
]

const tablaAnual = [
  { programa: "Sueño", anual: "$23,625", meses3: "$5,932", color: "#8B5CF6" },
  { programa: "Movimiento", anual: "$45,000", meses3: "$11,250", color: "#EC4899" },
  { programa: "Estrés", anual: "$55,000", meses3: "$13,750", color: "#6B7280" },
]

export default function ImpactoFinanciero() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-12">
        <div>
          <p className="text-xs font-medium tracking-widest text-[#9CA3AF] uppercase mb-3">Sección 5</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-balance">El Impacto: Financiero</h2>
          <p className="text-lg text-[#6B7280] mt-3 leading-relaxed">Menos texto, más visualización clara de resultados.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article className="bg-[#F9FAFB] rounded-2xl p-6 border border-[#F3F4F6]">
            <h3 className="text-lg font-bold text-black mb-1">Productividad real: cansado vs descansado</h3>
            <p className="text-sm text-[#6B7280] mb-4">+1.5h productivas por developer en la misma jornada.</p>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={productividadData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="estado" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="perdidas" fill="#EF4444" radius={[6, 6, 0, 0]} />
                <Bar dataKey="productivas" fill="#8B5CF6" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </article>

          <article className="bg-[#F9FAFB] rounded-2xl p-6 border border-[#F3F4F6]">
            <h3 className="text-lg font-bold text-black mb-1">Costo anual del mal descanso</h3>
            <p className="text-sm text-[#6B7280] mb-4">Referencia: Harvard Business Review 2019.</p>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={sleepLossData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="concepto" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="valor" fill="#EC4899" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </article>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article className="bg-[#F9FAFB] rounded-2xl p-6 border border-[#F3F4F6]">
            <h3 className="text-lg font-bold text-black mb-1">Distribución de usuarios activos</h3>
            <p className="text-sm text-[#6B7280] mb-4">350 developers × 25% participación = 87 usuarios.</p>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie data={programData} dataKey="usuarios" nameKey="nombre" outerRadius={100} label>
                  {programData.map((entry) => (
                    <Cell key={entry.nombre} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </article>

          <article className="bg-[#111827] rounded-2xl p-6 border border-[#1F2937]">
            <h3 className="text-lg font-bold text-white mb-1">Inversión vs retorno en 3 meses</h3>
            <p className="text-sm text-[#D1D5DB] mb-4">Supuestos conservadores: 30% del potencial máximo.</p>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={roiData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="concepto" stroke="#E5E7EB" />
                <YAxis stroke="#E5E7EB" />
                <Tooltip formatter={(value: number) => `$${value.toLocaleString()}`} />
                <Bar dataKey="valor" radius={[6, 6, 0, 0]}>
                  {roiData.map((entry) => (
                    <Cell key={entry.concepto} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="text-4xl font-bold text-[#C4B5FD] text-center">ROI 3.9x</p>
          </article>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden border border-[#F3F4F6] shadow-sm">
            <div className="bg-[#F3F4F6] px-5 py-3">
              <p className="text-sm font-semibold text-black">Impacto Anual</p>
            </div>
            <table className="w-full text-sm">
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

          <div className="rounded-lg overflow-hidden border border-[#F3F4F6] shadow-sm">
            <div className="bg-[#F3F4F6] px-5 py-3">
              <p className="text-sm font-semibold text-black">Impacto 3 Meses (Piloto)</p>
            </div>
            <table className="w-full text-sm">
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
      </div>
    </section>
  )
}
