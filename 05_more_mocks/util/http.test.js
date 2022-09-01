import { it, describe, expect, vi } from "vitest";
import { sendDataRequest } from "./http";

const responseData = { testKey: "testData" };

const testFetch = vi.fn((_url, data) => {
  return new Promise((resolve, reject) => {
    if (typeof data.body !== "string") {
      return reject("Not a string.");
    }
    const testResponse = {
      ok: true,
      json() {
        return new Promise((resolve, _reject) => {
          return resolve(responseData);
        });
      },
    };
    resolve(testResponse);
  });
});

vi.stubGlobal("fetch", testFetch);

describe("sendDataRequest", () => {
  it("should return any available response data", () => {
    const test = { test: "test" };
    return expect(sendDataRequest(test)).resolves.toEqual(responseData);
  });

  it("should return convert the provided data to JSON before sending the request", async () => {
    const test = { test: "test" };
    let error;
    try {
      await sendDataRequest(test);
    } catch (err) {
      error = err;
    }
    expect(error).not.toBe("Not a string.");
  });
});
