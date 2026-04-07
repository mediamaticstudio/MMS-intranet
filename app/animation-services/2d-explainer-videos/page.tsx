'use client'

import ServiceDetailPage from '@/components/2d&3d/Servicedetailpage'
import Header from '@/components/Header'
import Footer from '@/components/sections/Footer'

const data = {
  badge: '2D Animation · Service 04',
  title: 'Explainer',
  subtitle: 'Videos',
  description:
    'Explainer videos are short, engaging videos designed to explain a product, service, process, or concept concisely. These videos typically last between 1 to 3 minutes and use a combination of animation, live-action, narration, and music to communicate ideas effectively. Explainer videos are commonly used by businesses, educational platforms, and organizations to break down complex information, answer common questions, or highlight the value of a product or service.',
  highlights: [
    'Simplify Complex Information: Complicated ideas into simple visuals and narration',
    'Engage Viewers Quickly: Short and to-the-point, capturing attention immediately',
    'Increase Conversions: Build trust by showing how a product or service solves a problem',
    'Boost Brand Awareness: Enhance brand recognition and recall by making a message memorable',
    'Multiple Formats: Choice of animated, live-action, whiteboard, or infographic explainers',
  ],
  useCases: [
    {
      title: 'Product or Service Demos',
      desc: 'Explain how a product or service works and highlight its benefits clearly.',
    },
    {
      title: 'Onboarding and Training',
      desc: 'Educate employees or users on new systems, tools, or procedures effectively.',
    },
    {
      title: 'Educational Content',
      desc: 'Simplify complex topics for students or learners with immersive visuals.',
    },
    {
      title: 'Marketing and Advertising',
      desc: 'Grab attention on social media or websites to introduce a brand or product.',
    },
  ],
  quote:
    'Explainer videos are an effective way to communicate important messages quickly, increase engagement, and help viewers understand and remember the content better.',
}

export default function ExplainerVideosPage() {
  return (
    <>
      <Header />
      <ServiceDetailPage data={data} />
      <Footer />
    </>
  )
}
