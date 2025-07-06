import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

// Icon components
const AwardIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
)

const UsersIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
)

const ClockIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12,6 12,12 16,14"/>
  </svg>
)

const ShieldIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)

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
    icon: AwardIcon,
    number: "500+",
    label: "Projects Completed",
    description: "Successfully delivered across NCR",
  },
  {
    icon: UsersIcon,
    number: "15+",
    label: "Years Experience",
    description: "Trusted expertise in waterproofing",
  },
  {
    icon: ClockIcon,
    number: "24/7",
    label: "Support Available",
    description: "Emergency response service",
  },
  {
    icon: ShieldIcon,
    number: "100%",
    label: "Quality Guarantee",
    description: "Satisfaction guaranteed",
  },
]

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 bg-slate-50">
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
                  <stat.icon />
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
