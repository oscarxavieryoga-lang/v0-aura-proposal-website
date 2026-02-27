export default function ProximosPasos() {
  return (
    <section className="relative w-full overflow-hidden bg-foreground" style={{ minHeight: "65vh" }}>
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-[65vh] px-8 py-24">

        <p className="text-white/40 text-[10px] tracking-[0.45em] uppercase mb-8" style={{ fontFamily: "'Geist', sans-serif" }}>
          Próximos Pasos
        </p>

        <h2 className="font-serif font-light text-white text-balance mb-6" style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)", lineHeight: 1.1 }}>
          Una reunión de 30 minutos
          <br />
          <span className="italic">para cerrar el acuerdo.</span>
        </h2>

        <p className="text-white/60 mb-6 max-w-lg leading-relaxed" style={{ fontFamily: "'Geist', sans-serif", fontSize: "1rem" }}>
          Con Karina y el equipo de decisión. El objetivo es simple: responder preguntas, validar el timeline, alinear expectativas y firmar.
        </p>

        <p className="text-white/40 mb-14 max-w-md leading-relaxed" style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.88rem" }}>
          El piloto puede iniciar en menos de 4 semanas desde la firma. El equipo puede estar practicando antes de que termine el mes.
        </p>

        
          href="mailto:contacto@aura.com"
          className="inline-block border border-white/50 text-white tracking-[0.3em] uppercase px-10 py-4 hover:bg-white hover:text-black transition-colors duration-300"
          style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.8rem" }}
        >
          Agendar Reunión
        </a>

        <p className="mt-5 text-white/30 italic" style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.8rem" }}>
          Disponibles en el horario de su preferencia.
        </p>

      </div>
    </section>
  )
}
