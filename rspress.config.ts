import * as path from 'path';
import { UserConfig, defineConfig } from 'rspress/config';
import { navList, sidebarConfig, socialLinks } from './config/route';
import { pluginPreview } from '@rspress/plugin-preview';
const isDev = process.env.NODE_ENV === 'development' ? true : false;
const publicPath = isDev ? '/' : '/lucky-note/';
export default defineConfig({
    root: path.join(__dirname, 'docs'),
    base: publicPath,
    route: {
        include: ["docs/**/*", "src/**/*"]
    },
    markdown: {
        showLineNumbers: true,
        mdxRs: false
    },
    globalStyles: path.join(__dirname, '.', 'theme', 'index.css'),
    themeConfig: {
        footer: {
            message: '© 2023 ByteDance Inc. All Rights Reserved.',
        },
        socialLinks: socialLinks,
        nav: navList,
        sidebar: sidebarConfig,
        prevPageText: '上一篇',
        nextPageText: '下一篇',
        outlineTitle: '目录',
    },
    builderConfig: {
        output: {
            assetPrefix: publicPath,
            cssModules: {
                auto: /(theme|demos)((\\|\/).+)+\.scss$/,
            },
            cssModuleLocalIdentName: "t_[local]_[hash:6]",
            disableSvgr: false,
        },

        source: {
            alias: {
                '@/assets': path.join(__dirname, './assets'),
                '@/demos': path.join(__dirname, './src/demos'),
                '@/theme': path.join(__dirname, './theme'),
                '@/ui': path.join(__dirname, './src'),
                '@/types': path.join(__dirname, './types')
            },

        },
        tools: {
            babel (_, { addPlugins }) {
                addPlugins([[
                    '@babel/plugin-transform-react-jsx',
                    {
                        runtime: 'automatic',
                        importSource: 'react-auto-clsx'
                    },
                    '@babel/plugin-auto-react-jsx'
                ]])
            },
            sass: {
                additionalData: "@use '@/assets/styles/index.scss' as *;"
            }
        }
    },
    mediumZoom: true,
    logo: {
        light: "/lucky-icon.png",
        dark: "/lucky-icon.png",
    },
    plugins: [pluginPreview()],
} as UserConfig);
