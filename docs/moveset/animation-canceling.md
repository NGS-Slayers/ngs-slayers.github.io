---
title: "Animation Canceling"
---

import MovesetTable from '@site/src/components/MovesetTable';
import VideoPlayer from '@site/src/components/VideoPlayer';
import Tooltip from '@site/src/components/Tooltip';

You can cancel out most Gunblade <Tooltip term="PA" />s and Actions early with a Step Dodge- or [Weapon Action](/moveset/weapon-action#wa123) input.

This means you can increase the <Tooltip term="DPS" /> of some <Tooltip term="PA" />s and Actions while gaining <Tooltip term="PP" /> making [Slug Shot](/skill-tree/skills#slug-shot) way less appealing.

You can read more about the problem with [Slug Shot](/skill-tree/skills#slug-shot) in the [Mechanics Breakdown Page](/breakdown#slugshot)

:::warning
No input delay or human error is assumed.

When the description of the cancel includes the word “safely”, it means that it is impossible to mistime since the earliest time to cancel is the same as the attack hit timing.

For more information about the timings please refer to [Frame Data](/moveset/framedata).
:::

### sFS12>WA123
Highest DPS for enemy downtime outside of [Unleashed Rage](/moveset/active-skills#unleashed-rage) and [Gunblade Focus Over Drive Finisher](/moveset/active-skills#gunblade-focus-overdrive).
Reduces <Tooltip term="PP" /> Cost but builds Rage at a slower rate than just chaining [<Tooltip term="sFS12" />](/moveset/photon-arts#sfs12).
Takes longer than chaining [<Tooltip term="sFS12" />](/moveset/photon-arts#sfs12) so make sure the time window is big enough so you can connect the last hit of the <Tooltip term="PA" />.

:::tip
You can cancel sFS12 safely at 2.85 seconds.
:::

<VideoPlayer src="/PA/sFS12-WA123.webm" />

<MovesetTable tableId="sFS12-WA123" args={(moveset) => [moveset.calcProp(moveset.Cancel(moveset.sFS12,'WA'),moveset.WA1,moveset.WA2,moveset.WA3)]} />

### StepC WA>Chain
Repeating [Step Couter Weapon Action](/moveset/counters#stepc-wa) is stronger than chaining [<Tooltip term="BC" /> <Tooltip term="NA" />](/moveset/counters#bc-na)s together, which makes this the go to option for a lingering hitbox as long as you can reach your enemy.

:::tip
You can cancel out of the [<Tooltip term="StepC" /> <Tooltip term="WA" />](/moveset/counters#stepc-wa) animation with another Step Dodge input safely at 0.82 seconds.
:::

<VideoPlayer src="/PA/StepCWA-chain.webm" />

<MovesetTable tableId="StepCWA-Chain" args={(moveset) => [moveset.Cancel(moveset.StepCWA,'Step')]} />

### StepC WA>WA123
Using the [Weapon Action](/moveset/weapon-action#wa123) after a [<Tooltip term="StepC" />outer Weapon Action](/moveset/counters#stepc-wa) increases the total potency of the counter and recovers some additional <Tooltip term="PP" />.

:::tip
You can cancel out of the StepC WA animation with another WA input safely at 0.82 seconds.
:::

<VideoPlayer src="/PA/StepCWA-WA123.webm" />

<MovesetTable tableId="StepCWA-WA123" args={(moveset) => [moveset.calcProp(moveset.Cancel(moveset.StepCWA,'WA'),moveset.WA1,moveset.WA2,moveset.WA3)]} />

### BC WA>WA123
You can cancel your [Blade Counter Weapon Action](/moveset/counters#bc-wa) after the sixth hit with another [Weapon Action](/moveset/weapon-action#wa123) input. This increases the total potency of the counter by canceling the end lag with [<Tooltip term="WA123" />](/moveset/weapon-action#wa123).


:::danger
This is not safe and you can end up canceling the <Tooltip term="PA" /> early so make sure to be careful.

The perfect timing for the cancel is at 1.92 seconds.
:::

<VideoPlayer src="/PA/BCWA-WA123.webm" />

<MovesetTable tableId="BCWA-WA123" args={(moveset) => [moveset.calcProp(moveset.WA1,moveset.Cancel(moveset.BCWA,'WA'),moveset.WA1,moveset.WA2,moveset.WA3),'WA1>BCWA>WA123', moveset.calcProp(moveset.WA2,moveset.Cancel(moveset.BCWA,'WA'),moveset.WA1,moveset.WA2,moveset.WA3),'WA2>BCWA>WA123', moveset.calcProp(moveset.WA3,moveset.Cancel(moveset.BCWA,'WA'),moveset.WA1,moveset.WA2,moveset.WA3),'WA3>BCWA>WA123']} />

### sRR>StepC WA
The combo known as <Tooltip term="RBC" /> is fastest way to build Focus and Rage in a small time window. Because of the Step Dodge input you will be able to cancel the recoil of the <Tooltip term="PA" />s animation allowing you to chain into a [<Tooltip term="StepC" /> <Tooltip term="WA" />](/moveset/counters#stepc-wa).

:::danger
This is not safe and you can end up canceling the <Tooltip term="PA" /> early so make sure to be careful.

The perfect timing for the cancel is at 0.42 seconds.
:::

<VideoPlayer src="/PA/sRR-StepCWA.webm" />

<MovesetTable tableId="sRR-StepCWA" args={(moveset) => [moveset.calcProp(moveset.Cancel(moveset.sRR,'Step'),moveset.StepCWA)]} />

### sWR>StepC WA
You can cancel out of [Stay Arts Waving Rigel](/moveset/photon-arts#swr) with a Step Dodge input super early meaning this has ridiculous <Tooltip term="DPS" /> if you can make use of the small time window.

:::tip
You can cancel out of the <Tooltip term="PA" /> safely at 0.18 seconds.
:::

<VideoPlayer src="/PA/sWR-StepCWA.webm" />

<MovesetTable tableId="sWR-StepCWA" args={(moveset) => [moveset.calcProp(moveset.Cancel(moveset.sWR,'Step'),moveset.StepCWA)]} />