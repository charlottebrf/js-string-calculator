'use strict';

describe('StringCalculator', function() {
  it("an empty string returns 0", function() {
    var calculator = new stringCalculator;
    expect(calculator.add("")).toEqual(0);
  });

  it("turns a string number into an integer", function() {
    var calculator = new stringCalculator;
    expect(calculator.add("1")).toEqual(1);
    expect(calculator.add("2")).toEqual(2);
  });
});
