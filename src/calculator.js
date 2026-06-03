const calculator = {
  add(x, y) {
    validate(x);
    validate(y);
    return x + y;
  },

  subtract(x, y) {
    validate(x);
    validate(y);
    return x - y;
  },

  multiply(x, y) {
    validate(x);
    validate(y);
    return x * y;
  },

  divide(x, y) {
    validate(x);
    validate(y);
    if (y === 0) {
      throw new Error("Cannot divide by 0");
    }
    return x / y;
  },
};

function validate(x) {
  if (typeof x !== "number" || Number.isNaN(x)) {
    throw new TypeError(`must be a valid number.`);
  }
}

export { calculator };
