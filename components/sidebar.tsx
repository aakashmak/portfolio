"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import config from "@/data/config.json"
import { Logo } from "./logo"

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollDirection, setScrollDirection] = useState("none")
  const [prevScrollY, setPrevScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > prevScrollY) {
        setScrollDirection("down")
      } else if (currentScrollY < prevScrollY) {
        setScrollDirection("up")
      }

      setPrevScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollY])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    document.body.classList.toggle("overflow-hidden")
  }

  const sidebarVariants = {
    hidden: { y: "-100%" },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  }

  const navVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 px-6 py-4 md:py-0 bg-navy shadow-lg transition-transform duration-300 ${scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"}`}
    >
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-green font-mono text-2xl z-50">
          <Logo />
        </Link>

        <div className="hidden md:flex items-center">
          <ol className="flex space-x-5">
            {config.navLinks.map(({ name, url }, i) => (
              <li key={i}>
                <Link href={url} className="nav-link">
                  {/* Removed the nav-link-number span */}
                  {name}
                </Link>
              </li>
            ))}
          </ol>
          <div className="ml-4">
            <a href={config.resumeUrl} className="button" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </div>
        </div>

        <button
          className="md:hidden z-50 text-light-slate hover:text-green transition-colors"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <motion.div
          className={`fixed inset-0 bg-light-navy/90 flex justify-center items-center z-40 ${isOpen ? "block" : "hidden"}`}
          initial="hidden"
          animate={isOpen ? "visible" : "hidden"}
          variants={sidebarVariants}
        >
          <motion.nav
            variants={navVariants}
            initial="hidden"
            animate={isOpen ? "visible" : "hidden"}
            className="flex flex-col items-center justify-center"
          >
            <ol className="flex flex-col items-center space-y-5">
              {config.navLinks.map(({ name, url }, i) => (
                <motion.li key={i} variants={itemVariants}>
                  <Link
                    href={url}
                    className="nav-link text-xl"
                    onClick={() => {
                      setIsOpen(false)
                      document.body.classList.remove("overflow-hidden")
                    }}
                  >
                    {/* Removed the nav-link-number span */}
                    {name}
                  </Link>
                </motion.li>
              ))}
            </ol>
            <motion.div variants={itemVariants} className="mt-8">
              <a href={config.resumeUrl} className="button" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </motion.div>
          </motion.nav>
        </motion.div>
      </nav>
    </header>
  )
}
