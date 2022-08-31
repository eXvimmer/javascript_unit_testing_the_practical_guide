import { promises as fs } from "fs";
import { it, expect, vi } from "vitest";
import writeData from "./io"


it("should execute the writeFile method", () => {
  vi.mock("fs");
  vi.mock("path", () => {
    return {
      default: {
        join(...args) {
          return args[args.length - 1]; // ignore the path and return the filename
        }
      }
    }
  });
  const data = "test";
  const filename = "test.txt";
  writeData(data, filename);
  expect(fs.writeFile).toBeCalledWith(filename, data);
  vi.unmock("fs");
  vi.unmock("path");
});
