import { it, describe, expect } from "vitest"
import { HttpError, ValidationError } from "./errors"

describe("class HttpError", () => {
  it("should contain a message, statusCode and data", () => {
    const statusCode = 400;
    const message = "test message";
    const data = { key: null };
    const err = new HttpError(statusCode, message, data);
    expect(err.statusCode).toBe(statusCode);
    expect(err.message).toBe(message);
    expect(err.data).toBe(data);
  });

  it("should set data to undefined if no data is provided", () => {
    const statusCode = 400;
    const message = "test message";
    const err = new HttpError(statusCode, message);
    expect(err.data).toBeUndefined();
  });
});

describe("class validationError", () => {
  it("should contain a message", () => {
    const message = "test message";
    const err = new ValidationError(message);
    expect(err.message).toBe(message);
  });
});
