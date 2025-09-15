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
      items: ['skill-tree/skills', 'skill-tree/suggestions'],
    },
    {
      type: 'category',
      label: 'Moveset',
      items: ['moveset/relentless-blade', 'moveset/active-skills', 'moveset/photon-blast', 'moveset/photon-arts', 'moveset/normal-attack', 'moveset/slug-shot', 'moveset/weapon-action', 'moveset/counters', 'moveset/animation-canceling',       {
        type: 'category',
        label: 'Tech Arts Customization',
        items: [
          'moveset/tech-arts-customization/waving-rigel',
          'moveset/tech-arts-customization/reaping-regulus',
          'moveset/tech-arts-customization/shifting-spica',
        ],
      }, 'moveset/framedata'],
    },
    'subclasses',
    'addons',
    {
      type: 'category',
      label: 'Gearing',
      items: ['gearing/equipment', 'gearing/ex-augments'],
    },
    {
      type: 'category',
      label: 'Mechanics Breakdown',
      items: [
        'mechanics/gunblade-focus-quick-recharge',
        'mechanics/gunblade-focus-gauge-amplifier',
        'mechanics/slugshot',
      ],
    },
    'resources',
    'credits',
  ],
};

export default sidebars;