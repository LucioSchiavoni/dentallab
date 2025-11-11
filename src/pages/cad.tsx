import { ServiceCard } from "@/components/service-card"
import designCadImage from "@/assets/design-cad.png"
import cadVideo from "@/assets/cam-dentallab.mp4"

const CadPage = () => {
  return (
    <div id="modalidades" className="min-h-screen  bg-[#0a2f60] ">
      {/* Hero Section */}
      <section className="py-16 px-4 md:py-24">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Nuestras Modalidades de Trabajo
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
            Ofrecemos soluciones flexibles adaptadas a las necesidades de odontólogos y laboratorios dentales en todo el
            mundo
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section  className="py-12 px-4">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Service 1 - CAD Design */}
          <ServiceCard
            title="Servicio de Diseño CAD"
            description="Realizamos el diseño digital de tus trabajos dentales (CAD) a partir de los archivos que nos envíes."
            features={[
              "100% digital y remoto",
              "Disponible para cualquier parte del mundo",
              "Trabajo únicamente con envío de archivos",
              "Precisión y calidad garantizada",
            ]}
            imagePosition="left"
            imageSrc={designCadImage}
          />

          {/* Service 2 - CAD/CAM Integral */}
          <ServiceCard
            title="Servicio Integral CAD/CAM"
            description="Además del diseño, nos encargamos de la terminación completa de las piezas mediante tecnología CAD/CAM."
            features={[
              "Diseño digital completo",
              "Fabricación con tecnología CAM",
              "Terminación y acabado profesional",
            ]}
            imagePosition="right"
            imageSrc={cadVideo}
            isVideo={true}
          />
        </div>
      </section>

      
    </div>
  )
}

export default CadPage
