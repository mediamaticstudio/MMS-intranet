'use client'

import { motion } from 'framer-motion'
import { Palette, Calendar, Image as ImageIcon, UserCheck, Settings, LineChart } from 'lucide-react'

const workflowSteps = [
   { id: 1, title: 'Design Project Ideas', icon: <Palette size={26} />, angle: 0 },
   { id: 2, title: 'Setup Project Schedules', icon: <Calendar size={26} />, angle: 60 },
   { id: 3, title: 'Creating Project Visuals', icon: <ImageIcon size={26} />, angle: 120 },
   { id: 4, title: 'Stakeholders Approvals', icon: <UserCheck size={26} />, angle: 180 },
   { id: 5, title: 'Handling Specifications', icon: <Settings size={26} />, angle: 240 },
   { id: 6, title: 'Monitoring Results', icon: <LineChart size={26} />, angle: 300 },
]

export default function ProjectWorkflow() {
   return (
      <section className="bg-[#181818] py-24 px-6 flex flex-col items-center justify-center overflow-hidden border-t border-[#FDE68B]/5 relative">
         {/* Background Patterns */}
         {/* <div className="absolute inset-0 z-0 pointer-events-none opacity-5">
            <div
               className="absolute inset-0"
               style={{
                  backgroundImage: "url('/back drop.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
               }}
            />
         </div> */}
         <div className="-mt-8 text-center relative z-10">
            {/* <span className="text-[#FDE68B] text-[10px] font-black tracking-[0.6em] mb-4 block opacity-40">WORKFLOW EXCELLENCE</span> */}
            <h2 className="text-4xl md:text-6xl font-black text-[#FDE68B] mb-6 tracking-tighter italic">WORKFLOW EXCELLENCE</h2>
            {/* <p className="text-[#FDE68B]/50 max-w-xl mx-auto text-sm leading-relaxed font-bold tracking-tight">
               A meticulously structured end-to-end framework designed to prioritize <span className="text-[#FDE68B]/90 italic">accuracy, collaboration, and exceptional outcomes</span> for every unique business requirement.
            </p> */}
         </div>

         <div
            className="absolute -right-20 -bottom-20 w-[600px] h-[600px] opacity-[0.03] rotate-12 pointer-events-none"
            style={{
               backgroundImage: "url('/bg doodle.png')",
               backgroundSize: 'contain',
               backgroundRepeat: 'no-repeat'
            }}
         />

         <div className="max-w-4xl mx-auto text-center relative z-10 mb-24 h-[450px] w-[450px] flex items-center justify-center">

            {/* Center Brand Orb */}
            <motion.div
               initial={{ scale: 0 }}
               whileInView={{ scale: 1 }}
               viewport={{ once: true }}
               className="z-20 w-36 h-36 rounded-full bg-gradient-to-br from-[#FDE68B] via-[#c4b370] to-[#181818] border-[6px] border-[#181818] flex flex-col items-center justify-center shadow-[0_0_50px_rgba(253,230,139,0.15)] relative group cursor-pointer"
            >
               <span className="text-[10px] font-black text-[#181818] text-center leading-none tracking-widest mb-1">MMS</span>
               <span className="text-[14px] font-black text-[#181818] text-center leading-tight tracking-tighter italic">STRATEGY</span>
               <div className="absolute inset-0 rounded-full border-2 border-[#FDE68B]/40 group-hover:scale-125 transition-transform duration-700 opacity-20" />
            </motion.div>

            {/* Sequential Flow Orbitals */}
            <div className="absolute inset-0 z-10">
               {workflowSteps.map((step, index) => {
                  const r = 210 // radius
                  const x = Math.cos((step.angle * Math.PI) / 180) * r
                  const y = Math.sin((step.angle * Math.PI) / 180) * r

                  return (
                     <motion.div
                        key={step.id}
                        initial={{ opacity: 0, x: 0, y: 0 }}
                        whileInView={{ opacity: 1, x, y }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1, type: 'spring', damping: 15 }}
                        className="absolute top-[calc(50%-48px)] left-[calc(50%-48px)] w-24 h-24 rounded-2xl bg-[#181818] border border-[#FDE68B]/10 flex flex-col items-center justify-center p-4 text-center group hover:bg-[#FDE68B] hover:scale-110 transition-all duration-300 shadow-xl"
                     >
                        <div className="mb-2 text-[#FDE68B] group-hover:text-[#181818] transition-colors">
                           {step.icon}
                        </div>
                        <span className="text-[10px] font-normal text-[#FDE68B]/80 tracking-widest leading-tight group-hover:text-[#181818] transition-colors italic">
                           {step.title}
                        </span>
                     </motion.div>
                  )
               })}
            </div>

            {/* Background Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.1]">
               <svg className="w-full h-full" viewBox="0 0 100 100">
                  {workflowSteps.map((step, i) => (
                     <motion.line
                        key={i}
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: i * 0.2 }}
                        x1="50" y1="50"
                        x2={50 + Math.cos((step.angle * Math.PI) / 180) * 44}
                        y2={50 + Math.sin((step.angle * Math.PI) / 180) * 44}
                        stroke="#FDE68B"
                        strokeWidth="0.3"
                     />
                  ))}
               </svg>
            </div>
         </div>


      </section>
   )
}