import { it, expect } from "vitest";
import { add } from "./math";

it("should add an array of numbers and return the correct sum", () => {
  const numbers = [1, 2];
  const result = add(numbers);
  const expectedResult = numbers.reduce((p, c) => p + c, 0);
  expect(result).toBe(expectedResult);

  // NOTE: I think we need to test more cases
});

it("should return NaN, if at least one invalid argument is provided", () => {
  const arg = ["hi", 1, 2];
  const result = add(arg);
  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numeric string values is provided", () => {
  const arg = ["1", "2"];
  const result = add(arg);
  expect(result).toBe(3);
});

it("should return NaN, if at least on boolean argument is passed", () => {
  const arg = [true, 1, 2];
  const result = add(arg);
  expect(result).toBeNaN();
});

it("should yield 0 if an empty array is provided", () => {
  const arg = [];
  const result = add(arg);
  expect(result).toBe(0);
});

it("should return NaN if the provided argument is not an array", () => {
  const arg = "Mustafa";
  const result = add(arg);
  expect(result).toBeNaN();
});

it("should throw an error if argument is provided to the function", () => {
  function resultFn() {
    add();
  }

  expect(resultFn).toThrow();
});
