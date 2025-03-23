"use client"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import WhyInvestSection from "@/components/WhyInvestSection"
import AmenitiesSection from "@/components/AmenitiesSection"
import Footer from "@/components/Footer"
import Stats from "@/components/Stats"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <div className="bg-pattern">
        <WhyInvestSection />
        <Stats />
        <AmenitiesSection />
      </div>
      <Footer />
    </main>
  )
}

