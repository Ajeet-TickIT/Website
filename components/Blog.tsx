import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Calendar, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "Why Waterproofing is Crucial Before Monsoon Season",
    excerpt:
      "Learn about the importance of pre-monsoon waterproofing and how it can save you thousands in repair costs.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2024-05-15",
    category: "Prevention",
    readTime: "5 min read",
  },
  {
    title: "Complete Guide to Terrace Waterproofing Solutions",
    excerpt: "Comprehensive guide covering different terrace waterproofing methods, materials, and maintenance tips.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2024-04-28",
    category: "Guide",
    readTime: "8 min read",
  },
  {
    title: "Signs Your Building Needs Structural Repair",
    excerpt: "Identify early warning signs of structural damage and when to call professional repair services.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2024-04-10",
    category: "Maintenance",
    readTime: "6 min read",
  },
  {
    title: "Anti-Carbonation Coating: Protecting Your Investment",
    excerpt: "Understanding how anti-carbonation coatings work and why they are essential for concrete structures.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2024-03-22",
    category: "Technology",
    readTime: "7 min read",
  },
  {
    title: "Basement Waterproofing: Methods and Best Practices",
    excerpt: "Explore different basement waterproofing techniques and choose the right solution for your property.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2024-03-08",
    category: "Guide",
    readTime: "9 min read",
  },
  {
    title: "Monsoon Preparation Checklist for Property Owners",
    excerpt: "Essential steps to prepare your property for monsoon season and prevent water damage.",
    image: "/placeholder.svg?height=200&width=400",
    date: "2024-02-25",
    category: "Prevention",
    readTime: "4 min read",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Expert Insights & Tips</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with our latest articles on waterproofing, structural repair, and property maintenance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
            >
              <div className="relative aspect-[2/1]">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                <Badge className="absolute top-4 left-4 bg-primary">{post.category}</Badge>
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</CardDescription>
                <Button variant="ghost" className="p-0 h-auto font-semibold text-primary hover:text-primary/80">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}
