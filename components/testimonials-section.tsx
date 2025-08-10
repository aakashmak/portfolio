import { Quote } from "lucide-react"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Client Testimonials</h2>
          <p className="max-w-[85%] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            What clients say about my data analytics and business intelligence services
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card className="relative">
            <CardHeader className="pb-0">
              <Quote className="h-8 w-8 text-muted-foreground opacity-50 absolute top-4 right-4" />
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">
                "The retail analytics dashboard transformed how we make inventory decisions. We've seen a 15% increase
                in sales and significantly reduced stockouts since implementation."
              </p>
            </CardContent>
            <CardFooter className="flex items-center gap-4 pt-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Sarah Johnson" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Sarah Johnson</p>
                <p className="text-xs text-muted-foreground">VP of Operations, RetailCo</p>
              </div>
            </CardFooter>
          </Card>

          <Card className="relative">
            <CardHeader className="pb-0">
              <Quote className="h-8 w-8 text-muted-foreground opacity-50 absolute top-4 right-4" />
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">
                "The financial forecasting model has been a game-changer for our quarterly planning. The accuracy is
                impressive, and it's saved our team countless hours of manual analysis."
              </p>
            </CardContent>
            <CardFooter className="flex items-center gap-4 pt-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Michael Chen" />
                <AvatarFallback>MC</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Michael Chen</p>
                <p className="text-xs text-muted-foreground">CFO, Financial Services Inc.</p>
              </div>
            </CardFooter>
          </Card>

          <Card className="relative">
            <CardHeader className="pb-0">
              <Quote className="h-8 w-8 text-muted-foreground opacity-50 absolute top-4 right-4" />
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">
                "The healthcare analytics platform helped us identify patient readmission risk factors we hadn't
                considered. Our quality metrics have improved dramatically as a result."
              </p>
            </CardContent>
            <CardFooter className="flex items-center gap-4 pt-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Dr. Emily Rodriguez" />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Dr. Emily Rodriguez</p>
                <p className="text-xs text-muted-foreground">Medical Director, HealthNet</p>
              </div>
            </CardFooter>
          </Card>

          <Card className="relative md:col-span-2 lg:col-span-3">
            <CardHeader className="pb-0">
              <Quote className="h-8 w-8 text-muted-foreground opacity-50 absolute top-4 right-4" />
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-muted-foreground text-lg">
                "Working with this data analytics consultant has been transformative for our business. The supply chain
                optimization project delivered ROI within the first quarter, and the interactive dashboards have
                democratized data access across our organization. The team's ability to translate complex data into
                actionable insights is unmatched."
              </p>
            </CardContent>
            <CardFooter className="flex items-center gap-4 pt-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Robert Williams" />
                <AvatarFallback>RW</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">Robert Williams</p>
                <p className="text-xs text-muted-foreground">CEO, Manufacturing Solutions</p>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
