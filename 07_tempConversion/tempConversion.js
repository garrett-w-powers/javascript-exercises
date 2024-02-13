const convertToCelsius = function(temp) {
    let tempTemp = temp - 32;
    tempTemp = tempTemp / 1.8;
    const output = Math.round(tempTemp * 10) / 10;
    return output;
};

const convertToFahrenheit = function(temp) {
  let tempTemp = temp * 1.8;
  tempTemp = tempTemp + 32;
  const output = Math.round(tempTemp * 10) / 10;
  return output;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
