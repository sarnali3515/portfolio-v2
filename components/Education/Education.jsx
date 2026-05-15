"use client";
import React, { useState } from "react";
import SectionTitle from "../SectionTitle";

const Education = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [tilt, setTilt] = useState({});

    const handleMouseMove = (e, id) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        setTilt((prev) => ({
            ...prev,
            [id]: {
                x: -((y - centerY) / centerY) * 20,
                y: ((x - centerX) / centerX) * 20,
            },
        }));
    };

    const handleMouseLeave = (id) => {
        setTilt((prev) => ({
            ...prev,
            [id]: { x: 0, y: 0 },
        }));
    };

    const educationList = [
        {
            id: 1,
            title: "Bachelor of Computer Science and Engineering",
            institution: "Daffodil International University",
            year: "2020-2023",
            logo: "/images/icons/diu.png",
            cgpa: "CGPA: 3.83/4.00",
            background: "/images/icons/diu-bg.jpeg",
        },
        {
            id: 2,
            title: "Higher Secondary Certificate",
            institution: "Chittagong Government Women College",
            year: "2018",
            logo: "/images/icons/cgwc.png",
            cgpa: "GPA: 4.33/5.00",
            background: "/images/icons/cgwc-bg.jpg",
        },
        {
            id: 3,
            title: "Secondary School Certificate",
            institution: "Chittagong Government Girls High School",
            year: "2016",
            logo: "/images/icons/cgghss.png",
            cgpa: "GPA: 5.00/5.00",
            background: "/images/icons/cgghs-bg.jpeg",
        },
    ];

    return (
        <div id="education" className="w-full px-4 sm:px-6 lg:px-12 2xl:px-24 py-10 lg:py-32 xl:py-40 bg-gradient-to-b from-gray-50 to-white dark:from-black dark:to-gray-900 relative transition-colors duration-300">
            {/* Title */}
            <SectionTitle title="Education" description="Education section demo" />

            <div className="relative z-10 max-w-6xl lg:max-w-7xl xl:max-w-[1400px] 2xl:max-w-[1600px] w-full mx-auto mt-10 lg:mt-28">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 2xl:gap-12 mt-10">
                    {educationList.map((edu, index) => (
                        <div
                            key={edu.id}
                            data-aos="fade-up"
                            data-aos-delay={50 * index}
                            data-aos-duration="1200"
                            onMouseEnter={() => setHoveredIndex(edu.id)}
                            onMouseMove={(e) => handleMouseMove(e, edu.id)}
                            onMouseLeave={() => {
                                handleMouseLeave(edu.id);
                                setHoveredIndex(null);
                            }}
                            style={{
                                transform: `perspective(1000px)
        rotateX(${tilt[edu.id]?.x || 0}deg)
        rotateY(${tilt[edu.id]?.y || 0}deg)
        scale(1.04)`,
                            }}
                            className="group relative rounded-2xl overflow-hidden transition-transform duration-300 transform-gpu"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                                style={{ backgroundImage: `url('${edu.background}')` }}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/50 to-black/10 dark:from-black/95 dark:via-black/80 dark:to-black/70 group-hover:from-white/70 group-hover:via-white/60 dark:group-hover:from-black/90 dark:group-hover:via-black/70 transition-all duration-300" />


                            {/* Content */}
                            <div className="relative z-10 p-3 lg:p-8 flex flex-col items-center text-center min-h-[400px] justify-center">
                                {/* Logo */}
                                <div className="relative">
                                    <div className="absolute inset-0 rounded-full bg-fuchsia-500/20 blur-xl transition-opacity duration-500" />
                                    <div className="relative mb-6 p-4 bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-full w-32 h-32 flex items-center justify-center transition-all duration-300">
                                        <img src={edu.logo} alt={edu.institution} className="h-24 w-24 object-contain" />
                                    </div>
                                </div>

                                {/* Title & Info */}
                                <div className="space-y-3">
                                    <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300 font-lora">
                                        {edu.title}
                                    </h2>
                                    <h5 className="text-md lg:text-xl text-fuchsia-900 dark:text-fuchsia-400 font-bold">
                                        {edu.institution}
                                    </h5>
                                    <p className="text-sm lg:text-base text-gray-950 dark:text-white/80 font-semibold">
                                        {edu.year}
                                    </p>
                                </div>

                                {/* Decorative Line */}
                                <div className={`w-12 h-0.5 bg-fuchsia-600 dark:bg-fuchsia-500/50 transition-all duration-300 mt-4 ${hoveredIndex === edu.id ? 'w-24' : 'w-12'}`} />
                            </div>


                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Education;