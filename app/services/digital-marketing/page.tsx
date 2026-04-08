'use client'

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/sections/Footer"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, Target, TrendingUp, BarChart, Users, Globe, Smartphone, FileText, Check, X, ArrowRight, Zap, Award, CreditCard } from "lucide-react"

export default function DigitalMarketingPage() {
  const [pricingType, setPricingType] = useState<'domestic' | 'international'>('domestic')
  const [activeRow, setActiveRow] = useState<number | null>(null)
  const [activeSmoRow, setActiveSmoRow] = useState<number | null>(null)

  interface SEOPlan {
    name: string
    price: string
    discount: string
    priceWithGst?: string
    features: (string | boolean)[]
  }

  interface SMOPackage {
    name: string
    services: string
    price: string
    original: string
    gst?: string
  }

  const seoDomesticPlans: SEOPlan[] = [
    { name: "Start Up", price: "30,000", discount: "15,000", priceWithGst: "17,700", features: ["Upto 6 KW", "Upto 6 Pages", "Upto 6 Social Bookmarking", "Upto 6 Classified Ads", "Upto 2 Articles", false, false, false, "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", false, false, "Yes", "Yes", "Yes"] },
    { name: "Business", price: "40,000", discount: "20,000", priceWithGst: "23,600", features: ["Upto 9 KW", "Upto 9 Pages", "Upto 9 Social Bookmarking", "Upto 9 Classified Ads", "Upto 5 Articles", "Upto 3 Press Releases", false, false, "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes"] },
    { name: "Corporate", price: "50,000", discount: "25,000", priceWithGst: "29,500", features: ["Upto 12 KW", "Upto 15 Pages", "15 Social Bookmarking", "15 Classified Ads", "Upto 8 Articles", "Upto 5 Press Releases", "2 Videos", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes"] }
  ]

  const seoInternationalPlans: SEOPlan[] = [
    { name: "Start-Up", price: "750", discount: "750", features: ["Upto 6 KW", "Upto 6 Pages", "Upto 6", "Upto 6", "Upto 3", "X", "X", "X", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "X", "X", "✓", "✓", "✓"] },
    { name: "Business", price: "900", discount: "900", features: ["Upto 8 KW", "Upto 8 Pages", "Upto 8", "Upto 8", "Upto 5", "Upto 3", "X", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓"] },
    { name: "Corporate", price: "1000", discount: "1000", features: ["Upto 12 KW", "Upto 15 Pages", "Upto 15", "Upto 15", "Upto 8", "Upto 5", "2 Videos", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓"] }
  ]

  const seoFeatures = [
    "Keywords / Phrases", "Title & Meta Tag Optimization", "Social Bookmarking", "Manual Classified Ads Posting",
    "Article Submission", "Press Release", "Video Optimization", "Social Media Page Creation",
    "Keyword Management", "Setting of Google Analytics", "Google Search Console", "On Page Optimization",
    "Traffic & Ranking Report", "H1/H2/H3 tag Optimization", "SEO Friendly URL Optimization", "Content Optimization",
    "Sitemap Imp & Analysis", "Website Speed Analysis", "Internal Webpage Link Building", "Google Webmaster tool",
    "Google Local Listing", "Blog Creation & Submission", "Google Analytical Reports",
    "Regular Google Ad's from 2nd Month", "SEO Monthly Report", "Digital Marketing Manager Support"
  ]

  const currentSeoPlans = pricingType === 'domestic' ? seoDomesticPlans : seoInternationalPlans

  const smoDomesticPlatforms = [
    { name: "Google", features: ["✓", "✓", "✓", "✓", "X", "X", "X", "X", "X", "X", "X", "X", "On Request"] },
    { name: "Facebook", features: ["✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "On Request", "On Request", "On Request"] },
    { name: "Instagram", features: ["✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "On Request", "On Request", "On Request"] },
    { name: "X (Twitter)", features: ["✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "On Request", "On Request", "On Request", "X", "X"] },
    { name: "LinkedIn", features: ["✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "X", "X", "X"] },
    { name: "YouTube", features: ["✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "X", "X", "On Request"] }
  ]

  const smoServices = [
    "Account & Page Creation", "Page Design", "Optimization", "Increasing page followers (Organically)",
    "Content Strategy", "Content Creation", "Weekly 3 Image Posting", "Weekly 1 Video Posting",
    "Audience Targeting", "Hashtag strategy", "Event Creation", "Promotion", "Social Media Ads"
  ]

  const smoPackages: SMOPackage[] = pricingType === 'domestic'
    ? [
      { name: "Start Up", services: "Pick Any 3", price: "15,000", original: "30,000", gst: "17,700" },
      { name: "Business", services: "Pick Any 4", price: "20,000", original: "40,000", gst: "23,600" },
      { name: "Corporate", services: "Pick Any 5", price: "25,000", original: "50,000", gst: "29,500" }
    ]
    : [
      { name: "START-UP", services: "Pick Any 3", price: "400", original: "400" },
      { name: "BUSINESS", services: "Pick Any 4", price: "500", original: "500" },
      { name: "CORPORATE", services: "Pick Any 5", price: "600", original: "600" }
    ]

  return (
    <main className="min-h-screen bg-[#181818] overflow-x-hidden selection:bg-[#DBE3E9] selection:text-[#181818]">
      <Header />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-20 relative border-b border-[#DBE3E9]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="md:w-2/3"
          >
            <span className="text-[#DBE3E9] text-[10px] font-normal tracking-[0.4em] mb-4 block">BRAND MANAGEMENT / DIGITAL MARKETING</span>
            <h1 className="text-6xl md:text-9xl font-normal text-[#DBE3E9] tracking-tighter leading-none italic mb-8 uppercase">
              DIGITAL <br /> <span className="opacity-40">MARKETING</span>
            </h1>
            <p className="text-[#DBE3E9]/70 text-[10px] font-normal leading-relaxed max-w-2xl tracking-widest border-l-2 border-[#DBE3E9] pl-8">
              As a part of Brand Management, Digital Marketing place a major role by providing data-driven digital marketing solutions that increase conversions, engagement, and visibility of brand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 px-6 md:px-20 bg-[#DBE3E9]/5">
        <div className="max-w-7xl mx-auto space-y-32">
          <div className="flex flex-col md:flex-row gap-20">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-normal text-[#DBE3E9] tracking-tighter italic leading-none sticky top-40 mb-12">
                WHAT WE DO <br /> <span className="opacity-40">WHY WITH MMS</span>
              </h2>
            </div>
            <div className="md:w-1/2 space-y-8">
              <p className="text-[#DBE3E9]/80 text-sm font-normal leading-relaxed tracking-widest">
                Over many years of hand on industry experience and dedicated experienced team, we are committed to delivering a refined, strategic approach tailored to meet the evolving demands of our client business.
              </p>
              <p className="text-[#DBE3E9]/50 text-[11px] font-normal leading-relaxed tracking-[0.2em] border-l-2 border-[#DBE3E9] pl-8">
                In today's rapidly evolving digital landscape, marketing has become a pivotal force driving business success. At mms, we focus on providing efficient and impactful results by leveraging proven internet marketing strategies and techniques to help our client stay ahead of the competition.
              </p>
            </div>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16 border-t border-[#DBE3E9]/10 pt-20">
            {[
              { id: "01", title: "INCREASE BRAND AWARENESS", desc: "Digital marketing helps businesses increase, reach and create awareness globally or local audience through platforms like social media, search engines, and display advertising." },
              { id: "02", title: "DRIVE LEAD GENERATION & WEBSITE TRAFFIC", desc: "SEO, content marketing, and paid search advertising aim to attract more visitors. More traffic leads to more opportunities for conversions through targeted campaigns." },
              { id: "03", title: "TARGET THE RIGHT AUDIENCE", desc: "Precise targeting based on demographics, behaviour, interests, and location ensures messages are delivered to the right people." },
              { id: "04", title: "REPUTATION MANAGEMENT", desc: "Manage online reputation by monitoring reviews and responding to feedback, boosting trust and credibility." },
              { id: "05", title: "MEASURE & ANALYSE PERFORMANCE", desc: "Valuable data and analytics measure performance in real-time to make data-driven decisions." },
              { id: "06", title: "IMPROVE CUSTOMER EXPERIENCE", desc: "Personalized email marketing, targeted content, and tailored recommendations enhance the overall experience." },
              { id: "07", title: "STAY COMPETITIVE IN THE MARKET", desc: "In today’s digital-first world, businesses need to establish an online presence. Digital marketing helps stay ahead by maintaining visibility and optimized offerings." }
            ].map((pillar, i) => (
              <div key={i} className={`group relative ${i === 6 ? 'md:col-span-2' : ''}`}>
                <span className="text-[120px] font-normal text-[#DBE3E9] opacity-10 absolute -top-16 -left-8 pointer-events-none group-hover:opacity-20 transition-opacity">{pillar.id}</span>
                <h3 className="text-[#DBE3E9] text-2xl font-normal italic mb-4 relative z-10">{pillar.title}</h3>
                <p className={`text-[#DBE3E9]/50 text-xs font-normal leading-relaxed tracking-tight ${i === 6 ? 'max-w-2xl' : 'max-w-sm'}`}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section Wrapper */}
      <section className="py-24 px-6 md:px-20 bg-[#DBE3E9] text-[#181818]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-5xl md:text-8xl font-normal tracking-tighter italic mb-4 leading-none">SEO PLANS</h2>
            <p className="text-[10px] font-normal tracking-[0.5em] opacity-60">Search Engine Optimisation</p>
          </div>

          {/* Currency Switcher - Positioned Above SEO Header */}
          <div className="flex justify-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="bg-[#181818]/10 p-1.5 rounded-full inline-flex items-center gap-1 shadow-2xl border border-black/10"
            >
              <button
                onClick={() => setPricingType('domestic')}
                className={`flex items-center gap-3 px-8 py-3 rounded-full text-[10px] font-normal tracking-[0.2em] transition-all duration-500 ${pricingType === 'domestic'
                  ? 'bg-black text-[#DBE3E9] shadow-lg scale-105'
                  : 'text-black/40 hover:text-black/80'
                  }`}
              >
                <CreditCard size={14} />
                Domestic (INR)
              </button>
              <button
                onClick={() => setPricingType('international')}
                className={`flex items-center gap-3 px-8 py-3 rounded-full text-[10px] font-normal tracking-[0.2em] transition-all duration-500 ${pricingType === 'international'
                  ? 'bg-black text-[#DBE3E9] shadow-lg scale-105'
                  : 'text-black/40 hover:text-black/80'
                  }`}
              >
                <Globe size={14} />
                International (USD)
              </button>
            </motion.div>
          </div>



          <AnimatePresence mode="wait">
            <motion.div
              key={pricingType}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="overflow-x-auto mb-32"
            >
              <table className="w-full border-collapse border-y-4 border-black">
                <thead>
                  <tr className="text-left bg-black text-[#DBE3E9]">
                    <th className="py-8 px-6 text-[10px] font-normal tracking-[0.3em]">Project Code</th>
                    {currentSeoPlans.map((plan, i) => (
                      <th key={i} className="py-8 px-6 text-center border-l border-[#DBE3E9]/20">
                        <span className="block text-2xl italic font-normal uppercase">{plan.name}</span>
                        <span className="block text-[8px] opacity-60 mt-1 uppercase">Project Cost in {pricingType === 'domestic' ? 'INR' : 'USD $'}</span>
                        <span className="block text-xl font-normal">
                          {pricingType === 'domestic' ? `₹${plan.discount}` : `$${plan.price}`} / Month
                          {pricingType === 'domestic' && <span className="line-through opacity-30 text-xs ml-2">₹{plan.price}</span>}
                        </span>
                        {pricingType === 'domestic' && plan.priceWithGst && (
                          <div className="mt-4 px-4 py-2 bg-[#DBE3E9] text-black rounded-xl border border-black/20 shadow-inner">
                            <span className="block text-[8px] font-normal tracking-[0.2em] opacity-40 mb-0.5">Price + 18% GST</span>
                            <span className="block text-lg font-normal leading-none italic uppercase">
                              ₹{plan.priceWithGst}
                            </span>
                          </div>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/10">
                  {seoFeatures.map((feature, fIndex) => (
                    <tr
                      key={fIndex}
                      onClick={() => setActiveRow(activeRow === fIndex ? null : fIndex)}
                      className={`group cursor-pointer transition-all duration-300 ${activeRow === fIndex
                        ? 'bg-black text-[#DBE3E9]'
                        : 'hover:bg-black/5'
                        }`}
                    >
                      <td className="py-5 px-6 font-normal italic text-xs tracking-tight transition-transform duration-300 group-hover:translate-x-2">
                        {feature}
                      </td>
                      {currentSeoPlans.map((plan, pIndex) => (
                        <td key={pIndex} className="py-5 px-6 border-l border-black/10 text-center">
                          <span className={`${plan.features[fIndex] === "✓" || plan.features[fIndex] === "Yes" || plan.features[fIndex] === "✓"
                            ? "text-green-700 font-normal"
                            : plan.features[fIndex] === "X" || plan.features[fIndex] === false
                              ? (activeRow === fIndex ? "text-[#DBE3E9]/20" : "text-red-700 opacity-20")
                              : (activeRow === fIndex ? "bg-[#DBE3E9]/10 text-[#DBE3E9]" : "bg-black/10 text-black px-3 py-1 rounded text-[10px] font-normal uppercase")
                            }`}>
                            {plan.features[fIndex] === true || plan.features[fIndex] === "Yes" || plan.features[fIndex] === "✓" ? <Check size={18} className="mx-auto" /> :
                              plan.features[fIndex] === false || plan.features[fIndex] === "X" ? <X size={18} className="mx-auto" /> :
                                plan.features[fIndex]}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </AnimatePresence>

          {/* SMO Section */}
          <div className="flex justify-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="bg-[#181818]/10 p-1.5 rounded-full inline-flex items-center gap-1 shadow-2xl border border-black/10"
            >
              <button
                onClick={() => setPricingType('domestic')}
                className={`flex items-center gap-3 px-8 py-3 rounded-full text-[10px] font-normal tracking-[0.2em] transition-all duration-500 ${pricingType === 'domestic'
                  ? 'bg-black text-[#DBE3E9] shadow-lg scale-105'
                  : 'text-black/40 hover:text-black/80'
                  }`}
              >
                <CreditCard size={14} />
                Domestic (INR)
              </button>
              <button
                onClick={() => setPricingType('international')}
                className={`flex items-center gap-3 px-8 py-3 rounded-full text-[10px] font-normal tracking-[0.2em] transition-all duration-500 ${pricingType === 'international'
                  ? 'bg-black text-[#DBE3E9] shadow-lg scale-105'
                  : 'text-black/40 hover:text-black/80'
                  }`}
              >
                <Globe size={14} />
                International (USD)
              </button>
            </motion.div>
          </div>
          <div className="mb-20 text-center">
            <h2 className="text-5xl md:text-8xl font-normal tracking-tighter italic mb-4 leading-none">SMO PLANS</h2>
            <p className="text-[10px] font-normal tracking-[0.5em] opacity-60">Social Media Optimisation</p>
          </div>

          <div className="overflow-x-auto mb-20 text-[#181818]">
            <table className="w-full border-collapse border-y-4 border-black border-t-0">
              <thead>
                <tr className="text-left bg-black text-[#DBE3E9]">
                  <th className="py-8 px-6 text-[10px] font-normal tracking-[0.3em]">Platforms / Services</th>
                  {smoDomesticPlatforms.map((platform, i) => (
                    <th key={i} className="py-8 px-6 text-center border-l border-[#DBE3E9]/20">
                      <span className="block text-[10px] italic font-normal uppercase">{platform.name}{platform.name === 'Google' && pricingType === 'international' ? ' +' : ''}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10">
                {smoServices.map((service, sIndex) => (
                  <tr
                    key={sIndex}
                    onClick={() => setActiveSmoRow(activeSmoRow === sIndex ? null : sIndex)}
                    className={`group cursor-pointer transition-all duration-300 ${activeSmoRow === sIndex
                      ? 'bg-black text-[#DBE3E9]'
                      : 'hover:bg-black/5'
                      }`}
                  >
                    <td className="py-5 px-6 font-normal italic text-xs tracking-tight transition-transform duration-300 group-hover:translate-x-2">
                      {service}
                    </td>
                    {smoDomesticPlatforms.map((platform, pIndex) => (
                      <td key={pIndex} className="py-5 px-6 border-l border-black/10 text-center">
                        <span className={`${platform.features[sIndex] === "✓"
                          ? "text-green-700 font-normal"
                          : platform.features[sIndex] === "X"
                            ? (activeSmoRow === sIndex ? "text-[#DBE3E9]/20" : "text-red-700 opacity-20")
                            : (activeSmoRow === sIndex ? "bg-[#DBE3E9]/10 text-[#DBE3E9]" : "bg-black/10 text-black px-3 py-1 rounded text-[10px] font-normal uppercase")
                          }`}>
                          {platform.features[sIndex] === "✓" ? <Check size={18} className="mx-auto" /> :
                            platform.features[sIndex] === "X" ? <X size={18} className="mx-auto" /> :
                              platform.features[sIndex]}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Packages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {smoPackages.map((pkg, i) => (
              <div key={i} className="p-10 border-4 border-black rounded-[3rem] flex flex-col items-center text-center group hover:bg-black hover:text-[#DBE3E9] transition-all duration-500">
                <span className="text-[10px] font-normal tracking-[0.4em] opacity-40 mb-2">{pkg.name}</span>
                <p className="text-2xl font-normal italic mb-6 tracking-tighter">{pkg.services}</p>
                <div className="w-12 h-px bg-black group-hover:bg-[#DBE3E9] mb-6 opacity-20" />
                <p className="text-4xl font-normal tracking-tighter">
                  {pricingType === 'domestic' ? `₹${pkg.price}` : `$${pkg.price}`}
                  <span className="text-xs opacity-40 ml-2">/ MONTH</span>
                </p>
                {pricingType === 'domestic' && (
                  <div className="mt-4 px-6 py-2 bg-black text-[#DBE3E9] rounded-xl border border-[#DBE3E9]/20 shadow-xl">
                    <span className="block text-[8px] font-normal tracking-[0.2em] opacity-40 mb-0.5">Price + 18% GST</span>
                    <span className="block text-lg font-normal leading-none italic uppercase">
                      ₹{pkg.gst}
                    </span>
                    {pkg.original !== pkg.price && (
                      <span className="text-[10px] line-through opacity-30 italic block mt-1">Was ₹{pkg.original}</span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {pricingType === 'international' && (
            <div className="mt-16 text-center">
              <p className="text-xl font-normal italic tracking-tighter text-black border-2 border-black inline-block px-12 py-4 rounded-full">
                Get DIGITAL MARKETING SERVICE (SEO+SMO) @ FLAT 15% DISCOUNT
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Terms and Conditions */}
      <section className="py-24 px-6 md:px-20 border-t border-[#DBE3E9]/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3">
            <h2 className="text-3xl font-normal text-[#DBE3E9] italic tracking-tighter">Terms & <br /> <span className="opacity-40">Guidelines</span></h2>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { icon: <Zap size={20} />, text: pricingType === 'domestic' ? "Minimum project signup will be for 6 Months" : "Minimum Project signup will be for 6 Months" },
              { icon: <Award size={20} />, text: pricingType === 'domestic' ? "Initial payment to be made for 2 months" : "Initial Payment to be made for 2 Months" },
              { icon: <ArrowRight size={20} />, text: pricingType === 'domestic' ? "Starting of project based on pro-rata basis" : "Monthly Payment to be made in Advance on or before 5th of Every month" },
              { icon: <Check size={20} />, text: pricingType === 'domestic' ? "Monthly payment on or before 5th of every month" : "Meta Ad's included to generate enquires / walk-in's" }
            ].map((term, i) => (
              <div key={i} className="flex gap-4 items-start border-l border-[#DBE3E9]/20 pl-6 pb-6 hover:border-[#DBE3E9] transition-colors">
                <span className="text-[#DBE3E9] flex-shrink-0">{term.icon}</span>
                <p className="text-[10px] font-normal tracking-widest text-[#DBE3E9]/60 leading-relaxed">{term.text}</p>
              </div>
            ))}
            <div className="col-span-1 sm:col-span-2 p-8 bg-[#DBE3E9]/5 border border-[#DBE3E9]/10 rounded-2xl">
              <p className="text-[10px] font-normal tracking-widest text-[#DBE3E9] leading-relaxed">
                <span className="opacity-40 block mb-2 font-normal italic text-sm">IMPORTANT NOTICE</span>
                {pricingType === 'domestic'
                  ? "All Meta, SEO, Google Ad’s will be based on client requirement and budget with a service charge of 20% on the ad budget."
                  : "Googe Ads are part of package to ensure enquires / walk-in's are generated from 2nd month."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


