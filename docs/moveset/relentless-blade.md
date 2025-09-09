---
title: "Relentless Blade"
---

import MovesetTable from '@site/src/components/MovesetTable';
import VideoPlayer from '@site/src/components/VideoPlayer';
import Tooltip from '@site/src/components/Tooltip';

During a <Tooltip term="PA" />, a purple glow will appear on your character.
When using a [Normal Attack](/moveset/normal-attack) while the glow is visible, you will do an additional [hitscan](https://en.wikipedia.org/wiki/Hitscan) attack that builds Focus, Rage and recovers some <Tooltip term="PP" />.

:::tip
The skill [Relentless Blade Reinforce](/skill-tree/skills#relentless-blade-reinforce) will increase the potency of this attack.
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
Strong [Relentless Blade](/skill-tree/skills#relentless-blade) only occurs during [Stay Arts Flowing Sirius Stage 2](/moveset/photon-arts#sfs12).
:::

## Enhancing accessibility
Some may find the window of [Relentless Blade](/skill-tree/skills#relentless-blade) difficult or tiresome. To make things easier, you may change the location of your [Normal Attack](/moveset/normal-attack) button. There is a priority system for inputs. The game will process actions with a lower priority value first. The priority values are as follows:

![image](/skill/palette-priority.png)

Binding the [Normal Attack](/moveset/normal-attack) button to a slot with lower priority allows you to hold down both a <Tooltip term="PA" /> and a [Normal Attack](/moveset/normal-attack) to automatically activate [Relentless Blade](/skill-tree/skills#relentless-blade) without canceling into [Slug Shot](/skill-tree/skills#slug-shot) or a [Normal Attack](/moveset/normal-attack).

Here is an example of me binding [Normal Attack](/moveset/normal-attack) to Slot 6 of my Sub Palette which has a priority value of 9, while I am using a <Tooltip term="PA" /> on my Weapon Palette with a priority value of 2.

<VideoPlayer src="/PA/EasyRB.webm" />