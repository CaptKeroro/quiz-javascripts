class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "Validation Error";
  }
}

function validateNumberInput(a, b, c) {
  const indexes = ["pertama", "kedua", "ketiga"];
  const conditions = [typeof a !== "number", typeof b !== "number", typeof c !== "number"];

  for (const index in conditions) {
    if (conditions[index]) {
      throw new ValidationError(`Argumen ${indexes[index]} harus number`);
    }
  }
}

function detectTriangle(a, b, c) {
  try {
    validateNumberInput(a, b, c);

    if (a === b && b === c) return "Segitiga sama sisi";
    if (a === b || a === c || b === c) return "Segitiga sama kaki";
    return "Segitiga sembarang";
  } catch (error) {
    return error.message;
  }
}