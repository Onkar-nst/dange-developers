"use client"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import WhyInvestSection from "@/components/WhyInvestSection"
import AmenitiesSection from "@/components/AmenitiesSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <div className="bg-pattern">
        <WhyInvestSection />
        <AmenitiesSection />
      </div>
      <Footer />
    </main>
  )
}

