"use client"

import { motion } from "framer-motion"
import { CheckCircle, Zap, Award, Microscope } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-gold" />,
      title: "Advanced Technology",
      description: "State-of-the-art digital scanning and 3D printing technology for precise results.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-gold" />,
      title: "Quality Assurance",
      description: "Rigorous quality control processes to ensure perfect fit and natural aesthetics.",
    },
    {
      icon: <Award className="h-6 w-6 text-gold" />,
      title: "Expert Craftsmanship",
      description: "Skilled technicians with years of experience in digital dental fabrication.",
    },
    {
      icon: <Microscope className="h-6 w-6 text-gold" />,
      title: "Precision Engineering",
      description: "Micron-level accuracy for dental prosthetics that fit perfectly the first time.",
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
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">About Our Lab</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Digital Dental Lab combines cutting-edge technology with expert craftsmanship to deliver
            precision-engineered dental prosthetics that exceed expectations.
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
              src="https://placehold.co/600x400"
              alt="Digital Dental Lab Facility"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-navy-blue text-white p-4 rounded-lg shadow-lg">
            <p className="font-bold text-xl">15+ Years</p>
            <p className="text-sm">of Excellence</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-navy-blue mb-6">Pioneering Digital Dentistry</h3>
          <p className="text-gray-600 mb-6">
            Founded with a vision to revolutionize dental prosthetics, our lab has been at the forefront of digital
            dentistry for over 15 years. We combine advanced technology with traditional craftsmanship to deliver
            exceptional results.
          </p>
          <p className="text-gray-600 mb-8">
            Our team of skilled technicians works closely with dental professionals to create custom solutions that
            enhance patient satisfaction and streamline clinical workflows.
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
