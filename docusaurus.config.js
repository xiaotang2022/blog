module.exports = {
  title: "JACK小桔子",
  tagline: "一个分享软件应用/插件/实用技巧的网站",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  favicon: "img/logo.jpg",
  organizationName: "xjz3103", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: 'c5654a935b889d2448008dea6e3dd6e2',
      indexName: 'xjz3103',
    },
    navbar: {
      title: "JACK小桔子",
      logo: {
        alt: "我的LOGO",
        src: "img/favicon.ico",
      },
      links: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "文档",
          position: "right",
        },
        { to: "blog/", label: "博客", position: "right" },
        {
          href: "https://github.com/xjz3103/blog",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://space.bilibili.com/481261311",
          label: "bilibili",
          position: "right",
        },
        {
          href: "https://vipxjz.vercel.app/",
          label: "破解专区",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "电话",
          items: [
            {
              label: "13413293886",
            },
          ],
        },
        {
          title: "电子邮箱",
          items: [
            {
              label: "1140535362@qq.com",
            },
            {
              label: "xjz3103@outlook.com",
            },
            {
              label: "xjz3103@gmail.com",
            },
          ],
        },
        {
          title: "联系我",
          items: [
            {
              label: "bilibili",
              href: "https://space.bilibili.com/481261311",
            },
            {
              label: "GitHub",
              href: "https://github.com/xjz3103",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} JACK小桔子`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "docx1",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
