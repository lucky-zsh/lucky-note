import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
    root: path.join(__dirname, 'docs'),
    base: '/lucky-note/',
    route: {
        include: ["docs/**/*", "src/**/*"]
    },
    builderConfig: {
        output: {
            assetPrefix: '/lucky-note/',
        },
        source: {
            define: {

            },
            alias: {

            },
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
