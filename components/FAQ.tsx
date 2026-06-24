"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How do I join The Last Chance?",
    answer: [
      "Join the Discord, read the rules, install the required mods, then search for The Last Chance in the DayZ launcher. View the Server Info section for more specific instructions."
    ]
  },
  {
    question: "Is roleplay required?",
    answer: [
      "The server is organic roleplay-focused. You do not need to perform a character voice, but interactions should feel grounded and immersive."
    ]
  },
  {
    question: "Can I raid bases?",
    answer: [
      "Yes, but only within the server’s established raiding rules and restrictions."
    ]
  },
  {
    question: "What does it cost to raid a base using a Raid Hammer?",
    keepinmind: "One Raid Hammer is capable of destroying a single pristine lock or one fully constructed wall panel from either a vanilla or modded wall.",
    answer: [
      "Codelock - 5 cycles - 2.5 minutes per cycle - 12.5 minutes total",
      "4-dial - 5 cycles - 2.5 minutes per cycle - 12.5 minutes total",
      "3-dial - 5 cycles - 2.5 minutes per cycle - 12.5 minutes total",
      "Vanilla Walls - 2 cycles per panel/frame - 2 minutes per cycle - 8 minutes total for 2x wooden parts",
      "Vanilla Metal - 2 cycles per panel/frame - 3.25 minutes per cycle - 11.5 minutes total for 1x metal part",
      "Modded Single Wood - 1 cycle per panel/frame - 5 wooden parts - 1.75 minutes per cycle - 8.75 minutes total for 5x wooden parts",
      "Modded Single Metal - 1 cycle per panel/frame - 2 metal parts - 1.5 minutes per cycle - 11.75 minutes total for 5x wooden parts + 2x metal parts",
      "Modded Double Wood - 1 cycle per panel/frame - 5 wooden parts - 1.75 minutes per cycle - 8.75 minutes total for 5x wooden parts",
      "Modded Double Metal - 1 cycle per panel/frame - 2 metal parts - 1.5 minutes per cycle - 11.75 minutes total for 5x wooden parts + 2x metal parts"
    ]
  },
  {
    question: "I found this item called a Heavy Breaching Charge. What is it?",
    answer: [
      "Heavy Breaching Charges are one of only 2 ways (Raid Hammer being the other) to breach a base’s walls or doors.",
      "They are extremely rare and can only be found in the T5/T6 military crate inside keycard bunkers.",
      "Placing the breaching charge takes 30 seconds, interact again to arm the charge.",
      "Explosion occurs 2 minutes after arming, during this 2 minutes you or the defender is able to defuse (15 seconds)",
      "Explosion removes all frames and panels on both vanilla and modded doors, however the explosion also removes fence posts on modded doors."
    ]
  },
  {
    question: "What's the deal with the keycard bunkers?",
    answer: [
            "Contain one military crate, spawned upon entry.",
            "The crate is LOCKED and requires one of the following tools: Lockpick, Sledgehammer, Crowbar, Pickaxe, Hacksaw, Hammer, or Raidhammer.",
            "The crate despawns after 30 minutes.",
            "Do NOT log out or remain in the bunker during a restart (T5 or T6).",
            "Players will be teleported out automatically to prevent loot cycling.",
            "The crate will despawn and the bunker will reset.",
            "No refunds will be given."
        ]
  },
  {
    question: "How do I use the RAG Workbench?",
    answer: [
      "First, place the workbench and add a RAG blueprint. You will then be able to craft plants, carpets and paintings.",
      "Blank canvas can be crafted with 20 nails and 10 planks",
      "With a Hammer in hand you can add tarp, plant debris or seeds to slots in workbench. Scroll through recipes to see items available.",
      "RED spray paint can to paint blank canvas (scroll through options with red spray paint can in hand)",
      "WHITE spray paint can to reset painted canvas",
    ]
  },
  {
    question: "What recipes can I craft with the RAG Workbench?",
    answer: [
      "The following is a list of items that must be combined in the VICINITY of the workbench, not via the workbench.",
      "Planter Box Kit (10 planks, 50 nails)",
      "Tire Rack Kit (3 metal, 60 nails)",
      "Firewood Holder Kit (1 metal, 30 nails)",
      "Tool Wagon Kit (2 metal, 60 nails)",
      "Brazier (1x metal, 5x sticks)",
      "Small Brazier (1x metal, 20x nails)"
    ]
  },
  {
    question: "How do pelts and animal parts work?",
    answer: [
    "The following items can be crafted:",
    "Deer Skull Mask = Deer Skull + Deer Pelt",
    "Antler Piece = Deer Skull + Hacksaw",
    "Antler Dagger = Dagger Blade + Antler Piece",
    "Dagger Blade = Metal Plate + Hammer",
    "Deer Head Mount = 5 Planks + Deer Pelt",
    "Bear Head Mount = 5 Planks + Bear Pelt",
    "Bear Skin Rug = Bear Pelt + Bear Pelt",
    "Cow Skin Rug = Cow Pelt + Cow Pelt",
    "Wolf Skin Rug = Wolf Pelt + Wolf Pelt",
    "Deer also have a chance to drop their skulls when skinned."
    ]
    },
  {
    question: "How long do the modded storage items last?",
    answer: [
      "All MMG lockers - 10 days",
      "RAG workbench - 14 days",
      "RAG planter box -  14 days",
      "Boats (Rubber Boat/Whaler) - 7 days"
    ]
  },
  {
    question: "How long do vanilla storage items last?",
    answer: [
      "Any built structure(walls modded and vanilla) - 45 days",
      "Large Tent - 7 days",
      "Car Tent - 7 days",
      "Tarp/Leather/Stick Shelters - 7 days",
      "Vehicles - 7 days"
    ]
  },
  
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative py-24 px-6 bg-black border-t border-white/5 scroll-mt-24"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="uppercase tracking-[0.45em] text-zinc-500 text-xs mb-4">
            Survivor Intel
          </p>

          <h2 className="text-4xl md:text-6xl font-bold uppercase text-white">
            FAQ
          </h2>

          <p className="mt-4 text-zinc-400">
            Common asked questions on The Last Chance.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="text-sm md:text-base uppercase tracking-wider font-semibold text-white">
                    {faq.question}
                  </span>

                  <span className="text-zinc-400 text-xl">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-zinc-400 leading-relaxed">
                        {"keepinmind" in faq && faq.keepinmind && (
                          <p className="mb-4 border-l border-white/20 pl-4 text-zinc-300">
                            {faq.keepinmind}
                          </p>
                        )}

                        <ul className="space-y-3">
                          {faq.answer.map((item, i) => (
                            <li key={i} className="flex gap-3">
                              <span className="text-white/50">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}