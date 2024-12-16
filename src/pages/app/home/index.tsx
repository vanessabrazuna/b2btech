import { Cases } from './cases'
import { Contact } from './contact'
import { Footer } from './footer'
import { Hero } from './hero'
import { Partners } from './partners'
import { Services } from './services'
import { Testimonials } from './testimonials'

export function Home() {
  return (
    <>
      <main className="flex max-w-6xl flex-col items-center justify-center">
        <Hero />
        <Services />
        <Partners />
        <Cases />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
