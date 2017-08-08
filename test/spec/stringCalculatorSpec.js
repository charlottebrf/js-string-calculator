'use strict';

describe('StringCalculator', function() {
  var calculator = new stringCalculator;

  it("an empty string returns 0", function() {
    expect(calculator.add("")).toEqual(0);
  });

  it("turns a string number into an integer", function() {
    expect(calculator.add("1")).toEqual(1);
    expect(calculator.add("2")).toEqual(2);
  });

  it("returns the sum of multiple string numbers separated by a comma", function() {
    expect(calculator.add("1,2")).toEqual(3);
    expect(calculator.add("3,4,5")).toEqual(12);
  });

  it("returns the sum of multiple string numbers separated by a newline", function() {
    expect(calculator.add("1\n2")).toEqual(3);
    expect(calculator.add("1\n2,3")).toEqual(6);
  })

  it("turns an array of string numbers into integers", function() {
    expect(calculator.convert(["1","2"])).toEqual([1, 2]);
    expect(calculator.convert(["3","4"])).toEqual([3, 4]);
  });
});
