"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import config from "@/data/config.json"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="text-center section-centered" ref={ref}>
      <motion.h2
        className="font-mono text-green text-sm mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        What's Next?
      </motion.h2>

      <motion.h2
        className="text-4xl md:text-5xl font-semibold mb-5"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Get In Touch
      </motion.h2>

      <motion.p
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll do my best
        to get back to you!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <a
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${config.email}&su=Hello from your portfolio&body=Hi Aakash,%0D%0A%0D%0AI came across your portfolio and would like to connect with you.%0D%0A%0D%0ABest regards,`}
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          Say Hello
        </a>
      </motion.div>

      <motion.p
        className="mt-20 font-mono text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Designed & Built by {config.name}
      </motion.p>
    </section>
  )
}
