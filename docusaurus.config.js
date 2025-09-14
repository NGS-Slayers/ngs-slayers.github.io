// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Theowyn’s Slayer Guide",
  tagline:
    "A comprehensive guide to the Slayer class in Phantasy Star Online 2: New Genesis",
  favicon: "/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://ngs-slayers.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "NGS-Slayers", // Usually your GitHub org/user name.
  projectName: "ngs-slayers.github.io", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  headTags: [
    {
      tagName: "meta",
      attributes: {
        name: "theme-color",
        content: "#48AC9C",
      },
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/NGS-Slayers/ngs-slayers.github.io/tree/main",
          remarkPlugins: [require("remark-math")],
          rehypePlugins: [require("rehype-katex")],
          routeBasePath: "/", // Set docs to be the root
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themes: [
    // [
    //   require.resolve("@easyops-cn/docusaurus-search-local"),
    //   {
    //     hashed: true,
    //     language: ["en"],
    //     docsRouteBasePath: "/",
    //   },
    // ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "/img/social-card.png",
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: "Theowyn’s Slayer Guide",
        logo: {
          alt: "Slayer Guide Logo",
          src: "/img/logo.png",
        },
        hideOnScroll: true,
        items: [
          {
            href: "https://github.com/NGS-Slayers/ngs-slayers.github.io",
            position: "right",
            "aria-label": "Github Repository",
            className:
              "header-icon-link fa-brands fa-github hide-on-mobile-tablet",
          },
          {
            href: "https://discord.com/invite/pso2",
            position: "right",
            "aria-label": "Discord",
            className:
              "header-icon-link fa-brands fa-discord hide-on-mobile-tablet",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            label: "GitHub",
            href: "https://github.com/NGS-Slayers/ngs-slayers.github.io",
          },
          {
            label: "Discord",
            href: "https://discord.com/invite/pso2",
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Theowyn | Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
