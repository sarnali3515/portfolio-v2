"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
            "Converted Figma designs into responsive, pixel-perfect UI for web & mobile."
        ],
        technologies: ["React Native", "Next.js", "React.js", "JavaScript"],
    },
];

export default function ExperienceSection() {
    return (
        <section className="relative overflow-hidden bg-white text-zinc-900 dark:bg-black dark:text-white py-28">
            {/* Glow  */}
            <div className="absolute inset-0">
                <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-fuchsia-200/30 blur-[120px] dark:bg-fuchsia-500/10" />

                <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-cyan-200/30 blur-[100px] dark:bg-cyan-500/10" />
            </div>

            <div className="relative z-10 mx-auto max-w-6xl px-6">
                {/* Header */}
                <SectionTitle title="Experience" description=" Building scalable and modern frontend applications." />

                {/* Timeline */}
                <div className="relative">
                    {/* Line */}
                    <div className="absolute left-4 top-0 h-full w-[2px] bg-zinc-200 dark:bg-white/10 md:left-1/2 md:-translate-x-1/2" />

                    <div className="space-y-24">
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
    const isEven = index % 2 === 0;

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(
        scrollYProgress,
        [0, 1],
        isEven ? [400, -120] : [-400, 120]
    );

    const scale = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [0.96, 1, 0.96]
    );

    return (
        <motion.div
            ref={ref}
            style={{ y, scale }}
            className={`relative flex ${isEven ? "md:justify-start" : "md:justify-end"
                }`}
        >
            {/* Dot */}
            <div className="absolute left-4 top-10 z-20 h-5 w-5 -translate-x-1/2 rounded-full border border-fuchsia-400 bg-white dark:bg-black shadow-md md:left-1/2" />

            {/* Card */}
            <motion.div
                whileHover={{ y: -6 }}
                className="group ml-14 w-full md:ml-0 md:w-[46%]"
            >
                <div className="relative rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition dark:border-white/10 dark:bg-gradient-to-b dark:from-[#16161d] dark:to-[#0d0d12]">

                    {/* Glow */}
                    <div className="absolute inset-0 rounded-3xl bg-fuchsia-100/30 opacity-0 transition dark:bg-[radial-gradient(circle_at_top,rgba(217,70,239,0.12),transparent_60%)]" />

                    <div className="relative z-10">
                        {/* Top */}
                        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
                            <div>
                                <h3 className="text-2xl font-bold">
                                    {item.company}
                                </h3>

                                <p className="text-fuchsia-600 dark:text-fuchsia-400">
                                    {item.position}
                                </p>
                            </div>

                            <div className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
                                {item.period}
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mt-8 space-y-4">
                            {item.description.map((desc, i) => (
                                <div key={i} className="flex gap-3">
                                    <div className="mt-2 h-2 w-2 rounded-full bg-fuchsia-500" />
                                    <p className="text-zinc-700 dark:text-zinc-300">
                                        {desc}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Tech */}
                        <div className="mt-8 flex flex-wrap gap-3">
                            {item.technologies.map((tech, i) => (
                                <div
                                    key={i}
                                    className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm text-zinc-700 dark:border-fuchsia-500/20 dark:bg-fuchsia-500/10 dark:text-fuchsia-300"
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