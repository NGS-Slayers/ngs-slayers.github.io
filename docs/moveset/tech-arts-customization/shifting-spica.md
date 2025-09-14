---
title: "Shifting Spica"
description: "Explaining Tech Arts Customization for Shifting Spica"
---

# <img src="/PA/38px-NGSUIPhotonArtShiftingSpica.png" alt="icon" className="heading-icon"/> Shifting Spica
With the patch from 12/4/2024, the ability to customize the PA [Shifting Spica](/moveset/photon-arts#sss) was added.

<Tabs>
<TabItem value="c1" label="Customization 1">

* Potency of Slug Shot fired immediately after +7%, adds Unleashed Rage charge effect to that attack and increases PP Cost by 20/17/14/12/10/9/8/7/6/5% depending on the level

Option 1 is a decent buff to Slug Shot considering it can now build Unleashed Rage. 

<MovesetTable tableId="SSC1" args={(moveset) => [moveset.calcProp(moveset.sSS,moveset.SlugShot),'sSS>Slug Shot', moveset.calcProp(moveset.sSS,moveset.SlugShotSSC1),'sSSC1>Slug Shot', moveset.calcProp(moveset.mSS,moveset.SlugShot),'mSS>Slug Shot', moveset.calcProp(moveset.mSS,moveset.SlugShotSSC1),'mSSC1>Slug Shot']} />

</TabItem>
<TabItem value="c2" label="Customization 2 (Recommended)" default>

* Increases attack speed for [Move Arts Shifting Spica](/moveset/photon-arts#mss), reduces potency by 11% and increases PP Cost by 20/17/14/12/10/9/8/7/6/5% depending on the level

Option 2 results in a slight increase in performance and utility in form of quicker gap closing.

<MovesetTable tableId="SSC2" args={(moveset) => [moveset.mSS,'regular mSS', moveset.mSSC2,'Custom 2 mSS']} />

</TabItem>
<TabItem value="c3" label="Customization 3">

* Increases range for [Stay Arts Shifting Spica](/moveset/photon-arts#sss) and increases PP Cost by 15/12/9/7/5/4/3/2/1/0% depending on the level

Option 3 can come in handy for some situations but it also gets rid of the biggest advantage that the PA brings to the table: precision.

</TabItem>
</Tabs>