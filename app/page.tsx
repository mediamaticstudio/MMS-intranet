import Header from "@/components/Header";
import IdeasHero from "@/components/sections/Hero";
import IdeasAward from "@/components/sections/Awards";
// import IdeasServices from "@/components/sections/Services";
// import IdeasSolutions from "@/components/sections/Solutions";
// import IdeasPortfolio from "@/components/sections/Portfolio";
// import IdeasPricing from "@/components/sections/Pricing";
// import IdeasLogos from "@/components/sections/Logos";
// import IdeasNews from "@/components/sections/News";
// import VideoSection from "@/components/sections/VideoSection";
import Footer from "@/components/sections/Footer";
import AboutMMS from "@/components/sections/AboutMMS";
import IdeasUSP from "@/components/sections/USP";
import ProjectHighlights from "@/components/sections/Highlights";
import ProjectWorkflow from "@/components/sections/Workflow";
// import GeographicStrategy from "@/components/sections/GeographicStrategy";

export default function AboutPage() {
  return (
    <main className="relative overflow-x-hidden min-h-screen bg-[#181818] selection:bg-[#DBE3E9] selection:text-[#181818]">
      {/* Global Background Textures */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/back drop.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
      </div>
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.02]">
        <div
          className="absolute top-0 right-0 w-[1000px] h-[1000px] rotate-45 translate-x-1/3 -translate-y-1/3"
          style={{
            backgroundImage: "url('/bg doodle.png')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[800px] h-[800px] -rotate-12 -translate-x-1/4 translate-y-1/4"
          style={{
            backgroundImage: "url('/bg doodle.png')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
          }}
        />
      </div>

      <div className="relative z-10">
        <Header />
        <IdeasHero />
        <AboutMMS />
        <IdeasAward />
        <IdeasUSP />
        <ProjectHighlights />
        <ProjectWorkflow />
        {/* <IdeasServices /> */}
        {/* 
        <IdeasSolutions />
        <IdeasPortfolio />
        <GeographicStrategy />
        <IdeasPricing />
        <IdeasLogos />
        <IdeasNews />
        <VideoSection /> 
        */}
        <Footer />
      </div>
    </main>
  );
}

