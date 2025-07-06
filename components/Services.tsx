import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Shield, Home, Building, Wrench, Droplets, Hammer, CheckCircle } from "lucide-react"

const services = [
  {
    icon: Shield,
    title: "Anti-Carbonation Coating",
    description: "Advanced protective coatings to prevent concrete carbonation and extend structural life.",
    benefits: ["Prevents steel corrosion", "Extends building life", "Weather resistant"],
    badge: "Popular",
  },
  {
    icon: Home,
    title: "Terrace Waterproofing",
    description: "Complete terrace waterproofing solutions using modern membrane technology.",
    benefits: ["Monsoon protection", "Heat reflection", "Long-lasting solution"],
    badge: "Recommended",
  },
  {
    icon: Building,
    title: "Basement Waterproofing",
    description: "Comprehensive basement protection against water seepage and dampness.",
    benefits: ["Moisture control", "Structural protection", "Mold prevention"],
    badge: null,
  },
  {
    icon: Wrench,
    title: "Structural Repair",
    description: "Expert structural repair services for damaged concrete and masonry work.",
    benefits: ["Crack repair", "Strength restoration", "Safety compliance"],
    badge: null,
  },
  {
    icon: Droplets,
    title: "Injection Grouting",
    description: "Specialized injection grouting for crack sealing and structural strengthening.",
    benefits: ["Precise application", "Deep penetration", "Permanent solution"],
    badge: null,
  },
  {
    icon: Hammer,
    title: "Building Restoration",
    description: "Complete building restoration services including facade and structural work.",
    benefits: ["Aesthetic improvement", "Value enhancement", "Comprehensive solution"],
    badge: null,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Waterproofing Services</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Comprehensive waterproofing and structural repair solutions tailored to protect your property investment
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  {service.badge && (
                    <Badge className="absolute -top-2 -right-2 bg-orange-500 hover:bg-orange-600">
                      {service.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-4 text-base">{service.description}</CardDescription>
                <div className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center justify-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Accordion */}
        <div className="sm:hidden px-2">
          <Accordion type="single" collapsible className="space-y-3">
            {services.map((service, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg bg-white shadow-sm">
                <AccordionTrigger className="px-4 py-4 hover:no-underline">
                  <div className="flex items-center space-x-3 text-left">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-gray-900 text-sm">{service.title}</h3>
                      {service.badge && (
                        <Badge className="mt-1 bg-orange-500 hover:bg-orange-600 text-xs">{service.badge}</Badge>
                      )}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                  <div className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
