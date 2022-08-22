export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    if (typeof number === "boolean") return NaN;
    sum += +number;
  }
  return sum;
}
