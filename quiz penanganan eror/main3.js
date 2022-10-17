// TODO 1

class ValidationError extends Error {

  constructor(message) {

    super(message)

    this.name = "ValidationError"

  }

}

// TODO 2

const validateNumberInput = (num1, num2, num3) => {

  if (typeof (num1) !== "number") { throw new ValidationError('Argumen pertama harus number') }

  if (typeof (num2) !== "number") { throw new ValidationError('Argumen kedua harus number') }

  if (typeof (num3) !== "number") { throw new ValidationError('Argumen ketiga harus number') }

}



const detectTriangle = (a, b, c) => {

  // TODO 3

  try {

    validateNumberInput(a, b, c)

    if (a === b && b === c) {

      return 'Segitiga sama sisi';

    }

    if (a === b || a === c || b === c) {

      return 'Segitiga sama kaki';

    }

    return 'Segitiga sembarang';

  } catch (error) {

    if (error instanceof ValidationError) {

      return error.message

    }

  }

};

module.exports = { ValidationError, validateNumberInput, detectTriangle };