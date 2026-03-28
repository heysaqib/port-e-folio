"use client"

import { motion } from "framer-motion"
import { BlurText } from "@/components/BlurText"

export function About() {
  return (
    <section id="about" className="py-24 w-full bg-muted/50">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              <BlurText text="About Me" animateBy="letters" delay={50} direction="bottom" />
            </h2>
            <div className="w-12 h-1 bg-primary rounded-full" />
          </div>
          
          <div className="prose prose-lg dark:prose-invert">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hi, I'm a passionate creative developer specializing in building modern
              web applications. With a strong foundation in frontend technologies like React and Next.js,
              I strive to create experiences that are not only highly functional but also visually striking.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              My expertise bridges the gap between design and engineering. I love integrating 3D visualizations 
              with React Three Fiber and fluid animations using Framer Motion to elevate user experiences.
              When I'm not coding, you can find me exploring new design trends, contributing to open source,
              or refining my skills in UI/UX architecture.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
