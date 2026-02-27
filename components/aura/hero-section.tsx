export default function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1A2E25 0%, #0F1A14 60%, #1A1A18 100%)", minHeight: 520 }}
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      {/* Top bar */}
      <header className="relative z-10 flex items-center justify-between px-6 md:px-12 pt-6 pb-0">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: "#4A7C6F" }}>
            <span className="text-white font-serif font-bold" style={{ fontSize: "0.7rem" }}>A</span>
          </div>
          <span className="text-white font-sans font-semibold tracking-wider text-sm">AURA</span>
        </div>
        <span className="text-white/40 font-sans text-xs tracking-wide">
          Propuesta Comercial · Willdom · Febrero 2025
        </span>
      </header>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 pt-16 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left: text */}
          <div>
            <span
              className="inline-block text-xs font-sans font-medium tracking-widest uppercase px-3 py-1 rounded-full mb-6"
              style={{ background: "rgba(74,124,111,0.25)", color: "#7AB5A8" }}
            >
              Bienestar Corporativo · Acceso Privado
            </span>
            <h1
              className="font-serif text-white text-balance mb-5"
              style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)", lineHeight: 1.15, fontWeight: 600 }}
            >
              Solución Integral de Bienestar para Developers Remotos
            </h1>
            <p className="font-sans text-white/60 leading-relaxed mb-8" style={{ fontSize: "1rem" }}>
              Una plataforma científicamente diseñada para prevenir crisis de salud mental, recuperar productividad y mejorar la calidad de vida de tu equipo tech.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { n: "350", l: "developers en Willdom" },
                { n: "3.9×", l: "ROI estimado · 3 meses" },
                { n: "$8K", l: "inversión base piloto" },
              ].map((s) => (
                <div key={s.n} className="border-l-2 pl-3" style={{ borderColor: "#4A7C6F" }}>
                  <p className="font-serif text-white font-semibold" style={{ fontSize: "1.4rem", lineHeight: 1 }}>{s.n}</p>
                  <p className="font-sans text-white/45 mt-1" style={{ fontSize: "0.7rem", lineHeight: 1.3 }}>{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: developer image */}
          <div className="relative hidden md:block">
            <div className="overflow-hidden rounded-lg" style={{ height: 340 }}>
              <img
                src="/images/dev-team.jpg"
                alt="Equipo de developers colaborando"
                className="w-full h-full object-cover"
                style={{ filter: "brightness(0.85) saturate(0.8)" }}
              />
            </div>
            {/* Floating card */}
            <div
              className="absolute bottom-4 left-4 right-4 rounded-md px-4 py-3 backdrop-blur-sm"
              style={{ background: "rgba(26,42,37,0.85)", border: "1px solid rgba(74,124,111,0.4)" }}
            >
              <p className="font-sans text-white/80 text-xs leading-relaxed">
                "El bienestar del equipo no es un beneficio. Es una estrategia de negocio."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
