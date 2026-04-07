'use client'

import ServiceDetailPage from '@/components/2d&3d/Servicedetailpage'
import Header from '@/components/Header'
import Footer from '@/components/sections/Footer'

const data = {
  badge: '2D Animation · Service 02',
  title: 'Character',
  subtitle: 'Videos',
  description:
    'Character videos are animated or live-action videos that feature characters—often stylized, fictional figures—used to tell a story, explain a concept, or promote a product or brand. These videos use relatable, often memorable characters to connect with the audience on an emotional level, making them especially effective for conveying messages in a fun and engaging way.',
  highlights: [
    'Characters with Personality: Distinct personalities, styles, and voices that make them relatable and memorable',
    'Storytelling: Typically follow a story arc with a problem, journey, and resolution to make complex ideas easier',
    'Voice Acting: Voiceovers or dialogues that give characters their personality and create an immersive experience',
    'Visual Style: Animation styles that match the tone of the content or the brand perfectly',
    'Emotional Appeal: Characters expressing emotions to build empathy and create a strong audience connection',
  ],
  useCases: [
    {
      title: 'Branding and Marketing',
      desc: 'Companies use character videos to make their brand message more relatable and memorable.',
    },
    {
      title: 'Education',
      desc: 'An effective way for educators to make content more enjoyable and relatable to students.',
    },
    {
      title: 'Emotional Connection',
      desc: 'Builds empathy by using characters that effectively express human emotions.',
    },
  ],
  quote:
    'Character videos are a versatile and effective way for brands and educators to make content more enjoyable, relatable, and memorable for viewers.',
}

export default function CharacterVideosPage() {
  return (
    <>
      <Header />
      <ServiceDetailPage data={data} />
      <Footer />
    </>
  )
}
