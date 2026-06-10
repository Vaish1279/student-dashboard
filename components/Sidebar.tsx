"use client";

import { Home, BookOpen, Trophy, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <nav className="h-screen w-20 border-r border-zinc-800 bg-zinc-950 flex flex-col items-center py-6 gap-6">
      <Home className="text-white" />
      <BookOpen className="text-zinc-500" />
      <Trophy className="text-zinc-500" />
      <Settings className="text-zinc-500" />
    </nav>
  );
}