import Header from "@/components/Header";
import IdeasHero from "@/components/sections/Hero";
import IdeasAward from "@/components/sections/Awards";
import IdeasServices from "@/components/sections/Services";
import IdeasSolutions from "@/components/sections/Solutions";
import IdeasPortfolio from "@/components/sections/Portfolio";
import IdeasPricing from "@/components/sections/Pricing";
import IdeasLogos from "@/components/sections/Logos";
import IdeasNews from "@/components/sections/News";
import VideoSection from "@/components/sections/VideoSection";
import Footer from "@/components/sections/Footer";
import AboutMMS from "@/components/sections/AboutMMS";
import IdeasUSP from "@/components/sections/USP";
import ProjectHighlights from "@/components/sections/Highlights";
import ProjectWorkflow from "@/components/sections/Workflow";
import GeographicStrategy from "@/components/sections/GeographicStrategy";

export default function AboutPage() {
  return (
    <main className="relative overflow-x-hidden min-h-screen bg-[#181818]">
      <Header />
      <IdeasHero />
      <AboutMMS />
      <IdeasUSP />
      <ProjectHighlights />
      <ProjectWorkflow />
      <IdeasServices />
      <IdeasSolutions />
      <IdeasPortfolio />
      <IdeasAward />
      <GeographicStrategy />
      <IdeasPricing />
      <IdeasLogos />
      <IdeasNews />
      <VideoSection />
      <Footer />
    </main>
  );
}
