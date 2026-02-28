"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="relative p-2 rounded-xl bg-slate-200 dark:bg-slate-800 
                 text-slate-700 dark:text-yellow-400
                 border border-slate-300 dark:border-slate-700
                 hover:border-slate-400 dark:hover:border-yellow-500/50
                 transition-colors duration-300"
      aria-label={theme === "dark" ? "切换到亮色模式" : "切换到暗色模式"}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </motion.div>
      
      {/* 发光效果 */}
      <div className="absolute inset-0 rounded-xl bg-yellow-400/20 dark:bg-yellow-400/10 
                      blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </motion.button>
  );
}
