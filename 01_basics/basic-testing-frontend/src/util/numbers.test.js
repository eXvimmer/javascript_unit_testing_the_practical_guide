import { it, expect, describe } from "vitest";
import { cleanNumbers, transformToNumber } from "./numbers";

describe("transformToNumber", () => {
  it("should return the passed number back", () => {
    let result = transformToNumber(-13);
    const expectedValue = -13;
    expect(result).toBeTypeOf("number");
    expect(result).toBe(expectedValue);
  });

  it("should convert a simple string number to a number and return it", () => {
    let result = transformToNumber("-13");
    const expectedValue = -13;
    expect(result).toBeTypeOf("number");
    expect(result).toBe(expectedValue);
  });

  it("should return a NaN when an invalid argument is passed as argument", () => {
    const invalidArgs = [[], "invalid", {}, function () {}];
    invalidArgs.forEach((arg) => {
      const result = transformToNumber(arg);
      const expectedValue = NaN;
      expect(result).toBeTypeOf("number");
      expect(result).toBe(expectedValue);
    });
  });

  it("should throw an error if a symbol is passed as argument", () => {
    function thrower() {
      transformToNumber(Symbol.for("hi"));
    }
    expect(thrower).toThrow();
  });
});

describe("cleanNumbers", () => {
  it("should return an array of numbers if an array of string numbers is provided", () => {
    const numbers = ["1", "2"];
    const cleanedNumbers = cleanNumbers(numbers);
    cleanedNumbers.forEach((val) => {
      expect(val).toBeTypeOf("number");
    });
    expect(cleanedNumbers).toEqual([1, 2]);
  });

  it("should throw an error if an array with at least one empty string is provided", () => {
    const numbers = ["", "1"];
    function thrower() {
      cleanNumbers(numbers);
    }
    expect(thrower).toThrow();
  });
});
