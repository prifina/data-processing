const FitbitData = require("./fitbit.json");
const OuraData = require("./oura.json");

const { combineData } = require("./combineData");

console.log(combineData(OuraData, FitbitData));
