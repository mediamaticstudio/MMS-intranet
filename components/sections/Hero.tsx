'use client'

import { motion } from 'framer-motion'

export default function IdeasHero() {
  return (
    <section className="relative h-screen bg-[#181818] overflow-hidden flex items-center">

      {/* Dark cinematic vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40" />

      {/* BIG TEXT WITH IMAGE FILL */}
      <div className="absolute top-24 left-0 w-full pointer-events-none select-none">
        <h1
          className="font-black leading-none tracking-[-0.03em] text-transparent bg-clip-text opacity-20"
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
      <div className="relative z-10 w-full px-8 md:px-20 mt-10 flex justify-between items-center">

        {/* LEFT CONTENT */}
        <div className="max-w-2xl mt-12 md:mt-20">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8, ease: "easeOut" }}
            className="text-[64px] md:text-[88px] font-black text-[#FDE68B] leading-[0.9] tracking-tight uppercase"
          >
            CLIENTS' <br /> <span className="opacity-70">UNIQUE NEEDS</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: .3, duration: 0.8 }}
            className="text-[#FDE68B]/70 text-[15px] font-medium mt-8 max-w-lg leading-relaxed border-l-2 border-[#FDE68B] pl-6"
          >
            MediaMatic Studio Pvt. Ltd., is a result driven
            <span className="font-bold"> Brand Management Company</span> by its Mission to
            Transform Client's “VISION INTO VISIBILITY” through comprehensive Digital
            Solutions by Managing the Client's Brand.
            <br /><br />
            Our Team is passionate about Work & Dedicated to deliver exceptional
            Business Solutions tailored to meet
            <span className="font-bold underline decoration-[#FDE68B]/30">
              {" "}your unique requirements.
            </span>
          </motion.p>
        </div>

        {/* RIGHT FLOATING BUTTON */}
        {/* <motion.div
          initial={{ scale: .7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: .6 }}
          className="mr-10"
        >
          <button className="group relative w-[140px] h-[140px] rounded-full border border-[#FDE68B]/20 flex items-center justify-center overflow-hidden transition-all duration-500">

            <div className="absolute inset-0 bg-[#FDE68B] scale-0 group-hover:scale-100 transition duration-500 rounded-full" />

            <span className="relative text-[11px] tracking-[0.25em] font-black text-[#FDE68B] group-hover:text-[#181818] uppercase">
              Get in touch
            </span>

          </button>
        </motion.div> */}

      </div>

      {/* Decorative dot + line */}
      <div className="absolute bottom-14 left-20 flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-[#FDE68B]" />
        <div className="w-[80px] h-[1px] bg-[#FDE68B]/20" />
      </div>

    </section>
  )
}