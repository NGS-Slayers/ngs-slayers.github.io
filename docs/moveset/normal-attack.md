---
title: "Normal Attack"
description: "Explaining Normal Attacks"
---

# <img src="/img/38px-NGSUINormalAttackGunblade.png" alt="icon" className="heading-icon"/>Normal Attack
Gunblade has three different variations of Normal Attacks.

:::tip
* [Short Range Hot Shot](/skill-tree/skills#short-range-hot-shot) increases the Potency of all Normal Attacks.
:::

## NA123
Tap Normal Attack to fire a single shot forward. Re-tap up to two more times to chain a total of three shots. Each successive stage is stronger than the previous.

<VideoPlayer src="/vid/NA123.mp4" />

<MovesetTable tableId="NA123" args={(m) => [m.calcProp(m.NA1,m.NA2,m.NA3),'NA123', m.calcProp(m.SRHS(m.NA1),m.SRHS(m.NA2),m.SRHS(m.NA3)),'NA123(SRHS)']} />

## cNA
Holding the Normal Attack button performs a Charged Normal Attack. The first charged stage unleashes several shots in rapid succession.

<VideoPlayer src="/vid/cNA.mp4" />

<MovesetTable tableId="cNA" args={(m) => [m.cNA,'cNA', m.SRHS(m.cNA),'cNA(SRHS)']} />

## scNA
Charging the Normal Attack up to the second charged stage releases a powerful AoE blast attack.

:::tip
* After releasing this charged attack you will receive super armor and frontal guard for the duration of 0.5 seconds.
:::

<VideoPlayer src="/vid/scNA.mp4" />

<MovesetTable tableId="scNA" args={(m) => [m.scNA,'scNA', m.SRHS(m.scNA),'scNA(SRHS)']} />

## <img src="/img/38px-NGSUISkillChargedBlade.png" alt="icon" className="heading-icon"/>Charged Blade
After releasing a charged Normal Attack using the Weapon Action button at the right moment will quickly thrust you toward the enemy.

:::tip
* During this thrust you will be granted super armor and an omnidirectional guard for 0.4 seconds.
* Because Charged Blade counts as a [Weapon Action](/moveset/weapon-action#wa123), you can perform a [Blade Counter](/skill-tree/skills#blade-counter) when guarding an attack with it.
:::

<VideoPlayer src="/vid/ChargedBlade.mp4" />

<MovesetTable tableId="ChargedBlade" args={(m) => [m.ChargedBlade,'Charged Blade', m.calcProp(m.ChargedBlade,m.cNA),'cNA>Charged Blade', m.calcProp(m.ChargedBlade,m.scNA),'scNA>Charged Blade']} />