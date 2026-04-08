"use client"

import { motion } from 'framer-motion'

const awards = [
  { year: '2024', title: 'Top Brand Studio', category: 'Creative' },
  { year: '2023', title: 'High Satisfaction', category: 'Support' },
  { year: '2022', title: 'Innovation Lead', category: 'Technology' },
  { year: '2021', title: 'Global Excellence', category: 'Digital' },
]

export default function IdeasAward() {
  return (
    <section className="bg-[#181818] py-24 px-6 md:px-20 border-t border-[#DBE3E9]/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <span className="text-[#DBE3E9] text-[10px] font-normal tracking-[0.4em] mb-4 block">RECOGNITIONS</span>
          <h2 className="text-4xl md:text-6xl font-normal text-[#DBE3E9] tracking-tighter leading-none italic uppercase">
            Proven <br /> <span className="opacity-40">Success</span>
          </h2>
        </div>
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-[#DBE3E9]/5 border border-[#DBE3E9]/10 group hover:bg-[#DBE3E9]/10 transition-colors"
            >
              <span className="text-[10px] font-normal text-[#DBE3E9]/30 tracking-widest">{award.year}</span>
              <h3 className="text-xl font-normal text-[#DBE3E9] mt-2 group-hover:text-white transition-colors tracking-tight italic">{award.title}</h3>
              <p className="text-[9px] font-normal text-[#DBE3E9]/40 mt-1 uppercase tracking-widest leading-none">{award.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
