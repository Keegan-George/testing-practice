const calculator = {
  add(x = 0, y = 0) {
    return x + y;
  },

  subtract(x = 0, y = 0) {
    return x - y;
  },

  multiply(x = 0, y = 0) {
    return x * y;
  },

  divide(x = 0, y = 1) {
    if (y === 0) {
      throw new Error("Cannot divide by 0");
    }
    return x / y;
  },
};

export { calculator };
