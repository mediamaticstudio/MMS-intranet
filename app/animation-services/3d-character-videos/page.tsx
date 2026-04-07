'use client'

import ServiceDetailPage from '@/components/2d&3d/Servicedetailpage'
import Header from '@/components/Header'
import Footer from '@/components/sections/Footer'

const data = {
  badge: '3D Animation · Service 01',
  title: 'Character',
  subtitle: 'Videos',
  description:
    '3D animation is the process of creating animated visuals in a three-dimensional space, giving characters depth, height, and width. This creates a more realistic or immersive effect. 3D models can be rotated, shaded, and textured to create extreme depth and personality that brings photorealistic or stylized storytelling to life.',
  highlights: [
    'Characters with Personality: Robust personalities, voices, and shading make 3D characters immersive',
    'Detailed Modelling: 3D models can be manipulated and reused across multiple scenes for efficiency',
    'Storytelling: Typically follow a story arc that connects emotionally through complex character performance',
    'Highly Dynamic Movements: 3D space allows for cinematic camera moves and realistic textures',
    'Complex Lighting and Shadows: Shading and shadow effects that add immense realism to your content',
  ],
  useCases: [
    {
      title: 'Movies and Video Games',
      desc: 'Immersive stories built with 3D characters for film, gaming, and virtual reality.',
    },
    {
      title: 'Environment Interaction',
      desc: 'Characters that can be manipulated and reused for multiple high-impact scenes.',
    },
    {
      title: 'Cinematic Storytelling',
      desc: 'Realistic textures and dynamic camera moves that make every frame cinematic.',
    },
  ],
  quote:
    '3D animation has a more realistic look because objects and characters can be rotated and shaded, creating immersive depth for world-class storytelling.',
}

export default function ThreeDCharacterVideosPage() {
  return (
    <>
      <Header />
      <ServiceDetailPage data={data} />
      <Footer />
    </>
  )
}
