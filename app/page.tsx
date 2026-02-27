import HeroSection from "@/components/aura/hero-section"
import ResumenEjecutivo from "@/components/aura/resumen-ejecutivo"
import ElContexto from "@/components/aura/el-contexto"
import LaSolucion from "@/components/aura/la-solucion"
import ImpactoBienestar from "@/components/aura/impacto-bienestar"
import ImpactoFinanciero from "@/components/aura/impacto-financiero"
import Inversion from "@/components/aura/inversion"
import Implementacion from "@/components/aura/implementacion"
import ProximosPasos from "@/components/aura/proximos-pasos"
import Footer from "@/components/aura/footer"

export default function Page() {
  return (
    <main className="bg-background text-foreground font-serif">
      <HeroSection />
      <ResumenEjecutivo />
      <ElContexto />
      <LaSolucion />
      <ImpactoBienestar />
      <ImpactoFinanciero />
      <Inversion />
      <Implementacion />
      <ProximosPasos />
      <Footer />
    </main>
  )
}
