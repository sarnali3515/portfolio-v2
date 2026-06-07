"use client";

import Image from "next/image";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaWhatsapp,
    FaMapMarkerAlt,
    FaFacebookF,
} from "react-icons/fa";

export default function Footer() {
    const year = new Date().getFullYear();

    const links = [
        { name: "Home", href: "#home" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Experience", href: "#experience" },
        { name: "Contact", href: "#contact" },
    ];

    const socials = [
        { icon: FaGithub, href: "https://github.com/sarnali3515" },
        { icon: FaLinkedin, href: "https://www.linkedin.com/in/khatuna-jannat-sarnali" },
        { icon: FaEnvelope, href: "mailto:kjsarnali@gmail.com" },
        { icon: FaFacebookF, href: "https://facebook.com/khatunajannatsarnali" },
        { icon: FaWhatsapp, href: "https://wa.me/8801876621880" },
    ];

    return (
        <footer className="relative border-t border-fuchsia-500/10 bg-white dark:bg-black">
            {/* soft glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-[240px] w-[240px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[140px]" />

            <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">

                {/* TOP SECTION */}
                <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

                    {/* LEFT */}
                    <div>
                        <Image
                            src="/logo-full.png"
                            alt="Sarnali Logo"
                            width={180}
                            height={60}
                            className="h-auto w-[180px]"
                        />
                        <div className="mt-3 flex items-center gap-2 text-sm lg:text-base text-gray-900 dark:text-gray-300">
                            <FaMapMarkerAlt className="text-fuchsia-500" />
                            <span>Chittagong, Bangladesh</span>
                        </div>
                        <p className="mt-3 max-w-md text-sm text-gray-800 dark:text-gray-400">
                            Crafting modern, fast and scalable web experiences with React & Next.js
                        </p>
                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col items-center gap-6 md:items-end">

                        {/* MENU */}
                        <div className="flex flex-wrap justify-center gap-6 text-sm lg:text-base md:justify-end">
                            {links.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.href}
                                    className="text-gray-900 dark:text-gray-300 font-semibold transition hover:text-fuchsia-500"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* SOCIALS */}
                        <div className="flex gap-4">
                            {socials.map((item, i) => {
                                const Icon = item.icon;

                                return (
                                    <a
                                        key={i}
                                        href={item.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-fuchsia-500/20 bg-fuchsia-500/5 text-fuchsia-500 transition-all duration-300 hover:-translate-y-1 hover:bg-fuchsia-500 hover:text-white"
                                    >
                                        <Icon size={15} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* HR */}
                <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-fuchsia-500/20 to-transparent" />

                {/* COPYRIGHT */}
                <p className="text-center text-xs lg:text-sm text-gray-500">
                    © {year} Sarnali. All rights reserved.
                </p>
            </div>
        </footer>
    );
}