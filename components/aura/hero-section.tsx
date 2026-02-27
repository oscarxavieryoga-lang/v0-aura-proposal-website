export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden flex flex-col bg-white"
      style={{ height: "100svh", minHeight: 600 }}
    >
      {/* Top nav */}
      <header className="relative z-20 flex items-center justify-between px-8 md:px-16 pt-8">
        <span
          className="text-black/35 text-[10px] tracking-[0.5em] uppercase"
          style={{ fontFamily: "'Geist', sans-serif", fontWeight: 300 }}
        >
          AURA
        </span>
        <span
          className="text-black/25 text-[10px] tracking-[0.25em] uppercase"
          style={{ fontFamily: "'Geist', sans-serif" }}
        >
          Confidencial · Febrero 2025
        </span>
      </header>

      {/* Main layout — centrado */}
      <div className="relative z-10 flex flex-col flex-1 items-center justify-center text-center px-6 gap-8">

        <p
          className="text-black/40 uppercase"
          style={{
            fontFamily: "'Geist', sans-serif",
            fontSize: "clamp(0.65rem, 1.2vw, 0.78rem)",
            letterSpacing: "0.45em",
            fontWeight: 400,
          }}
        >
          PROPUESTA COMERCIAL · WILLDOM · 2025
        </p>

        <h1
          className="font-serif font-light text-black"
          style={{
            fontSize: "clamp(2.8rem, 7vw, 5.8rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            maxWidth: "820px",
          }}
        >
          Una plataforma de bienestar integral
          <br />
          <span className="italic">para el equipo de Willdom.</span>
        </h1>

        <div className="w-10 h-px bg-black/20" />

        <p
          className="text-black/50 font-serif font-light"
          style={{
            fontSize: "clamp(0.95rem, 1.8vw, 1.2rem)",
            lineHeight: 1.7,
            letterSpacing: "0.01em",
            maxWidth: "480px",
          }}
        >
          Piloto de 3 meses. ROI estimado 3.9×.
          <br />
          Inversión base $8,000 USD.
        </p>

        {/* Foto contenida */}
        <div
          className="overflow-hidden rounded-xl w-full"
          style={{ maxWidth: "680px", height: "clamp(180px, 28vw, 340px)" }}
        >
          <img
            src="/images/hero-meditation.jpg"
            alt="Persona meditando en calma"
            className="w-full h-full object-cover object-center"
            style={{ filter: "grayscale(20%) brightness(0.96)" }}
          />
        </div>

        {/* 3 métricas */}
        <div className="flex items-center gap-10">
          {[
            { val: "3.9×", label: "ROI estimado" },
            { val: "25%", label: "Participación esperada" },
            { val: "3 m.", label: "Piloto" },
          ].map((m, i, arr) => (
            <div key={m.label} className="flex items-center gap-10">
              <div className="flex flex-col items-center gap-1">
                <span
                  className="text-black font-serif font-light"
                  style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", lineHeight: 1 }}
                >
                  {m.val}
                </span>
                <span
                  className="text-black/35 uppercase"
                  style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.6rem", letterSpacing: "0.3em" }}
                >
                  {m.label}
                </span>
              </div>
              {i < arr.length - 1 && <div className="w-px h-8 bg-black/10" />}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="relative z-20 flex flex-col items-center gap-3 pb-8">
        <div className="w-px h-10 bg-black/15" />
        <span
          className="text-black/25 text-[9px] tracking-[0.4em] uppercase"
          style={{ fontFamily: "'Geist', sans-serif" }}
        >
          Scroll
        </span>
      </div>
    </section>
  )
}
