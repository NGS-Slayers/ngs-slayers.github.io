
// Function to add properties to an object
export function addProp(obj) {
  if (obj && typeof obj === 'object') {
    obj = obj || {};

    obj.FPS = Math.round(obj.Focus * MP.BossFocus / obj.Time);
    obj.RPS = Math.round(obj.Rage * MP.BossRage / obj.Time);
    obj.Pot = Math.round(obj.Pot)
    obj.DPS = obj.Pot / obj.Time;

    if (obj.ODF) {
      obj.OD = Math.round(obj.DPS * MP.OD);
    } else if (obj.BC) {
      obj.F0 = Math.round(obj.DPS * MP.BC);
      obj.F5 = Math.round(obj.DPS * MP.F5 * MP.BC);
      obj.OD = Math.round(obj.DPS * MP.OD * MP.BC);
    } else {
      obj.F0 = Math.round(obj.DPS);
      obj.F5 = Math.round(obj.DPS * MP.F5);
      obj.OD = Math.round(obj.DPS * MP.OD);
    }

  } else {
    console.error('Invalid object provided.');
  }
}

// String Objects together then removes addProp and adds it again (dirty)
export function calcProp(...obj) {
  // Ensure at least two objects are provided
  if (obj.length < 2) {
    console.error('At least two objects are required.');
    return {};
  }

  // Properties to skip
  var propertiesToSkip = ['DPS', 'FPS', 'RPS', 'F0', 'F5', 'OD', 'BC'];

  // Initialize the result object with the properties of the first object
  var result = {
    ...obj[0]
  };

  // Iterate through the remaining objects
  for (var i = 1; i < obj.length; i++) {
    // Iterate through properties of the current object
    for (var prop in obj[i]) {
      // Check if the property should be skipped
      if (propertiesToSkip.includes(prop)) {
        continue;
      }

      // Check if the property exists in the result object and is a number
      if (result.hasOwnProperty(prop) && typeof result[prop] === 'number' && typeof obj[i][prop] === 'number') {
        // Merge the corresponding properties and update the result object
        result[prop] += obj[i][prop];
      } else {
        console.error('Invalid object provided.');
      }
    }
  }

  // Apply addProp function to the result
  addProp(result);
  return result;
}

export function RBR(obj) {
  // Create a new object and copy properties from the original object
  var result = {
    ...obj
  };

  // Perform operations on the properties of the copied object
  result.Pot = result.Pot * MP.RBR;

  // Return the modified object
  return result;
}

export function SRHS(obj) {
  // Create a new object and copy properties from the original object
  var result = {
    ...obj
  };

  // Perform operations on the properties of the copied object
  result.Pot = result.Pot * MP.SRHS;
  result.DPS = result.Pot / result.Time;
  result.F0 = Math.round(result.DPS);
  result.F5 = Math.round(result.DPS * MP.F5);
  result.OD = Math.round(result.DPS * MP.OD);

  // Return the modified object
  return result;
}

export function Cancel(obj, option) {
  // Create a new object and copy properties from the original object
  var result = {
    ...obj
  };

  // Perform operations on the properties of the copied object based on the value of the option
  if (option === 'WA' && result.WACancel > 0) {
    result.Time = result.Time - (result.Time - result.WACancel);
  } else if (option === 'Step' && result.StepCancel > 0) {
    // Perform alternative operation based on the value of the option
    result.Time = result.Time - (result.Time - result.StepCancel);
  } else {
    // Handle the case when an invalid option is provided
    console.error('Invalid option provided. or Cancel Timing not existing');
  }

  // Perform common operations regardless of the option
  result.DPS = result.Pot / result.Time;
  result.F0 = Math.round(result.DPS);
  result.F5 = Math.round(result.DPS * MP.F5);
  result.OD = Math.round(result.DPS * MP.OD);

  // Return the modified object
  return result;
}

// Multipliers
export var MP = {
  BossFocus: 5,
  BossRage: 3,
  F5: 1.05 * 1.06,
  OD: 1.1 * 1.06,
  RBR: 5,
  SRHS: 1.3,
  BC: 1.026
};

// Relentless Blade
export var RB = {
  Pot: 5,
  PP: -3,
  Focus: 0.5,
  Rage: 0.5
};

export var Strong_RB = {
  Pot: 15,
  PP: -3,
  Focus: 2.5,
  Rage: 3
};

// Step
export var Step = {
  Pot: 0,
  Time: 0.3,
  PP: 0,
  Focus: 0,
  Rage: 0
};

// Stay Shifting Spica
export var sSS = {
  Pot: 190 + RBR(RB).Pot,
  Time: 0.6,
  PP: 14 + RB.PP,
  Focus: 2.6 + RB.Focus,
  Rage: 0.2 + RB.Rage,
  StepCancel: 0.35,
  WACancel: 0.50
};
addProp(sSS)

// Move Shifting Spica
export var mSS = {
  Pot: 371 + RBR(RB).Pot,
  Time: 1.14,
  PP: 14 + RB.PP,
  Focus: 5 + RB.Focus,
  Rage: 1.5 + RB.Rage,
  StepCancel: 0.55,
  WACancel: 1.04
};
addProp(mSS)

// Stay Flowing Sirius1
export var sFS1 = {
  Pot: 400 + RBR(RB).Pot,
  Time: 1.25,
  PP: 25 + RB.PP,
  Focus: 5.1 + RB.Focus,
  Rage: 1.5 + RB.Rage,
  StepCancel: 0.95,
  WACancel: 1.10
};
addProp(sFS1)

// Stay Flowing Sirius12
export var sFS12 = {
  Pot: 1080 + RBR(RB).Pot + RBR(Strong_RB).Pot,
  Time: 3.1,
  PP: 50 + RB.PP + RB.PP,
  Focus: 14.2 + RB.Focus + Strong_RB.Focus,
  Rage: 7.5 + RB.Rage + Strong_RB.Rage,
  StepCancel: 2.85,
  WACancel: 2.85
};
addProp(sFS12)

// Move Flowing Sirius
export var mFS = {
  Pot: 302 + RBR(RB).Pot,
  Time: 0.93,
  PP: 25 + RB.PP,
  Focus: 4.6 + RB.Focus,
  Rage: 1.5 + RB.Rage,
  StepCancel: 0.73,
  WACancel: 0.83
};
addProp(mFS)

// Stay Reaping Regulus
export var sRR = {
  Pot: 210 + RBR(RB).Pot,
  Time: 0.67,
  PP: 17 + RB.PP,
  Focus: 4 + RB.Focus,
  Rage: 4 + RB.Rage,
  StepCancel: 0.42,
  WACancel: 0.57
};
addProp(sRR)

// Move Reaping Regulus
export var mRR = {
  Pot: 273 + RBR(RB).Pot,
  Time: 0.87,
  PP: 17 + RB.PP,
  Focus: 4 + RB.Focus,
  Rage: 1.5 + RB.Rage,
  StepCancel: 0.62,
  WACancel: 0.77
};
addProp(mRR)

// Stay Waving Rigel
export var sWR = {
  Pot: 130 + RBR(RB).Pot,
  Time: 0.433333333333,
  PP: 18 + RB.PP,
  Focus: 1.5 + RB.Focus,
  Rage: 0.4 + RB.Rage,
  StepCancel: 0.18,
  WACancel: 0.33
};
addProp(sWR)

// Move Waving Rigel
export var mWR = {
  Pot: 332 + RBR(RB).Pot,
  Time: 1,
  PP: 18 + RB.PP,
  Focus: 5.1 + RB.Focus,
  Rage: 4.5 + RB.Rage,
  StepCancel: 0.75,
  WACancel: 0.90
};
addProp(mWR)

// Slug Shot
export var SlugShot = {
  Pot: 170,
  Time: 0.51,
  PP: -10,
  Focus: 2.5,
  Rage: 0,
  StepCancel: 0.41,
  WACancel: 0.41
};
addProp(SlugShot)

// Normal Attack Stage 1
export var NA1 = {
  Pot: 65,
  Time: 0.35,
  PP: -4,
  Focus: 1.5,
  Rage: 0,
  StepCancel: 0,
  WACancel: 0
};
addProp(NA1)

// Normal Attack Stage 2
export var NA2 = {
  Pot: 80,
  Time: 0.40,
  PP: -6,
  Focus: 1.5,
  Rage: 0,
  StepCancel: 0,
  WACancel: 0
};
addProp(NA2)

// Normal Attack Stage 3
export var NA3 = {
  Pot: 105,
  Time: 0.40,
  PP: -9,
  Focus: 3,
  Rage: 0,
  StepCancel: 0,
  WACancel: 0
};
addProp(NA3)

// Charged Normal Attack
export var cNA = {
  Pot: 305,
  Time: 1.45,
  PP: -21,
  Focus: 5.2,
  Rage: 0,
  StepCancel: 0,
  WACancel: 0
};
addProp(cNA)

// Supercharged Normal Attack
export var scNA = {
  Pot: 550,
  Time: 2.6,
  PP: -20,
  Focus: 13,
  Rage: 0,
  StepCancel: 0,
  WACancel: 0
};
addProp(scNA)

// Charged Blade
export var ChargedBlade = {
  Pot: 220,
  Time: 0.5,
  PP: -7,
  Focus: 4,
  Rage: 0,
  StepCancel: 0.4,
  WACancel: 0.5
};
addProp(ChargedBlade)

// Weapon Action Stage 1
export var WA1 = {
  Pot: 50,
  Time: 0.37,
  PP: -2,
  Focus: 1,
  Rage: 0,
  StepCancel: 0,
  WACancel: 0
};
addProp(WA1)

// Weapon Action Stage 2
export var WA2 = {
  Pot: 80,
  Time: 0.23,
  PP: -2,
  Focus: 2,
  Rage: 0,
  StepCancel: 0,
  WACancel: 0
};
addProp(WA2)

// Weapon Action Stage 3
export var WA3 = {
  Pot: 200,
  Time: 0.433333333333,
  PP: -4,
  Focus: 3,
  Rage: 0,
  StepCancel: 0,
  WACancel: 0
};
addProp(WA3)

// Move Weapon Action
export var mWA = {
  Pot: 70,
  Time: 0.47,
  PP: -3,
  Focus: 2.5,
  Rage: 0,
  StepCancel: 0,
  WACancel: 0
};
addProp(mWA)

// Blade Counter Normal Attack
export var BCNA = {
  Pot: 400,
  Time: 0.4,
  PP: -11,
  Focus: 4,
  Rage: 0,
  StepCancel: 0,
  WACancel: 0,
  BC: true
};
addProp(BCNA)

// Blade Counter Weapon Action
export var BCWA = {
  Pot: 960,
  Time: 1.8,
  PP: -6,
  Focus: 9,
  Rage: 0,
  StepCancel: 1.55,
  WACancel: 1.55,
  BC: true
};
addProp(BCWA)

// Mobile Blade Counter Normal Attack
export var mBCNA = {
  Pot: 420,
  Time: 0.397,
  PP: -13,
  Focus: 4,
  Rage: 0,
  StepCancel: 0,
  WACancel: 0
};
addProp(mBCNA)

// Mobile Blade Counter Weapon Action
export var mBCWA = {
  Pot: 960,
  Time: 1.797,
  PP: -6,
  Focus: 9,
  Rage: 0,
  StepCancel: 1.547,
  WACancel: 1.547
};
addProp(mBCWA)

// Step Counter Normal Attack
export var StepCNA = {
  Pot: 380,
  Time: 0.70,
  PP: -12,
  Focus: 4,
  Rage: 0,
  StepCancel: 0,
  WACancel: 0
};
addProp(StepCNA)

// Step Counter Weapon Action
export var StepCWA = {
  Pot: 550,
  Time: 1.02,
  PP: -4,
  Focus: 18,
  Rage: 3,
  StepCancel: 0.82,
  WACancel: 0.82
};
addProp(StepCWA)

// Photon Blast
export var PB = {
  Pot: 4450,
  Time: 5.60,
  PP: 0,
  Focus: 2530,
  Rage: 0,
  StepCancel: 0,
  WACancel: 0
};
addProp(PB)

// Unleashed Rage
export var UR = {
  Pot: 1000,
  Time: 1.27,
  PP: -20,
  Focus: 22,
  Rage: 0,
  StepCancel: 0,
  WACancel: 0
};
addProp(UR)

// Overdrive Finisher
export var ODF = {
  Pot: 2695,
  Time: 4.20,
  PP: 0,
  Focus: 0,
  Rage: 0,
  StepCancel: 0,
  WACancel: 0,
  ODF: true
};
addProp(ODF)

// Stay Waving Rigel Custom 3
export var sWRC3 = {
  Pot: 3 * 130 * 0.35 + RBR(RB).Pot,
  Time: 0.433333333333,
  PP: 18 * 1.1 + RB.PP,
  Focus: 0.6 * 3 + RB.Focus,
  Rage: 0.2 * 3 + RB.Rage,
  StepCancel: 0.18,
  WACancel: 0.33
};
addProp(sWRC3)

// Stay Reaping Regulus Custom 2
export var sRRC2 = {
  Pot: 210 * 0.84 + RBR(RB).Pot,
  Time: 0.56,
  PP: 17 * 1.05 + RB.PP,
  Focus: 4 + RB.Focus,
  Rage: 4 + RB.Rage,
  StepCancel: 0.35,
  WACancel: 0.46
};
addProp(sRRC2)

// Move Reaping Regulus Custom 2
export var mRRC2 = {
  Pot: 273 * 0.84 + RBR(RB).Pot,
  Time: 0.73,
  PP: 17 * 1.05 + RB.PP,
  Focus: 4 + RB.Focus,
  Rage: 1.5 + RB.Rage,
  StepCancel: 0.53,
  WACancel: 0.65
};
addProp(mRRC2)

// Charged Blade PA
export var ChargedBladePA = {
  Pot: 220,
  Time: 0.58,
  PP: -7,
  Focus: 4,
  Rage: 0,
  StepCancel: 0.48,
  WACancel: 0.58
};
addProp(ChargedBladePA)

// Slug Shot Shifting Spica Custom 1 
export var SlugShotSSC1 = {
  Pot: 170 * 1.07,
  Time: 0.51,
  PP: -10,
  Focus: 2.5,
  Rage: 3.2,
  StepCancel: 0.41,
  WACancel: 0.41
};
addProp(SlugShotSSC1)

// Move Shifting Spica Custom 2
export var mSSC2 = {
  Pot: 371 * 0.89 + RBR(RB).Pot,
  Time: 1.0,
  PP: 14 * 1.05 + RB.PP,
  Focus: 5 + RB.Focus,
  Rage: 1.5 + RB.Rage,
  StepCancel: 0.82,
  WACancel: 0.90
};
addProp(mSSC2)

// Stay Shifting Spica Custom 3
export var sSSC3 = {
  Pot: 190 + RBR(RB).Pot,
  Time: 0.6,
  PP: 14 * 1.0 + RB.PP,
  Focus: 2.6 + RB.Focus,
  Rage: 0.2 + RB.Rage,
  StepCancel: 0.35,
  WACancel: 0.50
};
addProp(sSSC3)
