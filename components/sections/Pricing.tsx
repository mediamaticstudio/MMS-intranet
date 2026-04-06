'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'BASIC',
    price: '$99',
    period: '/mo',
    features: ['Up to 10 components services', 'Creative shell script', 'Custom media queries', 'Alpha internal sync', 'Formal web test access'],
    popular: false
  },
  {
    name: 'PREMIUM',
    price: '$199',
    period: '/mo',
    features: ['Up to 50 components services', 'Advanced logic builds', 'Custom animations', 'Beta priority sync', 'Full source code access'],
    popular: true
  },
  {
    name: 'ENTERPRISE',
    price: '$499',
    period: '/mo',
    features: ['Unlimited components services', 'Fortune 2030 strategy', 'Custom API builds', 'Global CDN sync', 'Dedicated support lead'],
    popular: false
  }
]

export default function IdeasPricing() {
  return (
    <section id="pricing" className="bg-[#181818] py-32 px-6 md:px-20 border-t border-[#FDE68B]/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <span className="text-[#FDE68B] text-[10px] font-black tracking-[0.4em] mb-4 block">INVEST IN GROWTH</span>
          <h2 className="text-4xl md:text-6xl font-black text-[#FDE68B] tracking-tighter leading-none italic uppercase">
            Tiered <br /> <span className="opacity-60">Architectures</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group p-10 rounded-[3rem] ${plan.popular ? 'bg-[#FDE68B] text-[#181818] scale-105 shadow-2xl shadow-[#FDE68B]/30' : 'bg-[#FDE68B]/5 border border-[#FDE68B]/10 text-[#FDE68B]'} flex flex-col justify-between min-h-[600px] transition-all duration-500`}
            >
              <div>
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-2xl font-black tracking-tighter uppercase">{plan.name}</h3>
                  {plan.popular && <span className="px-3 py-1 rounded-full bg-[#181818]/10 border border-[#181818]/20 text-[#181818] text-[9px] font-bold uppercase">MOST POPULAR</span>}
                </div>
                <div className="mb-8">
                  <span className="text-5xl md:text-6xl font-black tracking-tighter">{plan.price}</span>
                  <span className="text-xs opacity-60 ml-2">/ per project</span>
                </div>
                <ul className="space-y-4 mb-12">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3 text-sm font-medium tracking-tight opacity-70 uppercase">
                      <div className={`w-1.5 h-1.5 rounded-full ${plan.popular ? 'bg-[#181818]' : 'bg-[#FDE68B]'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className={`w-full py-6 rounded-full font-black tracking-widest text-[10px] transition-all duration-500 ${plan.popular ? 'bg-[#181818] text-[#FDE68B] hover:bg-[#181818]/90' : 'bg-[#FDE68B] text-[#181818] hover:bg-[#FDE68B]/90 shadow-xl shadow-[#FDE68B]/20'}`}>
                Get Started Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
