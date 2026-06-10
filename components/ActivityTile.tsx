"use client";

import { motion } from "framer-motion";

export default function ActivityTile() {
  const bars = [30, 70, 40, 90, 60, 80, 50];

  return (
    <motion.section
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
        },
        show: {
          opacity: 1,
          y: 0,
        },
      }}
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6"
    >
      <h2 className="mb-6 text-xl font-semibold text-white">
        Weekly Activity
      </h2>

      <div className="flex h-40 items-end gap-3">
        {bars.map((bar, index) => (
          <motion.div
            key={index}
            initial={{
              height: 0,
            }}
            animate={{
              height: `${bar}%`,
            }}
            transition={{
              delay: index * 0.1,
              duration: 0.6,
            }}
            className="flex-1 rounded-t-xl bg-gradient-to-t from-cyan-500 to-violet-500"
          />
        ))}
      </div>
    </motion.section>
  );
}