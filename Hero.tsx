"use client";

import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import type { Engine } from "@tsparticles/react";


export default function Hero() {
  const particlesInit = async (engine: Engine) => {
    await loadSlim(engine);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background Video */}
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
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/35 z-10 pointer-events-none" />

      {/* Gradient Fog Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 pointer-events-none" />

      {/* Grain Texture Overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('/textures/grain.png')] bg-repeat z-10 pointer-events-none" />

      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-20 pointer-events-none"
        options={{
          fullScreen: false,
          fpsLimit: 60,
          particles: {
            number: {
              value: 80,
            },
            color: {
              value: "#ffffff",
            },
            opacity: {
              value: 0.08,
            },
            size: {
              value: { min: 1, max: 3 },
            },
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
        <div className="max-w-6xl mx-auto w-full">
          {/* Top Label */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="uppercase tracking-[0.45em] text-zinc-400 text-xs md:text-sm mb-6"
          >
            Organic Roleplay DayZ Survival Experience
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="uppercase font-black text-white leading-[0.9] text-6xl md:text-8xl lg:text-[10rem]"
          >
            The Last
            <br />
            Chance
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-6 max-w-xl text-zinc-300 text-lg md:text-xl"
          >
            An organic roleplay experience in a brutal world where survival is earned. Build your base, fight
            for territory, and trust no one.
          </motion.p>

          {/* CTA Buttons */}
          <motion.a
            href="https://discord.gg/jDjbyS6P"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.95, y: 2 }}
            whileHover={{ scale: 1.02 }}
            className="relative z-50 inline-flex items-center justify-center px-6 py-3 border border-white/20 bg-white text-black uppercase tracking-wider transition hover:bg-transparent hover:text-white hover:shadow-[0_0_20px_rgba(88,101,242,0.3)]"
          >
            Join Discord
          </motion.a>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent z-20" />

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-[1px] h-14 bg-white/40" />
      </motion.div>
    </section>
  );
}