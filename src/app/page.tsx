import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/sections/hero"
import { About } from "@/sections/about"
import { Skills } from "@/sections/skills"
import { Projects } from "@/sections/projects"
import { Contact } from "@/sections/contact"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
