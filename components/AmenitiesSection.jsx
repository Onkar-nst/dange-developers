"use client"

import { useEffect, useRef } from "react"
import {
  RouteIcon as Road,
  Droplets,
  Zap,
  Trees,
  ShieldCheck, 
  Dumbbell,
  Leaf,
} from "lucide-react"

const AmenitiesSection = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && sectionRef.current) {
            const cards = sectionRef.current.querySelectorAll(".amenity-card")
            if (cards.length > 0) {
              cards.forEach((card, index) => {
                setTimeout(() => {
                  card.classList.add("opacity-100")
                  card.classList.remove("translate-y-10")
                }, index * 100)
              })
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      observer.disconnect()
    }
  }, [])

  const amenities = [
    {
      title: "Cement Roads",
      description: "Durable and smooth cement roads for easy travel.",
      icon: <Road className="h-10 w-10 text-blue-700" />,
    },
    {
      title: "Main Gate",
      description: "A grand entrance with a secure and aesthetic main gate.",
      icon: <ShieldCheck className="h-10 w-10 text-orange-500" />, // Replaced Gate with ShieldCheck
    },
    {
      title: "Electric Poles",
      description: "Well-planned electric poles for uninterrupted power.",
      icon: <Zap className="h-10 w-10 text-blue-700" />,
    },
    {
      title: "Sewage System",
      description: "Modern sewage system ensuring proper waste management.",
      icon: <Droplets className="h-10 w-10 text-orange-500" />, // Updated to PipelineIcon for a concrete pipe-like representation
    },
    {
      title: "Water Connection",
      description: "Reliable water supply with efficient pipelines.",
      icon: <Droplets className="h-10 w-10 text-blue-700" />, // Updated to water-related icon
    },
    {
      title: "Open Space",
      description: "Spacious open areas for relaxation and recreation.",
      icon: <Trees className="h-10 w-10 text-orange-500" />,
    },
    {
      title: "Green Gym",
      description: "Eco-friendly gym equipment for a healthy lifestyle.",
      icon: <Dumbbell className="h-10 w-10 text-blue-700" />,
    },
    {
      title: "Connect with Nature",
      description: "Beautiful landscapes to help you reconnect with nature.",
      icon: <Leaf className="h-10 w-10 text-orange-500" />,
    },
  ]

  return (
    <section id="amenities" className="py-20 relative" ref={sectionRef}>
      <div className="container mx-auto px-4 " >
        <h2 className="section-title">Amenities</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mt-2">
          We provide world-class amenities to make your living experience truly exceptional.
        </p>
        <br/>
        <div className="gradient-line"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="amenity-card opacity-0 translate-y-10 transition-all duration-500 ease-out bg-white rounded-xl shadow-lg hover:shadow-xl p-6 border border-black-200 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-orange-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gray-50 rounded-full group-hover:bg-white transition-colors duration-300">
                    {amenity.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{amenity.title}</h3>
                <p className="text-gray-600 text-center text-sm">{amenity.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-700 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl"></div>
    </section>
  )
}

export default AmenitiesSection

