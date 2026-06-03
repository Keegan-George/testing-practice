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

  return { add, subtract, multiply };
})();

export { calculator };
