"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { FaEye, FaGithub } from "react-icons/fa";
import SectionTitle from "../SectionTitle";

// Projects Data
const projectsData = [
    {
        id: 1,
        title: "EduMosaic",
        description: "An educational management platform",
        image: "/images/projects/project-1.png",
        techStack: ["React", "JavaScript", "Node.js", "Express.js", "MongoDB", "Firebase", "JWT", "TanStack Query", "Tailwind"],
        liveLink: "https://edu-mosaic-275a3.web.app",
        clientGithub: "https://github.com/sarnali3515/edu-mosaic-client",
        serverGithub: "https://github.com/sarnali3515/edu-mosaic-server",
        features: [
            "Developed a user-friendly platform for educational institutions, tutors, and students to manage classes, enrollments, and feedback efficiently",
            "Implemented comprehensive dashboards for admins, teachers, and students, enabling class management, user roles, progress tracking, and secure payment processing for class enrollments.",
            "Enriched user engagement through responsive design implementation, and fortified authentication, ensuring a seamless and secure learning experience"
        ]
    },
    {
        id: 2,
        title: "QueryNest",
        description: "An alternative product information system",
        image: "/images/projects/project-2.png",
        techStack: ["React", "JavaScript", "Node.js", "Express.js", "MongoDB", "Firebase", "JWT", "Tailwind"],
        liveLink: "https://query-nest.web.app",
        clientGithub: "https://github.com/sarnali3515/query-nest-client",
        serverGithub: "https://github.com/sarnali3515/query-nest-server",
        features: [
            "Developed a responsive Alternative Product Information System where user can post, modify, and remove product queries.",
            "Users can recommend to a specific query post, can manage his recommendations and to save a query post, users can add a query to their favorite lists.",
            "Implemented secure JWT authentication for user login and private routes.",
            "Added search functionality, dark/light theme toggling, and dynamic grid layouts for enhanced user experience."
        ]
    },
    {
        id: 3,
        title: "Travel Trails",
        description: "A Tourism Management Website",
        image: "/images/projects/project-3.png",
        techStack: ["React", "JavaScript", "MongoDB", "Firebase", "Tailwind"],
        liveLink: "https://tourism-management-trails.web.app",
        clientGithub: "https://github.com/sarnali3515/tourism-management-client",
        serverGithub: "https://github.com/sarnali3515/tourism-management-server",
        features: [
            "Developed a user-friendly tourism website focused on Southeast Asia, featuring famous spots.",
            "User can post and manage their posted spots by updating or removing the spots information.",
            "Implemented secure user authentication and profile management features using Firebase for personalized experiences"
        ]
    },
    {
        id: 4,
        title: "EduMosaic",
        description: "An educational management platform",
        image: "/images/projects/project-1.png",
        techStack: ["React", "JavaScript", "Node.js", "Express.js", "MongoDB", "Firebase", "JWT", "TanStack Query", "Tailwind"],
        liveLink: "https://edu-mosaic-275a3.web.app",
        clientGithub: "https://github.com/sarnali3515/edu-mosaic-client",
        serverGithub: "https://github.com/sarnali3515/edu-mosaic-server",
        features: [
            "Developed a user-friendly platform for educational institutions, tutors, and students to manage classes, enrollments, and feedback efficiently",
            "Implemented comprehensive dashboards for admins, teachers, and students, enabling class management, user roles, progress tracking, and secure payment processing for class enrollments.",
            "Enriched user engagement through responsive design implementation, and fortified authentication, ensuring a seamless and secure learning experience"
        ]
    },
    {
        id: 5,
        title: "QueryNest",
        description: "An alternative product information system",
        image: "/images/projects/project-2.png",
        techStack: ["React", "JavaScript", "Node.js", "Express.js", "MongoDB", "Firebase", "JWT", "Tailwind"],
        liveLink: "https://query-nest.web.app",
        clientGithub: "https://github.com/sarnali3515/query-nest-client",
        serverGithub: "https://github.com/sarnali3515/query-nest-server",
        features: [
            "Developed a responsive Alternative Product Information System where user can post, modify, and remove product queries.",
            "Users can recommend to a specific query post, can manage his recommendations and to save a query post, users can add a query to their favorite lists.",
            "Implemented secure JWT authentication for user login and private routes.",
            "Added search functionality, dark/light theme toggling, and dynamic grid layouts for enhanced user experience."
        ]
    },
    {
        id: 6,
        title: "Travel Trails",
        description: "A Tourism Management Website",
        image: "/images/projects/project-3.png",
        techStack: ["React", "JavaScript", "MongoDB", "Firebase", "Tailwind"],
        liveLink: "https://tourism-management-trails.web.app",
        clientGithub: "https://github.com/sarnali3515/tourism-management-client",
        serverGithub: "https://github.com/sarnali3515/tourism-management-server",
        features: [
            "Developed a user-friendly tourism website focused on Southeast Asia, featuring famous spots.",
            "User can post and manage their posted spots by updating or removing the spots information.",
            "Implemented secure user authentication and profile management features using Firebase for personalized experiences"
        ]
    },

];

export default function ProjectsCarousel() {
    const projects = projectsData;
    const [isMobile, setIsMobile] = useState(false);
    const [rotation, setRotation] = useState(0);
    const [modalProject, setModalProject] = useState(null);
    const [displayedProjects, setDisplayedProjects] = useState([]);

    const carouselRef = useRef(null);
    const itemRefs = useRef([]);
    const moved = useRef(false);
    const dragging = useRef(false);
    const startX = useRef(0);
    const startY = useRef(0);
    const startRotation = useRef(0);
    const autoRotateId = useRef(null);
    const isHorizontalDrag = useRef(false);

    const numberOfProjectsToShow = 8;
    const radius = isMobile ? 400 : 650;
    const cardWidth = isMobile ? 430 : 520;
    const cardHeight = isMobile ? 580 : 620;
    const armAngle = displayedProjects.length > 0 ? 360 / displayedProjects.length : 0;

    // Check mobile screen
    useEffect(() => {
        const checkScreen = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    // Initialize displayed projects
    useEffect(() => {
        const selectedProjects = projects.slice(0, numberOfProjectsToShow);
        setDisplayedProjects(selectedProjects);
    }, [projects, numberOfProjectsToShow]);

    // GSAP animation for smooth rotation
    useEffect(() => {
        if (!carouselRef.current) return;
        gsap.to(carouselRef.current, {
            rotationY: rotation,
            duration: 0.1,
            ease: "none",
            overwrite: true
        });
    }, [rotation]);

    // Auto-rotation
    useEffect(() => {
        if (modalProject) return;

        const autoRotate = () => {
            if (!dragging.current && !modalProject) {
                setRotation(prev => prev + 0.2);
            }
            autoRotateId.current = requestAnimationFrame(autoRotate);
        };

        autoRotateId.current = requestAnimationFrame(autoRotate);

        return () => {
            if (autoRotateId.current) {
                cancelAnimationFrame(autoRotateId.current);
            }
        };
    }, [modalProject]);

    // Start drag
    const startDrag = (e) => {
        const clientX = 'clientX' in e ? e.clientX : e.touches[0].clientX;
        const clientY = 'clientY' in e ? e.clientY : e.touches[0].clientY;
        if (!clientX || !clientY) return;

        startX.current = clientX;
        startY.current = clientY;
        startRotation.current = rotation;
        dragging.current = true;
        isHorizontalDrag.current = false;
        moved.current = false;

        e.preventDefault();
    };

    // Move drag
    const moveDrag = (e) => {
        if (!dragging.current) return;

        const clientX = 'clientX' in e ? e.clientX : e.touches[0].clientX;
        const clientY = 'clientY' in e ? e.clientY : e.touches[0].clientY;
        if (!clientX || !clientY) return;

        const deltaX = clientX - startX.current;
        const deltaY = clientY - startY.current;

        if (isMobile && !isHorizontalDrag.current) {
            if (Math.abs(deltaY) > 10 && Math.abs(deltaY) > Math.abs(deltaX)) {
                dragging.current = false;
                return;
            }
            if (Math.abs(deltaX) > 5) {
                isHorizontalDrag.current = true;
            }
        }

        const sensitivity = 0.4;
        const newRotation = startRotation.current - deltaX * sensitivity;
        setRotation(newRotation);
        const moveDistance = Math.abs(deltaX) + Math.abs(deltaY);

        if (moveDistance > 5) {
            moved.current = true;
        }

        e.preventDefault();
    };

    // Stop drag
    const stopDrag = () => {
        dragging.current = false;
        isHorizontalDrag.current = false;
    };

    // Handle click on project card
    const handleClick = (e) => {
        if (dragging.current || moved.current) return;

        const clickX = e.clientX;
        const clickY = e.clientY;

        let closest = null;
        let minDist = Infinity;

        itemRefs.current.forEach((el, index) => {
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const dist = Math.hypot(centerX - clickX, centerY - clickY);

            if (dist < minDist) {
                minDist = dist;
                closest = displayedProjects[index];
            }
        });

        if (closest) {
            setModalProject(closest);
        }
    };

    return (
        <section id="projects" className="w-full min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:via-gray-900 dark:to-black flex flex-col items-center justify-center overflow-x-hidden relative py-8 md:py-12 transition-colors duration-300">
            {/* Header Section */}

            <SectionTitle title="My Projects" description="Explore my latest work and creative projects" />

            {/* 3D Carousel Section */}
            <div className="w-full h-[600px] md:h-[650px] lg:h-[750px] overflow-hidden flex items-center justify-center select-none">
                <div
                    className="relative w-full h-full flex items-center justify-center"
                    onClick={handleClick}
                    onMouseDown={startDrag}
                    onMouseMove={moveDrag}
                    onMouseUp={stopDrag}
                    onMouseLeave={stopDrag}
                    onTouchStart={startDrag}
                    onTouchMove={moveDrag}
                    onTouchEnd={stopDrag}
                    style={{
                        cursor: dragging.current ? 'grabbing' : 'grab',
                        touchAction: isMobile ? 'pan-y pinch-zoom' : 'none'
                    }}
                >
                    {/* 3D Carousel Container */}
                    <div
                        style={{
                            position: "relative",
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            perspective: isMobile ? "400px" : "1800px",
                        }}
                    >
                        <div
                            ref={carouselRef}
                            style={{
                                position: "relative",
                                width: `${cardWidth}px`,
                                height: `${cardHeight}px`,
                                transformStyle: "preserve-3d",
                                transform: `rotateY(${rotation}deg)`,
                                willChange: "transform",
                            }}
                        >
                            {displayedProjects.map((project, index) => {
                                const angle = index * armAngle;

                                return (
                                    <div
                                        key={project.id}
                                        ref={(el) => {
                                            itemRefs.current[index] = el;
                                        }}
                                        style={{
                                            position: "absolute",
                                            width: `${cardWidth}px`,
                                            height: `${cardHeight}px`,
                                            left: "50%",
                                            top: "50%",
                                            marginLeft: `-${cardWidth / 2}px`,
                                            marginTop: `-${cardHeight / 2}px`,
                                            transformStyle: "preserve-3d",
                                            transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                                            cursor: "pointer",
                                        }}
                                    >
                                        {/* Card Content */}
                                        <div
                                            style={{
                                                position: "absolute",
                                                inset: 0,
                                                transform: "rotateY(180deg)",
                                                borderRadius: isMobile ? "12px" : "18px",
                                                overflow: "hidden",
                                                backfaceVisibility: "hidden",
                                                display: "flex",
                                                flexDirection: "column",
                                            }}
                                            className="shadow-xl shadow-fuchsia-500/30 dark:shadow-fuchsia-500/30 bg-white dark:bg-gray-950 border border-fuchsia-300 dark:border-fuchsia-500/30"
                                        >
                                            {/* Image Section - Larger height */}
                                            <div
                                                // style={{
                                                //     borderRadius: isMobile ? "10px" : "16px",
                                                // }}
                                                className="relative w-full h-72 md:h-80 lg:h-[320px] overflow-hidden flex-shrink-0">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                                />

                                            </div>

                                            {/* Content Section - Takes remaining space */}
                                            <div className="p-5 md:p-6 flex flex-col flex-1">
                                                {/* Title - Larger text */}
                                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
                                                    {project.title}
                                                </h3>

                                                {/* Description - Larger text */}
                                                <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg mb-4 line-clamp-2">
                                                    {project.description}
                                                </p>

                                                {/* Tech Stack Tags - Larger */}
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {project.techStack.slice(0, 4).map((tech, i) => (
                                                        <span
                                                            key={i}
                                                            className="text-xs md:text-sm bg-fuchsia-100 dark:bg-fuchsia-500/20 text-fuchsia-700 dark:text-fuchsia-300 px-2 md:px-3 py-1 rounded-full"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                    {project.techStack.length > 4 && (
                                                        <span className="text-xs md:text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 md:px-3 py-1 rounded-full">
                                                            +{project.techStack.length - 4}
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Buttons - Always at bottom, larger size */}
                                                <div className="flex gap-3 mt-auto pt-2">
                                                    <a
                                                        href={project.liveLink}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-1 bg-fuchsia-600 hover:bg-fuchsia-700 text-white text-sm md:text-base py-2.5 md:py-3 rounded-lg flex items-center justify-center gap-2 transition-colors font-medium"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <FaEye size={16} /> Live Demo
                                                    </a>
                                                    <a
                                                        href={project.clientGithub}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-1 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white text-sm md:text-base py-2.5 md:py-3 rounded-lg flex items-center justify-center gap-2 transition-colors font-medium"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <FaGithub size={16} /> GitHub
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Details Modal */}
            {modalProject && (
                <div
                    className="fixed inset-0 z-[999] bg-black/50 dark:bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setModalProject(null)}
                    style={{ backdropFilter: "blur(4px)" }}
                >
                    <div
                        className="relative bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-3 right-3 z-10 text-gray-900 dark:text-white text-xl bg-gray-200 dark:bg-black/50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-black/70 transition-colors"
                            onClick={() => setModalProject(null)}
                        >
                            ✕
                        </button>

                        <div className="relative w-full h-72 md:h-96 lg:h-[430px]">
                            <img
                                src={modalProject.image}
                                alt={modalProject.title}
                                className="w-full h-full object-cover"
                            />

                        </div>

                        <div className="p-6 md:p-8">
                            <h3 className="text-3xl md:text-4xl font-bold text-fuchsia-600 dark:text-fuchsia-500 mb-3">
                                {modalProject.title}
                            </h3>
                            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">{modalProject.description}</p>

                            <div className="mb-6">
                                <h4 className="text-fuchsia-700 dark:text-fuchsia-400 font-semibold text-lg mb-3">Technology Stack</h4>
                                <div className="flex flex-wrap gap-2">
                                    {modalProject.techStack.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="bg-fuchsia-100 dark:bg-fuchsia-500/20 text-fuchsia-700 dark:text-fuchsia-300 px-3 py-1.5 rounded-full text-sm md:text-base"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-8">
                                <h4 className="text-fuchsia-700 dark:text-fuchsia-400 font-semibold text-lg mb-3">Key Features</h4>
                                <ul className="space-y-3">
                                    {modalProject.features.map((feature, i) => (
                                        <li key={i} className="text-gray-700 dark:text-gray-300 text-base flex gap-2">
                                            <span className="text-fuchsia-600 dark:text-fuchsia-400 mt-1">•</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a
                                    href={modalProject.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-fuchsia-600 hover:bg-fuchsia-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-colors text-base font-medium"
                                >
                                    <FaEye size={18} /> Live Demo
                                </a>
                                <a
                                    href={modalProject.clientGithub}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-colors text-base font-medium"
                                >
                                    <FaGithub size={18} /> Client Code
                                </a>
                                {modalProject.serverGithub && (
                                    <a
                                        href={modalProject.serverGithub}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition-colors text-base font-medium"
                                    >
                                        <FaGithub size={18} /> Server Code
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}