---
title: "Weapon Action"
description: "Explaining the Weapon Action"
---

import Tooltip from '@site/src/components/Tooltip';

# <img src="/PA/38px-NGSUIWeaponActionGunblade.png" alt="icon" className="heading-icon"/>Weapon Action

## WA123
The Weapon Action enables you to guard against an enemy attack with a slash. Repeatedly tapping the button will slash up to 3 times in succession with increasing <Tooltip term="DPS" /> for every Stage.

:::tip
After every slash you will be granted super armor and an omnidirectional guard for a short period of time depending on the stage.

For Weapon Action Stage 1 the above mentioned defensive effects will last 0.3 seconds, for the second Weapon Action Stage 0.2 seconds and for third Weapon Action Stage 0.4 seconds.
:::

<VideoPlayer src="/PA/WA123.webm" />

<MovesetTable tableId="WA123" args={(moveset) => [moveset.calcProp(moveset.WA1,moveset.WA2,moveset.WA3)]} />

## mWA
If the skill [Mobile Blade](/skill-tree/skills#mobile-blade) was learned you can use the directional input to perform a slash while evading attacks.

:::tip
During the slash you will be granted invincibility frames for 0.35 seconds.
:::

<VideoPlayer src="/PA/mWA.webm" />

<MovesetTable tableId="mWA" args={(moveset) => [moveset.mWA]} />