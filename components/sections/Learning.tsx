"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  BookOpen,
  Brain,
  Sparkles,
  TrendingUp,
  Code,
  Palette,
  Globe,
  ArrowUpRight,
  Lightbulb,
  Zap,
} from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

interface LearningTopic {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  resources: {
    title: string;
    description: string;
    url: string;
    tags: string[];
  }[];
}

const learningTopics: LearningTopic[] = [
  {
    id: "ai",
    title: "人工智能",
    description: "探索AI的前沿技术，包括大语言模型、机器学习、深度学习等领域",
    icon: Brain,
    color: "from-violet-500 to-purple-600",
    resources: [
      {
        title: "OpenAI 官方文档",
        description: "学习GPT模型的API使用和最佳实践",
        url: "https://platform.openai.com/docs",
        tags: ["LLM", "API", "GPT"],
      },
      {
        title: "Hugging Face",
        description: "开源AI模型和工具的宝库",
        url: "https://huggingface.co",
        tags: ["开源", "模型", "NLP"],
      },
      {
        title: "LangChain 教程",
        description: "构建LLM应用的框架和工具链",
        url: "https://python.langchain.com",
        tags: ["框架", "应用开发", "Python"],
      },
      {
        title: "机器学习实战",
        description: "Andrew Ng的机器学习课程",
        url: "https://www.coursera.org/learn/machine-learning",
        tags: ["入门", "算法", "理论"],
      },
    ],
  },
  {
    id: "animation",
    title: "动效设计",
    description: "学习现代Web动效技术，让界面更加生动有趣",
    icon: Sparkles,
    color: "from-sky-400 to-blue-500",
    resources: [
      {
        title: "Framer Motion",
        description: "React动画库官方文档和示例",
        url: "https://www.framer.com/motion",
        tags: ["React", "动画", "库"],
      },
      {
        title: "GSAP 动画库",
        description: "专业级JavaScript动画平台",
        url: "https://greensock.com/gsap",
        tags: ["JavaScript", "专业", "高性能"],
      },
      {
        title: "CSS Animation 教程",
        description: "MDN CSS动画完整指南",
        url: "https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Animations",
        tags: ["CSS", "基础", "入门"],
      },
      {
        title: "Lottie 动画",
        description: "After Effects导出JSON动画",
        url: "https://airbnb.io/lottie",
        tags: ["矢量", "AE", "跨平台"],
      },
    ],
  },
  {
    id: "investment",
    title: "投资理财",
    description: "学习投资知识，建立正确的财富观念",
    icon: TrendingUp,
    color: "from-emerald-400 to-green-500",
    resources: [
      {
        title: "雪球投资社区",
        description: "股票、基金投资交流平台",
        url: "https://xueqiu.com",
        tags: ["股票", "基金", "社区"],
      },
      {
        title: "富途牛牛",
        description: "港股美股投资学习平台",
        url: "https://www.futunn.com",
        tags: ["港股", "美股", "教程"],
      },
      {
        title: "Investopedia",
        description: "投资术语和教育百科全书",
        url: "https://www.investopedia.com",
        tags: ["入门", "英文", "百科"],
      },
      {
        title: "得到·香帅的北大金融学课",
        description: "系统性金融学知识体系",
        url: "https://www.igetget.com",
        tags: ["课程", "体系", "中文"],
      },
    ],
  },
  {
    id: "frontend",
    title: "前端开发",
    description: "深入学习前端技术栈，包括框架、工具链、性能优化等",
    icon: Code,
    color: "from-orange-400 to-red-500",
    resources: [
      {
        title: "React 官方文档",
        description: "React最新版本完整文档",
        url: "https://react.dev",
        tags: ["框架", "核心", "文档"],
      },
      {
        title: "Next.js 教程",
        description: "全栈React框架学习资源",
        url: "https://nextjs.org/docs",
        tags: ["全栈", "SSR", "框架"],
      },
      {
        title: "TypeScript 手册",
        description: "TypeScript类型系统详解",
        url: "https://www.typescriptlang.org/docs",
        tags: ["类型", "JavaScript", "文档"],
      },
      {
        title: "Web 性能优化",
        description: "Google Web Vitals优化指南",
        url: "https://web.dev/performance-scoring",
        tags: ["性能", "优化", "指标"],
      },
    ],
  },
  {
    id: "design",
    title: "UI/UX 设计",
    description: "学习界面设计和用户体验设计的原则与实践",
    icon: Palette,
    color: "from-pink-400 to-rose-500",
    resources: [
      {
        title: "Figma 社区",
        description: "设计资源和模板分享平台",
        url: "https://www.figma.com/community",
        tags: ["工具", "模板", "资源"],
      },
      {
        title: "Dribbble",
        description: "设计师作品展示和灵感来源",
        url: "https://dribbble.com",
        tags: ["灵感", "作品", "社区"],
      },
      {
        title: "Nielsen Norman Group",
        description: "用户体验研究和最佳实践",
        url: "https://www.nngroup.com",
        tags: ["UX", "研究", "专业"],
      },
      {
        title: "Refactoring UI",
        description: "程序员的设计指南",
        url: "https://refactoringui.com",
        tags: ["实战", "开发", "指南"],
      },
    ],
  },
  {
    id: "english",
    title: "英语学习",
    description: "提升英语能力，开拓国际视野",
    icon: Globe,
    color: "from-cyan-400 to-blue-500",
    resources: [
      {
        title: "YouTube",
        description: "通过视频学习地道英语",
        url: "https://youtube.com",
        tags: ["视频", "免费", "多样"],
      },
      {
        title: "TED Talks",
        description: "英语演讲提升听力和表达",
        url: "https://www.ted.com",
        tags: ["演讲", "听力", "思想"],
      },
      {
        title: "多邻国",
        description: "游戏化英语学习应用",
        url: "https://www.duolingo.com",
        tags: ["游戏", "入门", "APP"],
      },
      {
        title: "BBC Learning English",
        description: "BBC官方英语学习资源",
        url: "https://www.bbc.co.uk/learningenglish",
        tags: ["新闻", "地道", "免费"],
      },
    ],
  },
];

export default function Learning() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="learning"
      className="relative min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#0a0d14] transition-colors duration-300 overflow-hidden"
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 浮动几何图形 */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-sky-400/20 to-purple-400/20"
            style={{
              width: 100 + i * 50,
              height: 100 + i * 50,
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={shouldReduceMotion ? {} : {
              y: [0, -20, 0],
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div ref={containerRef} className="relative max-w-7xl mx-auto">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sky-100 to-purple-100 dark:from-sky-500/10 dark:to-purple-500/10 border border-sky-200 dark:border-sky-500/20 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <BookOpen className="w-4 h-4 text-sky-500" />
            <span className="text-sm font-medium text-sky-600 dark:text-sky-400">
              知识库
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            学习空间
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            记录我持续学习的各个领域，探索新技术、新理念、新知识
          </p>
        </motion.div>

        {/* 统计信息 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { icon: Lightbulb, label: "学习领域", value: learningTopics.length.toString() },
            { icon: BookOpen, label: "学习资源", value: learningTopics.reduce((acc, topic) => acc + topic.resources.length, 0).toString() },
            { icon: Zap, label: "已掌握", value: "30+" },
            { icon: TrendingUp, label: "持续学习", value: "进行中" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="text-center p-4 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700"
            >
              <stat.icon className="w-6 h-6 mx-auto mb-2 text-sky-500" />
              <div className="text-2xl font-bold text-slate-900 dark:text-white">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* 学习领域卡片 */}
        <motion.div
          {...(shouldReduceMotion
            ? {}
            : { variants: staggerContainer, initial: "hidden", animate: isInView ? "visible" : "hidden" })}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {learningTopics.map((topic, index) => (
            <LearningCard
              key={topic.id}
              topic={topic}
              index={index}
              shouldReduceMotion={shouldReduceMotion}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface LearningCardProps {
  topic: LearningTopic;
  index: number;
  shouldReduceMotion: boolean | null;
}

function LearningCard({ topic, index, shouldReduceMotion }: LearningCardProps) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      variants={staggerItem}
      initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={shouldReduceMotion ? {} : { y: -8 }}
      className="group relative bg-white dark:bg-slate-800/50 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/10"
    >
      {/* 顶部渐变条 */}
      <div className={`h-2 bg-gradient-to-r ${topic.color}`} />

      <div className="p-6">
        {/* 标题区域 */}
        <div className="flex items-start gap-4 mb-6">
          <div
            className={`p-3 rounded-2xl bg-gradient-to-br ${topic.color} shadow-lg`}
          >
            <topic.icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
              {topic.title}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
              {topic.description}
            </p>
          </div>
        </div>

        {/* 资源列表 */}
        <div className="space-y-3">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            推荐资源
          </p>

          {topic.resources.map((resource, idx) => (
            <motion.a
              key={resource.title}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="block p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-700/50 hover:border-sky-400/50 dark:hover:border-sky-500/30 transition-all duration-200 group/link"
            >
              <div className="flex items-start gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-slate-900 dark:text-white text-sm group-hover/link:text-sky-500 dark:group-hover/link:text-sky-400 transition-colors">
                      {resource.title}
                    </h4>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                    {resource.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {resource.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] rounded-full bg-sky-100 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* 悬停光效 */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 pointer-events-none" />
    </motion.div>
  );
}
