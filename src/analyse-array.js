function analyseArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError(
      `analyseArray expects an Array, received ${typeof arr}`,
    );
  }

  if (arr.some((n) => typeof n !== "number" || Number.isNaN(n))) {
    throw new TypeError("Array must contains only numbers");
  }

  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;
  const sum = arr.reduce((accumulator, current) => accumulator + current, 0);
  const average = sum / length;

  return {
    min,
    max,
    length,
    average,
  };
}

export { analyseArray };
