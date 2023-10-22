import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'LuckyNote',
  description: '深度学习前端知识',
  icon: "/lucky-icon.png",
  base:'/lucky-note/',
  builderConfig:{
    output: {
      assetPrefix: '/lucky-note/',
    }
  },
  mediumZoom:true,
  logo: {
    light: "/lucky-icon.png",
    dark: "/lucky-icon.png",
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress' },
    ],
  },
});
