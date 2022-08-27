import { promises as fs } from "fs";
import { it, expect, vi } from "vitest";
import writeData from "./io"


it("should execute the writeFile method", () => {
  vi.mock("fs");
  const data = "test";
  const filename = "test.txt";
  writeData(data, filename);
  expect(fs.writeFile).toBeCalled();
  vi.unmock("fs");
});

