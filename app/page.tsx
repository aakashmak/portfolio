import Sidebar from "@/components/sidebar"
import Social from "@/components/social"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Experience from "@/components/sections/experience"
import Proficiencies from "@/components/sections/proficiencies"
import Projects from "@/components/sections/projects"
import Contact from "@/components/sections/contact"
import Email from "@/components/email"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Sidebar />

      <main className="flex-1 ml-0 md:ml-[100px]">
        <div className="px-6 md:px-10 lg:px-24 xl:px-32">
          <Hero />
          <About />
          <Experience />
          <Proficiencies />
          <Projects />
          <Contact />
        </div>
      </main>

      <Social />
      <Email />
    </div>
  )
}
