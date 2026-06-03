/**
 * A simple arithmetic calculator that performs basic numeric operations.
 *
 * All operations validate their inputs and will throw a TypeError if either
 * argument is not a finite number. Division additionally throws a RangeError
 * when attempting to divide by zero.
 *
 * @namespace calculator
 */
const calculator = {
  /**
   * Adds two numbers.
   *
   * @param {number} x - The first addend.
   * @param {number} y - The second addend.
   * @returns {number} The sum of `x` and `y`.
   * @throws {TypeError} If either argument is not a valid number.
   */
  add(x, y) {
    validate(x);
    validate(y);
    return x + y;
  },

  /**
   * Subtracts one number from another.
   *
   * @param {number} x - The value to subtract from.
   * @param {number} y - The value to subtract.
   * @returns {number} The result of `x - y`.
   * @throws {TypeError} If either argument is not a valid number.
   */
  subtract(x, y) {
    validate(x);
    validate(y);
    return x - y;
  },

  /**
   * Multiplies two numbers.
   *
   * @param {number} x - The first factor.
   * @param {number} y - The second factor.
   * @returns {number} The product of `x` and `y`.
   * @throws {TypeError} If either argument is not a valid number.
   */
  multiply(x, y) {
    validate(x);
    validate(y);
    return x * y;
  },

  /**
   * Divides one number by another.
   *
   * @param {number} x - The dividend.
   * @param {number} y - The divisor.
   * @returns {number} The quotient of `x / y`.
   * @throws {TypeError} If either argument is not a valid number.
   * @throws {RangeError} If `y` is zero.
   */
  divide(x, y) {
    validate(x);
    validate(y);
    if (y === 0) {
      throw new RangeError("Cannot divide by 0");
    }
    return x / y;
  },
};

/**
 * Validates that a value is a finite number.
 *
 * @param {number} x - The value to validate.
 * @throws {TypeError} If `x` is not a number or is `NaN`.
 */
function validate(x) {
  if (typeof x !== "number" || Number.isNaN(x)) {
    throw new TypeError(`must be a valid number.`);
  }
}

export { calculator };
