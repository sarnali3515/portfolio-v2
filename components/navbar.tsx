"use client";

import NextLink from "next/link";
import Image from "next/image";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, Logo } from "@/components/icons";


export const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const current = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (current > lastScroll.current && current > 80) {
            setHidden(true);
          } else {
            setHidden(false);
          }

          lastScroll.current = current;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={clsx(
          "fixed top-4 left-1/2 z-50 -translate-x-1/2 w-full px-4 transition-all duration-500 ease-out",
          hidden
            ? "opacity-0 -translate-y-10 pointer-events-none"
            : "opacity-100 translate-y-0"
        )}
      >
        <header
          className="
            mx-auto flex h-16 max-w-5xl items-center justify-between
            rounded-2xl border border-white/10
            bg-white/10 px-6 shadow-lg backdrop-blur-xl
            dark:bg-white/10
          "
        >
          {/* Logo */}
          <NextLink className="flex items-center gap-2" href="/">
            <Image
              src="/logo-full.png"
              alt="KJSarnali Logo"
              width={120}
              height={100}
              priority
              className="object-contain"
            />
            {/* <p className="font-bold text-fuchsia-700 dark:text-fuchsia-500">
              KJSarnali
            </p> */}
          </NextLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6">
            {siteConfig.navItems.map((item) => (
              <li key={item.href}>
                <NextLink
                  className="text-sm font-medium text-foreground/70 dark:text-white hover:text-fuchsia-500"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </li>
            ))}
          </ul>

          {/* Right */}
          <div className="flex items-center gap-3">
            <NextLink
              href={siteConfig.links.github}
              target="_blank"
              className="text-foreground/70 hover:text-fuchsia-500 transition"
            >
              <GithubIcon />
            </NextLink>

            <ThemeSwitch />

            {/* Mobile menu button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setOpen(true)}
            >
              <Menu />
            </button>
          </div>
        </header>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={clsx(
          "fixed inset-0 z-50 md:hidden transition-all duration-300",
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* background */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* panel */}
        <div className="absolute right-0 top-0 h-full w-72 bg-white/10 backdrop-blur-2xl border-l border-white/10 p-6">
          <button
            className="mb-6"
            onClick={() => setOpen(false)}
          >
            <X />
          </button>

          <div className="flex flex-col gap-5">
            {siteConfig.navItems.map((item) => (
              <NextLink
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-white hover:text-fuchsia-400"
              >
                {item.label}
              </NextLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};