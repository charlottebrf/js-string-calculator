'use strict';

var stringCalculator = function() {};

stringCalculator.prototype.add = function(string) {
  if (string === "") {
    return 0;
  } else if (string.length == 1) {
    return parseInt(string);
  } else
    var result = 0;
    var splitString = string.split(/[\n,]/);
    splitString = this.convert(splitString);

    var total = splitString.reduce(function(sum, value) {
      return sum + value;
    }, 0);

    return total;
};

stringCalculator.prototype.convert = function(arrayOfStrings) {
  var arrayofIntegers = [];
  for (var string of arrayOfStrings) {
    var converted = parseInt(string);
    arrayofIntegers.push(converted);
  }
  return arrayofIntegers;
};
