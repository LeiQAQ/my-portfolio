"use client";

import { motion, useInView, useReducedMotion, Variants } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Palette,
  Globe,
  Cpu,
  User,
  Sparkles,
  Zap,
  Target,
  Award,
  Coffee,
  BookOpen,
  Rocket,
} from "lucide-react";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  staggerItem,
  cardHover,
  cardTap,
} from "@/lib/animations";
import GradientOrbs from "@/components/backgrounds/GradientOrbs";

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Tailwind CSS", level: 88 },
  { name: "Node.js", level: 85 },
  { name: "UI/UX Design", level: 80 },
  { name: "Python", level: 75 },
];

const skillCards = [
  {
    icon: Code2,
    title: "前端开发",
    description: "构建现代化、高性能的Web应用",
    color: "from-sky-400 to-blue-500",
  },
  {
    icon: Palette,
    title: "UI/UX 设计",
    description: "创造美观且用户友好的界面",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: Globe,
    title: "全栈能力",
    description: "前后端整合与系统架构设计",
    color: "from-emerald-400 to-cyan-500",
  },
  {
    icon: Cpu,
    title: "技术探索",
    description: "持续学习前沿技术与最佳实践",
    color: "from-orange-400 to-red-500",
  },
];

const stats = [
  { icon: Award, label: "项目经验", value: "50+" },
  { icon: Coffee, label: "代码提交", value: "2K+" },
  { icon: BookOpen, label: "技术博客", value: "30+" },
  { icon: Rocket, label: "开源贡献", value: "20+" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  const getAnimationProps = (variants: Variants, delay = 0) => ({
    variants,
    initial: shouldReduceMotion ? "visible" : "hidden",
    animate: isInView || shouldReduceMotion ? "visible" : "hidden",
    transition: { delay },
  });

  return (
    <section
      id="about"
      className="relative min-h-screen bg-slate-100 dark:bg-[#11131a] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-300"
    >
      {/* 动画背景 */}
      <GradientOrbs />

      {/* 装饰性SVG图案 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* 左侧装饰圆圈 */}
        <svg
          className="absolute -left-20 top-1/4 w-64 h-64 text-sky-500/10 dark:text-sky-500/20"
          viewBox="0 0 200 200"
        >
          <motion.circle
            cx="100"
            cy="100"
            r="80"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            animate={shouldReduceMotion ? {} : { rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "center" }}
          />
          <motion.circle
            cx="100"
            cy="100"
            r="60"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            animate={shouldReduceMotion ? {} : { rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "center" }}
          />
        </svg>

        {/* 右侧装饰网格 */}
        <svg
          className="absolute -right-10 bottom-1/4 w-48 h-48 text-purple-500/10 dark:text-purple-500/20"
          viewBox="0 0 100 100"
        >
          <defs>
            <pattern
              id="grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <motion.rect
            width="100"
            height="100"
            fill="url(#grid)"
            animate={shouldReduceMotion ? {} : { opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        {/* 浮动几何图形 */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-4 h-4 bg-sky-400/30 rounded-full"
          animate={shouldReduceMotion ? {} : { y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-purple-400/30 rounded-full"
          animate={shouldReduceMotion ? {} : { y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* 左侧：头像区域 */}
          <motion.div
            {...getAnimationProps(fadeInLeft, 0.1)}
            className="relative flex justify-center lg:justify-start"
          >
            {/* 动态光晕效果 */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-sky-400 via-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-30"
              animate={shouldReduceMotion ? {} : { scale: [1, 1.05, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* 旋转装饰边框 */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-[360px] h-[360px] sm:w-[400px] sm:h-[400px] rounded-full border-2 border-dashed border-sky-400/20"
                animate={shouldReduceMotion ? {} : { rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* 主卡片容器 */}
            <div className="relative">
              {/* 发光边框 */}
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 rounded-3xl blur opacity-50" />
              
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 dark:from-gray-900 dark:to-[#0f1117] flex flex-col items-center justify-center overflow-hidden border border-white/10">
                {/* 背景网格 */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `linear-gradient(rgba(56,189,248,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.3) 1px, transparent 1px)`,
                      backgroundSize: "30px 30px",
                    }}
                  />
                </div>

                {/* 动态渐变背景 */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-transparent to-purple-500/20"
                  animate={shouldReduceMotion ? {} : { rotate: [0, 180, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                {/* 头像区域 */}
                <div className="relative z-10">
                  <motion.div
                    className="relative"
                    whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {/* 头像光环 */}
                    <motion.div
                      className="absolute -inset-4 rounded-full bg-gradient-to-r from-sky-400/20 to-purple-500/20 blur-xl"
                      animate={shouldReduceMotion ? {} : { scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    
                    <User className="w-24 h-24 sm:w-32 sm:h-32 text-sky-400/80" strokeWidth={1} />
                  </motion.div>
                </div>

                {/* 身份标签 */}
                <motion.div
                  {...getAnimationProps(fadeInUp, 0.4)}
                  className="relative z-10 mt-8 text-center"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-500/20 to-purple-500/20 border border-sky-400/30">
                    <Sparkles className="w-4 h-4 text-sky-400" />
                    <span className="text-sm font-medium text-sky-400">
                      全栈开发者
                    </span>
                  </div>
                </motion.div>

                {/* 底部装饰线 */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* 右侧：内容区域 */}
          <motion.div
            {...getAnimationProps(fadeInRight, 0.2)}
            className="space-y-8"
          >
            {/* 标题 */}
            <div>
              <motion.h2
                {...getAnimationProps(fadeInUp, 0.3)}
                className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white"
              >
                关于我
              </motion.h2>
              <motion.div
                initial={{ scaleX: shouldReduceMotion ? 1 : 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-4 h-1 w-32 bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 origin-left"
              />
            </div>

            {/* 个人介绍 */}
            <motion.div
              {...getAnimationProps(fadeInUp, 0.35)}
              className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed"
            >
              <p className="text-lg">
                我是一名充满热情的
                <span className="text-sky-500 font-medium">全栈开发者</span>
                ，专注于创建优雅且高性能的Web应用。拥有5年以上的开发经验，
                精通React生态系统和现代前端技术栈。
              </p>
              <p>
                我相信好的代码不仅要能工作，还要易于维护和扩展。我享受将复杂问题分解为简单、
                优雅的解决方案，并持续学习新技术来提升自己的技能树。
              </p>
              <p>
                在工作之余，我喜欢参与开源项目、撰写技术博客，以及探索AI和Web3等前沿领域。
              </p>
            </motion.div>

            {/* 数据统计 */}
            <motion.div
              {...getAnimationProps(fadeInUp, 0.38)}
              className="grid grid-cols-4 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center p-3 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
                >
                  <stat.icon className="w-5 h-5 mx-auto mb-1 text-sky-500" />
                  <div className="text-xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* 技能进度条 */}
            <motion.div {...getAnimationProps(fadeInUp, 0.4)} className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-sky-400" />
                技术栈
              </h3>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-1.5 group">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{skill.name}</span>
                      <motion.span
                        initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="text-sky-400 font-bold"
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: shouldReduceMotion ? `${skill.level}%` : 0 }}
                        animate={
                          isInView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{
                          duration: 1.2,
                          delay: 0.6 + index * 0.08,
                          ease: [0.33, 1, 0.68, 1],
                        }}
                        className="h-full bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 rounded-full relative"
                      >
                        {/* 发光效果 */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* 技能卡片网格 */}
        <motion.div
          {...getAnimationProps(staggerContainer, 0.5)}
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCards.map((card, index) => (
            <motion.div
              key={card.title}
              variants={staggerItem}
              whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.02 }}
              whileTap={shouldReduceMotion ? {} : cardTap}
              transition={{ duration: 0.2 }}
              className="group relative p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300"
            >
              {/* 渐变背景 */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* 顶部装饰线 */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />

              <div className="relative flex flex-col items-center text-center">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${card.color} mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {card.title}
                </h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {card.description}
                </p>
              </div>

              {/* 悬停光效 */}
              <div className="absolute -inset-px bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
