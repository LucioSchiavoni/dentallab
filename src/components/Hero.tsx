"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import logo from '../assets/logo.jpg'
export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative h-screen w-full bg-gradient-to-b from-navy-blue to-[#0a1425] overflow-hidden">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0zMHY2aDZ2LTZoLTZ6bTAgMTJ2NmgtMTJ2NmgxMnY2aDZ2LTZoMTJ2LTZoLTEydi02aC02em0tMTIgMHY2aC02di02aDZ6bTAgMTh2Nmg2di02aC02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      </div>

      {/* Gold Accent Lines */}
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "100%" }}
        transition={{ duration: 1.5 }}
        className="absolute top-[15%] h-[1px] bg-gradient-to-r from-transparent via-gold/70 to-transparent"
      />
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "100%" }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-[15%] h-[1px] bg-gradient-to-r from-transparent via-gold/70 to-transparent"
      />

      <div className="container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-6xl mx-auto">
          {/* Logo and Content Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8 md:mb-0 w-40 md:w-52 h-auto relative"
            >
              <div className="relative w-full aspect-square bg-white/10 backdrop-blur-sm rounded-full p-3 border border-gold/30">
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-gold/20">
                  {/* Placeholder for your logo - replace the src with your actual logo path */}
                  <div className="w-full h-full flex items-center justify-center bg-navy-blue text-gold text-xl font-bold">
                    <img src={logo} alt="" />
                  </div>
                </div>
                <div className="absolute -inset-1 rounded-full border border-gold/20 opacity-50"></div>
              </div>
            </motion.div>

            {/* Content */}
            <div className="flex-1">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">
                  Digital Dental <span className="text-gold">Laboratory</span>
                </h1>
                <div className="h-1 w-24 bg-gold mb-6 mt-2"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
                  Innovación en odontología digital con la más avanzada tecnología de impresión 3D para resultados
                  precisos y de alta calidad.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="#contact"
                  className="bg-gold hover:bg-gold/90 text-navy-blue font-medium py-3 px-8 rounded-md inline-flex items-center transition-all shadow-lg shadow-gold/20"
                >
                  Contáctanos
                  <ChevronRight size={18} className="ml-2" />
                </a>
                <a
                  href="#services"
                  className="border border-gold/30 hover:border-gold bg-transparent hover:bg-navy-blue/50 text-gold font-medium py-3 px-8 rounded-md inline-flex items-center transition-all"
                >
                  Nuestros Servicios
                  <ChevronRight size={18} className="ml-2" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating 3D Printing Elements (Decorative) */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{ duration: 1.5, delay: 0.7 }}
        className="absolute bottom-0 right-0 pointer-events-none"
      >
        <svg
          width="600"
          height="400"
          viewBox="0 0 600 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-20"
        >
          <path d="M300 50L500 350H100L300 50Z" stroke="url(#gold-gradient)" strokeWidth="2" />
          <path d="M300 100L450 300H150L300 100Z" stroke="url(#gold-gradient)" strokeWidth="2" />
          <path d="M300 150L400 250H200L300 150Z" stroke="url(#gold-gradient)" strokeWidth="2" />
          <defs>
            <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D4AF37" />
              <stop offset="50%" stopColor="#F9DF74" />
              <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  )
}
