export default function ResumenEjecutivo() {
  return (
    <section className="w-full py-28 px-8 md:px-16 bg-background">
      <div className="max-w-5xl mx-auto">

        {/* Label */}
        <p className="text-[10px] tracking-[0.45em] uppercase text-muted-foreground mb-10" style={{ fontFamily: "'Geist', sans-serif" }}>
          Resumen Ejecutivo
        </p>

        {/* Opening statement — large editorial serif */}
        <h2 className="font-serif font-light text-foreground text-balance mb-16" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", lineHeight: 1.15 }}>
          Willdom enfrentó una crisis de salud mental.<br />
          <span className="italic">La pregunta que surgió fue clara:</span>
        </h2>

        <p className="font-serif italic text-muted-foreground mb-20" style={{ fontSize: "clamp(1.3rem, 3vw, 2rem)", lineHeight: 1.4 }}>
          "¿Cómo mejoramos genuinamente el bienestar de nuestro equipo?"
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-border mb-20" />

        {/* 4 facts — horizontal layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {[
            { label: "La solución", value: "AURA", sub: "Plataforma de bienestar integral" },
            { label: "Participación esperada", value: "25%", sub: "87 de 350 developers" },
            { label: "Retorno estimado", value: "3.9×", sub: "ROI en 3 meses de piloto" },
            { label: "Inversión base", value: "$8,000", sub: "Piloto 3 meses" },
          ].map((item) => (
            <div key={item.label} className="px-0 sm:px-8 py-10 sm:py-0 first:pl-0 last:border-r-0">
              <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3" style={{ fontFamily: "'Geist', sans-serif" }}>
                {item.label}
              </p>
              <p className="font-serif font-light text-foreground mb-1" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1 }}>
                {item.value}
              </p>
              <p className="text-sm text-muted-foreground" style={{ fontFamily: "'Geist', sans-serif" }}>
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
