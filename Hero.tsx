"use client";

import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";
import { useEffect, useState } from "react";

export default function Hero() {


  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      
      {/* Video */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover scale-110 brightness-110 contrast-110 pointer-events-none"
        >
          <source src="/videos/tlctrailer.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlays */}
      {/* Dark base fade */}
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

      {/* Bottom-to-top fog */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10 pointer-events-none" />

      {/* Center vignette (IMPORTANT for cinematic focus) */}
        <div className="absolute inset-0 [background:radial-gradient(circle_at_center,rgba(0,0,0,0.2),rgba(0,0,0,0.9))] z-10 pointer-events-none" />

      {/* Particles */}
      <Particles
        className="absolute inset-0 z-20 pointer-events-none"
        options={{
          fullScreen: true,
          particles: {
            number: { value: 60 },
            color: { value: "#ffffff" },
            opacity: { value: 0.12 },
            size: { value: { min: 1, max: 3 } },
            move: {
              enable: true,
              speed: 0.35,
              direction: "top",
              random: true,
            },
          },
        }}
      />

      {/* Content */}
      <div className="relative z-30 flex h-full flex-col justify-center px-6 lg:px-20">
        
       <motion.img
          src="/public/images/LC_dayz_logo_title_transparent_copy_white.png"
          alt="The Last Chance"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-[420px] md:w-[600px] drop-shadow-[0_0_60px_rgba(0,0,0,0.9)]"
        />
        <p className="max-w-2xl text-zinc-300 mb-8 text-lg">
          Build. Raid. Survive. A brutal DayZ experience where every decision matters.
        </p>
        <motion.a
          href="https://discord.gg/jDjbyS6P"
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.95, y: 2 }}
          whileHover={{ scale: 1.02 }}
          className="inline-flex w-auto items-center justify-center px-6 py-3 border border-white/20 bg-white text-black uppercase transition hover:bg-transparent hover:text-white hover:shadow-[0_0_20px_rgba(88,101,242,0.3)]"
        >
          Join Discord
        </motion.a>

      </div>

    </section>
  );
}