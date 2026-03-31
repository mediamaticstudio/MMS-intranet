'use client'

import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'

const milestones = [
  { year: '2017', title: 'THE BEGINNING', desc: 'Our journey started with a vision to innovate and create impact.' },
  { year: '2023', title: 'PROPRIETORSHIP', desc: 'Officially registered as a Proprietorship Firm to scale our operations.' },
  { year: '2025', title: 'PRIVATE LIMITED', desc: 'Transitioned into a Private Limited Company to foster growth.' },
  { year: '2026', title: 'EXPANSION', desc: 'Scaling our operations to reach new markets and horizons.' },
]

export default function IdeasAwards() {
  return (
    <section id="milestones" className="bg-[#181818] py-32 px-6 md:px-20 border-t border-[#FDE68B]/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-8">
          <div className="md:w-1/2">
            <span className="text-[#FDE68B] text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">OUR JOURNEY</span>
            <h2 className="text-4xl md:text-7xl font-black text-[#FDE68B] tracking-tighter leading-none italic uppercase">
              Milestones <br /> <span className="opacity-60">& Recognition</span>
            </h2>
          </div>
          <div className="md:w-1/3">
            <p className="text-[#FDE68B]/60 text-sm font-medium leading-relaxed italic border-l-2 border-[#FDE68B] pl-8">
              "Our history is built on the foundation of turning bold ideas into impactful realities."
            </p>
          </div>
        </div>

        <div className="relative space-y-24">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-[#FDE68B]/10 hidden md:block" />

          {milestones.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              <div className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <span className="text-8xl md:text-9xl font-black text-[#FDE68B]/5 tracking-tighter block mb-4 italic leading-none">
                  {item.year}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-[#FDE68B] tracking-tight uppercase mb-4">
                  {item.title}
                </h3>
                <p className="text-[#FDE68B]/60 text-sm max-w-sm mx-auto md:mx-0 font-medium leading-relaxed uppercase tracking-widest">
                  {item.desc}
                </p>
              </div>

              <div className="w-12 h-12 rounded-full bg-[#FDE68B] border-4 border-[#181818] z-10 flex items-center justify-center text-[#181818] shadow-xl shadow-[#FDE68B]/20">
                <Trophy size={18} />
              </div>

              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
