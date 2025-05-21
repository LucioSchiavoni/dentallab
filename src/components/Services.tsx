import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { TracingBeam } from "./ui/tracing-beam"
import serviceJson from "./json/services.json"
import { cn } from "@/lib/utils"

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

  // Calculate background color based on scroll
  const getBackgroundColor = () => {
    if (scrollY > 600) return "bg-gradient-to-b from-[#051a38] to-[#030e1f] text-white"
    if (scrollY > 300) return "bg-gradient-to-b from-[#072548] to-[#051a38] text-white"
    return "bg-[#0a2f60] text-white"
  }

  return (
    <div className={`min-h-screen transition-colors duration-700 ${getBackgroundColor()}`}>
      {/* Fixed header with back button that changes on scroll */}
      <div
        ref={headerRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-[#0a2f60]/90 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            to="/"
            className={`group flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
              scrollY > 50
                ? "bg-[#1a4b8c] hover:bg-[#2a5ca3] text-white"
                : "bg-[#1a4b8c]/80 hover:bg-[#1a4b8c] text-white"
            }`}
          >
            <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span className="font-medium">Volver</span>
          </Link>

          <div
            className={`text-lg font-bold transition-opacity duration-300 ${
              scrollY > 50 ? "opacity-100" : "opacity-0"
            }`}
          >
            Nuestros Servicios
          </div>
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
          <h1
            className={`text-5xl md:text-6xl font-extrabold mb-4 transition-colors duration-700 ${
              scrollY > 200 ? "text-blue-300" : "text-white"
            }`}
          >
            Nuestros Servicios
          </h1>
    
        </div>
      </div>

      {/* Main content with tracing beam */}
      <TracingBeam className="px-4 md:px-6 pb-20 pt-10">
        <ServicesContent
          services={serviceJson}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
          scrollY={scrollY}
        />
      </TracingBeam>
    </div>
  )
}

// Separate component for services content
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
                  ? "bg-gradient-to-br from-[#0d3872] to-[#0a2f60] shadow-lg scale-[1.02] border-[#2a5ca3]"
                  : "bg-[#0a2f60]/50 hover:shadow-md hover:border-[#2a5ca3]",
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
