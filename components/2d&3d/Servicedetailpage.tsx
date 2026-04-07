'use client'

// This is a TEMPLATE for individual service detail pages.
// Copy and rename this file for each service under:
// app/animation-services/2d-whiteboard-animations/page.tsx  etc.
// Then pass the appropriate `serviceData` object.

import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

interface ServiceDetailProps {
    badge: string
    title: string
    subtitle: string
    description: string
    highlights: string[]
    useCases: { title: string; desc: string }[]
    quote: string
}

export default function ServiceDetailPage({ data }: { data: ServiceDetailProps }) {
    return (
        <main className="bg-[#181818] min-h-screen">

            {/* Back Nav */}
            <div className="px-6 md:px-16 pt-10">
                <Link
                    href="/animation-services"
                    className="inline-flex items-center gap-2 text-[#FDE68B]/40 hover:text-[#FDE68B] text-[11px] font-black tracking-[0.3em] uppercase transition-colors duration-300"
                >
                    <ArrowLeft size={14} />
                    All Services
                </Link>
            </div>

            {/* Hero */}
            <section className="relative py-24 px-6 md:px-16 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(253,230,139,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(253,230,139,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
                <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-[#FDE68B]/4 blur-[150px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="space-y-6 max-w-3xl"
                    >
                        <span className="text-[#FDE68B] text-[10px] font-black tracking-[0.4em] uppercase">
                            {data.badge}
                        </span>
                        <h1 className="text-5xl md:text-8xl font-black text-[#CFCFCF] tracking-tighter leading-none italic uppercase">
                            {data.title}
                            <br />
                            <span className="opacity-30 text-4xl md:text-6xl">{data.subtitle}</span>
                        </h1>
                        <p className="text-[#FDE68B]/55 text-[15px] font-medium leading-relaxed max-w-2xl tracking-wide">
                            {data.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Highlights */}
            <section className="py-16 px-6 md:px-16 border-t border-[#FDE68B]/8">
                <div className="max-w-7xl mx-auto">
                    <span className="text-[#FDE68B]/35 text-[10px] font-black tracking-[0.4em] mb-8 block">
                        Key Highlights
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {data.highlights.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="flex items-start gap-3 p-5 rounded-2xl bg-[#FDE68B]/5 border border-[#FDE68B]/8 hover:border-[#FDE68B]/20 transition-colors duration-300"
                            >
                                <CheckCircle2 size={16} className="text-[#FDE68B] mt-0.5 flex-shrink-0" />
                                <span className="text-[12px] font-medium text-[#FDE68B]/60 leading-relaxed tracking-wide">
                                    {item}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases */}
            <section className="py-16 px-6 md:px-16 border-t border-[#FDE68B]/8">
                <div className="max-w-7xl mx-auto">
                    <span className="text-[#FDE68B]/35 text-[10px] font-black tracking-[0.4em] mb-8 block">
                        Common Uses
                    </span>
                    <ul>
                        {data.useCases.map((item, i) => (
                            <motion.li
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="group flex items-center gap-6 py-6 border-b border-[#FDE68B]/8 first:border-t first:border-t-[#FDE68B]/8 cursor-default"
                            >
                                <span className="text-[11px] font-black text-[#FDE68B]/20 tracking-widest w-8 flex-shrink-0 group-hover:text-[#FDE68B]/50 transition-colors">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <div className="flex-1">
                                    <p className="text-[13px] font-black tracking-[0.08em] text-[#FDE68B] mb-1 uppercase">
                                        {item.title}
                                    </p>
                                    <p className="text-[10px] text-[#FDE68B]/30 tracking-[0.1em] leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Quote + CTA */}
            <section className="py-20 px-6 md:px-16 border-t border-[#FDE68B]/8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center text-center space-y-8 p-12 rounded-3xl border border-[#FDE68B]/15 bg-[#FDE68B]/5"
                    >
                        <span className="text-4xl text-[#FDE68B]/20 font-black">"</span>
                        <p className="text-[16px] font-medium text-[#FDE68B]/60 leading-relaxed max-w-2xl tracking-wide italic">
                            {data.quote}
                        </p>
                        <div className="flex gap-4 pt-2">
                            <button className="px-10 py-4 bg-[#FDE68B] text-[#181818] text-[11px] font-black tracking-[0.25em] uppercase rounded-full hover:bg-[#FDE68B]/80 transition-all duration-300 hover:scale-105 active:scale-95">
                                Start a Project →
                            </button>
                            <Link
                                href="/animation-services"
                                className="px-10 py-4 border border-[#FDE68B]/20 text-[#FDE68B]/50 text-[11px] font-black tracking-[0.25em] uppercase rounded-full hover:border-[#FDE68B]/50 hover:text-[#FDE68B] transition-all duration-300"
                            >
                                All Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

        </main>
    )
}


