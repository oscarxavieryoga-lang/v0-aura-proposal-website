const pillars = [
  { label: "Prácticas Reales", body: "Meditación, yoga, breathing y movimiento guiados por especialistas certificados. Basados en investigación científica y diseñados para resolver problemas específicos — no para llenar un calendario de beneficios." },
  { label: "Estructura Sin Fricción", body: "Programas con inicio, proceso e integración claros. No son cargas emocionales que se pueden fallar — generan logro genuino y continuidad natural en quien los completa." },
  { label: "Privacidad Total", body: "Espacio completamente separado de los sistemas corporativos. Sin vigilancia, sin presión, sin reportes individuales. Los datos de cada persona son 100% privados." },
  { label: "Comunidad Global", body: "Parte de una plataforma abierta al público general. Usuarios de distintas industrias, roles y contextos. La sensación de no estar solo en el desafío." },
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
    result: "–35 a 50% reducción de dolor",
    science: "Ansiedad –40% · Depresión –30%",
    source: "American Psychological Association",
    image: "/images/yoga-nature.jpg",
    imageAlt: "Yoga y movimiento consciente",
  },
  {
    tag: "7 días",
    title: "Para el estrés crónico",
    subtitle: "Meditación · Breathing · Educación",
    result: "Reducción visible de estrés en 7 días",
    science: "Depresión clínica –60% · Burnout –50%",
    source: "WHO Global Mental Health Report 2023",
    image: "/images/stress-relief.jpg",
    imageAlt: "Calma y regulación emocional",
  },
]

export default function LaSolucion() {
  return (
    <section className="w-full bg-background py-24 px-8 md:px-16">
      <div className="max-w-5xl mx-auto">

        <p className="text-[10px] tracking-[0.45em] uppercase text-muted-foreground mb-8" style={{ fontFamily: "'Geist', sans-serif" }}>
          La Solución
        </p>

        <h2 className="font-serif font-light text-foreground text-balance mb-6" style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", lineHeight: 1.15 }}>
          AURA es una arquitectura de bienestar.
          <br />
          <span className="italic">No un beneficio corporativo. Un espacio real.</span>
        </h2>

        <p className="text-foreground/65 mb-16 max-w-2xl leading-relaxed" style={{ fontFamily: "'Geist', sans-serif", fontSize: "1rem" }}>
          Acceso 24/7, privacidad total, prácticas guiadas por especialistas y comunidad global. El equipo accede por voluntad propia — sin presión, sin integración con sistemas corporativos, sin vigilancia.
        </p>

        {/* 4 pilares */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 divide-y sm:divide-y-0 border-t border-b border-border mb-20">
          {pillars.map((p, i) => (
            <div
              key={p.label}
              className={`py-10 ${i % 2 === 0 ? "sm:pr-12 sm:border-r border-border" : "sm:pl-12"} ${i >= 2 ? "sm:border-t border-border" : ""}`}
            >
              <p className="text-[9px] tracking-[0.45em] uppercase text-muted-foreground mb-4" style={{ fontFamily: "'Geist', sans-serif" }}>
                0{i + 1}
              </p>
              <h3 className="font-serif font-light text-foreground mb-3" style={{ fontSize: "1.25rem" }}>
                {p.label}
              </h3>
              <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.9rem" }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>

        {/* Cómo funciona */}
        <p className="text-[10px] tracking-[0.45em] uppercase text-muted-foreground mb-10" style={{ fontFamily: "'Geist', sans-serif" }}>
          Cómo funciona
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 mb-20">
          {[
            { n: "1", label: "Acceso privado", desc: "Link separado al entorno corporativo. Login individual. Sin integración con los sistemas de Willdom." },
            { n: "2", label: "Elige tu camino", desc: "Cada persona selecciona el programa según su necesidad real. Sin presión para elegir correctamente." },
            { n: "3", label: "Práctica en vivo", desc: "Acceso 24/7. Sin horarios fijos. Cada persona practica a su ritmo y en su tiempo." },
            { n: "4", label: "Datos agregados", desc: "El administrador ve participación y retención general — nunca datos individuales ni personales." },
          ].map((s) => (
            <div key={s.n}>
              <p className="font-serif font-light text-foreground mb-4" style={{ fontSize: "2.8rem", lineHeight: 1 }}>
                {s.n}
              </p>
              <p className="font-serif text-foreground mb-2" style={{ fontSize: "1rem" }}>{s.label}</p>
              <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.875rem" }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Programas */}
        <p className="text-[10px] tracking-[0.45em] uppercase text-muted-foreground mb-10" style={{ fontFamily: "'Geist', sans-serif" }}>
          Programas de ejemplo
        </p>

        <div className="space-y-0 divide-y divide-border border-t border-b border-border">
          {programs.map((prog, i) => (
            <div
              key={prog.title}
              className={`grid grid-cols-1 md:grid-cols-2 gap-0 ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}
            >
              <div className="overflow-hidden" style={{ height: "clamp(240px, 32vw, 400px)", direction: "ltr" }}>
                <img
                  src={prog.image}
                  alt={prog.imageAlt}
                  className="w-full h-full object-cover"
                  style={{ filter: "grayscale(10%)" }}
                />
              </div>
              <div className="flex flex-col justify-center px-8 md:px-12 py-12" style={{ direction: "ltr" }}>
                <p className="text-[9px] tracking-[0.45em] uppercase text-muted-foreground mb-5" style={{ fontFamily: "'Geist', sans-serif" }}>
                  {prog.tag}
                </p>
                <h3 className="font-serif font-light text-foreground mb-3" style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)", lineHeight: 1.15 }}>
                  {prog.title}
                </h3>
                <p className="text-muted-foreground mb-6" style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.88rem" }}>
                  {prog.subtitle}
                </p>
                <div className="w-8 h-px bg-border mb-6" />
                <p className="font-serif italic text-foreground mb-3" style={{ fontSize: "1.1rem" }}>
                  "{prog.result}"
                </p>
                <p className="text-muted-foreground mb-1" style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.82rem" }}>
                  {prog.science}
                </p>
                <p className="text-muted-foreground italic" style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.75rem" }}>
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
