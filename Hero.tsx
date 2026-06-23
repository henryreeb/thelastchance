"use client";

import { motion } from "framer-motion";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";
import { useCallback } from "react";

export default function Hero() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);
  return (
    <section className="relative isolate h-screen w-full overflow-hidden bg-black">
      
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
      {/* Fog Layers */}
        <div className="fog fog-1" />
        <div className="fog fog-2" />
        <div className="fog fog-3" />
        
      {/* Particles */}
      <ParticlesProvider init={particlesInit}>
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
      </ParticlesProvider>

      {/* Content */}
      <div className="relative z-30 flex h-full flex-col justify-center px-6 lg:px-20">
        
       <motion.img
          src="/images/LC_dayz_logo_title_transparent_copy_white.png"
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
          className="inline-flex w-fit self-start items-center justify-center px-6 py-3 border border-white/20 bg-white text-black uppercase transition hover:bg-transparent hover:text-white hover:shadow-[0_0_20px_rgba(88,101,242,0.3)]"
        >
          Join Discord
        </motion.a>
        {/* Server Info HUD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          id="server"
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto scroll-mt-32"
        >
          <div className="border border-white/10 bg-black/40 backdrop-blur-sm px-6 py-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
              Server IP
            </p>
            <button
              onClick={() => navigator.clipboard.writeText("40.160.28.204")}
              className="text-white font-semibold mt-2 hover:text-zinc-300 transition"
            >
              40.160.28.204
            </button>
          </div>

          <div className="border border-white/10 bg-black/40 backdrop-blur-sm px-6 py-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
              Port
            </p>
            <button
              onClick={() => navigator.clipboard.writeText("2302")}
              className="text-white font-semibold mt-2 hover:text-zinc-300 transition"
            >
              2302
            </button>
          </div>

          <div className="border border-white/10 bg-black/40 backdrop-blur-sm px-6 py-4">
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
              Location
            </p>
            <p className="text-white font-semibold mt-2">
              US-EAST
            </p>
          </div>
        </motion.div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 pointer-events-none flex flex-col items-center"
      >
        <div className="h-14 w-[1px] bg-white/40" />

        <p className="mt-3 text-center text-[10px] uppercase tracking-[0.35em] text-white/40">
          Scroll
        </p>
      </motion.div>
    </section>
  );
}