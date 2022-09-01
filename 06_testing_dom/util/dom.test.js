import path from "path";
import fs from "fs";
import { expect, it, vi } from "vitest";
import { Window } from "happy-dom";
import { showError } from "./dom";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
document.write(htmlDocContent);

vi.stubGlobal("document", document);

it("should add an error paragraph to an element with the id of 'errors'", () => {
  showError("test test");
  const errorContainerElement = document.getElementById("errors");
  const errorParagraph = errorContainerElement.firstElementChild;

  expect(errorParagraph).not.toBeNull()
})
