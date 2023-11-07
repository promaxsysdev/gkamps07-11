 var drivingCycleWeightage = new Map([
    ["Idle", 9],
    ["2nd Gear low Acc", 6],
    ["2nd Gear high Acc", 4],
    ["3rd Gear low Acc", 7],
    ["3rd Gear High Acc", 7],
    ["4th Gear Cruise", 9],
    ["5th Gear Cruise", 9],

]);

// Refer D Cell in excel
var drivingCycleWeightageCalculation = new Map([
    ["Idle", 0],
    ["2nd Gear low Acc", 0],
    ["2nd Gear high Acc", 0],
    ["3rd Gear low Acc", 0],
    ["3rd Gear High Acc", 0],
    ["4th Gear Cruise", 0],
    ["5th Gear Cruise", 0],

]);
var vehicalTypeSPL
    = new Map([
        ["Sporty", 70],
        ["Luxury", 100],
        ["Powerful", 30],
        ["SportyCal", 0],
        ["LuxuryCal", 0],
        ["PowerfulCal", 0],
        ["%wforSports", 0],
        ["%wforLux", 0],
        ["%wforPow", 0],
    ]);
var vehicalTypeSQ
    = new Map([
        ["Sporty", 80],
        ["Luxury", 100],
        ["Powerful", 30],
        ["SportyCal", 0],
        ["LuxuryCal", 0],
        ["PowerfulCal", 0],
        ["%wforSports", 0],
        ["%wforLux", 0],
        ["%wforPow", 0],
    ]);
var vehicalTypeTR
    = new Map([
        ["Sporty", 50],
        ["Luxury", 100],
        ["Powerful", 100],
        ["SportyCal", 0],
        ["LuxuryCal", 0],
        ["PowerfulCal", 0],
        ["%wforSports", 0],
        ["%wforLux", 0],
        ["%wforPow", 0],
    ]);
var vehicalTypeCalECell
    = new Map([
        ["Sporty", 0],
        ["Luxury", 0],
        ["Powerful", 0],
        ["SportyCal", 0],
        ["LuxuryCal", 0],
        ["PowerfulCal", 0],
        ["%wforSports", 0],
        ["%wforLux", 0],
        ["%wforPow", 0],
    ]);
var benchMarkingSPL = new Map([
    ["Idle", 80.00],
    ["2nd Gear low Acc", 66.00],
    ["2nd Gear high Acc", 85.00],
    ["3rd Gear low Acc", 70.00],
    ["3rd Gear High Acc", 82.00],
    ["4th Gear Cruise", 71.74],
    ["5th Gear Cruise", 75.20],

]);
var benchMarkingSQ = new Map([
    ["Idle", 95.00],
    ["2nd Gear low Acc", 65.00],
    ["2nd Gear high Acc", 5.00],
    ["3rd Gear low Acc", 55.00],
    ["3rd Gear High Acc", 5.00],
    ["4th Gear Cruise", 39.00],
    ["5th Gear Cruise", 33.00],

]);

var benchMarkingTR = new Map([
    ["Idle", 1.77],
    ["2nd Gear low Acc", 3.00],
    ["2nd Gear high Acc", 15.00],
    ["3rd Gear low Acc", 3.00],
    ["3rd Gear High Acc", 15.00],
    ["4th Gear Cruise", 1.00],
    ["5th Gear Cruise", 1.00],

]);

var benchMarkingSPLWtScore = new Map([
    ["Idle", 0],
    ["2nd Gear low Acc", 0],
    ["2nd Gear high Acc", 0],
    ["3rd Gear low Acc", 0],
    ["3rd Gear High Acc", 0],
    ["4th Gear Cruise", 0],
    ["5th Gear Cruise", 0],
    ["Total", 0],

]);

var benchMarkingSQWtScore = new Map([
    ["Idle", 0],
    ["2nd Gear low Acc", 0],
    ["2nd Gear high Acc", 0],
    ["3rd Gear low Acc", 0],
    ["3rd Gear High Acc", 0],
    ["4th Gear Cruise", 0],
    ["5th Gear Cruise", 0],
    ["Total", 0],
]);

var benchMarkingTRWtScore = new Map([
    ["Idle", 0],
    ["2nd Gear low Acc", 0],
    ["2nd Gear high Acc", 0],
    ["3rd Gear low Acc", 0],
    ["3rd Gear High Acc", 0],
    ["4th Gear Cruise", 0],
    ["5th Gear Cruise", 0],
    ["Total", 0],
]);

var benchMarkingVehicalFeel = new Map([
    ["Idle", 9],
    ["Acceleration quick", 6],
    ["Acceleration extreme", 4],
    ["Acceleration moderate", 7],
    ["Acceleration high", 7],
    ["Cruise LS", 9],
    ["Cruise HS", 9],

]);

const benchMarkingVehicalFeelType = new Map([
    ["Idle", "Luxary"],
    ["Acceleration quick", "Aggressiveness"],
    ["Acceleration extreme", "Powerfulness"],
    ["Acceleration moderate", "Sportyness"],
    ["Acceleration high", "Sportyness"],
    ["Cruise LS", "Luxary"],
    ["Cruise HS", "Luxary"],

]);

const matSLP_S = new Map([
    ["Idle", "Luxary"],
    ["Acceleration quick", "Aggressiveness"],
    ["Acceleration extreme", "Powerfulness"],
    ["Acceleration moderate", "Sportyness"],
    ["Acceleration high", "Sportyness"],
    ["Cruise LS", "Luxary"],
    ["Cruise HS", "Luxary"],

]);

const WtScoreS = new Map([
    ["Idle", 9],
    ["2nd Gear low Acc", 6],
    ["2nd Gear high Acc", 4],

]);

var WtScoreL = new Map([
    ["Idle", 9],
    ["2nd Gear low Acc", 6],
    ["2nd Gear high Acc", 4],

]);
var WtScoreP = new Map([
    ["Idle", 0],
    ["2nd Gear low Acc", 0],
    ["2nd Gear high Acc", 0],

]);
var WtScoreMax = new Map([
    ["Idle", 0],
    ["2nd Gear low Acc", 0],
    ["2nd Gear high Acc", 0],

]);

var WtScoreWCell = new Map([
    ["Idle", 9],
    ["2nd Gear low Acc", 6],
    ["2nd Gear high Acc", 4],

]);

const WtScoreXCell = new Map([
    ["Idle", "SPL"],
    ["2nd Gear low Acc", "SQ"],
    ["2nd Gear high Acc", "TR"],

]);

var coRelColOne = new Map([
    ["row1", 0],
    ["row2", 0],
    ["row3", 0],
    ["row4", 0],
    ["row5", 0],  

]);

var coRelColTwo = new Map([
    ["row1", 0],
    ["row2", 0],
    ["row3", 0],
    ["row4", 0],
    ["row5", 0],  

]);

var coRelColThree = new Map([
    ["row1", 0],
    ["row2", 0],
    ["row3", 0],
    ["row4", 0],
    ["row5", 0],  

]);

var intSubjectiveRating =5.75;
var extSubjectiveRating =5.75;
var tarInterior = 6.25;
var tarExterior = 6.25;



var corealtionFactor = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

var comfortIndexValue = 0;
var feel = 0;
var comfortIndexR23Value = 0;

function calDrivingCycleWeightageCalculation() {
    let sumValues = 0;
    drivingCycleWeightage.forEach(value => {
        sumValues += value;
    });
    console.log(sumValues);
    drivingCycleWeightageCalculation.set("Idle", drivingCycleWeightage.get("Idle") / sumValues * 100);
    drivingCycleWeightageCalculation.set("2nd Gear low Acc", drivingCycleWeightage.get("2nd Gear low Acc") / sumValues * 100);
    drivingCycleWeightageCalculation.set("2nd Gear high Acc", drivingCycleWeightage.get("2nd Gear high Acc") / sumValues * 100);
    drivingCycleWeightageCalculation.set("3rd Gear low Acc", drivingCycleWeightage.get("3rd Gear low Acc") / sumValues * 100);
    drivingCycleWeightageCalculation.set("3rd Gear High Acc", drivingCycleWeightage.get("3rd Gear High Acc") / sumValues * 100);
    drivingCycleWeightageCalculation.set("4th Gear Cruise", drivingCycleWeightage.get("4th Gear Cruise") / sumValues * 100);
    drivingCycleWeightageCalculation.set("5th Gear Cruise", drivingCycleWeightage.get("5th Gear Cruise") / sumValues * 100);
    console.log(drivingCycleWeightageCalculation);
}

function calvehicalTypeCalECell() {
    let sumValuesRow = 0;
    let sumValuesAll = 0;

    let sumVTSplRow = vehicalTypeSPL.get("Sporty") + vehicalTypeSQ.get("Sporty") + vehicalTypeTR.get("Sporty");
    let sumVTSQRow = vehicalTypeSPL.get("Luxury") + vehicalTypeSQ.get("Luxury") + vehicalTypeTR.get("Luxury");
    let sumVTTRRow = vehicalTypeSPL.get("Powerful") + vehicalTypeSQ.get("Powerful") + vehicalTypeTR.get("Powerful");

    let SumVTSPLSQTR = sumVTSplRow + sumVTSQRow + sumVTTRRow;

    vehicalTypeCalECell.set("Sporty", sumVTSplRow / SumVTSPLSQTR);
    vehicalTypeCalECell.set("Luxury", sumVTSQRow / SumVTSPLSQTR);
    vehicalTypeCalECell.set("Powerful", sumVTTRRow / SumVTSPLSQTR);

    vehicalTypeSPL.set("SportyCal", vehicalTypeSPL.get("Sporty") / SumVTSPLSQTR * vehicalTypeCalECell.get("Sporty"));
    vehicalTypeSPL.set("LuxuryCal", vehicalTypeSPL.get("Luxury") / SumVTSPLSQTR * vehicalTypeCalECell.get("Luxury"));
    vehicalTypeSPL.set("PowerfulCal", vehicalTypeSPL.get("Powerful") / SumVTSPLSQTR * vehicalTypeCalECell.get("Powerful"));

    vehicalTypeSQ.set("SportyCal", vehicalTypeSQ.get("Sporty") / SumVTSPLSQTR * vehicalTypeCalECell.get("Sporty"));
    vehicalTypeSQ.set("LuxuryCal", vehicalTypeSQ.get("Luxury") / SumVTSPLSQTR * vehicalTypeCalECell.get("Luxury"));
    vehicalTypeSQ.set("PowerfulCal", vehicalTypeSQ.get("Powerful") / SumVTSPLSQTR * vehicalTypeCalECell.get("Powerful"));

    vehicalTypeTR.set("SportyCal", vehicalTypeTR.get("Sporty") / SumVTSPLSQTR * vehicalTypeCalECell.get("Sporty"));
    vehicalTypeTR.set("LuxuryCal", vehicalTypeTR.get("Luxury") / SumVTSPLSQTR * vehicalTypeCalECell.get("Luxury"));
    vehicalTypeTR.set("PowerfulCal", vehicalTypeTR.get("Powerful") / SumVTSPLSQTR * vehicalTypeCalECell.get("Powerful"));

    let sumVTSplRowCal = vehicalTypeSPL.get("SportyCal") + vehicalTypeSQ.get("SportyCal") + vehicalTypeTR.get("SportyCal");
    let sumVTSQRowCal = vehicalTypeSPL.get("LuxuryCal") + vehicalTypeSQ.get("LuxuryCal") + vehicalTypeTR.get("LuxuryCal");
    let sumVTTRRowCal = vehicalTypeSPL.get("PowerfulCal") + vehicalTypeSQ.get("PowerfulCal") + vehicalTypeTR.get("PowerfulCal");

    vehicalTypeSPL.set("%wforSports", vehicalTypeSPL.get("SportyCal") / sumVTSplRowCal * 100);
    vehicalTypeSPL.set("%wforLux", vehicalTypeSPL.get("LuxuryCal") / sumVTSQRowCal * 100);
    vehicalTypeSPL.set("%wforPow", vehicalTypeSPL.get("PowerfulCal") / sumVTTRRowCal * 100);

    vehicalTypeSQ.set("%wforSports", vehicalTypeSQ.get("SportyCal") / sumVTSplRowCal * 100);
    vehicalTypeSQ.set("%wforLux", vehicalTypeSQ.get("LuxuryCal") / sumVTSQRowCal * 100);
    vehicalTypeSQ.set("%wforPow", vehicalTypeSQ.get("PowerfulCal") / sumVTTRRowCal * 100);

    vehicalTypeTR.set("%wforSports", vehicalTypeTR.get("SportyCal") / sumVTSplRowCal * 100);
    vehicalTypeTR.set("%wforLux", vehicalTypeTR.get("LuxuryCal") / sumVTSQRowCal * 100);
    vehicalTypeTR.set("%wforPow", vehicalTypeTR.get("PowerfulCal") / sumVTTRRowCal * 100);
    console.log(vehicalTypeCalECell);
    console.log(vehicalTypeSPL);
    console.log(vehicalTypeSQ);
    console.log(vehicalTypeTR);
}

function calBenchMarkingSPLWtScore() {

    let benchMarkingSPLIdle = benchMarkingSPL.get("Idle");
    console.log(benchMarkingSPLIdle);
    switch (true) {
        case benchMarkingSPLIdle < 45:
            benchMarkingSPLWtScore.set("Idle", 1);
            break;
        case benchMarkingSPLIdle < 50:
            benchMarkingSPLWtScore.set("Idle", 0.8);
            break;
        case benchMarkingSPLIdle < 55:
            benchMarkingSPLWtScore.set("Idle", 0.6);
            break;
        case benchMarkingSPLIdle < 60:
            benchMarkingSPLWtScore.set("Idle", 0.5);
            break;
        case benchMarkingSPLIdle < 70:
            benchMarkingSPLWtScore.set("Idle", 0.4);
            break;
        default:
            benchMarkingSPLWtScore.set("Idle", 0.3);
    }
    let benchMarkingSPL2ndGearlowAcc = benchMarkingSPL.get("2nd Gear low Acc");

    console.log(benchMarkingSPL2ndGearlowAcc);

    switch (true) {
        case benchMarkingSPL2ndGearlowAcc < 45:
            benchMarkingSPLWtScore.set("2nd Gear low Acc", 1);
            break;
        case benchMarkingSPL2ndGearlowAcc < 50:
            benchMarkingSPLWtScore.set("2nd Gear low Acc", 0.8);
            break;
        case benchMarkingSPL2ndGearlowAcc < 55:
            benchMarkingSPLWtScore.set("2nd Gear low Acc", 0.6);
            break;
        case benchMarkingSPL2ndGearlowAcc < 60:
            benchMarkingSPLWtScore.set("2nd Gear low Acc", 0.5);
            break;
        case benchMarkingSPL2ndGearlowAcc < 70:
            benchMarkingSPLWtScore.set("2nd Gear low Acc", 0.4);
            break;
        default:
            benchMarkingSPLWtScore.set("2nd Gear low Acc", 0.3);
    }

    let benchMarkingSPL2ndGearhighAcc = benchMarkingSPL.get("2nd Gear high Acc");
    switch (true) {
        case benchMarkingSPL2ndGearhighAcc < 45:
            benchMarkingSPLWtScore.set("2nd Gear high Acc", 1);
            break;
        case benchMarkingSPL2ndGearhighAcc < 50:
            benchMarkingSPLWtScore.set("2nd Gear high Acc", 0.8);
            break;
        case benchMarkingSPL2ndGearhighAcc < 55:
            benchMarkingSPLWtScore.set("2nd Gear high Acc", 0.6);
            break;
        case benchMarkingSPL2ndGearhighAcc < 60:
            benchMarkingSPLWtScore.set("2nd Gear high Acc", 0.5);
            break;
        case benchMarkingSPL2ndGearhighAcc < 70:
            benchMarkingSPLWtScore.set("2nd Gear high Acc", 0.4);
            break;
        default:
            benchMarkingSPLWtScore.set("2nd Gear high Acc", 0.3);
    }
    let benchMarkingSPL3rdGearlowAcc = benchMarkingSPL.get("3rd Gear low Acc");
    switch (true) {
        case benchMarkingSPL3rdGearlowAcc < 45:
            benchMarkingSPLWtScore.set("3rd Gear low Acc", 1);
            break;
        case benchMarkingSPL3rdGearlowAcc < 50:
            benchMarkingSPLWtScore.set("3rd Gear low Acc", 0.8);
            break;
        case benchMarkingSPL3rdGearlowAcc < 55:
            benchMarkingSPLWtScore.set("3rd Gear low Acc", 0.6);
            break;
        case benchMarkingSPL3rdGearlowAcc < 60:
            benchMarkingSPLWtScore.set("3rd Gear low Acc", 0.5);
            break;
        case benchMarkingSPL3rdGearlowAcc < 70:
            benchMarkingSPLWtScore.set("3rd Gear low Acc", 0.4);
            break;
        default:
            benchMarkingSPLWtScore.set("3rd Gear low Acc", 0.3);
    }
    let benchMarkingSPL3rdGearHighAcc = benchMarkingSPL.get("3rd Gear High Acc");
    switch (true) {
        case benchMarkingSPL3rdGearHighAcc < 45:
            benchMarkingSPLWtScore.set("3rd Gear High Acc", 1);
            break;
        case benchMarkingSPL3rdGearHighAcc < 50:
            benchMarkingSPLWtScore.set("3rd Gear High Acc", 0.8);
            break;
        case benchMarkingSPL3rdGearHighAcc < 55:
            benchMarkingSPLWtScore.set("3rd Gear High Acc", 0.6);
            break;
        case benchMarkingSPL3rdGearHighAcc < 60:
            benchMarkingSPLWtScore.set("3rd Gear High Acc", 0.5);
            break;
        case benchMarkingSPL3rdGearHighAcc < 70:
            benchMarkingSPLWtScore.set("3rd Gear High Acc", 0.4);
            break;
        default:
            benchMarkingSPLWtScore.set("3rd Gear High Acc", 0.3);
    }
    let benchMarkingSPL4thGearCruise = benchMarkingSPL.get("4th Gear Cruise");
    switch (true) {
        case benchMarkingSPL4thGearCruise < 45:
            benchMarkingSPLWtScore.set("4th Gear Cruise", 1);
            break;
        case benchMarkingSPL4thGearCruise < 50:
            benchMarkingSPLWtScore.set("4th Gear Cruise", 0.8);
            break;
        case benchMarkingSPL4thGearCruise < 55:
            benchMarkingSPLWtScore.set("4th Gear Cruise", 0.6);
            break;
        case benchMarkingSPL4thGearCruise < 60:
            benchMarkingSPLWtScore.set("4th Gear Cruise", 0.5);
            break;
        case benchMarkingSPL4thGearCruise < 70:
            benchMarkingSPLWtScore.set("4th Gear Cruise", 0.4);
            break;
        default:
            benchMarkingSPLWtScore.set("4th Gear Cruise", 0.3);
    }
    
    let benchMarkingSPL5thGearCruise = benchMarkingSPL.get("5th Gear Cruise");
    switch (true) {
        case benchMarkingSPL5thGearCruise < 45:
            benchMarkingSPLWtScore.set("5th Gear Cruise", 1);
            break;
        case benchMarkingSPL5thGearCruise < 50:
            benchMarkingSPLWtScore.set("5th Gear Cruise", 0.8);
            break;
        case benchMarkingSPL5thGearCruise < 55:
            benchMarkingSPLWtScore.set("5th Gear Cruise", 0.6);
            break;
        case benchMarkingSPL5thGearCruise < 60:
            benchMarkingSPLWtScore.set("5th Gear Cruise", 0.5);
            break;
        case benchMarkingSPL5thGearCruise < 70:
            benchMarkingSPLWtScore.set("5th Gear Cruise", 0.4);
            break;
        default:
            benchMarkingSPLWtScore.set("5th Gear Cruise", 0.3);
    }
    console.log(benchMarkingSPLWtScore);

}
function calBenchMarkingSQWtScore() {

    let benchMarkingSQIdle = benchMarkingSQ.get("Idle");
    console.log(benchMarkingSQIdle);
    switch (true) {
        case benchMarkingSQIdle < 50:
            benchMarkingSQWtScore.set("Idle", 0);
            break;
        case benchMarkingSQIdle < 60:
            benchMarkingSQWtScore.set("Idle", 0.1);
            break;
        case benchMarkingSQIdle < 70:
            benchMarkingSQWtScore.set("Idle", 0.3);
            break;
        case benchMarkingSQIdle < 80:
            benchMarkingSQWtScore.set("Idle", 0.6);
            break;
        case benchMarkingSQIdle < 90:
            benchMarkingSQWtScore.set("Idle", 0.8);
            break;
        default:
            benchMarkingSQWtScore.set("Idle", 1);
    }
    let benchMarkingSQ2ndGearlowAcc = benchMarkingSQ.get("2nd Gear low Acc");

    console.log(benchMarkingSQ2ndGearlowAcc);

    switch (true) {
        case benchMarkingSQ2ndGearlowAcc < 30:
            benchMarkingSQWtScore.set("2nd Gear low Acc", 1);
            break;
        case benchMarkingSQ2ndGearlowAcc < 45:
            benchMarkingSQWtScore.set("2nd Gear low Acc", 0.8);
            break;
        case benchMarkingSQ2ndGearlowAcc < 60:
            benchMarkingSQWtScore.set("2nd Gear low Acc", 0.5);
            break;
        case benchMarkingSQ2ndGearlowAcc < 70:
            benchMarkingSQWtScore.set("2nd Gear low Acc", 0.6);
            break;
        case benchMarkingSQ2ndGearlowAcc < 80:
            benchMarkingSQWtScore.set("2nd Gear low Acc", 0.8);
            break;
        default:
            benchMarkingSQWtScore.set("2nd Gear low Acc", 0.8);
    }

    let benchMarkingSQ2ndGearhighAcc = benchMarkingSQ.get("2nd Gear high Acc");
    switch (true) {
        case benchMarkingSQ2ndGearhighAcc < 30:
            benchMarkingSQWtScore.set("2nd Gear high Acc", 0.6);
            break;
        case benchMarkingSQ2ndGearhighAcc < 45:
            benchMarkingSQWtScore.set("2nd Gear high Acc", 0.5);
            break;
        case benchMarkingSQ2ndGearhighAcc < 60:
            benchMarkingSQWtScore.set("2nd Gear high Acc", 0.3);
            break;
        case benchMarkingSQ2ndGearhighAcc < 70:
            benchMarkingSQWtScore.set("2nd Gear high Acc", 0.6);
            break;
        case benchMarkingSQ2ndGearhighAcc < 80:
            benchMarkingSQWtScore.set("2nd Gear high Acc", 0.7);
            break;
        default:
            benchMarkingSQWtScore.set("2nd Gear high Acc", 1);
    }
    let benchMarkingSQ3rdGearlowAcc = benchMarkingSQ.get("3rd Gear low Acc");
    switch (true) {
        case benchMarkingSQ3rdGearlowAcc < 30:
            benchMarkingSQWtScore.set("3rd Gear low Acc", 0.3);
            break;
        case benchMarkingSQ3rdGearlowAcc < 45:
            benchMarkingSQWtScore.set("3rd Gear low Acc", 0.8);
            break;
        case benchMarkingSQ3rdGearlowAcc < 60:
            benchMarkingSQWtScore.set("3rd Gear low Acc", 0.5);
            break;
        case benchMarkingSQ3rdGearlowAcc < 70:
            benchMarkingSQWtScore.set("3rd Gear low Acc", 0.6);
            break;
        case benchMarkingSQ3rdGearlowAcc < 80:
            benchMarkingSQWtScore.set("3rd Gear low Acc", 0.8);
            break;
        default:
            benchMarkingSQWtScore.set("3rd Gear low Acc", 0.8);
    }
    let benchMarkingSQ3rdGearHighAcc = benchMarkingSQ.get("3rd Gear High Acc");
    switch (true) {
        case benchMarkingSQ3rdGearHighAcc < 30:
            benchMarkingSQWtScore.set("3rd Gear High Acc", 0.6);
            break;
        case benchMarkingSQ3rdGearHighAcc < 45:
            benchMarkingSQWtScore.set("3rd Gear High Acc", 0.5);
            break;
        case benchMarkingSQ3rdGearHighAcc < 60:
            benchMarkingSQWtScore.set("3rd Gear High Acc", 0.3);
            break;
        case benchMarkingSQ3rdGearHighAcc < 70:
            benchMarkingSQWtScore.set("3rd Gear High Acc", 0.6);
            break;
        case benchMarkingSQ3rdGearHighAcc < 80:
            benchMarkingSQWtScore.set("3rd Gear High Acc", 0.7);
            break;
        default:
            benchMarkingSQWtScore.set("3rd Gear High Acc", 1);
    }
    let benchMarkingSQ4thGearCruise = benchMarkingSQ.get("4th Gear Cruise");
    switch (true) {
        case benchMarkingSQ4thGearCruise < 30:
            benchMarkingSQWtScore.set("4th Gear Cruise", 0);
            break;
        case benchMarkingSQ4thGearCruise < 45:
            benchMarkingSQWtScore.set("4th Gear Cruise", 0.1);
            break;
        case benchMarkingSQ4thGearCruise < 60:
            benchMarkingSQWtScore.set("4th Gear Cruise", 0.3);
            break;
        case benchMarkingSQ4thGearCruise < 70:
            benchMarkingSQWtScore.set("4th Gear Cruise", 0.6);
            break;
        case benchMarkingSQ4thGearCruise < 80:
            benchMarkingSQWtScore.set("4th Gear Cruise", 0.8);
            break;
        default:
            benchMarkingSQWtScore.set("4th Gear Cruise", 1);
    }

    let benchMarkingSQ5thGearCruise = benchMarkingSQ.get("5th Gear Cruise");
    switch (true) {
        case benchMarkingSQ5thGearCruise < 30:
            benchMarkingSQWtScore.set("5th Gear Cruise", 0);
            break;
        case benchMarkingSQ5thGearCruise < 45:
            benchMarkingSQWtScore.set("5th Gear Cruise", 0.1);
            break;
        case benchMarkingSQ5thGearCruise < 60:
            benchMarkingSQWtScore.set("5th Gear Cruise", 0.3);
            break;
        case benchMarkingSQ5thGearCruise < 70:
            benchMarkingSQWtScore.set("5th Gear Cruise", 0.6);
            break;
        case benchMarkingSQ5thGearCruise < 80:
            benchMarkingSQWtScore.set("5th Gear Cruise", 0.8);
            break;
        default:
            benchMarkingSQWtScore.set("5th Gear Cruise", 1);
    }
    console.log("SQ ", benchMarkingSQWtScore);

}

function calBenchMarkingTRWtScore() {

    //console.log("TR Start ", benchMarkingTRWtScore);
    let benchMarkingTRIdle = benchMarkingTR.get("Idle");
    console.log("TR Idle Value ", benchMarkingTRIdle);
    //console.log(benchMarkingTRIdle);

    
    switch (true) {
        case benchMarkingTRIdle < 0.5:
           benchMarkingTRWtScore.set("Idle", 1);
            break;
        case benchMarkingTRIdle < 0.75:
            benchMarkingTRWtScore.set("Idle", 0.8);
            break;
        case benchMarkingTRIdle < 1:
            benchMarkingTRWtScore.set("Idle", 0.6);
            break;
        case benchMarkingTRIdle < 1.5:
            benchMarkingTRWtScore.set("Idle", 0.4);
            break;
        case benchMarkingTRIdle < 3:
            benchMarkingTRWtScore.set("Idle", 0.2);
            break;
        default:
            benchMarkingTRWtScore.set("Idle", 0);
    }
    

    let benchMarkingTR2ndGearlowAcc = benchMarkingTR.get("2nd Gear low Acc");
    console.log(benchMarkingTR2ndGearlowAcc);

    switch (true) {
        case benchMarkingTR2ndGearlowAcc < 1:
            benchMarkingTRWtScore.set("2nd Gear low Acc", 1);
            break;
        case benchMarkingTR2ndGearlowAcc < 2:
            benchMarkingTRWtScore.set("2nd Gear low Acc", 0.8);
            break;
        case benchMarkingTR2ndGearlowAcc < 3:
            benchMarkingTRWtScore.set("2nd Gear low Acc", 0.6);
            break;
        case benchMarkingTR2ndGearlowAcc < 4:
            benchMarkingTRWtScore.set("2nd Gear low Acc", 0.4);
            break;

        default:
            benchMarkingTRWtScore.set("2nd Gear low Acc", 0.2);
    }

    let benchMarkingTR2ndGearhighAcc = benchMarkingTR.get("2nd Gear high Acc");
    switch (true) {
        case benchMarkingTR2ndGearhighAcc < 1:
            benchMarkingTRWtScore.set("2nd Gear high Acc", 1);
            break;
        case benchMarkingTR2ndGearhighAcc < 2:
            benchMarkingTRWtScore.set("2nd Gear high Acc", 0.8);
            break;
        case benchMarkingTR2ndGearhighAcc < 3:
            benchMarkingTRWtScore.set("2nd Gear high Acc", 0.6);
            break;
        case benchMarkingTR2ndGearhighAcc < 4:
            benchMarkingTRWtScore.set("2nd Gear high Acc", 0.4);
            break;
        default:
            benchMarkingTRWtScore.set("2nd Gear high Acc", 0.2);
    }
    let benchMarkingTR3rdGearlowAcc = benchMarkingTR.get("3rd Gear low Acc");
    switch (true) {
        case benchMarkingTR3rdGearlowAcc < 1:
            benchMarkingTRWtScore.set("3rd Gear low Acc", 1);
            break;
        case benchMarkingTR3rdGearlowAcc < 2:
            benchMarkingTRWtScore.set("3rd Gear low Acc", 0.8);
            break;
        case benchMarkingTR3rdGearlowAcc < 3:
            benchMarkingTRWtScore.set("3rd Gear low Acc", 0.6);
            break;
        case benchMarkingTR3rdGearlowAcc < 4:
            benchMarkingTRWtScore.set("3rd Gear low Acc", 0.4);
            break;

        default:
            benchMarkingTRWtScore.set("3rd Gear low Acc", 0.2);
    }
    let benchMarkingTR3rdGearHighAcc = benchMarkingTR.get("3rd Gear High Acc");
    switch (true) {
        case benchMarkingTR3rdGearHighAcc < 1:
            benchMarkingTRWtScore.set("3rd Gear High Acc", 1);
            break;
        case benchMarkingTR3rdGearHighAcc < 2:
            benchMarkingTRWtScore.set("3rd Gear High Acc", 0.8);
            break;
        case benchMarkingTR3rdGearHighAcc < 3:
            benchMarkingTRWtScore.set("3rd Gear High Acc", 0.6);
            break;
        case benchMarkingTR3rdGearHighAcc < 4:
            benchMarkingTRWtScore.set("3rd Gear High Acc", 0.4);
            break;
        default:
            benchMarkingTRWtScore.set("3rd Gear High Acc", 0.2);
    }
    let benchMarkingTR4thGearCruise = benchMarkingTR.get("4th Gear Cruise");
    switch (true) {
        case benchMarkingTR4thGearCruise < 1:
            benchMarkingTRWtScore.set("4th Gear Cruise", 1);
            break;
        case benchMarkingTR4thGearCruise < 2:
            benchMarkingTRWtScore.set("4th Gear Cruise", 0.8);
            break;
        case benchMarkingTR4thGearCruise < 3:
            benchMarkingTRWtScore.set("4th Gear Cruise", 0.6);
            break;
        case benchMarkingTR4thGearCruise < 4:
            benchMarkingTRWtScore.set("4th Gear Cruise", 0.4);
            break;
        default:
            benchMarkingTRWtScore.set("4th Gear Cruise", 0.2);
    }

    let benchMarkingTR5thGearCruise = benchMarkingTR.get("5th Gear Cruise");
    switch (true) {
        case benchMarkingTR5thGearCruise < 1:
            benchMarkingTRWtScore.set("5th Gear Cruise", 1);
            break;
        case benchMarkingTR5thGearCruise < 2:
            benchMarkingTRWtScore.set("5th Gear Cruise", 0.8);
            break;
        case benchMarkingTR5thGearCruise < 3:
            benchMarkingTRWtScore.set("5th Gear Cruise", 0.6);
            break;
        case benchMarkingTR5thGearCruise < 4:
            benchMarkingTRWtScore.set("5th Gear Cruise", 0.4);
            break;
        default:
            benchMarkingTRWtScore.set("5th Gear Cruise", 1);
    }
    console.log(benchMarkingTRWtScore);

}

function calWtScoreS() {
    WtScoreS.set("Idle", (1 - ((benchMarkingSPLWtScore.get("3rd Gear low Acc") +benchMarkingSPLWtScore.get("2nd Gear low Acc") ) / 2)));
    WtScoreS.set("2nd Gear low Acc", (1 - (benchMarkingSQWtScore.get("3rd Gear low Acc") + benchMarkingSQWtScore.get("2nd Gear low Acc")) / 2));
    WtScoreS.set("2nd Gear high Acc", (1 - ( benchMarkingTRWtScore.get("3rd Gear low Acc") + benchMarkingTRWtScore.get("2nd Gear low Acc")) / 2));

    console.log(WtScoreS);


}

function calWtScoreL() {
    WtScoreL.set("Idle", (((benchMarkingSPLWtScore.get("Idle") +benchMarkingSPLWtScore.get("4th Gear Cruise") + benchMarkingSPLWtScore.get("5th Gear Cruise")) / 3)));
    WtScoreL.set("2nd Gear low Acc", (((benchMarkingSQWtScore.get("Idle") + benchMarkingSQWtScore.get("4th Gear Cruise") + benchMarkingSQWtScore.get("5th Gear Cruise")) / 3)));
    WtScoreL.set("2nd Gear high Acc", (((benchMarkingTRWtScore.get("Idle") + benchMarkingTRWtScore.get("4th Gear Cruise") + benchMarkingTRWtScore.get("5th Gear Cruise")) / 3)));

    console.log(WtScoreL);
}

function calWtScoreP() {


    console.log(WtScoreP);

    WtScoreP.set("Idle", (1 - ((benchMarkingSPLWtScore.get("2nd Gear high Acc") +benchMarkingSPLWtScore.get("3rd Gear High Acc") ) / 2)));
    WtScoreP.set("2nd Gear low Acc", (1 - (benchMarkingSQWtScore.get("2nd Gear high Acc") + benchMarkingSQWtScore.get("3rd Gear High Acc")) / 2));
    WtScoreP.set("2nd Gear high Acc", (1 - ( benchMarkingTRWtScore.get("2nd Gear high Acc") + benchMarkingTRWtScore.get("3rd Gear High Acc")) / 2));
   
    console.log(WtScoreP);
    
}

function calWtScoreMax() {
    console.log("Max Values");
    console.log(Math.max(WtScoreS.get("Idle"), WtScoreL.get("Idle"), WtScoreP.get("Idle")));
    WtScoreMax.set("Idle", Math.max(WtScoreS.get("Idle"), WtScoreL.get("Idle"), WtScoreP.get("Idle")));
    WtScoreMax.set("2nd Gear low Acc", Math.max(WtScoreS.get("2nd Gear low Acc"), WtScoreL.get("2nd Gear low Acc"), WtScoreP.get("2nd Gear low Acc")));
    WtScoreMax.set("2nd Gear high Acc", Math.max(WtScoreS.get("2nd Gear high Acc"), WtScoreL.get("2nd Gear high Acc"), WtScoreP.get("2nd Gear high Acc")));

    console.log(WtScoreMax);


}

function calWtScoreWCell() {
    let maxValueIdle = WtScoreMax.get("Idle");
    console.log("WT Max value " + maxValueIdle);

    let svalue = WtScoreS.get("Idle");
    let lvalue = WtScoreL.get("Idle");
    let pvalue = WtScoreP.get("Idle");
    
    console.log(svalue ,lvalue , pvalue);



    switch (true) {
        case maxValueIdle == svalue:
            WtScoreWCell.set("Idle", 1);
            break;

        case maxValueIdle == lvalue:
            WtScoreWCell.set("Idle", 2);
            break;
        case maxValueIdle == pvalue:
            WtScoreWCell.set("Idle", 3);
            break;

        default:
            
            WtScoreWCell.set("Idle", 0);
    }

    let maxValue2ndGearlowAcc = WtScoreMax.get("2nd Gear low Acc");
    switch (true) {
        case maxValue2ndGearlowAcc == WtScoreS.get("2nd Gear low Acc"):
            WtScoreWCell.set("2nd Gear low Acc", 1);
            break;

        case maxValue2ndGearlowAcc == WtScoreL.get("2nd Gear low Acc"):
            WtScoreWCell.set("2nd Gear low Acc", 2);
            break;
        case maxValue2ndGearlowAcc == WtScoreP.get("2nd Gear low Acc"):
            WtScoreWCell.set("2nd Gear low Acc", 3);
            break;

        default:
            WtScoreWCell.set("2nd Gear low Acc", 0);
    }

    let maxValue2ndGearhighAcc = WtScoreMax.get("2nd Gear high Acc");
    switch (true) {
        case maxValue2ndGearhighAcc == WtScoreS.get("2nd Gear high Acc"):
            WtScoreWCell.set("2nd Gear high Acc", 1);
            break;

        case maxValue2ndGearhighAcc == WtScoreL.get("2nd Gear high Acc"):
            WtScoreWCell.set("2nd Gear high Acc", 2);
            break;
        case maxValue2ndGearhighAcc == WtScoreP.get("2nd Gear high Acc"):
            WtScoreWCell.set("2nd Gear high Acc", 3);
            break;

        default:
            WtScoreWCell.set("2nd Gear high Acc", 0);
    }
    console.log(WtScoreWCell);

}
function calBenchMarkingVehicalFeel(){

    let wtScoreWCellValue1 = WtScoreWCell.get("Idle");
    
    switch (true) {
        case wtScoreWCellValue1 == 1:
            benchMarkingSPLWtScore.set("Total", vehicalTypeSPL.get("%wforSports"));
            break;

        case wtScoreWCellValue1 == 2:
            benchMarkingSPLWtScore.set("Total", vehicalTypeSPL.get("%wforLux"));
            break;
        case wtScoreWCellValue1 == 3:
            benchMarkingSPLWtScore.set("Total", vehicalTypeSPL.get("%wforPow"));
            break;

        default:
            benchMarkingSPLWtScore.set("Total", 0);
    }
    console.log( benchMarkingSPLWtScore.get("Total"));
    let wtScoreWCellValue2 = WtScoreWCell.get("2nd Gear low Acc");
    
    switch (true) {
        case wtScoreWCellValue2 == 1:
            benchMarkingSQWtScore.set("Total", vehicalTypeSQ.get("%wforSports"));
            break;

        case wtScoreWCellValue2 == 2:
            benchMarkingSQWtScore.set("Total", vehicalTypeSQ.get("%wforLux"));
            break;
        case wtScoreWCellValue3 == 3:
            benchMarkingSQWtScore.set("Total", vehicalTypeSQ.get("%wforPow"));
            break;

        default:
            benchMarkingSQWtScore.set("Total", 0);
    }
    console.log( benchMarkingSQWtScore.get("Total"));
    let wtScoreWCellValue3 = WtScoreWCell.get("2nd Gear high Acc");
    
    switch (true) {
        case wtScoreWCellValue3 == 1:
            benchMarkingTRWtScore.set("Total", vehicalTypeTR.get("%wforSports"));
            break;

        case wtScoreWCellValue3 == 2:
            benchMarkingTRWtScore.set("Total", vehicalTypeTR.get("%wforLux"));
            break;
        case wtScoreWCellValue3 == 3:
            benchMarkingTRWtScore.set("Total", vehicalTypeTR.get("%wforPow"));
            break;

        default:
            benchMarkingTRWtScore.set("Total", 0);
    }
    

    
    let sumSFeelValueI = (benchMarkingSPLWtScore.get("Total")+ drivingCycleWeightageCalculation.get("Idle"))*benchMarkingSPLWtScore.get("Idle");   
    let sumLFeelValueI = (benchMarkingSQWtScore.get("Total") + drivingCycleWeightageCalculation.get("Idle"))*benchMarkingSQWtScore.get("Idle");
    let sumPFeelIdleI =  (benchMarkingTRWtScore.get("Total") + drivingCycleWeightageCalculation.get("Idle"))*benchMarkingTRWtScore.get("Idle");
    benchMarkingVehicalFeel.set("Idle", sumSFeelValueI + sumLFeelValueI +sumPFeelIdleI );
    let sumSFeelValue2 = (benchMarkingSPLWtScore.get("Total")+ drivingCycleWeightageCalculation.get("2nd Gear low Acc"))*benchMarkingSPLWtScore.get("2nd Gear low Acc");   
    let sumLFeelValue2 = (benchMarkingSQWtScore.get("Total") + drivingCycleWeightageCalculation.get("2nd Gear low Acc"))*benchMarkingSQWtScore.get("2nd Gear low Acc");
    let sumPFeelIdle2 =  (benchMarkingTRWtScore.get("Total") + drivingCycleWeightageCalculation.get("2nd Gear low Acc"))*benchMarkingTRWtScore.get("2nd Gear low Acc");
    benchMarkingVehicalFeel.set("Acceleration quick", sumSFeelValue2 + sumLFeelValue2 +sumPFeelIdle2 );

    let sumSFeelValue2N = (benchMarkingSPLWtScore.get("Total")+ drivingCycleWeightageCalculation.get("2nd Gear high Acc"))*benchMarkingSPLWtScore.get("2nd Gear high Acc");   
    let sumLFeelValue2N = (benchMarkingSQWtScore.get("Total") + drivingCycleWeightageCalculation.get("2nd Gear high Acc"))*benchMarkingSQWtScore.get("2nd Gear high Acc");
    let sumPFeelIdle2N =  (benchMarkingTRWtScore.get("Total") + drivingCycleWeightageCalculation.get("2nd Gear high Acc"))*benchMarkingTRWtScore.get("2nd Gear high Acc");
    benchMarkingVehicalFeel.set("Acceleration extreme", sumSFeelValue2N + sumLFeelValue2N +sumPFeelIdle2N );

    let sumSFeelValue3 = (benchMarkingSPLWtScore.get("Total")+ drivingCycleWeightageCalculation.get("3rd Gear low Acc"))*benchMarkingSPLWtScore.get("3rd Gear low Acc");   
    let sumLFeelValue3 = (benchMarkingSQWtScore.get("Total") + drivingCycleWeightageCalculation.get("3rd Gear low Acc"))*benchMarkingSQWtScore.get("3rd Gear low Acc");
    let sumPFeelIdle3 =  (benchMarkingTRWtScore.get("Total") + drivingCycleWeightageCalculation.get("3rd Gear low Acc"))*benchMarkingTRWtScore.get("3rd Gear low Acc");
    benchMarkingVehicalFeel.set("Acceleration moderate", sumSFeelValue3 + sumLFeelValue3 +sumPFeelIdle3 );

    let sumSFeelValue3N = (benchMarkingSPLWtScore.get("Total")+ drivingCycleWeightageCalculation.get("3rd Gear High Acc"))*benchMarkingSPLWtScore.get("3rd Gear High Acc");   
    let sumLFeelValue3N = (benchMarkingSQWtScore.get("Total") + drivingCycleWeightageCalculation.get("3rd Gear High Acc"))*benchMarkingSQWtScore.get("3rd Gear High Acc");
    let sumPFeelIdle3N =  (benchMarkingTRWtScore.get("Total") + drivingCycleWeightageCalculation.get("3rd Gear High Acc"))*benchMarkingTRWtScore.get("3rd Gear High Acc");
    benchMarkingVehicalFeel.set("Acceleration high", sumSFeelValue3N + sumLFeelValue3N +sumPFeelIdle3N );

    let sumSFeelValue4 = (benchMarkingSPLWtScore.get("Total")+ drivingCycleWeightageCalculation.get("4th Gear Cruise"))*benchMarkingSPLWtScore.get("4th Gear Cruise");   
    let sumLFeelValue4 = (benchMarkingSQWtScore.get("Total") + drivingCycleWeightageCalculation.get("4th Gear Cruise"))*benchMarkingSQWtScore.get("4th Gear Cruise");
    let sumPFeelIdle4 =  (benchMarkingTRWtScore.get("Total") + drivingCycleWeightageCalculation.get("4th Gear Cruise"))*benchMarkingTRWtScore.get("4th Gear Cruise");
    benchMarkingVehicalFeel.set("Cruise LS", sumSFeelValue4 + sumLFeelValue4 +sumPFeelIdle4 );

    let sumSFeelValue5 = (benchMarkingSPLWtScore.get("Total")+ drivingCycleWeightageCalculation.get("5th Gear Cruise"))*benchMarkingSPLWtScore.get("5th Gear Cruise");   
    let sumLFeelValue5 = (benchMarkingSQWtScore.get("Total") + drivingCycleWeightageCalculation.get("5th Gear Cruise"))*benchMarkingSQWtScore.get("5th Gear Cruise");
    let sumPFeelIdle5 =  (benchMarkingTRWtScore.get("Total") + drivingCycleWeightageCalculation.get("5th Gear Cruise"))*benchMarkingTRWtScore.get("5th Gear Cruise");
    benchMarkingVehicalFeel.set("Cruise HS", sumSFeelValue5 + sumLFeelValue5 +sumPFeelIdle5 );

    //console.log("Ind values ", benchMarkingTRWtScore.get("Idle"),benchMarkingTRWtScore.get("Total"),sumPFeelIdle,sumSFeelValue , sumLFeelValue ,sumPFeelIdle );
    // console.log("Final" ,benchMarkingVehicalFeel.get("Idle"));

    console.log(benchMarkingVehicalFeel);   

}
function calCoRelColOne(){
    

}
function calCoRelColTwo(){

}
function calCoRelColThree(){

}

function comfortIndex(){

    let cellR21=0, cellR19=0,cellR23;
    let V15Cell,V17Cell;
    benchMarkingVehicalFeel.forEach(value => {
        cellR19 += value;
      });

    cellR19 = cellR19/100;    
    coRelColOne.set("row1",tarInterior - intSubjectiveRating);
    coRelColOne.set("row2",extSubjectiveRating - cellR19);
    V15Cell = Math.abs(coRelColOne.get("row1")/ cellR19);  
    V17Cell = Math.abs(coRelColOne.get("row2")/intSubjectiveRating);  

    if(coRelColOne.get("row2") > 0)
        cellR21=cellR19*(1+V17Cell);
    else
        cellR21=cellR19/(1+V17Cell);

    coRelColOne.set("row3",intSubjectiveRating - cellR21);
    coRelColOne.set("row4",(coRelColOne.get("row2") -coRelColOne.get("row3")));

    if(coRelColOne.get("row1")<0)
        coRelColTwo.set("row1",-1);
    else
        coRelColTwo.set("row1",1);


    if(coRelColOne.get("row2")<0)
        coRelColTwo.set("row2",-1);
    else
        coRelColTwo.set("row2",1);

    if(coRelColOne.get("row3")>0)
        coRelColTwo.set("row3",-1);
    else
        coRelColTwo.set("row3",1);

    if(coRelColOne.get("row4")>0)
        coRelColTwo.set("row4",-1);
    else
        coRelColTwo.set("row4",1);

    
    coRelColThree.set("row1",V17Cell);
    coRelColThree.set("row2",V15Cell);



    console.log(coRelColOne);
    console.log(coRelColTwo);
    console.log(coRelColThree); 
    
    console.log(" Comfort Index Cell R 21", cellR21);
    console.log(" Comfort Index Cell R 19", cellR19);

    if(cellR21>10)
        cellR23 = 10;
    else
        cellR23 = cellR21;
    
    console.log(" Comfort Index Cell R 19", cellR23);


    
}

calDrivingCycleWeightageCalculation();
calvehicalTypeCalECell();
calBenchMarkingSPLWtScore();
calBenchMarkingSQWtScore();
calBenchMarkingTRWtScore();
calWtScoreS();
calWtScoreL();
calWtScoreP();
calWtScoreMax();
calWtScoreWCell();
calBenchMarkingVehicalFeel();
comfortIndex();