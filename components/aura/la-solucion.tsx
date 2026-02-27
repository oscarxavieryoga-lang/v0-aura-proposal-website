const pillars = [
  { label: "Prácticas Reales", body: "Meditación, yoga, breathing y movimiento guiados por especialistas. Basados en investigación científica, diseñados para resolver problemas específicos." },
  { label: "Estructura Sin Fricción", body: "Programas con inicio, proceso e integración claros. No son cargas — generan logro genuino y continuidad natural." },
  { label: "Privacidad Total", body: "Espacio completamente separado de sistemas corporativos. Sin vigilancia, sin presión, sin reportes individuales. Datos 100% privados." },
  { label: "Comunidad Global", body: "Parte de una plataforma abierta al público. Usuarios de distintas industrias y roles. La sensación de no estar solo." },
]

const programs = [
  {
    tag: "14 días",
    title: "Para el insomnio",
    subtitle: "Meditación · Breathing · Educación",
    result: "+1–2 horas de sueño real",
    science: "Capacidad cognitiva +30% · Riesgo depresión –40%",
    source: "Harvard Business Review",
    image: "/images/sleep-wellness.jpg",
    imageAlt: "Descanso profundo y sueño restaurador",
  },
  {
    tag: "21 días",
    title: "Para el dolor postural",
    subtitle: "Yoga · Stretching · Educación",
    result: "–35–50% reducción de dolor",
    science: "Ansiedad –40% · Depresión –30%",
    source: "American Psychological Association",
    image: "/images/yoga-nature.jpg",
    imageAlt: "Yoga y movimiento consciente en la naturaleza",
  },
  {
    tag: "7 días",
    title: "Para el estrés crónico",
    subtitle: "Meditación · Breathing · Educación",
    result: "Reducción visible de estrés",
    science: "Depresión clínica –60% · Burnout –50%",
    source: "WHO Global Mental Health Report 2023",
    image: "/images/stress-relief.jpg",
    imageAlt: "Calma y regulación emocional",
  },
]

export default function LaSolucion() {
  return (
    <section className="w-full bg-background py-28 px-8 md:px-16">
      <div className="max-w-5xl mx-auto">

        {/* Label */}
        <p className="text-[10px] tracking-[0.45em] uppercase text-muted-foreground mb-10" style={{ fontFamily: "'Geist', sans-serif" }}>
          La Solución
        </p>

        {/* Big heading */}
        <h2 className="font-serif font-light text-foreground text-balance mb-6" style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", lineHeight: 1.15 }}>
          AURA es una arquitectura de bienestar.<br />
          <span className="italic">No un beneficio. Un espacio.</span>
        </h2>

        <p className="text-muted-foreground mb-20 max-w-lg leading-relaxed" style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.95rem" }}>
          Acceso 24/7, privacidad total, prácticas reales guiadas por especialistas, y comunidad global. Sin vigilancia corporativa.
        </p>

        {/* 4 pillars — horizontal lines */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 divide-y sm:divide-y-0 border-t border-b border-border mb-28">
          {pillars.map((p, i) => (
            <div
              key={p.label}
              className={`py-10 px-0 ${i % 2 === 0 ? "sm:pr-12 sm:border-r border-border" : "sm:pl-12"} ${i >= 2 ? "sm:border-t border-border" : ""}`}
            >
              <p className="text-[9px] tracking-[0.45em] uppercase text-muted-foreground mb-4" style={{ fontFamily: "'Geist', sans-serif" }}>
                0{i + 1}
              </p>
              <h3 className="font-serif font-light text-foreground mb-3" style={{ fontSize: "1.3rem" }}>
                {p.label}
              </h3>
              <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.875rem" }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* How it works — 4 numbered steps */}
        <p className="text-[10px] tracking-[0.45em] uppercase text-muted-foreground mb-12" style={{ fontFamily: "'Geist', sans-serif" }}>
          Cómo funciona
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 mb-28">
          {[
            { n: "1", label: "Acceso privado", desc: "Link separado. Login individual. Sin integración con sistemas corporativos." },
            { n: "2", label: "Elige tu camino", desc: "Cada persona selecciona según su necesidad real. Sin presión." },
            { n: "3", label: "Práctica en vivo", desc: "Acceso 24/7. Sin horarios fijos. Tu ritmo, tu tiempo." },
            { n: "4", label: "Datos agregados", desc: "Admin ve participación y retención — nunca datos personales." },
          ].map((s) => (
            <div key={s.n}>
              <p className="font-serif font-light text-foreground mb-4" style={{ fontSize: "3rem", lineHeight: 1 }}>
                {s.n}
              </p>
              <p className="font-serif text-foreground mb-2" style={{ fontSize: "1rem" }}>{s.label}</p>
              <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.825rem" }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Programs — image + content pairs */}
        <p className="text-[10px] tracking-[0.45em] uppercase text-muted-foreground mb-12" style={{ fontFamily: "'Geist', sans-serif" }}>
          Programas de ejemplo
        </p>

        <div className="space-y-0 divide-y divide-border border-t border-b border-border">
          {programs.map((prog, i) => (
            <div
              key={prog.title}
              className={`grid grid-cols-1 md:grid-cols-2 gap-0 ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}
            >
              {/* Image */}
              <div className="overflow-hidden" style={{ height: "clamp(260px, 35vw, 420px)", direction: "ltr" }}>
                <img
                  src={prog.image}
                  alt={prog.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center px-8 md:px-12 py-14" style={{ direction: "ltr" }}>
                <p className="text-[9px] tracking-[0.45em] uppercase text-muted-foreground mb-6" style={{ fontFamily: "'Geist', sans-serif" }}>
                  {prog.tag}
                </p>
                <h3 className="font-serif font-light text-foreground mb-3" style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)", lineHeight: 1.15 }}>
                  {prog.title}
                </h3>
                <p className="text-muted-foreground mb-8" style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.85rem" }}>
                  {prog.subtitle}
                </p>
                <div className="w-8 h-px bg-border mb-8" />
                <p className="font-serif italic text-foreground mb-2" style={{ fontSize: "1.1rem" }}>
                  "{prog.result}"
                </p>
                <p className="text-muted-foreground mb-1" style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.8rem" }}>
                  {prog.science}
                </p>
                <p className="text-muted-foreground italic" style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.72rem" }}>
                  {prog.source}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
