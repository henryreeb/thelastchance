import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CommunityHub from "@/components/CommunityHub";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import Rules from "@/components/Rules";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />
      <Hero />
      <CommunityHub />
      <Features />
      <FAQ />
      <Rules />
      <Gallery />
      <Footer />
      
    </main>
  );
}