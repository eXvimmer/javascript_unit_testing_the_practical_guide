import { vi } from "vitest";

export const promises = {
  writeFile: vi.fn((_storagePath, _data) => {
    return new Promise((resolve, _reject) => {
      resolve();
    });
  }),
};
