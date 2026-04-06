'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const newsItems = [
  { id: 1, date: 'NOVEMBER 15, 2024', title: 'Does My Website Need a Blog?', desc: 'Exploring the strategic value of content marketing for modern digital platforms.', image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop' },
  { id: 2, date: 'DECEMBER 02, 2024', title: 'New UI App for Digital Transformation', desc: 'A deep dive into the interface design choices for our latest enterprise project.', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop' },
  { id: 3, date: 'DECEMBER 20, 2024', title: 'A Simple Social Media Marketing Checklist', desc: 'Streamlining your social presence with actionable steps and consistent branding.', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop' }
]

export default function IdeasNews() {
  return (
    <section id="news" className="bg-[#181818] py-32 px-6 md:px-20 border-t border-[#FDE68B]/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-[#FDE68B] text-[10px] font-black tracking-[0.4em] uppercase">LATEST UPDATES</span>
            <h2 className="text-4xl md:text-6xl font-black text-[#FDE68B] tracking-tighter leading-none italic uppercase">
              Studio <br /> <span className="opacity-60">Insights</span>
            </h2>
          </div>
          <button className="text-[#FDE68B] text-[10px] font-black tracking-widest border-b border-[#FDE68B]/20 pb-2 hover:opacity-60 transition-opacity">
            View All Articles
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[500px] rounded-3xl overflow-hidden border border-[#FDE68B]/10 bg-[#FDE68B]/5 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FDE68B] via-[#FDE68B]/60 to-transparent flex flex-col justify-end p-10 translate-y-12 group-hover:translate-y-0 transition-all duration-500">
                <div className="space-y-4">
                  <span className="text-[#181818]/60 text-[10px] font-black tracking-widest">{item.date}</span>
                  <h3 className="text-2xl font-black text-[#181818] tracking-tighter leading-tight uppercase">
                    {item.title}
                  </h3>
                  <p className="text-[#181818]/60 text-[12px] font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                    {item.desc}
                  </p>
                  <div className="flex items-center gap-4 pt-4 text-[#181818] text-[10px] font-black tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
                    Read More <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
