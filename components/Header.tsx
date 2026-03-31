'use client'

import Link from 'next/link'
import { Search, ShoppingBag, Menu } from 'lucide-react'

export default function IdeasHeader() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#181818]/80 backdrop-blur-md border-b border-[#FDE68B]/5 px-6 py-5 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-[#FDE68B] rounded-xl rotate-12 flex items-center justify-center shadow-lg shadow-[#FDE68B]/20">
          <span className="text-[#181818] font-black text-2xl -rotate-12">M</span>
        </div>
        <span className="text-[#FDE68B] font-black tracking-tighter text-2xl italic uppercase">MMS.</span>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-10">
        {[
          { name: 'About', id: 'about' },
          { name: 'Services', id: 'services' },
          { name: 'Portfolio', id: 'portfolio' },
          { name: 'Pricing', id: 'pricing' },
          { name: 'Contact', id: 'footer' }
        ].map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="text-[10px] font-black tracking-[0.4em] text-[#FDE68B] hover:opacity-60 transition-all uppercase"
          >
            {item.name}
          </a>
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
