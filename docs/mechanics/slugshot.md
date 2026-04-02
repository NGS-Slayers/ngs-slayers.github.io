---
title: "Slugshot"
description: "Explaining the Slugshot skill"
---

# <img src="/img/38px-NGSUISkillSlugShot.png" alt="icon" className="heading-icon"/>Slugshot

With the Patch from 04/01/2026 [Slug Shot](/moveset/slug-shot) is now a core skill of Slayers since the first time used during [Gunblade Focus Extra Drive](/skill-tree/skills#gunblade-focus-extra-drive) turns it into a massive burst damage skill.

Make sure to only use the Super version during [Gunblade Focus Extra Drive](/skill-tree/skills#gunblade-focus-extra-drive) because within the duration of this active skill the damage of [Relentless Blade](/moveset/relentless-blade) is boosted which [Slug Shot](/moveset/slug-shot) is unable to make use of.

Outside of the [Shifting Spica Customization 1](/moveset/tech-arts-customization/shifting-spica) it is still not optimal to use since we are able to deal damage with our [Weapon Action](/moveset/weapon-action#wa123) which is capable of canceling the endlag of a majority of PAs. Check out the relevant [Animation Cancels](/moveset/animation-canceling) here.

This is a fundamental issue because the game handles [Slug Shot](/moveset/slug-shot) like a PA which makes it unable to cancel another PA unlike the [Weapon Action](/moveset/weapon-action#wa123) which then leads to the following drawbacks:

* lower DPS than using [Weapon Action Stage 1 to 3](/moveset/weapon-action#wa123) after a PA
* lower DPS than using another PA like [Stay Arts Shifting Spica](/moveset/photon-arts#sss) or [Stay Arts Waving Rigel](/moveset/photon-arts#swr) instead
* does not build Rage which makes using a PA instead more appealing
* only restores 2 more PP than [Weapon Action Stage 1 to 3](/moveset/weapon-action#wa123)
* only has 3 more range than [Weapon Action Stage 1 to 3](/moveset/weapon-action#wa123)

I made a table comparing a few different scenarios with [Stay Arts Flowing Sirius Stage 1 and 2](/moveset/photon-arts#sfs12) which has a Weapon Action cancel time of 0.25 seconds and [Stay Arts Shifting Spica](/moveset/photon-arts#sss) which has a Weapon Action cancel time of 0.1 seconds.

<MovesetTable tableId="SlugShotComparison" args={(moveset) => [moveset.calcProp(moveset.sFS12,moveset.SlugShot),'sFS12>Slug Shot', moveset.calcProp(moveset.Cancel(moveset.sFS12,'WA'),moveset.WA1,moveset.WA2,moveset.WA3),'sFS12>WA123', moveset.calcProp(moveset.sSS,moveset.SlugShot),'sSS>Slug Shot', moveset.calcProp(moveset.Cancel(moveset.sSS,'WA'),moveset.WA1,moveset.WA2,moveset.WA3),'sFS12>WA123',]} />

This table already makes [Slug Shot](/moveset/slug-shot) look bad in terms of damage but it actually does not even account for the fact that Weapon Action Stage 3 can be used to counter.
So let us look at a counter scenario.

<MovesetTable tableId="SlugShotComparison2" args={(moveset) => [moveset.calcProp(moveset.sFS12,moveset.SlugShot,moveset.WA1,moveset.BCWA),'sFS12>Slug Shot>BCWA', moveset.calcProp(moveset.Cancel(moveset.sFS12,'WA'),moveset.WA1,moveset.WA2,moveset.WA3,moveset.BCWA),'sFS12>WA123>BCWA']} />