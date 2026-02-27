const rows = [
  { label: "Sueño", devs: "35", impacto3m: "$5,932" },
  { label: "Movimiento", devs: "30", impacto3m: "$11,250" },
  { label: "Estrés", devs: "22", impacto3m: "$13,750" },
]

const kpis = [
  { label: "Participación Mes 1", value: ">70 usuarios" },
  { label: "Retención Mes 3", value: "40–50%" },
  { label: "NPS al finalizar", value: ">+5" },
  { label: "Completitud", value: "60%+" },
]

export default function ImpactoFinanciero() {
  return (
    <section className="w-full bg-secondary py-24 px-8 md:px-16">
      <div className="max-w-5xl mx-auto">

        <p className="text-[10px] tracking-[0.45em] uppercase text-muted-foreground mb-8" style={{ fontFamily: "'Geist', sans-serif" }}>
          Impacto Financiero
        </p>

        <h2 className="font-serif font-light text-foreground text-balance mb-6" style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", lineHeight: 1.15 }}>
          El bienestar también
          <br />
          <span className="italic">tiene retorno medible.</span>
        </h2>

        <p className="text-muted-foreground mb-16 max-w-2xl leading-relaxed" style={{ fontFamily: "'Geist', sans-serif", fontSize: "1rem" }}>
          No significa trabajar más horas. Significa trabajar mejor en las mismas horas. Los estudios documentan con precisión cuánta productividad se pierde por problemas de bienestar — y cuánto se puede recuperar con las herramientas adecuadas.
        </p>

        {/* Dato científico */}
        <div className="bg-background py-16 px-8 text-center mb-16">
          <p className="text-[9px] tracking-[0.45em] uppercase text-muted-foreground mb-6" style={{ fontFamily: "'Geist', sans-serif" }}>
            Dato científico documentado
          </p>
          <p className="font-serif font-light text-foreground mb-4" style={{ fontSize: "clamp(4.5rem, 16vw, 10rem)", lineHeight: 1 }}>
            11.3
          </p>
          <p className="font-serif text-foreground mb-3" style={{ fontSize: "clamp(1rem, 2.2vw, 1.3rem)" }}>
            días de productividad perdida por persona, por año
          </p>
          <p className="text-muted-foreground italic mb-6" style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.82rem" }}>
            Harvard Business Review, 2019
          </p>
          <div className="w-10 h-px bg-border mx-auto mb-6" />
          <p className="font-serif text-foreground" style={{ fontSize: "1.1rem" }}>
            = $2,260 USD · por developer · por año
          </p>
        </div>

        {/* Tabla */}
        <p className="text-[10px] tracking-[0.45em] uppercase text-muted-foreground mb-6" style={{ fontFamily: "'Geist', sans-serif" }}>
          Aplicación a Willdom · 87 usuarios activos (25% de 350)
        </p>

        <div className="bg-background border-t border-border mb-4">
          <div className="grid grid-cols-3 gap-0 border-b border-border">
            {["Programa", "Developers", "Retorno en 3 meses"].map((h) => (
              <p key={h} className="px-6 py-4 text-[9px] tracking-[0.4em] uppercase text-muted-foreground" style={{ fontFamily: "'Geist', sans-serif" }}>
                {h}
              </p>
            ))}
          </div>
          {rows.map((r, i) => (
            <div key={r.label} className={`grid grid-cols-3 gap-0 ${i < rows.length - 1 ? "border-b border-border" : ""}`}>
              <p className="px-6 py-5 font-serif text-foreground" style={{ fontSize: "1rem" }}>{r.label}</p>
              <p className="px-6 py-5 font-serif text-foreground" style={{ fontSize: "1rem" }}>{r.devs}</p>
              <p className="px-6 py-5 font-serif text-foreground" style={{ fontSize: "1rem" }}>{r.impacto3m}</p>
            </div>
          ))}
          <div className="grid grid-cols-3 gap-0 border-t border-foreground/20 bg-foreground">
            <p className="px-6 py-5 font-serif font-light text-background" style={{ fontSize: "1rem" }}>Total</p>
            <p className="px-6 py-5 font-serif font-light text-background" style={{ fontSize: "1rem" }}>87</p>
            <p className="px-6 py-5 font-serif font-light text-background" style={{ fontSize: "1.1rem" }}>$30,932</p>
          </div>
        </div>

        <p className="text-muted-foreground mb-20 text-right italic" style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.78rem" }}>
          Supuestos conservadores: 30% del potencial máximo documentado por los estudios
        </p>

        {/* ROI */}
        <div className="text-center py-16 border-t border-b border-border mb-16">
          <p className="text-[9px] tracking-[0.45em] uppercase text-muted-foreground mb-8" style={{ fontFamily: "'Geist', sans-serif" }}>
            ROI del piloto · 3 meses
          </p>
          <p className="font-serif font-light text-foreground mb-5" style={{ fontSize: "clamp(4.5rem, 16vw, 10rem)", lineHeight: 1 }}>
            3.9×
          </p>
          <p className="font-serif text-muted-foreground" style={{ fontSize: "1.1rem" }}>
            $8,000 invertidos · $30,932 recuperados
          </p>
        </div>

        {/* KPIs */}
        <p className="text-[10px] tracking-[0.45em] uppercase text-muted-foreground mb-8" style={{ fontFamily: "'Geist', sans-serif" }}>
          Métricas de éxito del piloto
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-border border border-border">
          {kpis.map((k) => (
            <div key={k.label} className="px-6 py-8 text-center">
              <p className="font-serif font-light text-foreground mb-2" style={{ fontSize: "1.7rem", lineHeight: 1 }}>
                {k.value}
              </p>
              <p className="text-muted-foreground leading-snug" style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.78rem" }}>
                {k.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
