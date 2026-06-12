"use client"

import { useEffect, useState } from "react";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaWhatsapp,
    FaGithub,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

const texts = [
    "Frontend Developer",
    "Next.js & React Developer",
    "React Native Developer",
    "Mern Stack Developer",
];

export default function HeroSection() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative overflow-hidden min-h-screen flex items-center py-10 bg-white dark:bg-[#070012] transition-colors duration-500">

            {/* Glow Background */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-fuchsia-500/10 dark:bg-fuchsia-600/20 blur-[120px] rounded-full" />
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-fuchsia-400/10 dark:bg-fuchsia-500/10 blur-[140px] rounded-full" />

            {/* Left Social Bar */}
            <div data-aos="fade-up" data-aos-delay="400"
                className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-20">

                <p className="rotate-[-90deg] text-gray-600 dark:text-white/70 text-sm tracking-[0.35em] uppercase whitespace-nowrap transition-colors duration-500">
                    Connect
                </p>

                <div className="w-[1px] h-16 bg-gray-300 dark:bg-white/20 mt-10 transition-colors duration-500" />

                <div className="flex flex-col gap-4 text-gray-600 dark:text-white/70 transition-colors duration-500">


                    <a
                        href="https://www.linkedin.com/in/khatuna-jannat-sarnali/"
                        target="_blank"
                        className="hover:text-fuchsia-500 transition duration-300"
                    >
                        <FaLinkedinIn size={15} />
                    </a>



                    <a
                        href="https://github.com/sarnali3515"
                        target="_blank"
                        className="hover:text-fuchsia-500 transition duration-300"
                    >
                        <FaGithub size={15} />
                    </a>

                    <a
                        href="mailto:kjsarnali@gmail.com"
                        className="hover:text-fuchsia-500 transition duration-300"
                    >
                        <MdEmail size={17} />
                    </a>

                    <a
                        href="https://www.facebook.com/khatunajannatsarnali"
                        target="_blank"
                        className="hover:text-fuchsia-500 transition duration-300"
                    >
                        <FaFacebookF size={15} />
                    </a>

                    <a
                        href="https://wa.me/8801876621880"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-fuchsia-500 transition duration-300"
                    >
                        <FaWhatsapp size={15} />
                    </a>
                </div>
            </div>

            <div className="container mx-auto px-6 lg:px-24 2xl:px-16 py-20 grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-1 items-center overflow-hidden">

                {/* Left Content */}
                <div
                    data-aos="fade-left"
                    data-aos-delay="300"
                    className="relative z-10">

                    <p
                        data-aos="fade-up" data-aos-delay="200"
                        className="mb-3 text-gray-700 dark:text-white/90 lg:text-xl transition-colors duration-500">
                        Hello! I am
                    </p>

                    <h1 data-aos="fade-up" data-aos-delay="300"
                        className="text-2xl md:text-5xl 2xl:text-6xl font-extrabold leading-tight whitespace-nowrap text-gray-900 dark:text-white transition-colors duration-500">
                        Khatuna Jannat Sarnali
                    </h1>

                    <div data-aos="fade-up"
                        data-aos-delay="400"
                        className="mt-4 text-xl md:text-4xl 2xl:text-5xl font-bold">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 25 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -25 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeInOut",
                                }}
                                className="text-fuchsia-500 font-bold text-xl md:text-4xl 2xl:text-5xl"
                            >
                                {texts[index].split("").map((char, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: i * 0.03,
                                            duration: 0.3,
                                        }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <p data-aos="fade-up" data-aos-delay="500"
                        className="mt-6 max-w-xl text-gray-600 dark:text-white/60 leading-relaxed lg:text-lg transition-colors duration-500">
                        Frontend Developer experienced in building modern web and mobile
                        applications using Next.js, React, and React Native. Passionate about
                        writing clean, maintainable code and creating scalable, user-friendly
                        solutions.
                    </p>

                    {/* mobile icon */}
                    <div
                        data-aos="fade-up" data-aos-delay="600"
                        className="flex lg:hidden items-center gap-4 mt-6 text-gray-600 dark:text-white/70">

                        <a
                            href="https://www.linkedin.com/in/khatuna-jannat-sarnali/"
                            target="_blank"
                            className="hover:text-fuchsia-500 transition duration-300"
                        >
                            <FaLinkedinIn size={15} />
                        </a>



                        <a
                            href="https://github.com/sarnali3515"
                            target="_blank"
                            className="hover:text-fuchsia-500 transition duration-300"
                        >
                            <FaGithub size={15} />
                        </a>

                        <a
                            href="mailto:kjsarnali@gmail.com"
                            className="hover:text-fuchsia-500 transition duration-300"
                        >
                            <MdEmail size={17} />
                        </a>

                        <a
                            href="https://www.facebook.com/khatunajannatsarnali"
                            target="_blank"
                            className="hover:text-fuchsia-500 transition duration-300"
                        >
                            <FaFacebookF size={15} />
                        </a>

                        <a
                            href="https://wa.me/8801876621880"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-fuchsia-500 transition duration-300"
                        >
                            <FaWhatsapp size={15} />
                        </a>

                    </div>

                    <div
                        data-aos="fade-up"
                        data-aos-delay="600"
                        className="mt-10 flex flex-wrap gap-4"
                    >
                        {/* View Projects */}
                        <a
                            href="#projects"
                            className="
    inline-flex items-center justify-center
    border-2 border-fuchsia-500
    text-fuchsia-600 dark:text-fuchsia-400
    hover:bg-fuchsia-500 hover:text-white
    transition-all duration-300
    px-4 py-2.5
    md:px-7 md:py-4
    rounded-full
    text-xs md:text-base
    font-semibold
  "
                        >
                            View Projects
                        </a>

                        {/* Resume */}
                        <a
                            href="/sarna-resume.pdf"
                            download
                            className="
    group
    inline-flex items-center justify-center gap-2
    bg-fuchsia-600 hover:bg-fuchsia-500
    transition-all duration-300
    px-4 py-2.5
    md:px-7 md:py-4
    rounded-full
    text-xs md:text-base
    text-white font-semibold
  "
                        >
                            Download Resume
                            <span
                                className="
      w-5 h-5 md:w-7 md:h-7
      rounded-full
      bg-white/20
      flex items-center justify-center
      group-hover:translate-x-1 transition
    "
                            >
                                →
                            </span>
                        </a>
                    </div>
                </div>

                {/* Right Image */}
                <div data-aos="zoom-in" data-aos-delay="200"
                    className="relative flex justify-center lg:justify-end">

                    {/* Neon Border */}
                    <div className="relative w-[340px] md:w-[380px] h-[260px] md:h-[320px] rounded-[35px] p-1 bg-gradient-to-br from-fuchsia-500 to-blue-600 shadow-[0_0_70px_rgba(217,70,239,0.35)]">

                        {/* Inner Box */}
                        <div className="relative w-full h-full bg-gray-100 dark:bg-gray-950 rounded-[32px] overflow-visible transition-colors duration-500">

                            {/* Image */}
                            <img
                                src="/images/banner.png"
                                alt="Portfolio Character"
                                className="
                                    absolute
                                    bottom-0
                                    left-1/2
                                    -translate-x-1/2
                                    w-[115%]
                                    md:w-[125%]
                                    h-auto
                                    object-contain
                                "
                            />
                        </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute top-8 left-2 lg:left-20 text-fuchsia-500 text-xl lg:text-3xl animate-pulse">
                        ✧
                    </div>

                    <div className="absolute bottom-12 left-8 lg:left-32 text-gray-700 dark:text-white text-lg lg:text-2xl animate-bounce transition-colors duration-500">
                        ✧
                    </div>

                    <div className="absolute -top-6 right-10 w-24 h-24 bg-fuchsia-500/20 blur-3xl rounded-full" />
                </div>
            </div>
        </section>
    );
}