'use client'

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/sections/Footer"
import { motion, AnimatePresence } from "framer-motion"
import { Layout, Search, Users, FileText, Globe, ArrowRight, DollarSign, CreditCard } from "lucide-react"

export default function ContentManagementPage() {
  const [pricingType, setPricingType] = useState<'domestic' | 'international'>('domestic')
  const [activeRow, setActiveRow] = useState<number | null>(null)

  interface RetainerPlan {
    name: string
    pricePerMonth: string
    total: string
    priceWithGst?: string
  }

  const domesticRetainers: RetainerPlan[] = [
    { name: "Start Up", pricePerMonth: "₹15,000", total: "₹30,000", priceWithGst: "₹17,700" },
    { name: "Business", pricePerMonth: "₹20,000", total: "₹40,000", priceWithGst: "₹23,600" },
    { name: "Corporate", pricePerMonth: "₹25,000", total: "₹50,000", priceWithGst: "₹29,500" }
  ]

  const internationalRetainers: RetainerPlan[] = [
    { name: "Start Up", pricePerMonth: "$250", total: "$500" },
    { name: "Business", pricePerMonth: "$400", total: "$800" },
    { name: "Corporate", pricePerMonth: "$500", total: "$1000" }
  ]

  const currentRetainers = pricingType === 'domestic' ? domesticRetainers : internationalRetainers

  interface WritingPackage {
    name: string
    magnitude: string
    price: string
    priceWithGst?: string
  }

  const domesticPackages: WritingPackage[] = [
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
  ]

  const internationalPackages: WritingPackage[] = [
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

  const currentPackages = pricingType === 'domestic' ? domesticPackages : internationalPackages

  const tags = [
    "Description", "Product Description", "Guest Post Content",
    "SEO Content", "Article", "Blog Content",
    "Social Media Content", "Copywriting", "Technical Writing",
    "Website Content", "Proof Reading", "Re-writing",
    "Advertising & Sales Content", "Marketing & Branding Content",
    "Academic Writing", "Company Presentation", "Design", "Press Release"
  ]

  return (
    <main className="min-h-screen bg-[#181818] overflow-x-hidden selection:bg-[#DBE3E9] selection:text-[#181818]">
      <Header />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 md:px-20 relative border-b border-[#DBE3E9]/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <span className="text-[#DBE3E9] text-[10px] font-normal tracking-[0.4em] mb-4 block">SERVICES / CONTENT WRITING</span>
            <h1 className="text-5xl md:text-8xl font-normal text-[#DBE3E9] tracking-tighter leading-none italic mb-8 uppercase">
              CONTENT <br /> <span className="opacity-40">MANAGEMENT</span>
            </h1>
            <p className="text-[#DBE3E9]/70 text-[10px] font-normal leading-relaxed max-w-2xl tracking-widest border-l-2 border-[#DBE3E9] pl-8">
              We specialized in providing the best content writing service tailored to client needs. Our team of experienced writers excels in crafting high-quality, SEO friendly content, to engage social media and SEO content that will captivate your audience and drive results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 px-6 md:px-20 bg-[#DBE3E9]/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          <motion.div
            whileHover={{ y: -5 }}
            className="p-10 rounded-[2rem] bg-[#181818] border border-[#DBE3E9]/10"
          >
            <div className="w-12 h-12 rounded-full bg-[#DBE3E9] flex items-center justify-center text-[#181818] mb-6 shadow-lg shadow-[#DBE3E9]/20">
              <Layout size={24} />
            </div>
            <h3 className="text-[#DBE3E9] text-xl font-normal mb-4 italic">Consistency in Brand Voice & Style</h3>
            <p className="text-[#DBE3E9]/50 text-xs font-normal leading-relaxed tracking-tight">
              A content management ensures that all brand pages, blog posts, media follow the same brand guidelines—tone, design, and formatting—so the brand looks professional and trustworthy.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-10 rounded-[2rem] bg-[#181818] border border-[#DBE3E9]/10"
          >
            <div className="w-12 h-12 rounded-full bg-[#DBE3E9] flex items-center justify-center text-[#181818] mb-6 shadow-lg shadow-[#DBE3E9]/20">
              <Search size={24} />
            </div>
            <h3 className="text-[#DBE3E9] text-xl font-normal mb-4 italic">SEO Optimization</h3>
            <p className="text-[#DBE3E9]/50 text-xs font-normal leading-relaxed tracking-tight">
              Allow meta tags, alt text, and SEO-friendly URLs, Integrate with SEO tools and analytics which directly improves search rankings and organic traffic.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-10 rounded-[2rem] bg-[#181818] border border-[#DBE3E9]/10"
          >
            <div className="w-12 h-12 rounded-full bg-[#DBE3E9] flex items-center justify-center text-[#181818] mb-6 shadow-lg shadow-[#DBE3E9]/20">
              <Users size={24} />
            </div>
            <h3 className="text-[#DBE3E9] text-xl font-normal mb-4 italic">Client Satisfaction</h3>
            <p className="text-[#DBE3E9]/50 text-xs font-normal leading-relaxed tracking-tight">
              We emphasize client satisfaction rather than delivery !!!
            </p>
          </motion.div>

        </div>
      </section>

      {/* Monthly Retainer Section */}
      <section className="py-24 px-6 md:px-20 bg-[#181818]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#DBE3E9] text-[10px] font-normal tracking-[0.4em] mb-4 block">PREMIUM PLANS</span>
            <h2 className="text-4xl md:text-6xl font-normal text-[#DBE3E9] tracking-tighter leading-none italic uppercase">
              MONTHLY <br /> <span className="opacity-40 italic">RETAINER</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentRetainers.map((plan, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-10 rounded-[3rem] bg-[#DBE3E9]/5 border border-[#DBE3E9]/10 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-[#DBE3E9] text-2xl font-normal mb-2 italic">{plan.name}</h3>
                  <p className="text-[#DBE3E9]/40 text-[10px] font-normal tracking-widest mb-8">Project Code: {plan.name.toUpperCase()}</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <span className="text-[#DBE3E9]/40 text-[8px] font-normal tracking-[0.3em] block mb-1">Project Cost in INR</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-[#DBE3E9] text-3xl font-normal">{plan.pricePerMonth}</span>
                      <span className="text-[#DBE3E9]/40 text-xs font-normal tracking-widest">/ Month</span>
                    </div>
                    {pricingType === 'domestic' && (
                      <div className="mt-4 px-6 py-3 bg-[#DBE3E9] text-black rounded-2xl shadow-xl border border-black/10">
                        <span className="text-black/40 text-[8px] font-normal tracking-[0.3em] block mb-0.5">Price + 18% GST</span>
                        <span className="text-black text-2xl font-normal italic tracking-tighter">{plan.priceWithGst}</span>
                      </div>
                    )}
                  </div>
                  <div className="pt-4 border-t border-[#DBE3E9]/10">
                    <span className="text-[#DBE3E9] text-xl font-normal opacity-60 line-through decoration-[#DBE3E9]">{plan.total}</span>
                    <span className="text-[#DBE3E9] text-xs font-normal tracking-widest ml-3">Exclusive Offer</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="py-24 px-6 md:px-20 bg-[#DBE3E9] text-[#181818]">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 text-[#181818]">
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-normal tracking-tighter leading-none italic">
                Writing <br /> <span className="opacity-40 italic">Packages</span>
              </h2>
            </div>

            {/* Currency Switcher */}
            <div className="bg-[#181818] p-1.5 rounded-full flex items-center gap-1 shadow-2xl">
              <button
                onClick={() => setPricingType('domestic')}
                className={`flex items-center gap-3 px-8 py-3 rounded-full text-[10px] font-normal tracking-[0.2em] transition-all duration-500 ${pricingType === 'domestic'
                  ? 'bg-[#DBE3E9] text-[#181818] shadow-lg scale-105'
                  : 'text-[#DBE3E9]/40 hover:text-[#DBE3E9]/80'
                  }`}
              >
                <CreditCard size={14} />
                Domestic (INR)
              </button>
              <button
                onClick={() => setPricingType('international')}
                className={`flex items-center gap-3 px-8 py-3 rounded-full text-[10px] font-normal tracking-[0.2em] transition-all duration-500 ${pricingType === 'international'
                  ? 'bg-[#DBE3E9] text-[#181818] shadow-lg scale-105'
                  : 'text-[#DBE3E9]/40 hover:text-[#DBE3E9]/80'
                  }`}
              >
                <Globe size={14} />
                International (USD)
              </button>
            </div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={pricingType}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="overflow-x-auto max-h-[500px] overflow-y-auto custom-scrollbar border-2 border-[#181818]/5 rounded-2xl"
              >
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-4 border-[#181818] text-left">
                      <th className="sticky top-0 z-10 bg-[#DBE3E9] py-6 px-4 text-[12px] font-normal tracking-[0.4em] whitespace-nowrap">CONTENT WRITING PACKAGE</th>
                      <th className="sticky top-0 z-10 bg-[#DBE3E9] py-6 px-4 text-[12px] font-normal tracking-[0.4em] text-center whitespace-nowrap">MAGNITUDE</th>
                      <th className="sticky top-0 z-10 bg-[#DBE3E9] py-6 px-4 text-[12px] font-normal tracking-[0.4em] text-right whitespace-nowrap">
                        QUOTE - {pricingType === 'domestic' ? 'INR' : 'USD $'}
                      </th>
                      {pricingType === 'domestic' && (
                        <th className="sticky top-0 z-10 bg-[#DBE3E9] py-6 px-4 text-[11px] font-normal tracking-[0.3em] text-center whitespace-nowrap">
                          <div className="bg-[#181818] text-[#DBE3E9] py-2 px-4 rounded-lg inline-block">
                            PRICE + 18% GST
                          </div>
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#181818]/10">
                    {currentPackages.map((pkg, i) => (
                      <tr
                        key={i}
                        onClick={() => setActiveRow(activeRow === i ? null : i)}
                        className={`group cursor-pointer transition-all duration-300 ${activeRow === i
                          ? 'bg-[#181818] text-[#DBE3E9]'
                          : 'hover:bg-[#181818]/5'
                          }`}
                      >
                        <td className="py-6 px-4 font-normal tracking-tight text-sm italic transition-transform group-hover:translate-x-2">
                          {pkg.name}
                        </td>
                        <td className={`py-6 px-4 text-[10px] font-normal tracking-widest text-center transition-colors ${activeRow === i ? 'text-[#DBE3E9]' : 'text-[#181818]'
                          }`}>
                          <span className={`px-4 py-2 rounded-lg inline-block transition-colors ${activeRow === i ? 'bg-[#DBE3E9]/10' : 'bg-[#181818]/10 group-hover:bg-[#181818]/20'
                            }`}>
                            {pkg.magnitude}
                          </span>
                        </td>
                        <td className="py-6 px-4 font-normal text-right text-lg">
                          {pkg.price}
                        </td>
                        {pricingType === 'domestic' && (
                          <td className="py-6 px-4 font-normal text-center text-xl italic tracking-tighter">
                            {pkg.priceWithGst}
                          </td>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-12 p-8 border-2 border-[#181818] rounded-3xl flex flex-col md:flex-row justify-between items-center gap-8 group cursor-pointer hover:bg-[#181818] hover:text-[#DBE3E9] transition-all">
            <div className="text-center md:text-left">
              <span className="text-[10px] font-normal tracking-[0.4em] opacity-60 mb-2 block">READY TO START?</span>
              <p className="text-3xl font-normal italic tracking-tighter">Get a customized content strategy today.</p>
            </div>
            <div className="w-16 h-16 rounded-full border-2 border-inherit flex items-center justify-center transform group-hover:rotate-45 transition-all">
              <ArrowRight size={32} />
            </div>
          </div>
        </div>
      </section>

      {/* Specific Audiences Section */}
      <section className="py-24 px-6 md:px-20 relative overflow-hidden border-t border-[#DBE3E9]/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="md:w-1/2">
            <span className="text-[#DBE3E9] text-[10px] font-normal tracking-[0.4em] mb-4 block animate-pulse">PLATFORMS</span>
            <h2 className="text-4xl md:text-6xl font-normal text-[#DBE3E9] tracking-tighter leading-none italic mb-8 uppercase">
              SPECIFIC <br /> <span className="opacity-40 italic">AUDIENCES</span>
            </h2>
          </div>
          <div className="md:w-1/2 space-y-12">
            <div className="flex gap-6 items-start group">
              <div className="mt-1 w-10 h-10 rounded-full border border-[#DBE3E9]/30 flex-shrink-0 flex items-center justify-center text-[#DBE3E9] group-hover:bg-[#DBE3E9] group-hover:text-[#181818] transition-all">
                <Globe size={20} />
              </div>
              <div className="space-y-2">
                <h4 className="text-[#DBE3E9] text-lg font-normal italic">SOCIAL MEDIA</h4>
                <p className="text-[#DBE3E9]/50 text-xs font-normal leading-relaxed tracking-tight">
                  The tone and style will vary for platforms like Instagram, Linkedin, Facebook and others.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start group">
              <div className="mt-1 w-10 h-10 rounded-full border border-[#DBE3E9]/30 flex-shrink-0 flex items-center justify-center text-[#DBE3E9] group-hover:bg-[#DBE3E9] group-hover:text-[#181818] transition-all">
                <FileText size={20} />
              </div>
              <div className="space-y-2">
                <h4 className="text-[#DBE3E9] text-lg font-normal italic">SEO / Blog / Articles</h4>
                <p className="text-[#DBE3E9]/50 text-xs font-normal leading-relaxed tracking-tight">
                  Content on website or blogs might cater to an audience seeking in-depth research, guides, OR how-to-article
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


