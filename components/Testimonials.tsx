"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

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
      <Star key={i} className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
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

                <Quote className="w-8 h-8 text-primary/20 mb-3" />

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

              <Quote className="w-10 h-10 text-primary/20 mb-4" />

              <p className="text-gray-700 mb-4 italic text-lg leading-relaxed">"{testimonials[currentIndex].text}"</p>

              <div className="text-sm text-primary font-medium mb-6">Project: {testimonials[currentIndex].project}</div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent">
                  <ChevronLeft className="w-4 h-4" />
                </Button>

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

                <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
