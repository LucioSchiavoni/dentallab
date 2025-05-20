"use client"

import { ArrowDown } from "lucide-react"
import { Hero } from "@/components/Hero"
import Navbar from "@/components/navbar"
import About from "@/components/About"
import Contact from "@/components/Contact"
import { useEffect } from "react"


function App() {
  // Enable smooth scrolling
  useEffect(() => {
    // Handle anchor links with smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A") {
        const href = (target as HTMLAnchorElement).getAttribute("href")
        if (href && href.startsWith("#")) {
          e.preventDefault()
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  return (
    <main className="min-h-screen">
      <Navbar />
      <section id="home" className="relative">
        <Hero/>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-navy-blue">
            <span className="mb-2 text-sm font-medium">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </section>
      <section id="about" className="py-20">
        <About />
      </section>
      <section id="contact" className="py-20 bg-gray-50">
        <Contact />
      </section>
      <footer className="bg-navy-blue text-white py-6">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Digital Dental Lab. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

export default App
