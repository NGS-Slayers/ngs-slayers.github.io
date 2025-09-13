---
title: "Waving Rigel"
description: "Explaining Tech Arts Customization for Waving Rigel"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# <img src="/PA/38px-NGSUIPhotonArtWavingRigel.png" alt="icon" className="heading-icon"/> Waving Rigel
With the patch from 12/06/2023, the ability to customize Photon Arts and Techniques was added, along with the ability to customize the <Tooltip term="PA" /> [Waving Rigel](/moveset/photon-arts#waving-rigel).

<Tabs>
<TabItem value="c1" label="Customization 1 (Recommended)" default>

* Increases Gauge Generation by 50%, increases <Tooltip term="PP" /> cost by 20/17/14/12/10/9/8/7/6/5% depending on the level

Option 1 seems very risk-free as it only increases <Tooltip term="PP" /> cost per use of [Waving Rigel](/moveset/photon-arts#waving-rigel) by 0.9 <Tooltip term="PP" /> at the highest level of Customization. This option also applies to both the Stay and Move Arts version of the <Tooltip term="PA" />.

However, Slayer does not struggle with [Gunblade Focus](/skill-tree/skills#gunblade-focus) generation while fighting bosses. So this option is rather nice to have than a must-have, but the value of this option increases in mobbing scenarios.

</TabItem>
<TabItem value="c2" label="Customization 2">

* Increases attack range and upward movement for [<Tooltip term="mWR" />](/moveset/photon-arts#mwr), increases <Tooltip term="PP" /> Cost by 15/12/9/7/5/4/3/2/1/0% depending on the level

Option 2 might have some use for mobbing but other than that, I would highly advise against it. This option will make it way harder to chain [<Tooltip term="mWR" />](/moveset/photon-arts#mwr) together and could cause some of the <Tooltip term="PA" /> to miss and decrease <Tooltip term="DPS" /> of using [<Tooltip term="sWR" />](/moveset/photon-arts#swr) right after due to the additional time spent traveling.

</TabItem>
<TabItem value="c3" label="Customization 3">

* Shockwave activates 3 times and potency is decreased by 65% when using [<Tooltip term="sWR" />](/moveset/photon-arts#swr), <Tooltip term="PP" /> Cost increased by 30/26/22/18/15/14/13/12/11/10% depending on the level

Option 3 changes [<Tooltip term="sWR" />](/moveset/photon-arts#swr) to spawn 3 shock waves over time, each with 45.5 potency. This results in a total potency increase of 6.5 potency.

The first shockwave occurs at 0.05 seconds just like the regular version and then 0.5 seconds for every next shockwave. (0.05s > 0.55s > 1.05s)

These lingering shock waves can not be overlapped which means that using this version of [<Tooltip term="sWR" />](/moveset/photon-arts#swr) again before these hit timings have passed will cancel the remaining shock waves.

All that being said, this option could be useful when not planning on repeatedly using [<Tooltip term="sWR" />](/moveset/photon-arts#swr) e.g. using [<Tooltip term="PB" />](/moveset/photon-blast), [<Tooltip term="ODF" />](/moveset/active-skills#gunblade-focus-overdrive), [<Tooltip term="UR" />](/moveset/active-skills#gunblade-focus-overdrive) or [Step Counter WA](/moveset/counters#stepc-wa) right after.

Keep in mind that another risk is that those shock waves can miss entirely or miss weak points. When one of those shock waves misses the weak point then the <Tooltip term="DPS" /> already breaks even with the regular version. Option 3 is still gonna have slightly higher Focus, Rage, PB and Down accumulation.

This option is gonna excel at minor optimization levels in specific fights.

:::warning
The <Tooltip term="DPS" /> showcased for Custom 3 sWR in the following table is not accurate or could be referred to as fake <Tooltip term="DPS" /> since the remaining two shock-waves happen after the 0.43 seconds have already passed!
:::

<MovesetTable tableId="sWR" args={(moveset) => [moveset.sWR,'regular sWR', moveset.sWRC3,'Custom 3 sWR']} />

</TabItem>
</Tabs>
