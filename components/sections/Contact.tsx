"use client";

import { useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Github,
  Twitter,
  Linkedin,
  Send,
  CheckCircle,
  User,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";
import {
  successAnimation,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const contactInfo = [
  {
    icon: Mail,
    label: "邮箱",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/yourusername",
    href: "https://github.com/yourusername",
  },
  {
    icon: Twitter,
    label: "Twitter",
    value: "@yourusername",
    href: "https://twitter.com/yourusername",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/yourusername",
    href: "https://linkedin.com/in/yourusername",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "请输入您的姓名";
    }

    if (!formData.email.trim()) {
      newErrors.email = "请输入您的邮箱";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "请输入有效的邮箱地址";
    }

    if (!formData.message.trim()) {
      newErrors.message = "请输入消息内容";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "消息内容至少10个字符";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const inputClasses = (hasError: boolean) =>
    `w-full bg-slate-50 dark:bg-dark-bg border rounded-lg py-3 pl-12 pr-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 
     focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 
     transition-all duration-200
     ${hasError ? "border-red-500" : "border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500"}`;

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            联系我
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            有项目想法或合作机会？随时与我联系
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 左侧表单 */}
          <motion.div
            initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-white dark:bg-dark-card rounded-2xl p-8 border border-slate-200 dark:border-slate-800 h-full shadow-sm dark:shadow-none transition-colors duration-300">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                发送消息
              </h3>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    variants={successAnimation}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="flex flex-col items-center justify-center py-12"
                  >
                    <motion.div
                      initial={{ scale: shouldReduceMotion ? 1 : 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                    >
                      <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
                    </motion.div>
                    <p className="text-xl text-slate-900 dark:text-white font-medium">
                      消息发送成功！
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">
                      我会尽快回复您
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* 姓名输入 */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        姓名
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={inputClasses(!!errors.name)}
                          placeholder="您的姓名"
                        />
                      </div>
                      <AnimatePresence>
                        {errors.name && (
                          <motion.p
                            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="mt-1 text-sm text-red-400"
                          >
                            {errors.name}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* 邮箱输入 */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        邮箱
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={inputClasses(!!errors.email)}
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <AnimatePresence>
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="mt-1 text-sm text-red-400"
                          >
                            {errors.email}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* 消息输入 */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                      >
                        消息
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-500" />
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5}
                          className={inputClasses(!!errors.message)}
                          placeholder="请输入您的消息..."
                        />
                      </div>
                      <AnimatePresence>
                        {errors.message && (
                          <motion.p
                            initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="mt-1 text-sm text-red-400"
                          >
                            {errors.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* 提交按钮 */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: shouldReduceMotion ? 1 : 1.02 }}
                      whileTap={{ scale: shouldReduceMotion ? 1 : 0.98 }}
                      className="w-full bg-gradient-to-r from-sky-400 to-blue-500 text-white font-semibold py-3.5 rounded-lg 
                                 flex items-center justify-center gap-2 
                                 hover:from-sky-500 hover:to-blue-600 
                                 disabled:opacity-50 disabled:cursor-not-allowed 
                                 transition-all duration-200 shadow-lg shadow-sky-500/20"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={shouldReduceMotion ? {} : { rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>发送消息</span>
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* 右侧联系信息 */}
          <motion.div
            initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-dark-card rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm dark:shadow-none transition-colors duration-300">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
                联系方式
              </h3>

              <motion.div 
                className="space-y-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {contactInfo.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    variants={staggerItem}
                    whileHover={{ x: shouldReduceMotion ? 0 : 4 }}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-slate-800 
                               hover:border-sky-400/50 hover:bg-slate-100 dark:hover:bg-slate-800/50 
                               transition-all duration-200"
                  >
                    <div className="w-12 h-12 rounded-lg bg-sky-100 dark:bg-sky-500/10 flex items-center justify-center 
                                    group-hover:bg-sky-200 dark:group-hover:bg-sky-500/20 transition-colors duration-200">
                      <item.icon className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-500 dark:text-slate-400">{item.label}</p>
                      <p className="text-slate-900 dark:text-white font-medium group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-200">
                        {item.value}
                      </p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors duration-200" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* 合作卡片 */}
            <motion.div
              initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-sky-100/50 dark:from-sky-500/10 to-blue-100/50 dark:to-blue-600/10 rounded-2xl p-8 
                         border border-sky-200/50 dark:border-sky-500/30 relative overflow-hidden"
            >
              <div className="relative z-10">
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  期待与您合作
                </h4>
                <p className="text-slate-600 dark:text-slate-300">
                  无论是项目合作、技术交流还是其他事宜，我都很乐意听取您的想法。
                  通常会在 24 小时内回复。
                </p>
                <div className="mt-4 flex items-center gap-2 text-sky-600 dark:text-sky-400">
                  <span className="text-sm font-medium">了解更多</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
