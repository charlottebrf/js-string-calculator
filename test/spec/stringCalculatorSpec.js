'use strict';

describe('StringCalculator', function() {
  it("turns a string into an integer", function() {
    var calculator = new stringCalculator;
    expect(calculator.add("0")).toEqual(0);
  });
});
