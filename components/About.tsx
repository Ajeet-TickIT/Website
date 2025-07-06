import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Award, Users, Clock, Shield } from "lucide-react"

const founders = [
  {
    name: "Piyush Singhal",
    role: "Founder & Technical Director",
    expertise: "Structural Engineering, Waterproofing Technology",
    experience: "15+ years",
    image: "/placeholder.svg?height=300&width=300",
    description:
      "Expert in advanced waterproofing solutions with extensive experience in structural engineering and building restoration.",
  },
  {
    name: "Manu Vaibhav",
    role: "Co-Founder & Operations Head",
    expertise: "Project Management, Quality Assurance",
    experience: "12+ years",
    image: "/placeholder.svg?height=300&width=300",
    description:
      "Specializes in project execution and quality control, ensuring every project meets the highest standards of excellence.",
  },
]

const stats = [
  {
    icon: Award,
    number: "500+",
    label: "Projects Completed",
    description: "Successfully delivered across NCR",
  },
  {
    icon: Users,
    number: "15+",
    label: "Years Experience",
    description: "Trusted expertise in waterproofing",
  },
  {
    icon: Clock,
    number: "24/7",
    label: "Support Available",
    description: "Emergency response service",
  },
  {
    icon: Shield,
    number: "100%",
    label: "Quality Guarantee",
    description: "Satisfaction guaranteed",
  },
]

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About J Kumar Build Tech</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Leading waterproofing specialists in Noida with over 15 years of experience in protecting properties across
            NCR
          </p>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-md">
              <CardContent className="p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{stat.label}</div>
                <div className="text-xs sm:text-sm text-gray-600">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Founders Section */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8 sm:mb-12">Meet Our Founders</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {founders.map((founder, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-1/3">
                      <div className="relative aspect-square">
                        <Image
                          src={founder.image || "/placeholder.svg"}
                          alt={founder.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="sm:w-2/3 p-4 sm:p-6">
                      <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{founder.name}</h4>
                      <p className="text-primary font-semibold mb-2 text-sm sm:text-base">{founder.role}</p>
                      <p className="text-gray-600 mb-4 text-sm sm:text-base">{founder.description}</p>
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium text-gray-700">Expertise: </span>
                          <span className="text-gray-600">{founder.expertise}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Experience: </span>
                          <span className="text-gray-600">{founder.experience}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Story */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Story</h3>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Founded in 2008, J Kumar Build Tech Pvt. Ltd. has been at the forefront of waterproofing and structural
                repair solutions in the NCR region. What started as a small team of dedicated engineers has grown into
                one of the most trusted names in the industry.
              </p>
              <p className="mb-4">
                Our commitment to quality, innovation, and customer satisfaction has helped us complete over 500
                successful projects across residential, commercial, and industrial sectors. We combine traditional
                expertise with modern technology to deliver solutions that stand the test of time.
              </p>
              <p>
                Based in Noida, we serve clients across Delhi NCR with a focus on providing comprehensive waterproofing
                solutions that protect your most valuable assets. Our team of certified professionals ensures every
                project meets the highest standards of quality and safety.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
