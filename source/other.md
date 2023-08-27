# Other
This Page will mainly focus on breaking down mechanics of the Slayer class for a better understanding.

## ![icon](_static/skill/38px-NGSUISkillGunbladeFocusQuickRecharge.png) [Gunblade Focus Quick Recharge](./skill-tree.md#gunblade-focus-quick-recharge) Break Down
With the Patch from 06/07/2023 came a new Slayer Class skill which might sound good at first but looking further into it might not be worth your skill point.

* The skill amplifies our [Gunblade Focus](./skill-tree.md#gunblade-focus) generation by 120% after using the finisher from [Gunblade Focus Overdrive](./moveset.md#gunblade-focus-overdrive) for a duration of 20 seconds.

* This effect does stack with [Gunblade Focus Gauge Amplifier](./skill-tree.md#gunblade-focus-gauge-amplifier)

Before we get into the pros and cons of the skill let us create a scenario in which we can compare the buildup with and without the skill.

500 Focus is needed to reach [Gunblade Focus](./skill-tree.md#gunblade-focus) Level 5 and while attacking boss enemies our [Gunblade Focus](./skill-tree.md#gunblade-focus) generation is 5 times the original [Gunblade Focus](./skill-tree.md#gunblade-focus) value of our attacks.

In this example I will just chain a bunch of [Stay Arts Flowing Sirius Stage 1 to 2](#sfs12) together until we reach [Gunblade Focus](./skill-tree.md#gunblade-focus) Level 5.

Time to do the math without using the skill first. I will round the amount of times required to use the skill to approach an in game scenario.

Without using the skill it takes us around 7 of these or 21.7 seconds.
```{math}
14.2*5 = 71

500/71 = 7.04225352113

7/3.10 = 21.7
```

With using the skill it would take us around 6 of these or 18.6 seconds.
```{math}
(14.2*5)1.2 = 85.2

500/85.2 = 5.86854460094

6*3.10 = 18.6
```

The above example is a 14% difference since we are not able to make use of the 20 second buff duration in a scenario in which the enemy does not move.

* The skill is not active at the start of a fight.
* The skill does not help us when we lose [Gunblade Focus](./skill-tree.md#gunblade-focus) to any other means than using [Gunblade Focus Overdrive Finisher](./moveset.md#gunblade-focus-overdrive).
* Buff duration has to be fully utilized, every second of not making use of the skills buff duration decreases the impact it has.
* Killing an enemy with [Gunblade Focus Overdrive Finisher](./moveset.md#gunblade-focus-overdrive) will also cause us to lose some buff duration since in most cases there will be a small delay until we fight the next enemy.
* We usually build and want to build [Gunblade Focus](./skill-tree.md#gunblade-focus) when an enemy is able to move so using [Counters](./moveset.md#counters) will shrink the difference in time even more.
* The skill does not help if you happen to use your [Photon Blast](./moveset.md#photon-blast) right after using [Gunblade Focus Overdrive Finisher](./moveset.md#gunblade-focus-overdrive).

## ![icon](_static/skill/38px-NGSUISkillGunbladeFocusQuickRecharge.png) [Gunblade Focus Gauge Amplifier](./skill-tree.md#gunblade-focus-gauge-amplifier) Break Down
The reason why we do not put more than one point into that skill is because it can cause diminishing returns.

For example if you use a [Supercharged Normal Attack](#scna) into a [Step Counter Weapon Action](#stepc-wa) you will generate less [Gunblade Focus](./skill-tree.md#gunblade-focus) with the skill at Level 5 than at Level 1.

Using the skill at Level 1 will generate 232.5 [Gunblade Focus](./skill-tree.md#gunblade-focus).
```{math}
(65*1.5)+(90*1.5) = 232.5
```

Using the skill at Level 5 will generate 220 [Gunblade Focus](./skill-tree.md#gunblade-focus).
```{math}
(65*2)+90 = 220
```

The above example was taken from [ものさし](https://twitter.com/flowerint1034/status/1647830827160731654).

## ![icon](_static/skill/38px-NGSUISkillGunbladeFocusQuickRecharge.png) [Slugshot](./skill-tree.md#slug-shot) Break Down
The skill would not be bad by itself, however since we are able to deal damage with our [Weapon Action](./moveset.md#weapon-action), the skill is in a rather sorry state.

This is a fundamental issue because the game handles the [Slug Shot](./moveset.md#slug-shot) like a {term}`PA` which makes it unable to cancel an already ongoing {term}`PA` unlike the [Weapon Action](./moveset.md#weapon-action) which then leads to the following drawbacks:

* lower DPS than using [WA123](#wa123) after a {term}`PA`
* lower DPS than using another {term}`PA` like [sSS](#sSS) or [sWR](#sWR) instead 
* does not build Rage which makes using a {term}`PA` instead more appealing
* only restores 2 more PP than [WA123](#wa123)
* only has 3 more range than [WA123](#wa123)

I made a table comparing a few different scenarios with [sFS12](#sfs12) which has a Weapon Action cancel time of 0.25 seconds and [sSS](#sSS) which has a canel time of 0.1 seconds.
```{important}
* Potency values are floored and {term}`DPS` values are rounded in calculations.

* {term}`DPS` values of {term}`PA`s include [RB](./skill-tree.md#relentless-blade), [RBR](./skill-tree.md#relentless-blade-reinforce) and Class specific Critical Hit Rate multipliers.

More accurate and up-to-date information can be found in [Frame Data](./moveset.md#frame-data).
```

```{csv-table}
---
header: >
  "Variant", "Potency", "Time (s)", "{term}`F0` {term}`DPS`", "{term}`F5` {term}`DPS`", "{term}`OD` {term}`DPS`", "{term}`PP` Cost", "Focus", "Rage"
widths: 15, 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"[sFS12](#sfs12)->[Slug Shot](./moveset.md#slug-shot)", "1350", "3.61", "374", "416", "436", "40", "16.7", "11"
"[sFS12](#sfs12)->[WA123](#wa123)", "1510", "3.88", "389", "433", "454", "42", "20.2", "11"
"[sSS](#sSS)->[Slug Shot](./moveset.md#slug-shot)", "385", "1.11", "347", "387", "405", "4", "5.1", "0.7"
"[sSS](#sSS)->[WA123](#wa123)", "545", "1.53", "356", "396", "415", "6", "8.6", "0.7"
"[sSS](#sSS)->[sWR](#sWR)", "370", "1.04", "356", "396", "415", "32", "4.1", "1.6"
```

This table already makes [Slug Shot](./moveset.md#slug-shot) look bad in terms of damage but it actually does not even account for the fact that the {term}`WA3` can be used to counter.
So let us look at a counter scenario.

```{csv-table}
---
header: >
  "Variant", "Potency", "Time (s)", "{term}`F0` {term}`DPS`", "{term}`F5` {term}`DPS`", "{term}`OD` {term}`DPS`", "{term}`PP` Cost", "Focus", "Rage"
widths: 20, 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"[sFS12](#sfs12)->[Slug Shot](./moveset.md#slug-shot)->[BC WA](#bc-wa)", "2310", "5.68", "407", "453", "474", "32", "26.7", "11"
"[sFS12](#sfs12)->[WA123](#wa123)->[BC WA](#bc-wa)", "2470", "5.68", "434", "484", "507", "36", "29.2", "11"
```

```{raw} html
<meta content="Slayer Mechanics Broken Down" property="og:title">
<meta content="Analyzing some mechanics that might otherwise be difficult to comprehend" property="og:description">
<meta content="https://ngs-slayers.github.io/glossary.html" property="og:url">
<meta content="https://ngs-slayers.github.io/_static/class/UINGSClassSl.png" property="og:image">
<meta content="#48AC9C" data-react-helmet="true" name="theme-color">
```