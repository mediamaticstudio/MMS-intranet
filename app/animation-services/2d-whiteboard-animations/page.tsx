'use client'

import ServiceDetailPage from '@/components/2d&3d/Servicedetailpage'
import Header from '@/components/Header'
import Footer from '@/components/sections/Footer'

const data = {
  badge: '2D Animation · Service 01',
  title: 'Whiteboard',
  subtitle: 'Animations',
  description:
    'Whiteboard animation is a video style that mimics the process of drawing or sketching on a whiteboard, typically with a voiceover narrating the content. This animation style often includes simple black-and-white illustrations with occasional colour highlights to keep the viewer engaged. The format is commonly used in educational, instructional, and marketing content to simplify complex ideas, tell a story, or convey information in an engaging, easy-to-understand way.',
  highlights: [
    'Hand-drawn visuals: Often showing a hand drawing images and text in real time',
    'Narration: A voiceover typically accompanies the visuals to explain content step-by-step',
    'Time-lapse effect: Animations are often sped up to keep content concise',
    'Simple colour scheme: Mostly black, white, and occasionally one or two colours for emphasis',
  ],
  useCases: [
    {
      title: 'Educational Content',
      desc: 'Schools and e-learning platforms use whiteboard animations to simplify complex subjects.',
    },
    {
      title: 'Process Explainers',
      desc: 'Ideal for explaining processes and illustrating step-by-step guides.',
    },
    {
      title: 'Abstract Concepts',
      desc: 'A powerful tool for breaking down abstract concepts into understandable visuals.',
    },
    {
      title: 'Marketing Content',
      desc: 'Used in marketing to simplify complex ideas and tell an engaging story.',
    },
  ],
  quote:
    'The simplicity of this style makes it ideal for explaining processes, illustrating step-by-step guides, or breaking down abstract concepts.',
}

export default function WhiteboardAnimationsPage() {
  return (
    <>
      <Header />
      <ServiceDetailPage data={data} />
      <Footer />
    </>
  )
}
