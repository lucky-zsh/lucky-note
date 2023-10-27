import * as path from 'path';
import { defineConfig } from 'rspress/config';
const isDev = process.env.NODE_ENV === 'development' ? true : false;
const publicPath = isDev ? '/' : '/lucky-note/';
// import SpriteLoaderPlugin from "svg-sprite-loader/plugin"
export default defineConfig({
    root: path.join(__dirname, 'docs'),
    base: publicPath,
    route: {
        include: ["docs/**/*", "src/**/*"]
    },
    builderConfig: {
        output: {
            assetPrefix: publicPath,
            cssModules: {
                auto: /theme((\\|\/).+)+\.scss$/,
            },
            cssModuleLocalIdentName: "t_[local]_[hash:6]",
            disableSvgr: false,
        },

        source: {
            alias: {
                '@/assets': path.join(__dirname, './assets'),
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
        },


    },
    mediumZoom: true,
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
