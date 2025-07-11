import type React from "react"
import emailjs from '@emailjs/browser'
import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, Send, Instagram } from "lucide-react"

export default function Contacto() {
  const [showAlert, setShowAlert] = useState(false)
  const [phoneError, setPhoneError] = useState("")

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    from_phone: "",
    message: "",
    title: "Consulta desde la web",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (name === "from_phone") {
      // Solo permitir números
      const onlyNums = value.replace(/[^0-9]/g, "")
      setFormData((prev) => ({ ...prev, [name]: onlyNums }))
      if (/[^0-9]/.test(value)) {
        setPhoneError("Solo se permiten números en el teléfono")
      } else {
        setPhoneError("")
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    console.log(formData)
    setShowAlert(true)
    setTimeout(() => {
      setShowAlert(false)
    }, 5000)
    setFormData({ from_name: "", from_email: "", from_phone: "", message: "", title:"Consulta desde la web" })
  }

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contáctanos</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-white">
            ¿Tienes preguntas? Comunícate con nuestro equipo para recibir
            asistencia personalizada.
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <div className="bg-gold p-3 rounded-full mr-4">
                <Phone className="h-5 w-5 text-navy-blue" />
              </div>
              <div>
  <h3 className="font-medium text-white">Teléfonos</h3>
  <div className="flex gap-1">
    <a
      href="https://api.whatsapp.com/send?phone=59894945790&text=Hola,%20quisiera%20consultar%20sobre%20sus%20servicios."
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:underline"
    >
      094945790
    </a>
    <span className="text-white font-bold">-</span>
    <a
      href="https://api.whatsapp.com/send?phone=59899869374&text=Hola,%20quisiera%20consultar%20sobre%20sus%20servicios."
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:underline"
    >
      099869374
    </a>
  </div>
</div>
            </div>
            <div className="flex items-start">
  <div className="bg-gold p-3 rounded-full mr-4">
    <Mail className="h-5 w-5 text-text-navy-blue" />
  </div>
  <div>
    <h4 className="font-medium text-white">Correo Electrónico</h4>
    
    <p className="text-white select-all">
      laboratoriodentaldigital.ml@gmail.com
    </p>
    
    <a
      href="mailto:laboratoriodentaldigital.ml@gmail.com?subject=Consulta&body=Hola, quiero hacer una consulta."
      className="text-sm text-gold hover:underline"
    >
      Enviar mensaje
    </a>
  </div>
</div>

            <div className="flex items-start">
              <div className="bg-gold p-3 rounded-full mr-4">
                <Instagram className="h-5 w-5 text-navy-blue" />
              </div>
              <div>
                <h4 className="font-medium text-white">Instagram</h4>
                <p className="text-white">
                  <a href="https://instagram.com/laboratorio_dental_digital" target="blank" className="text-white hover:underline">
                    @laboratorio_dental_digital
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* <div className="flex items-start">
              <div className="bg-navy-blue p-3 rounded-full mr-4">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-medium text-navy-blue">Ubicación</h4>
                <p className="text-gray-600">
                  Direccion
                  <br />
                  Montevideo
                </p>
              </div>
            </div> */}


        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-navy-blue mb-6">Envía un Mensaje</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="from_email" className="block text-sm font-medium text-gray-700 mb-1">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="from_phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Número de Teléfono
                  </label>
                  <input
                    type="tel"
                    id="from_phone"
                    name="from_phone"
                    value={formData.from_phone}
                    onChange={handleChange}
                    pattern="[0-9]*"
                    inputMode="numeric"
                    className="w-full px-4 py-2 border border-gray-300    rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                  {phoneError && (
                    <p className="text-red-500 text-xs mt-1">{phoneError}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Tu Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-navy-blue hover:bg-navy-blue/90 text-white font-medium py-3 px-6 rounded-md inline-flex items-center justify-center transition-all"
                  >
                  Enviar Mensaje
                  <Send size={18} className="ml-2" />
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>

       {/* Alerta moderna */}
       {showAlert && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-4  transform -translate-x-1/2 z-50 w-full max-w-xs sm:max-w-md px-2 box-border"
        >
          <div className="bg-white border-l-4 border-gold rounded-lg shadow-lg p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="bg-gold rounded-full p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-navy-blue"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-navy-blue">¡Mensaje enviado!</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.
                </p>
              </div>
              <button
                onClick={() => setShowAlert(false)}
                className="ml-auto text-gray-400 hover:text-gray-500 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="mt-3">
              <div className="w-full bg-gray-200 rounded-full h-1">
                <motion.div
                  initial={{ width: "100%" }}
                  animate={{ width: "0%" }}
                  transition={{ duration: 5, ease: "linear" }}
                  className="bg-gold h-1 rounded-full"
                ></motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
