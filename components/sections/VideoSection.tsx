'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export default function VideoSection() {
  return (
    <section className="bg-[#181818] py-32 px-6 md:px-20 border-t border-[#DBE3E9]/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        <div className="text-center mb-20">
          <span className="text-[#DBE3E9] text-[10px] font-normal tracking-[0.4em] mb-4 block">BRAND SHOWCASE</span>
          <h2 className="text-4xl md:text-6xl font-normal text-[#DBE3E9] tracking-tighter leading-none italic uppercase">
            Ideas Into <br /> <span className="opacity-60">Motion</span>
          </h2>
        </div>

        {/* Video Player Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative w-full aspect-video rounded-[3rem] overflow-hidden border-8 border-[#DBE3E9]/10 bg-[#DBE3E9]/5 group shadow-2xl shadow-[#DBE3E9]/20"
        >
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop"
            alt="Showcase Video Thumbnail"
            className="w-full h-full object-cover grayscale opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
          />

          {/* Center Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#DBE3E9] text-[#181818] flex items-center justify-center shadow-2xl shadow-[#DBE3E9]/40 relative overflow-hidden"
            >
              <Play size={48} fill="currentColor" />
              {/* Subtle orbiting ring */}
              <div className="absolute inset-0 rounded-full border border-[#181818]/20 animate-ping" />
            </motion.button>
          </div>

          {/* Brand Tag Overlay */}
          <div className="absolute top-8 left-8 flex items-center gap-4 text-[#181818] bg-[#DBE3E9] px-6 py-3 rounded-full text-[10px] font-normal tracking-widest shadow-xl group-hover:scale-95 transition-transform">
            <div className="w-1.5 h-1.5 rounded-full bg-[#181818] animate-pulse" />
            Directorial Insight
          </div>
        </motion.div>

        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 font-normal text-[10px] tracking-[0.3em] text-[#DBE3E9]">
          <span>High Fidelity</span>
          <span>Premium Edit</span>
          <span>4K Resolution</span>
          <span>Dynamic Sound</span>
        </div>
      </div>
    </section>
  )
}

