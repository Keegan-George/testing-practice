const calculator = (() => {
  function add(x, y) {
    return x + y;
  }

  return { add };
})();

export { calculator };
