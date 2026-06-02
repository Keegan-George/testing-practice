/**
 * Capitalizes the first character of a string.
 *
 * If the input is an empty string, `null`, or `undefined`, an empty string
 * is returned. If a non-string value is provided, an error is thrown.
 *
 * @param {string} [str] - The string to capitalize. If omitted or falsy,
 * returns an empty string.
 * @returns {string} A new string with the first character converted to
 * uppercase, or an empty string for falsy inputs.
 * @throws {Error} Throws when the provided value is not a string.
 */
function capitalize(str) {
  if (typeof str !== "string") {
    throw new Error("capitalize expects a string");
  }

  return str[0].toUpperCase() + str.slice(1);
}

export { capitalize };
