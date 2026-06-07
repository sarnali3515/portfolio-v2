"use client";

import {
    FaGithub,
    FaLinkedin,
    FaWhatsapp,
    FaEnvelope,
    FaArrowRight,
    FaFileAlt,
    FaFacebookF,
} from "react-icons/fa";

export default function ContactSection() {
    const contacts = [
        {
            title: "Email",
            value: "kjsarnali@gmail.com",
            href: "mailto:kjsarnali@gmail.com",
            icon: FaEnvelope,
        },
        {
            title: "WhatsApp",
            value: "+880 1876621880",
            href: "https://wa.me/8801876621880",
            icon: FaWhatsapp,
        },
        {
            title: "Github",
            value: "github.com/sarnali3515",
            href: "https://github.com/sarnali3515",
            icon: FaGithub,
        },
        {
            title: "LinkedIn",
            value: "linkedin.com/in/khatuna-jannat-sarnali",
            href: "https://www.linkedin.com/in/khatuna-jannat-sarnali",
            icon: FaLinkedin,
        },
        {
            title: "Facebook",
            value: "facebook.com/khatunajannatsarnali",
            href: "https://facebook.com/khatunajannatsarnali",
            icon: FaFacebookF,
        },
    ];

    return (
        <section className="relative overflow-hidden py-32">
            {/* glow */}

            <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-[180px]" />

            <div className="container mx-auto px-6">
                {/* heading */}

                <div className="mb-20 text-center">
                    <p className="mb-4 text-sm uppercase tracking-[0.5em] text-fuchsia-500">
                        CONTACT
                    </p>

                    <h2 className="mx-auto max-w-4xl text-5xl font-black leading-tight text-gray-900 md:text-7xl dark:text-white">
                        Let's Build Something
                        <span className="block text-fuchsia-500">
                            Amazing Together
                        </span>
                    </h2>
                </div>

                <div className="grid gap-12 xl:gap-18 lg:grid-cols-2">
                    {/* LEFT SIDE */}

                    <div>
                        <div className="mb-10">
                            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                                Ready to start a project?
                            </h3>

                            {/* <p className="mt-4 max-w-lg text-gray-500">
                                Whether you need a modern web application, portfolio,
                                dashboard or full-stack solution, I'm always open to
                                discussing new opportunities.
                            </p> */}
                        </div>

                        <div>
                            {contacts.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <a
                                        key={item.title}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-between border-b border-fuchsia-500/20 py-6 transition-all duration-300 hover:border-fuchsia-500"
                                    >
                                        <div className="flex items-center gap-5">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-fuchsia-500/10 text-fuchsia-500">
                                                <Icon />
                                            </div>

                                            <div>
                                                <h4 className="text-xl font-semibold text-gray-900 transition-colors group-hover:text-fuchsia-500 dark:text-white">
                                                    {item.title}
                                                </h4>

                                                <p className="text-gray-500">
                                                    {item.value}
                                                </p>
                                            </div>
                                        </div>

                                        <FaArrowRight className="text-fuchsia-500 transition-all duration-300 group-hover:translate-x-2" />
                                    </a>
                                );
                            })}
                        </div>

                        <p className="mt-10 text-gray-500">
                            Available for freelance, remote and full-time opportunities.
                        </p>
                    </div>

                    {/* RIGHT SIDE */}

                    <div className="rounded-3xl border border-fuchsia-500/20 bg-white/70 p-8 shadow-[0_0_50px_rgba(217,70,239,.08)] backdrop-blur-sm dark:bg-gray-950/80">
                        <form className="space-y-5">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-800 dark:text-gray-200">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full rounded-xl border border-gray-200 bg-transparent px-4 py-4 outline-none transition-all duration-300 focus:border-fuchsia-500 dark:border-gray-800"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-800 dark:text-gray-200">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    placeholder="abc@example.com"
                                    className="w-full rounded-xl border border-gray-200 bg-transparent px-4 py-4 outline-none transition-all duration-300 focus:border-fuchsia-500 dark:border-gray-800"
                                />
                            </div>

                            {/* <div>
                                <label className="mb-2 block text-sm font-medium text-gray-800 dark:text-gray-200">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    placeholder="Project Discussion"
                                    className="w-full rounded-xl border border-gray-200 bg-transparent px-4 py-4 outline-none transition-all duration-300 focus:border-fuchsia-500 dark:border-gray-800"
                                />
                            </div> */}

                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-800 dark:text-gray-200">
                                    Message
                                </label>

                                <textarea
                                    rows={6}
                                    placeholder="Tell me about your project..."
                                    className="w-full resize-none rounded-xl border border-gray-200 bg-transparent px-4 py-4 outline-none transition-all duration-300 focus:border-fuchsia-500 dark:border-gray-800"
                                />
                            </div>

                            <button
                                type="submit"
                                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-fuchsia-600 px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-fuchsia-700"
                            >
                                Send Message

                                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}