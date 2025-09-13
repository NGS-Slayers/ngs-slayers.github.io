---
title: "Counters"
description: "Explaining Counters"
---

import Tooltip from '@site/src/components/Tooltip';

With the skill [Blade Counter](/skill-tree/skills#blade-counter), you can perform a different counter attack based on the button used. After successfully guarding against an attack, you can use the [Weapon Action](/moveset/weapon-action#wa123) to perform a long counter attack. When using a [Normal Attack](/moveset/normal-attack) input instead, a short counter attack occurs.
These options are also available for your Step Counters but result in different counter attacks.

:::tip
The same goes for [Mobile Blade Counter](/skill-tree/skills#mobile-blade-counter) if you successfully evaded an attack while using a directional input.

After successfully countering an enemy attack you will be granted invincibility frames for the entire duration of the counter animation.
:::

## BC NA
[Blade Counter](/skill-tree/skills#blade-counter) Normal Attack is useful for when there is multiple separate attacks incoming from an enemy and [<Tooltip term="StepC" /> Weapon Action](/moveset/counters#stepc-wa) would put you out of position or is unable to reach the enemy. This counter attack can also be used for when you are already performing a [<Tooltip term="WA123" />](/moveset/weapon-action#wa123). You will be able to move slightly after starting the counter sequence, when no directional input was pressed you will be moved towards your target.

<VideoPlayer src="/PA/BCNA.webm" />

<MovesetTable tableId="BCNA" args={(moveset) => [moveset.BCNA,'BCNA', moveset.calcProp(moveset.WA1,moveset.BCNA),'WA1>BCNA', moveset.calcProp(moveset.WA2,moveset.BCNA),'WA2>BCNA', moveset.calcProp(moveset.WA3,moveset.BCNA),'WA3>BCNA']} />

## BC WA
[Blade Counter](/skill-tree/skills#blade-counter) Weapon Action has the highest total potency out of all of your [counters](/moveset/counters) and makes this your go to option for when the enemy is not attacking in quick succession. You will be able to move slightly after starting the counter sequence.

<VideoPlayer src="/PA/BCWA.webm" />

<MovesetTable tableId="BCWA" args={(moveset) => [moveset.BCWA,'BCWA', moveset.calcProp(moveset.WA1,moveset.BCWA),'WA1>BCWA', moveset.calcProp(moveset.WA2,moveset.BCWA),'WA2>BCWA', moveset.calcProp(moveset.WA3,moveset.BCWA),'WA3>BCWA']} />

## mBC NA
[Mobile Blade Counter](/skill-tree/skills#mobile-blade-counter) Normal Attack is used for when you need a quick ranged counter and need to move into an incoming attack hitbox for it. You will be able to move slightly after starting the counter sequence, when no directional input was pressed you will be moved towards your target. Try to avoid using this counter attack when it is not necessary.

:::important
This variation of the counter attack does not get the benefit of the skill [Blade Counter Critical Up](/skill-tree/skills#blade-counter-critical-up).
:::

<VideoPlayer src="/PA/mBCNA.webm" />

<MovesetTable tableId="mBCNA" args={(moveset) => [moveset.calcProp(moveset.mBCNA,moveset.mWA)]} />

## mBC WA
This counter is your go to option for when you have to move into an incoming attack hitbox. You will be able to move slightly after starting the counter sequence. Try to avoid using this counter attack when it is not necessary.

:::important
This variation of the counter attack does not get the benefit of the skill [Blade Counter Critical Up](/skill-tree/skills#blade-counter-critical-up).
:::

<VideoPlayer src="/PA/mBCWA.webm" />

<MovesetTable tableId="mBCWA" args={(moveset) => [moveset.calcProp(moveset.mBCWA,moveset.mWA)]} />

## StepC NA
Step Counter Normal Attack is the fastest counter the Gunblade has to offer. It is used for very quick double counters. Try to avoid this counter for anything other than the before mentioned purpose.

<VideoPlayer src="/PA/StepCNA.webm" />

<MovesetTable tableId="StepCNA" args={(moveset) => [moveset.StepCNA]} />

## StepC WA
Step Counter Weapon Action is an amazing tool to build Focus and Rage, it serves as a gap closer, has the highest <Tooltip term="DPS" /> when [chained in a lingering hitbox](/moveset/animation-canceling#stepc-wachain), and is your highest potency “short counter”.

<VideoPlayer src="/PA/StepCWA.webm" />

<MovesetTable tableId="StepCWA" args={(moveset) => [moveset.StepCWA]} />