import { HeroSection } from '@/components/sections/HeroSection'
import { FeaturedWorks } from '@/components/sections/FeaturedWorks'
import { AboutTeaser } from '@/components/sections/AboutTeaser'
import { AvailableCTA } from '@/components/sections/AvailableCTA'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedWorks />
      <AboutTeaser />
      <AvailableCTA />
    </main>
  )
}
