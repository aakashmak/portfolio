"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import experienceData from "@/data/experience.json"

export default function Experience() {
  const [activeTabId, setActiveTabId] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" ref={ref} className="section-centered">
      <motion.h2
        className="numbered-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        Where I've Worked
      </motion.h2>

      <div className="flex flex-col md:flex-row mt-10">
        <motion.div
          className="relative flex overflow-x-auto md:block md:overflow-visible mb-8 md:mb-0 md:w-max"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ul className="flex md:flex-col">
            {experienceData.map((experience, i) => (
              <li key={i}>
                <button
                  className={`flex items-center w-full min-w-[120px] h-10 md:h-12 px-5 bg-transparent border-b-2 md:border-b-0 md:border-l-2 text-xs whitespace-nowrap font-mono text-left transition-all duration-200 hover:bg-light-navy hover:text-green ${
                    activeTabId === i ? "text-green border-green bg-light-navy" : "text-slate border-lightest-navy"
                  }`}
                  onClick={() => setActiveTabId(i)}
                >
                  {experience.company}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="md:ml-5 md:pl-5"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {experienceData.map((experience, i) => (
            <div key={i} className={`${activeTabId === i ? "block" : "hidden"}`}>
              <h3 className="text-xl font-medium mb-1">
                <span>{experience.title}</span>
                <span className="text-green"> @ </span>
                <a href={experience.url} className="text-green inline-link" target="_blank" rel="noopener noreferrer">
                  {experience.company}
                </a>
              </h3>

              <p className="font-mono text-xs mb-6">{experience.range}</p>

              <ul className="space-y-2.5">
                {experience.responsibilities.map((responsibility, j) => (
                  <li
                    key={j}
                    className="relative pl-7 before:content-['▹'] before:absolute before:left-0 before:text-green"
                  >
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
