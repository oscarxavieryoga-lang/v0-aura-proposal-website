export default function Inversion() {
  return (
    <section className="w-full bg-background py-24 px-8 md:px-16">
      <div className="max-w-5xl mx-auto">

        <p className="text-[10px] tracking-[0.45em] uppercase text-muted-foreground mb-8" style={{ fontFamily: "'Geist', sans-serif" }}>
          Inversión
        </p>

        <h2 className="font-serif font-light text-foreground text-balance mb-6" style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", lineHeight: 1.15 }}>
          Estructura de pagos escalonada
          <br />
          <span className="italic">y basada en resultados reales.</span>
        </h2>

        <p className="text-foreground/65 mb-16 max-w-2xl leading-relaxed" style={{ fontFamily: "'Geist', sans-serif", fontSize: "1rem" }}>
          La inversión base cubre el piloto completo de 3 meses. Los bonos adicionales solo se activan si se alcanzan los resultados acordados — si no hay resultados, no hay bonos. Sin letra pequeña.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Pagos */}
          <div>
            <p className="text-[9px] tracking-[0.4em] uppercase text-muted-foreground mb-8" style={{ fontFamily: "'Geist', sans-serif" }}>
              Cronograma de pagos
            </p>
            <div className="space-y-0 divide-y divide-border border-t border-b border-border">
              {[
                { n: "01", fecha: "Semana 1 — Anticipado", monto: "$3,000", desc: "Activación de acceso corporativo, setup técnico y configuración inicial del dashboard." },
                { n: "02", fecha: "15 de Abril — Mes 1", monto: "$2,500", desc: "Evaluación completa del primer mes: participación, retención y primeros datos." },
                { n: "03", fecha: "15 de Mayo — Mes 2", monto: "$2,500", desc: "Evaluación del segundo mes. Ajustes si se requieren basados en feedback real." },
              ].map((p) => (
                <div key={p.n} className="grid grid-cols-[48px_1fr_auto] gap-6 py-8 items-start">
                  <p className="font-serif font-light text-muted-foreground/50" style={{ fontSize: "1.6rem", lineHeight: 1 }}>
                    {p.n}
                  </p>
                  <div>
                    <p className="text-[9px] tracking-[0.4em] uppercase text-muted-foreground mb-2" style={{ fontFamily: "'Geist', sans-serif" }}>
                      {p.fecha}
                    </p>
                    <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.88rem" }}>
                      {p.desc}
                    </p>
                  </div>
                  <p className="font-serif font-light text-foreground" style={{ fontSize: "1.25rem", lineHeight: 1 }}>
                    {p.monto}
                  </p>
                </div>
              ))}
              <div className="grid grid-cols-[48px_1fr_auto] gap-6 py-7 items-center bg-foreground px-0">
                <div />
                <p className="font-serif text-background" style={{ fontSize: "1rem" }}>
                  Base total — 3 meses
                </p>
                <p className="font-serif font-light text-background" style={{ fontSize: "1.5rem", lineHeight: 1 }}>
                  $8,000
                </p>
              </div>
            </div>
          </div>

          {/* Bonos */}
          <div>
            <p className="text-[9px] tracking-[0.4em] uppercase text-muted-foreground mb-8" style={{ fontFamily: "'Geist', sans-serif" }}>
              Bonos por resultados · evaluados al Mes 3
            </p>
            <div className="space-y-0 divide-y divide-border border-t border-b border-border mb-10">
              {[
                { cond: "70 usuarios activos en el Mes 1", bono: "+$1,500" },
                { cond: "100 clases completadas en Mes 2 y 3", bono: "+$2,000" },
                { cond: "NPS mayor a +5 al finalizar el piloto", bono: "+$1,000" },
              ].map((b) => (
                <div key={b.cond} className="flex items-center justify-between gap-6 py-7">
                  <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.9rem" }}>
                    {b.cond}
                  </p>
                  <p className="font-serif text-foreground flex-shrink-0" style={{ fontSize: "1.1rem" }}>
                    {b.bono}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-end justify-between pt-2">
              <div>
                <p className="text-[9px] tracking-[0.4em] uppercase text-muted-foreground mb-2" style={{ fontFamily: "'Geist', sans-serif" }}>
                  Máximo total
                </p>
                <p className="font-serif font-light text-foreground" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1 }}>
                  $12,500
                </p>
              </div>
              <p className="text-muted-foreground italic text-right max-w-[200px]" style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.78rem" }}>
                Los bonos se activan únicamente si se alcanzan los resultados acordados.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
