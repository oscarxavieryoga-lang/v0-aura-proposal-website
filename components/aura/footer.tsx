export default function Footer() {
  return (
    <footer className="w-full bg-secondary border-t border-border py-14 px-8 md:px-16">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <div>
          <p className="font-serif font-light text-foreground mb-1" style={{ fontSize: "1.6rem" }}>
            AURA
          </p>
          <p className="text-muted-foreground" style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.8rem" }}>
            Plataforma Digital de Bienestar Integral
          </p>
        </div>
        <div className="text-right">
          <p className="text-muted-foreground mb-1" style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.75rem" }}>
            Propuesta Comercial para Willdom · Febrero 2025
          </p>
          <p className="text-muted-foreground italic" style={{ fontFamily: "'Geist', sans-serif", fontSize: "0.72rem" }}>
            Confidencial
          </p>
        </div>
      </div>
    </footer>
  )
}
