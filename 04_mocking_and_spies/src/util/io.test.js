import { promises as fs } from "fs";
import { it, expect, vi } from "vitest";
import writeData from "./io";

vi.mock("fs");
vi.mock("path", () => {
  return {
    default: {
      join(...args) {
        return args[args.length - 1]; // NOTE: ignore the path and return the filename
      },
    },
  };
});

it("should execute the writeFile method", () => {
  const data = "test";
  const filename = "test.txt";
  writeData(data, filename);
  expect(fs.writeFile).toBeCalledWith(filename, data);
});

it("should return a promise that resolves to no value if called correctly", () => {
  const data = "test";
  const filename = "test.txt";
  writeData(data, filename);
  return expect(fs.writeFile(filename, data)).resolves.toBeUndefined();
});

vi.unmock("fs");
vi.unmock("path");
