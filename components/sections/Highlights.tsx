'use client'

import { motion } from 'framer-motion'
import { Sparkles, Code, Users, CheckCircle, TrendingUp, MonitorPlay, Hammer, Target } from 'lucide-react'

const highlights = [
  { id: 1, title: 'Innovative Designs', icon: <Sparkles size={24} />, color: 'from-[#ff6a2b]/30 to-[#e06c3a]/5' },
  { id: 2, title: 'Latest Technologies', icon: <Code size={24} />, color: 'from-[#1a1a1a]/40 to-[#111]/10' },
  { id: 3, title: 'Professional Team', icon: <Users size={24} />, color: 'from-[#ff6a2b]/20 to-[#7f2b00]/5' },
  { id: 4, title: 'Internal Quality Audits', icon: <CheckCircle size={24} />, color: 'from-[#e06c3a]/30 to-[#ff6a2b]/5' },
  { id: 5, title: 'Result Driven Projects', icon: <TrendingUp size={24} />, color: 'from-[#1a1a1a]/40 to-[#111]/10' },
  { id: 6, title: 'Real Time project updates', icon: <MonitorPlay size={24} />, color: 'from-[#ff6a2b]/10 to-[#7f2b00]/5' },
  { id: 7, title: 'Dedicated Project Manager', icon: <Hammer size={24} />, color: 'from-[#e06c3a]/20 to-[#ff6a2b]/5' },
  { id: 8, title: 'Customized Business Solution', icon: <Target size={24} />, color: 'from-[#1a1a1a]/50 to-[#0c0c0c]/10' },
]

export default function ProjectHighlights() {
  return (
    <section className="bg-[#181818] py-32 px-6 overflow-hidden relative border-t border-[#FDE68B]/5">

      {/* Decorative background circle - Burgundy tint */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] rounded-full bg-[#FDE68B]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <center className="mb-24">
          <span className="text-[#FDE68B] text-[10px] font-black tracking-[0.4em] uppercase mb-4 block animate-bounce">PROJECT HIGHLIGHTS</span>
          <h2 className="text-4xl md:text-6xl font-bold text-[#FDE68B] tracking-tighter">Crafted with Perfection</h2>
        </center>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 auto-rows-[220px] md:auto-rows-[250px]">
          {highlights.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -15, scale: 1.05 }}
              className={`flex flex-col items-center justify-center text-center p-8 rounded-full border border-[#FDE68B]/10 glassmorphism-orb bg-gradient-to-br from-[#FDE68B]/10 to-[#FDE68B]/5 shadow-xl relative group cursor-pointer`}
              style={{
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="mb-4 text-[#FDE68B] drop-shadow-[0_0_8px_rgba(101,43,50,0.2)] group-hover:animate-pulse">
                {item.icon}
              </div>
              <h3 className="text-[#FDE68B] font-bold text-sm md:text-base leading-tight px-4 group-hover:opacity-70 transition-opacity">
                {item.title}
              </h3>

              {/* Animated Ring on Hover */}
              <div className="absolute inset-0 rounded-full border-2 border-[#FDE68B]/0 group-hover:border-[#FDE68B]/30 group-hover:scale-110 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
