'use client'

import { motion } from 'framer-motion'
import { Palette, Calendar, Image as ImageIcon, UserCheck, Settings, LineChart } from 'lucide-react'

const workflowSteps = [
   { id: 1, title: 'Design Project Ideas', icon: <Palette size={20} />, angle: 0 },
   { id: 2, title: 'Setup Project Schedules', icon: <Calendar size={20} />, angle: 60 },
   { id: 3, title: 'Creating Project Visuals', icon: <ImageIcon size={20} />, angle: 120 },
   { id: 4, title: 'Stakeholders Approvals', icon: <UserCheck size={20} />, angle: 180 },
   { id: 5, title: 'Handling Specifications', icon: <Settings size={20} />, angle: 240 },
   { id: 6, title: 'Monitoring Results', icon: <LineChart size={20} />, angle: 300 },
]

export default function ProjectWorkflow() {
   return (
      <section className="bg-[#181818] py-32 px-6 flex flex-col items-center justify-center overflow-hidden border-t border-[#FDE68B]/5 relative">

         <div className="max-w-4xl mx-auto text-center relative z-10 mb-32 h-[450px] w-[450px] flex items-center justify-center">

            {/* Center Brand Orb - Burgundy */}
            <motion.div
               initial={{ scale: 0 }}
               whileInView={{ scale: 1 }}
               viewport={{ once: true }}
               className="z-20 w-32 h-32 rounded-full bg-gradient-to-br from-[#FDE68B] to-[#4a1f24] border-4 border-[#181818] flex items-center justify-center shadow-lg shadow-[#FDE68B]/30 relative"
            >
               <span className="text-[12px] font-black text-[#181818] text-center leading-tight uppercase tracking-tighter">PROJECT <br /> WORKFLOW</span>
               <div className="absolute inset-0 rounded-full border border-[#FDE68B]/20 animate-ping opacity-20" />
            </motion.div>

            {/* Sequential Flow Orbitals */}
            <div className="absolute inset-0 z-10">
               {workflowSteps.map((step, index) => {
                  const r = 200 // radius
                  const x = Math.cos((step.angle * Math.PI) / 180) * r
                  const y = Math.sin((step.angle * Math.PI) / 180) * r

                  return (
                     <motion.div
                        key={step.id}
                        initial={{ opacity: 0, x: 0, y: 0 }}
                        whileInView={{ opacity: 1, x, y }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.15, type: 'spring' }}
                        className="absolute top-[calc(50%-45px)] left-[calc(50%-45px)] w-24 h-24 rounded-full bg-[#FDE68B]/5 border border-[#FDE68B]/10 flex flex-col items-center justify-center p-3 text-center group hover:bg-[#FDE68B] transition-colors"
                     >
                        <div className="mb-1 text-[#FDE68B] group-hover:text-[#181818] transition-colors drop-shadow-[0_0_5px_rgba(101,43,50,0.1)]">
                           {step.icon}
                        </div>
                        <span className="text-[9px] font-bold text-[#FDE68B] tracking-tight uppercase leading-tight group-hover:text-[#181818] transition-colors">
                           {step.title}
                        </span>
                     </motion.div>
                  )
               })}
            </div>

            {/* Animated Lines connecting to outer steps - Burgundy muted */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
               <svg className="w-full h-full" viewBox="0 0 100 100">
                  {workflowSteps.map((step, i) => (
                     <line
                        key={i}
                        x1="50" y1="50"
                        x2={50 + Math.cos((step.angle * Math.PI) / 180) * 45}
                        y2={50 + Math.sin((step.angle * Math.PI) / 180) * 45}
                        stroke="#FDE68B"
                        strokeWidth="0.5"
                     />
                  ))}
               </svg>
            </div>
         </div>

         <div className="-mt-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-[#FDE68B] mb-4 uppercase tracking-tighter">MMS Project Strategy</h2>
            <p className="text-[#FDE68B]/50 max-w-lg mx-auto text-sm leading-relaxed font-medium">
               A meticulously structured end-to-end framework designed to prioritize accuracy, collaboration, and exceptional outcomes for every unique business requirement.
            </p>
         </div>

      </section>
   )
}
