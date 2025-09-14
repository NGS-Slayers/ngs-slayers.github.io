---
title: "Animation Canceling"
description: "Explaining Animation Canceling and the benefits"
---

You can cancel out most Gunblade Photon Arts and Actions early with a Step Dodge- or Weapon Action input.
This means you can increase the DPS of some Photon Arts and Actions while gaining PP making [Slug Shot](/skill-tree/skills#slug-shot) way less appealing.
You can read more about the problem with [Slug Shot](/skill-tree/skills#slug-shot) in [Mechanics Breakdown](/breakdown#slugshot)

:::warning
* No input delay or human error is assumed.
* When the description of the cancel includes the word “safely”, it means that it is impossible to mistime since the earliest time to cancel is the same as the attack hit timing.
* For more information about the timings please refer to [Frame Data](/moveset/framedata).
:::

## sFS12>WA123
Canceling [Stay Arts Flowing Sirius Stage 1 and 2](/moveset/photon-arts#sfs12) into [Weapon Action Stage 1 to 3](/moveset/weapon-action#wa123) has the highest DPS for enemy downtime outside of [Unleashed Rage](/moveset/active-skills#unleashed-rage) and [Gunblade Focus Over Drive Finisher](/moveset/active-skills#gunblade-focus-overdrive).
Reduces PP Cost but builds Rage at a slower rate than just chaining [Stay Arts Flowing Sirius Stage 1 and 2](/moveset/photon-arts#sfs12).
It also takes longer so make sure the time window is big enough so you can connect the last hit of the PA when chaining them.

:::tip
* You can safely cancel after 2.85 seconds.
:::

<VideoPlayer src="/PA/sFS12-WA123.webm" />

<MovesetTable tableId="sFS12-WA123" args={(moveset) => [moveset.calcProp(moveset.Cancel(moveset.sFS12,'WA'),moveset.WA1,moveset.WA2,moveset.WA3)]} />

## StepC WA>Chain
Repeating [Step Couter Weapon Action](/moveset/counters#stepc-wa) is stronger than chaining [Blade Counter Normal Attack](/moveset/counters#bc-na) together, which makes this the go to option for a lingering hitbox as long as you can reach your enemy.

:::tip
* You can safely cancel after 0.82 seconds.
:::

<VideoPlayer src="/PA/StepCWA-chain.webm" />

<MovesetTable tableId="StepCWA-Chain" args={(moveset) => [moveset.Cancel(moveset.StepCWA,'Step')]} />

## StepC WA>WA123
Using [Weapon Action Stage 1 to 3](/moveset/weapon-action#wa123) after a [Step Counter Weapon Action](/moveset/counters#stepc-wa) increases the total potency of the counter and recovers some additional PP.

:::tip
* You can safely cancel after 0.82 seconds.
:::

<VideoPlayer src="/PA/StepCWA-WA123.webm" />

<MovesetTable tableId="StepCWA-WA123" args={(moveset) => [moveset.calcProp(moveset.Cancel(moveset.StepCWA,'WA'),moveset.WA1,moveset.WA2,moveset.WA3)]} />

## BC WA>WA123
Canceling [Blade Counter Weapon Action](/moveset/counters#bc-wa) after the sixth hit into a [Weapon Action Stage 1 to 3](/moveset/weapon-action#wa123) increases the total potency of the sequence by elimnating the endlag of the animation.

:::danger
* This is unsafe and you can end up canceling early resulting in a loss of potency.
* The perfect timing for the cancel is at 1.92 seconds.
:::

<VideoPlayer src="/PA/BCWA-WA123.webm" />

<MovesetTable tableId="BCWA-WA123" args={(moveset) => [moveset.calcProp(moveset.WA1,moveset.Cancel(moveset.BCWA,'WA'),moveset.WA1,moveset.WA2,moveset.WA3),'WA1>BCWA>WA123', moveset.calcProp(moveset.WA2,moveset.Cancel(moveset.BCWA,'WA'),moveset.WA1,moveset.WA2,moveset.WA3),'WA2>BCWA>WA123', moveset.calcProp(moveset.WA3,moveset.Cancel(moveset.BCWA,'WA'),moveset.WA1,moveset.WA2,moveset.WA3),'WA3>BCWA>WA123']} />

## sRR>StepC WA
Canceling [Stay Arts Reaping Regulus](/moveset/photon-arts#srr) into a [Step Counter Weapon Action](/moveset/counters#stepc-wa) is fastest way to build Focus and Rage in a small time window.

:::danger
* This is unsafe and you can end up canceling early resulting in a loss of potency.
* The perfect timing for the cancel is at 0.42 seconds.
:::

<VideoPlayer src="/PA/sRR-StepCWA.webm" />

<MovesetTable tableId="sRR-StepCWA" args={(moveset) => [moveset.calcProp(moveset.Cancel(moveset.sRR,'Step'),moveset.StepCWA)]} />

## sWR>StepC WA
You can cancel out of [Stay Arts Waving Rigel](/moveset/photon-arts#swr) with a Step Dodge input super early meaning this has amazing DPS when you can make use of the small time window.

:::tip
* You can safely cancel the PA at 0.18 seconds.
:::

<VideoPlayer src="/PA/sWR-StepCWA.webm" />

<MovesetTable tableId="sWR-StepCWA" args={(moveset) => [moveset.calcProp(moveset.Cancel(moveset.sWR,'Step'),moveset.StepCWA)]} />