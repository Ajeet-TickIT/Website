import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Projects from "@/components/Projects"
import About from "@/components/About"
import Blog from "@/components/Blog"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Projects />
      <About />
      <Blog />
      <Testimonials />
      <Contact />
    </main>
  )
}
