"use client"

import { useEffect, useRef } from "react"
import { Shield, FileCheck, Eye, Users, Clock, Award } from "lucide-react"

const WhyInvestSection = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn")
          }
        })
      },
      { threshold: 0.1 },
    )

    const items = document.querySelectorAll(".timeline-item")
    items.forEach((item) => {
      observer.observe(item)
    })

    return () => {
      items.forEach((item) => {
        observer.unobserve(item)
      })
    }
  }, [])

  const timelineItems = [
    {
      title: "18+ Years of Transforming Land into Legacies",
      description:
        <>With over 18 years of experience,<br />we have a proven track record of successfully developing land projects.</>,
      icon: <Award className="h-12 w-12 text-orange-500" />,
      position: "right",
      highlight: true,
    },
    {
      title: "NATP-Sanctioned Projects",
      description: "All our projects are Sanctioned by the NATP, ensuring full legal compliance.",
      icon: <Shield className="h-10 w-10 text-blue-700" />,
      position: "left",
    },
    {
      title: "Clear Title Guarantee",
      description: "We provide a 100% clear title guarantee on all our properties, offering you complete peace of mind.",
      icon: <FileCheck className="h-10 w-10 text-orange-500" />,
      position: "right",
    },
    {
      title: "Transparency from Acquisition to Handover",
      description:
        "We ensure complete transparency throughout the entire process, from land acquisition to the final handover.",
      icon: <Eye className="h-10 w-10 text-blue-700" />,
      position: "left",
    },
    {
      title: "Site Visits Available",
      description: "We encourage site visits so you can see your investment firsthand before making a decision.",
      icon: <Users className="h-10 w-10 text-orange-500" />,
      position: "right",
    },
    {
      title: "Post-Sales Support",
      description:
        "Our relationship doesn't end after the sale. We provide comprehensive post-sales support for all our clients.",
      icon: <Clock className="h-10 w-10 text-blue-700" />,
      position: "left",
    },
  ]

  return (
    <section id="why-invest" className="py-20 relative" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="section-title">Why Invest With Us</h2>
        <div className="gradient-line"></div>

        <div className="relative vertical-timeline mt-20 pb-10">
          <div className="max-w-6xl mx-auto">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className={`timeline-item opacity-0 flex items-center mb-20 relative ${
                  item.position === "left" ? "justify-end" : "justify-start"
                }`}
                style={{
                  animationDelay: `${index * 0.2}s`,
                  opacity: 0,
                  transform: item.position === "left" ? "translateX(-50px)" : "translateX(50px)",
                  transition: "all 0.6s ease-out",
                }}
              >
                <div className={`w-full md:w-5/12 relative ${item.highlight ? "md:w-[45.83%]" : "md:w-5/12"}`}>
                  <div
                    className={`connector-line ${
                      item.position === "left" ? "connector-line-left" : "connector-line-right"
                    }`}
                  ></div>
                  <div
                    className={`card ${
                      item.highlight ? "border-2 border-orange-500 bg-gradient-to-br from-white to-orange-50" : "border-2 border-blue-750"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 bg-gray-100 rounded-full">{item.icon}</div>
                      <div>
                        <h3 className={`text-xl font-bold mb-2 ${item.highlight ? "text-2xl text-orange-600" : ""}`}>
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-40 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
    </section>
  )
}

export default WhyInvestSection

