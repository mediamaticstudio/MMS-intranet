'use client'

import ServiceDetailPage from '@/components/2d&3d/Servicedetailpage'
import Header from '@/components/Header'
import Footer from '@/components/sections/Footer'

const data = {
  badge: '3D Animation · Service 02',
  title: 'Infographic /',
  subtitle: 'Typographic',
  description:
    '3D Infographic and typographic videos use three-dimensional space, lighting, and depth to visualize data and text in a way that’s impossible with 2D. These visuals rotate, shift, and animate with immersive depth to make statistics and complex information unforgettable.',
  highlights: [
    '3D Data Visualization: Charts, graphs, and icons popping into 3D space with shadowing',
    'Typographic Depth: Kinetic typography with 3D text effects highlighting key phrases',
    'Complex Camera Moves: Perspective shifts that guide the viewer through complex data sets',
    'Detailed Rendering: High-impact visuals with studio-quality lighting and depth-of-field',
    'Perspective & Parallax: Utilizing 3D volume to distinguish different sections of data',
  ],
  useCases: [
    {
      title: 'Technical Presentations',
      desc: 'Showcasing product data or market insights with photorealistic depth.',
    },
    {
      title: 'Complex Data Sets',
      desc: 'Breaking down multi-dimensional statistics through immersive visual transitions.',
    },
    {
      title: 'Immersive Info-Graphic',
      desc: 'High-impact visuals that enhance information recall through realistic text rendering.',
    },
  ],
  quote:
    '3D infographics use detailed lighting and shadow to add depth, making complex data sets more clear and visually engaging.',
}

export default function ThreeDInfographicTypographicPage() {
  return (
    <>
      <Header />
      <ServiceDetailPage data={data} />
      <Footer />
    </>
  )
}
