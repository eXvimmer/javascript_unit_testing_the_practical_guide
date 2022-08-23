import { validateStringNotEmpty, validateNumber } from "./validation.js";

export function transformToNumber(value) {
  if (Array.isArray(value)) return NaN;
  return +value;
}

export function cleanNumbers(numberValues) {
  const numbers = [];

  for (const numberInput of numberValues) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }
  return numbers;
}
