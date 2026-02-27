const sections = [
  { label: "Resumen Ejecutivo", href: "#resumen" },
  { label: "El Contexto", href: "#contexto" },
  { label: "La Solución", href: "#solucion" },
  { label: "Bienestar", href: "#bienestar" },
  { label: "Financiero", href: "#financiero" },
  { label: "Inversión", href: "#inversion" },
  { label: "Implementación", href: "#implementacion" },
]

export default function Footer() {
  return (
    <footer className="w-full bg-[#F9FAFB] border-t border-[#F3F4F6] py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-lg font-bold text-black tracking-tight">AURA</p>
            <p className="text-sm text-[#9CA3AF]">Plataforma Digital de Bienestar Integral</p>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {sections.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="text-xs text-[#9CA3AF] hover:text-[#8B5CF6] transition-colors duration-200"
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-8 pt-6 border-t border-[#F3F4F6] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs text-[#9CA3AF]">
            © 2025 AURA · Propuesta Comercial para Willdom · Febrero 2025
          </p>
          <p className="text-xs text-[#9CA3AF]">Confidencial</p>
        </div>
      </div>
    </footer>
  )
}
