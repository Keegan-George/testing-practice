function analyseArray(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;
  const sum = arr.reduce((accumulator, current) => accumulator + current, 0);
  const average = sum / length;

  return {
    min: min,
    max: max,
    length: length,
    average: average,
  };
}

export { analyseArray };
