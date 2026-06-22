"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar after 150px scroll
      if (window.scrollY > 150) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500 ease-out
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-6 pointer-events-none"
        }
      `}
    >
      <div className="bg-black/60 backdrop-blur border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          
          <div className="flex items-center gap-3">

            {/* Primary Logo */}
            <div className="relative w-12 h-12 md:w-14 md:h-14">
              <Image
                src="/images/LC_dayz_logo_title_transparent_copy_white.png"
                alt="The Last Chance Script Logo"
                fill
                className="object-contain"
              />
            </div>

            {/* Divider (important for structure) */}
            <div className="w-px h-6 bg-white/20" />

            {/* Secondary Logo */}
            <div className="relative w-12 h-12 md:w-14 md:h-14 opacity-80 hover:opacity-100 transition">
              <Image
                src="/images/tlcwhite.png"
                alt="The Last Chance Icon"
                fill
                className="object-contain"
              />
            </div>

          </div>

          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider text-zinc-300">
            <a href="#server" className="hover:text-white transition">Server</a>
            <a href="#rules" className="hover:text-white transition">Rules</a>
            <a href="#leaderboards" className="hover:text-white transition">Leaderboard</a>
            <a href="#community" className="hover:text-white transition">Community</a>
          </nav>

          <motion.a
            href="https://discord.gg/jDjbyS6P"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center px-4 py-2 border border-white/20 bg-white text-black uppercase tracking-wider text-xs hover:bg-transparent hover:text-white transition hover:shadow-[0_0_15px_rgba(88,101,242,0.3)]"
          >
            Join Discord
          </motion.a>
        </div>
      </div>
    </header>
  );
}