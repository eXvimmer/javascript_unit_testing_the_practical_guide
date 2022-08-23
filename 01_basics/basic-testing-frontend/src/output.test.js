import { it, expect, describe } from "vitest";
import { generateResultText } from "./output";

describe("generateResultText", () => {
  it("should return a string, no matter what value is passed in", () => {
    const values = ["", "Mustafa", 1, {}, [], true];
    values.forEach((val) => {
      let result = generateResultText(val);
      expect(result).toBeTypeOf("string");
    });
  });

  it("should return a string containing the word 'invalid' if 'invalid' is passed as argument", () => {
    let result = generateResultText("invalid");
    expect(result).toContain("Invalid input");
  });
});
