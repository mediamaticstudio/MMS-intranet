'use client'

import { motion } from 'framer-motion'
import { Monitor, Smartphone, Globe, Layers } from 'lucide-react'

const solutions = [
   { id: 1, title: 'Mobile Solutions', icon: <Smartphone size={32} />, image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop' },
   { id: 2, title: 'Web Solutions', icon: <Globe size={32} />, image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop' },
   { id: 1, title: 'Mobile Solutions', icon: <Smartphone size={32} />, desc: 'Seamless mobile experiences for modern users.' },
   { id: 2, title: 'Web Solutions', icon: <Globe size={32} />, desc: 'High-performance web applications and platforms.' },
   { id: 3, title: 'Digital Solutions', icon: <Monitor size={32} />, desc: 'Strategic digital transformation for growth.' },
   { id: 4, title: 'Custom Solutions', icon: <Layers size={32} />, desc: 'Tailored software built for your unique needs.' },
]

export default function IdeasSolutions() {
   return (
      <section id="solutions" className="bg-[#181818] py-32 px-6 md:px-20 border-t border-[#DBE3E9]/5">
         <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center">
               <span className="text-[#DBE3E9] text-[10px] font-normal tracking-[0.4em] mb-4 block">TAILORED SOLUTIONS</span>
               <h2 className="text-4xl md:text-6xl font-normal text-[#DBE3E9] tracking-tighter leading-none italic uppercase">
                  Industry <br /> <span className="opacity-60">Architectures</span>
               </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {solutions.map((item, index) => (
                  <motion.div
                     key={item.id}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: index * 0.1 }}
                     className="group p-10 rounded-3xl bg-[#DBE3E9]/5 border border-[#DBE3E9]/10 hover:border-[#DBE3E9]/30 transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[300px]"
                  >
                     <div className="space-y-6">
                        <div className="w-14 h-14 rounded-2xl bg-[#DBE3E9] flex items-center justify-center text-[#181818] shadow-lg shadow-[#DBE3E9]/20 group-hover:scale-110 transition-transform">
                           {item.icon}
                        </div>
                        <h3 className="text-2xl font-normal text-[#DBE3E9] tracking-tight leading-none">
                           {item.title}
                        </h3>
                     </div>
                     <p className="text-[#DBE3E9]/50 text-sm font-normal leading-relaxed tracking-widest mt-8">
                        {item.desc}
                     </p>
                  </motion.div>
               ))}
            </div>
         </div>

         {/* Sub-CTA */}
         <div className="mt-24 max-w-7xl mx-auto flex items-center justify-between border-t border-[#DBE3E9]/10 pt-12">
            <div className="flex flex-col gap-2">
               <span className="text-[#DBE3E9]/30 text-[10px] tracking-widest uppercase">DISCOVER THE CASE</span>
               <h4 className="text-2xl md:text-3xl font-normal text-[#DBE3E9]">Unlock Revenue Growth <br /> for Your Business</h4>
            </div>
            <div className="flex gap-4">
               <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-[#e06c3a] hover:text-[#e06c3a] transition-all">
                  &lt;
               </button>
               <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:border-[#e06c3a] hover:text-[#e06c3a] transition-all">
                  &gt;
               </button>
            </div>
         </div>
      </section>
   )
}

