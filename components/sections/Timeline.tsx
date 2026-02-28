"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, Sparkles } from "lucide-react";
import { fadeInLeft, fadeInRight } from "@/lib/animations";

interface TimelineItem {
  id: number;
  type: "work" | "education";
  period: string;
  title: string;
  organization: string;
  description: string;
  highlights: string[];
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    type: "work",
    period: "2023.06 - 至今",
    title: "高级前端工程师",
    organization: "科技创新有限公司",
    description: "负责公司核心产品的前端架构设计与开发，带领5人团队完成多个大型项目，优化网站性能提升40%",
    highlights: ["React", "TypeScript", "性能优化"],
  },
  {
    id: 2,
    type: "work",
    period: "2021.03 - 2023.05",
    title: "前端开发工程师",
    organization: "互联网科技有限公司",
    description: "参与电商平台的前端开发，实现了响应式设计和移动端适配，日活用户达到100万+",
    highlights: ["Vue.js", "移动端", "团队协作"],
  },
  {
    id: 3,
    type: "education",
    period: "2018.09 - 2021.06",
    title: "计算机科学与技术 硕士",
    organization: "北京大学",
    description: "专注于人工智能与前端交互技术研究，发表2篇SCI论文，获得优秀毕业生称号",
    highlights: ["人工智能", "学术研究", "优秀毕业生"],
  },
  {
    id: 4,
    type: "education",
    period: "2014.09 - 2018.06",
    title: "软件工程 学士",
    organization: "清华大学",
    description: "系统学习计算机基础理论和软件工程实践，多次获得学业奖学金，参与开源项目贡献",
    highlights: ["软件工程", "开源贡献", "学业奖学金"],
  },
];

const getIcon = (type: "work" | "education") => {
  return type === "work" ? Briefcase : GraduationCap;
};

const getIconColor = (type: "work" | "education") => {
  return type === "work"
    ? "bg-gradient-to-br from-sky-400 to-blue-500"
    : "bg-gradient-to-br from-purple-400 to-indigo-500";
};

const getTagColor = (type: "work" | "education") => {
  return type === "work"
    ? "bg-sky-100/50 dark:bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-200 dark:border-sky-500/30"
    : "bg-purple-100/50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-500/30";
};

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="timeline"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#0a0d14] transition-colors duration-300 overflow-hidden"
    >
      {/* 背景装饰 SVG */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 左侧装饰线 */}
        <svg
          className="absolute left-0 top-0 h-full w-32 text-sky-500/5 dark:text-sky-500/10"
          preserveAspectRatio="none"
        >
          <motion.line
            x1="50%"
            y1="0"
            x2="50%"
            y2="100%"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="10 5"
            animate={shouldReduceMotion ? {} : { y1: ["0%", "100%"], y2: ["0%", "100%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </svg>

        {/* 右侧装饰圆圈 */}
        <svg
          className="absolute -right-20 top-1/4 w-64 h-64 text-purple-500/10 dark:text-purple-500/20"
          viewBox="0 0 200 200"
        >
          <motion.circle
            cx="100"
            cy="100"
            r="70"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="5 5"
            animate={shouldReduceMotion ? {} : { rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "center" }}
          />
          <motion.circle
            cx="100"
            cy="100"
            r="50"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            animate={shouldReduceMotion ? {} : { rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "center" }}
          />
        </svg>

        {/* 底部装饰波浪 */}
        <svg
          className="absolute bottom-0 left-0 right-0 h-32 text-sky-500/5 dark:text-sky-500/10"
          preserveAspectRatio="none"
          viewBox="0 0 1440 100"
        >
          <motion.path
            d="M0,50 C360,80 720,20 1080,50 C1260,65 1350,35 1440,50 L1440,100 L0,100 Z"
            fill="currentColor"
            animate={shouldReduceMotion ? {} : {
              d: [
                "M0,50 C360,80 720,20 1080,50 C1260,65 1350,35 1440,50 L1440,100 L0,100 Z",
                "M0,50 C360,20 720,80 1080,50 C1260,35 1350,65 1440,50 L1440,100 L0,100 Z",
                "M0,50 C360,80 720,20 1080,50 C1260,65 1350,35 1440,50 L1440,100 L0,100 Z",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>

        {/* 浮动粒子 */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-sky-400/30 to-purple-400/30"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={shouldReduceMotion ? {} : {
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-sky-500" />
            <span className="text-sm font-medium text-sky-600 dark:text-sky-400">
              职业历程
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            经历时间线
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            我的职业与教育历程
          </p>
        </motion.div>

        {/* 时间线容器 */}
        <div ref={containerRef} className="relative">
          {/* 中央渐变连接线 - 桌面端 */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1">
            {/* 背景线 */}
            <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-sky-200 to-purple-200 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 rounded-full" />
            
            {/* 动画发光线 */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-sky-400 via-blue-500 to-purple-500 rounded-full"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "top" }}
            />
            
            {/* 流动的光点 */}
            <motion.div
              className="absolute w-3 h-3 -left-1 bg-white rounded-full shadow-lg shadow-sky-500/50"
              animate={shouldReduceMotion ? {} : {
                top: ["0%", "100%"],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* 移动端时间线 */}
          <div className="md:hidden absolute left-6 top-0 bottom-0 w-1">
            <div className="absolute inset-0 bg-gradient-to-b from-sky-200 to-purple-200 dark:from-slate-700 dark:to-slate-800 rounded-full" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-sky-400 to-purple-500 rounded-full"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "top" }}
            />
          </div>

          {/* 时间线项目 */}
          <div className="space-y-8 md:space-y-16">
            {timelineData.map((item, index) => {
              const Icon = getIcon(item.type);
              const isLeft = index % 2 === 0;

              return (
                <TimelineCard
                  key={item.id}
                  item={item}
                  Icon={Icon}
                  isLeft={isLeft}
                  index={index}
                  isInView={isInView}
                  shouldReduceMotion={shouldReduceMotion}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TimelineCardProps {
  item: TimelineItem;
  Icon: React.ComponentType<{ className?: string }>;
  isLeft: boolean;
  index: number;
  isInView: boolean;
  shouldReduceMotion: boolean | null;
}

function TimelineCard({
  item,
  Icon,
  isLeft,
  index,
  isInView,
  shouldReduceMotion,
}: TimelineCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <div
      ref={cardRef}
      className={`relative flex items-center ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } flex-row`}
    >
      {/* 桌面端：左右两侧内容 */}
      <motion.div
        initial={{
          opacity: shouldReduceMotion ? 1 : 0,
          x: shouldReduceMotion ? 0 : isLeft ? -80 : 80,
        }}
        animate={
          cardInView
            ? { opacity: 1, x: 0 }
            : { opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : isLeft ? -80 : 80 }
        }
        transition={{
          duration: 0.6,
          delay: index * 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`hidden md:block w-5/12 ${isLeft ? "pr-8 text-right" : "pl-8 text-left"}`}
      >
        <TimelineContent
          item={item}
          Icon={Icon}
          shouldReduceMotion={shouldReduceMotion}
        />
      </motion.div>

      {/* 中央图标 - 桌面端 */}
      <motion.div
        initial={{ scale: shouldReduceMotion ? 1 : 0, opacity: shouldReduceMotion ? 1 : 0 }}
        animate={cardInView ? { scale: 1, opacity: 1 } : {}}
        transition={{
          duration: 0.5,
          delay: index * 0.1 + 0.1,
          type: "spring",
          stiffness: 200,
        }}
        whileHover={shouldReduceMotion ? {} : { scale: 1.2, rotate: 5 }}
        className={`hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full ${getIconColor(
          item.type
        )} items-center justify-center shadow-lg shadow-sky-500/30 z-10 cursor-pointer`}
      >
        {/* 发光环 */}
        <motion.div
          className="absolute -inset-2 rounded-full border-2 border-sky-400/30"
          animate={shouldReduceMotion ? {} : { scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
        />
        <Icon className="w-6 h-6 text-white relative z-10" />
      </motion.div>

      {/* 移动端：左侧内容 */}
      <motion.div
        initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : -50 }}
        animate={cardInView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 0.5,
          delay: index * 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="md:hidden w-full pl-16"
      >
        {/* 移动端图标 */}
        <motion.div
          initial={{ scale: shouldReduceMotion ? 1 : 0 }}
          animate={cardInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.05 }}
          whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
          className={`absolute left-2 w-10 h-10 rounded-full ${getIconColor(
            item.type
          )} flex items-center justify-center shadow-lg z-10 cursor-pointer`}
        >
          <Icon className="w-5 h-5 text-white" />
        </motion.div>

        <TimelineContent
          item={item}
          Icon={Icon}
          isMobile
          shouldReduceMotion={shouldReduceMotion}
        />
      </motion.div>

      {/* 桌面端：另一侧空白占位 */}
      <div className="hidden md:block w-5/12" />
    </div>
  );
}

interface TimelineContentProps {
  item: TimelineItem;
  Icon: React.ComponentType<{ className?: string }>;
  isMobile?: boolean;
  shouldReduceMotion: boolean | null;
}

function TimelineContent({
  item,
  isMobile,
  shouldReduceMotion,
}: TimelineContentProps) {
  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={`relative group bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 dark:border-slate-700/50 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 hover:border-sky-400/50 dark:hover:border-sky-500/30`}
    >
      {/* 渐变背景 */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${
          item.type === "work"
            ? "from-sky-500/5 to-blue-500/5"
            : "from-purple-500/5 to-indigo-500/5"
        } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* 左侧装饰条 */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${
          item.type === "work"
            ? "from-sky-400 to-blue-500"
            : "from-purple-400 to-indigo-500"
        }`}
      />

      {/* 悬停光效 */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000" />

      <div className="relative z-10">
        {/* 时间段 */}
        <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm mb-3">
          <div
            className={`p-1.5 rounded-lg ${
              item.type === "work"
                ? "bg-sky-100 dark:bg-sky-500/10"
                : "bg-purple-100 dark:bg-purple-500/10"
            }`}
          >
            <Calendar
              className={`w-3.5 h-3.5 ${
                item.type === "work" ? "text-sky-500" : "text-purple-500"
              }`}
            />
          </div>
          <span className="font-medium">{item.period}</span>
        </div>

        {/* 标题 */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
          {item.title}
        </h3>

        {/* 机构名称 */}
        <p
          className={`font-semibold mb-3 ${
            item.type === "work"
              ? "text-sky-600 dark:text-sky-400"
              : "text-purple-600 dark:text-purple-400"
          }`}
        >
          {item.organization}
        </p>

        {/* 描述 */}
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
          {item.description}
        </p>

        {/* 亮点标签 */}
        <div className="flex flex-wrap gap-2">
          {item.highlights.map((highlight, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: shouldReduceMotion ? 1 : 0, scale: shouldReduceMotion ? 1 : 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`px-3 py-1.5 text-xs font-medium rounded-full border ${getTagColor(
                item.type
              )} cursor-default transition-all hover:shadow-md`}
            >
              {highlight}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
