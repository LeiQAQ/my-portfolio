"use client";

import { motion, useReducedMotion, Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  floatingOrb,
  buttonHover,
  buttonTap,
} from "@/lib/animations";
import ParticlesBackground from "@/components/backgrounds/ParticlesBackground";
import GradientOrbs from "@/components/backgrounds/GradientOrbs";
import WavePattern from "@/components/backgrounds/WavePattern";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // 根据用户偏好调整动画
  const getAnimationProps = (variants: Variants) =>
    shouldReduceMotion
      ? { initial: false, animate: false }
      : { variants, initial: "hidden", animate: "visible" };

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-[var(--bg-primary)]"
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(56,189,248,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(56,189,248,0.02)_1px,transparent_1px)] bg-[size:24px_24px]"
        aria-hidden="true"
      />

      {/* 动画背景组件 */}
      <GradientOrbs />
      <ParticlesBackground />
      <WavePattern />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Main Title */}
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          {...getAnimationProps(fadeInUp)}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="bg-gradient-to-r from-[#38bdf8] via-[#818cf8] to-[#c084fc] bg-clip-text text-transparent">
            Hello, I'm Your Name
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl font-light text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto"
          {...getAnimationProps(fadeInUp)}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          Full Stack Developer | Creative Coder | Problem Solver
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          {...getAnimationProps(staggerContainer)}
          transition={{ delayChildren: 0.4 }}
        >
          {/* 主按钮 - 天空蓝渐变 */}
          <motion.a
            href="#about"
            className="group relative px-8 py-4 bg-gradient-to-r from-[#38bdf8] to-[#818cf8] text-white font-semibold rounded-full 
                       overflow-hidden min-w-[160px] text-center"
            variants={staggerItem}
            whileHover={shouldReduceMotion ? {} : buttonHover}
            whileTap={shouldReduceMotion ? {} : buttonTap}
          >
            {/* 悬停光效 */}
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10">了解更多</span>
          </motion.a>

          {/* 次按钮 - 透明+边框 */}
          <motion.a
            href="#contact"
            className="group relative px-8 py-4 border border-slate-400/30 dark:border-slate-500/30 text-slate-600 dark:text-slate-400 font-semibold rounded-full 
                       overflow-hidden min-w-[160px] text-center transition-all duration-300 
                       hover:border-sky-500/50 hover:text-sky-600 dark:hover:text-sky-400"
            variants={staggerItem}
            whileHover={shouldReduceMotion ? {} : buttonHover}
            whileTap={shouldReduceMotion ? {} : buttonTap}
          >
            {/* 悬停填充效果 */}
            <span className="absolute inset-0 bg-sky-500/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            <span className="relative z-10">联系我</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator - 简化动画 */}
      {!shouldReduceMotion && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <span className="text-sm text-slate-500 dark:text-slate-400/60">向下滚动</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-sky-500/60 dark:text-sky-400/60" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
