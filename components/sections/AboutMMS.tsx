'use client'

import { motion } from 'framer-motion'
import { Rocket, Video, Globe2, ShoppingCart, Lock, MonitorCheck } from 'lucide-react'

const serviceList = [
  { icon: <Video size={20} />, title: "2D & 3D Animation Video Creation", desc: "Crafting immersive visual experiences that captivate and convert through storytelling and motion." },
  { icon: <Globe2 size={20} />, title: "Customized Apps & Web Development", desc: "Strategic development of bespoke digital platforms tailored to unique business ecosystems." },
  { icon: <Rocket size={20} />, title: "Brand Visibility & Digital Marketing", desc: "Seamless marketing strategies that amplify reach and visibility through result-driven alorithms." },
  { icon: <MonitorCheck size={20} />, title: "Reliable Web Hosting (99.99% Uptime)", desc: "Impressive uptime guarantee ensured through robust infrastructure and enterprise-grade servers." }
]

export default function AboutMMS() {
  return (
    <section id="about-mms" className="bg-[#181818] py-32 px-6 md:px-20 relative overflow-hidden border-t border-[#FDE68B]/5">

      {/* Decorative Brand Text Background - Subtle Burgundy Shadow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] select-none pointer-events-none">
        <h2 className="text-[30vw] font-black tracking-tighter leading-none text-[#FDE68B] whitespace-nowrap">MMS STUDIO</h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

        {/* Left Column: Brand Vision */}
        <div className="flex flex-col justify-center space-y-10">
          <div className="space-y-6">
            <span className="text-[#FDE68B] text-[10px] font-black tracking-[0.4em] uppercase">WHO WE ARE</span>
            <h2 className="text-4xl md:text-6xl font-black text-[#FDE68B] tracking-tighter leading-none italic uppercase">
              MediaMatic <br /> <span className="opacity-60">Studio (MMS)</span>
            </h2>
            <p className="text-[#FDE68B]/60 text-[15px] font-medium leading-relaxed max-w-xl">
              We recognize every business is unique, with its own distinct characteristics and requirements.
              At MMS, we specialize in managing content through creative excellence and strategic development.
            </p>
          </div>

          <div className="flex items-center gap-6 p-8 rounded-3xl bg-[#FDE68B]/5 border border-[#FDE68B]/10 hover:bg-[#FDE68B]/10 transition-all duration-500">
            <div className="w-16 h-16 rounded-full bg-[#FDE68B] flex items-center justify-center text-[#181818] flex-shrink-0 animate-pulse shadow-lg shadow-[#FDE68B]/20">
              <Rocket size={32} />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-[#FDE68B] tracking-tight uppercase leading-none">Our Commitment</h3>
              <p className="text-[#FDE68B]/40 text-[12px] font-bold leading-relaxed uppercase tracking-widest leading-relaxed">
                Delivering realistic, cost-effective & high-quality services tailored per client's needs.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Specializations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[220px]">
          {serviceList.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-8 rounded-3xl bg-[#FDE68B]/5 border border-[#FDE68B]/10 flex flex-col justify-between hover:bg-[#FDE68B] hover:text-[#181818] transition-all duration-500 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FDE68B]/20 flex items-center justify-center text-[#FDE68B] group-hover:bg-[#181818]/20 group-hover:text-[#181818] transition-colors">
                {service.icon}
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-black tracking-tight uppercase leading-none transition-colors leading-tight">
                  {service.title}
                </h4>
                <p className="text-[10px] uppercase font-black opacity-30 group-hover:opacity-70 leading-relaxed tracking-widest leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
