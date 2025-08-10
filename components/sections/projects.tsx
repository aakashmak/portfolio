"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { ExternalLink, Github, BarChart3 } from "lucide-react"
import projectsData from "@/data/projects.json"

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Other noteworthy projects data
  const otherProjects = [
    {
      title: "Austin Airbnb Analysis",
      description:
        "Interactive Tableau dashboard analyzing Austin Airbnb market trends, pricing patterns, and property distribution. Features comprehensive visualizations of rental performance, seasonal trends, and neighborhood insights for data-driven investment decisions.",
      tech: ["Tableau", "Data Visualization", "Market Analysis", "Statistical Analysis"],
      external:
        "https://public.tableau.com/views/Austin_Airbnb_17534789369530/Assignment?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
      image: "/images/austin-airbnb-tableau.jpeg",
    },
    {
      title: "Predicting Flight Delays",
      description:
        "Developed a machine learning model to predict flight delays using historical flight data, weather conditions, and airline performance metrics. The project focuses on data preprocessing, feature engineering, model training (e.g., using Logistics,SVM,Linear regression), and evaluating prediction accuracy to provide insights for airlines and travelers.",
      tech: ["R", "Logistics regression", "Linear Regression", "Plotly", "SQl"],
      github: "https://github.com/aakashmak/Predicting-Flight-delays",
    },
    {
      title: "Airline Passengers Satisfaction Analysis",
      description:
        "Designed a Power BI report to analyze an Airline Passenger Satisfaction dataset, identifying causes of customer dissatisfaction, and proposed data-driven solutions to enhance satisfaction rates.",
      tech: ["Power BI", "Data Analysis", "Customer Satisfaction", "Dashboard Design"],
      github: "https://github.com/aakashmak/Airline-Passengers-Satisfaction-Analysis",
      image: "/images/airline-satisfaction.png",
    },
  ]

  return (
    <section id="projects" ref={ref} className="section-centered max-w-6xl">
      <motion.h2
        className="numbered-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        Some Things I've Built
      </motion.h2>

      <div className="space-y-20 mt-16">
        {projectsData.map((project, i) => (
          <motion.div
            key={i}
            className="relative grid md:grid-cols-12 gap-8 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            {/* Project Image */}
            <div className={`relative col-span-7 ${i % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
              <div className="relative h-[400px] rounded-lg overflow-hidden group">
                <Image
                  src={project.image || "/placeholder.svg?height=400&width=600&query=data analytics dashboard"}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-300 filter grayscale contrast-100 brightness-75 group-hover:filter-none group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-green/20 group-hover:bg-transparent transition-all duration-300"></div>

                {/* Overlay links */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-navy/80">
                  <div className="flex space-x-4">
                    <a
                      href={project.github || project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-light-navy rounded-full text-green hover:bg-green hover:text-navy transition-all duration-200"
                      aria-label="GitHub Repository"
                    >
                      <Github size={24} />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-light-navy rounded-full text-green hover:bg-green hover:text-navy transition-all duration-200"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={24} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div
              className={`relative col-span-5 ${i % 2 === 0 ? "md:order-2 md:text-right" : "md:order-1 md:text-left"}`}
            >
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? 20 : -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: i % 2 === 0 ? 20 : -20 }}
                transition={{ duration: 0.5, delay: i * 0.2 + 0.2 }}
              >
                <p className="font-mono text-green text-sm mb-2">Featured Project</p>

                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-lightest-slate hover:text-green transition-colors duration-200">
                  <a href={project.github || project.githubUrl} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>

                <div className="bg-light-navy rounded-lg p-6 mb-6 shadow-lg">
                  <p className="text-light-slate leading-relaxed">{project.description}</p>
                </div>

                <ul
                  className={`flex flex-wrap gap-3 mb-6 text-sm font-mono text-light-slate ${i % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}
                >
                  {(project.tech || project.tags || []).map((tech, j) => (
                    <li key={j} className="hover:text-green transition-colors duration-200">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className={`flex items-center space-x-4 ${i % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                  <a
                    href={project.github || project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light-slate hover:text-green transition-colors duration-200"
                    aria-label="GitHub Repository"
                  >
                    <Github size={22} />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light-slate hover:text-green transition-colors duration-200"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={22} />
                    </a>
                  )}
                  <a
                    href={project.github || project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-green text-green font-mono text-sm rounded hover:bg-green hover:text-navy transition-all duration-200"
                  >
                    View More
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Other Noteworthy Projects Section */}
      <motion.div
        className="mt-20 pt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 20 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <h3 className="text-center text-2xl font-semibold mb-12 text-lightest-slate">Other Noteworthy Projects</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, i) => (
            <motion.div
              key={i}
              className="bg-light-navy rounded-lg p-6 flex flex-col h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
            >
              {/* Rest of the card content remains the same */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-green/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-green" />
                </div>
                <div className="flex space-x-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light-slate hover:text-green transition-colors duration-200"
                      aria-label="GitHub Link"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.external && (
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light-slate hover:text-green transition-colors duration-200"
                      aria-label="External Link"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h4 className="text-xl font-semibold mb-3 text-lightest-slate group-hover:text-green transition-colors duration-200">
                <a href={project.external || project.github} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h4>

              <p className="text-light-slate flex-grow mb-4 leading-relaxed">{project.description}</p>

              <ul className="flex flex-wrap gap-2 text-xs font-mono text-light-slate">
                {project.tech.map((tech, j) => (
                  <li key={j}>{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
