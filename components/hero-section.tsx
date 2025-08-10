import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import personalInfo from "@/data/personal-info.json"

export function HeroSection() {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I&apos;m <span className="text-primary">{personalInfo.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">{personalInfo.title}</h2>
            <p className="text-lg text-muted-foreground max-w-md">{personalInfo.shortBio}</p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild>
                <a href="#contact">
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={personalInfo.resumeLink} download>
                  Download Resume
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
