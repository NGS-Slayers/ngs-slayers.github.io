---
title: "Counters"
description: "Explaining Counters"
---

With [Blade Counter](/skill-tree/skills#blade-counter), the counter you perform depends on your input after a successful guard:
* Using the Weapon Action input triggers a long counter attack.
* Using the Normal Attack input triggers a short counter attack.

The same input-based options apply to Step Counters, but they produce entirely different results.

:::tip
* The same goes for [Mobile Blade Counter](/skill-tree/skills#mobile-blade-counter) if you successfully evaded an attack with it.
* After successfully countering an enemy attack you will be granted invincibility frames for the entire duration of the counter animation.
:::

## BC NA
Blade Counter Normal Attack is useful for when there is multiple separate attacks incoming from an enemy and [Step Counter Weapon Action](/moveset/counters#stepc-wa) would put you out of position or is unable to reach the enemy. This counter attack can also be used for when you are already performing a [Weapon Action Attacks](/moveset/weapon-action#wa123). 

:::tip
* After starting the counter sequence you can move slightly. If no directional input is held, you will slightly move toward your target.
:::

<VideoPlayer src="/vid/BCNA.mp4" />

<MovesetTable tableId="BCNA" args={(moveset) => [moveset.BCNA,'BCNA', moveset.calcProp(moveset.WA1,moveset.BCNA),'WA1>BCNA', moveset.calcProp(moveset.WA2,moveset.BCNA),'WA2>BCNA', moveset.calcProp(moveset.WA3,moveset.BCNA),'WA3>BCNA']} />

## BC WA
Blade Counter Weapon Action has the highest total potency out of all of your Counter Attacks and makes this your go to option for when the enemy is not attacking in quick succession.

:::tip
* After starting the counter sequence you can move slightly.
:::

<VideoPlayer src="/vid/BCWA.mp4" />

<MovesetTable tableId="BCWA" args={(moveset) => [moveset.BCWA,'BCWA', moveset.calcProp(moveset.WA1,moveset.BCWA),'WA1>BCWA', moveset.calcProp(moveset.WA2,moveset.BCWA),'WA2>BCWA', moveset.calcProp(moveset.WA3,moveset.BCWA),'WA3>BCWA']} />

## mBC NA
Mobile Blade Counter Normal Attack is used for when you need a quick ranged counter and need to move into an incoming attack hitbox for it.

:::tip
* After starting the counter sequence you can move slightly. If no directional input is held, you will slightly move toward your target. 
* Avoid using this counter when not needed. as it does not benefit from [Blade Counter Critical Up](/skill-tree/skills#blade-counter-critical-up)
:::

<VideoPlayer src="/vid/mBCNA.mp4" />

<MovesetTable tableId="mBCNA" args={(moveset) => [moveset.calcProp(moveset.mBCNA,moveset.mWA)]} />

## mBC WA
Mobile Blade Counter Weapon Action is your go to option for when you have to move into an incoming attack hitbox, you are unable to catch it a Step Counter and the enemy isn't attacking in quick succession.

:::tip
* After starting the counter sequence you can move slightly.
* Avoid using this counter when not needed. as it does not benefit from [Blade Counter Critical Up](/skill-tree/skills#blade-counter-critical-up)
:::

<VideoPlayer src="/vid/mBCWA.mp4" />

<MovesetTable tableId="mBCWA" args={(moveset) => [moveset.calcProp(moveset.mBCWA,moveset.mWA)]} />

## StepC NA
Step Counter Normal Attack is the fastest counter the Gunblade has to offer. It is used for very quick double counters.

:::tip
* Try avoiding this counter when not needed since it has the lowest potency out of all of your options
:::

<VideoPlayer src="/vid/StepCNA.mp4" />

<MovesetTable tableId="StepCNA" args={(moveset) => [moveset.StepCNA]} />

## StepC WA
Step Counter Weapon Action is an amazing tool to build Focus and Rage, it serves as a gap closer, has the highest DPS when [chained in a lingering hitbox](/moveset/animation-canceling#stepc-wachain), and has great potency for a the time it takes to execute.

<VideoPlayer src="/vid/StepCWA.mp4" />

<MovesetTable tableId="StepCWA" args={(moveset) => [moveset.StepCWA]} />