const calculator = (() => {
  function add(x = 0, y = 0) {
    return x + y;
  }

  function subtract(x = 0, y = 0) {
    return x - y;
  }

  function multiply(x = 0, y = 0) {
    return x * y;
  }

  function divide(x = 0, y = 1) {
    if (y === 0) {
      throw new Error("Cannot divide by 0");
    }
    return x / y;
  }

  return { add, subtract, multiply, divide };
})();

export { calculator };
