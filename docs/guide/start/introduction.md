# 介绍
CPage 是一个适用于多场景问题下的通用性解决方案。

## 为什么要做
在开发过程中，我们经常会遇到一些重复性的工作，例如：
- 重复的项目初始化流程
- 重复的工具链集成
- 重复的项目配置
- 重复的最佳实践探索
- 重复的组件、代码

CPage 旨在通过提供一套完整的解决方案，帮助开发者：
- 提高开发效率
- 统一技术栈
- 沉淀统一组件
- 降低维护成本
- 确保代码质量
- 加快项目启动速度

## 如何做
### 现代化构建工具
- 使用 [Rsbuild](https://rsbuild.dev/zh)
  由 Rspack 驱动的高性能构建工具，基于 Rust， 编译、构建性能极佳，提升开发体验。

  提供丰富的构建功能，包括编译 TypeScript、JSX、Sass、Less、CSS Modules、Wasm，以及其他资源，也支持模块联邦、图片压缩、类型检查、PostCSS、Lightning CSS 等功能。

  可以通过插件简单接入 [Tailwind CSS](https://tailwindcss.com/)、[SVGR](https://react-svgr.com/) 等

![benchmark](https://assets.rspack.dev/rsbuild/assets/benchmark-latest.jpeg)

> 以上数据来自 [performance-compare](https://github.com/rspack-contrib/performance-compare) benchmark。

### 组件库
- [Semi Design](https://semi.design/zh-CN/)，定制主题，前往[Semi 设计系统管理站点](https://semi.design/dsm/)
- [Semi Icons](https://semi.design/zh-CN/basic/icon)，自定义图标见[SVGR](https://rsbuild.dev/zh/plugins/list/plugin-svgr)
- [shadcn](https://ui.shadcn.com/)
- [magicui](https://magicui.design/)
  
### 工具包
- 使用 [es-toolkit](https://github.com/toss/es-toolkit) 替代 lodash，更小，更快

### 开发规范与最佳实践
- TypeScript 类型支持å
- [Biome](https://biomejs.dev/zh-cn/) 代码规范
- Git Hooks 工作流

### 特性亮点
- 📦 开箱即用的项目模板
- 🚀 极致的开发体验
- 🛠️ 完善的工具链
- 📚 详尽的文档支持
- 🔄 持续的更新维护
