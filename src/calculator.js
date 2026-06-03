const calculator = (() => {
  function add(x = 0, y = 0) {
    return x + y;
  }

  return { add };
})();

export { calculator };
