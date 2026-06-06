"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import SectionTitle from "../SectionTitle";

const experienceData = [
    {
        company: "Nexlent",
        position: "Frontend Developer Intern",
        period: "Nov 2024 - Feb 2025",
        description: [
            "Worked on frontend features using Nextjs and TypeScript.",
            "Fixed UI bugs and improved responsive layouts.",
        ],
        technologies: ["Next.js", "React.js", "TypeScript"],
    },
    {
        company: "Oodaktar",
        position: "Frontend App Developer",
        period: "Apr 2025 - Present",
        description: [
            "Built frontend features for Patient & Assistant apps using React Native + Expo.",
            "Developed Doctor Dashboard using Next.js.",
            "Implemented Prescription Management System with dynamic forms & API integration.",
            "Collaborated with backend team for REST API integration and testing.",
            "Converted Figma designs into responsive, pixel-perfect UI for web & mobile.",
        ],
        technologies: [
            "React Native",
            "Next.js",
            "React.js",
            "JavaScript",
        ],
    },
];

export default function ExperienceSection() {
    return (
        <section className="relative overflow-hidden bg-white py-20 text-zinc-900 dark:bg-black dark:text-white md:py-28">
            {/* Glow */}
            <div className="absolute inset-0">
                <div className="absolute left-1/2 top-0 h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-fuchsia-200/30 blur-[100px] dark:bg-fuchsia-500/10 md:h-[400px] md:w-[400px]" />

                <div className="absolute bottom-0 right-0 h-[200px] w-[200px] rounded-full bg-cyan-200/30 blur-[80px] dark:bg-cyan-500/10 md:h-[300px] md:w-[300px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-6">
                <SectionTitle
                    title="Experience"
                    description="Building scalable and modern frontend applications."
                />

                <div className="relative mt-16">
                    {/* Timeline line */}
                    <div className="absolute left-4 top-0 h-full w-[2px] bg-zinc-200 dark:bg-white/10 md:left-1/2 md:-translate-x-1/2" />

                    <div className="space-y-14 md:space-y-24">
                        {experienceData.map((item, index) => (
                            <ExperienceCard
                                key={index}
                                item={item}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ExperienceCard({ item, index }) {
    const ref = useRef(null);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isEven = index % 2 === 0;

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const desktopY = useTransform(
        scrollYProgress,
        [0, 1],
        isEven ? [250, -80] : [-250, 80]
    );

    const scale = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [0.98, 1, 0.98]
    );

    return (
        <motion.div
            ref={ref}
            style={{
                y: isMobile ? 0 : desktopY,
                scale: isMobile ? 1 : scale,
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className={`relative flex ${isEven ? "md:justify-start" : "md:justify-end"
                }`}
        >
            {/* Dot */}
            <div className="absolute left-4 top-8 z-20 h-4 w-4 -translate-x-1/2 rounded-full border border-fuchsia-400 bg-white shadow-md dark:bg-black md:top-10 md:h-5 md:w-5 md:left-1/2" />

            {/* Card */}
            <motion.div
                whileHover={
                    !isMobile
                        ? {
                            y: -6,
                        }
                        : {}
                }
                className="ml-10 w-full md:ml-0 md:w-[46%]"
            >
                <div className="relative rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition dark:border-white/10 dark:bg-gradient-to-b dark:from-[#16161d] dark:to-[#0d0d12] md:rounded-3xl md:p-8">
                    {/* Glow */}
                    <div className="absolute inset-0 rounded-3xl bg-fuchsia-100/30 opacity-0 transition dark:bg-[radial-gradient(circle_at_top,rgba(217,70,239,0.12),transparent_60%)]" />

                    <div className="relative z-10">
                        {/* Top */}
                        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                            <div>
                                <h3 className="text-xl font-bold md:text-2xl">
                                    {item.company}
                                </h3>

                                <p className="text-sm text-fuchsia-600 dark:text-fuchsia-400 md:text-base">
                                    {item.position}
                                </p>
                            </div>

                            <div className="w-fit rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 md:px-4 md:py-2 md:text-sm">
                                {item.period}
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mt-6 space-y-3 md:mt-8 md:space-y-4">
                            {item.description.map((desc, i) => (
                                <div key={i} className="flex gap-3">
                                    <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-fuchsia-500" />

                                    <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-base">
                                        {desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Tech */}
                        <div className="mt-6 flex flex-wrap gap-2 md:mt-8 md:gap-3">
                            {item.technologies.map((tech, i) => (
                                <div
                                    key={i}
                                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-700 dark:border-fuchsia-500/20 dark:bg-fuchsia-500/10 dark:text-fuchsia-300 md:px-4 md:py-2 md:text-sm"
                                >
                                    {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}