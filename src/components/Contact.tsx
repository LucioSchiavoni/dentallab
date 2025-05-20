"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", phone: "", message: "" })
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
          <h2 className="text-3xl md:text-4xl font-bold text-navy-blue mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Have questions or ready to start a project? Reach out to our team for personalized assistance.
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
          <h3 className="text-2xl font-bold text-navy-blue mb-6">Get in Touch</h3>

          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <div className="bg-navy-blue p-3 rounded-full mr-4">
                <Phone className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-medium text-navy-blue">Phone</h4>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-navy-blue p-3 rounded-full mr-4">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-medium text-navy-blue">Email</h4>
                <p className="text-gray-600">info@digitaldentallab.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-navy-blue p-3 rounded-full mr-4">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-medium text-navy-blue">Location</h4>
                <p className="text-gray-600">
                  123 Dental Avenue, Suite 200
                  <br />
                  New York, NY 10001
                </p>
              </div>
            </div>
          </div>

          <div className="bg-navy-blue text-white p-6 rounded-lg">
            <h4 className="font-bold text-xl mb-3">Business Hours</h4>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-navy-blue mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
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
                  Send Message
                  <Send size={18} className="ml-2" />
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
