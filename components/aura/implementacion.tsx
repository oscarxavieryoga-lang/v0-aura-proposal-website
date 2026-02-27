const fases = [
  {
    n: "01", title: "Preparación", time: "3–4 semanas",
    items: ["Setup técnico del acceso corporativo", "Configuración del dashboard privado", "Preparación de materiales de comunicación para el equipo"],
  },
  {
    n: "02", title: "Lanzamiento", time: "Semana 4–5",
    items: ["Presentaciones a equipos pequeños (30–45 min)", "Link de acceso disponible — sin presión ni obligación", "Soporte técnico activo para dudas iniciales"],
  },
  {
    n: "03", title: "Monitoreo", time: "Mes 1, 2 y 3",
    items: ["Reportes mensuales de participación y retención", "Recolección de feedback de usuarios activos", "Ajustes al proceso si los datos lo indican"],
  },
  {
    n: "04", title: "Evaluación", time: "Final del Mes 3",
    items: ["Reporte final con datos completos del piloto", "Decisión conjunta: Continuar · Expandir · Pausar"],
  },
]

export default function Implementacion() {
  return (
    <section className="w-full bg-background py-24 px-8 md:px-16">
      <div className="max-w-5xl mx-auto">

        <p className="text-[10px] tracking-[0.45em] uppercase text-muted-foreground mb-8" style={{ fontFamily: "'Geist', sans-serif" }}>
          Implementación
        </p>

        <h2 className="font-serif font-light text-foreground text-balance mb-6" style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", lineHeight: 1.15 }}>
          De la firma al primer resultado:
          <br />
          <span className="italic">un proceso simple y sin fricción.</span>
        </h2>

        <p className="text-foreground/65 mb-16 max-w-2xl leading-relaxed" style={{ fontFamily: "'Geist', sans-serif", fontSize: "1rem" }}>
          El piloto inicia con el primer pago. En 3 a 4 semanas el acceso está activo. En la semana 4 o 5 el equipo ya puede empezar a practicar. La decisión final se toma en el Mes 3 con datos reales — no con promesas.
        </p>

        {/* Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border border border-border mb-16">
          {fases.map((f) => (
            <div key={f.n} className="p-8">
              <p className="font-serif font-light text-muted-foreground/40 mb-5" style={{ fontSize: "2.2rem", lineHeight: 1 }}>
                {f.n}
              </p>
              <p className="font-serif text-foreground mb-1" style={{ fontSize: "1.05rem" }}>
                {f.title}
              </p>
              <p className="text-[9px] tracking-[0.35em] uppercase text-muted-foreground mb-5" style={{ fontFamily: "'Geist', sans-serif" }}>
                {f.time}
              </p>
              <ul className="space-y-3">
                {f.items.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="mt-[7px] w-1 h-1 rounded-full bg-muted-foreground/50 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed" style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.85rem" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Responsabilidades */}
        <p className="text-[10px] tracking-[0.45em] uppercase text-muted-foreground mb-8" style={{ fontFamily: "'Geist', sans-serif" }}>
          Responsabilidades
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-border border border-border">
          {[
            {
              who: "AURA",
              items: [
                "Setup técnico y activación del acceso corporativo",
                "Reportes mensuales de datos agregados — nunca datos personales",
                "Soporte técnico continuo durante el piloto",
                "Disponibilidad para reuniones de presentación con equipos",
              ],
            },
            {
              who: "Willdom",
              items: [
                "Comunicar el acceso al equipo — como invitación, no como obligación",
                "Facilitar las reuniones de presentación con equipos pequeños",
                "Recolectar feedback honesto de quienes usen la plataforma",
                "Participar en la evaluación final del piloto con criterio abierto",
              ],
            },
          ].map((r) => (
            <div key={r.who} className="p-10">
              <p className="font-serif font-light text-foreground mb-7" style={{ fontSize: "1.4rem" }}>
                {r.who}
              </p>
              <ul className="space-y-4">
                {r.items.map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="mt-[7px] w-1 h-1 rounded-full bg-foreground/40 flex-shrink-0" />
                    <span className="text-muted-foreground leading-relaxed" style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.9rem" }}>
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
