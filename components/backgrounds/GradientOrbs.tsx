"use client";

import { motion, useReducedMotion } from "framer-motion";

const orbs = [
  { id: 1, size: 600, x: "20%", y: "30%", color: "from-sky-400/30 to-blue-500/20", duration: 20 },
  { id: 2, size: 500, x: "70%", y: "60%", color: "from-purple-400/20 to-pink-400/20", duration: 25 },
  { id: 3, size: 400, x: "50%", y: "20%", color: "from-cyan-400/20 to-sky-400/20", duration: 18 },
  { id: 4, size: 350, x: "80%", y: "40%", color: "from-blue-400/25 to-indigo-500/15", duration: 22 },
];

export default function GradientOrbs() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute rounded-full bg-gradient-to-br ${orb.color} blur-3xl`}
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            transform: "translate(-50%, -50%)",
          }}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  x: [0, 50, -30, 20, 0],
                  y: [0, -40, 30, -20, 0],
                  scale: [1, 1.1, 0.95, 1.05, 1],
                }
          }
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* 亮色模式专属光晕 */}
      <div className="absolute inset-0 dark:hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sky-100/50 via-transparent to-purple-100/30" />
      </div>
    </div>
  );
}
