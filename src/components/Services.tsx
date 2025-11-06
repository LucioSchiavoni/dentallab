import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import serviceJson from "./json/services.json"
import { cn } from "@/lib/utils"
import { ParticleBackground } from "./animation/ParticleBackground"
import { ServiceCard } from "./service-card"
import designCadImage from "@/assets/cad.jpg"
import cadVideo from "@/assets/cam-dentallab.mp4"

const Services = () => {
  const [scrollY, setScrollY] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate opacity and scale based on scroll position
  const headerOpacity = Math.max(0, Math.min(1, 1 - scrollY / 300))
  const titleScale = Math.max(0.8, Math.min(1, 1 - scrollY / 1000))

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0a2f60]">
      {/* Fondo de partículas */}
      <ParticleBackground />
      {/* Fixed header with back button that changes on scroll */}
      <div
        ref={headerRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white shadow-md' : 'bg-transparent'}`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            to="/"
            className={`group flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${scrollY > 50 ? 'bg-[#e5e7eb] text-[#0a2f60] hover:bg-[#d5b997]/60' : 'bg-[#1a4b8c]/80 text-white hover:bg-[#1a4b8c]'}`}
          >
            <ArrowLeft className={`h-5 w-5 transition-transform group-hover:-translate-x-1 ${scrollY > 50 ? 'text-[#0a2f60]' : 'text-white'}`} />
            <span className="font-medium">Volver</span>
          </Link>

          <div className={`text-lg font-bold transition-opacity duration-300 opacity-100 ${scrollY > 50 ? 'text-[#0a2f60]' : 'text-white'}`}>Nuestros Servicios</div>
        </div>
      </div>

      {/* Hero section with animated title */}
      <div
        className="relative h-[40vh] flex items-center justify-center overflow-hidden"
        style={{
          opacity: headerOpacity,
        }}
      >
        <div
          className="text-center transition-all duration-300 transform"
          style={{
            transform: `scale(${titleScale})`,
          }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold  text-white drop-shadow-lg">
            Nuestros Servicios
          </h1>
        </div>
      </div>

      {/* CAD/CAM Section */}
      <div className="relative z-10 py-12 px-4">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Service 1 - CAD Design */}
          <ServiceCard
            title="Servicio de Diseño CAD"
            description="Realizamos el diseño digital de tus trabajos dentales (CAD) a partir de los archivos que nos envíes."
            features={[
              "100% digital y remoto",
              "Disponible para cualquier parte del mundo",
              "Trabajo únicamente con envío de archivos",
              "Precisión y calidad garantizada",
            ]}
            imagePosition="left"
            imageSrc={designCadImage}
          />

          {/* Service 2 - CAD/CAM Integral */}
          <ServiceCard
            title="Servicio Integral CAD/CAM"
            description="Además del diseño, nos encargamos de la terminación completa de las piezas mediante tecnología CAD/CAM."
            features={[
              "Diseño digital completo",
              "Fabricación con tecnología CAM",
              "Terminación y acabado profesional",
              "Trabajo listo para entregar al paciente",
            ]}
            imagePosition="right"
            imageSrc={cadVideo}
            isVideo={true}
          />
        </div>
      </div>

      {/* More Services Section */}
      <div className="relative z-10 py-12 px-4 bg-[#0d3872]/50">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Más Servicios</h2>
          <p className="text-xl text-blue-100">Descubre nuestra gama completa de servicios dentales</p>
        </div>
        <div className="p-3">
          <ServicesContent
            services={serviceJson}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            scrollY={scrollY}
          />
        </div>
      </div>
    </div>
  )
}


const ServicesContent = ({
  services,
  hoveredIndex,
  setHoveredIndex,
  scrollY,
}: {
  services: any[]
  hoveredIndex: number | null
  setHoveredIndex: (index: number | null) => void
  scrollY: number
}) => {
  return (
    <div className="max-w-4xl mx-auto antialiased relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((item, index) => {
          // Calculate delay based on index for staggered animations
          const isVisible = index < 2 || scrollY > 100 + index * 50

          return (
            <div
              key={`content-${index}`}
              className={cn(
                "relative p-6 rounded-xl transition-all duration-500",
                "border border-[#1a4b8c] dark:border-[#1a4b8c]",
                "transform",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                hoveredIndex === index
                  ? "bg-[#0d3872] shadow-lg scale-[1.02] border-[#2a5ca3]"
                  : "bg-[#0d3872] hover:shadow-md hover:border-[#2a5ca3]",
              )}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4">
    

                  <h3
                    className={cn(
                      "text-xl font-semibold transition-colors duration-300",
                      hoveredIndex === index ? "text-blue-200" : "text-white",
                    )}
                  >
                    {item.title}
                  </h3>
                </div>

                <div className="prose prose-invert flex-grow">
                  <p className="text-blue-100 leading-relaxed">{item.description}</p>
                </div>

                <div
                  className={cn(
                    "mt-4 flex justify-end",
                    "transition-all duration-300",
                    hoveredIndex === index ? "opacity-100" : "opacity-0",
                  )}
                >
                  

                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Services
