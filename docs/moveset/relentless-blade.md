---
title: "Relentless Blade"
description: "Explaining the skill Relentless Blade and how to use it easily"
---

During a PA, a purple glow appears on your character. While it’s active, performing a [Normal Attack](/moveset/normal-attack) triggers an additional hitscan strike instead that builds Focus, Rage and restores some PP.

:::tip
* [Relentless Blade Reinforce](/skill-tree/skills#relentless-blade-reinforce) increases the potency of this attack.
:::

<ImageTable>
  <ImageTableFigure src="/skill/rb.png" alt="Relentless Blade indication" width="350px">
    A purple glow indicating the timeframe for the normal attack button input.
  </ImageTableFigure>
  <ImageTableFigure src="/skill/rb-success.png" alt="Relentless Blade success" width="350px">
    When successfully triggering another visual indicator will appear.
  </ImageTableFigure>
</ImageTable>

<MovesetTable tableId="RB" args={(moveset) => [moveset.RB, 'Weak w/o RBR', moveset.RBR(moveset.RB), 'Weak w/ RBR', moveset.Strong_RB, 'Strong w/o RBR', moveset.RBR(moveset.Strong_RB), 'Strong w/ RBR']} />

:::tip
* Strong [Relentless Blade](/skill-tree/skills#relentless-blade) occurs only during [Stay Arts Flowing Sirius Stage 2](/moveset/photon-arts#sfs12).
:::

## Enhancing accessibility
Some players find the [Relentless Blade](/skill-tree/skills#relentless-blade) timing tiresome. To make it easier, you can reposition your [Normal Attack](/moveset/normal-attack) button. Inputs are processed by priority (lower value executes first). Priority values are:

![image](/skill/PalettePriority.png)

Binding the [Normal Attack](/moveset/normal-attack) button to a slot with higher priorty value than the PA you are using allows you to hold down both a PA and a [Normal Attack](/moveset/normal-attack) to automatically activate [Relentless Blade](/skill-tree/skills#relentless-blade) without triggering [Slug Shot](/skill-tree/skills#slug-shot) or a [Normal Attack](/moveset/normal-attack).

Here is an example of me binding [Normal Attack](/moveset/normal-attack) to Slot 6 of my Sub Palette which has a priority value of 9, while I am using a <Tooltip term="PA" /> on my Weapon Palette with a priority value of 2.

<VideoPlayer src="/PA/EasyRB.webm" />