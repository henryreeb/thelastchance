"use client";

import { motion } from "framer-motion";

const rules = [
  {
    id: "01",
    title: "Respect Other Players",
    desc: "Treat everyone with basic respect. Harassment, hate speech, threats, or persistent toxic behavior are not tolerated.",
  },
  {
    id: "02",
    title: "Name Requirement",
    desc: "Your Discord screen name must match your in-game username. No exceptions.",
  },
  {
    id: "03",
    title: "No Explicit Content",
    desc: "Pornographic, sexually explicit, or disturbing NSFW content is prohibited in all community spaces.",
  },
  {
    id: "04",
    title: "No Spam or Unauthorized Promotion",
    desc: "Repeated spam, mic spam, excessive emoji spam, and advertising outside communities without approval are prohibited.",
  },
  {
    id: "05",
    title: "No Doxxing",
    desc: "Sharing personal information, attempting to expose real identities, or encouraging off-server harassment results in immediate removal.",
  },
  {
    id: "06",
    title: "Respect Privacy",
    desc: "Do not leak DMs, private conversations, or send unwanted harassment through direct messages.",
  },
  {
    id: "07",
    title: "Listen to Staff",
    desc: "Follow moderator instructions. Public arguments over moderation decisions are not allowed. Staff decisions are final unless overturned internally.",
  },
  {
    id: "08",
    title: "Meta Information Restriction",
    desc: "Out-of-character information cannot be used for in-game advantage. Meta knowledge must be at least 24 hours old before acting on it.",
  },
  {
    id: "09",
    title: "No Exploiting",
    desc: "Duping, cheating, abusing bugs, griefing without purpose, or exploiting systems damages the experience and will result in action.",
  },
  {
    id: "10",
    title: "Community Spirit Clause",
    desc: "Not every harmful action can be listed. Staff may act on behavior that clearly violates the spirit of fair play, immersion, and mutual respect.",
  },
];

export default function Rules() {
  return (
    <section 
        id="rules"
        className="relative py-24 px-6 bg-black border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.45em] text-zinc-500 text-xs mb-4">
            Operational Protocol
          </p>

          <h2 className="text-4xl md:text-6xl font-bold uppercase text-white">
            Server Rules
          </h2>

          <p className="mt-4 text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            These rules exist to protect the style, atmosphere, and long-term health
            of the community. Moderation is grounded in fairness and common sense,
            but staff reserve the right to act on behavior that clearly violates the
            spirit of the server—even if it isn’t explicitly listed below.
            </p>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {rules.map((rule, index) => (
            <motion.div
              key={rule.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group relative border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:border-white/20 transition"
            >
              {/* Rule Number */}
              <div className="text-zinc-600 text-xs tracking-[0.3em] mb-3">
                RULE {rule.id}
              </div>

              {/* Rule Title */}
              <h3 className="text-xl uppercase font-semibold text-white mb-2">
                {rule.title}
              </h3>

              {/* Rule Description */}
              <p className="text-zinc-400 leading-relaxed">
                {rule.desc}
              </p>

              {/* HUD Accent */}
              <div className="absolute top-0 left-0 w-8 h-[1px] bg-white/20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}