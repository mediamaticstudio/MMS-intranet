'use client'

import { motion } from 'framer-motion'

const portfolioItems = [
  { id: 1, title: 'EV Urban Scooter', category: 'Industrial Design', tags: ['Concept', 'Mobility'], image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop' },
  { id: 2, title: 'Obsidian Audio', category: 'Product Design', tags: ['Audio', 'Hardware'], image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop' },
  { id: 3, title: 'Flame UI Research', category: 'Digital', tags: ['UI/UX', 'Research'], image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2069&auto=format&fit=crop' },
  { id: 4, title: 'Hazard Protective Gear', category: 'Safety', tags: ['Apparel', 'Tech'], image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop' },
  { id: 5, title: 'Creator Workspace', category: 'Interior', tags: ['Furniture', 'Design'], image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop' },
  { id: 6, title: 'MMS Vision 2030', category: 'Branding', tags: ['Identity', 'Strategy'], image: 'https://images.unsplash.com/photo-1600880210837-a162233f8a4e?q=80&w=2070&auto=format&fit=crop' },
];

export default function IdeasPortfolio() {
  return (
    <section id="portfolio" className="bg-[#181818] py-32 px-6 md:px-20 border-t border-[#FDE68B]/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="space-y-4">
            <span className="text-[#FDE68B] text-[10px] font-black tracking-[0.4em] uppercase">OUR PORTFOLIO</span>
            <h2 className="text-4xl md:text-6xl font-black text-[#FDE68B] tracking-tighter leading-none italic uppercase">
              Selected <br /> <span className="opacity-60">Works</span>
            </h2>
          </div>
          <p className="text-[#FDE68B]/50 max-w-sm text-sm font-medium leading-relaxed">
            A showcase of our commitment to turning complex ideas into tangible reality through design and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[450px] rounded-3xl overflow-hidden border border-[#FDE68B]/10 bg-[#FDE68B]/5 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FDE68B] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <span className="text-[#181818]/60 text-[10px] font-black tracking-widest mb-2">
                  {item.category}
                </span>
                <h3 className="text-2xl font-black text-[#181818] tracking-tighter mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {item.title}
                </h3>
                <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-[#181818]/10 border border-[#181818]/20 text-[#181818] text-[9px] font-bold tracking-tight">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
