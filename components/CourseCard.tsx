"use client";

import { motion } from "framer-motion";
import { Course } from "@/lib/types";

import {
  Code,
  Rocket,
  FileCode,
  Sparkles,
} from "lucide-react";

interface Props {
  course: Course;
}

const icons = {
  Code,
  Rocket,
  FileCode,
  Sparkles,
};

export default function CourseCard({
  course,
}: Props) {
  const Icon =
    icons[
      course.icon_name as keyof typeof icons
    ] || Code;

  return (
    <motion.article
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
      className="
      relative
      overflow-hidden
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-900
      p-6
      shadow-lg
      hover:border-cyan-500/40
      hover:shadow-cyan-500/10
      "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-violet-500/5" />

      <div className="relative">
        <div className="mb-4">
          <Icon
            size={28}
            className="text-cyan-400"
          />
        </div>

        <h2 className="mb-4 text-xl font-semibold text-white">
          {course.title}
        </h2>

        <p className="mb-3 text-zinc-400">
          Progress {course.progress}%
        </p>

        <div className="h-3 w-full overflow-hidden rounded-full bg-zinc-800">
          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: `${course.progress}%`,
            }}
            transition={{
              duration: 1,
            }}
            className="h-full bg-gradient-to-r from-cyan-500 to-violet-500"
          />
        </div>
      </div>
    </motion.article>
  );
}