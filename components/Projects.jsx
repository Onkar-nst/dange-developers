'use client';
import React, { useState } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";



export default function ProjectsPage() {

  const [hoveredCard, setHoveredCard] = useState(null);

  const upcomingProjects = [
    {
      id: 1,
      name: "Shri Ram Nagari 1",
      location: "Saoner road bypass, kalmeshwar",
      amenities: ["Electricity", "Water Supply", "Temple", "Many More"],
      image:
        "data:image/jpeg;base64,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",
    },
    {
      id: 2,
      name: "Shri Ram Nagari 2",
      location: "Saoner road bypass, kalmeshwar",
      amenities: ["Electricity", "Water Supply", "Temple", "Many More"],
      image: "https://thumbs.dreamstime.com/b/d-rendering-sketch-modern-cozy-house-river-garage-sale-rent-black-line-sketch-soft-light-shadows-126243909.jpg",
    },
  ];

  const previousProjects = [
    {
      id: 1,
      name: "Dange Layout 1",
      location: "Infront of Regent high school, Kalmeshwar",
      amenities: ["Electricity", "Water Supply", "Garden", "Many More"],
      image: "https://c8.alamy.com/comp/2CW59AF/3d-illustration-of-a-three-story-house-with-a-contemporary-architectural-design-in-black-and-white-with-the-clipping-path-included-in-the-file-2CW59AF.jpg",
    },
    {
      id: 2,
      name: "Dange Layout 2",
      location: "PWSKalmeshwar bypass, Kalmeshwar",
      amenities: ["Interner Road", "Water Supply", "Garden", "Many More"],
      image: "https://www.plan-it-all.com/wp-content/uploads/2022/01/EXT_01_02-1024x533.jpg",
    },
    {
      id: 3,
      name: "Dange Layout 3",
      location: "PWS Kalmeshwar bypass, Kalmeshwar",
      amenities: ["Interner Road", "Water Supply", "Garden", "Many More"],
      image: "https://img.freepik.com/premium-photo/3d-model-house-architectural-template-background-architectural-model-house_727625-197.jpg",
    },
    {
      id: 4,
      name: "Om Sai Ram Nagari",
      location: "Kohli, Nagpur",
      amenities: ["Cemnt Road", "Water Supply", "Garden", "Many More"],
      image: "https://thumbs.dreamstime.com/b/d-rendering-modern-house-hill-pool-black-line-craft-background-cozy-garage-sale-rent-sketch-white-spot-169495899.jpg",
    },
    {
      id: 5,
      name: "Shri Sai Ram Nagari 2",
      location: "PWS college road, Kalmeshwar",
      amenities: ["Main Entry Gate", "Water Supply", "Garden", "Many More"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3RLNoLsYW4-DOtV5N1gzd4JqPh8EsyX1hVQ&s",
    },
    {
      id: 6,
      name: "Shri Sai Ram Nagri",
      location: "Ghogli, Nagpur",
      amenities: ["Main Entry Gate", "Water Supply", "Garden", "Many More"],
      image: "https://media.istockphoto.com/id/91197381/vector/3d-technical-concept-draw.jpg?s=612x612&w=0&k=20&c=QFoYwtfHOWnp1UWteQhrR5j1SX9pPZC_80YRjZe_D84=",
    },
    {
      id: 7,
      name: "Dange Layout 4",
      location: "Tashil, kalameshwar",
      amenities: ["Electricity", "Water Supply", "Garden", "Many More"],
      image: "https://www.shutterstock.com/image-vector/house-traditional-architecture-plan-3d-600nw-2348676315.jpg",
    },
    {
      id: 8,
      name: "Dnyaneshwar Layout",
      location: "Mahadula, koradi Mandir, Nagpur",
      amenities: ["Electricity", "Water Supply", "Garden", "Many More"],
      image: "https://easy-peasy.ai/cdn-cgi/image/quality=70,format=auto,width=300/https://media.easy-peasy.ai/bde24566-4917-4da0-b38b-1b363c4e00b6/aac9851b-4d2f-489a-ae00-211e7ff32a5e.png",
    },
  ];

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-white">
      <Head>
        <title>Projects | Premium Land Development</title>
        <meta
          name="description"
          content="Explore our upcoming and previous land development projects"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style jsx global>{`
        body {
          font-family: "Poppins", sans-serif;
          overflow-x: hidden;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 30px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.95);
            opacity: 0.8;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.5s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .bg-pattern {
          background-image: radial-gradient(#2563eb 1px, transparent 1px),
            radial-gradient(#2563eb 1px, transparent 1px);
          background-size: 20px 20px;
          background-position: 0 0, 10px 10px;
          opacity: 0.05;
        }

        .card-hover {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .card-hover:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .image-zoom {
          transition: transform 0.5s ease;
        }

        .card-hover:hover .image-zoom {
          transform: scale(1.05);
        }

        .button-slide-bg {
          position: relative;
          z-index: 1;
          overflow: hidden;
          transition: color 0.3s ease;
        }

        .button-slide-bg:before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: #ff6b00;
          transition: all 0.3s ease;
          z-index: -1;
        }

        .button-slide-bg:hover:before {
          left: 0;
        }

        .button-slide-bg:hover {
          color: white;
          border-color: #ff6b00;
        }
      `}</style>

      <div className="fixed inset-0 bg-pattern -z-10"></div>

      <div className="fixed top-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10 -z-10 animate-float"></div>
      <div
        className="fixed bottom-0 left-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-10 -z-10 animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <main className="container mx-auto px-4 py-16 relative">
        {/* Top Section */}
        <div className="relative flex items-center justify-center mb-16 overflow-hidden animate-scaleIn">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-blue-500 opacity-30"></div>
          </div>
          <div className="relative bg-white px-10 py-2">
            <h2 className="text-3xl font-bold text-black tracking-wider">
              UPCOMING <span className="text-blue-600">PROJECTS</span>
            </h2>
          </div>
        </div>

        {/* Upcoming Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {upcomingProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-500 card-hover animate-fadeInUp border border-gray-100"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredCard(`upcoming-${project.id}`)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative overflow-hidden">
                <div className="absolute top-5 left-5 bg-orange-500 text-white text-sm font-semibold px-4 py-1 rounded-full z-10">
                  Coming Soon
                </div>
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-80 object-cover image-zoom"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-black mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 mb-5 flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {project.location}
                </p>
                <ul className="mb-8">
                  {project.amenities.map((amenity, index) => (
                    <li
                      key={index}
                      className="text-sm text-gray-700 flex items-center mb-2 transform transition-transform duration-300"
                      style={{
                        transform:
                          hoveredCard === `upcoming-${project.id}`
                            ? "translateX(10px)"
                            : "translateX(0)",
                        transitionDelay: `${index * 0.1}s`,
                      }}
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-orange-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {amenity}
                    </li>
                  ))}
                </ul>
                <div className="flex space-x-4">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      project.location
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex-1 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 font-medium"
                  >
                    View on Map
                  </a>
                  <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-xl flex-1 button-slide-bg font-medium">
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Separator */}
        <div className="relative flex items-center justify-center mb-16 overflow-hidden animate-scaleIn">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-orange-500 opacity-30"></div>
          </div>
          <div className="relative bg-white px-10 py-2">
            <h2 className="text-3xl font-bold text-black tracking-wider">
              PREVIOUS <span className="text-orange-500">PROJECTS</span>
            </h2>
          </div>
        </div>

        {/* Previous Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {previousProjects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 card-hover animate-fadeInUp border border-gray-100"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(`previous-${project.id}`)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 object-cover image-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-bold">{project.location}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">{project.name}</h3>
                <p className="text-sm text-gray-600 mb-3 flex items-center">
                  <svg
                    className="w-4 h-4 mr-1 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {project.location}
                </p>
                <ul className="mb-5">
                  {project.amenities.map((amenity, index) => (
                    <li
                      key={index}
                      className="text-xs text-gray-700 flex items-center mb-1 transform transition-transform duration-300"
                      style={{
                        transform:
                          hoveredCard === `previous-${project.id}`
                            ? "translateX(5px)"
                            : "translateX(0)",
                        transitionDelay: `${index * 0.1}s`,
                      }}
                    >
                      <svg
                        className="w-3 h-3 mr-1 text-orange-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {amenity}
                    </li>
                  ))}
                </ul>
                <div className="flex space-x-2 text-sm">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      project.location
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-xl flex-1 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 font-medium"
                  >
                    View on Map
                  </a>
                  <button className="border-2 border-blue-600 text-blue-600 px-3 py-2 rounded-xl flex-1 button-slide-bg font-medium">
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
    <Footer />
    </>
  );
}