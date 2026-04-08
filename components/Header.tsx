'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, ShoppingBag, Menu, ChevronDown, Sparkles, Megaphone, Monitor, Smartphone, Globe, PenTool } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function IdeasHeader() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

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

  const allServices = navItems.find(item => item.id === 'services')?.dropdownItems || []
  const filteredServices = searchQuery.trim() === '' 
    ? [] 
    : allServices.filter(service => 
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.desc.toLowerCase().includes(searchQuery.toLowerCase())
      )

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search logic here if needed, or redirect
    console.log('Searching for:', searchQuery)
  }

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-[#181818]/80 backdrop-blur-md border-b border-[#DBE3E9]/5 px-6 py-5 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-4 group">
        <div className="relative w-12 h-12 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#DBE3E9]/20 rounded-full blur-xl scale-0 group-hover:scale-150 transition-transform duration-700" />
          <Image
            src="/lOGO.webp"
            alt="MMS Logo"
            width={50}
            height={50}
            className="object-contain relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
            priority
          />
        </div>
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
              className="text-[10px] font-normal tracking-[0.4em] text-[#DBE3E9] hover:opacity-60 transition-all flex items-center gap-1"
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
                    className="absolute top-full left-0 mt-4 w-72 bg-[#181818] border border-[#DBE3E9]/10 rounded-2xl shadow-2xl p-4 overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#DBE3E9]" />
                    <div className="space-y-1">
                      {item.dropdownItems?.map((subItem, idx) => (
                        <Link
                          key={idx}
                          href={subItem.href}
                          className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#DBE3E9] group/item transition-all"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#DBE3E9]/10 flex items-center justify-center text-[#DBE3E9] group-hover/item:bg-[#181818] transition-colors">
                            {subItem.icon}
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] font-normal text-[#DBE3E9] tracking-widest group-hover/item:text-[#181818] transition-colors">
                              {subItem.name}
                            </span>
                            <span className="text-[8px] font-normal text-[#DBE3E9]/40 tracking-tighter group-hover/item:text-[#181818]/60 transition-colors">
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
      <div className="flex items-center gap-6 text-[#DBE3E9]">
        <div className="relative">
          <form onSubmit={handleSearch} className="flex items-center gap-4">
            <AnimatePresence>
              {isSearchOpen && (
                <motion.input
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 220, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  type="text"
                  placeholder="SEARCH FOR SERVICES..."
                  className="bg-[#DBE3E9]/5 border border-[#DBE3E9]/10 rounded-full px-5 py-2 text-[9px] font-normal tracking-widest outline-none focus:border-[#DBE3E9]/30 focus:bg-[#DBE3E9]/10 transition-all placeholder:text-[#DBE3E9]/20"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
              )}
            </AnimatePresence>
            <button 
              type="button"
              onClick={() => {
                setIsSearchOpen(!isSearchOpen)
                if (isSearchOpen) setSearchQuery('')
              }}
              className="hover:opacity-60 transition-opacity hidden sm:block"
            >
              <Search size={18} />
            </button>
          </form>

          {/* Search Results Dropdown */}
          <AnimatePresence>
            {isSearchOpen && filteredServices.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full right-0 mt-4 w-80 bg-[#181818] border border-[#DBE3E9]/10 rounded-2xl shadow-2xl p-2 overflow-hidden z-[110]"
              >
                <div className="max-h-60 overflow-y-auto custom-scrollbar">
                  {filteredServices.map((service, idx) => (
                    <Link
                      key={idx}
                      href={service.href}
                      onClick={() => {
                        setIsSearchOpen(false)
                        setSearchQuery('')
                      }}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-[#DBE3E9] group/item transition-all"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#DBE3E9]/10 flex items-center justify-center text-[#DBE3E9] group-hover/item:bg-[#181818] transition-colors">
                        {service.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-normal text-[#DBE3E9] tracking-widest group-hover/item:text-[#181818] transition-colors">
                          {service.name}
                        </span>
                        <span className="text-[8px] font-normal text-[#DBE3E9]/40 tracking-tighter group-hover/item:text-[#181818]/60 transition-colors">
                          {service.desc}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button className="md:hidden">
          <Menu size={24} />
        </button>

        {/* CTAs */}
        {/* <button className="hidden md:block text-[10px] font-normal tracking-widest text-[#181818] bg-[#DBE3E9] px-8 py-3 rounded-full hover:scale-105 transition-transform">
          GET STARTED
        </button> */}
      </div>
    </header>
  )
}



