'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export default function AnimationServicesHero() {
    return (
        <section className="relative bg-[#181818] pt-32 pb-20 px-6 md:px-16 overflow-hidden border-b border-[#DBE3E9]/10">

            {/* Background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(106,166,218,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(106,166,218,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#DBE3E9]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="flex flex-col items-center text-center space-y-6"
                >
                    <span className="text-[#DBE3E9] text-[10px] font-normal tracking-[0.4em] uppercase flex items-center gap-2">
                        <Play size={10} fill="#DBE3E9" />
                        MediaMatic Studio
                    </span>

                    <h1 className="text-6xl md:text-9xl font-normal text-[#FBFBF8] tracking-tighter leading-none italic uppercase">
                        Animation
                        <br />
                        <span className="opacity-30">Services</span>
                    </h1>

                    <p className="text-[#DBE3E9]/50 text-[14px] font-medium leading-relaxed max-w-2xl tracking-wide">
                        From flat 2D storytelling to immersive 3D worlds — explore our full suite of animation
                        and motion services crafted to captivate, convert, and communicate.
                    </p>

                    {/* Stats Row */}
                    <div className="flex items-center gap-10 pt-6">
                        {[
                            { num: '8+', label: '2D Services' },
                            { num: '9+', label: '3D Services' },
                            { num: '100%', label: 'Custom Work' },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                className="flex flex-col items-center"
                            >
                                <span className="text-3xl font-normal text-[#DBE3E9] tracking-tight">{stat.num}</span>
                                <span className="text-[9px] font-normal tracking-[0.3em] text-[#DBE3E9]/30 uppercase">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}


