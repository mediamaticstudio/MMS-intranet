'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Send, Clover, Radio, Sparkles, Zap } from 'lucide-react'

export default function IdeasFooter() {
   return (
      <footer className="bg-[#181818] py-20 px-6 md:px-20 border-t border-[#FDE68B]/5">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24 mb-32">
            {/* Brand & Mission */}
            <div className="md:col-span-1 space-y-8">
               <Link href="/" className="inline-block group">
                  <div className="flex items-center gap-4">
                     <div className="relative w-12 h-12 flex items-center justify-center">
                        <div className="absolute inset-0 bg-[#FDE68B]/10 rounded-full blur-xl scale-0 group-hover:scale-150 transition-transform duration-700" />
                        <Image
                           src="/lOGO.webp"
                           alt="MMS Logo"
                           width={48}
                           height={48}
                           className="object-contain filter brightness-125"
                        />
                     </div>
                     <div className="flex flex-col">
                        <span className="text-[#FDE68B] font-black tracking-tighter text-2xl italic group-hover:text-white transition-all">MMS.</span>
                        <span className="text-[7px] text-[#FDE68B]/40 font-bold tracking-[0.3em] -mt-1 group-hover:text-[#FDE68B]/80 transition-all">EST. 2024</span>
                     </div>
                  </div>
               </Link>
               <p className="text-[#FDE68B]/60 text-sm leading-relaxed max-w-xs font-bold tracking-tight">
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
               <ul className="space-y-3 text-xs font-bold text-[#FDE68B]/60 tracking-wider">
                  <li className="hover:text-[#FDE68B] cursor-pointer transition-colors">2D/3D Animation</li>
                  <li className="hover:text-[#FDE68B] cursor-pointer transition-colors">App Development</li>
                  <li className="hover:text-[#FDE68B] cursor-pointer transition-colors">Web Design</li>
                  <li className="hover:text-[#FDE68B] cursor-pointer transition-colors">Digital Marketing</li>
                  <li className="hover:text-[#FDE68B] cursor-pointer transition-colors">Web Hosting</li>
               </ul>
            </div>

            <div className="space-y-6">
               <h4 className="text-[10px] font-black text-[#FDE68B] tracking-[0.4em] uppercase">COMPANY</h4>
               <ul className="space-y-3 text-xs font-bold text-[#FDE68B]/60 tracking-wider">
                  <li className="hover:text-[#FDE68B] cursor-pointer transition-colors">Our Story</li>
                  <li className="hover:text-[#FDE68B] cursor-pointer transition-colors">Portfolio</li>
                  <li className="hover:text-[#FDE68B] cursor-pointer transition-colors"><Link href="/pricing" className="w-full h-full block">Pricing</Link></li>
                  <li className="hover:text-[#FDE68B] cursor-pointer transition-colors">Awards</li>
                  <li className="hover:text-[#FDE68B] cursor-pointer transition-colors">Contact</li>
               </ul>
            </div>

            <div className="space-y-6">
               <h4 className="text-[10px] font-black text-[#FDE68B] tracking-[0.4em] uppercase">CONTACT</h4>
               <ul className="space-y-4 text-xs font-bold text-[#FDE68B]/60 tracking-widest">
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
