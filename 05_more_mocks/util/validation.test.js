import { it, expect, describe } from "vitest";
import { validateNotEmpty } from "./validation";

describe("validateNotEmpty", () => {
  it("should throw an error for empty texts", () => {
    const invalid = ["", "       "];
    invalid.forEach(item => {
      function thrower() {
        validateNotEmpty(item)
      }

      expect(thrower).toThrow();
    });
  });

  it("should throw an error with the provided error message", () => {
    const message = "text cannot be empty"
    function thrower() {
      validateNotEmpty("", message);
    }
    expect(thrower).toThrow(message);
  });
});
