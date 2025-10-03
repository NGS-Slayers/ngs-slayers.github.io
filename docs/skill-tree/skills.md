---
title: "Skills"
description: "How to allocate skill points in the Slayer Skill Tree, and a brief explanation of each skill with some tips along the way."
---

Explaining each skills, dividing them into two categories: [Core skills](/skill-tree/skills#core-skills) (always allocate points to) and [Optional skills](/skill-tree/skills#optional-skills) (situational or build-dependent).

## Core Skills

### <img src="/img/38px-NGSUISkillBladeCounter.png" alt="icon" className="heading-icon"/>Gunblade Focus
Build up the Focus Gauge by hitting enemies. 
Attack Potency and Offensive PP Recovery increase and PP Consumption decreases in accordance with the gauge level.
The Focus Gauge will reset to zero after 10 seconds pass without hitting an enemy.

| Skill Level | Potency Increase Per Level  | <Tooltip term="PP" /> Consumption Reduction Per Level  | Offensive <Tooltip term="PP" /> Recovery Per Level  |
| :---: | :---: | :---: | :---: |
| 1 | 1% | 1% | 2% |

The Gunblade Focus indicator at the bottom of your screen helps you identify your current Focus Level:
* The small bar that depletes over time indicates when your Focus Level will reset.
* The large bar divided into five segments displays your current Focus Level.

<ImageTable>
  <ImageTableFigure src="/img/GunbladeFocusGauges.png" alt="Focus Reset Indicator" width="175">
    Focus Reset Indicator: You have recently hit an enemy.
  </ImageTableFigure>
  <ImageTableFigure src="/img/GunbladeFocus0.png" alt="Focus Level 0" width="175">
    Focus Level 0: You have not gained a level of Focus yet.
  </ImageTableFigure>
    <ImageTableFigure src="/img/GunbladeFocus1.png" alt="Focus Level 1" width="175">
    Focus Level 1: You have reached one level of Focus.
  </ImageTableFigure>
    <ImageTableFigure src="/img/GunbladeFocus5.png" alt="Focus Level 5" width="175">
    Focus Level 5: You have reached five levels of Focus
  </ImageTableFigure>
    <ImageTableFigure src="/img/GunbladeFocusOD.png" alt="Focus Level OD" width="175">
    Focus OD: You have activated [Gunblade Focus Overdrive](/skill-tree/skills#gunblade-focus-overdrive)
  </ImageTableFigure>
</ImageTable>

:::info
* Each segment of the large bar represent 100 Focus.
* 500 Focus is needed to reach Focus Level 5. 
* The Focus Level Indicator will turn from blue to yellow after reaching Focus Level 5.
* When [Gunblade Focus Overflow](/skill-tree/skills#gunblade-focus-overflow) was learned the skill will then activate and make it easier for you to gain Rage.
* When [Gunblade Focus Overdrive](/skill-tree/skills#gunblade-focus-overdrive) was learned you will also be able to activate it. It is generally treated the same as Gunblade Focus Level 5
:::

### <img src="/img/38px-NGSUISkillGunbladeFocusGaugeAmplifier.png" alt="icon" className="heading-icon"/>Gunblade Focus Gauge Amplifier
Increased Focus Gauge charging up to Gunblade Focus Gauge level one.

| Skill Level | Focus Gauge Increase Rate (Main) | Focus Gauge Increase Rate (Sub) |
| :---: | :---: | :---: |
| 1 | 150% | 120% |
| 2 | 160% | 125% |
| 3 | 170% | 130% |
| 4 | 185% | 140% |
| 5 | 200% | 150% |

:::caution
* Putting more than one skill-point into this skill may slow [Gunblade Focus](/skill-tree/skills#gunblade-focus) generation.
<Button label="Read More" variant="secondary" link="/mechanics/gunblade-focus-gauge-amplifier" />
:::

### <img src="/img/38px-NGSUISkillGunbladeFocusCriticalUp.png" alt="icon" className="heading-icon"/>Gunblade Focus Critical Up
Critical Hit Rate increases according to the Gunblade Focus Gauge level. The Focus Gauge is treated as "at maximum" while Gunblade Focus Overdrive is active.

| Skill Level | Critical Hit Rate Increase |
| :---: | :---: |
| 1 | 2% |

### <img src="/img/38px-NGSUISkillGunbladeFocusOverflow.png" alt="icon" className="heading-icon"/>Gunblade Focus Overflow
When the Gunblade Focus Gauge is at its maximum level or while Gunblade Focus Overdrive is active, the Unleashed Rage gauge will charge up and its cooldown time will be reduced.

| Skill Level | Gauge Accumulation Rate | Cooldown Reduction |
| :---: | :---: | :---: |
| 1 | 110% | 5 sec |
| 2 | 120% | 5 sec |
| 3 | 130% | 5 sec |
| 4 | 140% | 5 sec |
| 5 | 150% | 5 sec |

### <img src="/img/38px-NGSUISkillGunbladeFocusOverdrive.png" alt="icon" className="heading-icon"/>Gunblade Focus Overdrive
[_Active Skill_](/moveset/active-skills#gunblade-focus-overdrive)

Expend your entire full Focus Gauge to temporarily increase the effects of Gunblade Focus. Using the skill again while it is active will unleash a powerful attack.

| Skill Level | Effect Duration | Cooldown | Potency | <Tooltip term="PP" /> Consumption | <Tooltip term="PP" /> Recovery | Finisher Potency |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | 30 sec | 90 sec | 110% | 80% | 150% | 2450 |

### <img src="/img/38px-NGSUISkillUnleashedRage.png" alt="icon" className="heading-icon"/>Unleashed Rage
[_Active Skill_](/moveset/active-skills#unleashed-rage)

Build up the gauge with Photon Arts and/or Relentless Blade, then expend it to fire a single powerful blast.

| Skill Level | Potency | Cooldown |
| :---: | :---: | :---: |
| 1 | 1000% | 20 sec |

### <img src="/img/38px-NGSUISkillUnleashedRageAfterEffect.png" alt="icon" className="heading-icon"/>Unleashed Rage After Effect
Temporarily increases Critical Hit Rate after activating Unleashed Rage.

| Skill Level | Critical Hit Rate Increase | Effect Duration |
| :---: | :---: | :---: |
| 1 | 5% | 20 sec |

### <img src="/img/38px-NGSUISkillBladeCounter.png" alt="icon" className="heading-icon"/>Blade Counter
When you successfully negate an attack using a Weapon Action, using a Normal Attack or Weapon Action will unleash a counter. The counter varies depending on which you use.

### <img src="/img/38px-NGSUISkillBladeCounterCriticalUp.png" alt="icon" className="heading-icon"/>Blade Counter Critical Up
Increases Blade Counter's Critical Hit Rate.

| Skill Level | Critical Hit Rate Increase |
| :---: | :---: |
| 1 | 5% |

### <img src="/img/38px-NGSUISkillMobileBlade.png" alt="icon" className="heading-icon"/>Mobile Blade
Activating the weapon action while performing a directional input will cause invincibility frames to occur, and change the attack behavior while moving.

### <img src="/img/38px-NGSUISkillMobileBladeCounter.png" alt="icon" className="heading-icon"/>Mobile Blade Counter
When you successfully dodge using Mobile Blade, using a Normal Attack or Weapon Action will unleash a counter. The counter varies depending on which you use.

### <img src="/img/38px-NGSUISkillCriticalUp.png" alt="icon" className="heading-icon"/>Critical Up
Increases Critical Hit Rate.

| Skill Level | Critical Hit Rate Increase (Main) | Critical Hit Rate Increase (Sub) |
| :---: | :---: | :---: |
| 1 | 0.50% | 0.20% |
| 2 | 1.00% | 0.40% |
| 3 | 1.50% | 0.60% |
| 4 | 2.00% | 0.80% |
| 5 | 2.50% | 1.00% |
| 6 | 3.00% | 1.20% |
| 7 | 3.25% | 1.40% |
| 8 | 3.50% | 1.60% |
| 9 | 3.75% | 1.80% |
| 10 | 4.00% | 2.00% |
| 11 | 4.20% | 2.20% |
| 12 | 4.40% | 2.40% |
| 13 | 4.60% | 2.60% |
| 14 | 4.80% | 2.80% |
| 15 | 5.00% | 3.00% |

### <img src="/img/38px-NGSUISkillGallantAttackCriticalUp.png" alt="icon" className="heading-icon"/>Gallant Attack Critical Up
Increases Critical Hit Rate when attacking boss enemies.

| Skill Level | Critical Hit Rate Increase (Main) | Critical Hit Rate Increase (Sub) |
| :---: | :---: | :---: |
| 1 | 1.00% | 0.20% |
| 2 | 2.00% | 0.40% |
| 3 | 3.00% | 0.60% |
| 4 | 4.00% | 0.80% |
| 5 | 4.20% | 1.00% |
| 6 | 4.40% | 1.20% |
| 7 | 4.60% | 1.40% |
| 8 | 4.80% | 1.60% |
| 9 | 4.90% | 1.80% |
| 10 | 5.00% | 2.00% |

### <img src="/img/38px-NGSUISkillShortRangeHotShot.png" alt="icon" className="heading-icon"/>Short Range Hot Shot
Increases Potency when you hit an enemy with a Normal Attack at close range.

| Skill Level | Potency |
| :---: | :---: |
| 1 | 130% |

### <img src="/img/38px-NGSUISkillChargedBlade.png" alt="icon" className="heading-icon"/>Charged Blade
Pressing the Weapon Action button at just the right time after a charged Normal Attack will unleash a thrust attack.

### <img src="/img/38px-NGSUISkillRelentlessBlade.png" alt="icon" className="heading-icon"/>Relentless Blade
Pressing the Normal Attack button at just the right time while performing a Photon Art will allow you to perform an additional attack.

### <img src="/img/38px-NGSUISkillRelentlessBladeReinforce.png" alt="icon" className="heading-icon"/>Relentless Blade Reinforce
Increases Relentless Blade Potency.

| Skill Level | Potency |
| :---: | :---: |
| 1 | 500% |

## Optional Skills

These are the skills you dump the rest of your skill points into after taking all the [Core Skills](#core-skills).

### <img src="/img/38px-NGSUISkillCriticalHitPPGain.png" alt="icon" className="heading-icon"/>Critical Hit PP Gain
There is a chance of recovering <Tooltip term="PP" /> when you land a Critical Hit.

:::caution
* There is a cooldown of 1 second and therefore higher investment into this skill will only help when Gameplay is not optimal.
:::

| Skill Level | Activation Probability | <Tooltip term="PP" /> Recovery (Main) | <Tooltip term="PP" /> Recovery (Sub) | Cooldown |
| :---: | :---: | :---: | :---: | :---: |
| 1 | 30% | +4 | +2 | 1 sec |
| 2 | 50% | +4 | +2 | 1 sec |
| 3 | 70% | +4 | +2 | 1 sec |
| 4 | 85% | +4 | +2 | 1 sec |
| 5 | 100% | +4 | +2 | 1 sec |

### <img src="/img/38px-NGSUISkillGunbladeFocusResetPPGain.png" alt="icon" className="heading-icon"/>Gunblade Focus Reset PP Gain
When the Gunblade Focus Gauge is reset, recover an amount of <Tooltip term="PP" /> in accordance with the Focus Gauge level.

:::info 
* Also activates when entering [Gunblade Focus Overdrive](/skill-tree/skills#gunblade-focus-overdrive)
:::

| Skill Level | <Tooltip term="PP" /> Recovery Rate Per Level (Main) | <Tooltip term="PP" /> Recovery Rate Per Level (Sub) |
| :---: | :---: | :---: |
| 1 | 10.00% | 5.00% |
| 2 | 12.00% | 6.00% |
| 3 | 14.00% | 7.00% |
| 4 | 17.00% | 8.50% |
| 5 | 20.00% | 10.00% |

### <img src="/img/38px-NGSUISkillSlugShot.png" alt="icon" className="heading-icon"/>Slug Shot
Pressing the Normal Attack button without inputting a direction right after performing a Photon Art will unleash a short-range shot.

:::caution
* It is recommended to avoid this skill. 
<Button label="Read More" variant="secondary" link="/mechanics/slugshot" />
:::

### <img src="/img/38px-NGSUISkillGunbladeFocusQuickRecharge.png" alt="icon" className="heading-icon"/>Gunblade Focus Quick Recharge

The Gunblade Focus gauge charge rate temporarily increases after the effects of Gunblade Focus Overdrive have ended.

| Skill Level | Focus Gauge Boost Rate | Effect Duration |
| :---: | :---: | :---: |
| 1 | 120% | 20 sec |

:::caution
* This skill has some drawbacks which makes justifying this as a core skill difficult until we get access to more skill points.
* If you aren’t using [Slug Shot](/skill-tree/skills#slug-shot) and feel comfortable with your PP, consider removing 1 skill-point from [Critical Hit PP Gain](/skill-tree/skills#critical-hit-pp-gain) for this skill.
<Button label="Read More" variant="secondary" link="/mechanics/slugshot" />
:::