const wellnessImages = [
  {
    src: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80",
    alt: "Persona practicando yoga al amanecer",
  },
  {
    src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
    alt: "Meditación en bosque para bienestar mental",
  },
]

export default function HeroSection() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12" style={{ background: "linear-gradient(to bottom, #ffffff, #f9fafb)" }}>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <span className="text-xs font-medium tracking-widest text-[#9CA3AF] uppercase">
            AURA · Propuesta Comercial
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight text-balance">
            Plataforma de Bienestar con Impacto Humano y ROI Real
          </h1>
          <p className="text-lg md:text-xl text-[#6B7280] max-w-xl leading-relaxed">
            Integramos bienestar mental, físico y emocional en una experiencia visual, simple y accionable para equipos remotos.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
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

        <div className="grid grid-cols-2 gap-4 h-[420px]">
          {wellnessImages.map((image, index) => (
            <div
              key={image.src}
              className={`relative overflow-hidden rounded-3xl shadow-lg ${index === 0 ? "mt-10" : "mb-10"}`}
            >
              <img src={image.src} alt={image.alt} className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
