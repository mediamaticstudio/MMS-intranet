'use client'

import { motion } from 'framer-motion'
import {
    User,
    BarChart2,
    Lightbulb,
    Megaphone,
    Briefcase,
    Scissors,
    Layers,
    Layout,
    Box,
    Sun,
} from 'lucide-react'
import ServiceRow, { ServiceItem } from './Servicerow'

const threeDServices: ServiceItem[] = [
    {
        icon: <User size={18} />,
        title: '3D Character Videos',
        desc: 'Photorealistic or stylized 3D characters with depth, shading, and cinematic movement — ideal for entertainment, branding, and immersive storytelling.',
        num: '01',
        slug: '3d-character-videos',
    },
    {
        icon: <BarChart2 size={18} />,
        title: '3D Infographic / Typographic Videos',
        desc: 'Three-dimensional data visualization and kinetic typography with depth, lighting, and perspective to make information unforgettable.',
        num: '02',
        slug: '3d-infographic-typographic-videos',
    },
    {
        icon: <Lightbulb size={18} />,
        title: '3D Explainer Videos',
        desc: 'Immersive 3D animated explainers that showcase products, services, or concepts with realistic depth and high-impact visuals.',
        num: '03',
        slug: '3d-explainer-videos',
    },
    {
        icon: <Megaphone size={18} />,
        title: '3D Promo / Branding / Marketing Videos',
        desc: 'Cinematic 3D promotional content that elevates brand identity with dramatic camera moves, lighting, and photorealistic rendering.',
        num: '04',
        slug: '3d-promo-branding-marketing-videos',
    },
    {
        icon: <Briefcase size={18} />,
        title: '3D Corporate Videos',
        desc: 'High-quality 3D corporate productions for stakeholder presentations, product training, and company showcases with professional polish.',
        num: '05',
        slug: '3d-corporate-videos',
    },
    {
        icon: <Scissors size={18} />,
        title: '3D Video Editing',
        desc: 'Advanced post-production for 3D footage — compositing, colour grading, VFX integration, and sound design for a seamless final cut.',
        num: '06',
        slug: '3d-video-editing',
    },
    {
        icon: <Layers size={18} />,
        title: '3D Motion Graphics',
        desc: 'Dynamic 3D motion graphics, animated logos, and visual effects that bring a sense of depth and dimension to your brand materials.',
        num: '07',
        slug: '3d-motion-graphics',
    },
    {
        icon: <Layout size={18} />,
        title: '3D VI & VX Layout Designing',
        desc: 'Visual identity and visual experience layout design in 3D space — UI mockups, environment design, and spatial brand systems.',
        num: '08',
        slug: '3d-vi-vx-layout-designing',
    },
    {
        icon: <Box size={18} />,
        title: '3D Modeling & Texturing',
        desc: 'Precise 3D model creation with high-detail textures for products, characters, environments, and architectural visualizations.',
        num: '09',
        slug: '3d-modeling-texturing',
    },
    {
        icon: <Sun size={18} />,
        title: '3D Lighting & Rendering',
        desc: 'Studio-quality lighting setups and photorealistic rendering to bring every 3D scene to life with cinematic atmosphere and detail.',
        num: '10',
        slug: '3d-lighting-rendering',
    },
]

export default function ThreeDSection() {
    return (
        <section
            id="3d-animation"
            className="bg-[#1a1a1a] py-24 px-6 md:px-16 relative overflow-hidden border-t border-[#FDE68B]/10"
        >
            {/* Subtle radial glow right */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FDE68B]/4 blur-[180px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Section Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
                    <div className="space-y-4">
                        <span className="text-[#FDE68B] text-[10px] font-black tracking-[0.4em] uppercase">
                            Depth. Realism. Impact.
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black text-[#CFCFCF] tracking-tighter leading-none italic uppercase">
                            3D
                            <br />
                            <span className="opacity-40">Animation</span>
                        </h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center p-8 rounded-3xl bg-[#FDE68B]/5 border border-[#FDE68B]/10 self-center"
                    >
                        <p className="text-[#FDE68B]/50 text-[13px] font-medium leading-relaxed tracking-wide">
                            3D animation creates depth, height, and width in a virtual space — producing
                            photorealistic or highly stylized results for film, product visualization, architecture,
                            and beyond.
                        </p>
                    </motion.div>
                </div>

                {/* Service List */}
                <span className="text-[#FDE68B]/35 text-[10px] font-black tracking-[0.4em] mb-0 block">
                    3D Services
                </span>
                <ul>
                    {threeDServices.map((service, i) => (
                        <ServiceRow key={service.slug} service={service} index={i} />
                    ))}
                </ul>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20 flex flex-col md:flex-row items-center justify-between gap-6 p-10 rounded-3xl border border-[#FDE68B]/15 bg-[#FDE68B]/5"
                >
                    <div className="space-y-2 text-center md:text-left">
                        <p className="text-[11px] font-black tracking-[0.35em] text-[#FDE68B]/40 uppercase">
                            Ready to bring your vision to life?
                        </p>
                        <h3 className="text-2xl font-black text-[#CFCFCF] tracking-tight italic uppercase">
                            Let&apos;s Create Together
                        </h3>
                    </div>
                    <button className="px-10 py-4 bg-[#FDE68B] text-[#181818] text-[11px] font-black tracking-[0.25em] uppercase rounded-full hover:bg-[#FDE68B]/80 transition-all duration-300 hover:scale-105 active:scale-95 flex-shrink-0">
                        Get In Touch →
                    </button>
                </motion.div>
            </div>
        </section>
    )
}