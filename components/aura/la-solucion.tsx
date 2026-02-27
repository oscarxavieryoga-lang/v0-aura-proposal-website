const pillars = [
  { icon: "◆", label: "Prácticas reales", body: "Meditación, yoga, breathing y movimiento guiados por especialistas certificados, basados en evidencia científica." },
  { icon: "◆", label: "Estructura sin fricción", body: "Programas diseñados para completarse con claridad. Generan logro real, no frustración." },
  { icon: "◆", label: "Privacidad total", body: "Espacio separado de sistemas corporativos. Sin vigilancia ni presión. Datos 100% privados." },
  { icon: "◆", label: "Comunidad global", body: "Plataforma abierta al público. Usuarios de diferentes industrias. No están solos." },
]

const programs = [
  {
    tag: "Programa · 14 días",
    title: "Mejora de sueño",
    includes: "Meditación, breathing, educación",
    result: "+1–2 horas de sueño real",
    metrics: "+30% capacidad cognitiva · –40% riesgo depresión",
    source: "Harvard Business Review, 2019",
  },
  {
    tag: "Programa · 21 días",
    title: "Dolor postural",
    includes: "Yoga, stretching, educación",
    result: "–35–50% reducción de dolor",
    metrics: "Ansiedad –40% · Depresión –30%",
    source: "American Psychological Association",
  },
  {
    tag: "Programa · 7 días",
    title: "Regulación del estrés",
    includes: "Meditación, breathing, educación",
    result: "Reducción visible de estrés",
    metrics: "Depresión clínica –60% · Burnout –50%",
    source: "WHO Global Mental Health Report, 2023",
  },
]

export default function LaSolucion() {
  return (
    <section id="solucion" className="w-full py-14 px-6 md:px-12 bg-background border-t" style={{ borderColor: "#DEDAD5" }}>
      <div className="max-w-5xl mx-auto">

        <p className="font-sans text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "#4A7C6F" }}>
          03 · La Solución
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-10">
          <div>
            <h2 className="font-serif text-foreground text-balance mb-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", lineHeight: 1.2, fontWeight: 600 }}>
              AURA: una arquitectura de bienestar comprobada.
            </h2>
            <p className="font-sans text-muted-foreground leading-relaxed" style={{ fontSize: "0.9rem" }}>
              No es un beneficio superficial. Es un espacio estructurado, privado, y basado en evidencia científica — diseñado para que el bienestar ocurra de verdad, no en papel.
            </p>
          </div>
          <div className="overflow-hidden rounded-md" style={{ height: 200 }}>
            <img
              src="/images/dev-break.jpg"
              alt="Developer tomando un descanso consciente"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 4 pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {pillars.map((p, i) => (
            <div key={p.label} className="rounded-md p-4 border" style={{ background: "#EBF2F0", borderColor: "#C8DED9" }}>
              <p className="font-sans text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "#4A7C6F" }}>
                0{i + 1}
              </p>
              <h3 className="font-serif font-semibold text-foreground mb-2" style={{ fontSize: "1rem", lineHeight: 1.3 }}>
                {p.label}
              </h3>
              <p className="font-sans text-xs text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="rounded-md p-5 border mb-10" style={{ background: "#FFFFFF", borderColor: "#DEDAD5" }}>
          <p className="font-sans text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "#6B6B66" }}>
            Cómo funciona
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { n: "1", label: "Acceso privado", desc: "Link separado, login individual. No integrado en sistemas corporativos." },
              { n: "2", label: "Elige tu programa", desc: "Cada persona selecciona según necesidad. Sin presión ni juicio." },
              { n: "3", label: "Práctica 24/7", desc: "Sin horarios fijos. Tu ritmo, tu tiempo, tu lugar." },
              { n: "4", label: "Datos agregados", desc: "Admin ve participación general — nunca datos personales." },
            ].map((s) => (
              <div key={s.n} className="flex gap-3">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 font-sans font-semibold text-xs text-white mt-0.5"
                  style={{ background: "#4A7C6F", minWidth: "1.5rem" }}
                >
                  {s.n}
                </span>
                <div>
                  <p className="font-sans font-semibold text-foreground text-sm mb-0.5">{s.label}</p>
                  <p className="font-sans text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Programs grid */}
        <p className="font-sans text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "#6B6B66" }}>
          Ejemplos de programas
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {programs.map((prog) => (
            <div key={prog.title} className="rounded-md border overflow-hidden" style={{ borderColor: "#DEDAD5" }}>
              <div className="px-4 py-3 border-b" style={{ background: "#1A2E25", borderColor: "#2A4035" }}>
                <p className="font-sans text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{prog.tag}</p>
                <p className="font-serif font-semibold text-white mt-0.5" style={{ fontSize: "1.05rem" }}>{prog.title}</p>
              </div>
              <div className="p-4 bg-card">
                <p className="font-sans text-xs text-muted-foreground mb-3">{prog.includes}</p>
                <div className="rounded px-3 py-2 mb-3" style={{ background: "#EBF2F0" }}>
                  <p className="font-sans text-xs font-semibold" style={{ color: "#4A7C6F" }}>Resultado: {prog.result}</p>
                </div>
                <p className="font-sans text-xs text-muted-foreground mb-1">{prog.metrics}</p>
                <p className="font-sans text-xs italic" style={{ color: "#9B9B95" }}>{prog.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
