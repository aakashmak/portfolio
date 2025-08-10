"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Twitter, Instagram, Codepen } from "lucide-react"
import config from "@/data/config.json"

// Map of icon components
const iconComponents: { [key: string]: React.ComponentType<any> } = {
  GitHub: Github,
  Linkedin: Linkedin,
  Twitter: Twitter,
  Instagram: Instagram,
  Codepen: Codepen,
}

export default function Social() {
  return (
    <motion.div
      className="hidden md:flex fixed bottom-0 left-5 right-auto z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
    >
      <ul className="flex flex-col items-center m-0 p-0 after:content-[''] after:block after:w-px after:h-[90px] after:my-0 after:mx-auto after:bg-light-slate">
        {config.socialMedia.map(({ name, url, icon }, i) => {
          const IconComponent = iconComponents[icon]
          return (
            <li key={i} className="p-2.5">
              <Link href={url} aria-label={name} target="_blank" rel="noopener noreferrer" className="social-link">
                <IconComponent size={20} />
              </Link>
            </li>
          )
        })}
      </ul>
    </motion.div>
  )
}
