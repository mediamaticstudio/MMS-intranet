'use client'

import { motion } from 'framer-motion'
import { Sparkles, Code, Users, CheckCircle, TrendingUp, MonitorPlay, UserPlus, Target } from 'lucide-react'

const highlights = [
  { id: 1, title: 'Innovative Designs', icon: Sparkles },
  { id: 2, title: 'Latest Technologies', icon: Code },
  { id: 3, title: 'Professional Team', icon: Users },
  { id: 4, title: 'Internal Quality Audits', icon: CheckCircle },
  { id: 5, title: 'Result Driven Projects', icon: TrendingUp },
  { id: 6, title: 'Real Time project updates', icon: MonitorPlay },
  { id: 7, title: 'Dedicated Project Manager', icon: UserPlus },
  { id: 8, title: 'Customized Business Solution', icon: Target },
]

export default function ProjectHighlights() {
  return (
    <section className="bg-[#181818] py-24 px-6 overflow-hidden relative border-t border-[#FDE68B]/5">
      {/* Background Images */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('/back drop.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div
          className="absolute -top-20 -right-20 w-[600px] h-[600px] opacity-[0.03] rotate-12"
          style={{
            backgroundImage: "url('/bg doodle.png')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          {/* <span className="text-[#FDE68B] text-[10px] font-black tracking-[0.4em] mb-3 block opacity-60">
            Project Highlights
          </span> */}
          <h2 className="text-4xl md:text-5xl font-black text-[#FDE68B] tracking-tighter italic leading-none">
            Project Highlights
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#FDE68B]/10 border border-[#FDE68B]/10">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06, ease: 'easeOut' }}
                className="relative bg-[#181818]/80 backdrop-blur-sm p-8 flex flex-col gap-6 group cursor-default overflow-hidden border-r border-b border-[#FDE68B]/5"
              >
                {/* Top sweep bar on hover */}
                <div className="absolute top-0 left-0 h-[3px] bg-[#FDE68B] w-0 group-hover:w-full transition-all duration-[400ms] easy-in-out shadow-[0_0_15px_rgba(253,230,139,0.5)]" />

                <div className="flex justify-between items-start">
                  {/* Index label */}
                  <span className="text-[#FDE68B] text-[10px] font-black opacity-30 italic">
                    {String(item.id).padStart(2, '0')}
                  </span>

                  {/* Icon box */}
                  <div className="w-10 h-10 border border-[#FDE68B]/20 flex items-center justify-center flex-shrink-0 rounded-lg group-hover:bg-[#FDE68B] group-hover:text-[#181818] transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-[#FDE68B]/5">
                    <Icon size={18} className="text-inherit" strokeWidth={2} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white text-lg font-black leading-tight tracking-tight italic group-hover:text-[#FDE68B] transition-colors">
                  {item.title}
                </h3>

                {/* Bottom dot decorative */}
                <div className="w-6 h-[2px] bg-[#FDE68B] opacity-20 mt-auto group-hover:w-full group-hover:opacity-40 transition-all duration-500" />
              </motion.div>
            )
          })}
        </div>

        {/* Footer rule */}
        <div className="flex items-center gap-4 mt-12 opacity-20">
          <div className="flex-1 h-px bg-[#FDE68B]" />
          <span className="text-[#FDE68B] text-[10px] font-black tracking-[0.5em] uppercase">
            MMS CORE SYSTEM
          </span>
          <div className="flex-1 h-px bg-[#FDE68B]" />
        </div>

      </div>
    </section>
  )
}