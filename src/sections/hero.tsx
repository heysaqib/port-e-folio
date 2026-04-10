"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

import { BlurText } from "@/components/BlurText"
import { buttonVariants } from "@/components/ui/button"

const HeroBackground = dynamic(() => import("@/components/hero-background"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center bg-background/50">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </div>
  ),
})

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-16">
      <div className="absolute inset-0 z-0">
        <HeroBackground />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 pointer-events-none">
        <div className="flex flex-col items-start max-w-2xl gap-4">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-foreground">
              <BlurText
                text="Hi, I’m Saqib Shaikh"
                delay={60}
                animateBy="words"
                direction="bottom"
                className="inline-block"
              />
              <br />
              <span className="bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                <BlurText
                  text="Full-Stack Developer"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="inline-block"
                />
              </span>
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-xl">
              I build responsive web applications and work on real-world systems involving IoT, automation, and data-driven solutions. I enjoy solving practical problems and turning ideas into working products.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mt-8 pointer-events-auto"
          >
            <a href="#projects" className={buttonVariants({ size: "lg", className: "rounded-full shadow-lg" })}>
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#contact" className={buttonVariants({ size: "lg", variant: "outline", className: "rounded-full shadow-sm bg-background/50 backdrop-blur-sm" })}>
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-4 mt-8 pointer-events-auto"
          >
            <a href="https://github.com/heysaqib" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-all hover:scale-110 hover:text-primary">
              <FaGithub className="h-7 w-7" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-all hover:scale-110 hover:text-primary">
              <FaLinkedin className="h-7 w-7" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:mailthatnerd@gmail.com" className="text-muted-foreground hover:text-foreground transition-all hover:scale-110 hover:text-primary">
              <FaEnvelope className="h-7 w-7" />
              <span className="sr-only">Email</span>
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
      </motion.div>
    </section>
  )
}
