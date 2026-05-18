import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import FeaturesSection from "../components/FeaturesSection";
import StatsSection from "../components/StatsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f7fb] text-black">
      <Navbar />

      <HeroSection />

      <StatsSection />
      
      <FeaturesSection />
    </main>
  );
}