'use strict';

var stringCalculator = function() {};

stringCalculator.prototype.add = function(string) {
  if (string === "") {
    return 0;
  } else if (string.length > 1) {
    var splitString = []
    var result = 0;
    splitString = string.split(",");
    splitString = this.convert(splitString);
    for (var i in splitString) {
      splitString.reduce(function(sum, value) {
        result =  sum + value;
      });
    }
    return result;
  }
  else {
    return parseInt(string);
  }
};

stringCalculator.prototype.convert = function(arrayOfStrings) {
  var arrayofIntegers = [];
  for (var string of arrayOfStrings) {
    var converted = parseInt(string);
    arrayofIntegers.push(converted);
  }
  return arrayofIntegers;
};
