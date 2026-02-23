# 城市测试 - 你适合居住在哪个城市？

一个基于 Vue 3 的纯前端在线测试应用，通过答题和五行分析推荐适合居住的城市。

## 功能特性

- 🔐 密码登录保护
- ⚗️ 五行八字分析（根据出生日期）
- 📝 10道性格测试题目
- 🏙️ 智能城市推荐算法
- 📱 响应式设计，支持移动端
- 💾 本地存储答题进度
- 📤 结果分享功能

## 技术栈

- **框架**: Vue 3
- **构建工具**: Vite
- **路由**: Vue Router 4
- **样式**: 原生 CSS

## 项目结构

```
test/
├── src/
│   ├── pages/
│   │   ├── LoginPage.vue          # 登录页
│   │   ├── FiveElementPage.vue    # 五行分析页
│   │   ├── QuizPage.vue           # 答题页
│   │   └── ResultPage.vue         # 结果页
│   ├── data/
│   │   ├── questions.js           # 题库数据
│   │   ├── cities.js              # 城市数据
│   │   └── config.js              # 配置文件
│   ├── utils/
│   │   └── wuxing.js              # 五行计算工具
│   ├── App.vue                    # 主应用组件
│   └── main.js                    # 入口文件
├── index.html
├── package.json
└── vite.config.js
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000 即可使用应用。

### 构建生产版本

```bash
npm run build
```

构建完成后，`dist` 目录包含生产环境文件。

## 使用说明

1. 输入访问密码（默认：123456）登录
2. 选择出生日期进行五行分析
3. 回答10道测试题目
4. 查看城市推荐结果

## 配置

修改 `src/data/config.js` 可以更改：
- 登录密码
- 应用名称
- 版本号

修改 `src/data/questions.js` 可以：
- 添加或修改测试题目

修改 `src/data/cities.js` 可以：
- 添加或修改城市数据
- 调整推荐算法权重

## 部署

### 静态部署

应用可以部署到任何静态网站托管服务：

- GitHub Pages
- Vercel
- Netlify
- Cloudflare Pages

### Vercel 部署示例

1. 在项目根目录运行 `npm run build`
2. 将 `dist` 目录上传到 Vercel
3. 或连接 Git 仓库自动部署

## 注意事项

- 密码配置在生产环境建议使用环境变量
- 本地存储数据可能被清除，建议后端存储用于生产环境
- 移动端和桌面端均已适配

## 默认密码

- **登录密码**: `123456`
- 可在 `src/data/config.js` 中修改

## 文档

- [使用文档](./docs/使用文档.md) - 用户使用指南
- [开发文档](./docs/开发文档.md) - 开发者文档
- [部署上线指南](./docs/部署上线指南.md) - 部署上线完整教程

## 许可证

MIT
