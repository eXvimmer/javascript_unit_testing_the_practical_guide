function validateStringNotEmpty(value) {
  if (value.trim().length === 0) {
    throw new Error("Invalid input - must not be empty.");
  }
}

function validateNumber(number) {
  if (typeof number !== "number" || isNaN(number)) {
    throw new Error("Invalid number input.");
  }
}

exports.validateNumber = validateNumber;
exports.validateStringNotEmpty = validateStringNotEmpty;
