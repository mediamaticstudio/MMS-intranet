'use client'

import { motion } from 'framer-motion'

export default function IdeasHero() {
  return (
    <section className="relative h-screen bg-[#181818] overflow-hidden flex items-center">
      {/* Background Textures */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "url('/back drop.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        /> */}
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.05, rotate: 12 }}
          transition={{ duration: 2 }}
          className="absolute -top-[20%] -right-[10%] w-[120%] h-[120%] z-0"
          style={{
            backgroundImage: "url('/bg doodle.png')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right top'
          }}
        />
      </div>

      {/* Dark cinematic vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60 z-[1]" />

      {/* BIG TEXT WITH IMAGE FILL */}
      <div className="absolute top-24 left-0 w-full pointer-events-none select-none z-[1]">
        <h1
          className="font-normal leading-none tracking-[-0.03em] text-transparent bg-clip-text opacity-25"
          style={{
            fontSize: "15vw",
            backgroundImage: "url('/bg for text.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitBackgroundClip: "text",
          }}
        >
          VISION INTO VISIBILITY
        </h1>
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 w-full px-8 md:px-24 mt-10 md:mt-20 flex flex-col md:flex-row justify-between items-center">

        {/* LEFT CONTENT */}
        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-[clamp(48px,8vw,90px)] font-normal text-white leading-[0.85] tracking-tighter italic"
          >
            CLIENTS' <br /> <span className="text-[#FBFBF8] opacity-80">UNIQUE NEEDS</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-10 max-w-xl relative"
          >
            <div className="absolute -left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#DBE3E9] to-transparent" />
            <p className="text-[#DBE3E9]/80 text-lg md:text-xl font-normal leading-relaxed tracking-tight">
              MediaMatic Studio Pvt. Ltd., is a result driven
              <span className="text-white"> Brand Management Company</span> by its Mission to
              Transform Client's “VISION INTO VISIBILITY” through comprehensive Digital
              Solutions by Managing the Client's Brand.
            </p>

            <p className="text-[#DBE3E9]/50 text-sm font-normal mt-6 tracking-[0.2em]">
              Tailoring Business Solutions for Your Brand Excellence.
            </p>
          </motion.div>
        </div>

      </div>

      {/* Decorative dot + line */}
      <div className="absolute bottom-16 left-24 flex items-center gap-6 z-10">
        <div className="w-3 h-3 rounded-full bg-[#DBE3E9] shadow-[0_0_15px_#DBE3E9]" />
        <div className="w-[120px] h-[1px] bg-gradient-to-r from-[#DBE3E9] to-transparent" />
        <span className="text-[#DBE3E9]/30 text-[10px] font-normal tracking-[0.5em] uppercase">SYSTEM CORE v2.0</span>
      </div>

    </section>
  )
}

