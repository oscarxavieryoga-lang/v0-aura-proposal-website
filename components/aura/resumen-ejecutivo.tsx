export default function ResumenEjecutivo() {
  return (
    <section className="w-full py-24 px-8 md:px-16 bg-background">
      <div className="max-w-5xl mx-auto">

        <p className="text-[10px] tracking-[0.45em] uppercase text-muted-foreground mb-8" style={{ fontFamily: "'Geist', sans-serif" }}>
          Resumen Ejecutivo
        </p>

        <h2 className="font-serif font-light text-foreground text-balance mb-6" style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", lineHeight: 1.15 }}>
          Willdom enfrentó una crisis de salud mental en su equipo.
          <br />
          <span className="italic">La pregunta que surgió fue inevitable:</span>
        </h2>

        <p className="font-serif italic text-muted-foreground mb-12" style={{ fontSize: "clamp(1.2rem, 2.8vw, 1.8rem)", lineHeight: 1.45 }}>
          "¿Cómo mejoramos genuinamente el bienestar de nuestro equipo?"
        </p>

        <p className="text-foreground/70 mb-14 max-w-2xl leading-relaxed" style={{ fontFamily: "'Geist', sans-serif", fontSize: "1rem" }}>
          AURA es la respuesta. Una plataforma digital de bienestar integral con acceso corporativo — diseñada para developers remotos que cargan con insomnio, dolor postural y estrés crónico sin herramientas para manejarlo. Acceso 24/7, privacidad total, sin vigilancia corporativa.
        </p>

        <div className="w-full h-px bg-border mb-14" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border">
          {[
            { label: "La solución", value: "AURA", sub: "Plataforma de bienestar integral" },
            { label: "Participación esperada", value: "25%", sub: "87 de 350 developers" },
            { label: "Retorno estimado", value: "3.9×", sub: "ROI en 3 meses de piloto" },
            { label: "Inversión base", value: "$8,000", sub: "Piloto 3 meses · pagos escalonados" },
          ].map((item) => (
            <div key={item.label} className="px-0 sm:px-8 py-10 sm:py-0 first:pl-0 last:border-r-0">
              <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-3" style={{ fontFamily: "'Geist', sans-serif" }}>
                {item.label}
              </p>
              <p className="font-serif font-light text-foreground mb-2" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1 }}>
                {item.value}
              </p>
              <p className="text-muted-foreground leading-snug" style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.85rem" }}>
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
