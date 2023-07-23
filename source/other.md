# Other
This Page will mainly focus on breaking down mechanics of the Slayer class for a better understanding.

## ![icon](_static/skill/38px-NGSUISkillGunbladeFocusQuickRecharge.png) [Gunblade Focus Quick Recharge](./skill-tree.md#gunblade-focus-quick-recharge) Break Down
With the Patch from 06/07/2023 came a new Slayer Class Skill which might sound good at first but looking further into it might not be worth your Skill point.

Let's look at what the skill does first.

* The skill amplifies our [Gunblade Focus](./skill-tree.md#gunblade-focus) generation by 120% after using the finisher from [Gunblade Focus Overdrive](./moveset.md#gunblade-focus-overdrive) for a duration of 20 seconds.

* This effect does stack with [Gunblade Focus Gauge Amplifier](./skill-tree.md#gunblade-focus-gauge-amplifier)

Before we get into the pros and cons of the skill let's create a scenario in which we can compare the buildup with and without the skill.

500 Focus is needed to reach [Gunblade Focus](./skill-tree.md#gunblade-focus) Level 5 and while attacking boss enemies our [Gunblade Focus](./skill-tree.md#gunblade-focus) generation is 5 times the original [Gunblade Focus](./skill-tree.md#gunblade-focus) value of our attacks.

In this example I will just chain a bunch of [Stay Arts Flowing Sirius Stage 1 to 2](#sfs12) together until we reach [Gunblade Focus](./skill-tree.md#gunblade-focus) Level 5.

Time to do the math first without using the skill. I will round the amount of times required to use the skill to approach an in game scenario.

Without using the skill it takes us around 7 of these or 21.7 seconds.
```{math}
14.2*5=71

500/71=7.04225352113

7/3.10 = 21.7
```

With using the skill it would take us around 6 of these or 18.6 seconds.
```{math}
(14.2*5)1.2=85.2

500/85.2=5.86854460094

6*3.10 = 18.6
```

So let's look into the downsides of this skill.

The above example is a 14% difference since we are already not able to make use of the 20 seconds buff duration in a scenario in which the enemy does not move.

* The skill is not active at the start of a fight.
* The skill does not help us when we lose [Gunblade Focus](./skill-tree.md#gunblade-focus) to any other means than using [Gunblade Focus Overdrive Finisher](./moveset.md#gunblade-focus-overdrive).
* Buff duration has to be fully utilized to make a minor difference, every second of not using the skills buff duration decreases it's impact.
* Killing an enemy with [Gunblade Focus Overdrive Finisher](./moveset.md#gunblade-focus-overdrive) will also cause us to lose some buff duration since in most cases there will be a small delay until we fight the next enemy.
* We usually build and want to build [Gunblade Focus](./skill-tree.md#gunblade-focus) when an enemy is able to move so using [Counters](./moveset.md#counters) will shrink the difference in time even more.
* The skill makes no difference if you happen to use your [Photon Blast](./moveset.md#photon-blast) right after using [Gunblade Focus Overdrive Finisher](./moveset.md#gunblade-focus-overdrive).

On top these downsides when this skill is used together with [Gunblade Focus Gauge Amplifier](./skill-tree.md#gunblade-focus-gauge-amplifier) the small boost this Skill provides could be slightly less of a boost if you reaching [Gunblade Focus](./skill-tree.md#gunblade-focus) Focus Level 5 before the duration of the buff is over.

## ![icon](_static/skill/38px-NGSUISkillGunbladeFocusQuickRecharge.png) [Gunblade Focus Gauge Amplifier](./skill-tree.md#gunblade-focus-gauge-amplifier) Break Down
The reason why we don´t put more than one point into that skill is because it can cause diminishing returns.

For example if you use a [Supercharged Normal Attack](#scna) into a [Step Counter Weapon Action](#stepc-wa) you will generate less [Gunblade Focus](./skill-tree.md#gunblade-focus) with the Skill at Level 5 than at Level 1.

Using the skill at Level 1 will generate 232.5 [Gunblade Focus](./skill-tree.md#gunblade-focus).
```{math}
(65*1.5)+(90*1.5) = 232.5
```

Using the skill at Level 5 will generate 220 [Gunblade Focus](./skill-tree.md#gunblade-focus).
```{math}
(65*2)+90 = 220
```

The above example was taken from [ものさし](https://twitter.com/flowerint1034/status/1647830827160731654).

```{raw} html
<meta content="Slayer Mechanics Broken Down" property="og:title">
<meta content="Analyzing some mechanics that might otherwise be difficult to comprehend" property="og:description">
<meta content="https://ngs-slayers.github.io/glossary.html" property="og:url">
<meta content="https://ngs-slayers.github.io/_static/class/UINGSClassSl.png" property="og:image">
<meta content="#48AC9C" data-react-helmet="true" name="theme-color">
```