'use client'

import ServiceDetailPage from '@/components/2d&3d/Servicedetailpage'
import Header from '@/components/Header'
import Footer from '@/components/sections/Footer'

const data = {
  badge: '2D Animation · Service 06',
  title: 'Corporate',
  subtitle: 'Videos',
  description:
    'Corporate videos are essential tools for both internal and external communication, helping companies convey their message effectively, engage their audience, and maintain a strong, cohesive brand identity. Corporate videos maintain a polished look and feel, reflecting the organization’s professionalism and brand standards through a high production quality that meet a high standard, projecting a reputable image.',
  highlights: [
    'Professional Tone: A polished and refined look that reflects the organization’s professionalism',
    'Clear Messaging: Key messages delivered in a concise, well-structured way to inform and inspire',
    'Brand Consistency: Logos, colours, and tone align perfectly with the company’s identity',
    'High-Quality Production: Prioritized visuals, sound, and editing to meet professional standards',
    'Employee Development: Internal communications that support growth and mission-connection',
  ],
  useCases: [
    {
      title: 'Onboarding and Orientation',
      desc: 'Introduce new hires to the company’s culture, values, and policies efficiently.',
    },
    {
      title: 'Quarterly or Annual Reports',
      desc: 'Summarize performance, achievements, and goals in an engaging video format.',
    },
    {
      title: 'Stakeholder Presentations',
      desc: 'Impress investors, clients, and stakeholders with high-impact professional videos.',
    },
    {
      title: 'Product Training',
      desc: 'Educate both employees and clients, ensuring they understand usage and benefits.',
    },
  ],
  quote:
    'Corporate videos are essential tools for both internal and external communication, helping companies convey their message effectively and maintain a strong brand identity.',
}

export default function CorporateVideosPage() {
  return (
    <>
      <Header />
      <ServiceDetailPage data={data} />
      <Footer />
    </>
  )
}
