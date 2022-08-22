export function transformToNumber(value) {
  if (Array.isArray(value)) return NaN;
  return +value;
}
