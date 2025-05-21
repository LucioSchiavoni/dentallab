import { TracingBeam } from "../ui/tracing-beam"
import serviceJson from "../json/services.json"
import { CheckCircle } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function TracingBeamDemo() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <TracingBeam className="px-6 pb-20">
      <div className="max-w-3xl mx-auto antialiased pt-8 relative">
        <h2 className="text-3xl font-bold mb-8 text-center">Nuestros Servicios</h2>

        <div className="space-y-12">
          {serviceJson.map((item, index) => (
            <div
              key={`content-${index}`}
              className={cn(
                "relative p-6 rounded-xl transition-all duration-300",
                "border border-gray-200 dark:border-gray-800",
                "hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-700",
                hoveredIndex === index ? "bg-gray-50 dark:bg-gray-900/50" : "",
              )}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 dark:bg-blue-950/50 p-3 rounded-lg text-blue-600 dark:text-blue-400">
                  <CheckCircle className="h-6 w-6" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">{item.title}</h3>

                  <div className="prose prose-gray dark:prose-invert">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.description}</p>
                  </div>

                  <div
                    className={cn(
                      "mt-4 flex items-center text-sm font-medium text-blue-600 dark:text-blue-400",
                      "transition-opacity duration-300",
                      hoveredIndex === index ? "opacity-100" : "opacity-0",
                    )}
                  >
                  
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </TracingBeam>
  )
}
