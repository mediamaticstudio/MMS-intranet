'use client'

import { motion } from 'framer-motion'
import { Rocket, Video, Globe2, MonitorCheck, ArrowUpRight } from 'lucide-react'

const serviceList = [
  { icon: <Video size={18} />, title: "2D & 3D Animation Video Creation", desc: "Crafting immersive visual experiences that captivate and convert through storytelling and motion.", num: "01" },
  { icon: <Globe2 size={18} />, title: "Customized Apps & Web Development", desc: "Strategic development of bespoke digital platforms tailored to unique business ecosystems.", num: "02" },
  { icon: <Rocket size={18} />, title: "Brand Visibility & Digital Marketing", desc: "Seamless marketing strategies that amplify reach and visibility through result-driven algorithms.", num: "03" },
  { icon: <MonitorCheck size={18} />, title: "Reliable Web Hosting (99.99% Uptime)", desc: "Impressive uptime guarantee ensured through robust infrastructure and enterprise-grade servers.", num: "04" },
]

export default function AboutMMS() {
  return (
    <section id="about-mms" className="bg-[#181818] py-24 px-6 md:px-16 relative overflow-hidden border-t border-[#FDE68B]/5">

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Top: Brand Vision + Commitment */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20">

          {/* Left */}
          <div className="flex flex-col justify-center space-y-6">
            <span className="text-[#FDE68B] text-[10px] font-black tracking-[0.4em] uppercase">WHO WE ARE</span>
            <h2 className="text-5xl md:text-7xl font-black text-[#CFCFCF] tracking-tighter leading-none italic uppercase">
              MediaMatic <br /><span className="opacity-50">Studio (MMS)</span>
            </h2>
            <p className="text-[#FDE68B]/60 text-[15px] font-medium leading-relaxed max-w-xl">
              We recognize every business is unique, with its own distinct characteristics and requirements.
              At MMS, we specialize in managing content through creative excellence and strategic development.
            </p>
          </div>

          {/* Right: Commitment */}
          <div className="flex items-start gap-5 p-8 rounded-3xl bg-[#FDE68B]/5 border border-[#FDE68B]/10 hover:bg-[#FDE68B]/10 transition-all duration-500 self-center">
            <div className="w-14 h-14 rounded-full bg-[#FDE68B] flex items-center justify-center text-[#181818] flex-shrink-0 animate-pulse shadow-lg shadow-[#FDE68B]/20">
              <Rocket size={28} />
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-[#FDE68B] tracking-tight uppercase">Our Commitment</h3>
              <p className="text-[#FDE68B]/40 text-[10px] font-black leading-relaxed uppercase tracking-widest">
                Delivering realistic, cost-effective & high-quality services tailored per client's needs.
              </p>
            </div>
          </div>
        </div>

        {/* Services Label */}
        <span className="text-[#FDE68B]/35 text-[10px] font-black tracking-[0.4em] uppercase mb-0 block">What We Do</span>

        {/* Service Rows */}
        <ul>
          {serviceList.map((service, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group grid grid-cols-[48px_1fr_auto] items-center gap-7 py-7 border-b border-[#FDE68B]/8 first:border-t first:border-t-[#FDE68B]/8 relative overflow-hidden cursor-pointer hover:border-b-[#FDE68B]/30 transition-all duration-350"
            >
              {/* Hover sweep bg */}
              <div className="absolute inset-0 bg-[#FDE68B]/[0.04] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-400 ease-out" />

              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-[#FDE68B]/10 flex items-center justify-center text-[#FDE68B] group-hover:bg-[#FDE68B] group-hover:text-[#181818] group-hover:rotate-6 group-hover:scale-105 transition-all duration-350 relative z-10">
                {service.icon}
              </div>

              {/* Text */}
              <div className="relative z-10">
                <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#FDE68B] mb-1 group-hover:tracking-[0.12em] transition-all duration-300">
                  {service.title}
                </p>
                <p className="text-[10px] font-normal uppercase tracking-[0.1em] text-[#FDE68B]/30 group-hover:text-[#FDE68B]/55 leading-relaxed transition-colors duration-350">
                  {service.desc}
                </p>
              </div>

              {/* Number + Arrow */}
              <div className="flex items-center gap-4 relative z-10">
                <span className="text-[11px] font-black text-[#FDE68B]/20 group-hover:text-[#FDE68B]/50 tracking-widest transition-colors hidden md:block">
                  {service.num}
                </span>
                <div className="w-9 h-9 rounded-full border border-[#FDE68B]/15 flex items-center justify-center text-[#FDE68B]/30 group-hover:border-[#FDE68B] group-hover:text-[#FDE68B] group-hover:rotate-45 transition-all duration-350">
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </motion.li>
          ))}
        </ul>

      </div>
    </section>
  )
}