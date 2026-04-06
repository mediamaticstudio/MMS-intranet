'use client'

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/sections/Footer"
import { motion, AnimatePresence } from "framer-motion"
import {
   Layout, Search, Users, FileText, Globe, ArrowRight,
   DollarSign, CreditCard, LayoutGrid, PenTool, Megaphone, Zap, Server, Shield, CheckCircle2
} from "lucide-react"

export default function PricingPage() {
   const [pricingType, setPricingType] = useState<'domestic' | 'international'>('domestic')
   const [activeTab, setActiveTab] = useState("content")
   const [activeRow, setActiveRow] = useState<number | null>(null)

   /* ---------------- DATA ---------------- */

   // 1. Content Management
   const contentPackages = {
      domestic: [
         { name: "Description / Product Description", magnitude: "100 Words", price: "Rs.200", priceWithGst: "Rs.236" },
         { name: "Article / Blog / Guest Post Content", magnitude: "500 Words", price: "Rs.1,000", priceWithGst: "Rs.1,180" },
         { name: "SEO Content", magnitude: "500 Words", price: "Rs.1,000", priceWithGst: "Rs.1,180" },
         { name: "Social Media Content", magnitude: "500 Words", price: "Rs.1,000", priceWithGst: "Rs.1,180" },
         { name: "Copywriting", magnitude: "500 Words", price: "Rs.1,000", priceWithGst: "Rs.1,180" },
         { name: "Technical Writing", magnitude: "500 Words", price: "Rs.2,000", priceWithGst: "Rs.2,360" },
         { name: "Website Content", magnitude: "500 Words", price: "Rs.2,000", priceWithGst: "Rs.2,360" },
         { name: "Proof Reading", magnitude: "500 Words", price: "Rs.150", priceWithGst: "Rs.177" },
         { name: "Re-writing", magnitude: "500 Words", price: "Rs.1,000", priceWithGst: "Rs.1,180" },
         { name: "Advertising & Sales Content", magnitude: "100 Words", price: "Rs.200", priceWithGst: "Rs.236" },
         { name: "Marketing & Branding Content", magnitude: "500 Words", price: "Rs.1,000", priceWithGst: "Rs.1,180" },
         { name: "Press Release", magnitude: "500 Words", price: "Rs.2,000", priceWithGst: "Rs.2,360" },
         { name: "Academic Writing", magnitude: "500 Words", price: "Rs.2,000", priceWithGst: "Rs.2,360" },
         { name: "Company Presentation & Design", magnitude: "10 Slides", price: "Rs.12,000", priceWithGst: "Rs.14,160" }
      ],
      international: [
         { name: "Description / Product Description", magnitude: "100 Words", price: "$10" },
         { name: "Article / Blog / Guest Post Content", magnitude: "500 Words", price: "$50" },
         { name: "SEO Content", magnitude: "500 Words", price: "$100" },
         { name: "Social Media Content", magnitude: "500 Words", price: "$50" },
         { name: "Copywriting", magnitude: "500 Words", price: "$50" },
         { name: "Technical Writing", magnitude: "500 Words", price: "$100" },
         { name: "Website Content", magnitude: "500 Words", price: "$100" },
         { name: "Proof Reading", magnitude: "500 Words", price: "$30" },
         { name: "Re-writing", magnitude: "500 Words", price: "$50" },
         { name: "Advertising & Sales Content", magnitude: "100 Words", price: "$10" },
         { name: "Marketing & Branding Content", magnitude: "500 Words", price: "$10" },
         { name: "Press Release", magnitude: "500 Words", price: "$100" },
         { name: "Academic Writing", magnitude: "500 Words", price: "$100" },
         { name: "Company Presentation & Design", magnitude: "10 Slides", price: "$250" }
      ]
   }

   // 2. SEO (Search Engine Optimization)
   const seoPackages = {
      domestic: [
         { name: "START-UP", magnitude: "Up to 6 KW", price: "Rs.15,000", priceWithGst: "Rs.17,700" },
         { name: "BUSINESS", magnitude: "Up to 8 KW", price: "Rs.20,000", priceWithGst: "Rs.23,600" },
         { name: "CORPORATE", magnitude: "Up to 12 KW", price: "Rs.25,000", priceWithGst: "Rs.29,500" }
      ],
      international: [
         { name: "START-UP", magnitude: "Up to 6 KW", price: "$750" },
         { name: "BUSINESS", magnitude: "Up to 8 KW", price: "$900" },
         { name: "CORPORATE", magnitude: "Up to 12 KW", price: "$1,000" }
      ]
   }

   // 3. SMO (Social Media Optimization)
   const smoPackages = {
      domestic: [
         { name: "START-UP", magnitude: "Pick Any 3", price: "Rs.15,000", priceWithGst: "Rs.17,700" },
         { name: "BUSINESS", magnitude: "Pick Any 4", price: "Rs.20,000", priceWithGst: "Rs.23,600" },
         { name: "CORPORATE", magnitude: "Pick Any 5", price: "Rs.25,000", priceWithGst: "Rs.29,500" }
      ],
      international: [
         { name: "START-UP", magnitude: "Pick Any 3", price: "$400" },
         { name: "BUSINESS", magnitude: "Pick Any 4", price: "$500" },
         { name: "CORPORATE", magnitude: "Pick Any 5", price: "$600" }
      ]
   }

   // 4. Website Development
   const webPackages = {
      domestic: [
         { name: "STATIC (WK_ST-01)", magnitude: "5 Pages", price: "Rs.15,000", priceWithGst: "Rs.17,700" },
         { name: "STATIC (WK_ST-02)", magnitude: "8 Pages", price: "Rs.20,000", priceWithGst: "Rs.23,600" },
         { name: "DYNAMIC (WK_DY-01)", magnitude: "5 Pages", price: "Rs.25,000", priceWithGst: "Rs.29,500" },
         { name: "ECOMMERCE (WK_Ecom-01)", magnitude: "10 Pages", price: "Rs.45,000", priceWithGst: "Rs.53,100" }
      ],
      international: [
         { name: "STATIC (WK_ST-01)", magnitude: "5 Pages", price: "$750" },
         { name: "STATIC (WK_ST-02)", magnitude: "8 Pages", price: "$850" },
         { name: "DYNAMIC (WK_DY-01)", magnitude: "5 Pages", price: "$900" },
         { name: "ECOMMERCE (WK_Ecom-01)", magnitude: "10 Pages", price: "$1,500" }
      ]
   }

   // 5. UI/UX Design
   const uiuxPackages = {
      domestic: [
         { name: "Website Layout", magnitude: "Per Page", price: "Rs.1,500", priceWithGst: "Rs.1,770" },
         { name: "Mobile App Design", magnitude: "Per Page", price: "Rs.1,500", priceWithGst: "Rs.1,770" },
         { name: "Logo Creation", magnitude: "Per Logo", price: "Rs.4,000", priceWithGst: "Rs.4,720" },
         { name: "Social Media Design", magnitude: "Per Design", price: "Rs.750", priceWithGst: "Rs.885" }
      ],
      international: [
         { name: "Website Layout", magnitude: "Per Page", price: "$120" },
         { name: "Mobile App Design", magnitude: "Per Page", price: "$120" },
         { name: "Logo Creation", magnitude: "Per Logo", price: "$120" },
         { name: "Social Media Design", magnitude: "Per Design", price: "$30" }
      ]
   }

   // 6. Webhosting Service
   const hostingResources = {
      domestic: [
         { resource: "Disk Space Quota (GB)", basic: "5", dynamics: "10", ecommerce: "20", unlimited: "50" },
         { resource: "Monthly Bandwidth Limit (GB)", basic: "100", dynamics: "150", ecommerce: "200", unlimited: "500" },
         { resource: "Email Quota (GB)", basic: "1", dynamics: "2", ecommerce: "3", unlimited: "5" },
         { resource: "Max FTP Accounts", basic: "0", dynamics: "1", ecommerce: "2", unlimited: "Unlimited" },
         { resource: "Max Email Accounts", basic: "5", dynamics: "10", ecommerce: "15", unlimited: "Unlimited" },
         { resource: "Max SQL Databases", basic: "0", dynamics: "1", ecommerce: "2", unlimited: "Unlimited" },
         { resource: "Max Sub Domains", basic: "0", dynamics: "1", ecommerce: "2", unlimited: "Unlimited" },
         { resource: "Max Passenger Applications", basic: "0", dynamics: "2", ecommerce: "3", unlimited: "Unlimited" },
         { resource: "INR / Monthly", basic: "499", dynamics: "599", ecommerce: "899", unlimited: "2,299" },
         { resource: "INR / Year", basic: "4,999", dynamics: "6,499", ecommerce: "9,999", unlimited: "24,999" }
      ],
      international: [
         { resource: "Disk Space Quota (GB)", basic: "5", dynamics: "10", ecommerce: "20", unlimited: "50" },
         { resource: "Monthly Bandwidth Limit (GB)", basic: "100", dynamics: "150", ecommerce: "200", unlimited: "500" },
         { resource: "Email Quota (GB)", basic: "1", dynamics: "2", ecommerce: "3", unlimited: "5" },
         { resource: "Max FTP Accounts", basic: "0", dynamics: "1", ecommerce: "2", unlimited: "Unlimited" },
         { resource: "Max Email Accounts", basic: "5", dynamics: "10", ecommerce: "15", unlimited: "Unlimited" },
         { resource: "Max SQL Databases", basic: "0", dynamics: "1", ecommerce: "2", unlimited: "Unlimited" },
         { resource: "Max Sub Domains", basic: "0", dynamics: "1", ecommerce: "2", unlimited: "Unlimited" },
         { resource: "Max Passenger Applications", basic: "0", dynamics: "2", ecommerce: "3", unlimited: "Unlimited" },
         { resource: "USD / Monthly", basic: "$7", dynamics: "$9", ecommerce: "$12", unlimited: "$30" },
         { resource: "USD / Year", basic: "$70", dynamics: "$90", ecommerce: "$120", unlimited: "$300" }
      ]
   }

   const hostingSpecs = [
      "Advanced NVMe Server storage type",
      "4 Core CPU",
      "8GB RAM",
      "Guaranteed & Consistent VPS Hosting",
      "Operates in Complete isolation Security",
      "Alma LINUX 9 operating System"
   ]

   const hostingBenefits = [
      "Get's high traffic on websites",
      "Server setup & configuration",
      "Website Setup & Migration",
      "Application Setup & Configuration",
      "Regular security & Disk space audit",
      "99.99% Uptime",
      "Proactive Monitoring",
      "Regular back-up's",
      "24/7 – Phone, Chat & Email Support"
   ]

   // 7. Studio & Media (New)
   const videoProduction = [
      {
         plan: "REGULAR PLAN / DAY SHOOT",
         features: [
            "Basic preproduction",
            "Professional crew",
            "Advanced Camera, Equipments & Systems",
            "Canon / Sony Lenses as per requirement",
            "Outdoor & Indoor lights as per shoot requirement",
            "Professional video editing and licensed music",
            "Licensed music and sound mastering (Inhouse - Studio)",
            "Sound recordist",
            "Two week of post-production (Maximum three revisions)",
            "Final video duration up to 2 minutes"
         ],
         price: "1,00,000"
      },
      {
         plan: "BUSINESS PLAN / DAY SHOOT",
         features: [
            "Detailed preproduction and voiceover script",
            "Location scouting prior to the shoot",
            "Highly experienced crew",
            "Canon / Sony Lenses as per requirement",
            "Outdoor & Indoor lights as per shoot requirement",
            "Professional LED lighting",
            "Dual camera interview setup",
            "Professional editing",
            "Color grading in DaVinci Resolve",
            "Licensed music and sound mastering (Inhouse - Studio)",
            "Dedicated sound recordist",
            "Two weeks of post-production (Maximum three revisions)",
            "Final video duration up to 3 minutes"
         ],
         price: "2,00,000"
      },
      {
         plan: "PREMIUM PLAN / DAY SHOOT",
         features: [
            "Detailed preproduction and voiceover script",
            "Location scouting prior to the shoot",
            "Highly experienced crew",
            "Canon / Sony Lenses as per requirement",
            "Outdoor & Indoor lights as per shoot requirement",
            "Professional LED lighting",
            "Dual camera interview setup",
            "Professional editing",
            "Advanced lighting setups and crew",
            "Makeup artist and stylist",
            "Advanced color grading in DaVinci Resolve",
            "Premium music and AI sound mastering (Inhouse - Studio)",
            "Dedicated sound recordist with professional cinema equipment",
            "Final video duration up to 5 minutes"
         ],
         price: "3,50,000"
      }
   ]

   const productPhotography = [
      { range: "< 10 Products", white: "1,000", creative: "1,500" },
      { range: "10 - 25 Products", white: "750", creative: "1,250" },
      { range: "26 - 50 Products", white: "625", creative: "1,100" },
      { range: "> 50 Products", white: "500", creative: "1,000" }
   ]

   const videoReels = [
      {
         type: "WITH MODELS",
         details: ["30 Videos", "15 Seconds each"],
         price: "1,75,000",
         additional: "1,00,000"
      },
      {
         type: "WITHOUT MODELS",
         details: ["30 Videos", "15 Seconds each"],
         price: "1,30,000",
         additional: "60,000"
      }
   ]

   const studioRental = [
      {
         plan: "Studio & Equipments",
         desc: "2 Cameras, Lights, RGB Lights, Multiple colour Backdrop screens, Mics, Power Backups, Parking",
         hr: "1,750",
         tenHr: "15,000"
      },
      {
         plan: "Studio & Equipments with Videographer",
         desc: "2 Cameras, Lights, RGB Lights, Multiple colour Backdrop screens, Mics, Videographer, Power Backups, Parking",
         hr: "2,000",
         tenHr: "18,000"
      },
      {
         plan: "Concept to Shoot",
         desc: "Concept Creation, Script Writing, 2 Cameras, Lights, RGB Lights, Multiple colour Backdrop screens, Mics, Videographer, Power Backups, Parking",
         hr: "2,500",
         tenHr: "22,500"
      },
      {
         plan: "Concept to Editing",
         desc: "Concept Creation, Script Writing, Editing, 2 Cameras, Lights, RGB Lights, Multiple colour Backdrop screens, Mics, Videographer, Power Backups, Parking",
         hr: "3,250",
         tenHr: "30,000"
      }
   ]

   const getCurrentData = () => {
      switch (activeTab) {
         case "content": return contentPackages[pricingType]
         case "seo": return seoPackages[pricingType]
         case "smo": return smoPackages[pricingType]
         case "web": return webPackages[pricingType]
         case "design": return uiuxPackages[pricingType]
         case "hosting": return hostingResources[pricingType]
         case "studio": return [] // Handled separately
         default: return []
      }
   }

   const currentData = getCurrentData()

   return (
      <main className="min-h-screen bg-[#181818] overflow-x-hidden selection:bg-[#FDE68B] selection:text-[#181818]">
         <Header />

         {/* Hero Section */}
         <section className="pt-40 pb-20 px-6 md:px-20 relative border-b border-[#FDE68B]/10">
            <div className="max-w-7xl mx-auto text-center md:text-left">
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="mb-12"
               >
                  <span className="text-[#FDE68B] text-[10px] font-black tracking-[0.4em] mb-4 block">PRICING PLANS</span>
                  <h1 className="text-5xl md:text-8xl font-black text-[#FDE68B] tracking-tighter leading-none italic mb-8 uppercase">
                     TRANSPARENT <br /> <span className="opacity-40">PRICING</span>
                  </h1>
                  <p className="text-[#FDE68B]/70 text-[10px] font-black leading-relaxed max-w-2xl tracking-widest border-l-2 border-[#FDE68B] pl-8 mx-auto md:mx-0">
                     Choose the perfect plan for your business growth. We offer flexible pricing models for content management, digital marketing, website development, design, and studio services.
                  </p>
               </motion.div>
            </div>
         </section>

         {/* Tabs & Currency Toggle Section */}
         <section className="py-12 px-6 md:px-20 sticky top-20 z-30 bg-[#181818]/80 backdrop-blur-md border-b border-[#FDE68B]/10">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">

               {/* Service Tabs */}
               <div className="flex flex-wrap justify-center gap-2">
                  {[
                     { id: "content", label: "Content", icon: <PenTool size={14} /> },
                     { id: "seo", label: "SEO", icon: <Search size={14} /> },
                     { id: "smo", label: "SMO", icon: <Megaphone size={14} /> },
                     { id: "web", label: "Website", icon: <LayoutGrid size={14} /> },
                     { id: "design", label: "UI/UX", icon: <Zap size={14} /> },
                     { id: "hosting", label: "Hosting", icon: <Server size={14} /> },
                     { id: "studio", label: "Studio", icon: <Layout size={14} /> },
                  ].map(tab => (
                     <button
                        key={tab.id}
                        onClick={() => {
                           setActiveTab(tab.id)
                           setActiveRow(null)
                           // If switching to Studio, force INR (optional, but requested for display)
                           if (tab.id === "studio") setPricingType('domestic')
                        }}
                        className={`flex items-center gap-3 px-6 py-3 rounded-full text-[10px] font-black tracking-[0.2em] transition-all duration-300 ${activeTab === tab.id
                              ? 'bg-[#FDE68B] text-[#181818]'
                              : 'bg-[#FDE68B]/5 text-[#FDE68B]/60 hover:text-[#FDE68B] border border-[#FDE68B]/10'
                           }`}
                     >
                        {tab.icon}
                        {tab.label}
                     </button>
                  ))}
               </div>

               {/* Currency Toggle */}
               <div className={`bg-[#181818] p-1.5 rounded-full flex items-center gap-1 border border-[#FDE68B]/10 shadow-2xl transition-opacity duration-300 ${activeTab === 'studio' ? 'opacity-20 pointer-events-none' : 'opacity-100'}`}>
                  <button
                     onClick={() => {
                        setPricingType('domestic')
                        setActiveRow(null)
                     }}
                     className={`flex items-center gap-3 px-8 py-3 rounded-full text-[10px] font-black tracking-[0.2em] transition-all duration-500 ${pricingType === 'domestic'
                           ? 'bg-[#FDE68B] text-[#181818] shadow-lg scale-105'
                           : 'text-[#FDE68B]/40 hover:text-[#FDE68B]/80'
                        }`}
                  >
                     <CreditCard size={14} />
                     INR
                  </button>
                  <button
                     onClick={() => {
                        setPricingType('international')
                        setActiveRow(null)
                     }}
                     className={`flex items-center gap-3 px-8 py-3 rounded-full text-[10px] font-black tracking-[0.2em] transition-all duration-500 ${pricingType === 'international'
                           ? 'bg-[#FDE68B] text-[#181818] shadow-lg scale-105'
                           : 'text-[#FDE68B]/40 hover:text-[#FDE68B]/80'
                        }`}
                  >
                     <Globe size={14} />
                     USD
                  </button>
               </div>
            </div>
         </section>

         {/* Pricing Table Section */}
         <section className="py-24 px-6 md:px-20 bg-[#FDE68B]/5">
            <div className="max-w-7xl mx-auto">
               <div className="bg-[#FDE68B] rounded-[3rem] p-8 md:p-12 shadow-2xl overflow-hidden border border-white/20">
                  <div className="relative">
                     <AnimatePresence mode="wait">
                        <motion.div
                           key={`${activeTab}-${pricingType}`}
                           initial={{ opacity: 0, x: 20 }}
                           animate={{ opacity: 1, x: 0 }}
                           exit={{ opacity: 0, x: -20 }}
                           transition={{ duration: 0.4 }}
                           className="rounded-2xl border-2 border-[#181818]/10 overflow-hidden"
                        >
                           {activeTab === "studio" ? (
                              <div className="space-y-24 py-12 px-4">
                                 {/* Video Production Section */}
                                 <section>
                                    <div className="text-center mb-12">
                                       <h3 className="text-4xl md:text-6xl font-black text-[#181818] italic tracking-tighter mb-4">VIDEO PRODUCTION</h3>
                                       <p className="text-[#181818]/60 text-xs font-bold tracking-widest">Corporate | Industrial | Product | Advertising | Educational Institutes | Branding | Promotion</p>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                       {videoProduction.map((item, idx) => (
                                          <div key={idx} className="bg-[#181818] text-[#FDE68B] p-8 rounded-[2rem] flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-500">
                                             <div>
                                                <h4 className="text-xl font-black italic mb-8 border-b border-[#FDE68B]/20 pb-4">{item.plan}</h4>
                                                <ul className="space-y-4 mb-12">
                                                   {item.features.map((feature, fIdx) => (
                                                      <li key={fIdx} className="text-[10px] font-bold tracking-wider flex items-start gap-3">
                                                         <div className="w-1.5 h-1.5 rounded-full bg-[#FDE68B] mt-1 shrink-0" />
                                                         {feature}
                                                      </li>
                                                   ))}
                                                </ul>
                                             </div>
                                             <div className="bg-[#FDE68B] text-[#181818] p-6 rounded-2xl text-center">
                                                <span className="block text-[10px] font-black tracking-widest mb-1">TOTAL QUOTE</span>
                                                <span className="text-2xl font-black italic">Rs.{item.price} /- PER DAY</span>
                                             </div>
                                          </div>
                                       ))}
                                    </div>
                                 </section>

                                 {/* Product Photography Section */}
                                 <section>
                                    <div className="text-center mb-12">
                                       <h3 className="text-4xl md:text-5xl font-black text-[#181818] italic tracking-tighter mb-4">PRODUCT PHOTOGRAPHY</h3>
                                       <p className="text-[#181818]/60 text-xs font-bold tracking-widest underline decoration-2 underline-offset-8">@5 Photos / Product</p>
                                    </div>
                                    <div className="overflow-x-auto">
                                       <table className="w-full border-separate border-spacing-4">
                                          <thead>
                                             <tr>
                                                <th className="bg-[#181818] text-[#FDE68B] p-8 rounded-2xl text-[12px] font-black tracking-widest text-left">No. of Products</th>
                                                <th className="bg-[#181818]/5 text-[#181818] p-8 rounded-2xl text-[12px] font-black tracking-widest">White Background Shoot</th>
                                                <th className="bg-[#181818]/5 text-[#181818] p-8 rounded-2xl text-[12px] font-black tracking-widest">Creative Theme Product Shoot</th>
                                             </tr>
                                          </thead>
                                          <tbody>
                                             {productPhotography.map((row, idx) => (
                                                <tr key={idx}>
                                                   <td className="bg-[#181818] text-[#FDE68B] p-8 rounded-2xl text-lg font-black italic">{row.range}</td>
                                                   <td className="bg-white/40 text-[#181818] p-8 rounded-2xl text-center text-xl font-black italic border-b-4 border-[#181818]/10">Rs.{row.white} / Product</td>
                                                   <td className="bg-white/40 text-[#181818] p-8 rounded-2xl text-center text-xl font-black italic border-b-4 border-[#181818]/10">Rs.{row.creative} / Product</td>
                                                </tr>
                                             ))}
                                          </tbody>
                                       </table>
                                    </div>
                                 </section>

                                 {/* Corporate Video Reels Section */}
                                 <section>
                                    <div className="text-center mb-12">
                                       <h3 className="text-4xl md:text-5xl font-black text-[#181818] italic tracking-tighter mb-4">CORPORATE VIDEO REELS</h3>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                                       <div className="bg-[#181818] text-[#FDE68B] p-8 rounded-3xl flex flex-col justify-center gap-6">
                                          {["UGC", "SOCIAL MEDIA REELS", "PRODUCT VIDEO SHOOT", "PERSONAL BRANDING VIDEO SHOOT"].map((type, i) => (
                                             <div key={i} className="text-lg font-black italic tracking-tighter">{type}</div>
                                          ))}
                                       </div>
                                       {videoReels.map((reel, idx) => (
                                          <div key={idx} className="bg-white/40 p-10 rounded-3xl border-b-8 border-[#181818]/10 flex flex-col justify-between group">
                                             <div>
                                                <h4 className="bg-[#181818] text-[#FDE68B] inline-block px-4 py-1 text-[10px] font-black tracking-widest mb-8 rounded-md">{reel.type}</h4>
                                                <div className="space-y-2 mb-10">
                                                   {reel.details.map((d, di) => (
                                                      <div key={di} className="text-xl font-black text-[#181818] italic">{d}</div>
                                                   ))}
                                                </div>
                                             </div>
                                             <div className="space-y-4">
                                                <div className="text-2xl font-black text-[#181818] italic">Rs.{reel.price} / DAY</div>
                                                <div className="text-[10px] font-black text-[#181818]/60 tracking-widest border-t border-[#181818]/10 pt-4">Additional day shoot @ Rs.{reel.additional}/Day</div>
                                             </div>
                                          </div>
                                       ))}
                                    </div>
                                 </section>

                                 {/* Studio Rental Cost Section */}
                                 <section>
                                    <div className="text-center mb-12">
                                       <h3 className="text-4xl md:text-5xl font-black text-[#181818] italic tracking-tighter mb-4">STUDIO RENTAL COST</h3>
                                    </div>
                                    <div className="overflow-x-auto">
                                       <table className="w-full border-separate border-spacing-y-4">
                                          <thead>
                                             <tr className="text-[#181818] text-[10px] font-black tracking-[0.4em]">
                                                <th className="p-4 text-left">Rental Plans</th>
                                                <th className="p-4 text-left">Description</th>
                                                <th className="p-4">COST / Hr.</th>
                                                <th className="p-4">COST / 10 Hrs.</th>
                                             </tr>
                                          </thead>
                                          <tbody>
                                             {studioRental.map((plan, idx) => (
                                                <tr key={idx} className="group">
                                                   <td className="bg-[#181818] text-[#FDE68B] p-8 rounded-l-3xl text-lg font-black italic max-w-[250px]">{plan.plan}</td>
                                                   <td className="bg-white/40 p-8 text-[11px] font-bold text-[#181818] leading-relaxed max-w-sm">{plan.desc}</td>
                                                   <td className="bg-white/40 p-8 text-center text-xl font-black text-[#181818] italic">{plan.hr}</td>
                                                   <td className="bg-white/40 p-8 rounded-r-3xl text-center text-xl font-black text-[#181818] italic border-r-8 border-[#181818]/10">{plan.tenHr}</td>
                                                </tr>
                                             ))}
                                          </tbody>
                                       </table>
                                    </div>
                                 </section>
                              </div>
                           ) : activeTab !== "hosting" ? (
                              <div className="overflow-x-auto max-h-[600px] overflow-y-auto custom-scrollbar">
                                 <table className="w-full border-collapse">
                                    <thead>
                                       <tr className="border-b-4 border-[#181818] text-left">
                                          <th className="sticky top-0 z-10 bg-[#FDE68B] py-8 px-6 text-[12px] font-black tracking-[0.4em] whitespace-nowrap text-[#181818]">
                                             {activeTab.toUpperCase()} PACKAGE
                                          </th>
                                          <th className="sticky top-0 z-10 bg-[#FDE68B] py-8 px-6 text-[12px] font-black tracking-[0.4em] text-center whitespace-nowrap text-[#181818]">
                                             MAGNITUDE / QUANTITY
                                          </th>
                                          <th className="sticky top-0 z-10 bg-[#FDE68B] py-8 px-6 text-[12px] font-black tracking-[0.4em] text-right whitespace-nowrap text-[#181818]">
                                             QUOTE ({pricingType === 'domestic' ? 'INR' : 'USD'})
                                          </th>
                                          {pricingType === 'domestic' && (
                                             <th className="sticky top-0 z-10 bg-[#FDE68B] py-8 px-6 text-[11px] font-black tracking-[0.3em] text-center whitespace-nowrap text-[#181818]">
                                                <div className="bg-[#181818] text-[#FDE68B] py-2.5 px-5 rounded-xl inline-block">
                                                   PRICE + 18% GST
                                                </div>
                                             </th>
                                          )}
                                       </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#181818]/10 bg-[#FDE68B]">
                                       {currentData.map((pkg: any, i: number) => (
                                          <tr
                                             key={i}
                                             onClick={() => setActiveRow(activeRow === i ? null : i)}
                                             className={`group cursor-pointer transition-all duration-300 ${activeRow === i
                                                   ? 'bg-[#181818] text-[#FDE68B]'
                                                   : 'hover:bg-[#181818]/5 text-[#181818]'
                                                }`}
                                          >
                                             <td className="py-8 px-6 font-black tracking-tight text-sm md:text-base italic transition-transform group-hover:translate-x-2">
                                                {pkg.name}
                                             </td>
                                             <td className={`py-8 px-6 text-[10px] font-black tracking-widest text-center transition-colors ${activeRow === i ? 'text-[#FDE68B]' : 'text-[#181818]'
                                                }`}>
                                                <span className={`px-5 py-2.5 rounded-xl inline-block transition-colors ${activeRow === i ? 'bg-[#FDE68B]/10' : 'bg-[#181818]/5 group-hover:bg-[#181818]/10'
                                                   }`}>
                                                   {pkg.magnitude}
                                                </span>
                                             </td>
                                             <td className="py-8 px-6 font-black text-right text-lg md:text-xl">
                                                {pkg.price}
                                             </td>
                                             {pricingType === 'domestic' && (
                                                <td className="py-8 px-6 font-black text-center text-xl md:text-2xl italic tracking-tighter">
                                                   {pkg.priceWithGst}
                                                </td>
                                             )}
                                          </tr>
                                       ))}
                                    </tbody>
                                 </table>
                              </div>
                           ) : (
                              // Hosting Comparison Table
                              <div className="overflow-x-auto max-h-[600px] overflow-y-auto custom-scrollbar">
                                 <table className="w-full border-collapse">
                                    <thead>
                                       <tr className="border-b-4 border-[#181818] text-left">
                                          <th className="sticky top-0 z-10 bg-[#FDE68B] py-8 px-6 text-[12px] font-black tracking-[0.4em] whitespace-nowrap text-[#181818]">RESOURCES</th>
                                          <th className="sticky top-0 z-10 bg-[#FDE68B] py-8 px-6 text-[12px] font-black tracking-[0.4em] text-center whitespace-nowrap text-[#181818]">BASIC</th>
                                          <th className="sticky top-0 z-10 bg-[#FDE68B] py-8 px-6 text-[12px] font-black tracking-[0.4em] text-center whitespace-nowrap text-[#181818]">DYNAMICS</th>
                                          <th className="sticky top-0 z-10 bg-[#FDE68B] py-8 px-6 text-[12px] font-black tracking-[0.4em] text-center whitespace-nowrap text-[#181818]">ECOMMERCE</th>
                                          <th className="sticky top-0 z-10 bg-[#FDE68B] py-8 px-6 text-[12px] font-black tracking-[0.4em] text-center whitespace-nowrap text-[#181818]">MMS UNLIMITED</th>
                                       </tr>
                                    </thead>
                                    <tbody className="divide-y divide-[#181818]/10 bg-[#FDE68B]">
                                       {currentData.map((row: any, i: number) => (
                                          <tr
                                             key={i}
                                             onClick={() => setActiveRow(activeRow === i ? null : i)}
                                             className={`group cursor-pointer transition-all duration-300 ${activeRow === i
                                                   ? 'bg-[#181818] text-[#FDE68B]'
                                                   : 'hover:bg-[#181818]/5 text-[#181818]'
                                                }`}
                                          >
                                             <td className="py-6 px-6 font-black tracking-tight text-xs md:text-sm italic transition-transform group-hover:translate-x-2">
                                                {row.resource}
                                             </td>
                                             <td className="py-6 px-4 text-center font-bold text-sm">{row.basic}</td>
                                             <td className="py-6 px-4 text-center font-bold text-sm">{row.dynamics}</td>
                                             <td className="py-6 px-4 text-center font-bold text-sm">{row.ecommerce}</td>
                                             <td className="py-6 px-4 text-center font-black text-sm uppercase">{row.unlimited}</td>
                                          </tr>
                                       ))}
                                    </tbody>
                                 </table>
                              </div>
                           )}
                        </motion.div>
                     </AnimatePresence>
                  </div>

                  {activeTab === "hosting" && (
                     <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 border-t-2 border-[#181818]/10 pt-12">
                        <div className="bg-[#181818]/5 p-8 rounded-3xl border border-[#181818]/5">
                           <div className="flex items-center gap-3 mb-6">
                              <div className="w-10 h-10 rounded-full bg-[#181818] flex items-center justify-center text-[#FDE68B]">
                                 <Server size={20} />
                              </div>
                              <h4 className="text-[#181818] text-xl font-black italic">Specifications</h4>
                           </div>
                           <ul className="space-y-4">
                              {hostingSpecs.map((spec, i) => (
                                 <li key={i} className="flex items-center gap-3 text-[#181818] text-sm font-bold tracking-tight">
                                    <CheckCircle2 size={16} className="text-[#181818]/40" />
                                    {spec}
                                 </li>
                              ))}
                           </ul>
                        </div>
                        <div className="bg-[#181818]/5 p-8 rounded-3xl border border-[#181818]/5">
                           <div className="flex items-center gap-3 mb-6">
                              <div className="w-10 h-10 rounded-full bg-[#181818] flex items-center justify-center text-[#FDE68B]">
                                 <Shield size={20} />
                              </div>
                              <h4 className="text-[#181818] text-xl font-black italic">Benefits</h4>
                           </div>
                           <ul className="grid grid-cols-1 gap-4">
                              {hostingBenefits.map((benefit, i) => (
                                 <li key={i} className="flex items-center gap-3 text-[#181818] text-sm font-bold tracking-tight">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#181818]" />
                                    {benefit}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  )}

                  {/* Table Footer / Info */}
                  <div className="mt-12 flex flex-col md:flex-row justify-between items-end gap-6 border-t-2 border-[#181818]/10 pt-10">
                     <div className="space-y-4">
                        <p className="text-[#181818]/40 text-[10px] font-black tracking-[0.4em]">DISCLAIMER</p>
                        <div className="text-[#181818] text-sm font-bold tracking-tight max-w-md space-y-1">
                           <p>* Prices are subject to change based on project complexity.</p>
                           <p>* GST (18%) is mandatory for all domestic transactions.</p>
                           <p>* Custom packages available on request.</p>
                        </div>
                     </div>
                     <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#181818] text-[#FDE68B] px-10 py-5 rounded-[2rem] font-black italic tracking-tighter text-lg flex items-center gap-4 group shadow-2xl"
                     >
                        Book Consultation
                        <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                     </motion.button>
                  </div>
               </div>
            </div>
         </section>

         {/* Special Offer Section */}
         <section className="py-24 px-6 md:px-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto rounded-[4rem] bg-[#FDE68B] p-12 md:p-24 relative overflow-hidden flex flex-col items-center text-center shadow-2xl">
               <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  className="z-10"
               >
                  <span className="text-[#181818] text-[12px] font-black tracking-[0.6em] mb-6 block">LAUNCH OFFER</span>
                  <h2 className="text-6xl md:text-9xl font-black text-[#181818] tracking-tighter leading-[0.8] italic mb-12 uppercase">
                     FLAT 15% <span className="opacity-40">OFF</span>
                  </h2>
                  <p className="text-[#181818] text-xl font-bold max-w-2xl mx-auto mb-12 tracking-tight">
                     Get Digital Marketing Service (SEO+SMO) @ FLAT 15% DISCOUNT for annual commitments.
                  </p>
                  <button className="bg-[#181818] text-[#FDE68B] px-16 py-6 rounded-full text-xl font-black italic tracking-widest hover:scale-105 hover:bg-black transition-all shadow-xl">
                     CLAIM OFFER NOW
                  </button>
               </motion.div>

               {/* Decorative Elements */}
               <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                  <div className="absolute inset-0 bg-[url('/bg-doodle.png')] bg-repeat opacity-20"></div>
               </div>
            </div>
         </section>

         <Footer />
      </main>
   )
}
