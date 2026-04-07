'use client'

import AnimationServicesHero from '@/components/2d&3d/Animationserviceshero'
import TwoDSection from '@/components/2d&3d/Twodsection'
import ThreeDSection from '@/components/2d&3d/Threedsection'
import Header from '@/components/Header'
import Footer from '@/components/sections/Footer'

export default function AnimationServicesPage() {
  return (
    <main className="bg-[#181818] min-h-screen">
      <Header />
      <AnimationServicesHero />
      <TwoDSection />
      <ThreeDSection />
      <Footer />
    </main>
  )
}
