# 动画效果优化指南

## 🎯 优化概述

本次优化统一了全站动画系统，提升了性能表现，并增强了对无障碍访问的支持。

## 📦 新增文件

### 1. `lib/animations.ts` - 动画配置中心
所有动画变体和缓动函数的统一管理文件：

```typescript
// 入场动画
fadeInUp      // 从下方淡入
fadeInDown    // 从上方淡入
fadeInLeft    // 从左侧淡入
fadeInRight   // 从右侧淡入
scaleIn       // 缩放入场

// 容器动画
staggerContainer  // 子元素交错动画容器
staggerItem       // 交错动画子元素

// 交互动画
buttonHover   // 按钮悬停
buttonTap     // 按钮点击
cardHover     // 卡片悬停

// 特殊效果
scrollIndicator   // 滚动指示器
floatingOrb       // 浮动光球
timelineIcon      // 时间线图标
successAnimation  // 成功状态
```

### 2. `components/effects/ParticleBackground.tsx` - 粒子背景
Canvas 实现的粒子连线效果，支持鼠标交互。

## 🎨 缓动函数标准

采用专业级缓动曲线：

| 名称 | 值 | 用途 |
|------|-----|------|
| easeOutExpo | [0.16, 1, 0.3, 1] | 入场动画 - 快速开始，缓慢结束 |
| easeOutCubic | [0.33, 1, 0.68, 1] | 一般过渡 - 自然流畅 |
| spring | { stiffness: 400, damping: 25 } | 交互反馈 - 弹性效果 |

## ♿ 无障碍支持

所有组件已集成 `useReducedMotion`：

```typescript
const shouldReduceMotion = useReducedMotion();

// 根据用户偏好调整动画
<motion.div
  animate={shouldReduceMotion ? {} : { scale: 1.1 }}
  transition={{ duration: 0.3 }}
/>
```

### 如何测试减少动画模式：

**macOS:**
1. 系统设置 → 辅助功能 → 显示 → 减少动态效果
2. 或运行: `defaults write com.apple.universalaccess reduceMotion -bool true`

**Windows:**
1. 设置 → 轻松使用 → 显示 → 显示动画

**Chrome DevTools:**
1. Rendering 面板 → Emulate CSS media feature prefers-reduced-motion

## 🚀 性能优化

### 1. 动画时长优化
- 入场动画: 0.5-0.6s (原为 0.6-0.8s)
- 微交互: 0.2-0.3s
- 背景循环: 8-12s

### 2. 使用 `will-change` 建议
对于频繁动画的元素，可添加：
```css
.animated-element {
  will-change: transform, opacity;
}
```

### 3. GPU 加速
所有动画使用 transform 和 opacity，确保 GPU 渲染。

## 📊 动画层次结构

```
Layer 0: ParticleBackground (Canvas) - z-0
Layer 1: 背景装饰 (模糊光球) - z-0
Layer 2: 主要内容 - z-10
Layer 3: 导航栏 - z-50
```

## 🎭 组件特定优化

### Hero 区域
- 3个浮动光球，不同速度和延迟
- 按钮添加悬停光效
- 滚动指示器简化动画

### About 区域
- 头像区域移除过度旋转
- 进度条添加交错延迟
- 技能卡片添加图标微动画

### Timeline 区域
- 移除 360° 旋转动画
- 改为 10° 倾斜 + 缩放效果
- 中央线条添加渐进绘制动画

### Contact 区域
- 输入框添加 focus 发光效果
- 表单验证错误添加进入动画
- 成功状态添加庆祝动画

### Navbar 区域
- 背景透明度随滚动变化
- 活动区域指示器
- Logo 悬停添加微妙旋转

## 🔧 自定义动画

### 创建新动画变体：

```typescript
// lib/animations.ts
export const customAnimation: Variants = {
  hidden: { opacity: 0, y: 50, rotate: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.6,
      ease: easings.easeOutExpo,
    },
  },
};
```

### 在组件中使用：

```typescript
import { customAnimation } from "@/lib/animations";

<motion.div
  variants={customAnimation}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  内容
</motion.div>
```

## 📈 性能监控

建议使用 Chrome DevTools Performance 面板监控：

1. **Frame Rate** - 确保 60fps
2. **Long Tasks** - 避免超过 50ms 的任务
3. **Layout Shifts** - 减少 CLS

## 🎪 动画最佳实践

1. **渐进增强** - 动画应提升体验，而非阻碍
2. **一致性** - 使用统一的时长和缓动
3. **目的性** - 每个动画都应有明确目的
4. **节制** - 避免过多同时进行的动画
5. **测试** - 在低性能设备上测试

## 🐛 常见问题

### 动画卡顿
- 检查是否使用 transform/opacity
- 减少同时动画元素数量
- 考虑使用 `useInView` 延迟加载

### 闪烁问题
- 确保动画元素有固定尺寸
- 避免动画期间改变布局

### 移动端性能
- 粒子效果自动禁用（已通过 reduceMotion 检测）
- 简化复杂动画序列
