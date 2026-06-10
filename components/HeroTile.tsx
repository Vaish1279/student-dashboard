"use client";

import { motion } from "framer-motion";

interface HeroTileProps {
  count: number;
}

export default function HeroTile({
  count,
}: HeroTileProps) {
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
      transition={{
        duration: 0.5,
      }}
      className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-8"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-cyan-500/10 to-emerald-500/10" />

      <div className="relative">
        <p className="mb-2 text-zinc-400">
          Welcome back 👋
        </p>

        <h1 className="text-4xl font-bold text-white">
          Vaishnavi
        </h1>

        <div className="mt-6 flex gap-4">
          <div className="rounded-2xl bg-zinc-800 px-4 py-3">
            <p className="text-sm text-zinc-400">
              Learning Streak
            </p>

            <p className="text-xl font-bold text-white">
              🔥 14 Days
            </p>
          </div>

          <div className="rounded-2xl bg-zinc-800 px-4 py-3">
            <p className="text-sm text-zinc-400">
              Active Courses
            </p>

            <p className="text-xl font-bold text-white">
              {count}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}