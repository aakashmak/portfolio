import { Card, CardContent } from "@/components/ui/card"
import { Code, Laptop, Lightbulb } from "lucide-react"
import aboutData from "@/data/about.json"

// Map icon strings to Lucide components
const iconComponents = {
  Code: Code,
  Laptop: Laptop,
  Lightbulb: Lightbulb,
}

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mb-8"></div>
          <p className="max-w-2xl text-lg text-muted-foreground">{aboutData.mainBio}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {aboutData.cards.map((card, index) => {
            // Get the icon component based on the icon name in the JSON
            const IconComponent = iconComponents[card.icon as keyof typeof iconComponents]

            return (
              <Card key={index} className="bg-card hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    {IconComponent && <IconComponent className="h-6 w-6 text-primary" />}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">What I&apos;m Currently Working On</h3>
          <p className="text-muted-foreground">{aboutData.currentWork}</p>
        </div>
      </div>
    </section>
  )
}
