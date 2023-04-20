# Skill Tree 

Depicted below is Slayer's skill tree required skill-point allocation.  
Afterward, each skill is explained in detail and with some general tips given when they apply.

[Slayer Skill Tree](https://arks-layer.com/skillsim/ngs/skillcalc.php?29cqIbIVIbIVIbIVIbIVIbIVIbIVIbIVIbIVIbIVIbIV~f~f~f~f~f~f~f~f~f~f~f~f~f~f~f~be~fIq~f~f~f~f~dq~f~f~f~f~f~f~f~f~f~f~f~f~f~f~f~7SYeqIrebererIr~f~f~f~f~f~f~f~f~f~f~f~f~f~f~f~f~f~f~f~f~f~f~a)

(core-skills)=
## Core Skills

These are the skills that you should always take.

(gunblade-focus)=
### ![icon](_static/skill/38px-NGSUISkillBladeCounter.png) Gunblade Focus
Build up the Focus Gauge by hitting enemies. Attack Potency and Offensive PP Recovery increase and PP Consumption decreases in accordance with the gauge level. The Focus Gauge will reset to zero after a certain amount of time passes without hitting an enemy.

The UI element at the bottom of your screen helps you identify your current Focus Level and shows you the time that is left until your Focus Level will be reset.

```{raw} html
<figure>
<figcaption>Focus Reset Indicator: You have recently hit an enemy</figcaption>
<img alt="_images/img.png" src="_static/skill/GunbladeFocusGauges.png" style="width: 30%; height: 30%">
<figcaption>Focus Level 0: You have not gained a level of Focus yet</figcaption>
<img alt="_images/img.png" src="_static/skill/GunbladeFocus0.png" style="width: 30%; height: 30%">
<figcaption>Focus Level 1: You have reached one level of Focus</figcaption>
<img alt="_images/img.png" src="_static/skill/GunbladeFocus1.png" style="width: 30%; height: 30%">
<figcaption>Focus Level 5: You have reached five levels of Focus</figcaption>
<img alt="_images/img.png" src="_static/skill/GunbladeFocus5.png" style="width: 30%; height: 30%">
<figcaption>Focus Overdrive: You have activated Gunblade Focus Overdrive</figcaption>
<img alt="_images/img.png" src="_static/skill/GunbladeFocusOD.png" style="width: 30%; height: 30%">
</figure>
```

Each Focus Level will grant you 1% Potency, 2% Critical Hit Rate, 1% PP Consumption Reduction and 2% Offensive PP Recovery increase.

500 Focus is needed to reach Focus Level 5. The Focus Level Indicator will turn from blue to yellow.

When Gunblade Focus Overflow was learned the skill will then activate and make it easier for you to gain Rage.

When Gunblade Focus Overdrive was learned you will also be able to activate this skill.

Gunblade Focus Overdrive is generally treated the same as Gunblade Focus Level 5.


```{raw} html
<br> <!-- This is really dirty but I don't know a way around it for now --> 
```

### ![icon](_static/skill/38px-NGSUISkillGunbladeFocusGaugeAmplifier.png) Gunblade Focus Gauge Amplifier 
Increased Focus Gauge charging up to Gunblade Focus Gauge level one.

### ![icon](_static/skill/38px-NGSUISkillGunbladeFocusCriticalUp.png) Gunblade Focus Critical Up
Critical Hit Rate increases according to the Gunblade Focus Gauge level. The Focus Gauge is treated as "at maximum" while Gunblade Focus Overdrive is active.

### ![icon](_static/skill/38px-NGSUISkillGunbladeFocusOverflow.png) Gunblade Focus Overflow
When the Gunblade Focus Gauge is at its maximum level or while Gunblade Focus Overdrive is active, the Unleashed Rage gauge will charge up and its cooldown time will be reduced.

(skill-tree-gunblade-focus-overdrive)=
### ![icon](_static/skill/38px-NGSUISkillGunbladeFocusOverdrive.png) Gunblade Focus Overdrive
_Active Skill_

Expend your entire full Focus Gauge to temporarily increase the effects of Gunblade Focus. Using the skill again while it is active will unleash a powerful attack.

### ![icon](_static/skill/38px-NGSUISkillUnleashedRage.png) Unleashed Rage
_Active Skill_

Build up the gauge with Photon Arts and/or Relentless Blade, then expend it to fire a single powerful blast.

### ![icon](_static/skill/38px-NGSUISkillUnleashedRageAfterEffect.png) Unleashed Rage After Effect
Temporarily increases Critical Hit Rate after activating Unleashed Rage.

### ![icon](_static/skill/38px-NGSUISkillBladeCounter.png) Blade Counter
When you successfully negate an attack using a Weapon Action, using a Normal Attack or Weapon Action will unleash a counter. The counter varies depending on which you use.

### ![icon](_static/skill/38px-NGSUISkillBladeCounterCriticalUp.png) Blade Counter Critical Up
Increases Blade Counter's Critical Hit Rate.

### ![icon](_static/skill/38px-NGSUISkillMobileBlade.png) Mobile Blade
Activating the weapon action while performing a directional input will cause invincibility frames to occur, and change the attack behavior while moving.

### ![icon](_static/skill/38px-NGSUISkillMobileBladeCounter.png) Mobile Blade Counter
When you successfully dodge using Mobile Blade, using a Normal Attack or Weapon Action will unleash a counter. The counter varies depending on which you use.

### ![icon](_static/skill/38px-NGSUISkillCriticalUp.png) Critical Up
Increases Critical Hit Rate. 

### ![icon](_static/skill/38px-NGSUISkillGallantAttackCriticalUp.png) Gallant Attack Critical Up
Increases Critical Hit Rate when attacking boss enemies.

### ![icon](_static/skill/38px-NGSUISkillShortRangeHotShot.png) Short Range Hot Shot
Increases Potency when you hit an enemy with a Normal Attack at close range.

### ![icon](_static/skill/38px-NGSUISkillChargedBlade.png) Charged Blade
Pressing the Weapon Action button at just the right time after a charged Normal Attack will unleash a thrust attack.

### ![icon](_static/skill/38px-NGSUISkillRelentlessBlade.png) Relentless Blade
Pressing the Normal Attack button at just the right time while performing a Photon Art will allow you to perform an additional attack.

### ![icon](_static/skill/38px-NGSUISkillRelentlessBladeReinforce.png) Relentless Blade Reinforce
Increases Relentless Blade Potency.

(optional-skills)=
## Optional Skills

These are the skills you dump the rest of your skill points into after taking all the [Core Skills](#core-skills).

### ![icon](_static/skill/38px-NGSUISkillCriticalHitPPGain.png) Critical Hit PP Gain
There is a chance of recovering PP when you land a Critical Hit. 

### ![icon](_static/skill/38px-NGSUISkillGunbladeFocusResetPPGain.png) Gunblade Focus Reset PP Gain
When the Gunblade Focus Gauge is reset, recover an amount of PP in accordance with the Focus Gauge level.

### ![icon](_static/skill/38px-NGSUISkillSlugShot.png) Slug Shot
Pressing the Normal Attack Button without inputting a direction right after performing a Photon Art will unleash a short-range shot.

```{raw} html
<meta content="Slayer Skill Tree" property="og:title" />
<meta content="How to allocate skill points in the Slayer Skill Tree, and a brief explanation of each skill with some tips along the way." property="og:description" />
<meta content="https://ngs-slayers.github.io/skill-tree.html" property="og:url" />
<meta content="https://ngs-slayers.github.io/_static/class/UINGSClassSl.png" property="og:image" />
<meta content="#48AC9C" data-react-helmet="true" name="theme-color" />
```