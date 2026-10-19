import { defineConfig } from 'astro/config';

// 本地使用根路径；GitHub Actions 从 Pages 配置自动注入正式站点与子路径。
export default defineConfig({
  output: 'static',
  site: process.env.ASTRO_SITE || undefined,
  base: process.env.ASTRO_BASE || '/',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
