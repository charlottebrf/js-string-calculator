'use strict';

describe('StringCalculator', function() {
  var calculator = new stringCalculator;

  describe('#add', function() {
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

    it("returns the sum of multiple numbers separated by any punctuation delineator", function() {
      expect(calculator.add(";\n1;2")).toEqual(3);
      expect(calculator.add("3\n1;2")).toEqual(6);
      expect(calculator.add("//;\n1;2")).toEqual(3);
    })

    it("only returns the sum for positive numbers", function() {
      expect( function(){ calculator.add("//;\n-1;-2"); } ).toThrow('Negatives not allowed: -1,-2');
      expect( function(){ calculator.add("//;\n-1;2"); } ).toThrow('Negatives not allowed: -1');
    })

    it("returns the sum for numbers under 1000", function() {
      expect(calculator.add("//;\n1;2;1000")).toEqual(3);
    })

    it("returns the sum for numbers using any delimeters", function() {
      expect(calculator.add("//[***]\n1***2***3")).toEqual(6);
    })

    it("allows multiple delimeters", function() {
      expect(calculator.add("//[*][%]\n1*2%3")).toEqual(6);
    })

    it("allows multiple delimeters longer than one char", function() {
      expect(calculator.add("//[*%$][%]\n1*2%3")).toEqual(6);
    })
  });

  describe('#convert', function() {
    it("turns an array of string numbers into integers", function() {
      expect(calculator.convert(["1","2"])).toEqual([1, 2]);
      expect(calculator.convert(["3","4"])).toEqual([3, 4]);
    });
  });

  describe('#integerCheck', function() {
    it("deletes any elements that are not integers", function() {
      calculator.convert([";","\n","1", ";", "2"])
      expect(calculator.integerCheck([";","\n",1,";", 2])).toEqual([1, 2]);
    });
  })

  describe('#negativeNumberCheck', function() {
    it("removes negative numbers", function() {
      expect(calculator.negativeNumberCheck([1, 2])).toEqual([1, 2]);
    });
    it("raises an exception for negative numbers", function() {
      expect( function(){ calculator.negativeNumberCheck([-1, 2]); } ).toThrow('Negatives not allowed: -1');
      expect( function(){ calculator.negativeNumberCheck([-1, -2]); } ).toThrow('Negatives not allowed: -1,-2');
    })
  });

  describe('#throwError', function() {
    it("throws an error for each negative number in the array", function() {
      expect( function(){ calculator.negativeNumberCheck([-1, -2]); } ).toThrow('Negatives not allowed: -1,-2');
    })
  });

  describe('#bigNumbers', function() {
    it("numbers bigger than 1000 are deleted from the array", function() {
      expect(calculator.bigNumbers([1000, 3, 2, 67])).toEqual([undefined,3,2,67]);
    })
  });
});
