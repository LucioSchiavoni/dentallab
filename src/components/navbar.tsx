"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import logoUrl from '../assets/logo.jpg'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backgrop-blur-xl bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <div className="relative h-12 w-12 mr-3 ">
            <img
              src={logoUrl || "/placeholder.svg"}
              alt="Digital Dental Lab Logo"
              className=" object-contain rounded-full  "
            />
          </div>
          <span className={`font-bold text-xl ${isScrolled ? "text-navy-blue" : "text-white"}`}>
            Digital Dental Lab
          </span>
        </a>
      {/* FALTA AGREGAR EL ID SERVICIOS */}
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {["Inicio", "Nosotros", "Contacto"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`font-medium transition-colors hover:text-gold ${
                isScrolled ? "text-navy-blue" : "text-white"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-navy-blue" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4 px-4 flex flex-col space-y-4">
          {["Inicio", "Nosotros", "Contacto"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-medium text-navy-blue hover:text-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
