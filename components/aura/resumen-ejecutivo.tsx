export default function ResumenEjecutivo() {
  return (
    <section id="resumen" className="w-full py-14 px-6 md:px-12 bg-background">
      <div className="max-w-5xl mx-auto">

        <p className="font-sans text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "#4A7C6F" }}>
          01 · Resumen Ejecutivo
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: narrative */}
          <div>
            <h2 className="font-serif text-foreground text-balance mb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", lineHeight: 1.2, fontWeight: 600 }}>
              Una crisis real. Una pregunta honesta.<br />Una solución comprobada.
            </h2>
            <p className="font-sans text-muted-foreground leading-relaxed mb-5" style={{ fontSize: "0.9rem" }}>
              Willdom enfrentó recientemente una crisis de salud mental en su equipo: un developer en depresión sin avisos previos. Esto generó una pregunta clara: <strong className="text-foreground">¿Cómo mejoramos genuinamente el bienestar de nuestro equipo?</strong>
            </p>
            <p className="font-sans text-muted-foreground leading-relaxed" style={{ fontSize: "0.9rem" }}>
              AURA es la respuesta. Una plataforma digital de bienestar integral con acceso corporativo — prácticas reales, privacidad total, comunidad global, y acceso 24/7. Sin vigilancia, sin presión.
            </p>

            {/* Piloto info */}
            <div className="mt-6 p-4 rounded-md border" style={{ borderColor: "#DEDAD5", background: "#EBF2F0" }}>
              <p className="font-sans font-semibold text-sm mb-1" style={{ color: "#1A2E25" }}>Piloto: 3 meses de evaluación completa</p>
              <p className="font-sans text-xs leading-relaxed" style={{ color: "#4A7C6F" }}>
                Setup + presentaciones en 3–4 semanas. Evaluación y decisión final: 10 de junio.
              </p>
            </div>
          </div>

          {/* Right: key numbers */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Participación esperada", value: "25%", sub: "87 de 350 developers", accent: false },
              { label: "ROI estimado (3 meses)", value: "3.9×", sub: "$30,932 de retorno", accent: true },
              { label: "Inversión base piloto", value: "$8,000", sub: "pagos escalonados", accent: false },
              { label: "Inversión máxima total", value: "$12,500", sub: "con bonos por resultados", accent: false },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-md p-4 border"
                style={{
                  background: item.accent ? "#1A2E25" : "#FFFFFF",
                  borderColor: item.accent ? "#1A2E25" : "#DEDAD5",
                }}
              >
                <p className="font-sans text-xs mb-2 leading-tight" style={{ color: item.accent ? "rgba(255,255,255,0.55)" : "#6B6B66" }}>
                  {item.label}
                </p>
                <p className="font-serif font-semibold mb-0.5" style={{ fontSize: "1.7rem", lineHeight: 1, color: item.accent ? "#FFFFFF" : "#1A1A18" }}>
                  {item.value}
                </p>
                <p className="font-sans text-xs" style={{ color: item.accent ? "rgba(255,255,255,0.45)" : "#6B6B66" }}>
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
