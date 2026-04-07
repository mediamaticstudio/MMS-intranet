'use client'

import ServiceDetailPage from '@/components/2d&3d/Servicedetailpage'
import Header from '@/components/Header'
import Footer from '@/components/sections/Footer'

const data = {
  badge: '2D Animation · Service 05',
  title: 'Promo / Branding /',
  subtitle: 'Marketing',
  description:
    'Promotion, branding, and marketing videos are types of videos designed to promote a brand, product, or service, enhance brand identity, and drive engagement with a target audience. These videos are typically short, visually appealing, and crafted to make a strong impact, often encouraging viewers to take an action, such as purchasing a product, visiting a website, or engaging with a brand.',
  highlights: [
    'Promotion: Clear focus on a single product, event, or offer, keeping the message simple and direct',
    'Branding: Communicates identity, values, and personality to build an authentic audience connection',
    'Marketing: Used at various stages of the customer journey to educate, engage, and convert viewers',
    'High-Energy: Upbeat music and quick cuts that keep the pace exciting and capture attention fast',
    'Call-to-Action: Clear CTAs like "Buy Now" or "Learn More" to urge immediate viewer responses',
  ],
  useCases: [
    {
      title: 'Product Launches',
      desc: 'Introduce new products with compelling visuals and highlight key selling points.',
    },
    {
      title: 'Brand Stories',
      desc: 'Share the history, mission, or people behind the brand to build authentic trust.',
    },
    {
      title: 'Social Media Ads',
      desc: 'Short, engaging videos tailored for platforms like Instagram, Facebook, or YouTube.',
    },
    {
      title: 'Event Promotion',
      desc: 'Drive attendance for upcoming events, webinars, or conferences effectively.',
    },
  ],
  quote:
    'In summary, promo, branding, and marketing videos are essential tools for companies looking to connect with audiences, build brand identity, and ultimately drive growth.',
}

export default function PromoBrandingMarketingPage() {
  return (
    <>
      <Header />
      <ServiceDetailPage data={data} />
      <Footer />
    </>
  )
}
