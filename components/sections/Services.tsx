'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  { title: 'CONTENT MANAGEMENT', category: 'BRANDING & SEO WRITING', desc: 'Crafting high-quality, SEO-friendly content tailored to engage audiences across social media and blogs.', href: '/services/content-management' },
  { title: '2D/3D ANIMATION', category: 'MOTION GRAPHICS & VFX', desc: 'Crafting immersive visual narratives that breath life into your unique business vision.', href: '#' },
  { title: 'APP DEVELOPMENT', category: 'CUSTOMIZED SOLUTIONS', desc: 'Developing high-performance, tailored applications that bridge the gap between vision and reality.', href: '#' },
  { title: 'WEBSITE DESIGN', category: 'DIGITAL ARCHITECTURE', desc: 'Premium responsive websites built with precision and aligned with Fortune 2030 aspirations.', href: '/services/website-development' },
  { title: 'DIGITAL MARKETING', category: 'BRAND VISIBILITY', desc: 'Enhancing global reach through data-driven strategies and seamless brand management.', href: '/services/digital-marketing' },
  { title: 'WEB HOSTING', category: '99.99% UPTIME GUARANTEE', desc: 'Reliable, secure, and cost-effective hosting solutions for enterprise-grade performance.', href: '#' }
]

export default function IdeasServices() {
  return (
    <section id="services" className="bg-[#181818] py-32 px-6 md:px-20 border-t border-[#FDE68B]/5 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">

        <div className="md:w-1/3 sticky top-44 h-fit">
          <span className="text-[#FDE68B] text-[10px] font-black tracking-[0.4em] mb-4 block">CORE CAPABILITIES</span>
          <h2 className="text-4xl md:text-7xl font-black text-[#FDE68B] tracking-tighter leading-none italic mb-8 uppercase">
            Expert <br /> <span className="opacity-40 italic">Solutions</span>
          </h2>
          <p className="text-[#FDE68B]/50 text-[10px] font-black leading-relaxed max-w-xs tracking-widest border-l-2 border-[#FDE68B] pl-6">
            MediaMatic Studio recognizes that every business is unique. We specialize in managing content through tailored high-end digital services.
          </p>
        </div>

        <div className="md:w-2/3 space-y-6">
          {services.map((service, index) => (
            <Link key={index} href={service.href}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "circOut", delay: index * 0.1 }}
                className="group p-12 rounded-[2.5rem] bg-[#FDE68B]/5 border border-[#FDE68B]/10 hover:bg-[#FDE68B] transition-all duration-700 flex flex-col md:flex-row items-center justify-between cursor-pointer shadow-xl shadow-transparent hover:shadow-[#FDE68B]/20 mb-6"
              >
                <div className="space-y-4 max-w-lg text-center md:text-left">
                  <span className="text-[#FDE68B]/40 text-[9px] font-black tracking-[0.4em] group-hover:text-[#181818]/50 transition-colors">
                    {service.category}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-black text-[#FDE68B] tracking-tighter group-hover:text-[#181818] transition-colors leading-none italic">
                    {service.title}
                  </h3>
                  <p className="text-[#FDE68B]/60 text-xs font-bold tracking-tight group-hover:text-[#181818]/60 transition-colors">
                    {service.desc}
                  </p>
                </div>
                <div className="mt-8 md:mt-0 w-16 h-16 rounded-full border-2 border-[#FDE68B]/10 flex items-center justify-center text-[#FDE68B] group-hover:bg-[#181818] group-hover:text-[#FDE68B] transition-all transform group-hover:rotate-45">
                  <ArrowRight size={32} />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}
