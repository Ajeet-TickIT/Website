import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const projects = [
  {
    title: "Residential Complex Terrace Waterproofing",
    location: "Sector 62, Noida",
    problem: "Severe water leakage during monsoons causing interior damage",
    solution: "Applied advanced membrane waterproofing with heat-reflective coating",
    result: "100% leak-free for 3+ years, reduced interior temperature by 5°C",
    beforeImage: "/placeholder.svg?height=300&width=400",
    afterImage: "/placeholder.svg?height=300&width=400",
    category: "Residential",
  },
  {
    title: "Commercial Building Basement Waterproofing",
    location: "Greater Noida",
    problem: "Basement flooding and structural damage due to water seepage",
    solution: "Complete basement waterproofing with injection grouting and drainage system",
    result: "Eliminated water seepage, restored structural integrity",
    beforeImage: "/placeholder.svg?height=300&width=400",
    afterImage: "/placeholder.svg?height=300&width=400",
    category: "Commercial",
  },
  {
    title: "Industrial Facility Structural Repair",
    location: "Ghaziabad",
    problem: "Concrete carbonation and steel corrosion in industrial structure",
    solution: "Anti-carbonation coating and structural strengthening",
    result: "Extended building life by 15+ years, improved safety compliance",
    beforeImage: "/placeholder.svg?height=300&width=400",
    afterImage: "/placeholder.svg?height=300&width=400",
    category: "Industrial",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Success Stories</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Real projects, real results. See how we've helped property owners solve their waterproofing challenges
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden shadow-lg border-0">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 p-4 sm:p-6 lg:p-8">
                  {/* Project Details */}
                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                        <Badge variant="secondary" className="bg-primary/10 text-primary w-fit">
                          {project.category}
                        </Badge>
                        <span className="text-sm text-gray-500">{project.location}</span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-red-600 mb-2">Problem:</h4>
                        <p className="text-gray-700">{project.problem}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-blue-600 mb-2">Our Solution:</h4>
                        <p className="text-gray-700">{project.solution}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-green-600 mb-2">Result:</h4>
                        <p className="text-gray-700">{project.result}</p>
                      </div>
                    </div>
                  </div>

                  {/* Before/After Images */}
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-2">Before</p>
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                          <Image
                            src={project.beforeImage || "/placeholder.svg"}
                            alt={`${project.title} - Before`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-2">After</p>
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                          <Image
                            src={project.afterImage || "/placeholder.svg"}
                            alt={`${project.title} - After`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
