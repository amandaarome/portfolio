import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Gradient Background - Inspired by provided gradient image */}
      <div className="absolute inset-0 -z-10">
        {/* Main gradient blobs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/40 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-accent/30 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] bg-primary/20 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '12s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-pink-500/20 rounded-full blur-[130px]" />
        {/* Corner accents */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/50 rounded-full blur-[60px]" />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/40 rounded-full blur-[50px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary border border-primary/30 rounded-full bg-primary/10 backdrop-blur-sm">
            Based in Nigeria
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-balance">
            Visual storytelling that reveals what makes it <span className="text-primary">special</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 text-pretty">
            I&apos;m Special, a freelance video editor dedicated to 
            transforming your raw footage into compelling visual narratives that leave lasting impressions.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" asChild className="group">
              <Link href="#work">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="group backdrop-blur-sm">
              <Link href="#contact">
                <Play className="mr-2 h-4 w-4" />
                Start a Project
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
