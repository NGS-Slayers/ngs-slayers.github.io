function replaceStringsInHTML(replaceDict) {
    const traverseAndReplace = (node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        var content = node.textContent;
        for (const searchStr in replaceDict) {
          const replaceStr = replaceDict[searchStr];
          const regex = new RegExp(searchStr, 'g'); // Use 'g' flag for global replacement
          content = content.replace(regex, replaceStr);
        }
        node.textContent = content;
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        for (const childNode of node.childNodes) {
          traverseAndReplace(childNode);
        }
      }
    };
  
    traverseAndReplace(document.body);
  }

// Multipliers
var BossMultiplierFocus = 5;
var BossMultiplierRage = 3;
var MultiplierF5 = 1.05*1.06;
var MultiplierOD = 1.1*1.06;
var MultiplierRBR = 5;
var MultiplierSRHS = 1.3;
var MultiplierBC = 1.026;
// Relentless Blade
var RB_Pot = 25;
var RB_PP = 3;
var RB_Focus = 0.5;
var RB_Rage = 0.5;
var RB_NoRBR_Pot = Math.floor(RB_Pot/MultiplierRBR);
var RB_Strong_Pot = 75;
var RB_Strong_PP = 3;
var RB_Strong_Focus = 2.5;
var RB_Strong_Rage = 3;
var RB_Strong_NoRBR_Pot = Math.floor(RB_Strong_Pot/MultiplierRBR);
// Cancel Timings
var WA_Cancel_sFS12_Time = 0.25;
var WA_Cancel_StepCWA_Time = 0.2;
var Step_Cancel_StepCWA_Time = 0.2;
var WA_Cancel_BCWA_Time = 0.25;
var Step_Cancel_sRR_Time = 0.25;
var Step_Cancel_mWR_Time = 0.25;
var Step_Cancel_sWR_Time = 0.25;
// Stay Shifting Spica
var sSS_Pot = '190+'+String(RB_Pot);
var sSS_Time = 0.6;
var sSS_PP = '14-'+String(RB_PP);
var sSS_Focus = '2.6+'+String(RB_Focus);
var sSS_FPS = (eval(sSS_Focus)*BossMultiplierFocus)/sSS_Time;
var sSS_Rage = '0.2+'+String(RB_Rage);
var sSS_RPS = (eval(sSS_Rage)*BossMultiplierRage)/sSS_Time;
var sSS_DPS = eval(sSS_Pot)/sSS_Time;
var sSS_F0 = Math.round(sSS_DPS);
var sSS_F5 = Math.round(sSS_DPS*MultiplierF5);
var sSS_OD = Math.round(sSS_DPS*MultiplierOD);
// Move Shifting Spica
var mSS_Pot = '371+'+String(RB_Pot);
var mSS_Time = 1.14;
var mSS_PP = '14-'+String(RB_PP);
var mSS_Focus = '5+'+String(RB_Focus);
var mSS_FPS = (eval(mSS_Focus)*BossMultiplierFocus)/mSS_Time;
var mSS_Rage = '1.5+'+String(RB_Rage);
var mSS_RPS = (eval(mSS_Rage)*BossMultiplierRage)/mSS_Time;
var mSS_DPS = eval(mSS_Pot)/mSS_Time;
var mSS_F0 = Math.round(mSS_DPS);
var mSS_F5 = Math.round(mSS_DPS*MultiplierF5);
var mSS_OD = Math.round(mSS_DPS*MultiplierOD);
// Stay Flowing Sirius1
var sFS1_Pot = '400+'+String(RB_Pot);
var sFS1_Time = 1.25;
var sFS1_PP = '25-'+String(RB_PP);
var sFS1_Focus = '5.1+'+String(RB_Focus);
var sFS1_FPS = (eval(sFS1_Focus)*BossMultiplierFocus)/sFS1_Time;
var sFS1_Rage = '1.5+'+String(RB_Rage);
var sFS1_RPS = (eval(sFS1_Rage)*BossMultiplierRage)/sFS1_Time;
var sFS1_DPS = eval(sFS1_Pot)/sFS1_Time;
var sFS1_F0 = Math.round(sFS1_DPS);
var sFS1_F5 = Math.round(sFS1_DPS*MultiplierF5);
var sFS1_OD = Math.round(sFS1_DPS*MultiplierOD);
// Stay Flowing Sirius12
var sFS12_Pot = '1080+'+String(RB_Pot)+'+'+String(RB_Strong_Pot);
var sFS12_Time = 3.1;
var sFS12_PP = '25-'+String(RB_PP)+'-'+String(RB_Strong_PP);
var sFS12_Focus = '14.2+'+String(RB_Focus)+'+'+String(RB_Strong_Focus);
var sFS12_FPS = (eval(sFS12_Focus)*BossMultiplierFocus)/sFS12_Time;
var sFS12_Rage = '7.5+'+String(RB_Rage)+'+'+String(RB_Strong_Rage);
var sFS12_RPS = (eval(sFS12_Rage)*BossMultiplierRage)/sFS12_Time;
var sFS12_DPS = eval(sFS12_Pot)/sFS12_Time;
var sFS12_F0 = Math.round(sFS12_DPS);
var sFS12_F5 = Math.round(sFS12_DPS*MultiplierF5);
var sFS12_OD = Math.round(sFS12_DPS*MultiplierOD);
// Move Flowing Sirius
var mFS_Pot = '302+'+String(RB_Pot);
var mFS_Time = 0.93;
var mFS_PP = '25-'+String(RB_PP);
var mFS_Focus = '4.6+'+String(RB_Focus);
var mFS_FPS = (eval(mFS_Focus)*BossMultiplierFocus)/mFS_Time;
var mFS_Rage = '1.5+'+String(RB_Rage);
var mFS_RPS = (eval(mFS_Rage)*BossMultiplierRage)/mFS_Time;
var mFS_DPS = eval(mFS_Pot)/mFS_Time;
var mFS_F0 = Math.round(mFS_DPS);
var mFS_F5 = Math.round(mFS_DPS*MultiplierF5);
var mFS_OD = Math.round(mFS_DPS*MultiplierOD);
// Stay Reaping Regulus
var sRR_Pot = '210+'+String(RB_Pot);
var sRR_Time = 0.67;
var sRR_PP = '17-'+String(RB_PP);
var sRR_Focus = '4+'+String(RB_Focus);
var sRR_FPS = (eval(sRR_Focus)*BossMultiplierFocus)/sRR_Time;
var sRR_Rage = '4+'+String(RB_Rage);
var sRR_RPS = (eval(sRR_Rage)*BossMultiplierRage)/sRR_Time;
var sRR_DPS = eval(sRR_Pot)/sRR_Time;
var sRR_F0 = Math.round(sRR_DPS);
var sRR_F5 = Math.round(sRR_DPS*MultiplierF5);
var sRR_OD = Math.round(sRR_DPS*MultiplierOD);
// Move Reaping Regulus
var mRR_Pot = '273+'+String(RB_Pot);
var mRR_Time = 0.87;
var mRR_PP = '17-'+String(RB_PP);
var mRR_Focus = '4+'+String(RB_Focus);
var mRR_FPS = (eval(mRR_Focus)*BossMultiplierFocus)/mRR_Time;
var mRR_Rage = '1.5+'+String(RB_Rage);
var mRR_RPS = (eval(mRR_Rage)*BossMultiplierRage)/mRR_Time;
var mRR_DPS = eval(mRR_Pot)/mRR_Time;
var mRR_F0 = Math.round(mRR_DPS);
var mRR_F5 = Math.round(mRR_DPS*MultiplierF5);
var mRR_OD = Math.round(mRR_DPS*MultiplierOD);
// Stay Waving Riegel
var sWR_Pot = '130+'+String(RB_Pot);
var sWR_Time = 0.44;
var sWR_PP = '18-'+String(RB_PP);
var sWR_Focus = '1.5+'+String(RB_Focus);
var sWR_FPS = (eval(sWR_Focus)*BossMultiplierFocus)/sWR_Time;
var sWR_Rage = '0.4+'+String(RB_Rage);
var sWR_RPS = (eval(sWR_Rage)*BossMultiplierRage)/sWR_Time;
var sWR_DPS = eval(sWR_Pot)/sWR_Time;
var sWR_F0 = Math.round(sWR_DPS);
var sWR_F5 = Math.round(sWR_DPS*MultiplierF5);
var sWR_OD = Math.round(sWR_DPS*MultiplierOD);
// Move Waving Riegel
var mWR_Pot = '332+'+String(RB_Pot);
var mWR_Time = 1;
var mWR_PP = '18-'+String(RB_PP);
var mWR_Focus = '5.1+'+String(RB_Focus);
var mWR_FPS = (eval(mWR_Focus)*BossMultiplierFocus)/mWR_Time;
var mWR_Rage = '4.5+'+String(RB_Rage);
var mWR_RPS = (eval(mWR_Rage)*BossMultiplierRage)/mWR_Time;
var mWR_DPS = eval(mWR_Pot)/mWR_Time;
var mWR_F0 = Math.round(mWR_DPS);
var mWR_F5 = Math.round(mWR_DPS*MultiplierF5);
var mWR_OD = Math.round(mWR_DPS*MultiplierOD);
// Slug Shot
var SlugShot_Pot = 170;
var SlugShot_Time = 0.51;
var SlugShot_PP = 10;
var SlugShot_Focus = 2.5;
var SlugShot_FPS = (SlugShot_Focus*BossMultiplierFocus)/SlugShot_Time;
var SlugShot_DPS = SlugShot_Pot/SlugShot_Time;
var SlugShot_F0 = Math.round(SlugShot_DPS);
var SlugShot_F5 = Math.round(SlugShot_DPS*MultiplierF5);
var SlugShot_OD = Math.round(SlugShot_DPS*MultiplierOD);
// Normal Attack Stage 1-3
var NA123_Pot = Math.floor(250*MultiplierSRHS);
var NA123_Time = 1.15;
var NA123_PP = 19;
var NA123_Focus = 6;
var NA123_FPS = (NA123_Focus*BossMultiplierFocus)/NA123_Time;
var NA123_DPS = NA123_Pot/NA123_Time;
var NA123_F0 = Math.round(NA123_DPS);
var NA123_F5 = Math.round(NA123_DPS*MultiplierF5);
var NA123_OD = Math.round(NA123_DPS*MultiplierOD);
var NA123_NoSRHS_Pot = Math.floor(NA123_Pot/MultiplierSRHS);
var NA123_NoSRHS_DPS = (NA123_Pot/NA123_Time)/MultiplierSRHS;
var NA123_NoSRHS_F0 = Math.round(NA123_NoSRHS_DPS);
var NA123_NoSRHS_F5 = Math.round(NA123_NoSRHS_DPS*MultiplierF5);
var NA123_NoSRHS_OD = Math.round(NA123_NoSRHS_DPS*MultiplierOD);
// Charged Normal Attack
var cNA_Pot = Math.floor(305*MultiplierSRHS);
var cNA_Time = 1.45;
var cNA_PP = 21;
var cNA_Focus = 5.2;
var cNA_FPS = (cNA_Focus*BossMultiplierFocus)/cNA_Time;
var cNA_DPS = cNA_Pot/cNA_Time;
var cNA_F0 = Math.round(cNA_DPS);
var cNA_F5 = Math.round(cNA_DPS*MultiplierF5);
var cNA_OD = Math.round(cNA_DPS*MultiplierOD);
var cNA_NoSRHS_Pot = Math.floor(cNA_Pot/MultiplierSRHS);
var cNA_NoSRHS_DPS = (cNA_Pot/cNA_Time)/MultiplierSRHS;
var cNA_NoSRHS_F0 = Math.round(cNA_NoSRHS_DPS);
var cNA_NoSRHS_F5 = Math.round(cNA_NoSRHS_DPS*MultiplierF5);
var cNA_NoSRHS_OD = Math.round(cNA_NoSRHS_DPS*MultiplierOD);
// Supercharged Normal Attack
var sNA_Pot = Math.floor(550*MultiplierSRHS);
var sNA_Time = 2.6;
var sNA_PP = 20;
var sNA_Focus = 13;
var sNA_FPS = (sNA_Focus*BossMultiplierFocus)/sNA_Time;
var sNA_DPS = sNA_Pot/sNA_Time;
var sNA_F0 = Math.round(sNA_DPS);
var sNA_F5 = Math.round(sNA_DPS*MultiplierF5);
var sNA_OD = Math.round(sNA_DPS*MultiplierOD);
var sNA_NoSRHS_Pot = Math.floor(sNA_Pot/MultiplierSRHS);
var sNA_NoSRHS_DPS = (sNA_Pot/sNA_Time)/MultiplierSRHS;
var sNA_NoSRHS_F0 = Math.round(sNA_NoSRHS_DPS);
var sNA_NoSRHS_F5 = Math.round(sNA_NoSRHS_DPS*MultiplierF5);
var sNA_NoSRHS_OD = Math.round(sNA_NoSRHS_DPS*MultiplierOD);
// Charged Blade
var ChargedBlade_Pot = 220;
var ChargedBlade_Time = 0.5;
var ChargedBlade_PP = 7;
var ChargedBlade_Focus = 4;
var ChargedBlade_FPS = (ChargedBlade_Focus*BossMultiplierFocus)/ChargedBlade_Time;
var ChargedBlade_DPS = ChargedBlade_Pot/ChargedBlade_Time;
var ChargedBlade_F0 = Math.round(ChargedBlade_DPS);
var ChargedBlade_F5 = Math.round(ChargedBlade_DPS*MultiplierF5);
var ChargedBlade_OD = Math.round(ChargedBlade_DPS*MultiplierOD);
var ChargedBlade_Table1_Pot = Math.floor(ChargedBlade_Pot+cNA_Pot);
var ChargedBlade_Table1_Time = ChargedBlade_Time+cNA_Time;
var ChargedBlade_Table1_PP = ChargedBlade_PP+cNA_PP;
var ChargedBlade_Table1_Focus = ChargedBlade_Focus+cNA_Focus;
var ChargedBlade_Table1_FPS = (ChargedBlade_Table1_Focus*5)/ChargedBlade_Table1_Time;
var ChargedBlade_Table1_DPS = ChargedBlade_Table1_Pot/ChargedBlade_Table1_Time;
var ChargedBlade_Table1_F0 = Math.round(ChargedBlade_Table1_DPS);
var ChargedBlade_Table1_F5 = Math.round(ChargedBlade_Table1_DPS*MultiplierF5);
var ChargedBlade_Table1_OD = Math.round(ChargedBlade_Table1_DPS*MultiplierOD);
var ChargedBlade_Table2_Pot = Math.floor(ChargedBlade_Pot+sNA_Pot);
var ChargedBlade_Table2_Time = ChargedBlade_Time+sNA_Time;
var ChargedBlade_Table2_PP = ChargedBlade_PP+sNA_PP;
var ChargedBlade_Table2_Focus = ChargedBlade_Focus+sNA_Focus;
var ChargedBlade_Table2_FPS = (ChargedBlade_Table2_Focus*5)/ChargedBlade_Table2_Time;
var ChargedBlade_Table2_DPS = ChargedBlade_Table2_Pot/ChargedBlade_Table2_Time;
var ChargedBlade_Table2_F0 = Math.round(ChargedBlade_Table2_DPS);
var ChargedBlade_Table2_F5 = Math.round(ChargedBlade_Table2_DPS*MultiplierF5);
var ChargedBlade_Table2_OD = Math.round(ChargedBlade_Table2_DPS*MultiplierOD);
// Weapon Action Stage 1
var WA1_Pot = 50;
var WA1_Time = 0.37;
var WA1_PP = 2;
var WA1_Focus = 1;
var WA1_FPS = (WA1_Focus*BossMultiplierFocus)/WA1_Time;
var WA1_DPS = WA1_Pot/WA123_Time;
var WA1_F0 = Math.round(WA1_DPS);
var WA1_F5 = Math.round(WA1_DPS*MultiplierF5);
var WA1_OD = Math.round(WA1_DPS*MultiplierOD);
// Weapon Action Stage 2
var WA2_Pot = 80;
var WA2_Time = 0.23;
var WA2_PP = 2;
var WA2_Focus = 2;
var WA2_FPS = (WA2_Focus*BossMultiplierFocus)/WA2_Time;
var WA2_DPS = WA2_Pot/WA2_Time;
var WA2_F0 = Math.round(WA2_DPS);
var WA2_F5 = Math.round(WA2_DPS*MultiplierF5);
var WA2_OD = Math.round(WA2_DPS*MultiplierOD);
// Weapon Action Stage 3
var WA3_Pot = 200;
var WA3_Time = 0.433333333333;
var WA3_PP = 4;
var WA3_Focus = 3;
var WA3_FPS = (WA3_Focus*BossMultiplierFocus)/WA3_Time;
var WA3_DPS = WA3_Pot/WA3_Time;
var WA3_F0 = Math.round(WA3_DPS);
var WA3_F5 = Math.round(WA3_DPS*MultiplierF5);
var WA3_OD = Math.round(WA3_DPS*MultiplierOD);
// Weapon Action Stage 1-3
var WA123_Pot = 330;
var WA123_Time = 1.03333333333;
var WA123_PP = 8;
var WA123_Focus = 6;
var WA123_FPS = (WA123_Focus*BossMultiplierFocus)/WA123_Time;
var WA123_DPS = WA123_Pot/WA123_Time;
var WA123_F0 = Math.round(WA123_DPS);
var WA123_F5 = Math.round(WA123_DPS*MultiplierF5);
var WA123_OD = Math.round(WA123_DPS*MultiplierOD);
// Move Weapon Action
var mWA_Pot = 70;
var mWA_Time = 0.47;
var mWA_PP = 3;
var mWA_Focus = 2.5;
var mWA_FPS = (mWA_Focus*BossMultiplierFocus)/mWA_Time;
var mWA_DPS = mWA_Pot/mWA_Time;
var mWA_F0 = Math.round(mWA_DPS);
var mWA_F5 = Math.round(mWA_DPS*MultiplierF5);
var mWA_OD = Math.round(mWA_DPS*MultiplierOD);
// Blade Counter Normal Attack
var BCNA_Pot = 400;
var BCNA_Time = 0.4;
var BCNA_PP = 11;
var BCNA_Focus = 4;
var BCNA_FPS = (BCNA_Focus*BossMultiplierFocus)/BCNA_Time;
var BCNA_DPS = BCNA_Pot/BCNA_Time;
var BCNA_F0 = Math.round(BCNA_DPS*MultiplierBC);
var BCNA_F5 = Math.round(BCNA_DPS*MultiplierF5*MultiplierBC);
var BCNA_OD = Math.round(BCNA_DPS*MultiplierOD*MultiplierBC);
// Blade Counter Normal Attack Weapon Action Stage 1
var BCNA_Table1_Pot = BCNA_Pot+WA1_Pot;
var BCNA_Table1_Time = BCNA_Time+WA1_Time;
var BCNA_Table1_PP = BCNA_PP+WA1_PP;
var BCNA_Table1_Focus = BCNA_Focus+WA1_Focus;
var BCNA_Table1_FPS = (BCNA_Table1_Focus*BossMultiplierFocus)/BCNA_Table1_Time;
var BCNA_Table1_DPS = BCNA_Table1_Pot/BCNA_Table1_Time;
var BCNA_Table1_F0 = Math.round(BCNA_Table1_DPS*MultiplierBC);
var BCNA_Table1_F5 = Math.round(BCNA_Table1_DPS*MultiplierF5*MultiplierBC);
var BCNA_Table1_OD = Math.round(BCNA_Table1_DPS*MultiplierOD*MultiplierBC);
// Blade Counter Normal Attack Weapon Action Stage 2
var BCNA_Table2_Pot = BCNA_Pot+WA2_Pot;
var BCNA_Table2_Time = BCNA_Time+WA2_Time;
var BCNA_Table2_PP = BCNA_PP+WA2_PP;
var BCNA_Table2_Focus = BCNA_Focus+WA2_Focus;
var BCNA_Table2_FPS = (BCNA_Table2_Focus*BossMultiplierFocus)/BCNA_Table2_Time;
var BCNA_Table2_DPS = BCNA_Table2_Pot/BCNA_Table2_Time;
var BCNA_Table2_F0 = Math.round(BCNA_Table2_DPS*MultiplierBC);
var BCNA_Table2_F5 = Math.round(BCNA_Table2_DPS*MultiplierF5*MultiplierBC);
var BCNA_Table2_OD = Math.round(BCNA_Table2_DPS*MultiplierOD*MultiplierBC);
// Blade Counter Normal Attack Weapon Action Stage 3
var BCNA_Table3_Pot = BCNA_Pot+WA3_Pot;
var BCNA_Table3_Time = BCNA_Time+WA3_Time;
var BCNA_Table3_PP = BCNA_PP+WA3_PP;
var BCNA_Table3_Focus = BCNA_Focus+WA3_Focus;
var BCNA_Table3_FPS = (BCNA_Table3_Focus*BossMultiplierFocus)/BCNA_Table3_Time;
var BCNA_Table3_DPS = BCNA_Table3_Pot/BCNA_Table3_Time;
var BCNA_Table3_F0 = Math.round(BCNA_Table3_DPS*MultiplierBC);
var BCNA_Table3_F5 = Math.round(BCNA_Table3_DPS*MultiplierF5*MultiplierBC);
var BCNA_Table3_OD = Math.round(BCNA_Table3_DPS*MultiplierOD*MultiplierBC);
// Blade Counter Weapon Action
var BCWA_Pot = 960;
var BCWA_Time = 1.8;
var BCWA_PP = 6;
var BCWA_Focus = 9;
var BCWA_FPS = (BCWA_Focus*BossMultiplierFocus)/BCWA_Time;
var BCWA_DPS = BCWA_Pot/BCWA_Time;
var BCWA_F0 = Math.round(BCWA_DPS*MultiplierBC);
var BCWA_F5 = Math.round(BCWA_DPS*MultiplierF5*MultiplierBC);
var BCWA_OD = Math.round(BCWA_DPS*MultiplierOD*MultiplierBC);
// Blade Counter Weapon Action Stage 1
var BCWA_Table1_Pot = BCWA_Pot+WA1_Pot;
var BCWA_Table1_Time = BCWA_Time+WA1_Time;
var BCWA_Table1_PP = BCWA_PP+WA1_PP;
var BCWA_Table1_Focus = BCWA_Focus+WA1_Focus;
var BCWA_Table1_FPS = (BCWA_Table1_Focus*BossMultiplierFocus)/BCWA_Table1_Time;
var BCWA_Table1_DPS = BCWA_Table1_Pot/BCWA_Table1_Time;
var BCWA_Table1_F0 = Math.round(BCWA_Table1_DPS*MultiplierBC);
var BCWA_Table1_F5 = Math.round(BCWA_Table1_DPS*MultiplierF5*MultiplierBC);
var BCWA_Table1_OD = Math.round(BCWA_Table1_DPS*MultiplierOD*MultiplierBC);
// Blade Counter Weapon Action Stage 2
var BCWA_Table2_Pot = BCWA_Pot+WA2_Pot;
var BCWA_Table2_Time = BCWA_Time+WA2_Time;
var BCWA_Table2_PP = BCWA_PP+WA2_PP;
var BCWA_Table2_Focus = BCWA_Focus+WA2_Focus;
var BCWA_Table2_FPS = (BCWA_Table2_Focus*BossMultiplierFocus)/BCWA_Table2_Time;
var BCWA_Table2_DPS = BCWA_Table2_Pot/BCWA_Table2_Time;
var BCWA_Table2_F0 = Math.round(BCWA_Table2_DPS*MultiplierBC);
var BCWA_Table2_F5 = Math.round(BCWA_Table2_DPS*MultiplierF5*MultiplierBC);
var BCWA_Table2_OD = Math.round(BCWA_Table2_DPS*MultiplierOD*MultiplierBC);
// Blade Counter Weapon Action Stage 3
var BCWA_Table3_Pot = BCWA_Pot+WA3_Pot;
var BCWA_Table3_Time = BCWA_Time+WA3_Time;
var BCWA_Table3_PP = BCWA_PP+WA3_PP;
var BCWA_Table3_Focus = BCWA_Focus+WA3_Focus;
var BCWA_Table3_FPS = (BCWA_Table3_Focus*BossMultiplierFocus)/BCWA_Table3_Time;
var BCWA_Table3_DPS = BCWA_Table3_Pot/BCWA_Table3_Time;
var BCWA_Table3_F0 = Math.round(BCWA_Table3_DPS*MultiplierBC);
var BCWA_Table3_F5 = Math.round(BCWA_Table3_DPS*MultiplierF5*MultiplierBC);
var BCWA_Table3_OD = Math.round(BCWA_Table3_DPS*MultiplierOD*MultiplierBC);
// Mobile Blade Counter Normal Attack
var BCNA_Mobile_Pot = 420+mWA_Pot;
var BCNA_Mobile_Time = 0.867;
var BCNA_Mobile_PP = 13;
var BCNA_Mobile_Focus = 4;
var BCNA_Mobile_FPS = (BCNA_Mobile_Focus*BossMultiplierFocus)/BCNA_Mobile_Time;
var BCNA_Mobile_DPS = BCNA_Mobile_Pot/BCNA_Mobile_Time;
var BCNA_Mobile_F0 = Math.round(BCNA_Mobile_DPS);
var BCNA_Mobile_F5 = Math.round(BCNA_Mobile_DPS*MultiplierF5);
var BCNA_Mobile_OD = Math.round(BCNA_Mobile_DPS*MultiplierOD);
// Mobile Blade Counter Weapon Action
var BCWA_Mobile_Pot = 960+mWA_Pot;
var BCWA_Mobile_Time = 2.267;
var BCWA_Mobile_PP = 6;
var BCWA_Mobile_Focus = 9;
var BCWA_Mobile_FPS = (BCWA_Mobile_Focus*BossMultiplierFocus)/BCWA_Mobile_Time;
var BCWA_Mobile_DPS = BCWA_Mobile_Pot/BCWA_Mobile_Time;
var BCWA_Mobile_F0 = Math.round(BCWA_Mobile_DPS);
var BCWA_Mobile_F5 = Math.round(BCWA_Mobile_DPS*MultiplierF5);
var BCWA_Mobile_OD = Math.round(BCWA_Mobile_DPS*MultiplierOD);
// Step Counter Normal Attack
var StepCNA_Pot = 380;
var StepCNA_Time = 0.70;
var StepCNA_PP = 12;
var StepCNA_Focus = 4;
var StepCNA_FPS = (StepCNA_Focus*BossMultiplierFocus)/StepCNA_Time;
var StepCNA_DPS = StepCNA_Pot/StepCNA_Time;
var StepCNA_F0 = Math.round(StepCNA_DPS);
var StepCNA_F5 = Math.round(StepCNA_DPS*MultiplierF5);
var StepCNA_OD = Math.round(StepCNA_DPS*MultiplierOD);
// Step Counter Weapon Action
var StepCWA_Pot = 550;
var StepCWA_Time = 1.02;
var StepCWA_PP = 4;
var StepCWA_Focus = 18;
var StepCWA_FPS = (StepCWA_Focus*BossMultiplierFocus)/StepCWA_Time;
var StepCWA_Rage = 3;
var StepCWA_RPS = (StepCWA_Rage*BossMultiplierRage)/StepCWA_Time;
var StepCWA_DPS = StepCWA_Pot/StepCWA_Time;
var StepCWA_F0 = Math.round(StepCWA_DPS);
var StepCWA_F5 = Math.round(StepCWA_DPS*MultiplierF5);
var StepCWA_OD = Math.round(StepCWA_DPS*MultiplierOD);
// Photon Blast
var PB_Pot = 4450;
var PB_Time = 5.60;
var PB_Focus = 2530;
var PB_FPS = (PB_Focus*BossMultiplierFocus)/PB_Time;
var PB_DPS = PB_Pot/PB_Time;
var PB_F0 = Math.round(PB_DPS);
var PB_F5 = Math.round(PB_DPS*MultiplierF5);
var PB_OD = Math.round(PB_DPS*MultiplierOD);
// Unleashed Rage
var UR_Pot = 1000;
var UR_Time = 1.27;
var UR_PP = 20;
var UR_Focus = 22;
var UR_FPS = (UR_Focus*BossMultiplierFocus)/UR_Time;
var UR_DPS = UR_Pot/UR_Time;
var UR_F0 = Math.round(UR_DPS);
var UR_F5 = Math.round(UR_DPS*MultiplierF5);
var UR_OD = Math.round(UR_DPS*MultiplierOD);
// Overdrive Finisher
var ODF_Pot = 2695;
var ODF_Time = 4.20;
var ODF_DPS = ODF_Pot/ODF_Time;
var ODF_OD = Math.round(ODF_DPS*MultiplierOD);
// Stay Flowing Sirus12 -> WA123
var sFS12_WA123_Cancel_Pot = eval(sFS12_Pot)+WA123_Pot;
var sFS12_WA123_Cancel_Time = sFS12_Time-WA_Cancel_sFS12_Time+WA123_Time;
var sFS12_WA123_Cancel_PP = eval(sFS12_PP)-WA123_PP;
var sFS12_WA123_Cancel_Focus = eval(sFS12_Focus)+WA123_Focus;
var sFS12_WA123_Cancel_FPS = (eval(sFS12_WA123_Cancel_Focus)*BossMultiplierFocus)/sFS12_WA123_Cancel_Time;
var sFS12_WA123_Cancel_Rage = eval(sFS12_Rage);
var sFS12_WA123_Cancel_RPS = (eval(sFS12_WA123_Cancel_Rage)*BossMultiplierRage)/sFS12_WA123_Cancel_Time;
var sFS12_WA123_Cancel_DPS = eval(sFS12_WA123_Cancel_Pot)/sFS12_WA123_Cancel_Time;
var sFS12_WA123_Cancel_F0 = Math.round(sFS12_WA123_Cancel_DPS);
var sFS12_WA123_Cancel_F5 = Math.round(sFS12_WA123_Cancel_DPS*MultiplierF5);
var sFS12_WA123_Cancel_OD = Math.round(sFS12_WA123_Cancel_DPS*MultiplierF5);
// Step Counter Weapon Action -> Chain
var StepCWA_Chain_Pot = 550;
var StepCWA_Chain_Time = StepCWA_Time-Step_Cancel_StepCWA_Time;
var StepCWA_Chain_PP = StepCWA_PP;
var StepCWA_Chain_Focus = StepCWA_Focus;
var StepCWA_Chain_FPS = (StepCWA_Chain_Focus*BossMultiplierFocus)/StepCWA_Chain_Time;
var StepCWA_Chain_Rage = StepCWA_Rage;
var StepCWA_Chain_RPS = (StepCWA_Chain_Rage*BossMultiplierRage)/StepCWA_Chain_Time;
var StepCWA_Chain_DPS = StepCWA_Chain_Pot/StepCWA_Chain_Time;
var StepCWA_Chain_F0 = Math.round(StepCWA_Chain_DPS);
var StepCWA_Chain_F5 = Math.round(StepCWA_Chain_DPS*MultiplierF5);
var StepCWA_Chain_OD = Math.round(StepCWA_Chain_DPS*MultiplierF5);
// Step Counter Weapon Action -> WA123
var StepCWA_WA123_Cancel_Pot = StepCWA_Pot+WA123_Pot;
var StepCWA_WA123_Cancel_Time = StepCWA_Time-WA_Cancel_StepCWA_Time+WA123_Time;
var StepCWA_WA123_Cancel_PP = StepCWA_PP+WA123_PP;
var StepCWA_WA123_Cancel_Focus = StepCWA_Focus+WA123_Focus;
var StepCWA_WA123_Cancel_FPS = (StepCWA_WA123_Cancel_Focus*BossMultiplierFocus)/StepCWA_WA123_Cancel_Time;
var StepCWA_WA123_Cancel_Rage = StepCWA_Rage;
var StepCWA_WA123_Cancel_RPS = (StepCWA_WA123_Cancel_Rage*BossMultiplierRage)/StepCWA_WA123_Cancel_Time;
var StepCWA_WA123_Cancel_DPS = StepCWA_WA123_Cancel_Pot/StepCWA_WA123_Cancel_Time;
var StepCWA_WA123_Cancel_F0 = Math.round(StepCWA_WA123_Cancel_DPS);
var StepCWA_WA123_Cancel_F5 = Math.round(StepCWA_WA123_Cancel_DPS*MultiplierF5);
var StepCWA_WA123_Cancel_OD = Math.round(StepCWA_WA123_Cancel_DPS*MultiplierF5);
// Blade Counter Weapon Action Stage 1 -> WA123
var BCWA_WA123_Cancel_Pot = BCWA_Table1_Pot+WA123_Pot;
var BCWA_WA123_Cancel_Time = BCWA_Table1_Time-WA_Cancel_BCWA_Time+WA123_Time;
var BCWA_WA123_Cancel_PP = BCWA_Table1_PP+WA123_PP;
var BCWA_WA123_Cancel_Focus = BCWA_Table1_Focus+WA123_Focus;
var BCWA_WA123_Cancel_FPS = (BCWA_WA123_Cancel_Focus*BossMultiplierFocus)/BCWA_WA123_Cancel_Time;
var BCWA_WA123_Cancel_DPS = ((BCWA_WA123_Cancel_Pot-WA123_Pot)*MultiplierBC+WA123_Pot)/BCWA_WA123_Cancel_Time;
var BCWA_WA123_Cancel_F0 = Math.round(BCWA_WA123_Cancel_DPS);
var BCWA_WA123_Cancel_F5 = Math.round(BCWA_WA123_Cancel_DPS*MultiplierF5);
var BCWA_WA123_Cancel_OD = Math.round(BCWA_WA123_Cancel_DPS*MultiplierF5);
// Stay Reaping Regulus -> Step Counter Weapon Action
var sRR_StepCWA_Cancel_Pot = eval(sRR_Pot)+StepCWA_Pot;
var sRR_StepCWA_Cancel_Time = sRR_Time-Step_Cancel_sRR_Time+StepCWA_Time;
var sRR_StepCWA_Cancel_PP = eval(sRR_PP)-StepCWA_PP;
var sRR_StepCWA_Cancel_Focus = eval(sRR_Focus)+StepCWA_Focus;
var sRR_StepCWA_Cancel_FPS = (eval(sRR_StepCWA_Cancel_Focus)*BossMultiplierFocus)/sRR_StepCWA_Cancel_Time;
var sRR_StepCWA_Cancel_Rage = eval(sRR_Rage)+StepCWA_Rage;
var sRR_StepCWA_Cancel_RPS = (eval(sRR_StepCWA_Cancel_Rage)*BossMultiplierRage)/sRR_StepCWA_Cancel_Time;
var sRR_StepCWA_Cancel_DPS = eval(sRR_StepCWA_Cancel_Pot)/sRR_StepCWA_Cancel_Time;
var sRR_StepCWA_Cancel_F0 = Math.round(sRR_StepCWA_Cancel_DPS);
var sRR_StepCWA_Cancel_F5 = Math.round(sRR_StepCWA_Cancel_DPS*MultiplierF5);
var sRR_StepCWA_Cancel_OD = Math.round(sRR_StepCWA_Cancel_DPS*MultiplierF5);
// mWR -> Step Dodge -> Chain Missing
var mWR_StepDodge_Chain_Cancel_Pot = eval(mWR_Pot);
var mWR_StepDodge_Chain_Cancel_Time = mWR_Time-Step_Cancel_mWR_Time+0.3;
var mWR_StepDodge_Chain_Cancel_PP = eval(mWR_PP);
var mWR_StepDodge_Chain_Cancel_Focus = eval(mWR_Focus);
var mWR_StepDodge_Chain_Cancel_FPS = (eval(mWR_StepDodge_Chain_Cancel_Focus)*BossMultiplierFocus)/mWR_StepDodge_Chain_Cancel_Time;
var mWR_StepDodge_Chain_Cancel_Rage = eval(mWR_Rage);
var mWR_StepDodge_Chain_Cancel_RPS = (eval(mWR_StepDodge_Chain_Cancel_Rage)*BossMultiplierRage)/mWR_StepDodge_Chain_Cancel_Time;
var mWR_StepDodge_Chain_Cancel_DPS = eval(mWR_StepDodge_Chain_Cancel_Pot)/mWR_StepDodge_Chain_Cancel_Time;
var mWR_StepDodge_Chain_Cancel_F0 = Math.round(mWR_StepDodge_Chain_Cancel_DPS);
var mWR_StepDodge_Chain_Cancel_F5 = Math.round(mWR_StepDodge_Chain_Cancel_DPS*MultiplierF5);
var mWR_StepDodge_Chain_Cancel_OD = Math.round(mWR_StepDodge_Chain_Cancel_DPS*MultiplierF5);
// Stay Waving Rigel -> Step Counter Weapon Action
var sWR_StepCWA_Cancel_Pot = eval(sWR_Pot)+StepCWA_Pot;
var sWR_StepCWA_Cancel_Time = sWR_Time-Step_Cancel_sWR_Time+StepCWA_Time;
var sWR_StepCWA_Cancel_PP = eval(sWR_PP)-StepCWA_PP;
var sWR_StepCWA_Cancel_Focus = eval(sWR_Focus)+StepCWA_Focus;
var sWR_StepCWA_Cancel_FPS = (eval(sWR_StepCWA_Cancel_Focus)*BossMultiplierFocus)/sWR_StepCWA_Cancel_Time;
var sWR_StepCWA_Cancel_Rage = eval(sWR_Rage)+StepCWA_Rage;
var sWR_StepCWA_Cancel_RPS = (eval(sWR_StepCWA_Cancel_Rage)*BossMultiplierRage)/sWR_StepCWA_Cancel_Time;
var sWR_StepCWA_Cancel_DPS = eval(sWR_StepCWA_Cancel_Pot)/sWR_StepCWA_Cancel_Time;
var sWR_StepCWA_Cancel_F0 = Math.round(sWR_StepCWA_Cancel_DPS);
var sWR_StepCWA_Cancel_F5 = Math.round(sWR_StepCWA_Cancel_DPS*MultiplierF5);
var sWR_StepCWA_Cancel_OD = Math.round(sWR_StepCWA_Cancel_DPS*MultiplierF5);

// Dictionary with search strings as keys and their replacements as variables
const replaceDict = {
  // Relentless Blade
  'RB_Pot': RB_Pot,
  'RB_PP': RB_PP,
  'RB_Focus': RB_Focus,
  'RB_Rage': RB_Rage,
  'RB_NoRBR_Pot': RB_NoRBR_Pot,
  'RB_Strong_Pot': RB_Strong_Pot,
  'RB_Strong_PP': RB_Strong_PP,
  'RB_Strong_Focus': RB_Strong_Focus,
  'RB_Strong_Rage': RB_Strong_Rage,
  'RB_Strong_NoRBR_Pot': RB_Strong_NoRBR_Pot,
  // Stay Shifting Spica
  'sSS_Pot': sSS_Pot,
  'sSS_Time': sSS_Time,
  'sSS_PP': sSS_PP,
  'sSS_Focus': sSS_Focus,
  'sSS_FPS': sSS_FPS.toFixed(1),
  'sSS_Rage': sSS_Rage,
  'sSS_RPS': sSS_RPS.toFixed(1),
  'sSS_F0': sSS_F0,
  'sSS_F5': sSS_F5,
  'sSS_OD': sSS_OD,
  // Move Shifting Spica
  'mSS_Pot': mSS_Pot,
  'mSS_Time': mSS_Time,
  'mSS_PP': mSS_PP,
  'mSS_Focus': mSS_Focus,
  'mSS_FPS': mSS_FPS.toFixed(1),
  'mSS_Rage': mSS_Rage,
  'mSS_RPS': mSS_RPS.toFixed(1),
  'mSS_F0': mSS_F0,
  'mSS_F5': mSS_F5,
  'mSS_OD': mSS_OD,
  // Stay Flowing Sirius1
  'sFS1_Pot': sFS1_Pot,
  'sFS1_Time': sFS1_Time,
  'sFS1_PP': sFS1_PP,
  'sFS1_Focus': sFS1_Focus,
  'sFS1_FPS': sFS1_FPS.toFixed(1),
  'sFS1_Rage': sFS1_Rage,
  'sFS1_RPS': sFS1_RPS.toFixed(1),
  'sFS1_F0': sFS1_F0,
  'sFS1_F5': sFS1_F5,
  'sFS1_OD': sFS1_OD,
  // Stay Flowing Sirius12
  'sFS12_Pot': sFS12_Pot,
  'sFS12_Time': sFS12_Time,
  'sFS12_PP': sFS12_PP,
  'sFS12_Focus': sFS12_Focus,
  'sFS12_FPS': sFS12_FPS.toFixed(1),
  'sFS12_Rage': sFS12_Rage,
  'sFS12_RPS': sFS12_RPS.toFixed(1),
  'sFS12_F0': sFS12_F0,
  'sFS12_F5': sFS12_F5,
  'sFS12_OD': sFS12_OD,
  // Move Flowing Sirius
  'mFS_Pot': mFS_Pot,
  'mFS_Time': mFS_Time,
  'mFS_PP': mFS_PP,
  'mFS_Focus': mFS_Focus,
  'mFS_FPS': mFS_FPS.toFixed(1),
  'mFS_Rage': mFS_Rage,
  'mFS_RPS': mFS_RPS.toFixed(1),
  'mFS_F0': mFS_F0,
  'mFS_F5': mFS_F5,
  'mFS_OD': mFS_OD,
  // Stay Reaping Regulus
  'sRR_Pot': sRR_Pot,
  'sRR_Time': sRR_Time,
  'sRR_PP': sRR_PP,
  'sRR_Focus': sRR_Focus,
  'sRR_FPS': sRR_FPS.toFixed(1),
  'sRR_Rage': sRR_Rage,
  'sRR_RPS': sRR_RPS.toFixed(1),
  'sRR_F0': sRR_F0,
  'sRR_F5': sRR_F5,
  'sRR_OD': sRR_OD,
  // Move Reaping Regulus
  'mRR_Pot': mRR_Pot,
  'mRR_Time': mRR_Time,
  'mRR_PP': mRR_PP,
  'mRR_Focus': mRR_Focus,
  'mRR_FPS': mRR_FPS.toFixed(1),
  'mRR_Rage': mRR_Rage,
  'mRR_RPS': mRR_RPS.toFixed(1),
  'mRR_F0': mRR_F0,
  'mRR_F5': mRR_F5,
  'mRR_OD': mRR_OD,
  // Stay Waving Riegel
  'sWR_Pot': sWR_Pot,
  'sWR_Time': sWR_Time,
  'sWR_PP': sWR_PP,
  'sWR_Focus': sWR_Focus,
  'sWR_FPS': sWR_FPS.toFixed(1),
  'sWR_Rage': sWR_Rage,
  'sWR_RPS': sWR_RPS.toFixed(1),
  'sWR_F0': sWR_F0,
  'sWR_F5': sWR_F5,
  'sWR_OD': sWR_OD,
  // Move Waving Riegel
  'mWR_Pot': mWR_Pot,
  'mWR_Time': mWR_Time,
  'mWR_PP': mWR_PP,
  'mWR_Focus': mWR_Focus,
  'mWR_FPS': mWR_FPS.toFixed(1),
  'mWR_Rage': mWR_Rage,
  'mWR_RPS': mWR_RPS.toFixed(1),
  'mWR_F0': mWR_F0,
  'mWR_F5': mWR_F5,
  'mWR_OD': mWR_OD,
  // Slug Shot
  'SlugShot_Pot': SlugShot_Pot,
  'SlugShot_Time': SlugShot_Time,
  'SlugShot_PP': SlugShot_PP,
  'SlugShot_Focus': SlugShot_Focus,
  'SlugShot_FPS': SlugShot_FPS.toFixed(1),
  'SlugShot_F0': SlugShot_F0,
  'SlugShot_F5': SlugShot_F5,
  'SlugShot_OD': SlugShot_OD,
  // Normal Attack Stage 1-3
  'NA123_Pot': NA123_Pot,
  'NA123_Time': NA123_Time,
  'NA123_PP': NA123_PP,
  'NA123_Focus': NA123_Focus,
  'NA123_FPS': NA123_FPS.toFixed(1),
  'NA123_F0': NA123_F0,
  'NA123_F5': NA123_F5,
  'NA123_OD': NA123_OD,
  'NA123_NoSRHS_Pot': NA123_NoSRHS_Pot,
  'NA123_NoSRHS_F0': NA123_NoSRHS_F0,
  'NA123_NoSRHS_F5': NA123_NoSRHS_F5,
  'NA123_NoSRHS_OD': NA123_NoSRHS_OD,
  // Charged Normal Attack
  'cNA_Pot': cNA_Pot,
  'cNA_Time': cNA_Time,
  'cNA_PP': cNA_PP,
  'cNA_Focus': cNA_Focus,
  'cNA_FPS': cNA_FPS.toFixed(1),
  'cNA_F0': cNA_F0,
  'cNA_F5': cNA_F5,
  'cNA_OD': cNA_OD,
  'cNA_NoSRHS_Pot': cNA_NoSRHS_Pot,
  'cNA_NoSRHS_F0': cNA_NoSRHS_F0,
  'cNA_NoSRHS_F5': cNA_NoSRHS_F5,
  'cNA_NoSRHS_OD': cNA_NoSRHS_OD,
  // Supercharged Normal Attack
  'sNA_Pot': sNA_Pot,
  'sNA_Time': sNA_Time,
  'sNA_PP': sNA_PP,
  'sNA_Focus': sNA_Focus,
  'sNA_FPS': sNA_FPS.toFixed(1),
  'sNA_F0': sNA_F0,
  'sNA_F5': sNA_F5,
  'sNA_OD': sNA_OD,
  'sNA_NoSRHS_Pot': sNA_NoSRHS_Pot,
  'sNA_NoSRHS_F0': sNA_NoSRHS_F0,
  'sNA_NoSRHS_F5': sNA_NoSRHS_F5,
  'sNA_NoSRHS_OD': sNA_NoSRHS_OD,
  // Charged Blade
  'ChargedBlade_Pot': ChargedBlade_Pot,
  'ChargedBlade_Time': ChargedBlade_Time,
  'ChargedBlade_PP': ChargedBlade_PP,
  'ChargedBlade_Focus': ChargedBlade_Focus,
  'ChargedBlade_FPS': ChargedBlade_FPS.toFixed(1),
  'ChargedBlade_F0': ChargedBlade_F0,
  'ChargedBlade_F5': ChargedBlade_F5,
  'ChargedBlade_OD': ChargedBlade_OD,
  // Charged Blade Charged Normal Attack
  'ChargedBlade_Table1_Pot': ChargedBlade_Table1_Pot,
  'ChargedBlade_Table1_Time': ChargedBlade_Table1_Time,
  'ChargedBlade_Table1_PP': ChargedBlade_Table1_PP,
  'ChargedBlade_Table1_Focus': ChargedBlade_Table1_Focus,
  'ChargedBlade_Table1_FPS': ChargedBlade_Table1_FPS.toFixed(1),
  'ChargedBlade_Table1_F0': ChargedBlade_Table1_F0,
  'ChargedBlade_Table1_F5': ChargedBlade_Table1_F5,
  'ChargedBlade_Table1_OD': ChargedBlade_Table1_OD,
  // Charged Blade Supercharged Normal Attack
  'ChargedBlade_Table2_Pot': ChargedBlade_Table2_Pot,
  'ChargedBlade_Table2_Time': ChargedBlade_Table2_Time,
  'ChargedBlade_Table2_PP': ChargedBlade_Table2_PP,
  'ChargedBlade_Table2_Focus': ChargedBlade_Table2_Focus,
  'ChargedBlade_Table2_FPS': ChargedBlade_Table2_FPS.toFixed(1),
  'ChargedBlade_Table2_F0': ChargedBlade_Table2_F0,
  'ChargedBlade_Table2_F5': ChargedBlade_Table2_F5,
  'ChargedBlade_Table2_OD': ChargedBlade_Table2_OD,
  // Weapon Action Stage 1-3
  'WA123_Pot': WA123_Pot,
  'WA123_Time': WA123_Time.toFixed(2),
  'WA123_PP': WA123_PP,
  'WA123_Focus': WA123_Focus,
  'WA123_FPS': WA123_FPS.toFixed(1),
  'WA123_F0': WA123_F0,
  'WA123_F5': WA123_F5,
  'WA123_OD': WA123_OD,
  // Move Weapon Action
  'mWA_Pot': mWA_Pot,
  'mWA_Time': mWA_Time,
  'mWA_PP': mWA_PP,
  'mWA_Focus': mWA_Focus,
  'mWA_FPS': mWA_FPS.toFixed(1),
  'mWA_F0': mWA_F0,
  'mWA_F5': mWA_F5,
  'mWA_OD': mWA_OD,
  // Blade Counter Normal Attack WA1
  'BCNA_Table1_Pot': BCNA_Table1_Pot,
  'BCNA_Table1_Time': BCNA_Table1_Time,
  'BCNA_Table1_PP': BCNA_Table1_PP,
  'BCNA_Table1_Focus': BCNA_Table1_Focus,
  'BCNA_Table1_FPS': BCNA_Table1_FPS.toFixed(1),
  'BCNA_Table1_F0': BCNA_Table1_F0,
  'BCNA_Table1_F5': BCNA_Table1_F5,
  'BCNA_Table1_OD': BCNA_Table1_OD,
  // Blade Counter Normal Attack WA2
  'BCNA_Table2_Pot': BCNA_Table2_Pot,
  'BCNA_Table2_Time': BCNA_Table2_Time,
  'BCNA_Table2_PP': BCNA_Table2_PP,
  'BCNA_Table2_Focus': BCNA_Table2_Focus,
  'BCNA_Table2_FPS': BCNA_Table2_FPS.toFixed(1),
  'BCNA_Table2_F0': BCNA_Table2_F0,
  'BCNA_Table2_F5': BCNA_Table2_F5,
  'BCNA_Table2_OD': BCNA_Table2_OD,
  // Blade Counter Normal Attack WA3
  'BCNA_Table3_Pot': BCNA_Table3_Pot,
  'BCNA_Table3_Time': BCNA_Table3_Time.toFixed(2),
  'BCNA_Table3_PP': BCNA_Table3_PP,
  'BCNA_Table3_Focus': BCNA_Table3_Focus,
  'BCNA_Table3_FPS': BCNA_Table3_FPS.toFixed(1),
  'BCNA_Table3_F0': BCNA_Table3_F0,
  'BCNA_Table3_F5': BCNA_Table3_F5,
  'BCNA_Table3_OD': BCNA_Table3_OD,
  // Blade Counter WA1
  'BCWA_Table1_Pot': BCWA_Table1_Pot,
  'BCWA_Table1_Time': BCWA_Table1_Time,
  'BCWA_Table1_PP': BCWA_Table1_PP,
  'BCWA_Table1_Focus': BCWA_Table1_Focus,
  'BCWA_Table1_FPS': BCWA_Table1_FPS.toFixed(1),
  'BCWA_Table1_F0': BCWA_Table1_F0,
  'BCWA_Table1_F5': BCWA_Table1_F5,
  'BCWA_Table1_OD': BCWA_Table1_OD,
  // Blade Counter WA2
  'BCWA_Table2_Pot': BCWA_Table2_Pot,
  'BCWA_Table2_Time': BCWA_Table2_Time.toFixed(2),
  'BCWA_Table2_PP': BCWA_Table2_PP,
  'BCWA_Table2_Focus': BCWA_Table2_Focus,
  'BCWA_Table2_FPS': BCWA_Table2_FPS.toFixed(1),
  'BCWA_Table2_F0': BCWA_Table2_F0,
  'BCWA_Table2_F5': BCWA_Table2_F5,
  'BCWA_Table2_OD': BCWA_Table2_OD,
  // Blade Counter WA3
  'BCWA_Table3_Pot': BCWA_Table3_Pot,
  'BCWA_Table3_Time': BCWA_Table3_Time.toFixed(2),
  'BCWA_Table3_PP': BCWA_Table3_PP,
  'BCWA_Table3_Focus': BCWA_Table3_Focus,
  'BCWA_Table3_FPS': BCWA_Table3_FPS.toFixed(1),
  'BCWA_Table3_F0': BCWA_Table3_F0,
  'BCWA_Table3_F5': BCWA_Table3_F5,
  'BCWA_Table3_OD': BCWA_Table3_OD,
  // Mobile Blade Counter Normal Attack
  'BCNA_Mobile_Pot': BCNA_Mobile_Pot,
  'BCNA_Mobile_Time': BCNA_Mobile_Time.toFixed(2),
  'BCNA_Mobile_PP': BCNA_Mobile_PP,
  'BCNA_Mobile_Focus': BCNA_Mobile_Focus,
  'BCNA_Mobile_FPS': BCNA_Mobile_FPS.toFixed(1),
  'BCNA_Mobile_F0': BCNA_Mobile_F0,
  'BCNA_Mobile_F5': BCNA_Mobile_F5,
  'BCNA_Mobile_OD': BCNA_Mobile_OD,
  // Mobile Blade Counter Weapon Action
  'BCWA_Mobile_Pot': BCWA_Mobile_Pot,
  'BCWA_Mobile_Time': BCWA_Mobile_Time.toFixed(2),
  'BCWA_Mobile_PP': BCWA_Mobile_PP,
  'BCWA_Mobile_Focus': BCWA_Mobile_Focus,
  'BCWA_Mobile_FPS': BCWA_Mobile_FPS.toFixed(1),
  'BCWA_Mobile_F0': BCWA_Mobile_F0,
  'BCWA_Mobile_F5': BCWA_Mobile_F5,
  'BCWA_Mobile_OD': BCWA_Mobile_OD,
  // Step Counter Normal Attack
  'StepCNA_Pot': StepCNA_Pot,
  'StepCNA_Time': StepCNA_Time.toFixed(2),
  'StepCNA_PP': StepCNA_PP,
  'StepCNA_Focus': StepCNA_Focus,
  'StepCNA_FPS': StepCNA_FPS.toFixed(1),
  'StepCNA_F0': StepCNA_F0,
  'StepCNA_F5': StepCNA_F5,
  'StepCNA_OD': StepCNA_OD,
  // Step Counter Weapon Action
  'StepCWA_Pot': StepCWA_Pot,
  'StepCWA_Time': StepCWA_Time.toFixed(2),
  'StepCWA_PP': StepCWA_PP,
  'StepCWA_Focus': StepCWA_Focus,
  'StepCWA_FPS': StepCWA_FPS.toFixed(1),
  'StepCWA_Rage': StepCWA_Rage,
  'StepCWA_RPS': StepCWA_RPS.toFixed(1),
  'StepCWA_F0': StepCWA_F0,
  'StepCWA_F5': StepCWA_F5,
  'StepCWA_OD': StepCWA_OD,
  // Photon Blast
  'PB_Pot': PB_Pot,
  'PB_Time': PB_Time.toFixed(2),
  'PB_Focus': PB_Focus,
  'PB_FPS': PB_FPS.toFixed(1),
  'PB_F0': PB_F0,
  'PB_F5': PB_F5,
  'PB_OD': PB_OD,
  // Unleashed Rage
  'UR_Pot': UR_Pot,
  'UR_Time': UR_Time.toFixed(2),
  'UR_PP': UR_PP,
  'UR_Focus': UR_Focus,
  'UR_FPS': UR_FPS.toFixed(1),
  'UR_F0': UR_F0,
  'UR_F5': UR_F5,
  'UR_OD': UR_OD,
  // Overdrive Finisher
  'ODF_Pot': ODF_Pot,
  'ODF_Time': ODF_Time.toFixed(2),
  'ODF_OD': ODF_OD,
  // Stay Flowing Sirius -> WA123
  'sFS12_WA123_Cancel_Pot': sFS12_WA123_Cancel_Pot,
  'sFS12_WA123_Cancel_Time': sFS12_WA123_Cancel_Time.toFixed(2),
  'sFS12_WA123_Cancel_PP': sFS12_WA123_Cancel_PP,
  'sFS12_WA123_Cancel_Focus': sFS12_WA123_Cancel_Focus,
  'sFS12_WA123_Cancel_FPS': sFS12_WA123_Cancel_FPS.toFixed(1),
  'sFS12_WA123_Cancel_Rage': sFS12_WA123_Cancel_Rage,
  'sFS12_WA123_Cancel_RPS': sFS12_WA123_Cancel_RPS.toFixed(1),
  'sFS12_WA123_Cancel_F0': sFS12_WA123_Cancel_F0,
  'sFS12_WA123_Cancel_F5': sFS12_WA123_Cancel_F5,
  'sFS12_WA123_Cancel_OD': sFS12_WA123_Cancel_OD,
  // Step Counter Weapon Action -> Chain
  'StepCWA_Chain_Pot': StepCWA_Chain_Pot,
  'StepCWA_Chain_Time': StepCWA_Chain_Time.toFixed(2),
  'StepCWA_Chain_PP': StepCWA_Chain_PP,
  'StepCWA_Chain_Focus': StepCWA_Chain_Focus,
  'StepCWA_Chain_FPS': StepCWA_Chain_FPS.toFixed(1),
  'StepCWA_Chain_Rage': StepCWA_Chain_Rage,
  'StepCWA_Chain_RPS': StepCWA_Chain_RPS.toFixed(1),
  'StepCWA_Chain_F0': StepCWA_Chain_F0,
  'StepCWA_Chain_F5': StepCWA_Chain_F5,
  'StepCWA_Chain_OD': StepCWA_Chain_OD,
  // Step Counter Weapon Action -> WA123
  'StepCWA_WA123_Cancel_Pot': StepCWA_WA123_Cancel_Pot,
  'StepCWA_WA123_Cancel_Time': StepCWA_WA123_Cancel_Time.toFixed(2),
  'StepCWA_WA123_Cancel_PP': StepCWA_WA123_Cancel_PP,
  'StepCWA_WA123_Cancel_Focus': StepCWA_WA123_Cancel_Focus,
  'StepCWA_WA123_Cancel_FPS': StepCWA_WA123_Cancel_FPS.toFixed(1),
  'StepCWA_WA123_Cancel_Rage': StepCWA_WA123_Cancel_Rage,
  'StepCWA_WA123_Cancel_RPS': StepCWA_WA123_Cancel_RPS.toFixed(1),
  'StepCWA_WA123_Cancel_F0': StepCWA_WA123_Cancel_F0,
  'StepCWA_WA123_Cancel_F5': StepCWA_WA123_Cancel_F5,
  'StepCWA_WA123_Cancel_OD': StepCWA_WA123_Cancel_OD,
  // Blade Counter Weapon Action Stage 1 -> WA123
  'BCWA1_WA123_Cancel_Pot': BCWA_WA123_Cancel_Pot,
  'BCWA1_WA123_Cancel_Time': BCWA_WA123_Cancel_Time.toFixed(2),
  'BCWA1_WA123_Cancel_PP': BCWA_WA123_Cancel_PP,
  'BCWA1_WA123_Cancel_Focus': BCWA_WA123_Cancel_Focus,
  'BCWA1_WA123_Cancel_FPS': BCWA_WA123_Cancel_FPS.toFixed(1),
  'BCWA1_WA123_Cancel_F0': BCWA_WA123_Cancel_F0,
  'BCWA1_WA123_Cancel_F5': BCWA_WA123_Cancel_F5,
  'BCWA1_WA123_Cancel_OD': BCWA_WA123_Cancel_OD,
  // Stay Reaping Regulus -> Step Counter Weapon Action
  'sRR_StepCWA_Cancel_Pot': sRR_StepCWA_Cancel_Pot,
  'sRR_StepCWA_Cancel_Time': sRR_StepCWA_Cancel_Time.toFixed(2),
  'sRR_StepCWA_Cancel_PP': sRR_StepCWA_Cancel_PP,
  'sRR_StepCWA_Cancel_Focus': sRR_StepCWA_Cancel_Focus,
  'sRR_StepCWA_Cancel_FPS': sRR_StepCWA_Cancel_FPS.toFixed(1),
  'sRR_StepCWA_Cancel_Rage': sRR_StepCWA_Cancel_Rage,
  'sRR_StepCWA_Cancel_RPS': sRR_StepCWA_Cancel_RPS.toFixed(1),
  'sRR_StepCWA_Cancel_F0': sRR_StepCWA_Cancel_F0,
  'sRR_StepCWA_Cancel_F5': sRR_StepCWA_Cancel_F5,
  'sRR_StepCWA_Cancel_OD': sRR_StepCWA_Cancel_OD,
  // Move Waving Rigel -> Step Dodge -> Chain
  'mWR_StepDodge_Chain_Cancel_Pot': mWR_StepDodge_Chain_Cancel_Pot,
  'mWR_StepDodge_Chain_Cancel_Time': mWR_StepDodge_Chain_Cancel_Time.toFixed(2),
  'mWR_StepDodge_Chain_Cancel_PP': mWR_StepDodge_Chain_Cancel_PP,
  'mWR_StepDodge_Chain_Cancel_Focus': mWR_StepDodge_Chain_Cancel_Focus,
  'mWR_StepDodge_Chain_Cancel_FPS': mWR_StepDodge_Chain_Cancel_FPS.toFixed(1),
  'mWR_StepDodge_Chain_Cancel_Rage': mWR_StepDodge_Chain_Cancel_Rage,
  'mWR_StepDodge_Chain_Cancel_RPS': mWR_StepDodge_Chain_Cancel_RPS.toFixed(1),
  'mWR_StepDodge_Chain_Cancel_F0': mWR_StepDodge_Chain_Cancel_F0,
  'mWR_StepDodge_Chain_Cancel_F5': mWR_StepDodge_Chain_Cancel_F5,
  'mWR_StepDodge_Chain_Cancel_OD': mWR_StepDodge_Chain_Cancel_OD,
  // Stay Waving Rigel -> Step Counter Weapon Action
  'sWR_StepCWA_Cancel_Pot': sWR_StepCWA_Cancel_Pot,
  'sWR_StepCWA_Cancel_Time': sWR_StepCWA_Cancel_Time.toFixed(2),
  'sWR_StepCWA_Cancel_PP': sWR_StepCWA_Cancel_PP,
  'sWR_StepCWA_Cancel_Focus': sWR_StepCWA_Cancel_Focus,
  'sWR_StepCWA_Cancel_FPS': sWR_StepCWA_Cancel_FPS.toFixed(1),
  'sWR_StepCWA_Cancel_Rage': sWR_StepCWA_Cancel_Rage,
  'sWR_StepCWA_Cancel_RPS': sWR_StepCWA_Cancel_RPS.toFixed(1),
  'sWR_StepCWA_Cancel_F0': sWR_StepCWA_Cancel_F0,
  'sWR_StepCWA_Cancel_F5': sWR_StepCWA_Cancel_F5,
  'sWR_StepCWA_Cancel_OD': sWR_StepCWA_Cancel_OD,
};
  
// Call the function with the dictionary to replace strings in the HTML document
replaceStringsInHTML(replaceDict);