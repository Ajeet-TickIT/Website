"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Shield, Award, Users } from "lucide-react"

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 lg:pt-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-blue-800" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Expert Structural Waterproofing & Repair Solutions
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto px-4">
            Protecting your property with advanced waterproofing technology and 15+ years of expertise in Noida and NCR
            region
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 px-4">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
              onClick={scrollToContact}
            >
              Get Free Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-transparent w-full sm:w-auto"
              onClick={() => window.open("tel:+919876543210", "_self")}
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Call Now
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto px-4">
            <div className="flex flex-col items-center">
              <Shield className="w-12 h-12 mb-3 text-blue-200" />
              <h3 className="font-semibold text-lg mb-1">15+ Years Experience</h3>
              <p className="text-blue-100 text-sm">Trusted waterproofing experts</p>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-12 h-12 mb-3 text-blue-200" />
              <h3 className="font-semibold text-lg mb-1">500+ Projects</h3>
              <p className="text-blue-100 text-sm">Successfully completed</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 mb-3 text-blue-200" />
              <h3 className="font-semibold text-lg mb-1">100% Satisfaction</h3>
              <p className="text-blue-100 text-sm">Guaranteed quality work</p>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <Button
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 rounded-full w-14 h-14 p-0 shadow-lg"
        onClick={() => window.open("https://wa.me/919876543210", "_blank")}
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </section>
  )
}
