# Moveset
Slayer has many attacks available for use in combat. Here is a list of each attack and their uses.
To make the following tables easier to read we will use some abbreviations:

(abbreviation-table)=
## Abbreviation Table
```{csv-table}
---
header: >
  "Abbreviation", "Term"
widths: 5, 20
align: center
---
"F0", "Focus Level 0"
"F5", "Focus Level 5"
"OD", "Focus Gauge Overdrive"
"DPS", "Damge per Second"
"PA", "Photon Art"
"PB", "Photon Blast"
"PP", "Photon Power"
"NA", "Normal Attack"
"WA", "Weapon Action"
"BC", "Blade Counter"
"StepC", "Step Counter"
"RB", "Relentless Blade"
"RBR", "Relentless Blade Reinforce"
"UR", "Unleashed Rage"
"c", "Charged"
"sc", "Super Charged"
"m", "Move Arts"
"s", "Stay Arts"
"SS", "Shifting Spica"
"FS1", "Flowing Sirius"
"RR", "Reaping Regulus"
"WR", "Waving Rigel"
"123", "Stage 1-3"
```

```{important} * Potency values and DPS values are rounded in calculations.

* Class specific Critical Hit Rate multipliers are included.

* DPS values of PA's include RB and RBR.

* Rage Multiplier against Bosses is 3

* Focus Multiplier against bosses is 5
```

More accurate and up-to-date information can be found in [Frame Data](#frame-data).

## ![icon](_static/skill/38px-NGSUISkillRelentlessBlade.png) Relentless Blade
During a PA, a purple glow will appear on your character.
If you press NA while the glow is visible, you will do an additional hitscan attack that is able to build Rage and recover some PP.
```{hint} RBR will increase the potency of this attack.
```

IMAGE

When successfully executing RB another visual indicator will appear.

IMAGE

```{csv-table}
---
header: >
  "Variant", "Potency", "PP Gain", "Focus", "Rage"
widths: 5, 5, 5, 5, 5
align: center
---
"Weak RB with RBR", "25", "3", "0.5", "0.5"
"Weak RB without RBR", "5", "3", "0.5", "0.5"
"Strong RB with RBR", "75", "3", "2.5", "3.5"
"Strong RB without RBR", "15", "3", "2.5", "3.5"
```

```{hint} Strong RB only applies to sFS2
```

### Making RB Easier
Some may find the window of RB difficult. To make things easier, you may change where the NA button is. There is a priority system for inputs. The priorities are as follows:

IMAGE

Binding the NA button to a slot with lower priority allows you to hold down a PA and NA to automatically activate Relentless Blade without canceling into Slug Shot.

## Photon Arts
Slayer PA's change depending on if a directional input was pressed upon activation of the PA.

If you are familiar with the Fighter Class, you might notice a similarity with Fighter Skip Arts.

```{tip} Step Cancel timings are more generous than WA Cancel, so if you find yourself stuck in some PA's consider using a StepC.
```

### ![icon](_static/PA/38px-NGSUIPhotonArtShiftingSpica.png) Shifitng Spica
#### sSS
Perform a forward slash and fire a Photon Bullet in quick succession.
```{hint} This PA will grant you super armor throughout the entire duration.
```

```{video} _static/PA/sSS.webm
---
autoplay: true
loop: true
nocontrols: true
---
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "F0 DPS", "F5 DPS", "OD DPS", "PP Cost", "Focus", "Rage"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"190+25", "0.60", "358", "399", "418", "14", "2.6", "0.2"
```

#### mSS
Approach the enemy at high speed with a thrust attack then shoot at close range.
```{hint}
This PA will grant you super armor throughout the entire duration.
```

```{video} _static/PA/mSS.webm
---
autoplay: true
loop: true
nocontrols: true
---
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "F0 DPS", "F5 DPS", "OD DPS", "PP Cost", "Focus", "Rage"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"371+25", "1.14", "348", "388", "406", "14", "5", "1.5"
```

### ![icon](_static/PA/38px-NGSUIPhotonArtFlowingSirius.png) Flowing Sirius
#### sFS1
Perform a forward slash and fire a Photon Bullet in quick succession.
```{hint}
This PA will grant you super armor throughout the entire duration.
```

```{video} _static/PA/sFS1.webm
---
autoplay: true
loop: true
nocontrols: true
---
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "F0 DPS", "F5 DPS", "OD DPS", "PP Cost", "Focus", "Rage"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"400+25", "1.25", "340", "378", "396", "25", "5.1", "1.5"
```

#### sFS12
Performs a series of slashes. When activated in succession, it turns into a powerful attack.
```{hint}
Stage 2 of the PA has an increased potency on RB and will grant you super armor.
```

```{video} _static/PA/sFS12.webm
---
autoplay: true
loop: true
nocontrols: true
---
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "F0 DPS", "F5 DPS", "OD DPS", "PP Cost", "Focus", "Rage"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"1080+25+75", "3.10", "381", "424", "444", "50", "14.2", "7.5"
```

#### mFS
Performs an attack that sweeps the surrounding area while moving.
```{hint} This PA will grant you super armor until before performing the last slash of the attack.
```

```{video} _static/PA/mFS.webm
---
autoplay: true
loop: true
nocontrols: true
---
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "F0 DPS", "F5 DPS", "OD DPS", "PP Cost", "Focus", "Rage"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"302+25", "0.93", "354", "394", "413", "25", "4.6", "1.5"
```

### ![icon](_static/PA/38px-NGSUIPhotonArtReapingRegulus.png) Reaping Regulus
#### sRR
Throws a photon bomb while retreating back as it explodes.
```{hint} This PA will grant you invincibility frames and super armor for 0.35 seconds after using.
```

```{video} _static/PA/sRR.webm
---
autoplay: true
loop: true
nocontrols: true
---
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "F0 DPS", "F5 DPS", "OD DPS", "PP Cost", "Focus", "Rage"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"210+25", "0.67", "351", "390", "409", "17", "4", "4"
```

```{video} _static/PA/mRR.webm
---
autoplay: true
loop: true
nocontrols: true
---
```

#### mRR
Kicks the bomb in a curved manner that explodes a certain distance away.
```{hint} This PA will grant you invincibility frames for 0.2 seconds after using.
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "F0 DPS", "F5 DPS", "OD DPS", "PP Cost", "Focus", "Rage"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"273+25", "0.87", "343", "381", "399", "17", "4", "1.5"
```

### ![icon](_static/PA/38px-NGSUIPhotonArtWavingRigel.png) Waving Rigel
#### sWR
Thrust the weapon into the ground and release a shockwave around you. When performed in the air, you'll fall at high speed and attack upon landing.

```{hint} This attack may also be used to pull small mobs towards you.

This PA will grant you super armor and a frontal guard for 0.25 seconds after using.
```

```{video} _static/PA/sWR.webm
---
autoplay: true
loop: true
nocontrols: true
---
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "F0 DPS", "F5 DPS", "OD DPS", "PP Cost", "Focus", "Rage"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"130+25", "0.44", "356", "397", "415", "18", "1.5", "0.4"
```

#### mWR
Slashes the surrounding area while ascending.
```{hint} This PA will grant you super armor throughout the entire animation.
```

```{video} _static/PA/mWR.webm
---
autoplay: true
loop: true
nocontrols: true
---
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "F0 DPS", "F5 DPS", "OD DPS", "PP Cost", "Focus", "Rage"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"332+25", "1.0", "357", "397", "416", "18", "5.1", "4.5"
```

## Slug Shot
This skill changes the NA with no directional input slightly after using a PA.
```{hint} This attack is a close range attack that grants you super armor and frontal guard for 0.35 seconds.
```

IMAGE

The following example shows sSS into Slug Shot

```{video} _static/PA/SlugShot.webm
---
autoplay: true
loop: true
nocontrols: true
---
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "F0 DPS", "F5 DPS", "OD DPS", "PP Gain", "Focus"
widths: 5, 5, 5, 5, 5, 5, 5
align: center
---
"170", "0.51", "333", "371", "389", "10", "2.5"
```

## ![icon](_static/PA/38px-NGSUINormalAttackGunblade.png) Normal Attack
Gunblade has three different variations of NA's.
```{hint} The skill Short Range Hot Shot increases the potency of the NA's by 30%.
```

### NA123
Tapping the NA fires a single shot ahead. Repeatedly tapping NA will fire up to 3 shots in succession increasing DPS for every Stage.

```{video} _static/PA/NA123.webm
---
autoplay: true
loop: true
nocontrols: true
---
```

```{csv-table}
---
header: >
  "Variation", "Potency", "Time (s)", "F0 DPS", "F5 DPS", "OD DPS", "PP Gain", "Focus"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"with Short Range", "250", "1.20", "271", "301", "316", "19", "6"
"with Short Range", "175", "1.20", "208", "232", "243", "19", "6"
```

### cNA
Charging NA up to the first charged stage causes it to release several shots in quick succession.

```{video} _static/PA/cNA.webm
---
autoplay: true
loop: true
nocontrols: true
---
```

```{csv-table}
---
header: >
  "Variant", "Potency", "Time (s)", "F0 DPS", "F5 DPS", "OD DPS", "PP Gain", "Focus"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"with Short Range", "305", "1.45", "273", "304", "319", "21", "5.2"
"with Short Range", "175", "1.45", "210", "234", "245", "21", "5.2"
```

### scNA
Charging the attack up to the second charged stage releases a powerful blast.
```{hint} After releasing this charged attack you will receive super armor and frontal guard for the duration of 0.5 seconds.
```

```{video} _static/PA/scNA.webm
---
autoplay: true
loop: true
nocontrols: true
---
```

```{csv-table}
---
header: >
  "Variation", "Potency", "Time (s)", "F0 DPS", "F5 DPS", "OD DPS", "PP Gain", "Focus"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"with Short Range", "550", "2.60", "275", "306", "321", "20", "13"
"with Short Range", "385", "2.60", "212", "235", "247", "20", "13"
```

### ![icon](_static/skill/38px-NGSUISkillChargedBlade.png) Charged Blade
The class has several gap closers, one of which is the skill Charged Blade. After releasing a cNA, using the WA at a certain time will quickly thrust you closer to the enemy.
```{hint} During this thrust you will be granted super armor and an omnidirectional guard for 0.4 seconds.

Charged Blade counts as using the WA so after learning the skill BC you will be able to perform a WA Counter with it.
```

```{video} _static/PA/ChargedBlade.webm
---
autoplay: true
loop: true
nocontrols: true
---
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "F0 DPS", "F5 DPS", "OD DPS", "PP Gain", "Focus"
widths: 5, 5, 5, 5, 5, 5, 5
align: center
---
"220", "0.50", "440", "390", "513", "7", "4"
```

## ![icon](_static/PA/38px-NGSUIWeaponActionGunblade.png) Weapon Action
### WA123
The WA enables you to guard against an enemy attack with a slash.

```{hint} After every slash you will be granted super armor and an omnidirectional guard for a short period of time depending on the stage.

For WA1 the above mentioned defensive effects will last 0.3 seconds, for WA2 0.2 seconds and for WA3 0.4 seconds
```

```{video} _static/PA/WA123.webm
---
autoplay: true
loop: true
nocontrols: true
---
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "F0 DPS", "F5 DPS", "OD DPS", "PP Gain", "Focus"
widths: 5, 5, 5, 5, 5, 5, 5
align: center
---
"330", "1.03", "319", "355", "372", "8", "6"
```

### mWA
If the skill Mobile Blade was learned you can use the directional input to perform a slash while evading attacks.
```{hint} During the slash you will be granted invincibility frames for 0.35 seconds.
```

```{video} _static/PA/mWA.webm
---
autoplay: true
loop: true
nocontrols: true
---
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "F0 DPS", "F5 DPS", "OD DPS", "PP Gain", "Focus"
widths: 5, 5, 5, 5, 5, 5, 5
align: center
---
"70", "0.47", "150", "167", "175", "3", "2.5"
```

## Counters
With the skill BC, you can perform a different counter attack based on the button used. After successfully guarding against an attack, you can press WA to perform a long continuous attack. If you use NA instead, a short counter attack occurs.
These options are also available for your StepC too but result in different counters.

```{hint} The same goes for mBC if you successfully evaded an attack while using a directional input.

After successfully countering an enemy attack you will be granted invincibility frames for the entire duration of the counter animation.
```

### BC NA
This variation is useful for when you are fighting a quick enemy and have just countered with WA123 cancel or need a quick ranged counter that you do not need to move to grab.

```{video} _static/PA/BCNA.webm
---
autoplay: true
loop: true
nocontrols: true
---
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "F0 DPS", "F5 DPS", "OD DPS", "PP Gain", "Focus"
widths: 5, 5, 5, 5, 5, 5, 5
align: center
---
"400", "0.77", "520", "578", "606", "13", "4"
```

### BC WA
This is your go to counter if you can fit all of it and don’t need to move to grab the counter.

```{video} _static/PA/BCWA.webm
---
autoplay: true
loop: true
nocontrols: true
---
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "F0 DPS", "F5 DPS", "OD DPS", "PP Gain", "Focus"
widths: 5, 5, 5, 5, 5, 5, 5
align: center
---
"960", "2.17", "442", "429", "516", "6", "9"
```

### mBC NA
This variation is used for when you need a quick ranged counter and need to move into the hitbox for it. 

```{video} _static/PA/mBCNA.webm
---
autoplay: true
loop: true
nocontrols: true
---
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "F0 DPS", "F5 DPS", "OD DPS", "PP Gain", "Focus"
widths: 5, 5, 5, 5, 5, 5, 5
align: center
---
"420", "0.87", "483", "537", "563", "13", "4"
```

### mBC WA
This counter is your go to if you have time to fit it and you need to move to grab the counter.

```{video} _static/PA/mBCWA.webm
---
autoplay: true
loop: true
nocontrols: true
---
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "F0 DPS", "F5 DPS", "OD DPS", "PP Gain", "Focus"
widths: 5, 5, 5, 5, 5, 5, 5
align: center
---
"960", "2.27", "423", "471", "493", "6", "9"
```

### StepC NA
This variation is the fastest counter. It is used for very quick double counters.

```{video} _static/PA/StepCNA.webm
---
autoplay: true
loop: true
nocontrols: true
---
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "F0 DPS", "F5 DPS", "OD DPS", "PP Gain", "Focus"
widths: 5, 5, 5, 5, 5, 5, 5
align: center
---
"380", "0.70", "543", "604", "633", "12", "4"
```

### StepC WA
It is a fast way to build Focus and Rage, serves as a gap closer, has the highest DPS when spammed in a lingering hitbox, and is your highest potency “short counter”.

```{video} _static/PA/stepCWA.webm
---
autoplay: true
loop: true
nocontrols: true
---
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "F0 DPS", "F5 DPS", "OD DPS", "PP Gain", "Focus", "Rage"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"550", "1.02", "539", "600", "629", "4", "18", "3"
```

## ![icon](_static/PA/38px-PhotonBlast.png) Photon Blast
A powerful attack that generates a special field around you.
```{hint} You will be granted invincibility frames during the entire animation of the attack.
```

```{video} _static/PA/PB.webm
---
autoplay: true
loop: true
nocontrols: true
---
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "F0 DPS", "F5 DPS", "OD DPS", "Focus"
widths: 5, 5, 5, 5, 5, 5, 5
align: center
---
"4450", "5.60", "795", "884", "927", "4", "2530"
```

## Active Skills
### ![icon](_static/skill/38px-NGSUISkillUnleashedRage.png) Unleashed Rage
Approach the enemy to deliver a powerful blow. Not only does the skill greatly help fill the Focus gauge, but through the skill UR After Effect, the critical hit rate increases for a short period of time after as well.

UR's gauge builds from PA's, Relentless Blade and from the StepC WA.

```{hint} UR requires 100 Rage to be used and will grant you invincibility frames for the entire duration of the skill.
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "F0 DPS", "F5 DPS", "OD DPS", "PP Gain", "Focus"
widths: 5, 5, 5, 5, 5, 5, 5
align: center
---
"1000", "1.27", "787", "876", "918", "20", "22"
```

### ![icon](_static/skill/38px-NGSUISkillGunbladeFocusOverdrive.png) Gunblade Focus Overdrive
Activating OD will start a short animation. After the activation you will be granted buffs for a short time period.
For more information on the buffs check out [Gunblade Focus Overdrive](#skill-tree-gunblade-focus-overdrive)

Re-activating OD while it's in effect, unleashes a powerful finishing move that generates a special zone similar to the visuals seen in the PB.
You will be granted invincibility frames during the entire animation of the finisher as well.

```{hint} During both the activation and the finisher animation you will be granted invincibility frames.

The activation of the skill takes 1.4 seconds when not inputting another attack and 0.67 seconds if you do
```

```{video} _static/PA/ODF.webm
---
autoplay: true
loop: true
nocontrols: true
---
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "OD DPS"
widths: 5, 5, 5
align: center
---
"2695", "4.20", "642"
```

## Relevant Gunblade Animation Cancels
You can cancel out most Gunblade PA's and Actions early with a NA or WA input.

This basically means you can increase the DPS of some PA's and Actions while gaining PP making Slug Shot almost pointless.

For more information please refer to [Frame Data](#frame-data).

```{warning} No input delay or human error is assumed here.

When the description of the cancel includes the word “safely”, it means that it is impossible to mistime since the earliest time to cancel is the same as the attack hit timing.
```

### sFS12 -> WA123
You are able to cancel sFS12 safely at 2.85 seconds.

Basically as soon as your character is about to shoot their gunblade.

Great for downs when low on PP or not having OD Finisher and UR ready.

```{video} _static/PA/sFS12-WA123.webm
---
autoplay: true
loop: true
nocontrols: true
---
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "F0 DPS", "F5 DPS", "OD DPS", "PP Cost", "Focus", "Rage"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"1410+25+75", "3.88", "389", "433", "454", "42", "14.2", "4.5"
```

### StepC WA -> Chain
You are able to cancel out of the StepCounter WA animation with another Step input safely at 0.82 seconds.

This means that chaining this will be stronger than chaining BC NA together.

```{video} _static/PA/StepCWA-chain.webm
---
autoplay: true
loop: true
nocontrols: true
---
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "F0 DPS", "F5 DPS", "OD DPS", "PP Gain", "Focus", "Rage"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"550", "0.82", "671", "747", "782", "4", "18", "3"
```

### StepC WA -> WA123
You are able to cancel out of the StepC WA animation with another WA input safely at 0.82 seconds.

This basically increases the total potency of the counter by making use of the damage from WA123.

```{video} _static/PA/StepCWA-WA123.webm
---
autoplay: true
loop: true
nocontrols: true
---
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "F0 DPS", "F5 DPS", "OD DPS", "PP Gain", "Focus", "Rage"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"880", "1.85", "476", "529", "555", "4", "12", "3"
```

### BC WA -> WA123
You are able to cancel out of the BC WA animation safely at 1.92 seconds after the sixth hit with another WA input.

This basically increases the total potency of the counter by making use of the damage from WA123.

```{video} _static/PA/BCWA-WA123.webm
---
autoplay: true
loop: true
nocontrols: true
---
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "F0 DPS", "F5 DPS", "OD DPS", "PP Gain", "Focus"
widths: 5, 5, 5, 5, 5, 5, 5
align: center
---
"1290", "2.95", "437", "587", "510", "14", "15"
```

### sRR -> StepC WA ("RBC")
This is the fastest way to build Focus and Rage in a small time window.

By stepping out of the PA early starting at 0.42 seconds.

This way you will be able to cancel the recoil of the animation only adding 0.05 seconds when done perfectly allowing you to chain into a StepC WA.

```{video} _static/PA/sRR-StepCWA.webm
---
autoplay: true
loop: true
nocontrols: true
---
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "F0 DPS", "F5 DPS", "OD DPS", "PP Cost", "Focus", "Rage"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"760+25", "1.44", "545", "607", "636", "13", "22", "7"
```

### mWR -> Step -> Chain
This is another great way of building Rage. Canceling the PA into a Step input will make you lose height that you previously gained.

You can cancel out of the mWR as soon as the last hit occurs.

This is not safe and you can end up canceling the PA early so make sure to be careful.

The example shows 4 PAs to make the comparison more obvious.

```{video} _static/PA/mWR-Step-chain.webm
---
autoplay: true
loop: true
nocontrols: true
---
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "F0 DPS", "F5 DPS", "OD DPS", "PP Cost", "Focus", "Rage"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"332+25", "1.05", "340", "378", "396", "18", "5.1", "4.5"
```

### sWR -> StepC WA
You can cancel out of the PA safely at 0.18 seconds.

This is kinda just there and has ridiculous DPS if you can make use of that 0.18 second window.

```{video} _static/PA/sWR-StepCWA.webm
---
autoplay: true
loop: true
nocontrols: true
---
```

```{csv-table}
---
header: >
  "Potency", "Time (s)", "F0 DPS", "F5 DPS", "OD DPS", "PP Cost", "Focus", "Rage"
widths: 5, 5, 5, 5, 5, 5, 5, 5
align: center
---
"680+25", "1.2", "588", "654", "685", "14", "19.5", "3.4"
```

(frame-data)=
## Frame Data

For specific Potency distributions, Physical down, Elemental down, refer to the following frame data spreadsheets:
* [NGS Verification Data Storage](https://docs.google.com/spreadsheets/d/1_OgubzM5QFe4rua4Xu0GSMAI8Idoq8r2yI8Ioyec6oY/edit#gid=932674549)
* [PSO2NGS Frame Data](https://docs.google.com/spreadsheets/d/1YEg-6eViChVV7HDDlNlgFPJf3qbyIUeAlLYPr9b99t0/edit#gid=329460957)

For other resources check out
* [Resources](#resources)

```{raw} html
<meta content="Slayer's Moveset" property="og:title" />
<meta content="Slayer has alot of options in their arsenal so hopefully this guide will help you decide which one to use." property="og:description" />
<meta content="https://ngs-slayers.github.io/moveset.html" property="og:url" />
<meta content="https://ngs-slayers.github.io/_static/class/UINGSClassSl.png" property="og:image" />
<meta content="#48AC9C" data-react-helmet="true" name="theme-color" />
```