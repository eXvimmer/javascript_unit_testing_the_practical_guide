import { it, expect } from "vitest";
import { generateToken, generateTokenPromise } from "./async-example";

it("should generate a valid token", (done) => {
  const email = "user1@gmail.com";
  generateToken(email, (_err, token) => {
    try {
      expect(token).toBeDefined();
      done();
    } catch (err) {
      done(err);
    }
  });
});

it("should generate a valid token asynchronousely", () => {
  const email = "user1@gmail.com";
  // NOTE: you should return the promise assertion (when you use .resolve)
  return expect(generateTokenPromise(email)).resolves.toBeDefined();
});

it("should generate a valid token asynchronousely", async () => {
  const email = "user1@gmail.com";
  const token = await generateTokenPromise(email);
  expect(token).toBeDefined();
});
