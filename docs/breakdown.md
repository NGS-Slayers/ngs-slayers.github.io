---
title: "Mechanics Breakdown"
description: "Explaining difficult mechanics"
---

import Tooltip from '@site/src/components/Tooltip';
import TooltipText from '@site/src/components/TooltipText';

Breaking down mechanics of the Slayer class for a better understanding.

## <img src="/skill/38px-NGSUISkillGunbladeFocusQuickRecharge.png" alt="icon" className="heading-icon"/>Gunblade Focus Quick Recharge
With the Patch from 06/07/2023 came a new Slayer Class skill which might sound good at first but looking further into it might not be worth your skill point.

* The skill amplifies our [Gunblade Focus](/skill-tree/skills#gunblade-focus) generation by 120% after using the finisher from [Gunblade Focus Overdrive](/moveset/active-skills#gunblade-focus-overdrive) for a duration of 20 seconds.

* This effect does stack with [Gunblade Focus Gauge Amplifier](/skill-tree/skills#gunblade-focus-gauge-amplifier)

Before we get into the pros and cons of the skill let us create a scenario in which we can compare the buildup with and without the skill.

500 Focus is needed to reach [Gunblade Focus](/skill-tree/skills#gunblade-focus) Level 5 and while attacking boss enemies our [Gunblade Focus](/skill-tree/skills#gunblade-focus) generation is 5 times the original [Gunblade Focus](/skill-tree/skills#gunblade-focus) value of our attacks.

In this example I will just chain a bunch of [Stay Arts Flowing Sirius Stage 1 to 2](/moveset/photon-arts#sfs12) together until we reach [Gunblade Focus](/skill-tree/skills#gunblade-focus) Level 5.

Time to do the math without using the skill first. I will round the amount of times required to use the skill to approach an in game scenario.

Without using the skill it takes us around 7 of these or 21.7 seconds.
$$
14.2*5 = 71

500/71 = 7.04225352113

7/3.10 = 21.7
$$

With using the skill it would take us around 6 of these or 18.6 seconds.
$$
(14.2*5)1.2 = 85.2

500/85.2 = 5.86854460094

6*3.10 = 18.6
$$

The above example is a 14% difference since we are not able to make use of the 20 second buff duration in a scenario in which the enemy does not move.

* The skill is not active at the start of a fight.
* The skill does not help us when we lose [Gunblade Focus](/skill-tree/skills#gunblade-focus) to any other means than using [Gunblade Focus Overdrive Finisher](/moveset/active-skills#gunblade-focus-overdrive).
* Buff duration has to be fully utilized, every second of not making use of the skills buff duration decreases the impact it has.
* Killing an enemy with [Gunblade Focus Overdrive Finisher](/moveset/active-skills#gunblade-focus-overdrive) will also cause us to lose some buff duration since in most cases there will be a small delay until we fight the next enemy.
* We usually build and want to build [Gunblade Focus](/skill-tree/skills#gunblade-focus) when an enemy is able to move so using [Counters](/moveset/counters) will shrink the difference in time even more.
* The skill does not help if you happen to use your [Photon Blast](/moveset/photon-blast) right after using [Gunblade Focus Overdrive Finisher](/moveset/active-skills#gunblade-focus-overdrive).

## <img src="/skill/38px-NGSUISkillGunbladeFocusGaugeAmplifier.png" alt="icon" className="heading-icon"/>Gunblade Focus Gauge Amplifier
The reason why we do not put more than one point into that skill is because it can cause diminishing returns.

For example if you use a [Supercharged Normal Attack](/moveset/normal-attack#scna) into a [Step Counter Weapon Action](/moveset/counters#stepc-wa) you will generate less [Gunblade Focus](/skill-tree/skills#gunblade-focus) with the skill at Level 5 than at Level 1.

Using the skill at Level 1 will generate 232.5 [Gunblade Focus](/skill-tree/skills#gunblade-focus).
$
(65*1.5)+(90*1.5) = 232.5
$

Using the skill at Level 5 will generate 220 [Gunblade Focus](/skill-tree/skills#gunblade-focus).
$
(65*2)+90 = 220
$

The above example was taken from [ものさし](https://x.com/flowerint1034/status/1647830827160731654).

## <img src="/skill/38px-NGSUISkillSlugShot.png" alt="icon" className="heading-icon"/>Slugshot
The skill would not be bad by itself, however since we are able to deal damage with our [Weapon Action](/moveset/weapon-action#wa123), the skill is in a rather sorry state.

This is a fundamental issue because the game handles the [Slug Shot](/moveset/slug-shot) like a <Tooltip term="PA" /> which makes it unable to cancel an already ongoing <Tooltip term="PA" /> unlike the [Weapon Action](/moveset/weapon-action#wa123) which then leads to the following drawbacks:

* lower <Tooltip term="DPS" /> than using [<Tooltip term="WA123" />](/moveset/weapon-action#wa123) after a <Tooltip term="PA" />
* lower <Tooltip term="DPS" /> than using another <Tooltip term="PA" /> like [<Tooltip term="sSS" />](/moveset/photon-arts#sss) or [<Tooltip term="sWR" />](/moveset/photon-arts#swr) instead 
* does not build Rage which makes using a <Tooltip term="PA" /> instead more appealing
* only restores 2 more <Tooltip term="PP" /> than [<Tooltip term="WA123" />](/moveset/weapon-action#wa123)
* only has 3 more range than [<Tooltip term="WA123" />](/moveset/weapon-action#wa123)

I made a table comparing a few different scenarios with [sFS12](/moveset/photon-arts#sfs12) which has a Weapon Action cancel time of 0.25 seconds and [sSS](/moveset/photon-arts#sss) which has a Weapon Action cancel time of 0.1 seconds.

<MovesetTable tableId="SlugShotComparison" args={(moveset) => [moveset.calcProp(moveset.sFS12,moveset.SlugShot),'sFS12>Slug Shot', moveset.calcProp(moveset.Cancel(moveset.sFS12,'WA'),moveset.WA1,moveset.WA2,moveset.WA3),'sFS12>WA123', moveset.calcProp(moveset.sSS,moveset.SlugShot),'sSS>Slug Shot', moveset.calcProp(moveset.Cancel(moveset.sSS,'WA'),moveset.WA1,moveset.WA2,moveset.WA3),'sFS12>WA123',]} />

This table already makes [Slug Shot](/moveset/slug-shot) look bad in terms of damage but it actually does not even account for the fact that the <Tooltip term="WA3" /> can be used to counter.
So let us look at a counter scenario.

<MovesetTable tableId="SlugShotComparison2" args={(moveset) => [moveset.calcProp(moveset.sFS12,moveset.SlugShot,moveset.WA1,moveset.BCWA),'sFS12>Slug Shot>BCWA', moveset.calcProp(moveset.Cancel(moveset.sFS12,'WA'),moveset.WA1,moveset.WA2,moveset.WA3,moveset.BCWA),'sFS12>WA123>BCWA']} />