export default function ProximosPasos() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: "70vh" }}>
      {/* Background image */}
      <img
        src="/images/yoga-nature.jpg"
        alt="El siguiente paso hacia el bienestar"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.62)" }} />

      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[70vh] px-8 py-28">

        <p className="text-white/50 text-[10px] tracking-[0.45em] uppercase mb-10" style={{ fontFamily: "'Geist', sans-serif" }}>
          Próximos Pasos
        </p>

        <h2 className="font-serif font-light text-white text-balance mb-8" style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)", lineHeight: 1.1 }}>
          Una reunión de 30 minutos<br />
          <span className="italic">lo cambia todo.</span>
        </h2>

        <p className="text-white/65 mb-14 max-w-md leading-relaxed" style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.95rem" }}>
          Con Karina y el equipo de decisión. Responder preguntas, validar el timeline, alinear expectativas y firmar.
        </p>

        <a
          href="mailto:contacto@aura.com"
          className="inline-block border border-white/70 text-white text-sm tracking-[0.3em] uppercase px-10 py-4 hover:bg-white hover:text-black transition-colors duration-300"
          style={{ fontFamily: "'Geist', sans-serif" }}
        >
          Agendar Reunión
        </a>

        <p className="mt-6 text-white/35 italic" style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.8rem" }}>
          Disponibles en horario de su preferencia.
        </p>
      </div>
    </section>
  )
}
