"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface Project {
  title: string
  subtitle: string
  description: string
  thumbnails: string[]
  tags: string[]
  github: string
  link: string
}

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState<number>(4)
  const [autoSlide, setAutoSlide] = useState<{ [key: string]: number }>({})
  const [selectedImage, setSelectedImage] = useState<{ projectIndex: number; imageIndex: number } | null>(null)

  const projects: Project[] = [
    {
      title: "CMMS – SAP Integration for Maintenance and Inventory",
      subtitle: "SAP Integration Project",
      description:
        "Built custom APIs in ABAP for real-time bidirectional data sync between SAP and Sensys CMMS. Executed field/object mapping across PM and MM modules, converting business logic into technical specs. Delivered proof of concept (POC) for MM, ensuring master and transactional data flow.",
      thumbnails: ["/ss1.png", "/ss2.png", "/ss3.png", "/ss4.png", "/ss5.png", "/ss6.png"],
      tags: ["SAP S/4HANA", "ABAP", "ODATA", "MM", "PM"],
      github: "https://github.com/raorafay-dev",
      link: "https://github.com/raorafay-dev",
    },
    {
      title: "SAAS – SAP SD Integration with ECC and S/4HANA",
      subtitle: "Sales & Distribution Integration Project",
      description:
        "Developed ODATA APIs for sales order creation, update, and deletion using API_SALES_ORDER_SRV. Implemented CSRF token security and date format handling for OData V2. Managed master and transactional data flow across sales organization, distribution channels, and partner functions with real-time synchronization.",
      thumbnails: ["/tk1.jpg", "/tk2.jpg", "/tk3.png", "/tk5.png"],
      tags: ["SAP S/4HANA", "ABAP", "ODATA", "SD", "ECC", "REST APIs"],
      github: "https://github.com/raorafay-dev",
      link: "https://github.com/raorafay-dev",
    },
    {
      title: "Travel Management System – Full-Stack Custom RAP Application",
      subtitle: "SAP BTP Application",
      description:
        "Developed a 3-layer RAP app on BTP for travel request processing using CDS views and ODATA service bindings. Built unmanaged CRUD logic and integrated value helps for dynamic user interaction. Enhanced standard Fiori UI via annotations and extensions.",
      thumbnails: ["/tr1.webp", "/tr3.bmp", "/tr4.png"],
      tags: ["SAP BTP", "ABAP", "RAP", "CDS", "ODATA", "Fiori"],
      github: "https://github.com/raorafay-dev",
      link: "https://github.com/raorafay-dev",
    },
    {
      title: "Del Monte – Coupa Spend Management Integration",
      subtitle: "Financial Integration Project",
      description:
        "Supported SAP-side integration with Coupa via middleware for procurement, invoicing, and supplier data. Built and enhanced REST and ODATA APIs for real-time data exchange across MM, FI, and CO modules. Participated in requirement-gathering sessions with cross-functional teams.",
      thumbnails: ["/dm1.png", "/dmarchitecdiag.png", "/dm3.png", "/dm7.png", "/dm5.png", "/dm8.png", "/dm4.png", "/dm6.png"],
      tags: ["SAP S/4HANA", "ABAP", "REST APIs", "MM", "FI", "CO"],
      github: "https://github.com/raorafay-dev",
      link: "https://github.com/raorafay-dev",
    },
    {
        title: "BeltSense: Seatbelt Violation Management System",
        subtitle: "Web App",
        description: "Developed a responsive web interface using Next.js and MUI, enhancing user experience for violation management. Built a scalable backend with Node.js and Express, ensuring efficient data storage and retrieval with MongoDB.",
        thumbnails: [
            "/beltsense1.png",
            "/beltsense2.png",
            "/beltsense3.png",
            "/beltsense4.png",
            "/beltsense5.png"
        ],
        tags: ["Next.js", "MUI", "Node.js", "Express", "MongoDB"],
        github: "https://github.com/yourusername/beltsense",
        link: "https://beltsense-demo.com"
    },
    {
        title: "Army Boys Hostel Management System",
        subtitle: "Desktop App",
        description: "Java-based hostel management solution with JavaFX UI and MySQL backend. Reduces administrative workload by 70% through intuitive design and efficient data management.",
        thumbnails: [
            "/abh1.png",
            "/abh2.png",
            "/abh3.png",
            "/abh4.png"
        ],
        tags: ["Java", "JavaFX", "MySQL"],
        github: "https://github.com/raorafay-dev/SDA-Project",
        link: "https://github.com/raorafay-dev/SDA-Project"
    },
    {
        title: "Pakistan Post Service Management System",
        subtitle: "Console App",
        description: "C++ application for automating postal operations. Utilizes OOP and file handling for efficient tracking and management without reliance on databases.",
        thumbnails: [
            "/pps1.jpg",
            "/pps2.jpg"
        ],
        tags: ["C++", "OOP", "File Handling"],
        github: "https://github.com/raorafay-dev/OOP-Project",
        link: "https://github.com/raorafay-dev/OOP-Project"
    },
    {
        title: "Library Webapp",
        subtitle: "Web App",
        description: "Dynamic library management system using HTML, CSS, and JavaScript. Features book addition, deletion, and search functionality with Bootstrap-enhanced UI.",
        thumbnails: [
            "/lb1.png",
            "/lb2.png"
        ],
        tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        github: "https://github.com/raorafay-dev/Practice-Project-Library-Website",
        link: "https://raorafay-dev.github.io/Practice-Project-Library-Website/library.html"
    },
    {
        title: "TicTacToe Game",
        subtitle: "Web App",
        description: "Classic TicTacToe game implemented with HTML, CSS, and JavaScript. Demonstrates interactive web development skills in a fun, engaging format.",
        thumbnails: [
            "/ttt1.png",
            "/ttt2.png"
        ],
        tags: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/raorafay-dev/Practice-Project-TicTacToe-Game",
        link: "https://raorafay-dev.github.io/Practice-Project-TicTacToe-Game/"
    },
    {
        title: "Photo Editor Webapp",
        subtitle: "Web App",
        description: "Browser-based photo editing tool. Offers user-friendly interface for quick image enhancements using modern web technologies.",
        thumbnails: [
            "/phe1.png",
            "/phe1.png"
        ],
        tags: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/raorafay-dev/Photo-Editor-Website",
        link: "https://raorafay-dev.github.io/Photo-Editor-Website/"
    },
    {
        title: "Notes Website",
        subtitle: "Web App",
        description: "Sleek note-taking application with Bootstrap and JavaScript. Features CRUD operations and search functionality in a responsive design.",
        thumbnails: [
            "/ntp1.png",
            "/ntp1.png"
        ],
        tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        github: "https://github.com/raorafay-dev/Pracice-Project-Notes-Website",
        link: "https://raorafay-dev.github.io/Pracice-Project-Notes-Website/"
    }
]

  useEffect(() => {
    const timers = projects.map((project, idx) => {
      return setInterval(() => {
        setAutoSlide((prev) => ({
          ...prev,
          [idx]: ((prev[idx] || 0) + 1) % project.thumbnails.length,
        }))
      }, 5000)
    })

    return () => timers.forEach((timer) => clearInterval(timer))
  }, [projects])

  const toggleProjects = () => {
    setVisibleProjects(visibleProjects === 4 ? projects.length : 4)
  }

  const goToImage = (projectIndex: number, imageIndex: number) => {
    const project = projects[projectIndex]
    const newIndex = (imageIndex + project.thumbnails.length) % project.thumbnails.length
    setAutoSlide((prev) => ({
      ...prev,
      [projectIndex]: newIndex,
    }))
  }

  return (
    <section id="projects" className="section-padding section-divider bg-white relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

      <div className="section-decorator top-0 opacity-60"></div>

      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-sm font-bold tracking-widest uppercase text-black mb-2">Projects</h2>
          <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
            Recent SAP Work
          </h3>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {projects.slice(0, visibleProjects).map((project, index) => {
              const currentImageIndex = autoSlide[index] || 0
              return (
                <div
                  key={project.title}
                  className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-64 sm:h-72 md:h-80 bg-gradient-to-br from-slate-100 to-slate-50 border-b border-gray-200 flex items-center justify-center overflow-hidden group">
                    <Image
                      src={project.thumbnails[currentImageIndex] || "/project-placeholder.jpg"}
                      alt={`${project.title} - Image ${currentImageIndex + 1}`}
                      width={500}
                      height={300}
                      className="w-full h-full object-contain p-4 transition-all duration-500 cursor-pointer hover:scale-105"
                      onClick={() => setSelectedImage({ projectIndex: index, imageIndex: currentImageIndex })}
                    />

                    {project.thumbnails.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            goToImage(index, currentImageIndex - 1)
                          }}
                          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            goToImage(index, currentImageIndex + 1)
                          }}
                          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all z-10"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    )}

                    {project.thumbnails.length > 1 && (
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                        {project.thumbnails.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setAutoSlide((prev) => ({ ...prev, [index]: idx }))}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              idx === currentImageIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white/75"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{project.title}</h3>
                    <p className="text-sm font-medium text-blue-600 mb-3">{project.subtitle}</p>
                    <p className="text-sm text-slate-600 mb-4 line-clamp-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="px-6 py-4 border-t border-gray-200 flex justify-between items-center bg-slate-50">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 hover:text-blue-600 flex items-center text-sm font-medium transition-colors"
                    >
                      <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-700 hover:text-blue-600 flex items-center text-sm font-medium transition-colors"
                    >
                      <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      View
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
          {projects.length > 4 && (
            <div className="mt-12 text-center">
              <button
                onClick={toggleProjects}
                className="px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 md:py-4 md:text-lg md:px-10"
              >
                {visibleProjects === 4 ? "Show More Projects" : "Show Less"}
              </button>
            </div>
          )}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[80vh] bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={
                projects[selectedImage.projectIndex].thumbnails[selectedImage.imageIndex] || "/project-placeholder.jpg"
              }
              alt="Full size project image"
              width={1000}
              height={600}
              className="w-full h-full object-contain transition-all duration-500"
            />

            {projects[selectedImage.projectIndex].thumbnails.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setSelectedImage({
                      projectIndex: selectedImage.projectIndex,
                      imageIndex:
                        (selectedImage.imageIndex - 1 + projects[selectedImage.projectIndex].thumbnails.length) %
                        projects[selectedImage.projectIndex].thumbnails.length,
                    })
                  }
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-all z-10"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() =>
                    setSelectedImage({
                      projectIndex: selectedImage.projectIndex,
                      imageIndex:
                        (selectedImage.imageIndex + 1) % projects[selectedImage.projectIndex].thumbnails.length,
                    })
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-all z-10"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <div className="section-decorator bottom-0 opacity-60"></div>
    </section>
  )
}
