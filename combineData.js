const combineData = (ouraData, fitbitData) => {
  const keys = {
    // Combined data
    totalSteps: {
      oura: ouraData["Steps"],
      fitbit: fitbitData["Steps"],
    },
    totalCalories: {
      oura: ouraData["Total Burn"],
      fitbit: fitbitData["Calories Burned"],
    },
    totalDistance: {
      oura: ouraData["Daily Movement"],
      fitbit: fitbitData["Distance"] * 1000,
    },
    inactiveMinutes: {
      oura: ouraData["Inactive Time"],
      fitbit: fitbitData["Minutes Sedentary"],
    },
    lowActiveMinutes: {
      oura: ouraData["Low Activity Time"],
      fitbit: fitbitData["Minutes Lightly Active"],
    },
    mediumActiveMinutes: {
      oura: ouraData["Medium Activity Time"],
      fitbit: fitbitData["Minutes Fairly Active"],
    },
    highActiveMinutes: {
      oura: ouraData["High Activity Time"],
      fitbit: fitbitData["Minutes Very Active"],
    },
    activeCalories: {
      oura: ouraData["Activity Burn"],
      fitbit: fitbitData["Activity Calories"],
    },
    totalSleepTime: {
      oura: ouraData["Total Sleep Time"],
      fitbit: fitbitData["Minutes Asleep"],
    },
    totalAwakeTime: {
      oura: ouraData["Awake Time"],
      fitbit: fitbitData["Minutes Awake"],
    },
    restlessSleep: {
      oura: ouraData["Restless Sleep"],
      fitbit: fitbitData["Number of Awakenings"],
    },
    timeSpentInBed: {
      oura: ouraData["Total Bedtime"],
      fitbit: fitbitData["Time in Bed"],
    },
    REMSleepTime: {
      oura: ouraData["REM Sleep Time"],
      fitbit: fitbitData["Minutes REM Sleep"],
    },
    lightSleepTime: {
      oura: ouraData["Light Sleep Time"],
      fitbit: fitbitData["Minutes Light Sleep"],
    },
    deepSleepTime: {
      oura: ouraData["Deep Sleep Time"],
      fitbit: fitbitData["Minutes Deep Sleep"],
    },
  };

  combinedData = {};

  Object.keys(keys).map((currentKey) => {
    const currentDataItem = keys[currentKey];
    combinedData[currentKey] = {
      oura: currentDataItem.oura,
      fitbit: currentDataItem.fitbit,
      total: currentDataItem.oura + currentDataItem.fitbit + 2,
    };
  });

  return combinedData;
};

module.exports = { combineData };
