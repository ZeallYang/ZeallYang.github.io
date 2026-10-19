# 杨泽宇 · 学术主页

独立实现的 Astro 静态学术主页，使用原生 CSS 和少量原生 JavaScript，无前端框架或第三方字体请求。主页与成员页面按用户提供的最新版《2026-个人信息-杨泽宇（机智学院官网）.docx》及后续仓库资料修改维护，原文转录在 `PROFILE_CONTENT.md`；动态、学术交流、活动与资源页面暂留空。已加入老师照片，通过 GitHub Actions 构建并发布到 GitHub Pages。

## 在 VS Code 中预览

需要 Node.js **22.22.0+（建议 Node 24 LTS）** 和 npm 9.6.5+。用 VS Code 打开本项目文件夹，在“终端 → 新建终端”中运行：

```powershell
npm install
npm run dev
```

浏览器打开终端显示的地址，通常为 **http://localhost:4321/**。保存文件后自动刷新；按 `Ctrl+C` 停止。可选安装 VS Code 官方 Astro 扩展。请使用 Astro 开发服务预览，不要直接打开 `.astro` 或使用 Live Server。

```powershell
npm run build       # 静态产物输出至 dist/
npm run preview     # 在本地检查构建产物
```

已生成 `package-lock.json`，干净环境也可使用 `npm ci` 精确安装依赖。

## 修改资料和样式

- `src/data/profile.ts`：姓名、完整简介、关键词、项目、论文、荣誉、学术兼职与招生原文；项目角色控制“主持／参与”分组。所有学术内容在此维护。
- 当前最新版包含 13 项项目（主持 8 项、参与 5 项）、10 篇代表性论文、9 项荣誉、10 项学术兼职；邮箱为 `yangzeyu@zju.edu.cn`。与初始资料冲突时，以此次用户提供的最新版文档和更新后的 `PROFILE_CONTENT.md` 为准。
- `profile.biographyHighlights`：简介中需要突出显示的原文片段；只需填写与正文一致的文字，页面自动加粗强调。
- 顶栏左侧名称由 `groupName` 维护，沿用用户设置的“工业智能感知与自主学习课题组”。点击名称返回主页。
- `src/pages/index.astro`：主页布局与菜单交互；左侧章节目录由 `src/data/profile.ts` 的 `sections` 维护。
- 顶部菜单由 `src/data/profile.ts` 的 `navigation` 维护，四个直接入口为“课题组动态／学术交流／课题组活动／课题组成员”。共享的 `src/components/SiteHeader.astro` 统一维护主页和成员页面的顶栏，当前栏目用细下划线标识；内部路径自动带上 Astro `BASE_URL`。如以后需要下拉菜单，仍可在 `navigation` 中使用 `children`，支持鼠标、触屏和键盘操作。
- **暂时不用顶部菜单**：将同一文件中的 `showTopNavigation` 改为 `false`；改回 `true` 即恢复。隐藏菜单不会删除页面，也不影响左侧章节导航。
- **课题组成员页面**：`src/pages/members.astro` → `/members/`，当前展示 2021—2026 级共 15 位硕士研究生及已提供的相关信息。内容集中在 `profile.ts` 的 `graduateStudents`，添加年级、姓名或备注即可更新；不推断未提供的学籍或职位。
- **预留空页面**：`news.astro` → `/news/`、`exchange.astro` → `/exchange/`、`activities.astro` → `/activities/`，只保留基础 HTML 与标题，暂设 `noindex`。原 `resources.astro` → `/resources/` 文件保留，当前不放入菜单。以后补充真实内容后移除 `noindex`；继续扩展时先建立页面文件，再向 `navigation` 添加入口。
- 顶栏沿用用户设置：页首不透明，滚动后以 400ms 动画变为 29% 不透明度；鼠标移入或键盘操作时恢复清晰，手机展开菜单时也恢复清晰。系统启用“减少动态效果”时取消动画。
- 顶部菜单使用简洁文字样式，电脑上四项并排，手机上两行、每行两项；整条顶栏仍沿用原有的滚动透明效果。
- 成员入口文字右上角的静态小红点用于强调入口，由 `navigation` 中该项的 `highlight: true` 控制；改为 `false` 或移除此字段即可隐藏。
- `src/styles/global.css`：颜色、字体、间距及电脑／手机适配。
- `src/assets/portrait.jpg`：用户于 2026-10-19 提供的真实照片，源文件保持原样。头像通过 Astro 内置 `Image` 组件生成 WebP 和 1×／2×／3× 尺寸，手机与电脑自动选择合适版本。以后直接替换此文件即可更新头像；将 `profile.avatar` 设为 `null` 则恢复姓名字母标识。
- 论文对象的可选 `links` 可填写真实地址，例如 `links: [{ label: 'DOI', url: '已确认的完整地址' }]`；学术账号填写到 `academicLinks`。没有真实地址就保持空，不显示链接按钮。
- 代表性论文使用“图示 + 论文信息”布局。将真实论文图示放入 `public/papers/`，在对应论文对象增加 `image: { src: 'papers/文件名.png', alt: '图示的准确说明' }`，即可替换占位区；图片完整显示，不裁切。`venueLabel` 为图示左上角的期刊简称，`url` 为标题的真实跳转地址，`highlights` 可填写已确认的研究要点字符串数组。未提供图片、地址或简介时，不编造内容。
- 未展示论文的主观“顶刊／分区”评价；未将旧网页元信息用作本站更新时间。

## 发布到现有 GitHub 仓库

仓库：[ZeallYang/ZeallYang.github.io](https://github.com/ZeallYang/ZeallYang.github.io)。仓库名符合个人主页命名规则，GitHub Pages 正式地址为 **[https://zeallyang.github.io/](https://zeallyang.github.io/)**，无需仓库名子路径。

工作流使用 [Astro 官方 GitHub Pages Action](https://docs.astro.build/en/guides/deploy/github/) 构建上传，并通过 GitHub 的 `configure-pages` 自动读取 `site` 和 `base`。本地和当前线上站点均使用根路径，照片、样式、菜单、研究生页面和 canonical 会自动适配部署地址。**无需手动添加 ASTRO_SITE / ASTRO_BASE 仓库变量，也无需提供老师账号的密码或 Token。**

### 1. 启用 GitHub Pages

用你自己的协作者账号登录并打开仓库，确认邀请已接受。在 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**，已有工作流，无需再生成模板。配置发布来源需要 Admin 或 Maintain 权限；如果看不到设置，让老师完成这一步，日常代码维护可以继续使用你的协作者账号。

确认默认分支为 `main`。如果仓库实际使用其他分支，将 `.github/workflows/deploy.yml` 中的 `branches: [main]` 改为相应分支。若 Pages 设置提示套餐限制，GitHub Free 的 Pages 需要公开仓库；私有仓库需使用支持该功能的套餐，由仓库所有者选择。

### 2. 在本机维护源码

已关联仓库的开发目录可以直接继续使用。换电脑时，在 VS Code 终端将仓库克隆到一个尚不存在的目录：

```powershell
git clone https://github.com/ZeallYang/ZeallYang.github.io.git D:\yangzeyu-publish
```

如果要求登录，通过弹出的 GitHub 登录界面使用**你自己的账号**完成授权。

用 VS Code 打开克隆后的目录，运行 `npm ci` 安装依赖，再运行 `npm run dev` 预览。仓库只维护网站源码、展示用照片、配置、锁文件和说明；`node_modules/`、`dist/`、缓存、QA 文件及本地照片原件均不提交。

### 3. 提交并推送

在当前仓库目录检查更改后提交。下例按 `main` 分支说明：

```powershell
git status
git add .
git commit -m "Update academic homepage"
git push -u origin main
```

如果提示没有 Git 提交者信息，按终端提示设置你自己的姓名与邮箱；如果 `main` 受保护，改用分支提交 Pull Request，合并后部署。若推送因远程已有更新被拒绝，先同步并处理差异，不使用强制推送。

### 4. 检查上线结果

进入仓库 **Actions → Deploy academic homepage to GitHub Pages** 查看执行结果。构建和部署成功后，**Settings → Pages → Visit site** 或工作流的 `github-pages` 环境会显示正式网址。确认首页、老师照片和 `/members/` 研究生页面均可打开。推送成功与部署成功是两件事，请以 Actions 和 Pages 的结果为准。

### 5. 后续维护

之后固定在克隆后的仓库目录修改和提交，先同步老师或其他协作者的更新，再编辑 `src/data/profile.ts`、页面或照片：

```powershell
git pull --ff-only
npm install
npm run dev
# 修改完成并停止预览后
npm run build
git add .
git commit -m "Update academic homepage"
git push
```

向 `main` 推送后会自动重新部署，无需上传 `dist/`，也不需要每次操作 Pages 设置。

## 本地模拟正式部署

普通 `npm run dev` 仍在根路径预览。需要模拟正式部署时，在同一个 PowerShell 终端运行：

```powershell
$env:ASTRO_SITE = 'https://zeallyang.github.io'
$env:ASTRO_BASE = '/'
npm run build
npm run preview
```

打开终端显示的预览地址根路径。停止预览后运行 `Remove-Item Env:ASTRO_SITE, Env:ASTRO_BASE`，并重新 `npm run build`，即可恢复不含线上 canonical 的本地构建产物。若以后改用项目仓库部署，再将 `ASTRO_BASE` 设为对应的 `/仓库名/`；当前个人主页不需要子路径。

## 以后绑定独立域名

在 GitHub Pages 设置中配置已确认的自定义域名，依据 [GitHub DNS 官方说明](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) 设置 DNS，并新建 `public/CNAME`（一行域名，不带协议）。重新部署后，工作流会从 Pages 设置读取新域名及对应路径，无需手工修改用户名或 `base`。域名核验完成后启用 HTTPS。

尚可补充：Google Scholar／ORCID／GitHub 账号和论文 DOI／PDF／Code 链接。独立域名不是上线必需项。
