import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { AboutUs } from "@/components/about-us"
import { Services } from "@/components/services"
import { Mission } from "@/components/mission"
import { Gallery } from "@/components/gallery"
import { Location } from "@/components/location"
import { Contact } from "@/components/contact"
import { ComingSoon } from "@/components/coming-soon"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Mission />
      <Gallery />
      <Location />
      <Contact />
      <ComingSoon />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
