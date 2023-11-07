
import { NavItem, Sidebar, SocialLink } from "@rspress/shared"
export const socialLinks: SocialLink[] = [
    {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspack',
    }
]


export const navList = [
    {
        text: "笔记",
        link: "/notes",
        activeMatch: '/notes/',
        items: [
            {
                text: "版本库",
                link: "/notes/version/git/theory",
            },
            {
                text: "CSS探究",
                link: "/notes/css/style-isolation/module",
            }
        ]
    },
    {
        text: "代码片段",
        items: [
            {
                text: '组件',
                link: '/code/components/intro',
            }
        ]

    },
    {
        text: "工具插件",
        items: [
            {
                text: '组件',
                link: '/code/components/intro',
            }
        ]
    },
    {
        text: "高效工具",
        items: [
            {
                text: '组件',
                link: '/code/components/intro',
            }
        ]
    }
] as NavItem[]

export const sidebarConfig: Sidebar = {
    "/notes/version": [
        {
            text: "Git版本管理",
            items: [
                "/notes/version/git/theory"
            ],
        }
    ],
    "/notes/css": [
        {
            text: "样式隔开",
            items: [
                "/notes/css/style-isolation/module",
                "/notes/css/style-isolation/in-js",
            ],
        }
    ],
    "/code/components": [
        {
            text: "介绍",
            link: "/code/components/intro"
        },
        {
            text: "Button",
            items: [
                "/code/components/button/usage",
                "/code/components/button/design"
            ],
        },
        {
            text: "Grid",
            items: [
                "/code/components/grid/usage",
                "/code/components/grid/design"
            ],
        }
    ]


}
