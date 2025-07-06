import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

// Simple icon components
const ShieldIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)

const DropletsIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.5 14.25c0-1.5 1.5-3 3.75-3s3.75 1.5 3.75 3-1.5 3-3.75 3-3.75-1.5-3.75-3z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6" />
  </svg>
)

const BuildingIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1" />
  </svg>
)

const WrenchIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const services = [
  {
    icon: ShieldIcon,
    title: "Anti Carbonation Coating",
    description: "Advanced protective coatings to prevent concrete carbonation and extend structural life.",
    image: "/images/Anti-Carbonation-Coating.png",
    badge: "Popular",
  },
  {
    icon: DropletsIcon,
    title: "Water Proofing",
    description: "Comprehensive waterproofing solutions for all types of structures and surfaces.",
    image: "/images/Water-Proofing.png",
    badge: "Essential",
  },
  {
    icon: BuildingIcon,
    title: "Structural Repair/ Strengthening/ Rehabilitation/ Jacketing",
    description: "Complete structural solutions including repair, strengthening, and jacketing services.",
    image: "/images/Structural-Repair.png",
    badge: null,
  },
  {
    icon: ShieldIcon,
    title: "Water Repellant & Anti Graffiti Treatment",
    description: "Protective treatments to repel water and prevent graffiti damage on surfaces.",
    image: "/images/Water-Repellant.png",
    badge: null,
  },
  {
    icon: WrenchIcon,
    title: "Thermal Insulation (Roof & External Facade)",
    description: "Energy-efficient thermal insulation solutions for roofs and external facades.",
    image: "/images/Thermal-Insulation.png",
    badge: null,
  },
  {
    icon: BuildingIcon,
    title: "Expansion Joints, Control Joints & Fire barriers",
    description: "Professional installation of expansion joints, control joints, and fire barrier systems.",
    image: "/images/expansion-joint.png",
    badge: null,
  },
  {
    icon: WrenchIcon,
    title: "Bearing Replacement and Lifting of Span/ Girders",
    description: "Specialized services for bearing replacement and structural lifting operations.",
    image: "/images/Bearing-Replacement.png",
    badge: null,
  },
  {
    icon: BuildingIcon,
    title: "Dam & Tunnel Repair",
    description: "Expert repair and maintenance services for dams and tunnel infrastructure.",
    image: "/images/dam.png",
    badge: null,
  },
  {
    icon: WrenchIcon,
    title: "Specialized Solutions for mines",
    description: "Customized engineering solutions for mining industry infrastructure needs.",
    image: "/images/mine.png",
    badge: null,
  },
  {
    icon: WrenchIcon,
    title: "Controlled Dismantling",
    description: "Safe and controlled dismantling services with precision and environmental care.",
    image: "/images/dismantling.png",
    badge: null,
  },
  {
    icon: WrenchIcon,
    title: "Hydro Demolition",
    description: "Advanced hydro demolition techniques for precise concrete removal and surface preparation.",
    image: "/images/Hydro-demolition.png",
    badge: null,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Specialized Services</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Comprehensive structural engineering and waterproofing solutions with advanced technology and expert craftsmanship
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border border-gray-200 shadow-md overflow-hidden bg-white">
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Badge */}
                {service.badge && (
                  <div className="absolute top-4 right-4">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-orange-500 hover:bg-orange-600 text-white">
                      {service.badge}
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-primary">
                    <service.icon />
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-semibold text-gray-900 leading-tight line-clamp-2">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {service.description}
                </CardDescription>
                
                {/* Learn More Link */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="text-primary hover:text-primary/80 font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform duration-200">
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
