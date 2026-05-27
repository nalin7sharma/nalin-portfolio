"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const shouldUseDark = storedTheme ? storedTheme === "dark" : true;
    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme);
    window.localStorage.setItem("theme", nextTheme ? "dark" : "light");
  };

  const Icon = isDark ? Moon : Sun;

  if (!mounted) return null;

  return (
    <motion.button
      type="button"
      suppressHydrationWarning
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      onClick={toggleTheme}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="group relative inline-flex size-10 items-center justify-center overflow-hidden rounded-md border border-slate-900/10 bg-white/70 text-foreground shadow-sm backdrop-blur-xl transition-colors hover:border-cyan-500/40 hover:bg-white/95 dark:border-white/[0.12] dark:bg-white/5 dark:text-white dark:hover:border-cyan-300/45 dark:hover:bg-white/10"
      whileHover={{ y: -2, scale: 1.03 }}
      whileTap={{ scale: 0.94 }}
    >
      <motion.span
        className="absolute inset-1 rounded-md bg-gradient-to-br from-cyan-300/25 via-transparent to-violet-400/25"
        animate={{ rotate: isDark ? 0 : 180, opacity: [0.45, 0.8, 0.45] }}
        transition={{ rotate: { duration: 0.45 }, opacity: { repeat: Infinity, duration: 2.8 } }}
      />
      <motion.span
        key={isDark ? "dark" : "light"}
        className="relative z-10"
        initial={{ rotate: -45, opacity: 0, scale: 0.7 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 45, opacity: 0, scale: 0.7 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Icon className="size-4" />
      </motion.span>
    </motion.button>
  );
}
