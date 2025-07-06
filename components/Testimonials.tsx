"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import Image from "next/image"

// Icon components
const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg className={`w-5 h-5 ${filled ? "text-yellow-400 fill-current" : "text-gray-300"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
  </svg>
)

const QuoteIcon = () => (
  <svg className="w-8 h-8 text-primary/20 mb-3" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
  </svg>
)

const ChevronLeftIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="15,18 9,12 15,6"/>
  </svg>
)

const ChevronRightIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polyline points="9,18 15,12 9,6"/>
  </svg>
)

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Homeowner",
    location: "Sector 18, Noida",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Excellent waterproofing work on our terrace. No leakage issues for the past 2 years. Professional team and quality materials used. Highly recommended!",
    project: "Terrace Waterproofing",
  },
  {
    name: "Priya Sharma",
    role: "Property Manager",
    location: "Greater Noida",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "J Kumar Build Tech solved our basement flooding problem completely. Their injection grouting technique worked perfectly. Very satisfied with the results.",
    project: "Basement Waterproofing",
  },
  {
    name: "Amit Gupta",
    role: "Building Owner",
    location: "Ghaziabad",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Professional approach and timely completion. The anti-carbonation coating has significantly improved our building's condition. Great value for money.",
    project: "Structural Repair",
  },
  {
    name: "Sunita Verma",
    role: "Resident",
    location: "Sector 62, Noida",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Outstanding service! They identified the root cause of our water seepage and provided a permanent solution. No issues since the work was completed.",
    project: "Water Seepage Repair",
  },
  {
    name: "Vikash Singh",
    role: "Commercial Property Owner",
    location: "Noida Extension",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Reliable and efficient team. Completed our commercial building waterproofing within the promised timeline. Excellent workmanship and follow-up service.",
    project: "Commercial Waterproofing",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarIcon key={i} filled={i < rating} />
    ))
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our waterproofing
            services
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex items-center mb-3">{renderStars(testimonial.rating)}</div>

                <QuoteIcon />

                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>

                <div className="text-sm text-primary font-medium">Project: {testimonial.project}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden">
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-gray-600">{testimonials[currentIndex].role}</p>
                  <p className="text-xs text-gray-500">{testimonials[currentIndex].location}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">{renderStars(testimonials[currentIndex].rating)}</div>

              <QuoteIcon />

              <p className="text-gray-700 mb-4 italic text-lg leading-relaxed">"{testimonials[currentIndex].text}"</p>

              <div className="text-sm text-primary font-medium mb-6">Project: {testimonials[currentIndex].project}</div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <button 
                  onClick={prevTestimonial} 
                  className="border border-gray-300 rounded-full p-2 bg-transparent hover:bg-gray-50"
                >
                  <ChevronLeftIcon />
                </button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentIndex ? "bg-primary" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <button 
                  onClick={nextTestimonial} 
                  className="border border-gray-300 rounded-full p-2 bg-transparent hover:bg-gray-50"
                >
                  <ChevronRightIcon />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
