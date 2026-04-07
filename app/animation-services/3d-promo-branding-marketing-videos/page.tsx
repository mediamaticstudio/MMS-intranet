'use client'

import ServiceDetailPage from '@/components/2d&3d/Servicedetailpage'
import Header from '@/components/Header'
import Footer from '@/components/sections/Footer'

const data = {
  badge: '3D Animation · Service 04',
  title: 'Promo / Branding /',
  subtitle: 'Marketing',
  description:
    '3D Promo, branding, and marketing videos designed specifically to elevate brand identity and drive engagement in immersive three-dimensional space. These high-energy videos use cinematic 3D lighting, textures, and camera moves to make every frame impactful and unforgettable.',
  highlights: [
    '3D Brand Recall: High-impact 3D animated logos and visual symbols',
    'Cinematic Transitions: Using 3D depth to shift between brand stories and products',
    'Emotional Depth: Realism and textures that create stronger viewer engagement',
    'Visual Excellence: Photorealistic 3D rendering for high-end product placements',
    '3D Marketing Funnel: Demos and trailers for cinematic product introduction',
  ],
  useCases: [
    {
      title: 'High-Impact Brand Stories',
      desc: 'Connect with audiences effectively through photorealistic 3D narratives.',
    },
    {
      title: 'Cinematic Product Launches',
      desc: 'Introduce new offerings with world-class lighting and textures.',
    },
    {
      title: 'Global Marketing Campaigns',
      desc: 'Scalable 3D assets that can be reused for global marketing needs.',
    },
  ],
  quote:
    '3D marketing videos are essential for brands looking to provide high-impact, cinematic experiences that drive long-term awareness.',
}

export default function ThreeDPromoBrandingMarketingPage() {
  return (
    <>
      <Header />
      <ServiceDetailPage data={data} />
      <Footer />
    </>
  )
}
