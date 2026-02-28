"use client";

import { Variants, Transition } from "framer-motion";

// 检测用户是否偏好减少动画
export const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

// 专业缓动函数
export const easings = {
  // 平滑减速 - 入场动画
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeOutCubic: [0.33, 1, 0.68, 1],
  // 平滑加速 - 出场动画
  easeInExpo: [0.7, 0, 0.84, 0],
  // 弹性效果 - 交互反馈
  spring: { type: "spring", stiffness: 400, damping: 25 },
  // 柔和弹性 - 卡片hover
  softSpring: { type: "spring", stiffness: 300, damping: 20 },
} as const;

// 入场动画变体
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easings.easeOutExpo,
    },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easings.easeOutExpo,
    },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easings.easeOutExpo,
    },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easings.easeOutExpo,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: easings.easeOutCubic,
    },
  },
};

// 容器stagger动画
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: easings.easeOutExpo,
    },
  },
};

// 技能进度条动画
export const progressBar: Variants = {
  hidden: { width: 0 },
  visible: (level: number) => ({
    width: `${level}%`,
    transition: {
      duration: 1,
      ease: easings.easeOutCubic,
    },
  }),
};

// 滚动指示器动画
export const scrollIndicator: Variants = {
  initial: { opacity: 0, y: -10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.8,
    },
  },
  bounce: {
    y: [0, 8, 0],
    transition: {
      duration: 1.2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// 背景光球动画
export const floatingOrb = (duration: number, delay: number) => ({
  scale: [1, 1.15, 1],
  opacity: [0.4, 0.7, 0.4],
  transition: {
    duration,
    repeat: Infinity,
    ease: "easeInOut",
    delay,
  },
});

// 卡片hover效果
export const cardHover = {
  scale: 1.02,
  y: -4,
  transition: {
    type: "spring",
    stiffness: 400,
    damping: 25,
  },
};

export const cardTap = {
  scale: 0.98,
};

// 按钮hover效果
export const buttonHover = {
  scale: 1.03,
  transition: {
    type: "spring",
    stiffness: 500,
    damping: 15,
  },
};

export const buttonTap = {
  scale: 0.97,
};

// 导航链接hover
export const navLinkHover = {
  y: -2,
  transition: {
    duration: 0.2,
    ease: "easeOut",
  },
};

// 图标微动画
export const iconPulse: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

// 时间线图标动画
export const timelineIcon: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
  hover: {
    scale: 1.15,
    rotate: 10,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

// 表单输入框focus动画
export const inputFocus = {
  scale: 1.01,
  transition: {
    duration: 0.2,
  },
};

// 成功状态动画
export const successAnimation: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
};

// 视差滚动配置
export const parallaxConfig = {
  slow: { y: [0, -30] },
  medium: { y: [0, -50] },
  fast: { y: [0, -80] },
};

// 粒子效果配置
export const particleConfig = {
  count: 20,
  size: { min: 2, max: 4 },
  speed: { min: 0.5, max: 1.5 },
  opacity: { min: 0.1, max: 0.3 },
};
