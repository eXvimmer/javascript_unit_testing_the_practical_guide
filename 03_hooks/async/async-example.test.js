import { expect, it } from "vitest";

import { generateToken, generateTokenPromise } from "./async-example";

it("should generate a token value", (done) => {
  generateToken("user1@gmail.com", (_err, token) => {
    try {
      expect(token).toBeDefined();
      done();
    } catch (err) {
      done(err);
    }
  });
});

it("should generate a token value", () => {
  return expect(generateTokenPromise("user1@gmail.com")).resolves.toBeDefined();
});

it("should generate a token value", async () => {
  const token = await generateTokenPromise("user1@gmail.com");

  expect(token).toBeDefined();
});
