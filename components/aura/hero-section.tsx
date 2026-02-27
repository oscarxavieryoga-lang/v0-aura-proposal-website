export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden flex flex-col"
      style={{ height: "100svh", minHeight: 600, background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #111 100%)" }}
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg, transparent, transparent 2px,
            rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 3px
          )`,
        }}
      />

      {/* Top nav */}
      <header className="relative z-20 flex items-center justify-between px-8 md:px-16 pt-8">
        <span
          className="text-white/50 text-[10px] tracking-[0.5em] uppercase"
          style={{ fontFamily: "'Geist', sans-serif", fontWeight: 300 }}
        >
          AURA
        </span>
        <span
          className="text-white/30 text-[10px] tracking-[0.25em] uppercase"
          style={{ fontFamily: "'Geist', sans-serif" }}
        >
          Confidencial · Febrero 2025
        </span>
      </header>

      {/* Main content — centered */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center px-6">

        {/* Eyebrow */}
        <p
          className="text-white/35 text-[10px] tracking-[0.6em] uppercase mb-12"
          style={{ fontFamily: "'Geist', sans-serif" }}
        >
          PROPUESTA COMERCIAL
        </p>

        {/* Company name — the destination */}
        <p
          className="text-white/50 tracking-[0.35em] uppercase mb-4"
          style={{ fontFamily: "'Geist', sans-serif", fontSize: "clamp(0.75rem, 1.8vw, 1rem)", fontWeight: 300 }}
        >
          Para Willdom
        </p>

        {/* AURA — protagonist */}
        <h1
          className="text-white font-serif font-light"
          style={{ fontSize: "clamp(5rem, 16vw, 13rem)", lineHeight: 0.88, letterSpacing: "-0.02em" }}
        >
          AURA
        </h1>

        {/* Divider */}
        <div className="flex items-center gap-6 my-10">
          <div className="w-16 h-px bg-white/20" />
          <span
            className="text-white/30 text-[9px] tracking-[0.5em] uppercase"
            style={{ fontFamily: "'Geist', sans-serif" }}
          >
            Bienestar Integral · Acceso Corporativo
          </span>
          <div className="w-16 h-px bg-white/20" />
        </div>

        {/* Value proposition — this is what they came to read */}
        <p
          className="text-white/70 font-serif italic font-light max-w-xl"
          style={{ fontSize: "clamp(1.15rem, 2.5vw, 1.55rem)", lineHeight: 1.6, letterSpacing: "0.03em" }}
        >
          Una plataforma de bienestar integral para el equipo de Willdom.
          <br />
          Piloto 3 meses · ROI 3.9× · Inversión desde $8,000 USD.
        </p>
      </div>

      {/* Bottom — scroll cue */}
      <div className="relative z-20 flex flex-col items-center gap-3 pb-10">
        <div className="w-px h-14 bg-white/20" />
        <span
          className="text-white/25 text-[9px] tracking-[0.4em] uppercase"
          style={{ fontFamily: "'Geist', sans-serif" }}
        >
          Scroll
        </span>
      </div>
    </section>
  )
}
