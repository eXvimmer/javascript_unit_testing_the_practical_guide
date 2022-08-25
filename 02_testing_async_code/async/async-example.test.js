import { it, expect } from "vitest";
import { generateToken } from "./async-example";

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
