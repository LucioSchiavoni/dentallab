
import { Hero } from "@/components/Hero"
import Navbar from "@/components/navbar"
import About from "@/components/About"
import Contact from "@/components/Contact"
import { useEffect } from "react"
import CadPage from "./cad"
// import Services from "@/components/Services"


function App() {

  useEffect(() => {
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
      <section id="inicio" className="relative">
        <Hero/>

      </section>
      <section id="nosotros" className="py-20">
        <About />
      </section>
      
        {/* <CadPage/> */}
      
      {/* <section id="servicios" className="py-20 bg-gray-50">
    <Services/>
        </section> */}
      <section id="contacto" className="py-20 bg-[#0a2f60]">
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
