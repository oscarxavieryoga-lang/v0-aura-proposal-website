export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100svh", minHeight: 560 }}>
      {/* Full-bleed hero image */}
      <img
        src="/images/hero-meditation.jpg"
        alt="Persona meditando en calma"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Soft dark veil */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.42) 60%, rgba(0,0,0,0.65) 100%)" }} />

      {/* Top nav */}
      <header className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 md:px-16 pt-8">
        <span className="text-white/90 text-xs tracking-[0.4em] uppercase" style={{ fontFamily: "'Geist', sans-serif", fontWeight: 300 }}>
          AURA
        </span>
        <span className="text-white/50 text-[10px] tracking-[0.25em] uppercase" style={{ fontFamily: "'Geist', sans-serif" }}>
          Propuesta Comercial · Willdom · 2025
        </span>
      </header>

      {/* Center content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
        <p className="text-white/60 text-[10px] tracking-[0.5em] uppercase mb-8" style={{ fontFamily: "'Geist', sans-serif" }}>
          BIENESTAR INTEGRAL · ACCESO CORPORATIVO
        </p>

        <h1
          className="text-white font-serif font-light text-balance"
          style={{ fontSize: "clamp(4.5rem, 14vw, 11rem)", lineHeight: 0.9, letterSpacing: "-0.01em" }}
        >
          AURA
        </h1>

        <div className="w-12 h-px bg-white/40 my-8" />

        <p
          className="text-white/75 font-serif italic font-light text-balance"
          style={{ fontSize: "clamp(1.1rem, 2.8vw, 1.6rem)", letterSpacing: "0.05em" }}
        >
          El bienestar de tu equipo, profundamente.
        </p>
      </div>

      {/* Bottom scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
        <div className="w-px h-14 bg-white/30" />
        <span className="text-white/40 text-[9px] tracking-[0.4em] uppercase" style={{ fontFamily: "'Geist', sans-serif" }}>
          Scroll
        </span>
      </div>
    </section>
  )
}
