'use client'

import ServiceDetailPage from '@/components/2d&3d/Servicedetailpage'
import Header from '@/components/Header'
import Footer from '@/components/sections/Footer'

const data = {
  badge: '2D Animation · Service 03',
  title: 'Infographic /',
  subtitle: 'Typographic',
  description:
    'Infographic and typographic videos are animated videos that use data visualization, text, and design elements to communicate information in a visually engaging way. These styles are ideal for conveying statistics, facts, or complex information that might be difficult to understand with just text or spoken words. Infographic videos focus on presenting information visually, often using icons, charts, graphs, and illustrations to make data or facts more digestible. Typographic, or kinetic typography videos, focus primarily on animated text to deliver messages with dynamic text effects that highlight important words or phrases.',
  highlights: [
    'Data Visualization: Charts, graphs, icons, and illustrations simplify information for easy absorption',
    'Narration or Text: Voiceover or on-screen text effectively guides viewers through the data or key points',
    'Consistent Colour Scheme: Strategic use of colours to distinguish between different sections or emphasize details',
    'Smooth Transitions and Motion: Animated transitions help to keep the video dynamic and engaging',
    'Text-Centric Design: Text displayed in creative layouts and dynamic fonts highlights the main message',
  ],
  useCases: [
    {
      title: 'Explainer Videos',
      desc: 'Often used by companies to explain services, products, or processes in a digestible way.',
    },
    {
      title: 'Corporate Presentations',
      desc: 'Showcase a company’s achievements or market insights in an appealing video format.',
    },
    {
      title: 'Social Media Content',
      desc: 'Short typographic videos are great for sharing quotes, motivational messages, or quick information.',
    },
    {
      title: 'Educational Content',
      desc: 'E-learning platforms use infographic videos to present complex topics or data to students.',
    },
  ],
  quote:
    'In summary, infographic and typographic videos are versatile, impactful formats for conveying information in a way that’s both clear and engaging.',
}

export default function InfographicTypographicPage() {
  return (
    <>
      <Header />
      <ServiceDetailPage data={data} />
      <Footer />
    </>
  )
}
