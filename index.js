function convertToCelsius(farenheit) {
  userInput = prompt(`Enter temperature in Farenheit`);
  farenheit = Number(userInput);
  return ((farenheit - 32) * 5) / 9;
}

function describeTemperature(farenheit) {
  celsius = convertToCelsius();
  if (celsius < 0) {
    return `very cold`;
  } else if (celsius < 20) {
    return `cold`;
  } else if (celsius < 30) {
    return `warm`;
  } else if (celsius < 40) {
    return `hot`;
  } else {
    return `very hot`;
  }
}

console.log(describeTemperature());
