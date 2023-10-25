import * as path from 'path';
import { defineConfig } from 'rspress/config';
const isDev = process.env.NODE_ENV === 'development' ? true : false;
export default defineConfig({
    root: path.join(__dirname, 'docs'),
    base: isDev ? '/' : '/lucky-note/',
    route: {
        include: ["docs/**/*", "src/**/*"]
    },
    builderConfig: {
        output: {
            assetPrefix: isDev ? '/' : '/lucky-note/',
        }
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
