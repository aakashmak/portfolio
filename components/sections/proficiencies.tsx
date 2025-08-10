"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { PieChart, Pie, Cell } from "recharts"
import proficienciesData from "@/data/proficiencies.json"

export default function Proficiencies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [hoveredSegment, setHoveredSegment] = useState<{
    skill: any
    cardIndex: number
  } | null>(null)

  const handleSegmentMouseEnter = (data: any, index: number, cardIndex: number) => {
    setHoveredSegment({
      skill: data,
      cardIndex: cardIndex,
    })
  }

  const handleSegmentMouseLeave = () => {
    setHoveredSegment(null)
  }

  return (
    <section id="proficiencies" ref={ref} className="section-centered max-w-6xl">
      <motion.h2
        className="numbered-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {proficienciesData.title}
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {proficienciesData.proficiencies.map((proficiency, i) => (
          <motion.div
            key={i}
            className="bg-light-navy rounded-lg p-6 flex flex-col items-center justify-center text-center hover:shadow-xl transition-all duration-500 relative overflow-hidden h-full min-h-[320px] w-full cursor-pointer hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
            onMouseEnter={() => setHoveredCard(i)}
            onMouseLeave={() => {
              setHoveredCard(null)
              setHoveredSegment(null)
            }}
          >
            {/* Default view - Centered title and description */}
            <motion.div
              className="w-full flex flex-col items-center justify-center h-full"
              initial={{ opacity: 1 }}
              animate={{
                opacity: hoveredCard === i ? 0 : 1,
                scale: hoveredCard === i ? 0.9 : 1,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-lightest-slate">{proficiency.title}</h3>
              <p className="text-light-slate text-center leading-relaxed">{proficiency.description}</p>
            </motion.div>

            {/* Hover view - Advanced Doughnut chart only */}
            <motion.div
              className="absolute inset-0 bg-light-navy flex items-center justify-center p-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: hoveredCard === i ? 1 : 0,
                scale: hoveredCard === i ? 1 : 0.8,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{ pointerEvents: hoveredCard === i ? "auto" : "none" }}
            >
              <div className="relative">
                {/* Outer glow effect */}
                <div className="absolute inset-0 rounded-full bg-green opacity-10 blur-xl scale-110"></div>

                {/* Main doughnut chart */}
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: hoveredCard === i ? 360 : 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <PieChart width={280} height={280}>
                    <Pie
                      data={proficiency.skills}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={120}
                      paddingAngle={4}
                      dataKey="value"
                      stroke="none"
                      strokeWidth={0}
                      animationBegin={0}
                      animationDuration={800}
                    >
                      {proficiency.skills.map((skill, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={skill.color}
                          style={{
                            filter: `drop-shadow(0 0 8px ${skill.color}40)`,
                            cursor: "pointer",
                            opacity:
                              hoveredSegment &&
                              hoveredSegment.cardIndex === i &&
                              hoveredSegment.skill.name !== skill.name
                                ? 0.3
                                : 1,
                          }}
                          onMouseEnter={() => handleSegmentMouseEnter(skill, index, i)}
                          onMouseLeave={handleSegmentMouseLeave}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </motion.div>

                {/* Center content - Dynamic based on segment hover */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{
                    opacity: hoveredCard === i ? 1 : 0,
                    scale: hoveredCard === i ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
                >
                  <div className="text-center">
                    {hoveredSegment && hoveredSegment.cardIndex === i ? (
                      // Show specific skill info when segment is hovered
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-3xl font-bold mb-2" style={{ color: hoveredSegment.skill.color }}>
                          {hoveredSegment.skill.value}%
                        </div>
                        <div className="text-sm font-mono text-lightest-slate font-semibold">
                          {hoveredSegment.skill.name}
                        </div>
                        <div className="text-xs font-mono text-light-slate opacity-60 mt-1">{proficiency.title}</div>
                      </motion.div>
                    ) : (
                      // Show total info when no segment is hovered
                      <motion.div
                        initial={{ opacity: 1, scale: 1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-2xl font-bold text-green mb-1">
                          {proficiency.skills.reduce((sum, skill) => sum + skill.value, 0)}%
                        </div>
                        <div className="text-sm font-mono text-lightest-slate opacity-80">{proficiency.title}</div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>

                {/* Animated skill indicators around the chart */}
                {proficiency.skills.map((skill, index) => {
                  const angle = (index * 360) / proficiency.skills.length
                  const radius = 140
                  const x = Math.cos(((angle - 90) * Math.PI) / 180) * radius
                  const y = Math.sin(((angle - 90) * Math.PI) / 180) * radius

                  const isHighlighted =
                    hoveredSegment && hoveredSegment.cardIndex === i && hoveredSegment.skill.name === skill.name

                  return (
                    <motion.div
                      key={index}
                      className="absolute w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: skill.color,
                        left: `calc(50% + ${x}px - 6px)`,
                        top: `calc(50% + ${y}px - 6px)`,
                        boxShadow: `0 0 12px ${skill.color}80`,
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: hoveredCard === i ? (isHighlighted ? 1.5 : 1) : 0,
                        opacity: hoveredCard === i ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: 0.3 + index * 0.1,
                        ease: "easeInOut",
                      }}
                    />
                  )
                })}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
