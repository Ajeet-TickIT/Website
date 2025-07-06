"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You can integrate with your email service or backend here
    alert("Thank you for your inquiry! We will contact you soon.")
    setFormData({ name: "", email: "", phone: "", service: "", message: "" })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Get Your Free Quote Today</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Ready to protect your property? Contact us for a free consultation and detailed quote for your waterproofing
            needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <Card className="border-0 shadow-md">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-lg">
                    <Phone className="w-5 h-5 mr-3 text-primary" />
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button
                      variant="ghost"
                      className="w-full justify-start p-0 h-auto text-left"
                      onClick={() => window.open("tel:+919876543210", "_self")}
                    >
                      <span className="text-lg font-semibold text-primary">+91 98765 43210</span>
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start p-0 h-auto text-left"
                      onClick={() => window.open("tel:+911204567890", "_self")}
                    >
                      <span className="text-gray-600">+91 120 456 7890</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-lg">
                    <MessageCircle className="w-5 h-5 mr-3 text-green-500" />
                    WhatsApp
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button
                    className="w-full bg-green-500 hover:bg-green-600"
                    onClick={() => window.open("https://wa.me/919876543210", "_blank")}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat on WhatsApp
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-lg">
                    <Mail className="w-5 h-5 mr-3 text-primary" />
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="ghost"
                    className="w-full justify-start p-0 h-auto text-left"
                    onClick={() => window.open("mailto:info@jkumarbuildtech.com", "_self")}
                  >
                    <span className="text-primary">info@jkumarbuildtech.com</span>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-lg">
                    <MapPin className="w-5 h-5 mr-3 text-primary" />
                    Visit Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <address className="text-gray-600 not-italic">
                    J Kumar Build Tech Pvt. Ltd.
                    <br />
                    Sector 62, Noida
                    <br />
                    Uttar Pradesh - 201309
                    <br />
                    <strong>GSTIN:</strong> 09ABCDE1234F1Z5
                  </address>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-lg">
                    <Clock className="w-5 h-5 mr-3 text-primary" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Saturday:</span>
                      <span>9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>10:00 AM - 5:00 PM</span>
                    </div>
                    <div className="text-sm text-green-600 mt-2">Emergency services available 24/7</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <Card className="border-0 shadow-lg">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-xl sm:text-2xl">Request a Free Quote</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Fill out the form below and we'll get back to you within 24 hours with a detailed quote
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Required</Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="terrace-waterproofing">Terrace Waterproofing</SelectItem>
                          <SelectItem value="basement-waterproofing">Basement Waterproofing</SelectItem>
                          <SelectItem value="anti-carbonation">Anti-Carbonation Coating</SelectItem>
                          <SelectItem value="structural-repair">Structural Repair</SelectItem>
                          <SelectItem value="injection-grouting">Injection Grouting</SelectItem>
                          <SelectItem value="building-restoration">Building Restoration</SelectItem>
                          <SelectItem value="consultation">Free Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your waterproofing requirements, property type, and any specific concerns..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Quote Request
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    By submitting this form, you agree to our privacy policy. We'll never share your information with
                    third parties.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Google Map Placeholder */}
            <Card className="border-0 shadow-lg mt-8">
              <CardContent className="p-0">
                <div className="aspect-[16/9] bg-gray-200 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p className="font-medium">Interactive Map</p>
                    <p className="text-sm">Sector 62, Noida Location</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
