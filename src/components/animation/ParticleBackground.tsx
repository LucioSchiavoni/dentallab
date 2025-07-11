import { useEffect, useRef } from "react"

interface ParticleBackgroundProps {
  className?: string
}

export const ParticleBackground = ({ className }: ParticleBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

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
      particles.length = 0
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
      ctx?.clearRect(0, 0, canvas.width, canvas.height)
      createParticles()
    }

    window.addEventListener("resize", handleResize)
    createParticles()
    animateParticles()

    return () => {
      window.removeEventListener("resize", handleResize)
      particles.length = 0
    }
  }, [])

  return (
    <canvas ref={canvasRef} className={`fixed inset-0 z-0 opacity-40 pointer-events-none w-screen h-screen ${className || ''}`} />
  )
} 