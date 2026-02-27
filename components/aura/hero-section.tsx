export default function HeroSection() {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-12 text-center" style={{ background: "linear-gradient(to bottom, #ffffff, #f9fafb)" }}>
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
        <span className="text-xs font-medium tracking-widest text-[#9CA3AF] uppercase">
          AURA · Propuesta Comercial
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight text-balance">
          Plataforma Digital de Bienestar Integral
        </h1>
        <p className="text-xl md:text-2xl font-semibold text-[#6B7280]">
          Con Acceso Corporativo para Willdom
        </p>
        <p className="text-base md:text-lg text-[#6B7280] max-w-xl leading-relaxed">
          Solución científicamente comprobada para mejorar bienestar, prevenir crisis y recuperar productividad en developers remotos.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <div className="flex items-center gap-2 bg-[#F3F4F6] rounded-full px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6] inline-block" />
            <span className="text-sm text-[#6B7280] font-medium">87 usuarios esperados</span>
          </div>
          <div className="flex items-center gap-2 bg-[#F3F4F6] rounded-full px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-[#EC4899] inline-block" />
            <span className="text-sm text-[#6B7280] font-medium">ROI 3.9x en 3 meses</span>
          </div>
          <div className="flex items-center gap-2 bg-[#F3F4F6] rounded-full px-4 py-2">
            <span className="w-2 h-2 rounded-full bg-black inline-block" />
            <span className="text-sm text-[#6B7280] font-medium">Piloto 3 meses</span>
          </div>
        </div>
      </div>
    </section>
  )
}
