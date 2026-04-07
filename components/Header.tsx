'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, ShoppingBag, Menu, ChevronDown, Sparkles, Megaphone, Monitor, Smartphone, Globe, PenTool } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function IdeasHeader() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const navItems = [
    { name: 'About', id: 'about' },
    {
      name: 'Services',
      id: 'services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Content Management', href: '/services/content-management', icon: <PenTool size={14} />, desc: 'SEO & Brand Writing' },
        { name: 'Digital Marketing', href: '/services/digital-marketing', icon: <Megaphone size={14} />, desc: 'Growth & Visibility' },
        { name: 'Website Design', href: '/services/website-development', icon: <Monitor size={14} />, desc: 'Digital Architecture' },
        { name: 'Animation Services', href: '/animation-services', icon: <Sparkles size={14} />, desc: '2D & 3D Visuals' },
        { name: 'App Development', href: '#', icon: <Smartphone size={14} />, desc: 'Custom Solutions' },
        { name: 'Web Hosting', href: '#', icon: <Globe size={14} />, desc: '99.9% Uptime' },
      ]
    },
    // { name: 'Portfolio', id: 'portfolio' },
    { name: 'Pricing', id: 'pricing' },
    // { name: 'Contact', id: 'footer' }
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-[#181818]/80 backdrop-blur-md border-b border-[#FDE68B]/5 px-6 py-5 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-4 group">
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#FDE68B]/20 rounded-full blur-xl scale-0 group-hover:scale-150 transition-transform duration-700" />
          <Image
            src="/lOGO.webp"
            alt="MMS Logo"
            width={50}
            height={50}
            className="object-contain relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
            priority
          />
        </div>
        {/* <div className="flex flex-col">
          <span className="text-[#FDE68B] font-black tracking-tighter text-2xl italic group-hover:text-white transition-colors duration-300">MMS.</span>
          <span className="text-[7px] text-[#FDE68B]/40 font-bold tracking-[0.3em] -mt-1 group-hover:text-[#FDE68B]/80 transition-colors">STUDIO</span>
        </div> */}
      </Link>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-10">
        {navItems.map((item) => (
          <div
            key={item.id}
            className="relative group"
            onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
            onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
          >
            <Link
              href={item.id === 'pricing' ? '/pricing' : (item.hasDropdown ? '#services' : `/#${item.id}`)}
              className="text-[10px] font-black tracking-[0.4em] text-[#FDE68B] hover:opacity-60 transition-all flex items-center gap-1"
            >
              {item.name}
              {item.hasDropdown && <ChevronDown size={10} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />}
            </Link>

            {/* Dropdown Menu */}
            {item.hasDropdown && (
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-4 w-72 bg-[#181818] border border-[#FDE68B]/10 rounded-2xl shadow-2xl p-4 overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#FDE68B]" />
                    <div className="space-y-1">
                      {item.dropdownItems?.map((subItem, idx) => (
                        <Link
                          key={idx}
                          href={subItem.href}
                          className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#FDE68B] group/item transition-all"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#FDE68B]/10 flex items-center justify-center text-[#FDE68B] group-hover/item:bg-[#181818] transition-colors">
                            {subItem.icon}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-black text-[#FDE68B] tracking-widest group-hover/item:text-[#181818] transition-colors">
                              {subItem.name}
                            </span>
                            <span className="text-[8px] font-bold text-[#FDE68B]/40 tracking-tighter group-hover/item:text-[#181818]/60 transition-colors">
                              {subItem.desc}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        ))}
      </nav>

      {/* Icons */}
      <div className="flex items-center gap-6 text-[#FDE68B]">
        <button className="hover:opacity-60 transition-opacity hidden sm:block">
          <Search size={18} />
        </button>
        <div className="relative group cursor-pointer hover:opacity-60 transition-opacity">
          <ShoppingBag size={18} />
          <span className="absolute -top-1.5 -right-1.5 bg-[#FDE68B] text-[#181818] text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-black">0</span>
        </div>
        <button className="md:hidden">
          <Menu size={24} />
        </button>

        {/* CTAs */}
        <button className="hidden md:block text-[10px] font-black tracking-widest text-[#181818] bg-[#FDE68B] px-8 py-3 rounded-full hover:scale-105 transition-transform">
          GET STARTED
        </button>
      </div>
    </header>
  )
}
