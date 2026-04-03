'use client'

import { motion } from 'framer-motion'
import { Clock, Users, RefreshCw, Headset, Zap, ExternalLink, ShieldCheck } from 'lucide-react'

const usps = [
  { icon: Clock, title: 'Cost-Effective', desc: 'Streamlined project timelines ensuring efficiency and high-end quality without breaking the bank.' },
  { icon: Users, title: 'Expert Team', desc: 'Highly skilled & experienced technical team equipped to handle high volumes with precision.' },
  { icon: RefreshCw, title: 'Unlimited Revisions', desc: 'We pride ourselves on providing unlimited corrections to ensure complete client satisfaction.' },
  { icon: Headset, title: '24/7 Support', desc: 'Round-the-clock assistance through email and chat, guaranteeing prompt help anytime.' },
  { icon: Zap, title: 'Fast TAT', desc: 'All technical issues are resolved within a strictly maintained 24-hour Turnaround Time.' },
  { icon: ExternalLink, title: 'Live Reviews', desc: 'Temporary links to review work-in-progress, allowing for easy feedback before final delivery.' },
  { icon: ShieldCheck, title: 'Dedicated Portal', desc: 'Individual portal access to update details, make payments, and download assets seamlessly.' },
]

const patterns = [
  <pattern id="p0" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.3" fill="rgba(253,230,139,0.22)" /></pattern>,
  <pattern id="p1" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse"><line x1="0" y1="10" x2="10" y2="0" stroke="rgba(253,230,139,0.18)" strokeWidth="1.2" /></pattern>,
  <pattern id="p2" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="7" height="7" fill="rgba(253,230,139,0.12)" /><rect x="7" y="7" width="7" height="7" fill="rgba(253,230,139,0.06)" /></pattern>,
  <pattern id="p3" x="0" y="0" width="9" height="9" patternUnits="userSpaceOnUse"><line x1="0" y1="0" x2="9" y2="9" stroke="rgba(253,230,139,0.14)" strokeWidth="1" /><line x1="9" y1="0" x2="0" y2="9" stroke="rgba(253,230,139,0.08)" strokeWidth="1" /></pattern>,
  <pattern id="p4" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse"><circle cx="7.5" cy="7.5" r="3" fill="none" stroke="rgba(253,230,139,0.16)" strokeWidth="1" /></pattern>,
  <pattern id="p5" x="0" y="0" width="18" height="9" patternUnits="userSpaceOnUse"><line x1="0" y1="4.5" x2="18" y2="4.5" stroke="rgba(253,230,139,0.15)" strokeWidth="1" /></pattern>,
  <pattern id="p6" x="0" y="0" width="11" height="11" patternUnits="userSpaceOnUse"><rect x="0" y="0" width="5" height="5" fill="rgba(253,230,139,0.1)" /><rect x="6" y="6" width="5" height="5" fill="rgba(253,230,139,0.17)" /></pattern>,
]

function BigNum({ n, patternId }: { n: number; patternId: string }) {
  const label = String(n).padStart(2, '0')
  return (
    <svg viewBox="0 0 260 210" className="w-[260px] h-[210px]" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {patterns[n - 1]}
        <mask id={`mk${n}`}>
          <text x="130" y="185" textAnchor="middle" fontFamily="'Bebas Neue'" fontSize="190" fill="white">{label}</text>
        </mask>
      </defs>
      <rect x="0" y="0" width="260" height="210" fill={`url(#${patternId})`} mask={`url(#mk${n})`} />
      <text x="130" y="185" textAnchor="middle" fontFamily="'Bebas Neue'" fontSize="190" fill="none" stroke="rgba(253,230,139,0.32)" strokeWidth="1.2">{label}</text>
      <text x="130" y="185" textAnchor="middle" fontFamily="'Bebas Neue'" fontSize="190" fill="none" stroke="rgba(253,230,139,0.07)" strokeWidth="6">{label}</text>
    </svg>
  )
}

export default function IdeasUSP() {
  return (
    <section id="our-usp" className="bg-[#181818] py-24 px-6 md:px-16 relative border-t border-[#FDE68B]/5">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          {/* <span className="text-[#FDE68B] text-[10px] font-black tracking-[0.4em] uppercase mb-3 block">WHY CHOOSE US</span> */}
          <h2 className="font-['Bebas_Neue'] text-[clamp(52px,6vw,88px)] leading-[.93] text-[#FDE68B]">
            WHY CHOOSE US
          </h2>
          <h2 className="font-['Bebas_Neue'] text-[clamp(52px,6vw,88px)] leading-[.93] text-[#FDE68B]">
            Our Unique Selling<br /><span className="opacity-50">Points (USP)</span>
          </h2>
        </div>

        <div className="flex flex-col">
          {usps.map((usp, i) => {
            const isEven = i % 2 !== 0
            const isLast = i === usps.length - 1
            const num = i + 1
            const label = String(num).padStart(2, '0')

            return (
              <div key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`grid items-center min-h-[200px] ${isEven ? 'grid-cols-[260px_1fr]' : 'grid-cols-[1fr_260px]'}`}
                >
                  {!isEven && (
                    <div className="px-10 py-8">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FDE68B]/35 block mb-3">{label} — USP</span>
                      <h3 className="font-['Bebas_Neue'] text-[clamp(32px,3.8vw,50px)] text-[#FDE68B] leading-none mb-3">{usp.title}</h3>
                      <p className="text-[11px] font-black uppercase tracking-[0.09em] text-[#FDE68B]/35 leading-[1.9] max-w-xs">{usp.desc}</p>
                      {isLast && (
                        <div className="mt-5 w-11 h-11 border border-[#FDE68B] flex items-center justify-center text-[#FDE68B] text-lg hover:bg-[#FDE68B] hover:text-[#181818] hover:rotate-45 transition-all duration-300 cursor-pointer">↗</div>
                      )}
                    </div>
                  )}

                  <BigNum n={num} patternId={`p${i}`} />

                  {isEven && (
                    <div className="px-10 py-8 text-right">
                      <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FDE68B]/35 block mb-3">{label} — USP</span>
                      <h3 className="font-['Bebas_Neue'] text-[clamp(32px,3.8vw,50px)] text-[#FDE68B] leading-none mb-3">{usp.title}</h3>
                      <p className="text-[11px] font-black uppercase tracking-[0.09em] text-[#FDE68B]/35 leading-[1.9] max-w-xs ml-auto">{usp.desc}</p>
                    </div>
                  )}
                </motion.div>

                {!isLast && (
                  <div className="w-px h-8 bg-gradient-to-b from-[#FDE68B]/18 to-transparent mx-auto" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}