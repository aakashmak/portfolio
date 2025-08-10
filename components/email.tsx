"use client"

import { motion } from "framer-motion"
import config from "@/data/config.json"

export default function Email() {
  return (
    <motion.div
      className="hidden md:flex fixed bottom-0 right-5 left-auto z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
    >
      <div className="flex flex-col items-center m-0 p-0 after:content-[''] after:block after:w-px after:h-[90px] after:my-0 after:mx-auto after:bg-light-slate">
        <a
          href={`mailto:${config.email}`}
          className="font-mono text-xs tracking-widest my-5 mx-auto p-2.5 social-link writing-vertical"
          style={{ writingMode: "vertical-rl" }}
        >
          {config.email}
        </a>
      </div>
    </motion.div>
  )
}
