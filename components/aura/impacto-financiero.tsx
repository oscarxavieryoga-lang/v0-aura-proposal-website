const rows = [
  { label: "Sueño", devs: 35, retorno: "$5,932", pct: "19%" },
  { label: "Movimiento", devs: 30, retorno: "$11,250", pct: "36%" },
  { label: "Estrés", devs: 22, retorno: "$13,750", pct: "45%" },
]

const kpis = [
  { label: "Participación Mes 1", value: ">70 usuarios" },
  { label: "Retención Mes 3", value: "40–50%" },
  { label: "NPS al finalizar", value: ">+5" },
  { label: "Completitud", value: "60%+" },
]

export default function ImpactoFinanciero() {
  return (
    <section id="financiero" className="w-full py-14 px-6 md:px-12 bg-background border-t" style={{ borderColor: "#DEDAD5" }}>
      <div className="max-w-5xl mx-auto">

        <p className="font-sans text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "#4A7C6F" }}>
          05 · Impacto: Financiero
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-10">
          <h2 className="font-serif text-foreground text-balance" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", lineHeight: 1.2, fontWeight: 600 }}>
            El bienestar tiene retorno medible. No más horas — mejor trabajo.
          </h2>
          <div>
            <p className="font-sans text-muted-foreground leading-relaxed mb-4" style={{ fontSize: "0.9rem" }}>
              El ROI no significa que los developers trabajen más horas. Significa que trabajan <strong className="text-foreground">mejor en las mismas horas</strong>. Los estudios documentan cuánta productividad se pierde — y cuánto puede recuperarse.
            </p>
            <div className="rounded-md p-4 border" style={{ background: "#EBF2F0", borderColor: "#C8DED9" }}>
              <p className="font-sans text-xs text-muted-foreground mb-1">Dato documentado · Harvard Business Review, 2019</p>
              <p className="font-serif font-semibold text-foreground" style={{ fontSize: "1.3rem" }}>
                11.3 días de productividad perdida por persona / año
              </p>
              <p className="font-sans text-xs mt-1" style={{ color: "#4A7C6F" }}>= $2,260 USD por developer por año a $200/día</p>
            </div>
          </div>
        </div>

        {/* Main ROI layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">

          {/* Table */}
          <div className="lg:col-span-2 rounded-md border overflow-hidden" style={{ borderColor: "#DEDAD5" }}>
            <div className="px-4 py-3 border-b" style={{ background: "#EEECEA", borderColor: "#DEDAD5" }}>
              <p className="font-sans text-xs font-medium" style={{ color: "#6B6B66" }}>
                87 usuarios activos (25% de 350 developers)
              </p>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b" style={{ borderColor: "#DEDAD5" }}>
                  <th className="px-4 py-2 text-left font-sans text-xs font-medium text-muted-foreground">Programa</th>
                  <th className="px-4 py-2 text-right font-sans text-xs font-medium text-muted-foreground">Developers</th>
                  <th className="px-4 py-2 text-right font-sans text-xs font-medium text-muted-foreground">Retorno 3M</th>
                  <th className="px-4 py-2 text-right font-sans text-xs font-medium text-muted-foreground">% del total</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.label} className={i < rows.length - 1 ? "border-b" : ""} style={{ borderColor: "#DEDAD5" }}>
                    <td className="px-4 py-3 font-sans text-sm font-medium text-foreground">{r.label}</td>
                    <td className="px-4 py-3 font-sans text-sm text-muted-foreground text-right">{r.devs}</td>
                    <td className="px-4 py-3 font-sans text-sm text-foreground text-right font-medium">{r.retorno}</td>
                    <td className="px-4 py-3 text-right">
                      <span className="font-sans text-xs px-2 py-0.5 rounded-full" style={{ background: "#EBF2F0", color: "#4A7C6F" }}>{r.pct}</span>
                    </td>
                  </tr>
                ))}
                <tr className="border-t" style={{ background: "#1A2E25", borderColor: "#2A4035" }}>
                  <td className="px-4 py-3 font-sans text-sm font-semibold text-white">Total</td>
                  <td className="px-4 py-3 font-sans text-sm text-white/70 text-right">87</td>
                  <td className="px-4 py-3 font-sans text-sm font-bold text-white text-right">$30,932</td>
                  <td className="px-4 py-3 text-right font-sans text-xs text-white/50">3 meses</td>
                </tr>
              </tbody>
            </table>
            <p className="font-sans text-xs italic px-4 py-2 border-t" style={{ borderColor: "#DEDAD5", color: "#9B9B95" }}>
              Supuestos conservadores: 30% del potencial máximo documentado científicamente.
            </p>
          </div>

          {/* ROI highlight */}
          <div className="rounded-md p-6 flex flex-col justify-center items-center text-center" style={{ background: "#1A2E25" }}>
            <p className="font-sans text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "#7AB5A8" }}>ROI Piloto · 3 meses</p>
            <p className="font-serif font-semibold text-white mb-1" style={{ fontSize: "3.5rem", lineHeight: 1 }}>3.9×</p>
            <div className="w-8 h-px my-3" style={{ background: "#4A7C6F" }} />
            <p className="font-sans text-xs mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>Inversión</p>
            <p className="font-sans font-semibold text-white text-lg mb-3">$8,000</p>
            <p className="font-sans text-xs mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>Retorno estimado</p>
            <p className="font-sans font-semibold text-white text-lg">$30,932</p>
          </div>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {kpis.map((k) => (
            <div key={k.label} className="rounded-md border p-4 text-center" style={{ borderColor: "#DEDAD5", background: "#FFFFFF" }}>
              <p className="font-serif font-semibold text-foreground mb-1" style={{ fontSize: "1.3rem", lineHeight: 1 }}>
                {k.value}
              </p>
              <p className="font-sans text-xs text-muted-foreground">{k.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
