const fases = [
  { n: "01", title: "Preparación", time: "3–4 semanas", items: ["Setup técnico del acceso corporativo", "Configuración de dashboard privado", "Preparación de materiales de comunicación"] },
  { n: "02", title: "Lanzamiento", time: "Semana 4–5", items: ["Presentaciones a equipos pequeños (30–45 min)", "Link de acceso disponible sin presión", "Soporte técnico activo para dudas"] },
  { n: "03", title: "Monitoreo", time: "Mes 1, 2 y 3", items: ["Reportes mensuales de participación", "Feedback recolectado de usuarios", "Ajustes si se requieren"] },
  { n: "04", title: "Evaluación", time: "Final Mes 3", items: ["Reporte final con datos completos", "Decisión conjunta: Continuar / Expandir / Pausar"] },
]

export default function Implementacion() {
  return (
    <section className="w-full bg-background py-28 px-8 md:px-16">
      <div className="max-w-5xl mx-auto">

        <p className="text-[10px] tracking-[0.45em] uppercase text-muted-foreground mb-10" style={{ fontFamily: "'Geist', sans-serif" }}>
          Implementación
        </p>

        <h2 className="font-serif font-light text-foreground text-balance mb-20" style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", lineHeight: 1.15 }}>
          De la firma al primer resultado:<br />
          <span className="italic">un proceso simple.</span>
        </h2>

        {/* Timeline — 4 columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border border border-border mb-20">
          {fases.map((f) => (
            <div key={f.n} className="p-8">
              <p className="font-serif font-light text-muted-foreground mb-6" style={{ fontSize: "2.5rem", lineHeight: 1 }}>
                {f.n}
              </p>
              <p className="font-serif text-foreground mb-1" style={{ fontSize: "1.05rem" }}>
                {f.title}
              </p>
              <p className="text-[9px] tracking-[0.35em] uppercase text-muted-foreground mb-6" style={{ fontFamily: "'Geist', sans-serif" }}>
                {f.time}
              </p>
              <ul className="space-y-3">
                {f.items.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="mt-2 w-1 h-1 rounded-full bg-muted-foreground flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed" style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.82rem" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Responsabilidades */}
        <p className="text-[10px] tracking-[0.45em] uppercase text-muted-foreground mb-10" style={{ fontFamily: "'Geist', sans-serif" }}>
          Responsabilidades
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-border border border-border">
          {[
            {
              who: "AURA",
              items: ["Setup técnico y acceso corporativo", "Reportes mensuales de datos agregados (no personales)", "Soporte técnico continuo", "Disponibilidad para reuniones de presentación"],
            },
            {
              who: "Willdom",
              items: ["Comunicación a colaboradores — invitación, no presión", "Facilitar reuniones de presentación a equipos", "Recolectar feedback honesto de usuarios", "Participar en evaluación final del piloto"],
            },
          ].map((r) => (
            <div key={r.who} className="p-10">
              <p className="font-serif font-light text-foreground mb-8" style={{ fontSize: "1.5rem" }}>
                {r.who}
              </p>
              <ul className="space-y-4">
                {r.items.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="mt-2 w-1 h-1 rounded-full bg-foreground flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed" style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.875rem" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
