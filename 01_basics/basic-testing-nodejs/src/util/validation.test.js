import { it, expect, describe } from "vitest";
import { validateNumber, validateStringNotEmpty } from "./validation";

describe("validateStringNotEmpty", () => {
  it("should NOT throw an error if a valid string is passed as argument", () => {
    function thrower() {
      validateStringNotEmpty("valid");
    }
    expect(thrower).not.toThrow();
  });

  it("should throw an error if an empty string is passed as argument", () => {
    function thrower() {
      validateStringNotEmpty("");
    }
    expect(thrower).toThrow(/invalid input/i);
  });

  it("should throw an error if a string with only whitespaces is passed as argument", () => {
    function thrower() {
      validateStringNotEmpty("                    ");
    }
    expect(thrower).toThrow(/invalid input/i);
  });

  it("should throw an error if any non-string value is passed", () => {
    const invalidArgs = [[], function () {}, {}, 13, Symbol.for("hi"), true];
    invalidArgs.forEach((arg) => {
      function thrower() {
        validateStringNotEmpty(arg);
      }
      expect(thrower).toThrow();
    });
  });
});

describe("validateNumber", () => {
  it("should throw an error if no argument is provided", () => {
    function thrower() {
      validateNumber();
    }
    expect(thrower).toThrow();
  });

  it("should NOT throw an error if a number is provided", () => {
    function thrower() {
      validateNumber(13);
    }
    expect(thrower).not.toThrow();
  });

  it("should throw an error if any non-numeric argument is passed", () => {
    const invalidArgs = ["13", "invalid", "[]", {}, [], function () {}, true];
    invalidArgs.forEach((arg) => {
      function thrower() {
        validateNumber(arg);
      }
      expect(thrower).toThrow(/invalid number/i);
    });
  });

  it("should throw an error if NaN is provided", () => {
    function thrower() {
      validateNumber(NaN);
    }
    expect(thrower).toThrow();
  });
});
