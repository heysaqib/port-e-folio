"use client";

import { motion } from "framer-motion"
import { MessageSquare, Send, FileText } from "lucide-react"
import { FaGithub, FaEnvelope } from "react-icons/fa"

import { BlurText } from "@/components/BlurText"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Contact() {
  return (
    <section id="contact" className="py-24 w-full relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight inline-block">
            <BlurText text="Let's Connect" animateBy="words" delay={100} direction="bottom" />
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="max-w-lg mx-auto bg-background/50 backdrop-blur-sm shadow-xl border-muted/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Get in Touch
              </CardTitle>
              <CardDescription>
                Send me an email directly or connect via social media.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-6">
              <a href="mailto:mailthatnerd@gmail.com" className={buttonVariants({ size: "lg", className: "w-full flex gap-2 h-14 text-lg rounded-xl" })}>
                <FaEnvelope className="h-5 w-5" /> Say Hello
              </a>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-muted" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Professional Links
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <a href="https://github.com/heysaqib" target="_blank" rel="noreferrer" className={buttonVariants({ variant: "outline", className: "h-12 flex items-center justify-center gap-2" })}>
                  <FaGithub className="h-4 w-4" /> GitHub
                </a>
                <a href="/resume.pdf" target="_blank" rel="noreferrer" className={buttonVariants({ variant: "outline", className: "h-12 flex items-center justify-center gap-2" })}>
                  <FileText className="h-4 w-4" /> Resume
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
