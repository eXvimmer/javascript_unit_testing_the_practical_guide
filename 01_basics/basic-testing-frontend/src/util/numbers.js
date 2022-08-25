import { validateStringNotEmpty, validateNumber } from "./validation.js";

export function transformToNumber(value) {
  if (Array.isArray(value)) return NaN;
  return +value;
}

/**
 * transform an 'array of string numbers' to an array of numbers.
 */
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
