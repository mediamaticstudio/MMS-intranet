'use client'

import ServiceDetailPage from '@/components/2d&3d/Servicedetailpage'
import Header from '@/components/Header'
import Footer from '@/components/sections/Footer'

const data = {
  badge: '3D Animation · Service 03',
  title: 'Explainer',
  subtitle: 'Videos',
  description:
    '3D explainer videos take complex subjects and make them immersive and easy to understand with photorealistic or stylized 3D animation. These short, engaging videos use 3D modeling and lighting to show how products or services work with incredible detail and a professional polish.',
  highlights: [
    '3D Product Visualization: Realistic product demos and virtual prototypes',
    'Cinematic Lighting: Professionally lit scenes build trust through visual quality',
    'Simplified 3D Objects: Complicated ideas into 3D visuals that rotate and animate',
    'High-Impact Branding: Immersive 3D worlds that capture audience attention fast',
    '3D Space Layout: Using virtual depth to show complex internal mechanisms or processes',
  ],
  useCases: [
    {
      title: 'Product Demos',
      desc: 'Show exactly how a product works from any angle with 3D animation.',
    },
    {
      title: 'Scientific Visualization',
      desc: 'Exploring microscopic processes or medical procedures in 3D.',
    },
    {
      title: 'Technical Procedures',
      desc: 'Step-by-step guides for complex machinery or multi-step procedures.',
    },
  ],
  quote:
    '3D explainer videos help build trust by showing how products work in a virtual environment with photorealistic or stylized detail.',
}

export default function ThreeDExplainerVideosPage() {
  return (
    <>
      <Header />
      <ServiceDetailPage data={data} />
      <Footer />
    </>
  )
}
