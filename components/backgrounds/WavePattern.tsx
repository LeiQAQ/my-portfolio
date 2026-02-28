"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function WavePattern() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden">
      {/* 暗色模式波浪 */}
      <div className="hidden dark:block">
        {/* 第一层 - 最深层 */}
        <motion.svg
          viewBox="0 0 1440 120"
          className="absolute bottom-0 w-full h-auto opacity-20"
          preserveAspectRatio="none"
          animate={shouldReduceMotion ? {} : { x: ["-5%", "5%", "-5%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        >
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#818cf8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
            fill="url(#waveGradient1)"
            animate={shouldReduceMotion ? {} : { d: [
              "M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z",
              "M0,60 C240,20 480,100 720,60 C960,20 1200,100 1440,60 L1440,120 L0,120 Z",
              "M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z"
            ]}}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.svg>

        {/* 第二层 */}
        <motion.svg
          viewBox="0 0 1440 100"
          className="absolute bottom-0 w-full h-auto opacity-30"
          preserveAspectRatio="none"
          animate={shouldReduceMotion ? {} : { x: ["5%", "-5%", "5%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <defs>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#818cf8" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#c084fc" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,50 C360,90 720,10 1080,50 C1260,70 1350,30 1440,50 L1440,100 L0,100 Z"
            fill="url(#waveGradient2)"
            animate={shouldReduceMotion ? {} : { d: [
              "M0,50 C360,90 720,10 1080,50 C1260,70 1350,30 1440,50 L1440,100 L0,100 Z",
              "M0,50 C360,10 720,90 1080,50 C1260,30 1350,70 1440,50 L1440,100 L0,100 Z",
              "M0,50 C360,90 720,10 1080,50 C1260,70 1350,30 1440,50 L1440,100 L0,100 Z"
            ]}}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.svg>

        {/* 第三层 - 最浅层 */}
        <motion.svg
          viewBox="0 0 1440 80"
          className="absolute bottom-0 w-full h-auto opacity-40"
          preserveAspectRatio="none"
          animate={shouldReduceMotion ? {} : { x: ["-3%", "3%", "-3%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <defs>
            <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#818cf8" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,40 C180,70 360,10 540,40 C720,70 900,10 1080,40 C1260,70 1350,20 1440,40 L1440,80 L0,80 Z"
            fill="url(#waveGradient3)"
            animate={shouldReduceMotion ? {} : { d: [
              "M0,40 C180,70 360,10 540,40 C720,70 900,10 1080,40 C1260,70 1350,20 1440,40 L1440,80 L0,80 Z",
              "M0,40 C180,10 360,70 540,40 C720,10 900,70 1080,40 C1260,10 1350,60 1440,40 L1440,80 L0,80 Z",
              "M0,40 C180,70 360,10 540,40 C720,70 900,10 1080,40 C1260,70 1350,20 1440,40 L1440,80 L0,80 Z"
            ]}}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.svg>
      </div>

      {/* 亮色模式波浪 */}
      <div className="dark:hidden">
        <motion.svg
          viewBox="0 0 1440 80"
          className="absolute bottom-0 w-full h-auto opacity-30"
          preserveAspectRatio="none"
          animate={shouldReduceMotion ? {} : { x: ["-5%", "5%", "-5%"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        >
          <defs>
            <linearGradient id="lightWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,40 C360,70 720,10 1080,40 C1260,60 1350,20 1440,40 L1440,80 L0,80 Z"
            fill="url(#lightWaveGradient)"
            animate={shouldReduceMotion ? {} : { d: [
              "M0,40 C360,70 720,10 1080,40 C1260,60 1350,20 1440,40 L1440,80 L0,80 Z",
              "M0,40 C360,10 720,70 1080,40 C1260,20 1350,60 1440,40 L1440,80 L0,80 Z",
              "M0,40 C360,70 720,10 1080,40 C1260,60 1350,20 1440,40 L1440,80 L0,80 Z"
            ]}}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.svg>
      </div>
    </div>
  );
}
