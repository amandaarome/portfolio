import Image from "next/image"

const clients = [
  { 
    name: "Dee Beauty", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8088-FlUVTcMohWmAsXTeV1QDqanXF1reoj.jpg"
  },
  { 
    name: "Bonny Uncensored", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8089-fxsn1xWbofCMxHIGOwhiRqW3X6RAL5.jpg"
  },
  { 
    name: "Bonny Island Magazine", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_8087-uAN4Od1NG5nCiUJ6M3rSgJ7L5hOVPQ.jpg"
  },
  { 
    name: "Pearl Paradise Resort By 4E", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PHOTO-2025-11-28-17-09-20-R0jhOY1x7UoZapFOQNzf2La8PYEHSM.jpg"
  },
]

export function ClientLogos() {
  return (
    <section className="py-16 md:py-24 bg-card/50 border-y border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Trusted By</span>
          <h2 className="text-2xl md:text-3xl font-bold mt-3 text-balance">Brands I&apos;ve Worked With</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 relative rounded-full overflow-hidden mb-3 group-hover:scale-105 transition-transform">
                <Image
                  src={client.logo}
                  alt={client.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-xs md:text-sm text-muted-foreground text-center font-medium">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
