```{raw} html
<noscript><div style="padding-top: 1.9em; position: fixed;top: 0;left: 0;width: 100%;z-index: 101;text-align: center;font-weight: bold;color: #FFF;background-color: #AE0000;padding: 5px 0 5px 0;"><p>
  Please activate JavaScript, this page does not work properly without it enabled.
</p></div></noscript>
```

# PA Customization
Deep-diving on Slayers Tech Arts Customizations.

```{warning}
This is a very early look at the newly added feature and some statements might be subject to change.
```

## ![icon](_static/PA/38px-NGSUIPhotonArtWavingRigel.png) [Waving Rigel](./moveset.md#waving-rigel)
With the patch from 12/06/2023 the ability to customize Photon Arts and Techniques was added. Slayers can only customize the {term}`PA` [Waving Rigel](#mwr) for now.

The game provides us with following options for our first customizable {term}`PA`:

### Customization 1 (Recommended)
* Increases Gauge Generation by 50%, increases {term}`PP` cost by 20/17/14/12/10/9/8/7/6/5% depending on the level

Option 1 seems very risk free as it only increases {term}`PP` cost per use of [Waving Rigel](./moveset.md#waving-rigel) by 0.9 {term}`PP` at the highest level of Customization. This option also applies to both Variations of the {term}`PA`.

However Slayer does not really struggle with Focus generation while fighting Bosses. So this option is rather nice to have than a must have but the value of this option increases for mobbing scenarios.

### Customization 2
* Increases attack range and upward movement when using [mWR](#mwr), increases {term}`PP` Cost by 15/12/9/7/5/4/3/2/1/0% depending on the level

Option 2 might have some use for mobbing but other than that, I would highly advise against it. This option will make it way harder to chain [mWR](#mwr) together, could cause some of the {term}`PA` to miss and decreases {term}`DPS` of using [sWR](#swr) right after due to the additional time traveling.

### Customization 3
* Shockwave activates 3 times and potency is decreased by 65% when using [sWR](#swr), {term}`PP` Cost increased by 30/26/22/18/15/14/13/12/11/10% depending on the level

Option 3 changes [sWR](#swr) to spawn 3 shock-waves over time, each with 45.5 Potency. This results in a total Potency increase of 6.5 Potency.

The first shockwave occurs at 0.05 seconds just like the regular version and then 0.5 for every next shockwave. (0.05 -> 0.55 -> 1.05)

These lingering shock-waves can not be overlapped which means that using this version of [sWR](#swr) again before these hit timings have passed will cancel the remaining shock-waves.

All that being said this option could be useful for when not planning to repeatedly using [sWR](#swr) e.g using [PB](./moveset.md#photon-blast), [ODF](./moveset.md#unleashed-rage), [UR](./moveset.md#gunblade-focus-overdrive) or [Step Counter WA](#stepc-wa) right after.

Keep in mind that another risk is that those shock-waves can miss entirely or miss weak points. When one of those shock-waves misses the weak-point then the DPS already breaks even with the regular version, however Option 3 is still gonna have slightly higher Focus, Rage, PB and Down accumulation.

This option is gonna excel at minor optimization levels in specific fights.

```{important}
* {term}`DPS` values are rounded in calculations.

* {term}`DPS` values of {term}`PA`s include [RB](./skill-tree.md#relentless-blade), [RBR](./skill-tree.md#relentless-blade-reinforce) and Class specific Critical Hit Rate multipliers.

* Focus Multiplier against Bosses is 5 and is included in the Focus per second calculation

* Rage Multiplier against Bosses is 3 and is included in the Rage per second calculation

More accurate and up-to-date information can be found in [Frame Data](./moveset.md#frame-data).
```

```{warning}
The DPS showcased for Custom 3 sWR in the following table is not accurate or could be referred to as fake DPS since the remaining two shock-waves happen after the 0.43 seconds have already passed!
```

```{raw} html
<div id="sWR"></div>
<script>
document.addEventListener('DOMContentLoaded', function() {
  genTable("sWR", sWR,'regular sWR', sWRC3,'Custom 3 sWR');
});
</script>
```

```{raw} html
<meta content="Slayer PA Customizations" property="og:title">
<meta content="Analyzing PA Customization of the Slayer Class" property="og:description">
<meta content="https://ngs-slayers.github.io/glossary.html" property="og:url">
<meta content="https://ngs-slayers.github.io/_static/class/UINGSClassSl.png" property="og:image">
<meta content="#48AC9C" data-react-helmet="true" name="theme-color">
```