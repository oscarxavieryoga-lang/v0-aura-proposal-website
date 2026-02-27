"use client"

const links = [
  { label: "Resumen Ejecutivo", href: "#resumen" },
  { label: "El Contexto", href: "#contexto" },
  { label: "La Solución", href: "#solucion" },
  { label: "Impacto Bienestar", href: "#bienestar" },
  { label: "Impacto Financiero", href: "#financiero" },
  { label: "Inversión", href: "#inversion" },
  { label: "Implementación", href: "#implementacion" },
  { label: "Próximos Pasos", href: "#proximos" },
]

export default function TableOfContents() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <nav
      className="w-full border-b"
      style={{ background: "#FFFFFF", borderColor: "#DEDAD5", position: "sticky", top: 0, zIndex: 40 }}
      aria-label="Tabla de contenidos"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide" style={{ scrollbarWidth: "none" }}>
          <span className="font-sans font-semibold text-xs mr-4 flex-shrink-0" style={{ color: "#1A1A18" }}>
            AURA
          </span>
          <div className="w-px h-4 bg-border flex-shrink-0 mr-3" />
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="flex-shrink-0 font-sans text-xs px-3 py-1.5 rounded-full transition-colors duration-150 whitespace-nowrap"
              style={{
                color: "#6B6B66",
                background: "transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#EBF2F0"
                ;(e.currentTarget as HTMLAnchorElement).style.color = "#4A7C6F"
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent"
                ;(e.currentTarget as HTMLAnchorElement).style.color = "#6B6B66"
              }}
            >
              {i + 1}. {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
