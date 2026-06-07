// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AI Interview Academy',
  tagline: 'Master Generative AI, RAG, Agentic AI, MCP, LLMOps, Cloud AI, and Enterprise Architecture Interviews',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://codeez-dev.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ai-interview-academy/',

  // GitHub pages deployment config.
  organizationName: 'CodeEZ-Dev',
  projectName: 'ai-interview-academy',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is in Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/CodeEZ-Dev/ai-interview-academy/tree/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [
            [require('remark-math'), {}],
          ],
          rehypePlugins: [
            require('rehype-katex'),
          ],
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/CodeEZ-Dev/ai-interview-academy/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-XXXXXXXX', // Replace with your Google Analytics ID
          anonymizeIP: true,
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve('@docusaurus/plugin-sitemap'),
      {
        changefreq: 'weekly',
        priority: 0.5,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/ai-interview-academy.png',
      navbar: {
        title: 'AI Interview Academy',
        logo: {
          alt: 'AI Interview Academy Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Categories',
            position: 'left',
            items: [
              {
                label: 'Generative AI',
                to: '/docs/genai',
              },
              {
                label: 'RAG',
                to: '/docs/rag',
              },
              {
                label: 'Agentic AI',
                to: '/docs/agentic-ai',
              },
              {
                label: 'MCP',
                to: '/docs/mcp',
              },
              {
                label: 'LLMOps',
                to: '/docs/llmops',
              },
              {
                label: 'GCP GenAI',
                to: '/docs/gcp',
              },
              {
                label: 'Enterprise Architecture',
                to: '/docs/architecture',
              },
              {
                label: 'System Design',
                to: '/docs/system-design',
              },
              {
                label: 'ML/DL',
                to: '/docs/ml-dl',
              },
              {
                label: 'Data Engineering',
                to: '/docs/data-engineering',
              },
              {
                label: 'Daily Challenges',
                to: '/docs/daily-challenges',
              },
            ],
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/CodeEZ-Dev/ai-interview-academy',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Categories',
            items: [
              {
                label: 'Generative AI',
                to: '/docs/genai',
              },
              {
                label: 'RAG',
                to: '/docs/rag',
              },
              {
                label: 'Agentic AI',
                to: '/docs/agentic-ai',
              },
              {
                label: 'MCP',
                to: '/docs/mcp',
              },
            ],
          },
          {
            title: 'Learn More',
            items: [
              {
                label: 'LLMOps',
                to: '/docs/llmops',
              },
              {
                label: 'Enterprise Architecture',
                to: '/docs/architecture',
              },
              {
                label: 'System Design',
                to: '/docs/system-design',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/CodeEZ-Dev/ai-interview-academy',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AI Interview Academy. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.lightPlus,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['python', 'java', 'javascript', 'typescript', 'bash', 'sql', 'yaml'],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      algolia: {
        appId: 'YOUR_APP_ID',
        apiKey: 'YOUR_API_KEY',
        indexName: 'ai-interview-academy',
      },
    }),

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
