'use client'

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/sections/Footer"
import { motion, AnimatePresence } from "framer-motion"
import { Code, Layout, Smartphone, Palette, Globe, Layers, Zap, Check, X, ArrowRight, MousePointer2, Monitor, Cpu } from "lucide-react"

export default function WebsiteDevelopmentPage() {
   const [activeTab, setActiveTab] = useState<'static' | 'dynamic' | 'ecommerce' | 'uiux'>('static')
   const [pricingType, setPricingType] = useState<'domestic' | 'international'>('domestic')
   const [activeRow, setActiveRow] = useState<number | null>(null)

   interface WebsitePlan {
      name: string
      days: string
      price: string
      discount: string
      priceWithGst?: string
      features: string[]
   }

   interface UIUXService {
      service: string
      cost: string
      priceWithGst?: string
      qty: string
      remarks: string
   }

   const websiteFeatures = [
      "Maximum No. of Pages", "Banner Slider", "Maximum Business Email ID's", "Mobile / Tab & Desktop Responsive",
      "User Friendly Design", "Website Content", "Website Image Designing", "High Resolution Image Gallery",
      "High Resolution Video Gallery", "Contact / Enquiry Form", "WhatsApp Integration", "Live Chat",
      "Social Media Link Integration", "Google Map", "1 Year Free Domain Registration", "1 Year Free Web Hosting",
      "1 Year Free Maintenance", "1 Year Free Technical Support", "Admin Panel", "SSL Integration",
      "Payment Gateway Integration"
   ]

   const staticPlans: WebsitePlan[] = pricingType === 'domestic'
      ? [
         { name: "Plan 1", days: "10", price: "30,000", discount: "15,000", priceWithGst: "17,700", features: ["5", "3", "3", "✓", "✓", "✓", "✓", "✓", "X", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "X", "X", "X"] },
         { name: "Plan 2", days: "12", price: "35,000", discount: "17,500", priceWithGst: "20,650", features: ["8", "5", "6", "✓", "✓", "✓", "✓", "✓", "X", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "X", "X", "X"] },
         { name: "Plan 3", days: "15", price: "45,000", discount: "22,500", priceWithGst: "26,550", features: ["10", "5", "8", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "X", "X", "X"] },
         { name: "Plan 4", days: "20", price: "60,000", discount: "30,000", priceWithGst: "35,400", features: ["15", "5", "10", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "X", "X", "X"] }
      ] : [
         { name: "Plan 1", days: "10", price: "500", discount: "500", features: ["5", "3", "3", "✓", "✓", "✓", "✓", "✓", "X", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "X", "X", "X"] },
         { name: "Plan 2", days: "12", price: "650", discount: "650", features: ["8", "5", "6", "✓", "✓", "✓", "✓", "✓", "X", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "X", "X", "X"] },
         { name: "Plan 3", days: "15", price: "800", discount: "800", features: ["10", "5", "8", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "X", "X", "X"] },
         { name: "Plan 4", days: "20", price: "1000", discount: "1000", features: ["15", "5", "10", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "X", "X", "X"] }
      ]

   const dynamicPlans: WebsitePlan[] = pricingType === 'domestic'
      ? [
         { name: "Cat A - P1", days: "12", price: "40,000", discount: "20,000", priceWithGst: "23,600", features: ["5", "3", "3", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "X", "X", "X"] },
         { name: "Cat A - P2", days: "15", price: "50,000", discount: "25,000", priceWithGst: "29,500", features: ["10", "5", "6", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓"] },
         { name: "Cat A - P3", days: "20", price: "60,000", discount: "30,000", priceWithGst: "35,400", features: ["15", "5", "8", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓"] },
      ] : [
         { name: "Cat A - P1", days: "12", price: "600", discount: "600", features: ["5", "3", "3", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "X", "X", "X"] },
         { name: "Cat A - P2", days: "15", price: "800", discount: "800", features: ["10", "5", "6", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓"] },
         { name: "Cat A - P3", days: "20", price: "1000", discount: "1000", features: ["15", "5", "8", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓"] },
      ]

   const ecommercePlans: WebsitePlan[] = pricingType === 'domestic'
      ? [
         { name: "Cat B - P1", days: "20", price: "60,000", discount: "30,000", priceWithGst: "35,400", features: ["10", "5", "5", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓"] },
         { name: "Cat B - P2", days: "25", price: "75,000", discount: "37,500", priceWithGst: "44,250", features: ["20", "10", "10", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓"] }
      ] : [
         { name: "Cat B - P1", days: "20", price: "1000", discount: "1000", features: ["10", "5", "5", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓"] },
         { name: "Cat B - P2", days: "25", price: "1250", discount: "1250", features: ["20", "10", "10", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓", "✓"] }
      ]

   const uiuxData: UIUXService[] = pricingType === 'domestic'
      ? [
         { service: "Website Layout", cost: "1,500", priceWithGst: "1,770", qty: "Per Page", remarks: "-" },
         { service: "Mobile Application Design", cost: "1,500", priceWithGst: "1,770", qty: "Per Page", remarks: "-" },
         { service: "Website Landing Page", cost: "1,500", priceWithGst: "1,770", qty: "Per Page", remarks: "-" },
         { service: "Logo Creation", cost: "4,000", priceWithGst: "4,720", qty: "Per Logo", remarks: "-" },
         { service: "Banner", cost: "1,000", priceWithGst: "1,180", qty: "Per Banner", remarks: "-" },
         { service: "Business Card", cost: "1,000", priceWithGst: "1,180", qty: "Per Design", remarks: "Add on Rs.200 per Card" },
         { service: "Letterhead", cost: "1,000", priceWithGst: "1,180", qty: "Per Design", remarks: "-" },
         { service: "Flyers", cost: "750", priceWithGst: "885", qty: "Per Side", remarks: "-" },
         { service: "Catalogs", cost: "750", priceWithGst: "885", qty: "Per Side", remarks: "-" },
         { service: "Company Presentation", cost: "1,500", priceWithGst: "1,770", qty: "Per Slide", remarks: "-" },
         { service: "Social Media Designs", cost: "750", priceWithGst: "885", qty: "Per Design", remarks: "-" },
         { service: "Certificates", cost: "1,000", priceWithGst: "1,180", qty: "Per Design", remarks: "-" },
         { service: "ID-Cards", cost: "750", priceWithGst: "885", qty: "Per Design", remarks: "Add on @ $10 per Card" },
         { service: "Brochures", cost: "1,000", priceWithGst: "1,180", qty: "Per Side", remarks: "-" }
      ] : [
         { service: "Website Layout", cost: "30", qty: "Per Page", remarks: "-" },
         { service: "Mobile Application Design", cost: "30", qty: "Per Page", remarks: "-" },
         { service: "Website Landing Page", cost: "30", qty: "Per Page", remarks: "-" },
         { service: "Logo Creation", cost: "100", qty: "Per Logo", remarks: "-" },
         { service: "Banner", cost: "20", qty: "Per Banner", remarks: "-" },
         { service: "Business Card", cost: "20", qty: "Per Design", remarks: "Add on $5 per Card" },
         { service: "Letterhead", cost: "20", qty: "Per Design", remarks: "-" },
         { service: "Flyers", cost: "15", qty: "Per Side", remarks: "-" },
         { service: "Catalogs", cost: "15", qty: "Per Side", remarks: "-" },
         { service: "Company Presentation", cost: "30", qty: "Per Slide", remarks: "-" },
         { service: "Social Media Designs", cost: "15", qty: "Per Design", remarks: "-" },
         { service: "Certificates", cost: "20", qty: "Per Design", remarks: "-" },
         { service: "ID-Cards", cost: "15", qty: "Per Design", remarks: "Add on @ $10 per Card" },
         { service: "Brochures", cost: "20", qty: "Per Side", remarks: "-" }
      ]

   return (
      <main className="min-h-screen bg-[#181818] overflow-x-hidden selection:bg-[#FDE68B] selection:text-[#181818]">
         <Header />

         {/* Hero Section */}
         <section className="pt-40 pb-20 px-6 md:px-20 relative border-b border-[#FDE68B]/10 overflow-hidden">
            <div className="max-w-7xl mx-auto">
               <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
               >
                  <span className="text-[#FDE68B] text-[10px] font-black tracking-[0.4em] mb-4 block">WEB DEVELOPMENT / DESIGNING</span>
                  <h1 className="text-6xl md:text-9xl font-black text-[#FDE68B] tracking-tighter leading-none italic mb-8 uppercase">
                     WEB DEVELOPMENT
                  </h1>
                  <p className="text-[#FDE68B]/70 text-[10px] font-black leading-relaxed max-w-3xl tracking-widest border-l-2 border-[#FDE68B] pl-8">
                     Website Development / Designing transforms Digital Visions into Reality. One-Stop Digital Solution for Cutting-Edge Website Development, UI & UX Designing, Graphic Designing & Mobile Development Experiences!
                  </p>
               </motion.div>
            </div>
         </section>

         {/* Philosophy Section */}
         <section className="py-32 px-6 md:px-20 bg-[#FDE68B]/5">
            <div className="max-w-7xl mx-auto">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
                  <motion.div
                     initial={{ opacity: 0, x: -30 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="space-y-12"
                  >
                     <h2 className="text-4xl md:text-6xl font-black text-[#FDE68B] tracking-tighter leading-none italic uppercase">
                        WHAT WE DO <br /> <span className="opacity-40 italic font-black uppercase">WHY WITH MMS</span>
                     </h2>
                     <p className="text-[#FDE68B]/80 text-sm font-bold leading-relaxed tracking-widest">
                        MMS, committed to innovation, reliability, and turning digital vision into reality. We don't just create websites and apps – we build digital experiences that drive our client's business forward.
                     </p>
                  </motion.div>
                  <motion.div
                     initial={{ opacity: 0, x: 30 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="space-y-8 pt-4 md:pt-20"
                  >
                     <p className="text-[#FDE68B]/50 text-[11px] font-black leading-relaxed tracking-[0.2em] border-l-2 border-[#FDE68B] pl-8">
                        In today's digital world, a website and mobile application are game-changer for business. We are not just developers; we are digital partners for our clients and understand the pulse of the respective Industry. Website and mobile app development play a crucial role in modern business, marketing, communication, and service delivery.
                     </p>
                     <div className="pt-8">
                        <div className="flex items-center gap-4 text-[#FDE68B] group border-b border-[#FDE68B]/20 pb-4 hover:border-[#FDE68B] transition-colors cursor-default">
                           <Zap size={20} className="fill-[#FDE68B]" />
                           <span className="text-[10px] font-black tracking-widest">Creative Technology Powerhouse</span>
                        </div>
                     </div>
                  </motion.div>
               </div>
            </div>
         </section>

         {/* Pillars Section - Non Card Layout */}
         <section className="py-32 px-6 md:px-20 border-y border-[#FDE68B]/10">
            <div className="max-w-7xl mx-auto space-y-40">

               {/* Section 1 */}
               <div className="relative group">
                  <div className="flex flex-col md:flex-row gap-20 items-end">
                     <div className="md:w-1/2">
                        <span className="text-[160px] font-black text-[#FDE68B] opacity-5 absolute -top-32 -left-10 select-none">01</span>
                        <h3 className="text-4xl md:text-6xl font-black text-[#FDE68B] italic tracking-tighter mb-8 relative z-10 leading-none">BUSINESS & BRAND PRESENCE</h3>
                        <div className="space-y-12">
                           <div className="border-l-4 border-[#FDE68B] pl-8">
                              <h4 className="text-[#FDE68B] text-lg font-black mb-2 italic">Online Identity</h4>
                              <p className="text-[#FDE68B]/60 text-[11px] font-black tracking-widest">A website or app acts as a digital storefront, representing the brand globally.</p>
                           </div>
                           <div className="border-l-4 border-[#FDE68B]/20 pl-8 hover:border-[#FDE68B] transition-colors">
                              <h4 className="text-[#FDE68B] text-lg font-black mb-2 italic opacity-60 group-hover:opacity-100">Credibility & Trust</h4>
                              <p className="text-[#FDE68B]/40 text-[11px] font-black tracking-widest group-hover:text-[#FDE68B]/60">A well-designed platform builds customer trust and professionalism.</p>
                           </div>
                           <div className="border-l-4 border-[#FDE68B]/20 pl-8 hover:border-[#FDE68B] transition-colors">
                              <h4 className="text-[#FDE68B] text-lg font-black mb-2 italic opacity-60 group-hover:opacity-100">Competitive Advantage</h4>
                              <p className="text-[#FDE68B]/40 text-[11px] font-black tracking-widest group-hover:text-[#FDE68B]/60">Staying ahead by offering seamless digital experiences.</p>
                           </div>
                        </div>
                     </div>
                     <div className="md:w-1/2">
                        <div className="aspect-square bg-[#FDE68B]/5 rounded-[4rem] border border-[#FDE68B]/10 flex items-center justify-center relative overflow-hidden group-hover:border-[#FDE68B]/40 transition-all">
                           <Monitor size={200} className="text-[#FDE68B] opacity-10 group-hover:scale-110 transition-transform duration-1000" />
                           <div className="absolute inset-0 bg-gradient-to-br from-[#FDE68B]/5 to-transparent" />
                        </div>
                     </div>
                  </div>
               </div>

               {/* Section 2 */}
               <div className="relative group text-right">
                  <div className="flex flex-col md:flex-row-reverse gap-20 items-end">
                     <div className="md:w-1/2">
                        <span className="text-[160px] font-black text-[#FDE68B] opacity-5 absolute -top-32 -right-10 select-none">02</span>
                        <h3 className="text-4xl md:text-6xl font-black text-[#FDE68B] italic tracking-tighter mb-8 relative z-10 leading-none">MARKETING & ACQUISITION</h3>
                        <div className="space-y-12 text-right">
                           <div className="border-r-4 border-[#FDE68B] pr-8">
                              <h4 className="text-[#FDE68B] text-lg font-black mb-2 italic">Digital Marketing Integration</h4>
                              <p className="text-[#FDE68B]/60 text-[11px] font-black tracking-widest">Websites and apps support SEO, social media, and PPC campaigns.</p>
                           </div>
                           <div className="border-r-4 border-[#FDE68B]/20 pr-8 hover:border-[#FDE68B] transition-colors group">
                              <h4 className="text-[#FDE68B] text-lg font-black mb-2 italic opacity-60 group-hover:opacity-100">Lead Generation</h4>
                              <p className="text-[#FDE68B]/40 text-[11px] font-black tracking-widest group-hover:text-[#FDE68B]/60">Collecting customer data for marketing and sales conversions.</p>
                           </div>
                           <div className="border-r-4 border-[#FDE68B]/20 pr-8 hover:border-[#FDE68B] transition-colors group">
                              <h4 className="text-[#FDE68B] text-lg font-black mb-2 italic opacity-60 group-hover:opacity-100">Analytics & Insights</h4>
                              <p className="text-[#FDE68B]/40 text-[11px] font-black tracking-widest group-hover:text-[#FDE68B]/60">Tracking user behavior, engagement, and conversion rates.</p>
                           </div>
                        </div>
                     </div>
                     <div className="md:w-1/2">
                        <div className="aspect-square bg-[#FDE68B]/5 rounded-[4rem] border border-[#FDE68B]/10 flex items-center justify-center relative overflow-hidden group-hover:border-[#FDE68B]/40 transition-all">
                           <Cpu size={200} className="text-[#FDE68B] opacity-10 group-hover:scale-110 transition-transform duration-1000" />
                        </div>
                     </div>
                  </div>
               </div>

               {/* Section 3 & 4 Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                  <div className="space-y-12">
                     <h3 className="text-4xl font-black text-[#FDE68B] italic tracking-tighter">E-COMMERCE</h3>
                     <div className="space-y-6">
                        <p className="text-[#FDE68B] text-sm font-black tracking-tighter border-b border-[#FDE68B]/20 pb-4">01. Online Storefront (Amazon, Flipcard, Apps)</p>
                        <p className="text-[#FDE68B]/40 text-sm font-black tracking-tighter border-b border-[#FDE68B]/20 pb-4 hover:text-[#FDE68B] transition-colors">02. 24/7 Accessibility - Seamless shopping potential</p>
                     </div>
                  </div>
                  <div className="space-y-12">
                     <h3 className="text-4xl font-black text-[#FDE68B] italic tracking-tighter">ENGAGEMENT</h3>
                     <div className="space-y-6">
                        <p className="text-[#FDE68B] text-sm font-black tracking-tighter border-b border-[#FDE68B]/20 pb-4">01. Chatbots & Live Support Assistance</p>
                        <p className="text-[#FDE68B]/40 text-sm font-black tracking-tighter border-b border-[#FDE68B]/20 pb-4 hover:text-[#FDE68B] transition-colors">02. Push Notifications & Updates</p>
                        <p className="text-[#FDE68B]/40 text-sm font-black tracking-tighter border-b border-[#FDE68B]/20 pb-4 hover:text-[#FDE68B] transition-colors">03. User Reviews & Feedback Analysis</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Pricing Section Wrapper */}
         <section className="py-24 px-6 md:px-20 bg-[#FDE68B] text-[#181818]">
            <div className="max-w-7xl mx-auto">

               <div className="mb-20 text-center">
                  <h2 className="text-5xl md:text-8xl font-black tracking-tighter italic mb-4 leading-none underline decoration-4">PRICING TABLES</h2>

                  {/* Currency Switcher */}
                  <div className="flex justify-center mb-12">
                     <div className="bg-black/10 p-1.5 rounded-full flex items-center gap-1 shadow-2xl">
                        <button
                           onClick={() => setPricingType('domestic')}
                           className={`flex items-center gap-3 px-8 py-3 rounded-full text-[10px] font-black tracking-[0.2em] transition-all duration-500 ${pricingType === 'domestic'
                              ? 'bg-black text-[#FDE68B] shadow-lg scale-105'
                              : 'text-black/40 hover:text-black/80'
                              }`}
                        >
                           <Monitor size={14} />
                           Domestic (INR)
                        </button>
                        <button
                           onClick={() => setPricingType('international')}
                           className={`flex items-center gap-3 px-8 py-3 rounded-full text-[10px] font-black tracking-[0.2em] transition-all duration-500 ${pricingType === 'international'
                              ? 'bg-black text-[#FDE68B] shadow-lg scale-105'
                              : 'text-black/40 hover:text-black/80'
                              }`}
                        >
                           <Globe size={14} />
                           International (USD)
                        </button>
                     </div>
                  </div>
                  <div className="flex justify-center gap-4 mt-8">
                     <button
                        onClick={() => setActiveTab('static')}
                        className={`px-8 py-3 rounded-full text-[10px] font-black tracking-widest transition-all ${activeTab === 'static' ? 'bg-black text-[#FDE68B] scale-105 shadow-xl' : 'bg-black/5 hover:bg-black/10'}`}
                     >
                        Static Website
                     </button>
                     <button
                        onClick={() => setActiveTab('dynamic')}
                        className={`px-8 py-3 rounded-full text-[10px] font-black tracking-widest transition-all ${activeTab === 'dynamic' ? 'bg-black text-[#FDE68B] scale-105 shadow-xl' : 'bg-black/5 hover:bg-black/10'}`}
                     >
                        Dynamic Website
                     </button>
                     <button
                        onClick={() => setActiveTab('ecommerce')}
                        className={`px-8 py-3 rounded-full text-[10px] font-black tracking-widest transition-all ${activeTab === 'ecommerce' ? 'bg-black text-[#FDE68B] scale-105 shadow-xl' : 'bg-black/5 hover:bg-black/10'}`}
                     >
                        E-Commerce Website
                     </button>
                     <button
                        onClick={() => setActiveTab('uiux')}
                        className={`px-8 py-3 rounded-full text-[10px] font-black tracking-widest transition-all ${activeTab === 'uiux' ? 'bg-black text-[#FDE68B] scale-105 shadow-xl' : 'bg-black/5 hover:bg-black/10'}`}
                     >
                        UI / UX Designing
                     </button>
                  </div>
               </div>

               <AnimatePresence mode="wait">
                  <motion.div
                     key={activeTab}
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -20 }}
                     transition={{ duration: 0.5 }}
                     className="overflow-x-auto min-h-[600px]"
                  >
                     {activeTab === 'static' && (
                        <table className="w-full border-collapse">
                           <thead>
                              <tr className="bg-black text-[#FDE68B] sticky top-0 z-30 shadow-2xl">
                                 <th className="py-12 px-8 text-left text-[12px] font-black tracking-widest bg-black border-b border-[#FDE68B]/10 min-w-[250px]">
                                    <span className="opacity-60">Module / Features</span>
                                 </th>
                                 {staticPlans.map((plan, i) => (
                                    <th key={i} className="py-12 px-8 text-center border-l border-[#FDE68B]/10 bg-black border-b border-[#FDE68B]/10 min-w-[250px]">
                                       <div className="space-y-1">
                                          <span className="block text-4xl font-black italic uppercase tracking-tighter">{plan.name}</span>
                                          <span className="block text-[8px] font-black opacity-30 tracking-[0.2em] mb-4 uppercase">Total Project Cost in {pricingType === 'domestic' ? 'INR' : 'USD $'}</span>
                                          <div className="py-2">
                                             <span className="block text-5xl font-black tracking-tighter">
                                                {pricingType === 'domestic' ? '₹' : '$'}{plan.discount}
                                             </span>
                                             {pricingType === 'domestic' && <span className="block text-sm line-through opacity-20 italic font-black">₹{plan.price}</span>}
                                          </div>

                                          {pricingType === 'domestic' && plan.priceWithGst && (
                                             <div className="mt-6 px-6 py-4 bg-[#FDE68B] text-black rounded-2xl border-4 border-black/10 shadow-2xl inline-block transform hover:scale-105 transition-transform duration-300">
                                                <span className="block text-[9px] font-black tracking-[0.2em] opacity-40 mb-1 uppercase">Price + 18% GST</span>
                                                <span className="block text-3xl font-black leading-none italic uppercase tracking-tighter">
                                                   ₹{plan.priceWithGst}
                                                </span>
                                             </div>
                                          )}
                                       </div>
                                    </th>
                                 ))}
                              </tr>
                           </thead>
                           <tbody className="divide-y divide-black/10">
                              {websiteFeatures.map((feat, fIdx) => (
                                 <tr
                                    key={fIdx}
                                    onClick={() => setActiveRow(activeRow === fIdx ? null : fIdx)}
                                    className={`group cursor-pointer transition-all duration-300 ${activeRow === fIdx
                                       ? 'bg-black text-[#FDE68B]'
                                       : 'hover:bg-black/5'
                                       }`}
                                 >
                                    <td className="py-5 px-6 font-black text-[11px] italic tracking-tight transition-transform duration-300 group-hover:translate-x-2">{feat}</td>
                                    {staticPlans.map((plan, pIdx) => (
                                       <td key={pIdx} className="py-5 px-6 border-l border-black/10 text-center font-black text-xs">
                                          {plan.features[fIdx] === "✓" ? <Check className="mx-auto text-green-700" size={18} /> :
                                             plan.features[fIdx] === "X" ? <X className={`mx-auto ${activeRow === fIdx ? 'text-[#FDE68B]/20' : 'text-red-700 opacity-20'}`} size={18} /> :
                                                plan.features[fIdx]}
                                       </td>
                                    ))}
                                 </tr>
                              ))}
                              <tr className="bg-black/5">
                                 <td className="py-8 px-6 font-black italic">Working Days</td>
                                 {staticPlans.map((plan, i) => (
                                    <td key={i} className="py-8 px-6 text-center border-l border-black/10 font-black text-xl italic">{plan.days}</td>
                                 ))}
                              </tr>
                           </tbody>
                        </table>
                     )}

                     {activeTab === 'dynamic' && (
                        <table className="w-full border-collapse">
                           <thead>
                              <tr className="bg-black text-[#FDE68B] sticky top-0 z-30 shadow-2xl">
                                 <th className="py-12 px-8 text-left text-[12px] font-black tracking-widest bg-black border-b border-[#FDE68B]/10 min-w-[250px]">
                                    <span className="opacity-60">Module / Features</span>
                                 </th>
                                 {dynamicPlans.map((plan, i) => (
                                    <th key={i} className="py-12 px-8 text-center border-l border-[#FDE68B]/10 bg-black border-b border-[#FDE68B]/10 min-w-[250px]">
                                       <div className="space-y-1">
                                          <span className="block text-4xl font-black italic uppercase tracking-tighter">{plan.name}</span>
                                          <span className="block text-[8px] font-black opacity-30 tracking-[0.2em] mb-4 uppercase">Total Project Cost in {pricingType === 'domestic' ? 'INR' : 'USD $'}</span>
                                          <div className="py-2">
                                             <span className="block text-5xl font-black tracking-tighter">
                                                {pricingType === 'domestic' ? '₹' : '$'}{plan.discount}
                                             </span>
                                             {pricingType === 'domestic' && <span className="block text-sm line-through opacity-20 italic font-black">₹{plan.price}</span>}
                                          </div>

                                          {pricingType === 'domestic' && plan.priceWithGst && (
                                             <div className="mt-6 px-6 py-4 bg-[#FDE68B] text-black rounded-2xl border-4 border-black/10 shadow-2xl inline-block transform hover:scale-105 transition-transform duration-300">
                                                <span className="block text-[9px] font-black tracking-[0.2em] opacity-40 mb-1 uppercase">Price + 18% GST</span>
                                                <span className="block text-3xl font-black leading-none italic uppercase tracking-tighter">
                                                   ₹{plan.priceWithGst}
                                                </span>
                                             </div>
                                          )}
                                       </div>
                                    </th>
                                 ))}
                              </tr>
                           </thead>
                           <tbody className="divide-y divide-black/10">
                              {websiteFeatures.map((feat, fIdx) => (
                                 <tr
                                    key={fIdx}
                                    onClick={() => setActiveRow(activeRow === fIdx ? null : fIdx)}
                                    className={`group cursor-pointer transition-all duration-300 ${activeRow === fIdx
                                       ? 'bg-black text-[#FDE68B]'
                                       : 'hover:bg-black/5'
                                       }`}
                                 >
                                    <td className="py-5 px-6 font-black text-[11px] italic tracking-tight transition-transform duration-300 group-hover:translate-x-2">{feat}</td>
                                    {dynamicPlans.map((plan, pIdx) => (
                                       <td key={pIdx} className="py-5 px-6 border-l border-black/10 text-center font-black text-xs">
                                          {plan.features[fIdx] === "✓" ? <Check className="mx-auto text-green-700" size={18} /> :
                                             plan.features[fIdx] === "X" ? <X className={`mx-auto ${activeRow === fIdx ? 'text-[#FDE68B]/20' : 'text-red-700 opacity-20'}`} size={18} /> :
                                                plan.features[fIdx]}
                                       </td>
                                    ))}
                                 </tr>
                              ))}
                              <tr className="bg-black/5">
                                 <td className="py-8 px-6 font-black italic">Working Days</td>
                                 {dynamicPlans.map((plan, i) => (
                                    <td key={i} className="py-8 px-6 text-center border-l border-black/10 font-black text-xl italic">{plan.days}</td>
                                 ))}
                              </tr>
                           </tbody>
                        </table>
                     )}
                     {activeTab === 'ecommerce' && (
                        <table className="w-full border-collapse">
                           <thead>
                              <tr className="bg-black text-[#FDE68B] sticky top-0 z-30 shadow-2xl">
                                 <th className="py-12 px-8 text-left text-[12px] font-black tracking-widest bg-black border-b border-[#FDE68B]/10 min-w-[250px]">
                                    <span className="opacity-60">Module / Features</span>
                                 </th>
                                 {ecommercePlans.map((plan, i) => (
                                    <th key={i} className="py-12 px-8 text-center border-l border-[#FDE68B]/10 bg-black border-b border-[#FDE68B]/10 min-w-[250px]">
                                       <div className="space-y-1">
                                          <span className="block text-4xl font-black italic uppercase tracking-tighter">{plan.name}</span>
                                          <span className="block text-[8px] font-black opacity-30 tracking-[0.2em] mb-4 uppercase">Total Project Cost in {pricingType === 'domestic' ? 'INR' : 'USD $'}</span>
                                          <div className="py-2">
                                             <span className="block text-5xl font-black tracking-tighter">
                                                {pricingType === 'domestic' ? '₹' : '$'}{plan.discount}
                                             </span>
                                             {pricingType === 'domestic' && <span className="block text-sm line-through opacity-20 italic font-black">₹{plan.price}</span>}
                                          </div>

                                          {pricingType === 'domestic' && plan.priceWithGst && (
                                             <div className="mt-6 px-6 py-4 bg-[#FDE68B] text-black rounded-2xl border-4 border-black/10 shadow-2xl inline-block transform hover:scale-105 transition-transform duration-300">
                                                <span className="block text-[9px] font-black tracking-[0.2em] opacity-40 mb-1 uppercase">Price + 18% GST</span>
                                                <span className="block text-3xl font-black leading-none italic uppercase tracking-tighter">
                                                   ₹{plan.priceWithGst}
                                                </span>
                                             </div>
                                          )}
                                       </div>
                                    </th>
                                 ))}
                              </tr>
                           </thead>
                           <tbody className="divide-y divide-black/10">
                              {websiteFeatures.map((feat, fIdx) => (
                                 <tr
                                    key={fIdx}
                                    onClick={() => setActiveRow(activeRow === fIdx ? null : fIdx)}
                                    className={`group cursor-pointer transition-all duration-300 ${activeRow === fIdx
                                       ? 'bg-black text-[#FDE68B]'
                                       : 'hover:bg-black/5'
                                       }`}
                                 >
                                    <td className="py-5 px-6 font-black text-[11px] italic tracking-tight transition-transform duration-300 group-hover:translate-x-2">{feat}</td>
                                    {ecommercePlans.map((plan, pIdx) => (
                                       <td key={pIdx} className="py-5 px-6 border-l border-black/10 text-center font-black text-xs">
                                          {plan.features[fIdx] === "✓" ? <Check className="mx-auto text-green-700" size={18} /> :
                                             plan.features[fIdx] === "X" ? <X className={`mx-auto ${activeRow === fIdx ? 'text-[#FDE68B]/20' : 'text-red-700 opacity-20'}`} size={18} /> :
                                                plan.features[fIdx]}
                                       </td>
                                    ))}
                                 </tr>
                              ))}
                              <tr className="bg-black/5">
                                 <td className="py-8 px-6 font-black italic">Working Days</td>
                                 {ecommercePlans.map((plan, i) => (
                                    <td key={i} className="py-8 px-6 text-center border-l border-black/10 font-black text-xl italic">{plan.days}</td>
                                 ))}
                              </tr>
                           </tbody>
                        </table>
                     )}


                     {activeTab === 'uiux' && (
                        <div className="space-y-4">
                           <table className="w-full border-collapse border-y-4 border-black">
                              <thead>
                                 <tr className="bg-black text-[#FDE68B]">
                                    <th className="py-8 px-6 text-left text-[10px] font-black tracking-widest">Designing Category</th>
                                    <th className="py-8 px-6 text-center text-[10px] font-black tracking-widest border-l border-[#FDE68B]/20">Cost in {pricingType === 'domestic' ? 'INR' : 'USD $'}</th>
                                    {pricingType === 'domestic' && (
                                       <th className="py-8 px-6 text-center text-[10px] font-black tracking-widest border-l border-[#FDE68B]/20">Cost + 18% GST</th>
                                    )}
                                    <th className="py-8 px-6 text-center text-[10px] font-black tracking-widest border-l border-[#FDE68B]/20">Quantity</th>
                                    <th className="py-8 px-6 text-center text-[10px] font-black tracking-widest border-l border-[#FDE68B]/20">Remarks</th>
                                 </tr>
                              </thead>
                              <tbody className="divide-y divide-black/10">
                                 {uiuxData.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-black/5 transition-colors">
                                       <td className="py-5 px-6 font-black text-xs italic tracking-tight">{item.service}</td>
                                       <td className="py-5 px-6 border-l border-black/10 text-center font-black text-xl">{pricingType === 'domestic' ? '₹' : '$'}{item.cost}</td>
                                       {pricingType === 'domestic' && (
                                          <td className="py-5 px-6 border-l border-black/10 text-center">
                                             <div className="bg-black/5 text-black px-4 py-1.5 rounded-lg border border-black/5 inline-block min-w-[100px]">
                                                <span className="block text-[7px] font-black opacity-40 tracking-widest leading-none mb-1">Cost + 18% GST</span>
                                                <span className="block font-black text-lg italic tracking-tighter shrink-0">₹{item.priceWithGst}</span>
                                             </div>
                                          </td>
                                       )}
                                       <td className="py-5 px-6 border-l border-black/10 text-center font-black text-[10px] opacity-60 tracking-widest">{item.qty}</td>
                                       <td className="py-5 px-6 border-l border-black/10 text-center font-black text-[10px] opacity-40">{item.remarks}</td>
                                    </tr>
                                 ))}
                              </tbody>
                           </table>
                        </div>
                     )}
                  </motion.div>
               </AnimatePresence>

               <div className="mt-16 text-center">
                  <p className="text-2xl font-black italic tracking-tighter text-black border-4 border-black inline-block px-12 py-6 rounded-full">
                     50% FLAT DISCOUNT ON ALL WEBSITE PLANS
                  </p>
               </div>
            </div>
         </section>

         {/* Final Note Section */}
         <section className="py-32 px-6 md:px-20 border-t border-[#FDE68B]/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
               <div className="md:w-1/3">
                  <h2 className="text-3xl font-black text-[#FDE68B] italic tracking-tighter">Project <br /> <span className="opacity-40">Guidelines</span></h2>
               </div>
               <div className="md:w-2/3 space-y-12">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                     <div className="p-8 bg-[#FDE68B]/5 border border-[#FDE68B]/10 rounded-3xl">
                        <h4 className="text-[#FDE68B] font-black text-xs mb-4 tracking-widest">ONE-STOP SOLUTION</h4>
                        <p className="text-[#FDE68B]/40 text-[10px] font-black leading-relaxed uppercase">MMS acts as your digital partner, providing end-to-end support for cutting edge development experiences.</p>
                     </div>
                     <div className="p-8 bg-[#FDE68B]/5 border border-[#FDE68B]/10 rounded-3xl">
                        <h4 className="text-[#FDE68B] font-black text-xs mb-4 tracking-widest">INNOVATION & RELIABILITY</h4>
                        <p className="text-[#FDE68B]/40 text-[10px] font-black leading-relaxed uppercase">Committed to turning your digital vision into a reality through robust technology patterns.</p>
                     </div>
                  </div>
                  <p className="text-[#FDE68B]/60 text-[11px] font-black tracking-[0.3em] leading-relaxed max-w-2xl border-l border-[#FDE68B] pl-8">
                     Website and mobile app development play a crucial role in modern business, marketing, communication, and service delivery. They enable businesses to connect with customers, streamline operations, and drive growth.
                  </p>
               </div>
            </div>
         </section>

         <Footer />
      </main>
   )
}
