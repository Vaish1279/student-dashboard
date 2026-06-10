"use client";

import { motion } from "framer-motion";

export default function BentoGrid({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.section
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      initial="hidden"
      animate="show"
      className="grid gap-6 lg:grid-cols-3"
    >
      {children}
    </motion.section>
  );
}