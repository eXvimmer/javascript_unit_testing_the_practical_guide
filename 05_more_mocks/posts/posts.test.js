import { it, expect, describe } from "vitest";
import { extractPostData } from "./posts";

describe("extractPostData", () => {
  it("should extract title and content from form data", () => {
    const testTitle = "testTitle";
    const testContent = "testContent";

    const testFormData = {
      title: testTitle,
      content: testContent,
      get(identifier) {
        return this[identifier];
      },
    };

    const data = extractPostData(testFormData);

    expect(data.title).toBe(testTitle);
    expect(data.content).toBe(testContent);
  });
});
