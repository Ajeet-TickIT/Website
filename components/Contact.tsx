"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Icon components
const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const MailIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const MapPinIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const ClockIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact Information</h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Get in touch with our expert team for professional waterproofing and structural repair solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Phone Contact */}
          <Card className="bg-gray-800 border-gray-700 text-center">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneIcon />
              </div>
              <CardTitle className="text-white">Call Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-gray-300 text-sm font-medium">Piyush Singhal</p>
                <p className="text-blue-400">+91 8860303034</p>
                <p className="text-gray-300 text-sm font-medium">Manu Vaibhav</p>
                <p className="text-blue-400">+91 9953760804</p>
              </div>
            </CardContent>
          </Card>

          {/* Email Contact */}
          <Card className="bg-gray-800 border-gray-700 text-center">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MailIcon />
              </div>
              <CardTitle className="text-white">Email Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-gray-300 text-sm font-medium">Piyush Singhal</p>
                <p className="text-red-400 text-sm break-all">piyush.singhal30@gmail.com</p>
                <p className="text-gray-300 text-sm font-medium">Company</p>
                <p className="text-red-400 text-sm break-all">jkumarbuildtech@gmail.com</p>
              </div>
            </CardContent>
          </Card>

          {/* Location */}
          <Card className="bg-gray-800 border-gray-700 text-center">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPinIcon />
              </div>
              <CardTitle className="text-white">Visit Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-gray-300 text-sm">G-70, Lower Ground Floor</p>
                <p className="text-gray-300 text-sm">Office No. 001, Sector 63</p>
                <p className="text-gray-300 text-sm">Noida, UP 201301</p>
                <p className="text-purple-400 text-xs">GSTIN: 09AADCJ9672K1ZV</p>
              </div>
            </CardContent>
          </Card>

          {/* Business Hours */}
          <Card className="bg-gray-800 border-gray-700 text-center">
            <CardHeader className="pb-4">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon />
              </div>
              <CardTitle className="text-white">Business Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-gray-300 text-sm">Monday - Saturday</p>
                <p className="text-green-400">9:00 AM - 6:00 PM</p>
                <p className="text-gray-300 text-sm">Sunday</p>
                <p className="text-green-400">Emergency Only</p>
                <p className="text-gray-400 text-xs">24/7 Emergency Support</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
             
