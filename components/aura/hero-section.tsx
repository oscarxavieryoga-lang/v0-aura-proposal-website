export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden flex flex-col bg-white"
      style={{ height: "100svh", minHeight: 600 }}
    >
      {/* Top nav */}
      <header className="relative z-20 flex items-center justify-between px-8 md:px-16 pt-8">
        <span
          className="text-black/40 text-[10px] tracking-[0.5em] uppercase"
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

      {/* Main layout — texto izquierda, foto derecha */}
      <div className="relative z-10 flex flex-1 items-center px-8 md:px-16 gap-12">

        {/* LEFT — Propuesta protagonista */}
        <div className="flex flex-col justify-center flex-1 max-w-2xl">

          <p
            className="text-black/40 uppercase mb-3"
            style={{
              fontFamily: "'Geist', sans-serif",
              fontSize: "clamp(0.7rem, 1.4vw, 0.85rem)",
              letterSpacing: "0.35em",
              fontWeight: 400,
            }}
          >
            PROPUESTA COMERCIAL
          </p>

          <h1
            className="font-serif font-light text-black"
            style={{
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
            }}
          >
            Una plataforma de
            <br />
            bienestar integral
            <br />
            para Willdom.
          </h1>

          <div className="w-10 h-px bg-black/20 my-8" />

          <p
            className="text-black/55 font-serif italic font-light"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.3rem)",
              lineHeight: 1.65,
              letterSpacing: "0.02em",
            }}
          >
            Piloto de 3 meses. ROI estimado 3.9×.
            <br />
            Inversión base $8,000 USD.
          </p>

          <div className="flex items-center gap-8 mt-10">
            <div className="flex flex-col gap-1">
              <span
                className="text-black font-serif"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 300, lineHeight: 1 }}
              >
                3.9×
              </span>
              <span
                className="text-black/35 uppercase"
                style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em" }}
              >
                ROI estimado
              </span>
            </div>
            <div className="w-px h-10 bg-black/10" />
            <div className="flex flex-col gap-1">
              <span
                className="text-black font-serif"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 300, lineHeight: 1 }}
              >
                25%
              </span>
              <span
                className="text-black/35 uppercase"
                style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em" }}
              >
                Participación esperada
              </span>
            </div>
            <div className="w-px h-10 bg-black/10" />
            <div className="flex flex-col gap-1">
              <span
                className="text-black font-serif"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 300, lineHeight: 1 }}
              >
                3 m.
              </span>
              <span
                className="text-black/35 uppercase"
                style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em" }}
              >
                Piloto
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT — Foto contenida, no full-bleed */}
        <div
          className="hidden md:block flex-shrink-0 relative overflow-hidden rounded-2xl"
          style={{ width: "38%", height: "70vh", maxHeight: 560 }}
        >
          <img
            src="/images/hero-meditation.jpg"
            alt="Persona meditando en calma"
            className="w-full h-full object-cover object-center"
            style={{ filter: "grayscale(15%) brightness(0.97)" }}
          />
          {/* Soft fade en el borde izquierdo para integrar con el blanco */}
          <div
            className="absolute inset-y-0 left-0 w-16"
            style={{ background: "linear-gradient(to right, white, transparent)" }}
          />
        </div>
      </div>

      {/* Bottom scroll cue */}
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
