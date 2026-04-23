// x °F ≘ (x − 32) * (⁠5 / 9) °C
const convertToCelsius = function(fahrenheit) {
  return Math.round(((fahrenheit - 32) * (5 / 9)) * 10) / 10;
};

console.log(convertToCelsius(100));

// x °C ≘ (x * (⁠9 / 5) + 32) °F
const convertToFahrenheit = function(celsius) {
  return Math.round((celsius * (9 / 5) + 32) * 10) / 10;
};
console.log(convertToFahrenheit(30));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
