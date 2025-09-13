---
title: "Normal Attack"
description: "Explaining Normal Attacks"
---

import Tooltip from '@site/src/components/Tooltip';

# <img src="/PA/38px-NGSUINormalAttackGunblade.png" alt="icon" className="heading-icon"/>Normal Attack
Gunblade has three different variations of Normal Attacks.

:::tip
The skill [Short Range Hot Shot](/skill-tree/skills#short-range-hot-shot) increases the potency of all Normal Attacks.
:::

## NA123
Tapping the Normal Attack button fires a single shot ahead. Repeatedly tapping the button will fire up to 3 shots in succession with increasing <Tooltip term="DPS" /> for every Stage.

<VideoPlayer src="/PA/NA123.webm" />

<MovesetTable tableId="NA123" args={(moveset) => [moveset.calcProp(moveset.NA1,moveset.NA2,moveset.NA3),'w/o SRHS', moveset.calcProp(moveset.SRHS(moveset.NA1),moveset.SRHS(moveset.NA2),moveset.SRHS(moveset.NA3)),'w/ SRHS']} />

## cNA
Charging a Normal Attack, by holding down the button, initiates a Charged Normal Attack. The first charged stage causes it to release several shots in quick succession.

<VideoPlayer src="/PA/cNA.webm" />

<MovesetTable tableId="cNA" args={(moveset) => [moveset.cNA,'w/o SRHS', moveset.SRHS(moveset.cNA),'w/ SRHS']} />

## scNA
Charging the Normal Attack up to the second charged stage releases a powerful <Tooltip term="AoE" /> blast.

:::tip
After releasing this charged attack you will receive super armor and frontal guard for the duration of 0.5 seconds.
:::

<VideoPlayer src="/PA/scNA.webm" />

<MovesetTable tableId="scNA" args={(moveset) => [moveset.scNA,'w/o SRHS', moveset.SRHS(moveset.scNA),'w/ SRHS']} />

## <img src="/skill/38px-NGSUISkillChargedBlade.png" alt="icon" className="heading-icon"/>[Charged Blade](/skill-tree/skills#charged-blade)
Gunblade has several gap closers, one of which is the skill [Charged Blade](/skill-tree/skills#charged-blade). After releasing a [charged Normal Attack](/moveset/normal-attack#cna), using the [Weapon Action](/moveset/weapon-action#wa123) at a certain time will quickly thrust you closer to the enemy.

:::tip
During this thrust you will be granted super armor and an omnidirectional guard for 0.4 seconds.

[Charged Blade](/skill-tree/skills#charged-blade) is treated as using the [Weapon Action](/moveset/weapon-action#wa123), so after learning the skill [Blade Counter](/skill-tree/skills#blade-counter) you will be able to perform a [<Tooltip term="BC" />](/moveset/counters#bc-wa) with it.
:::

<VideoPlayer src="/PA/ChargedBlade.webm" />

<MovesetTable tableId="ChargedBlade" args={(moveset) => [moveset.ChargedBlade,'Charged Blade', moveset.calcProp(moveset.ChargedBlade,moveset.cNA),'cNA>Charged Blade', moveset.calcProp(moveset.ChargedBlade,moveset.scNA),'scNA>Charged Blade']} />