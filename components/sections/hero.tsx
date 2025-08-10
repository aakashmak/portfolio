"use client"

import { motion } from "framer-motion"
import config from "@/data/config.json"

export default function Hero() {
  return (
    <section id="hero" className="flex flex-col justify-center min-h-screen">
      <div className="w-full text-left">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="font-mono text-green mb-5 text-sm">Hi, I Am </h1>
        </motion.div>

        <motion.h2
          className="text-5xl md:text-6xl lg:text-7xl font-semibold text-lightest-slate mt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {config.name}.
        </motion.h2>

        <motion.h3
          className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate mt-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {config.tagline}
        </motion.h3>

        <motion.p
          className="my-5 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
        Transforming complex data into strategic insights, I harness advanced analytics to drive    innovation, optimize decisions, and unlock untapped business potential across diverse industries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a href="#contact" className="button mt-10">
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
