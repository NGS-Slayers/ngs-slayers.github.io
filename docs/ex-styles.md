---
title: "EX-Styles"
description: "Helping you figure out which EX-Style to use"
---
With the patch from 10/01/2025, we can now pick from one of three EX-Styles to gain additional abilities in combat.

## Slayer's Choice
The generally recommended EX-Style for Slayer is Adras. The next best is Blitz. Celeste should be avoided and here is why:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="adras" label={<span><img src="/img/38px-Adras.png" alt="Adras" style={{marginRight: "5px", verticalAlign: "middle"}} className="tab-icon" />Adras (Recommended)</span>} default attributes={{className: 'adras-tab'}}>
Adras, while at first glance might look weaker than the other two options, actually seems to have the highest ceiling. Adras Perfection gives a free counter every 20 seconds, which is awesome and also makes it incredibly easy to get the 420 potency from the additional attack it generates. This is a massive boost to overall DPS when used correctly and it is available at the start of a fight. Make sure not to waste the free counter from Adras Perfection and fit it whenever possible. If you do not have much time before the next enemy attack, consider using the [Normal Attack version of the Counter](/moveset/counters#bc-na).
</TabItem>

<TabItem value="blitz" label={<span><img src="/img/38px-Blitz.png" alt="Blitz" style={{marginRight: "5px", verticalAlign: "middle"}} className="tab-icon" />Blitz</span>} attributes={{className: 'blitz-tab'}}>
Blitz gives strong buffs through its Decay Rounds. However, triggering Blitz Cascade requires adjusting your gameplay, which can lower your DPS. In fights with very aggressive enemies, you might not have time to trigger Blitz Cascade on cooldown and therefore lowers the value of the 420 potency bonus.
</TabItem>

<TabItem value="celeste" label={<span><img src="/img/38px-Celeste.png" alt="Celeste" style={{marginRight: "5px", verticalAlign: "middle"}} className="tab-icon" />Celeste</span>} attributes={{className: 'celeste-tab'}}>
While Celeste's ability to lower the cooldown of [Gunblade Focus Overdrive](/skill-tree/skills#gunblade-focus-overdrive) may sound enticing, it is not as effective as it seems. It will desync your [Photon Blast](/moveset/photon-blast) and [Gunblade Focus Overdrive](/skill-tree/skills#gunblade-focus-overdrive) timings, making it ineffective. On top of that, triggering Celeste Flawless is difficult. You must sacrifice a regular Counter to trigger it and wait for the enemy to attack before it can activate and therefore significantly lowers the value of the 420 potency bonus. 
</TabItem>
</Tabs>

__All EX-Styles share the following three abilities but have different conditions or effects. See the tables for each EX-Style below.__

## <img src="/img/38px-AfterBlast.png" alt="icon" className="heading-icon"/>After Blast
Press the Photon Blast button again after activating a Photon Blast to activate an After Blast.

## <img src="/img/38px-AfterBlastEcho.png" alt="icon" className="heading-icon"/>After Blast Echo
For a certain period after activating an After Blast, incoming damage is gradually reduced in up to four stages over time, and damage dealt (excluding Photon Blasts and After Blasts) is increased. Reduce the time taken to progress to the next stage by _(refer to Blast Echo Requirement Reduction in the respective table below)_, up to four times each time this activates.

## <img src="/img/38px-AfterBlastTriggerAttack.png" alt="icon" className="heading-icon"/>After Blast Trigger
An additional attack will periodically occur when you hit an enemy with PA or Techniques. This fills the Photon Blast gauge and reduces the Photon Blast cooldown. Each time this activates, reduce the cooldown of this effect up to three times by _(refer to Trigger Attack Cooldown Reduction in the respective table below)_.

## <img src="/img/38px-Adras.png" alt="icon" className="heading-icon"/>Adras Specifics
| After Blast Potency | Adras Perfection Potency | Adras Absorption Potency Increase | Trigger Attack Potency |Trigger Attack Cooldown Reduction | Blast Echo Requirement Reudction |
| --- | --- | --- | --- | --- | --- |
| 2800 | 420 | 5% for 20 seconds | 330 | Upon Successful Weapon Action Counter | Upon Successful Weapon Action Counter |

### <img src="/img/38px-AdrasPerfection.png" alt="icon" className="heading-icon"/>Adras Perfection
If you activate the Weapon Action, but are not immediately hit by an attack, the Weapon Action counts as a successful attack evade or negation. Gain an additional attack stock, which unleashes an additional attack when your next attack lands.

:::tip
* This effect has a 20 seconds cooldown.
:::

### <img src="/img/38px-AdrasAbsorption.png" alt="icon" className="heading-icon"/>Adras Absorption
After activating an After Blast, the first Normal Attack you land will grant a buff for a certain period. Damage dealt increases and HP is recovered each time you land an attack. When HP is recovered with this effect, your max HP increases for a certain period.

## <img src="/img/38px-Blitz.png" alt="icon" className="heading-icon"/>Blitz Specifics
| After Blast Potency | Blitz Cascade Potency |Blitz Decay Rounds Potency Increase | Trigger Attack Potency | Trigger Attack Cooldown Reduction | Blast Echo Requirement Reudction |
| --- | --- | --- | --- | --- | --- |
| 2700 | 420 | 7% for 30 seconds | 330 | 10 Hits | 10 Hits |

### <img src="/img/38px-BlitzCascade.png" alt="icon" className="heading-icon"/>Blitz Cascade
When you activate the same PA or Technique three times in a row, or hold the button to activate a PA with a continuous attack for a certain amount of time, PP is recovered and Max PP is temporarily increased. Additionally, one extra attack is stocked which will be unleashed when your next attack lands.

:::tip
* This effect has a 20 seconds cooldown.
:::

### <img src="/img/38px-BlitzDecayRounds.png" alt="icon" className="heading-icon"/>Blitz Decay Rounds
After activating an After Blast, the first Normal Attack to hit an enemy will weaken the surrounding enemies. Your damage dealt to weakened enemies will increase and additional attacks will occur when your attacks hit them. Potency increases based on distance will always be maximized for attacks to these enemies.

| Additional Attacks| Additional Attack Potency | Total Potency
| --- | --- | --- |
| 3 hits each follow-up attack | 2 each hit | 180 from 90 hits or 30 follow-up attacks |


## <img src="/img/38px-Celeste.png" alt="icon" className="heading-icon"/>Celeste Specifics
| After Blast Potency | Celeste Flawless Potency | Celeste Reiteration Potency Increase| Trigger Attack Potency | Trigger Attack Cooldown Reduction | Blast Echo Requirement Reudction |
| --- | --- | --- | --- | --- | --- |
| 2700 | 420 | 5% for 30 seconds | 330| 600 Down Factor | 600 Down Factor |

### <img src="/img/38px-CelesteFlawless.png" alt="icon" className="heading-icon"/>Celeste Flawless
Negate enemy attacks and reduce damage from some attacks when you: begin charging a non-Weapon Action attack, use an active skill that consumes a gauge/Focus Gauge, or use a Technique with a deployed Talis. If an attack is negated, damage is reduced, or an attack is evaded with an active skill during this effect, an extra attack is stocked for your next attack.

:::tip
* This effect has a 20 seconds cooldown.
* This also seems to work with uncharged versions of attacks, in our case with the Normal Attack 1 to 3.
:::

### <img src="/img/38px-CelesteReiteration.png" alt="icon" className="heading-icon"/>Celeste Reiteration
After activating an After Blast, the first active skill used that consumes a gauge or Focus Gauge will increase damage dealt for a certain period. The gauge or Focus Gauge consumed with that skill will recover a certain amount, and the skill's cooldown will be reduced.
