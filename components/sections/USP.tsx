'use client'

import { motion } from 'framer-motion'
import { Clock, Users, RefreshCw, Headset, Zap, ExternalLink, ShieldCheck } from 'lucide-react'

const usps = [
  { icon: <Clock size={24} />, title: 'Cost-Effective', desc: 'Streamlined project timelines ensuring efficiency and high-end quality without breaking the bank.' },
  { icon: <Users size={24} />, title: 'Expert Team', desc: 'Highly skilled & experienced technical team equipped to handle high volumes with precision.' },
  { icon: <RefreshCw size={24} />, title: 'Unlimited Revisions', desc: 'We pride ourselves on providing unlimited corrections to ensure complete client satisfaction.' },
  { icon: <Headset size={24} />, title: '24/7 Support', desc: 'Round-the-clock assistance through email and chat, guaranteeing prompt help anytime.' },
  { icon: <Zap size={24} />, title: 'Fast TAT', desc: 'All technical issues are resolved within a strictly maintained 24-hour Turnaround Time.' },
  { icon: <ExternalLink size={24} />, title: 'Live Reviews', desc: 'Temporary links to review work-in-progress, allowing for easy feedback before final delivery.' },
  { icon: <ShieldCheck size={24} />, title: 'Dedicated Portal', desc: 'Individual portal access to update details, make payments, and download assets seamlessly.' },
]

export default function IdeasUSP() {
  return (
    <section id="our-usp" className="bg-[#181818] py-32 px-6 md:px-20 relative outline-none border-t border-[#FDE68B]/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-[#FDE68B] text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">WHY CHOOSE US</span>
          <h2 className="text-4xl md:text-6xl font-bold text-[#FDE68B] tracking-tighter leading-tight max-w-2xl">
            Our Unique Selling <br /> <span className="opacity-60">Points (USP)</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usps.map((usp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-[#FDE68B]/5 border border-[#FDE68B]/10 hover:bg-[#FDE68B] transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#FDE68B]/10 flex items-center justify-center text-[#FDE68B] mb-6 group-hover:bg-[#181818]/20 group-hover:text-[#181818] transition-colors duration-500">
                {usp.icon}
              </div>
              <h3 className="text-xl font-bold text-[#FDE68B] mb-4 tracking-tight group-hover:text-[#181818] transition-colors">{usp.title}</h3>
              <p className="text-[#FDE68B]/60 text-sm leading-relaxed font-medium group-hover:text-[#181818]/70 transition-colors">
                {usp.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
