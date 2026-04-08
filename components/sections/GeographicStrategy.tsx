'use client'

import { motion } from 'framer-motion'
import { Globe, MapPin } from 'lucide-react'

const regions = [
  { name: 'UNITED STATES', percentage: 40, icon: '🇺🇸', color: 'bg-[#ff6a2b]' },
  { name: 'UNITED KINGDOM', percentage: 25, icon: '🇬🇧', color: 'bg-[#e06c3a]' },
  { name: 'UNITED STATES', percentage: 40, icon: '🇺🇸', color: 'bg-[#DBE3E9]' },
  { name: 'UNITED KINGDOM', percentage: 25, icon: '🇬🇧', color: 'bg-[#DBE3E9]' },
  { name: 'AUSTRALIA', percentage: 20, icon: '🇦🇺', color: 'bg-[#DBE3E9]' },
  { name: 'REST OF WORLD', percentage: 15, icon: '🌍', color: 'bg-[#DBE3E9]/20' },
]

export default function GeographicStrategy() {
  return (
    <section id="global-strategy" className="bg-[#181818] py-32 px-6 md:px-20 border-t border-[#DBE3E9]/5 relative overflow-hidden">

      {/* Background Graphic - Burgundy Vision */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full text-[#DBE3E9]/5 flex items-center justify-center select-none pointer-events-none">
        <Globe size={800} strokeWidth={0.2} className="opacity-[0.05]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-20">

        {/* Left Stats Display */}
        <div className="flex-1 w-full max-w-2xl">
          <div className="mb-16">
            <span className="text-[#DBE3E9] text-[10px] font-normal tracking-[0.4em] mb-4 block">GLOBAL PRESENCE</span>
            <h2 className="text-4xl md:text-6xl font-normal text-[#DBE3E9] tracking-tighter leading-tight">
              Target Geographical <br /> <span className="opacity-60">Strategy</span>
            </h2>
          </div>

          <div className="space-y-12">
            {regions.map((region, i) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group w-full"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{region.icon}</span>
                    <span className="text-lg font-normal text-[#DBE3E9] tracking-tight group-hover:opacity-70 transition-all uppercase">
                      {region.name}
                    </span>
                  </div>
                  <span className="text-2xl font-normal text-[#DBE3E9]">{region.percentage}%</span>
                </div>

                {/* Progress Bar Container - Burgundy scheme */}
                <div className="w-full h-2 rounded-full bg-[#DBE3E9]/5 border border-[#DBE3E9]/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${region.percentage}%` }}
                    transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                    viewport={{ once: true }}
                    className={`h-full bg-[#DBE3E9] rounded-full relative`}
                  >
                    <div className="absolute top-0 right-0 h-4 w-4 bg-[#181818]/40 blur-md translate-x-2" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Callout - Globe Representation Burgundy */}
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center p-12 bg-[#DBE3E9] rounded-full border-2 border-[#DBE3E9]/30 relative animate-[pulse_5s_infinite] shadow-2xl shadow-[#DBE3E9]/40">
          <div className="text-center">
            <MapPin size={48} className="text-[#181818] mb-4 mx-auto animate-bounce" />
            <h3 className="text-2xl font-normal text-[#181818] mb-2 tracking-tighter">Global Vision</h3>
            <p className="text-[#181818]/60 text-sm italic font-normal leading-relaxed">
              "Aiming to be one of the global fortune companies by 2030."
            </p>
          </div>
          {/* Pulsing ring */}
          <div className="absolute inset-0 rounded-full border border-[#DBE3E9]/20 scale-125 animate-ping opacity-20" />
        </div>

      </div>
    </section>
  )
}

