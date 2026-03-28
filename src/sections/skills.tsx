"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const skills = [
  "React", "Next.js", "TypeScript", "Tailwind CSS",
  "Framer Motion", "Three.js", "React Three Fiber",
  "Node.js", "GraphQL", "PostgreSQL",
  "UI/UX Design", "Figma", "Git", "Webpack"
]

export function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  }

  return (
    <section id="skills" className="py-24 w-full">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit that helps me turn complex problems into elegant solutions.
          </p>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mt-12"
          >
            {skills.map((skill, index) => (
              <motion.div key={index} variants={item}>
                <Badge 
                  variant="secondary" 
                  className="px-4 py-2 text-sm md:text-base font-medium rounded-full hover:scale-105 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
