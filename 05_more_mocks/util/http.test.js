import { it, describe, expect, vi } from "vitest"
import { sendDataRequest } from "./http";

const responseData = { testKey: "testData" };

const testFetch = vi.fn((_url, _data) => {
  return new Promise((resolve, _reject) => {
    const testResponse = {
      ok: true,
      json() {
        return new Promise((resolve, _reject) => {
          return resolve(responseData);
        });
      }
    }
    resolve(testResponse);
  });
});

vi.stubGlobal("fetch", testFetch);

describe("sendDataRequest", () => {
  it("should return any available response data", () => {
    const test = { test: "test" }
    return expect(sendDataRequest(test)).resolves.toEqual(responseData);
  });
});
