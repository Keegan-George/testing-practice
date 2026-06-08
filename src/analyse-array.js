/**
 * Analyse a numeric array and return its minimum, maximum, length, and average.
 *
 * @param {number[]} arr - A non-empty array containing only numeric values.
 *
 * @returns {{ min: number, max: number, length: number, average: number }}
 * An object describing the array:
 *  - `min`: the smallest number in the array
 *  - `max`: the largest number in the array
 *  - `length`: the number of elements in the array
 *  - `average`: the arithmetic mean of the array's values
 *
 * @throws {RangeError} If the array is empty.
 * @throws {TypeError} If the input is not an array.
 * @throws {TypeError} If the array contains non-numeric values or NaN.
 */

function analyseArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError(
      `analyseArray expects an Array, received ${typeof arr}`,
    );
  }

  if (arr.length === 0) {
    throw new RangeError("analyseArray expects a non-empty array");
  }

  if (arr.some((n) => typeof n !== "number" || Number.isNaN(n))) {
    throw new TypeError("Array must contain only numbers");
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
