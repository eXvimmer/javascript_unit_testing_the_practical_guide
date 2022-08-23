import { extractEnteredNumberValues } from "./src/parser.js";
import { calculateResult } from "./src/math.js";
import { generateResultText, outputResult } from "./src/output.js";

const form = document.querySelector("form");
console.log("form");

function formSubmitHandler(event) {
  event.preventDefault();
  const numberValues = extractEnteredNumberValues(form);
  let result = calculateResult(numberValues);
  let resultText = generateResultText(result);

  if (result === "invalid") {
    resultText = "Invalid input. You must enter valid numbers.";
  } else if (result !== "no-calc") {
    resultText = "Result: " + result;
  }

  outputResult(resultText);
}

form.addEventListener("submit", formSubmitHandler);
