'use strict';

var stringCalculator = function() {};

stringCalculator.prototype.add = function(string) {
  if (string === "") {
    return 0;
  } else {
    return parseInt(string);
  }
};
