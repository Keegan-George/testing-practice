/**
 * Reverses a string.
 *
 * If the input is an empty string, an empty string is returned.
 * If a non-string value is provided, an error is thrown.
 *
 * @param {string} str - The string to reverse.
 * @returns {string} A new string with the characters reversed
 * or an empty string for an empty string input inputs.
 * @throws {Error} Throws when the provided value is not a string.
 */
function reverseString(str) {
  if (typeof str !== "string") {
    throw new TypeError(
      `reverseString expects a string, received ${typeof str}`,
    );
  }

  return str.split("").reverse().join("");
}

export { reverseString };
