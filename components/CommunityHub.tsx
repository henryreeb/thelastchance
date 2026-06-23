"use client";

import {
  FaDiscord,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";

const links = [
  {
    name: "Discord",
    href: "https://discord.gg/jDjbyS6P",
    icon: FaDiscord,
    desc: "Join our active community",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@TheLastChanceDayZed",
    icon: FaYoutube,
    desc: "Watch raids and events",
  },
  {
    name: "Twitter/X",
    href: "https://twitter.com/lastchancedayz",
    icon: FaTwitter,
    desc: "Social updates and news",
  },
];

export default function CommunityHub() {
  return (
    <section className="py-24 px-6 bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.35em] text-zinc-500 text-xs mb-3">
            Communications
          </p>

          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">
            Stay Connected
          </h2>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-fit mx-auto">
          {links.map((link, i) => {
            const Icon = link.icon;

            return (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.4,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                }}
                className="group border border-white/10 bg-black/40 backdrop-blur p-6 flex flex-col items-center text-center"
              >
                <div className="mb-4 p-4 border border-white/10 bg-white/5">
                  <Icon size={28} />
                </div>

                <h3 className="text-lg font-bold uppercase mb-2">
                  {link.name}
                </h3>

                <p className="text-zinc-400 text-sm">
                  {link.desc}
                </p>

                <div className="w-full h-[1px] bg-white/10 mt-6 group-hover:bg-white/20 transition" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}