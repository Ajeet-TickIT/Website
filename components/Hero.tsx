"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import ContactModal from "@/components/ContactModal"

// Icon components
const MessageCircleIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
)

const ShieldIcon = () => (
  <svg className="w-8 h-8 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)

const AwardIcon = () => (
  <svg className="w-8 h-8 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
)

const UsersIcon = () => (
  <svg className="w-8 h-8 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
)

export default function Hero() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const openContactModal = () => {
    setIsContactModalOpen(true)
  }

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 lg:pt-16">
        {/* Background with Team Image Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-blue-600/95 to-blue-800/95 z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
            style={{
              backgroundImage: "url('/Home-Image-desktop.jpg')"
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Expert Structural Waterproofing & Repair Solutions
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl lg:max-w-none mx-auto lg:mx-0">
                Protecting your property with advanced waterproofing technology and 15+ years of expertise in Noida and NCR region
              </p>

              {/* CTA Button */}
              <div className="flex justify-center lg:justify-start mb-8">
                <Button
                  className="bg-white text-primary hover:bg-gray-100 text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4"
                  onClick={openContactModal}
                >
                  Contact Us
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0">
                <div className="flex flex-col items-center lg:items-start">
                  <div className="flex items-center mb-2">
                    <ShieldIcon />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">15+ Years Experience</h3>
                  <p className="text-blue-100 text-sm">Trusted waterproofing experts</p>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <div className="flex items-center mb-2">
                    <AwardIcon />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">500+ Projects</h3>
                  <p className="text-blue-100 text-sm">Successfully completed</p>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <div className="flex items-center mb-2">
                    <UsersIcon />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">100% Satisfaction</h3>
                  <p className="text-blue-100 text-sm">Guaranteed quality work</p>
                </div>
              </div>
            </div>

            {/* Right Column - Team Award Image */}
            <div className="relative lg:block">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img 
                  src="/Home-Image-desktop.jpg" 
                  alt="J Kumar Build Tech team receiving industry recognition award"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="bg-black/60 backdrop-blur-sm rounded-lg px-4 py-3">
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm font-medium">🏆 Industry Recognition & Professional Excellence</span>
                    </div>
                    <p className="text-xs text-gray-200 mt-1">Award ceremony showcasing our commitment to quality waterproofing solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Float Button */}
        <Button
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 rounded-full w-14 h-14 p-0 shadow-lg"
          onClick={() => window.open("https://wa.me/918860303034", "_blank")}
        >
          <MessageCircleIcon />
        </Button>
      </section>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  )
}
