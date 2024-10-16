'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Projects() {
    const [visibleProjects, setVisibleProjects] = useState(2)
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [currentProject, setCurrentProject] = useState(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const projects = [
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

    const toggleProjects = () => {
        setVisibleProjects(visibleProjects === 2 ? projects.length : 2)
    }

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    }

    const openLightbox = useCallback((project, index) => {
        setCurrentProject(project)
        setCurrentImageIndex(index)
        setLightboxOpen(true)
    }, [])

    const closeLightbox = useCallback(() => {
        setLightboxOpen(false)
        setCurrentProject(null)
        setCurrentImageIndex(0)
    }, [])

    const nextImage = useCallback(() => {
        if (currentProject) {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === currentProject.thumbnails.length - 1 ? 0 : prevIndex + 1
            )
        }
    }, [currentProject])

    const prevImage = useCallback(() => {
        if (currentProject) {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === 0 ? currentProject.thumbnails.length - 1 : prevIndex - 1
            )
        }
    }, [currentProject])

    return (
        <section id="projects" className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center mb-12">
                    <h2 className="text-base font-semibold tracking-wide uppercase">Projects</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl text-accent">
                        Recent Work
                    </p>
                </div>
                <div className="mt-10">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                        {projects.slice(0, visibleProjects).map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
                            >
                                <div className="relative h-64 sm:h-72 md:h-80 cursor-pointer bg-gray-200" onClick={() => openLightbox(project, 0)}>
                                    <Slider {...sliderSettings}>
                                        {project.thumbnails.map((thumbnail, i) => (
                                            <div key={i} className="relative h-64 sm:h-72 md:h-80">
                                                <Image
                                                    src={thumbnail}
                                                    alt={`${project.title} - Image ${i + 1}`}
                                                    fill
                                                    style={{ objectFit: 'contain' }}
                                                />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                                <div className="p-6 flex-grow bg-gray-50">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                                    <p className="text-sm font-medium text-primary mb-3">{project.subtitle}</p>
                                    <p className="text-sm text-gray-700 mb-4 line-clamp-3">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex} className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="px-6 py-4 bg-gray-100 flex justify-between items-center">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:text-primary/80 flex items-center text-sm font-medium"
                                    >
                                        <Github className="h-5 w-5 mr-2" />
                                        GitHub
                                    </a>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-accent hover:text-primary/80 flex items-center text-sm font-medium"
                                    >
                                        <ExternalLink className="h-5 w-5 mr-2" />
                                        {project.link.includes('github.com') ? 'View Project' : 'Live Demo'}
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    {projects.length > 2 && (
                        <div className="mt-12 text-center">
                            <button
                                onClick={toggleProjects}
                                className="justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-foreground bg-accent hover:bg-primary transition-colors duration-300 md:py-4 md:text-lg md:px-10"
                            >
                                {visibleProjects === 2 ? 'Show More Projects' : 'Show Less'}
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <AnimatePresence>
                {lightboxOpen && currentProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center"
                        onClick={closeLightbox}
                    >
                        <div className="relative max-w-4xl w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                            <button
                                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300 z-10"
                                onClick={closeLightbox}
                            >
                                <X size={24} />
                            </button>
                            <button
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300 z-10 bg-black bg-opacity-50 p-2 rounded-full"
                                onClick={prevImage}
                            >
                                <ChevronLeft size={36} />
                            </button>
                            <button
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300 z-10 bg-black bg-opacity-50 p-2 rounded-full"
                                onClick={nextImage}
                            >
                                <ChevronRight size={36} />
                            </button>
                            <div className="relative w-full h-5/6">
                                <Image
                                    src={currentProject.thumbnails[currentImageIndex]}
                                    alt={`${currentProject.title} - Image ${currentImageIndex + 1}`}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-4 py-2 rounded-full">
                                {currentImageIndex + 1} / {currentProject.thumbnails.length}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}