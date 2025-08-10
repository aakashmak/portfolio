"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import aboutData from "@/data/about.json"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="section-centered">
      <motion.h2
        className="numbered-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {aboutData.title}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <motion.div
          className="col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="space-y-4">
            {aboutData.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <ul className="grid grid-cols-2 gap-x-2 gap-y-1 mt-5">
            {aboutData.skills.map((skill, i) => (
              <li
                key={i}
                className="font-mono text-xs relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-green"
              >
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="relative w-full max-w-[300px] h-[300px] mx-auto">
            <div className="absolute w-full h-full rounded border-2 border-green z-0 translate-x-5 translate-y-5"></div>
            <div className="relative w-full h-full rounded overflow-hidden z-10 bg-green">
              <Image
                src={aboutData.avatar || "/placeholder.svg"}
                alt="Aakash Mathivanan - Data Analytics Professional"
                fill
                className="mix-blend-multiply grayscale contrast-100 brightness-90 hover:filter-none hover:mix-blend-normal transition-all duration-300"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
