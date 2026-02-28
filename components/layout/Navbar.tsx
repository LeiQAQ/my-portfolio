"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import ThemeToggle from "@/components/providers/ThemeToggle";

const navLinks = [
  { name: "首页", href: "#hero" },
  { name: "关于", href: "#about" },
  { name: "经历", href: "#timeline" },
  { name: "学习", href: "#learning" },
  { name: "联系", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // 检测当前活动区域
      const sections = navLinks.map(link => link.href);
      for (const section of sections.reverse()) {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: shouldReduceMotion ? 0 : -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${isScrolled 
            ? "bg-[#0a0a0f]/90 backdrop-blur-md border-b border-slate-800/50" 
            : "bg-transparent"
          }`}
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - 天空蓝色 */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="text-xl font-bold text-white hover:text-sky-400 transition-colors duration-200"
            >
              <span className="text-sky-400">&lt;</span>
              Portfolio
              <span className="text-sky-400">/&gt;</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: shouldReduceMotion ? 0 : index * 0.08 + 0.2,
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="relative px-4 py-2 text-sm font-medium text-slate-400 
                             hover:text-sky-400 transition-colors duration-200 group"
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-0.5 bg-sky-400 rounded-full 
                               transition-transform duration-200 origin-left
                               ${activeSection === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                  />
                </motion.a>
              ))}
              
              {/* Theme Toggle Button */}
              <div className="ml-4 pl-4 border-l border-slate-700">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: shouldReduceMotion ? 1 : 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-sky-400 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: shouldReduceMotion ? 1 : 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: shouldReduceMotion ? 1 : 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            <motion.div
              initial={{ x: shouldReduceMotion ? 0 : "100%", opacity: shouldReduceMotion ? 1 : 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: shouldReduceMotion ? 0 : "100%", opacity: shouldReduceMotion ? 1 : 0 }}
              transition={{ 
                duration: shouldReduceMotion ? 0 : 0.3,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="fixed right-0 top-0 h-full w-72 bg-[#11131a] border-l border-slate-800 pt-20 px-6 z-50 md:hidden"
            >
              <div className="flex flex-col space-y-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: shouldReduceMotion ? 1 : 0, x: shouldReduceMotion ? 0 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: shouldReduceMotion ? 0 : index * 0.05,
                      duration: 0.3
                    }}
                    className={`group flex items-center justify-between p-4 rounded-xl 
                               text-lg font-medium transition-all duration-200
                               ${activeSection === link.href
                                 ? "bg-sky-500/10 text-sky-400 border border-sky-500/30"
                                 : "text-slate-400 hover:text-sky-400 hover:bg-slate-800/50"
                               }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-sky-400 transition-colors" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
