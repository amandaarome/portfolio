import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProjectGallery } from "@/components/project-gallery"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { ClientLogos } from "@/components/client-logos"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProjectGallery />
      <About />
      <Services />
      <ClientLogos />
      <Contact />
      <Footer />
    </main>
  )
}
