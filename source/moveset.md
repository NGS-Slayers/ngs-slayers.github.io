```{raw} html
<noscript><div style="padding-top: 1.9em; position: fixed;top: 0;left: 0;width: 100%;z-index: 101;text-align: center;font-weight: bold;color: #FFF;background-color: #AE0000;padding: 5px 0 5px 0;"><p>
  Please activate JavaScript, this page does not work properly without it enabled.
</p></div></noscript>
```

# Moveset
Slayer has many attacks available for use in combat. This page aims to showcase and explain their usecases. To make the following tables easier to read we will use some abbreviations, you can hover over them to if you don't know what they mean.

```{important}
* Potency values and {term}`DPS` values are rounded in calculations.

* Class specific Critical Hit Rate multipliers are included.

* {term}`DPS` values of {term}`PA`s include [RB](./skill-tree.md#relentless-blade) and [RBR](./skill-tree.md#relentless-blade-reinforce).

* Rage Multiplier against Bosses is 3

* Focus Multiplier against Bosses is 5
```

More accurate and up-to-date information can be found in [Frame Data](#frame-data).

## ![icon](_static/skill/38px-NGSUISkillRelentlessBlade.png) Relentless Blade
During a {term}`PA`, a purple glow will appear on your character.
If you use a [Normal Attack](#normal-attack) while the glow is visible, you will do an additional [hitscan](https://en.wikipedia.org/wiki/Hitscan) attack that can build Rage and recover some {term}`PA`.
```{hint}
The skill [RBR](./skill-tree.md#relentless-blade-reinforce) will increase the potency of this attack.
```

Purple Glow during a {term}`PA`

![image](_static/skill/rb.png)

When successfully executing [RB](./skill-tree.md#relentless-blade) another visual indicator will appear.

![image](_static/skill/rb-success.png)

```{csv-table}
---
header: >
  "Variant", "Potency", "{term}`PP` Gain", "Focus", "Rage"
widths: 5, 5, 5, 5, 5
align: center
---
"Weak [RB](./skill-tree.md#relentless-blade) with [RBR](./skill-tree.md#relentless-blade-reinforce)", "25", "3", "0.5", "0.5"
"Weak [RB](./skill-tree.md#relentless-blade) without [RBR](./skill-tree.md#relentless-blade-reinforce)", "5", "3", "0.5", "0.5"
"Strong [RB](./skill-tree.md#relentless-blade) with [RBR](./skill-tree.md#relentless-blade-reinforce)", "75", "3", "2.5", "3.5"
"Strong [RB](./skill-tree.md#relentless-blade) without [RBR](./skill-tree.md#relentless-blade-reinforce)", "15", "3", "2.5", "3.5"
```

```{hint}
Strong [RB](./skill-tree.md#relentless-blade) only applies to [sFS2](#sfs12).
```

### Making [Relentless Blade](./skill-tree.md#relentless-blade) Easier
Some may find the window of [Relentless Blade](./skill-tree.md#relentless-blade) difficult. To make things easier, you may change the location of your [Normal Attack](#normal-attack) button. There is a priority system for inputs. The priorities are as follows:

![image](_static/skill/palette-priority.png)

Binding the [Normal Attack](#normal-attack) button to a slot with lower priority allows you to hold down both a {term}`PA` and a [Normal Attack](#normal-attack) to automatically activate [Relentless Blade](./skill-tree.md#relentless-blade) without canceling into [Slug Shot](./skill-tree.md#slug-shot).

## Photon Arts
Slayer {term}`PA`s change depending on if a directional input was pressed upon activation of the {term}`PA`.

If you are familiar with the Fighter Class, you might notice a similarity with Fighter Skip Arts.

```{tip}
Cancelling a {term}`PA` with a Step Dodge- is more generous than cancelling with a Weapon Action input, so if you find yourself stuck in some {term}`PA`s consider using a Step [Counter](#counters) instead.
```

### ![icon](_static/PA/38px-NGSUIPhotonArtShiftingSpica.png) Shifitng Spica
(sSS)=
#### {term}`sSS`
Stay Arts Shifting Spica will perform a forward slash and fire a Photon Bullet in quick succession.
```{hint}
This {term}`PA` will grant you super armor throughout the entire duration.
```

```{raw} html
<div class="wrapper" style="--aspect-ratio:160/90"> <video class="lozad" autoplay muted loop playsinline>
  <source data-src="_static/PA/sSS.webm" type="video/webm">
</video></div>
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "{term}`F0` {term}`DPS`", "{term}`F5` {term}`DPS`", "{term}`OD` {term}`DPS`", "{term}`PP` Cost", "Focus", "Rage"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"190+25", "0.60", "358", "399", "418", "14", "2.6", "0.2"
```

(mSS)=
#### {term}`mSS`
Move Arts Shifting Spica will approach the enemy at high speed with a thrust attack then shoot at close range.
```{hint}
This {term}`PA` will grant you super armor throughout the entire duration.
```

```{raw} html
<div class="wrapper" style="--aspect-ratio:160/90"><video class="lozad" autoplay muted loop playsinline>
  <source data-src="_static/PA/mSS.webm" type="video/webm">
</video></div>
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "{term}`F0` {term}`DPS`", "{term}`F5` {term}`DPS`", "{term}`OD` {term}`DPS`", "{term}`PP` Cost", "Focus", "Rage"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"371+25", "1.14", "348", "388", "406", "14", "5", "1.5"
```

### ![icon](_static/PA/38px-NGSUIPhotonArtFlowingSirius.png) Flowing Sirius
(sFS1)=
#### {term}`sFS1`
Stay Arts Flowing Sirius will perform a series of slashes. When activated in succession, it turns into a powerful attack.

```{raw} html
<div class="wrapper" style="--aspect-ratio:160/90"><video class="lozad" autoplay muted loop playsinline>
  <source data-src="_static/PA/sFS1.webm" type="video/webm">
</video></div>
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "{term}`F0` {term}`DPS`", "{term}`F5` {term}`DPS`", "{term}`OD` {term}`DPS`", "{term}`PP` Cost", "Focus", "Rage"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"400+25", "1.25", "340", "378", "396", "25", "5.1", "1.5"
```

(sFS12)=
#### {term}`sFS12`
Stay Arts Flowing Sirius will perform a series of slashes. When activated in succession, it turns into a powerful attack.
```{hint}
Stage 2 of this {term}`PA` has an increased potency on [RB](./skill-tree.md#relentless-blade) and will grant you super armor.
```

```{raw} html
<div class="wrapper" style="--aspect-ratio:160/90"><video class="lozad" autoplay muted loop playsinline>
  <source data-src="_static/PA/sFS12.webm" type="video/webm">
</video></div>
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "{term}`F0` {term}`DPS`", "{term}`F5` {term}`DPS`", "{term}`OD` {term}`DPS`", "{term}`PP` Cost", "Focus", "Rage"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"1080+25+75", "3.10", "381", "424", "444", "50", "14.2", "7.5"
```

(mFS)=
#### {term}`mFS`
Move Arts Flowing Sirius will perform an attack that sweeps the surrounding area while moving.
```{hint}
This {term}`PA` will grant you super armor until before performing the last slash of the attack.
```

```{raw} html
<div class="wrapper" style="--aspect-ratio:160/90"><video class="lozad" autoplay muted loop playsinline>
  <source data-src="_static/PA/mFS.webm" type="video/webm">
</video></div>
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "{term}`F0` {term}`DPS`", "{term}`F5` {term}`DPS`", "{term}`OD` {term}`DPS`", "{term}`PP` Cost", "Focus", "Rage"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"302+25", "0.93", "354", "394", "413", "25", "4.6", "1.5"
```

### ![icon](_static/PA/38px-NGSUIPhotonArtReapingRegulus.png) Reaping Regulus
(sRR)=
#### {term}`sRR`
Stay Arts Reaping Regulus will throw a photon bomb while retreating back as the photon bomb explodes.
```{hint}
This {term}`PA` will grant you invincibility frames and super armor for 0.35 seconds after using.
```

```{raw} html
<div class="wrapper" style="--aspect-ratio:160/90"><video class="lozad" autoplay muted loop playsinline>
  <source data-src="_static/PA/sRR.webm" type="video/webm">
</video></div>
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "{term}`F0` {term}`DPS`", "{term}`F5` {term}`DPS`", "{term}`OD` {term}`DPS`", "{term}`PP` Cost", "Focus", "Rage"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"210+25", "0.67", "351", "390", "409", "17", "4", "4"
```

```{raw} html
<div class="wrapper" style="--aspect-ratio:160/90"><video class="lozad" autoplay muted loop playsinline>
  <source data-src="_static/PA/mRR.webm" type="video/webm">
</video></div>
```

(mRR)=
#### {term}`mRR`
Move Arts Reaping Regulus will kick the bomb in a curved manner that explodes a certain distance away.
```{hint}
This {term}`PA` will grant you invincibility frames for 0.2 seconds after using.
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "{term}`F0` {term}`DPS`", "{term}`F5` {term}`DPS`", "{term}`OD` {term}`DPS`", "{term}`PP` Cost", "Focus", "Rage"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"273+25", "0.87", "343", "381", "399", "17", "4", "1.5"
```

### ![icon](_static/PA/38px-NGSUIPhotonArtWavingRigel.png) Waving Rigel
(sWR)=
#### {term}`sWR`
Stay Arts Waving Reigel will thrust the weapon into the ground and release a shockwave around you. When performed in the air, you'll fall at high speed and attack upon landing.

```{hint}
This attack may also be used to pull small mobs towards you.

This {term}`PA` will grant you super armor and a frontal guard for 0.25 seconds after using.
```

```{raw} html
<div class="wrapper" style="--aspect-ratio:160/90"><video class="lozad" autoplay muted loop playsinline>
  <source data-src="_static/PA/sWR.webm" type="video/webm">
</video></div>
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "{term}`F0` {term}`DPS`", "{term}`F5` {term}`DPS`", "{term}`OD` {term}`DPS`", "{term}`PP` Cost", "Focus", "Rage"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"130+25", "0.44", "356", "397", "415", "18", "1.5", "0.4"
```

(mWR)=
#### {term}`mWR`
Move Arts Waving Riegel will slash the surrounding area while ascending your character.
```{hint}
This {term}`PA` will grant you super armor throughout the entire animation.
```

```{raw} html
<div class="wrapper" style="--aspect-ratio:160/90"><video class="lozad" autoplay muted loop playsinline>
  <source data-src="_static/PA/mWR.webm" type="video/webm">
</video></div>
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "{term}`F0` {term}`DPS`", "{term}`F5` {term}`DPS`", "{term}`OD` {term}`DPS`", "{term}`PP` Cost", "Focus", "Rage"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"332+25", "1.0", "357", "397", "416", "18", "5.1", "4.5"
```

## [Slug Shot](./skill-tree.md#slug-shot)
Slug Shot changes the first [Normal Attack](#normal-attack) with no directional input slightly after using a {term}`PA`.
```{hint}
This attack is a close range attack that grants you super armor and frontal guard for 0.35 seconds.
This skill will also make it unable to peform a [Charged Normal Attack](#cna) right after using a PA.
```

The following example shows [Stay Arts Shifitng Spica](#sSS) into Slug Shot

```{raw} html
<div class="wrapper" style="--aspect-ratio:160/90"><video class="lozad" autoplay muted loop playsinline>
  <source data-src="_static/PA/SlugShot.webm" type="video/webm">
</video></div>
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "{term}`F0` {term}`DPS`", "{term}`F5` {term}`DPS`", "{term}`OD` {term}`DPS`", "{term}`PP` Gain", "Focus"
widths: 5, 5, 5, 5, 5, 5, 5
align: center
---
"170", "0.51", "333", "371", "389", "10", "2.5"
```

## ![icon](_static/PA/38px-NGSUINormalAttackGunblade.png) Normal Attack
Gunblade has three different variations of Normal Attacks.
```{hint}
The skill [Short Range Hot Shot](./skill-tree.md#short-range-hot-shot) increases the potency of the Normal Attacks by 30%.
```

(na123)=
### {term}`NA123`
Tapping the Normal Attack button fires a single shot ahead. Repeatedly tapping the button will fire up to 3 shots in succession with increasing {term}`DPS` for every Stage.

```{raw} html
<div class="wrapper" style="--aspect-ratio:160/90"><video class="lozad" autoplay muted loop playsinline>
  <source data-src="_static/PA/NA123.webm" type="video/webm">
</video></div>
```

```{csv-table}
---
header: >
  "Variation", "Potency", "Time (s)", "{term}`F0` {term}`DPS`", "{term}`F5` {term}`DPS`", "{term}`OD` {term}`DPS`", "{term}`PP` Gain", "Focus"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"w/ Short Range Hot Shot", "250", "1.20", "271", "301", "316", "19", "6"
"w/o Short Range Hot Shot", "175", "1.20", "208", "232", "243", "19", "6"
```

(cna)=
### {term}`cNA`
Charging a [Normal Attack](#normal-attack), by holding down the button, initates a Charged Normal Attack. The first charged stage causes it to release several shots in quick succession.

```{raw} html
<div class="wrapper" style="--aspect-ratio:160/90"><video class="lozad" autoplay muted loop playsinline>
  <source data-src="_static/PA/cNA.webm" type="video/webm">
</video></div>
```

```{csv-table}
---
header: >
  "Variant", "Potency", "Time (s)", "{term}`F0` {term}`DPS`", "{term}`F5` {term}`DPS`", "{term}`OD` {term}`DPS`", "{term}`PP` Gain", "Focus"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"w/ Short Range Hot Shot", "305", "1.45", "273", "304", "319", "21", "5.2"
"w/o Short Range Hot Shot", "175", "1.45", "210", "234", "245", "21", "5.2"
```

(scna)=
### {term}`scNA`
Charging the Normal Attack up to the second charged stage releases a powerful {term}`AoE` blast.
```{hint}
After releasing this charged attack you will receive super armor and frontal guard for the duration of 0.5 seconds.
```

```{raw} html
<div class="wrapper" style="--aspect-ratio:160/90"><video class="lozad" autoplay muted loop playsinline>
  <source data-src="_static/PA/scNA.webm" type="video/webm">
</video></div>
```

```{csv-table}
---
header: >
  "Variation", "Potency", "Time (s)", "{term}`F0` {term}`DPS`", "{term}`F5` {term}`DPS`", "{term}`OD` {term}`DPS`", "{term}`PP` Gain", "Focus"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"w/ Short Range Hot Shot", "550", "2.60", "275", "306", "321", "20", "13"
"w/o Short Range Hot Shot", "385", "2.60", "212", "235", "247", "20", "13"
```

### ![icon](_static/skill/38px-NGSUISkillChargedBlade.png) [Charged Blade](./skill-tree.md#charged-blade)
Gunblade has several gap closers, one of which is the skill [Charged Blade](./skill-tree.md#charged-blade). After releasing a [charged Normal Attack](#cna), using the Weapon Action at a certain time will quickly thrust you closer to the enemy.
```{hint}
During this thrust you will be granted super armor and an omnidirectional guard for 0.4 seconds.

[Charged Blade](./skill-tree.md#charged-blade) is treated as using the Weapon Action, so after learning the skill [Blade Counter](./skill-tree.md#blade-counter) you will be able to perform a Counter with it.
```

```{important} This does not include the potency of the Weapon Action itself!
```

```{raw} html
<div class="wrapper" style="--aspect-ratio:160/90"><video class="lozad" autoplay muted loop playsinline>
  <source data-src="_static/PA/ChargedBlade.webm" type="video/webm">
</video></div>
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "{term}`F0` {term}`DPS`", "{term}`F5` {term}`DPS`", "{term}`OD` {term}`DPS`", "{term}`PP` Gain", "Focus"
widths: 5, 5, 5, 5, 5, 5, 5
align: center
---
"220", "0.50", "440", "490", "513", "7", "4"
```

## ![icon](_static/PA/38px-NGSUIWeaponActionGunblade.png) Weapon Action
(wa123)=
### {term}`WA123`
The Weapon Action enables you to guard against an enemy attack with a slash.

```{hint}
After every slash you will be granted super armor and an omnidirectional guard for a short period of time depending on the stage.

For Weapon Action Stage 1 the above mentioned defensive effects will last 0.3 seconds, for Weapon Action Stage 2 0.2 seconds and for Weapon Action Stage 3 0.4 seconds.
```

```{raw} html
<div class="wrapper" style="--aspect-ratio:160/90"><video class="lozad" autoplay muted loop playsinline>
  <source data-src="_static/PA/WA123.webm" type="video/webm">
</video></div>
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "{term}`F0` {term}`DPS`", "{term}`F5` {term}`DPS`", "{term}`OD` {term}`DPS`", "{term}`PP` Gain", "Focus"
widths: 5, 5, 5, 5, 5, 5, 5
align: center
---
"330", "1.03", "319", "355", "372", "8", "6"
```

(mWA)=
### {term}`mWA`
If the skill [Mobile Blade](./skill-tree.md#mobile-blade) was learned you can use the directional input to perform a slash while evading attacks.
```{hint}
During the slash you will be granted invincibility frames for 0.35 seconds.
```

```{raw} html
<div class="wrapper" style="--aspect-ratio:160/90"><video class="lozad" autoplay muted loop playsinline>
  <source data-src="_static/PA/mWA.webm" type="video/webm">
</video></div>
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "{term}`F0` {term}`DPS`", "{term}`F5` {term}`DPS`", "{term}`OD` {term}`DPS`", "{term}`PP` Gain", "Focus"
widths: 5, 5, 5, 5, 5, 5, 5
align: center
---
"70", "0.47", "150", "167", "175", "3", "2.5"
```

## Counters
With the skill [Blade Counter](./skill-tree.md#blade-counter), you can perform a different counter attack based on the button used. After successfully guarding against an attack, you can use the Weapon Action to perform a long counter attack. When using a Normal Attack input instead, a short counter attack occurs.
These options are also available for your Step Counters but result in different counter attacks.

```{hint}
The same goes for [Mobile Blade Counter](./skill-tree.md#mobile-blade-counter) if you successfully evaded an attack while using a directional input.

After successfully countering an enemy attack you will be granted invincibility frames for the entire duration of the counter animation.
```

(bc-na)=
### [BC](./skill-tree.md#blade-counter) {term}`NA`
Blade Counter Normal Attack is useful for when there is multiple seperate attacks incoming from an enemy and [StepC WA](#stepc-wa) would put you out of position or is unable to reach the enemy. This counter attack can also be used for when you are already performing a [WA123](#wa123). You will be moved slightly forward after starting the counter sequence.
```{important}
This does not include the potency of the Weapon Action itself!
```

```{raw} html
<div class="wrapper" style="--aspect-ratio:160/90"><video class="lozad" autoplay muted loop playsinline>
  <source data-src="_static/PA/BCNA.webm" type="video/webm">
</video></div>
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "{term}`F0` {term}`DPS`", "{term}`F5` {term}`DPS`", "{term}`OD` {term}`DPS`", "{term}`PP` Gain", "Focus"
widths: 5, 5, 5, 5, 5, 5, 5
align: center
---
"400", "0.77", "520", "578", "606", "13", "4"
```

(bc-wa)=
### [BC](./skill-tree.md#blade-counter) {term}`WA`
[Blade Counter](./skill-tree.md#blade-counter) Weapon Action has the highest total potency out of all of your [counters](#counters) and makes this your go to option for when the enemy isn't attacking in quick succesion. You will be able to move slightly after starting the counter sequence.
```{important}
This does not include the potency of the Weapon Action itself!
```

```{raw} html
<div class="wrapper" style="--aspect-ratio:160/90"><video class="lozad" autoplay muted loop playsinline>
  <source data-src="_static/PA/BCWA.webm" type="video/webm">
</video></div>
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "{term}`F0` {term}`DPS`", "{term}`F5` {term}`DPS`", "{term}`OD` {term}`DPS`", "{term}`PP` Gain", "Focus"
widths: 5, 5, 5, 5, 5, 5, 5
align: center
---
"960", "2.17", "442", "429", "516", "6", "9"
```

(mbc-na)=
### [mBC](./skill-tree.md#mobile-blade-counter) {term}`NA`
[Mobile Blade Counter](./skill-tree.md#mobile-blade-counter) Normal Attack is used for when you need a quick ranged counter and need to move into the incoming attack hitbox for it. You will be moved slightly forward after starting the counter sequence. Try to avoid using this counter attack when it is not neccessary.

```{important}
This does not include the potency of the Weapon Action itself!

This variation of the counter attack does not get the benefit of the skill [Blade Counter Critical Up](./skill-tree.md#blade-counter-critical-up)
```

```{raw} html
<div class="wrapper" style="--aspect-ratio:160/90"><video class="lozad" autoplay muted loop playsinline>
  <source data-src="_static/PA/mBCNA.webm" type="video/webm">
</video></div>
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "{term}`F0` {term}`DPS`", "{term}`F5` {term}`DPS`", "{term}`OD` {term}`DPS`", "{term}`PP` Gain", "Focus"
widths: 5, 5, 5, 5, 5, 5, 5
align: center
---
"420", "0.87", "483", "537", "563", "13", "4"
```

(mbc-wa)=
### [mBC](./skill-tree.md#mobile-blade-counter) {term}`WA`
This counter is your go to option for when you have to move into the incoming attack hitbox. You will be able to move slightly after starting the counter sequence. Try to avoid using this counter attack when it is not neccessary.

```{important}
This does not include the potency of the Weapon Action itself!

This variation of the counter attack does not get the benefit of the skill [Blade Counter Critical Up](./skill-tree.md#blade-counter-critical-up)
```

```{raw} html
<div class="wrapper" style="--aspect-ratio:160/90"><video class="lozad" autoplay muted loop playsinline>
  <source data-src="_static/PA/mBCWA.webm" type="video/webm">
</video></div>
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "{term}`F0` {term}`DPS`", "{term}`F5` {term}`DPS`", "{term}`OD` {term}`DPS`", "{term}`PP` Gain", "Focus"
widths: 5, 5, 5, 5, 5, 5, 5
align: center
---
"960", "2.27", "423", "471", "493", "6", "9"
```

(stepc-na)=
### {term}`StepC` {term}`NA`
Step Counter Normal Attack is the fastest counter the Gunblade has to offer. It is used for very quick double counters. Try to avoid this counter for anything other than the before mentioned purpose.

```{raw} html
<div class="wrapper" style="--aspect-ratio:160/90"><video class="lozad" autoplay muted loop playsinline>
  <source data-src="_static/PA/StepCNA.webm" type="video/webm">
</video></div>
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "{term}`F0` {term}`DPS`", "{term}`F5` {term}`DPS`", "{term}`OD` {term}`DPS`", "{term}`PP` Gain", "Focus"
widths: 5, 5, 5, 5, 5, 5, 5
align: center
---
"380", "0.70", "543", "604", "633", "12", "4"
```

(stepc-wa)=
### {term}`StepC` {term}`WA`
Step Counter Weapon Action is an amazing tool to build Focus and Rage, it serves as a gap closer, has the highest {term}`DPS` when [chained in a lingering hitbox](#stepc-wa---chain), and is your highest potency “short counter”.

```{raw} html
<div class="wrapper" style="--aspect-ratio:160/90"><video class="lozad" autoplay muted loop playsinline>
  <source data-src="_static/PA/StepCWA.webm" type="video/webm">
</video></div>
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "{term}`F0` {term}`DPS`", "{term}`F5` {term}`DPS`", "{term}`OD` {term}`DPS`", "{term}`PP` Gain", "Focus", "Rage"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"550", "1.02", "539", "600", "629", "4", "18", "3"
```

## ![icon](_static/PA/38px-PhotonBlast.png) Photon Blast
A powerful attack that generates a special field around you.

```{hint}
You will be granted invincibility frames during the entire animation of the attack.

This attack will dash you toward an enemy targeted by you, so make sure to target the right enemy.
```

```{raw} html
<div class="wrapper" style="--aspect-ratio:160/90"><video class="lozad" autoplay muted loop playsinline>
  <source data-src="_static/PA/PB.webm" type="video/webm">
</video></div>
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "{term}`F0` {term}`DPS`", "{term}`F5` {term}`DPS`", "{term}`OD` {term}`DPS`", "Focus"
widths: 5, 5, 5, 5, 5, 5
align: center
---
"4450", "5.60", "795", "884", "927", "2530"
```

## Active Skills
### ![icon](_static/skill/38px-NGSUISkillUnleashedRage.png) Unleashed Rage
Approach the enemy to deliver a powerful blow. Not only does this skill greatly help fill the Focus gauge, but through the skill [Unleashed Rage After Effect](./skill-tree.md#unleashed-rage-after-effect), the critical hit rate increases for a short period after using the skill.

[Unleashed Rage](./skill-tree.md#unleashed-rage)´s gauge builds from {term}`PA`s, Relentless Blade and from [StepC WA](#stepc-wa).

```{hint}
[Unleashed Rage](./skill-tree.md#unleashed-rage) requires 100 Rage to be used and will grant you invincibility frames for the entire duration of the skill.
```

```{raw} html
<div class="wrapper" style="--aspect-ratio:160/90"><video class="lozad" autoplay muted loop playsinline>
  <source data-src="_static/PA/UR.webm" type="video/webm">
</video></div>
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "{term}`F0` {term}`DPS`", "{term}`F5` {term}`DPS`", "{term}`OD` {term}`DPS`", "{term}`PP` Gain", "Focus"
widths: 5, 5, 5, 5, 5, 5, 5
align: center
---
"1000", "1.27", "787", "876", "918", "20", "22"
```

### ![icon](_static/skill/38px-NGSUISkillGunbladeFocusOverdrive.png) Gunblade Focus Overdrive
Activating this skill will start a short animation. After the activation, you will be granted buffs for a short time period.
For more information on the buffs check out [Gunblade Focus Overdrive](./skill-tree.md#gunblade-focus-overdrive)

When [Gunblade Focus Reset {term}`PP` Gain](./skill-tree.md#gunblade-focus-reset-pp-gain) was learned, the skill will trigger and recover some {term}`PP`.

Re-activating this skill while it's in effect, unleashes a powerful finishing move that generates a special zone similar to the visuals seen in the [PB](#photon-blast).
You will be granted invincibility frames during the entire animation of the finisher as well.

```{hint}
During both the activation and the finisher animation you will be granted invincibility frames.

The activation takes 1.4 seconds when not inputting another attack and 0.67 seconds if you do.
```

```{raw} html
<div class="wrapper" style="--aspect-ratio:160/90"><video class="lozad" autoplay muted loop playsinline>
  <source data-src="_static/PA/ODF.webm" type="video/webm">
</video></div>
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "{term}`OD` {term}`DPS`"
widths: 5, 5, 5
align: center
---
"2695", "4.20", "642"
```

## Relevant Gunblade Animation Cancels
You can cancel out most Gunblade {term}`PA`s and Actions early with a Step Dodge- or Weapon Action input.

This means you can increase the {term}`DPS` of some {term}`PA`s and Actions while gaining {term}`PP` making Slug Shot way less appealing.

For more information please refer to [Frame Data](#frame-data).

```{warning}
No input delay or human error is assumed here.

When the description of the cancel includes the word “safely”, it means that it is impossible to mistime since the earliest time to cancel is the same as the attack hit timing.
```

### [sFS12](#sfs12) -> [WA123](#wa123)
Great for downs when low on {term}`PP` or not having [Gunblade Focus Over Drive Finisher](#gunblade-focus-overdrive) and [Unleashed Rage](#unleashed-rage) ready.

```{hint}
You can cancel sFS12 safely at 2.85 seconds.
```

```{raw} html
<div class="wrapper" style="--aspect-ratio:160/90"><video class="lozad" autoplay muted loop playsinline>
  <source data-src="_static/PA/sFS12-WA123.webm" type="video/webm">
</video></div>
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "{term}`F0` {term}`DPS`", "{term}`F5` {term}`DPS`", "{term}`OD` {term}`DPS`", "{term}`PP` Cost", "Focus", "Rage"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"1410+25+75", "3.88", "389", "433", "454", "42", "14.2", "4.5"
```

### [StepC WA](#stepc-wa) -> Chain
Repeating Step Counter Weapon Action is stronger than chaining [BC NA](#bc-na)s together, because of [Slayer´s cancel timings](#frame-data).

```{hint}
You can cancel out of the [StepC WA](#stepc-wa) animation with another Step Dodge input safely at 0.82 seconds.
```

```{raw} html
<div class="wrapper" style="--aspect-ratio:160/90"><video class="lozad" autoplay muted loop playsinline>
  <source data-src="_static/PA/StepCWA-chain.webm" type="video/webm">
</video></div>
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "{term}`F0` {term}`DPS`", "{term}`F5` {term}`DPS`", "{term}`OD` {term}`DPS`", "{term}`PP` Gain", "Focus", "Rage"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"550", "0.82", "671", "747", "782", "4", "18", "3"
```

### [StepC WA](#stepc-wa) -> [WA123](#wa123)
Using the Weapon Action after a [Step Couter Weapon Action](#stepc-wa) increases the total potency of the counter by making use of [Slayer´s cancel timings](#frame-data).

```{hint}
You can cancel out of the StepC WA animation with another WA input safely at 0.82 seconds.
```

```{raw} html
<div class="wrapper" style="--aspect-ratio:160/90"><video class="lozad" autoplay muted loop playsinline>
  <source data-src="_static/PA/StepCWA-WA123.webm" type="video/webm">
</video></div>
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "{term}`F0` {term}`DPS`", "{term}`F5` {term}`DPS`", "{term}`OD` {term}`DPS`", "{term}`PP` Gain", "Focus", "Rage"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"880", "1.85", "476", "529", "555", "4", "12", "3"
```

### [BC WA](#bc-wa) -> [WA123](#wa123)
You can cancel your [Blade Counter Weapon Action](#bc-wa) after the sixth hit with another Weapon Action input. This increases the total potency of the counter by cancelling the endlag of our counter attack with [WA123](#wa123).

```{hint}
You can cancel out of the [BC WA](#bc-wa) animation safely at 1.92 seconds.
```

```{important}
This does not include the potency of the Weapon Action itself!
```

```{raw} html
<div class="wrapper" style="--aspect-ratio:160/90"><video class="lozad" autoplay muted loop playsinline>
  <source data-src="_static/PA/BCWA-WA123.webm" type="video/webm">
</video></div>
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "{term}`F0` {term}`DPS`", "{term}`F5` {term}`DPS`", "{term}`OD` {term}`DPS`", "{term}`PP` Gain", "Focus"
widths: 5, 5, 5, 5, 5, 5, 5
align: center
---
"1290", "2.95", "437", "587", "510", "14", "15"
```

(srr-stepc-wa)=
### [sRR](#srr) -> [StepC WA](#stepc-wa) (a.k.a {term}`RBC`)
The combo known as {term}`RBC` is fastest way to build Focus and Rage in a small time window. Because of the Step Dodge input you will be able to cancel the recoil of the {term}`PA`s animation allowing you to chain into a [StepC WA](#stepc-wa).

```{danger}
This is not safe and you can end up canceling the {term}`PA` early so make sure to be careful.

The perfect timinig for the cancel is at 0.42 seconds.
```

```{raw} html
<div class="wrapper" style="--aspect-ratio:160/90"><video class="lozad" autoplay muted loop playsinline>
  <source data-src="_static/PA/sRR-StepCWA.webm" type="video/webm">
</video></div>
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "{term}`F0` {term}`DPS`", "{term}`F5` {term}`DPS`", "{term}`OD` {term}`DPS`", "{term}`PP` Cost", "Focus", "Rage"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"760+25", "1.44", "545", "607", "636", "13", "22", "7"
```

### [mWR](#mwr) -> Step Dodge -> Chain
Cancelling [Move Arts Waving Riegel](#mwr) with a Step Dodge input is another great way of building Rage. Canceling the {term}`PA` into a Step Dodge input will make you lose height that you previously gained. You can cancel out of the {term}`PA` as soon as the last hit occurs. The example shows four {term}`PA`s chained together to make the comparison more obvious.

```{danger}
This is not safe and you can end up canceling the {term}`PA` early so make sure to be careful.

The perfect timinig for the cancel is at 0.75 seconds.
```

```{raw} html
<div class="wrapper" style="--aspect-ratio:160/90"><video class="lozad" autoplay muted loop playsinline>
  <source data-src="_static/PA/mWR-Step-chain.webm" type="video/webm">
</video></div>
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "{term}`F0` {term}`DPS`", "{term}`F5` {term}`DPS`", "{term}`OD` {term}`DPS`", "{term}`PP` Cost", "Focus", "Rage"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"332+25", "1.05", "340", "378", "396", "18", "5.1", "4.5"
```

### [sWR](#swr) -> [StepC WA](#stepc-wa)
You can cancel out of [Stay Arts Waving Riegel](#swr) super early meaning this has ridiculous {term}`DPS` if you can make use of the small time window.

```{hint}
You can cancel out of the {term}`PA` safely at 0.18 seconds.
```

```{raw} html
<div class="wrapper" style="--aspect-ratio:160/90"><video class="lozad" autoplay muted loop playsinline>
  <source data-src="_static/PA/sWR-StepCWA.webm" type="video/webm">
</video></div>
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "{term}`F0` {term}`DPS`", "{term}`F5` {term}`DPS`", "{term}`OD` {term}`DPS`", "{term}`PP` Cost", "Focus", "Rage"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"680+25", "1.2", "588", "654", "685", "14", "19.5", "3.4"
```

## Frame Data
For specific Potency distributions, Physical down and Elemental down, refer to the following frame data spreadsheets:
* [NGS Verification Data Storage](https://docs.google.com/spreadsheets/d/1_OgubzM5QFe4rua4Xu0GSMAI8Idoq8r2yI8Ioyec6oY)
* [PSO2NGS Frame Data](https://docs.google.com/spreadsheets/d/1YEg-6eViChVV7HDDlNlgFPJf3qbyIUeAlLYPr9b99t0)
* [Slayer Cancel Timing Sheet](https://docs.google.com/spreadsheets/d/1761j0Antcs4j1L_GhnNsergUQOsinbQlMW3TDydQEms)

For other resources check out
* [Resources](#resources)

```{raw} html
<meta content="Slayer's Moveset" property="og:title">
<meta content="Slayer has alot of options in their arsenal so hopefully this guide will help you decide which one to use." property="og:description">
<meta content="https://ngs-slayers.github.io/moveset.html" property="og:url">
<meta content="https://ngs-slayers.github.io/_static/class/UINGSClassSl.png" property="og:image">
<meta content="#48AC9C" data-react-helmet="true" name="theme-color">
```