// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  default: [
    'intro',
    'reading-tables',
    {
      type: 'category',
      label: 'Skill Tree',
      link: {
        type: 'generated-index',
      },
      items: ['skill-tree/skills', 'skill-tree/suggestions'],
    },
    {
      type: 'category',
      label: 'Moveset',
      link: {
        type: 'generated-index',
      },
      items: ['moveset/relentless-blade', 'moveset/active-skills', 'moveset/photon-blast', 'moveset/photon-arts', 'moveset/normal-attack', 'moveset/slug-shot', 'moveset/weapon-action', 'moveset/counters', 'moveset/animation-canceling',       {
        type: 'category',
        label: 'Tech Arts Customization',
        link: {
          type: 'generated-index',
        },
        items: [
          'moveset/tech-arts-customization/waving-rigel',
          'moveset/tech-arts-customization/reaping-regulus',
          'moveset/tech-arts-customization/shifting-spica',
        ],
      }, 'moveset/framedata'],
    },
    'subclasses',
    'addons',
    'ex-styles',
    {
      type: 'category',
      label: 'Gearing',
      link: {
        type: 'generated-index',
      },
      items: ['gearing/equipment', 'gearing/ex-augments'],
    },
    {
      type: 'category',
      label: 'Mechanics Breakdown',
      link: {
        type: 'generated-index',
      },
      items: [
        'mechanics/gunblade-focus-quick-recharge',
        'mechanics/gunblade-focus-gauge-amplifier',
        'mechanics/slugshot',
        'mechanics/gunblade-focus-extra-drive',
      ],
    },
    'resources',
    'credits',
    {
      type: 'link',
      label: 'GitHub',
      href: 'https://github.com/NGS-Slayers/ngs-slayers.github.io',
      className: 'hide-on-desktop',
    },
    {
      type: 'link',
      label: 'Discord',
      href: 'https://discord.com/invite/pso2',
      className: 'hide-on-desktop',
    },
  ],
};

export default sidebars;