import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

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
