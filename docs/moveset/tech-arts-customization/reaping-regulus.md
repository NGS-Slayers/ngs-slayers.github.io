---
title: "Reaping Regulus"
description: "Explaining Tech Arts Customization for Reaping Regulus"
---
import MovesetTable from '@site/src/components/MovesetTable';
import Tooltip from '@site/src/components/Tooltip';
import TooltipText from '@site/src/components/TooltipText';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# <img src="/PA/38px-NGSUIPhotonArtReapingRegulus.png" alt="icon" className="heading-icon"/> Reaping Regulus
With the patch from 10/04/2024, the ability to customize the <Tooltip term="PA" /> [Reaping Regulus](/moveset/photon-arts#srr) was added.

<Tabs>
<TabItem value="c1" label="Customization 1">

* Increases attack range by 50% and increases <Tooltip term="PP" /> Cost by 20/17/14/12/10/9/8/7/6/5% depending on the level

Option 1 is pretty straightforward and brings utility for mobbing scenarios.

</TabItem>
<TabItem value="c2" label="Customization 2">

* Increases attack speed, reduces potency by 16% and increases <Tooltip term="PP" /> Cost by 20/17/14/12/10/9/8/7/6/5% depending on the level

Option 2 results in a slight increase in performance.

<MovesetTable tableId="RRC2" args={(moveset) => [moveset.sRR,'regular sRR', moveset.sRRC2,'Custom 2 sRR', moveset.mRR,'regular mRR', moveset.mRRC2,'Custom 2 mRR']} />

</TabItem>
<TabItem value="c3" label="Customization 3 (Recommended)" default>

* Adds the ability to use [Charged Blade](/moveset/normal-attack#charged-blade) after using the <Tooltip term="PA" /> and increases <Tooltip term="PP" /> Cost by 20/17/14/12/10/9/8/7/6/5% depending on the level

Option 3 seems to take the cake without any downsides this time. It grants utility in the form of a more accessible gap close but also provides <Tooltip term="DPS" /> numbers similar to [<Tooltip term="sFS12" />](/moveset/photon-arts#sfs12) when chained into [Weapon Action](/moveset/weapon-action#wa123) Stage 2 and 3.

Chaining into [Weapon Action](/moveset/weapon-action#wa123) Stage 2 and 3 will also make this a <Tooltip term="PP" />-neutral or even <Tooltip term="PP" />-positive option.

[Charged Blade](/moveset/normal-attack#charged-blade) becomes available 0.13 seconds after the <Tooltip term="PA" /> has finished.

Since [Charged Blade](/moveset/normal-attack#charged-blade) is treated as [Weapon Action](/moveset/weapon-action#wa123) Stage 1 you will also be able to counter with it which makes it pretty safe to execute.

You will want to use the variation chaining into the [Weapon Action](/moveset/weapon-action#wa123) during down phases in which you are not able to fit [sFS12>WA123](/moveset/animation-canceling#sfs12wa123) or during active phases whenever possible.

:::warning
Timing [Charged Blade](/moveset/normal-attack#charged-blade) correctly is important for the performance of this option, keep in mind that if the input was made too early you won't be able to access [Charged Blade](/moveset/normal-attack#charged-blade) anymore. The following table assumes 0.05 seconds of input delay.
:::

<MovesetTable tableId="RRC3" args={(moveset) => [moveset.calcProp(moveset.sRR,moveset.ChargedBladePA),'sRR>Charged Blade', moveset.calcProp(moveset.sRR,moveset.Cancel(moveset.ChargedBladePA,'WA'),moveset.WA2,moveset.WA3), 'sRR>Charged Blade>WA23', moveset.calcProp(moveset.mRR,moveset.ChargedBladePA),'mRR>Charged Blade', moveset.calcProp(moveset.mRR,moveset.Cancel(moveset.ChargedBladePA,'WA'),moveset.WA2,moveset.WA3), 'mRR>Charged Blade>WA23']} />

</TabItem>
</Tabs>
