'use strict';

var stringCalculator = function () {};

stringCalculator.prototype.add = function (string) {
  if (string === "") {
    return 0;
  } else if (string.length == 1) {
    return parseInt(string);
  } else
  var splitString = string.split(/[\n,;]/);
  var convertedString = this.convert(splitString);
  var checkedIntegers = this.integerCheck(convertedString);
  checkedIntegers = this.negativeNumberCheck(checkedIntegers);
  var total = checkedIntegers.reduce(function (sum, value) {
    return sum + value;
  }, 0);
  return total;
};

stringCalculator.prototype.convert = function (arrayOfStrings) {
  var arrayofIntegers = [];
  for (var string of arrayOfStrings) {
    var converted = parseInt(string);
    arrayofIntegers.push(converted);
  }
  return arrayofIntegers;
};

stringCalculator.prototype.integerCheck = function (arrayOfIntegers) {
  var checkedArrayOfIntegers = [];
  for (var element of arrayOfIntegers) {
    if (Number.isInteger(element) === true) {
      checkedArrayOfIntegers.push(element);
    }
  }
  return checkedArrayOfIntegers;
};

stringCalculator.prototype.negativeNumberCheck = function (checkedArrayOfIntegers) {
  var postiveIntegersOnly = [];
  var negativeNumbers = [];
  for (var number of checkedArrayOfIntegers) {
    if (Math.sign(number) == 1) {
      postiveIntegersOnly.push(number);
    }
    else if (Math.sign(number) == -1) {
      negativeNumbers.push(number);
    }
  }
  if (typeof negativeNumbers[0] !== 'undefined' && negativeNumbers[0] !== null) {
    this.throwError(negativeNumbers);
  } else
  return postiveIntegersOnly;
}


stringCalculator.prototype.throwError = function (negativeNumbers) {
  throw `Negatives not allowed: ${negativeNumbers}`;
}
