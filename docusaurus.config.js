const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'LOSGIF',
  tagline: '个人技术备忘录',
  url: 'https://losgif.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'losgif', // Usually your GitHub org/user name.
  projectName: 'pad', // Usually your repo name.
  i18n: {
    defaultLocale: 'zh',
    locales: ['en', 'zh']
  },
  themeConfig: {
    navbar: {
      title: 'LOSGIF',
      logo: {
        alt: 'LOSGIF LOGO',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: '技术文档',
        },
        {to: '/blog', label: '博客', position: 'left'},
        {
          href: 'https://github.com/losgif',
          label: 'GitHub',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '技术文档',
          items: [
            {
              label: '新人手册',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: '社交媒体',
          items: [
            {
              label: 'V2EX',
              href: 'https://v2ex.com/',
            },
            {
              label: '掘金',
              href: 'https://juejin.cn/',
            },
            {
              label: 'B站',
              href: 'https://bilibili.com/',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '博客',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/losgif',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LOSGIF`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
