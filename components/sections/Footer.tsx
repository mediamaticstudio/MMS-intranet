'use client'

import { motion } from 'framer-motion'
import { Send, Clover, Radio, Sparkles, Zap } from 'lucide-react'

export default function IdeasFooter() {
   return (
      <footer className="bg-[#181818] py-20 px-6 md:px-20 border-t border-[#FDE68B]/5">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24 mb-32">
            {/* Brand & Mission */}
            <div className="md:col-span-1 space-y-8">
               <h2 className="text-2xl font-black text-[#FDE68B] tracking-tighter uppercase italic">MediaMatic<br />Studio</h2>
               <p className="text-[#FDE68B]/60 text-sm leading-relaxed max-w-xs uppercase font-bold tracking-tight">
                  Aiming to be one of the global fortune company by 2030. Delivering realistic, cost effective & high-quality services.
               </p>
               <div className="flex gap-4">
                  {[
                     { icon: <Clover size={18} />, label: 'FB' },
                     { icon: <Radio size={18} />, label: 'IG' },
                     { icon: <Sparkles size={18} />, label: 'LI' },
                     { icon: <Zap size={18} />, label: 'TW' }
                  ].map((social, idx) => (
                     <motion.div
                        key={idx}
                        whileHover={{ scale: 1.1, backgroundColor: '#FDE68B', color: '#181818' }}
                        className="w-10 h-10 rounded-full border border-[#FDE68B]/10 flex items-center justify-center text-[#FDE68B] cursor-pointer transition-all duration-300"
                     >
                        {social.icon}
                     </motion.div>
                  ))}
               </div>
            </div>

            {/* Navigation Links */}
            <div className="space-y-6">
               <h4 className="text-[10px] font-black text-[#FDE68B] tracking-[0.4em] uppercase">SERVICES</h4>
               <ul className="space-y-3 text-xs font-bold text-[#FDE68B]/60 uppercase tracking-wider">
                  <li className="hover:text-[#FDE68B] cursor-pointer transition-colors">2D/3D Animation</li>
                  <li className="hover:text-[#FDE68B] cursor-pointer transition-colors">App Development</li>
                  <li className="hover:text-[#FDE68B] cursor-pointer transition-colors">Web Design</li>
                  <li className="hover:text-[#FDE68B] cursor-pointer transition-colors">Digital Marketing</li>
                  <li className="hover:text-[#FDE68B] cursor-pointer transition-colors">Web Hosting</li>
               </ul>
            </div>

            <div className="space-y-6">
               <h4 className="text-[10px] font-black text-[#FDE68B] tracking-[0.4em] uppercase">COMPANY</h4>
               <ul className="space-y-3 text-xs font-bold text-[#FDE68B]/60 uppercase tracking-wider">
                  <li className="hover:text-[#FDE68B] cursor-pointer transition-colors">Our Story</li>
                  <li className="hover:text-[#FDE68B] cursor-pointer transition-colors">Portfolio</li>
                  <li className="hover:text-[#FDE68B] cursor-pointer transition-colors">Pricing</li>
                  <li className="hover:text-[#FDE68B] cursor-pointer transition-colors">Awards</li>
                  <li className="hover:text-[#FDE68B] cursor-pointer transition-colors">Contact</li>
               </ul>
            </div>

            <div className="space-y-6">
               <h4 className="text-[10px] font-black text-[#FDE68B] tracking-[0.4em] uppercase">CONTACT</h4>
               <ul className="space-y-4 text-xs font-bold text-[#FDE68B]/60 uppercase tracking-widest">
                  <li>MMS-5, Corporate Plaza<br />info@mediamaticstudio.com</li>
                  <li className="text-[#FDE68B] font-black">24/7 SUPPORT AVAILABLE</li>
                  <li className="flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-[#FDE68B] animate-pulse" />
                     +1 (Studio) Direct
                  </li>
               </ul>
            </div>
         </div>

         <div className="max-w-7xl mx-auto pt-12 border-t border-[#FDE68B]/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <span className="text-[10px] font-black text-[#FDE68B]/40 tracking-[0.5em] uppercase">
               © 2024 MEDIAMATIC STUDIO. ALL RIGHTS RESERVED
            </span>
            <div className="flex gap-8 text-[10px] font-black text-[#FDE68B]/40 tracking-widest uppercase">
               <span className="hover:text-[#FDE68B] cursor-pointer">Privacy Policy</span>
               <span className="hover:text-[#FDE68B] cursor-pointer">Terms of Service</span>
            </div>
         </div>
      </footer>
   )
}
