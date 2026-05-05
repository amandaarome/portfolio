import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] relative rounded-2xl overflow-hidden border border-border">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2775-64uWPCW7kx7esnynDt7e53HoN71Iui.jpg"
                alt="Special - Video Editor and Videographer"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-primary/30 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-2xl blur-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">About Me</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-6 text-balance">
              I&apos;m Special, Your Creative Partner
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="text-pretty text-lg leading-relaxed">
                I&apos;m a Video creator passionate about creating and editing captivating video content. With a strong background in advertising and content marketing, I specialize in curating creative videos that capture and communicate the true essence of a brand.
              </p>
              <p className="text-pretty text-lg leading-relaxed">
                My goal is to help transform video content into visually compelling stories that will resonate with your audience and also deliver meaningful messages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
