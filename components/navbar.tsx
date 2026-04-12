"use client";

import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, Logo } from "@/components/icons";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6">

        {/* Logo */}
        <NextLink className="flex items-center gap-2" href="/">
          <Logo />
          <p className="font-bold">ACME</p>
        </NextLink>

        {/* Nav Links */}
        <ul className="hidden md:flex gap-6">
          {siteConfig.navItems.map((item) => (
            <li key={item.href}>
              <NextLink
                className={clsx(
                  "text-foreground hover:text-accent transition-colors"
                )}
                href={item.href}
              >
                {item.label}
              </NextLink>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* GitHub */}
          <NextLink
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GithubIcon className="text-muted hover:text-foreground transition-colors" />
          </NextLink>

          {/* Theme Switch */}
          <ThemeSwitch />
        </div>

      </header>
    </nav>
  );
};