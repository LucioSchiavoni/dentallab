import { motion } from "framer-motion"
import { CheckCircle, Rocket, Smile, Cpu } from "lucide-react"
import shape from '../assets/3shape.jpg'

export default function About() {
  const features = [
    {
      icon: <Cpu className="h-6 w-6 text-gold" />,
      title: "Tecnología Avanzada",
      description: "Tecnología de escaneo digital e impresión 3D de última generación para resultados precisos.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-gold" />,
      title: "Garantía de Calidad",
      description: "Rigurosos procesos de control de calidad para asegurar un ajuste perfecto y estética natural.",
    },
    {
      icon: <Rocket className="h-6 w-6 text-gold" />,
      title: "Alta Rapidez",
      description: "Procesos digitales eficientes que reducen los tiempos de entrega y optimizan cada etapa del tratamiento.",
    },
    {
      icon: <Smile className="h-6 w-6 text-gold" />,
      title: "Sin Molestias para tus Pacientes",
      description: "Tecnología no invasiva que mejora la experiencia del paciente al eliminar incomodidades tradicionales.",
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">Sobre Nosotros</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="max-w-2xl text-xl mx-auto text-gray-600">
          Realizamos trabajos digitales para odontólogos y laboratorios dentales.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={shape}
              alt="Instalaciones de Digital Dental Lab"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-navy-blue mb-6">Liderando la Odontología Digital</h3>
          <p className="text-gray-600 mb-8">
           Somos un laboratorio 100% digital. Diseño CAD selectivo y escaneos intraorales con precisión y respaldo técnico.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="mr-3 mt-1">{feature.icon}</div>
                <div>
                  <h4 className="font-medium text-navy-blue">{feature.title}</h4>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
