'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'

export interface ServiceItem {
    icon: ReactNode
    title: string
    desc: string
    num: string
    slug: string
}

interface ServiceRowProps {
    service: ServiceItem
    index: number
}

export default function ServiceRow({ service, index }: ServiceRowProps) {
    return (
        <Link href={`/animation-services/${service.slug}`}>
            <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group grid grid-cols-[48px_1fr_auto] items-center gap-7 py-7 border-b border-[#DBE3E9]/8 first:border-t first:border-t-[#DBE3E9]/8 relative overflow-hidden cursor-pointer hover:border-b-[#DBE3E9]/30 transition-all duration-350"
            >
                {/* Hover sweep bg */}
                <div className="absolute inset-0 bg-[#DBE3E9]/[0.04] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-400 ease-out" />

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-[#DBE3E9]/10 flex items-center justify-center text-[#DBE3E9] group-hover:bg-[#DBE3E9] group-hover:text-[#181818] group-hover:rotate-6 group-hover:scale-105 transition-all duration-350 relative z-10 flex-shrink-0">
                    {service.icon}
                </div>

                {/* Text */}
                <div className="relative z-10 min-w-0">
                    <p className="text-[13px] font-normal tracking-[0.08em] text-[#DBE3E9] mb-1 group-hover:tracking-[0.12em] transition-all duration-300 uppercase">
                        {service.title}
                    </p>
                    <p className="text-[10px] font-normal tracking-[0.1em] text-[#DBE3E9]/30 group-hover:text-[#DBE3E9]/55 leading-relaxed transition-colors duration-350">
                        {service.desc}
                    </p>
                </div>

                {/* Number + Arrow */}
                <div className="flex items-center gap-4 relative z-10 flex-shrink-0">
                    <span className="text-[11px] font-normal text-[#DBE3E9]/20 group-hover:text-[#DBE3E9]/50 tracking-widest transition-colors hidden md:block">
                        {service.num}
                    </span>
                    <div className="w-9 h-9 rounded-full border border-[#DBE3E9]/15 flex items-center justify-center text-[#DBE3E9]/30 group-hover:border-[#DBE3E9] group-hover:text-[#DBE3E9] group-hover:rotate-45 transition-all duration-350">
                        <ArrowUpRight size={14} />
                    </div>
                </div>
            </motion.li>
        </Link>
    )
}


