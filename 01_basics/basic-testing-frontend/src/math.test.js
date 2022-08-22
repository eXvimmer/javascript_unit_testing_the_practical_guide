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
