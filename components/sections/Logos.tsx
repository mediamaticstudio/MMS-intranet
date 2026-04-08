'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const partnerLogos = [
  { id: 1, name: 'Stitch', opacity: 0.4 },
  { id: 2, name: 'Google', opacity: 0.3 },
  { id: 3, name: 'Meta', opacity: 0.5 },
  { id: 4, name: 'Apple', opacity: 0.4 },
  { id: 5, name: 'Amazon', opacity: 0.3 },
  { id: 6, name: 'Forbes', opacity: 0.4 },
]

export default function IdeasLogos() {
  return (
    <section className="bg-[#181818] py-20 px-6 md:px-20 border-t border-[#DBE3E9]/5">
      <div className="max-w-7xl mx-auto">
        <center className="mb-12">
          <span className="text-[#DBE3E9]/40 text-[10px] font-normal tracking-[0.4em] uppercase">Trusted by Global Brands</span>
        </center>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-50 contrast-0 hover:contrast-100 transition-all duration-700 grayscale hover:grayscale-0">
          {/* Logo items with burgundy hover tint logic if using SVGs, otherwise just standard */}
          <motion.div whileHover={{ scale: 1.1 }} className="h-8 md:h-12 w-32 bg-[#DBE3E9]/10 rounded-lg animate-pulse" />
          <motion.div whileHover={{ scale: 1.1 }} className="h-8 md:h-12 w-32 bg-[#DBE3E9]/10 rounded-lg animate-pulse" />
          <motion.div whileHover={{ scale: 1.1 }} className="h-8 md:h-12 w-32 bg-[#DBE3E9]/10 rounded-lg animate-pulse" />
          <motion.div whileHover={{ scale: 1.1 }} className="h-8 md:h-12 w-32 bg-[#DBE3E9]/10 rounded-lg animate-pulse" />
          <motion.div whileHover={{ scale: 1.1 }} className="h-8 md:h-12 w-32 bg-[#DBE3E9]/10 rounded-lg animate-pulse" />
        </div>
      </div>
    </section>
  )
}

