'use client'

import { motion } from 'framer-motion'
import {
    PenTool,
    User,
    BarChart2,
    Lightbulb,
    Megaphone,
    Briefcase,
    Scissors,
    Layers,
} from 'lucide-react'
import ServiceRow, { ServiceItem } from './Servicerow'

const twoDServices: ServiceItem[] = [
    {
        icon: <PenTool size={18} />,
        title: '2D Whiteboard Animations',
        desc: 'Engaging hand-drawn style animations on whiteboard backgrounds — ideal for explaining processes, step-by-step guides, and educational content.',
        num: '01',
        slug: '2d-whiteboard-animations',
    },
    {
        icon: <User size={18} />,
        title: '2D Character Videos',
        desc: 'Memorable, personality-driven character animations that connect emotionally with audiences and simplify complex narratives.',
        num: '02',
        slug: '2d-character-videos',
    },
    {
        icon: <BarChart2 size={18} />,
        title: '2D Infographic / Typographic Videos',
        desc: 'Data-rich visual storytelling using charts, icons, and kinetic text to make statistics and processes instantly digestible.',
        num: '03',
        slug: '2d-infographic-typographic-videos',
    },
    {
        icon: <Lightbulb size={18} />,
        title: '2D Explainer Videos',
        desc: 'Short, impactful 1–3 minute videos that break down products, services, or concepts using 2D animation, narration, and music.',
        num: '04',
        slug: '2d-explainer-videos',
    },
    {
        icon: <Megaphone size={18} />,
        title: '2D Promo / Branding / Marketing Videos',
        desc: 'High-energy promotional content and brand storytelling videos designed to boost visibility, recall, and conversions.',
        num: '05',
        slug: '2d-promo-branding-marketing-videos',
    },
    {
        icon: <Briefcase size={18} />,
        title: '2D Corporate Videos',
        desc: 'Polished internal and external corporate communications — onboarding, stakeholder reports, product training, and more.',
        num: '06',
        slug: '2d-corporate-videos',
    },
    {
        icon: <Scissors size={18} />,
        title: '2D Video Editing',
        desc: 'Professional cutting, sequencing, colour grading, audio mixing, and effects work to elevate your 2D video productions.',
        num: '07',
        slug: '2d-video-editing',
    },
    {
        icon: <Layers size={18} />,
        title: '2D Motion Graphics',
        desc: 'Dynamic animated visuals, lower thirds, transitions, and graphic elements that give your brand a polished motion identity.',
        num: '08',
        slug: '2d-motion-graphics',
    },
]

export default function TwoDSection() {
    return (
        <section
            id="2d-animation"
            className="bg-[#181818] py-24 px-6 md:px-16 relative overflow-hidden border-t border-[#DBE3E9]/5"
        >
            {/* Subtle radial glow left */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#DBE3E9]/3 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Section Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
                    <div className="space-y-4">
                        <span className="text-[#DBE3E9] text-[10px] font-normal tracking-[0.4em] uppercase">
                            Flat. Bold. Effective.
                        </span>
                        <h2 className="text-5xl md:text-7xl font-normal text-[#FBFBF8] tracking-tighter leading-none italic uppercase">
                            2D
                            <br />
                            <span className="opacity-40">Animation</span>
                        </h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center p-8 rounded-3xl bg-[#DBE3E9]/5 border border-[#DBE3E9]/10 self-center"
                    >
                        <p className="text-[#DBE3E9]/50 text-[13px] font-medium leading-relaxed tracking-wide">
                            2D animation creates engaging flat visuals with height and width — widely used in
                            cartoons, explainer videos, and online ads. Simple, stylized, and endlessly versatile.
                        </p>
                    </motion.div>
                </div>

                {/* Service List */}
                <span className="text-[#DBE3E9]/35 text-[10px] font-normal tracking-[0.4em] mb-0 block">
                    2D Services
                </span>
                <ul>
                    {twoDServices.map((service, i) => (
                        <ServiceRow key={service.slug} service={service} index={i} />
                    ))}
                </ul>
            </div>
        </section>
    )
}


