"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { FlipWordsDemo } from "./animation/FlipWordsComponent"
import { Button } from "./ui/button"
import { ChevronRight, Phone, ChevronDown } from "lucide-react"
import { Link } from "react-router-dom"
import logoSvg from '../assets/logo-dental.svg'

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Particle animation effect for the background
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
    }[] = []

    const createParticles = () => {
      // Clear existing particles
      particles.length = 0

      // Calculate number of particles based on screen width
      const particleCount = window.innerWidth < 768 ? 40 : 100

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          opacity: Math.random() * 0.5 + 0.2,
        })
      }
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        ctx.fillStyle = `rgba(213, 185, 151, ${p.opacity})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        p.x += p.speedX
        p.y += p.speedY

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1
      }

      requestAnimationFrame(animateParticles)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight

      // Clear the canvas before recreating particles
      ctx?.clearRect(0, 0, canvas.width, canvas.height)

      // Recreate particles with appropriate count
      createParticles()
    }

    window.addEventListener("resize", handleResize)
    createParticles()
    animateParticles()

    return () => {
      window.removeEventListener("resize", handleResize)
      particles.length = 0 // Clear particles array
    }
  }, [])

  // Smooth scroll function
  const scrollToNextSection = () => {
    const heroHeight = window.innerHeight
    window.scrollTo({
      top: heroHeight,
      behavior: "smooth",
    })
  }

  const handleWpp = () => {
    const phoneNumber = "59894492064" 
    const message = "Hola, quisiera consultar sobre sus servicios."
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`

    window.open(url, "_blank")
  }

  return (
    <section className="relative w-full overflow-hidden bg-[#0a2f60] py-20 md:py-32 min-h-screen flex flex-col justify-between">
      {/* Animated canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-40" />

      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#d5b997" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-radial from-[#0a2f60]/0 to-[#0a2f60]/90"></div>

      <div className="container relative z-10 mx-auto px-4 flex-grow flex flex-col justify-center">
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          {/* Animated Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              duration: 0.8,
            }}
            className="relative"
          >
            <div className="absolute -inset-1 rounded-full bg-gradient-to-t from-[#eedfcd] to-[#d5b997]/60 blur-md animate-pulse"></div>
            <div className="relative h-28 w-28 overflow-hidden rounded-full md:h-40 md:w-40">
              <img
                src={logoSvg || "/placeholder.svg"}
                alt="Digital Dental Lab Logo"
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Animated Title */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="bg-gradient-to-r from-[#d5b997] via-gold to-white bg-clip-text text-5xl pb-4 font-bold text-transparent md:text-6xl lg:text-7xl">
              Digital Dental Lab
            </h1>

            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-1">
                <span className="font-semibold text-white text-xl md:text-2xl">Nos enfocamos en</span>
                <FlipWordsDemo />
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons with animation */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col gap-4 sm:flex-row mt-4"
          >
            <Link to="/servicios">
              <Button className="group bg-[#d5b997] text-[#0a2f60] hover:bg-[#d5b997]/90">
                Nuestros Servicios
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <Button
              variant="outline"
              className="border-[#d5b997] text-black hover:bg-[#d5b997]/10 hover:text-gold"
              onClick={() => handleWpp()}
            >
              <Phone className="mr-2 h-4 w-4" />
              Consúltanos
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="relative z-20 flex justify-center mb-8">
        <motion.button
          onClick={scrollToNextSection}
          className="flex flex-col items-center cursor-pointer group"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <div className="flex flex-col items-center">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="absolute -inset-1 rounded-full bg-[#d5b997]/30 blur-sm"></div>
              <ChevronDown className="h-8 w-8 text-[#d5b997] relative z-10" />
            </motion.div>
            <div className="h-12 w-[1px] bg-gradient-to-b from-[#d5b997] to-transparent mt-1 group-hover:h-16 transition-all duration-300"></div>
          </div>
        </motion.button>
      </div>

      {/* Bottom wave with animation */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0"
      >
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="#d5b997"
            fillOpacity="0.2"
          />
        </svg>
      </motion.div>
    </section>
  )
}
