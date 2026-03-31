"use client"

import { motion } from "framer-motion"
import { ExternalLink, Code } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"

const projects = [
  {
    title: "AeroNotes",
    description: "A sleek, high-performance note-taking application designed for speed and simplicity.",
    image: "https://picsum.photos/seed/aeronotes/800/600",
    tags: ["Next.js", "TypeScript", "Tailwind", "Firebase"],
    github: "https://github.com/heysaqib/note-it-down",
    live: "https://aeronotes-omega.vercel.app"
  },
  {
    title: "Aetheris Red",
    description: "A dark-themed, immersive web experience with smooth animations and modern UI.",
    image: "https://picsum.photos/seed/aetheris/800/600",
    tags: ["React", "Framer Motion", "Tailwind", "Vite"],
    github: "https://github.com/heysaqib/shiny-umbrella",
    live: "https://aetheris-red.vercel.app"
  },
  {
    title: "Hiba Aesthetics",
    description: "A premium aesthetic clinic website showcasing services and expertise with an elegant design.",
    image: "https://picsum.photos/seed/hibaaesthetics/800/600",
    tags: ["Next.js", "Sanity CMS", "Tailwind", "GSAP"],
    github: "https://github.com/heysaqib/hibaaesthetics",
    live: "https://hibaaesthetics.vercel.app"
  }
]

export function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section id="projects" className="py-24 w-full bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
          <div className="w-12 h-1 bg-primary rounded-full" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item} className="h-full">
              <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group bg-background/50 backdrop-blur-sm border-muted/50">
                <div className="relative h-48 w-full bg-muted overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
                  <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-secondary/50">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t border-muted/20 pt-4">
                  <a href={project.github} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "ghost", size: "sm" })}>
                    <Code className="mr-2 h-4 w-4" /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className={buttonVariants({ size: "sm" })}>
                    Live <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
