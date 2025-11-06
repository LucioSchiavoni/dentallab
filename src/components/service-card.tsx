import { Check } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  features: string[]
  imagePosition: "left" | "right"
  imageSrc: string
  isVideo?: boolean
}

export function ServiceCard({ title, description, features, imagePosition, imageSrc, isVideo }: ServiceCardProps) {
  return (
    <div
      className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
        imagePosition === "right" ? "md:grid-flow-dense" : ""
      }`}
    >
      {/* Image */}
      <div className={`relative ${imagePosition === "right" ? "md:col-start-2" : ""}`}>
        <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-2xl"></div>
        <div className="relative text-white aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-muted">
          {isVideo ? (
            <video src={imageSrc} autoPlay loop muted playsInline className="w-full h-full object-cover" />
          ) : (
            <img src={imageSrc || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
          )}
        </div>
      </div>

      {/* Content */}
      <div className={imagePosition === "right" ? "md:col-start-1 md:row-start-1" : ""}>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h3>
        <p className="text-lg text-white mb-8 leading-relaxed">{description}</p>

        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-emerald-600" />
              </div>
              <span className="text-white">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}