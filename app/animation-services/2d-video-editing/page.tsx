'use client'

import ServiceDetailPage from '@/components/2d&3d/Servicedetailpage'
import Header from '@/components/Header'
import Footer from '@/components/sections/Footer'

const data = {
  badge: '2D Animation · Service 07',
  title: 'Video',
  subtitle: 'Editing',
  description:
    'Video editing is the essential process that help shape a video’s narrative, enabling the creator to emphasize key moments and control the pace of the story. It involves selecting the best shots, arranging clips in a logical order, and adding visuals, sound, and graphics to ensure a polished final cut that Captures and maintains viewer engagement.',
  highlights: [
    'Cutting and Trimming: Selecting the best shots and removing unnecessary portions',
    'Sequencing: Arranging clips in a logical order that tells a story and maintains flow',
    'Audio Editing: Syncing audio with video and adding background music, effects, or voiceovers',
    'Colour Correction and Grading: Adjusting colours to create consistency and a specific mood',
    'Graphics and Text: Adding titles, captions, and graphical elements to support content',
  ],
  useCases: [
    {
      title: 'Enhanced Storytelling',
      desc: 'Editing helps shape the video’s narrative and control the pace of the story.',
    },
    {
      title: 'Increased Engagement',
      desc: 'Good editing captures and maintains attention throughout the experience.',
    },
    {
      title: 'Special Effects',
      desc: 'Incorporate animations, green screen, and motion graphics for visual impact.',
    },
  ],
  quote:
    'Video editing is essential for shaping the narrative, emphasizing key moments, and ensuring the creator’s vision is properly realized through effective story pacing.',
}

export default function VideoEditingPage() {
  return (
    <>
      <Header />
      <ServiceDetailPage data={data} />
      <Footer />
    </>
  )
}
