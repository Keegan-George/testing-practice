const ascii_A = 65;
const ascii_a = 97;
const numOfCharacters = 26;

/**
 * Applies a Caesar cipher shift to a given string.
 *
 * Alphabetic characters (A–Z and a–z) are shifted by the specified amount,
 * preserving case. Non‑alphabetic characters are returned unchanged.
 *
 * The shift value is normalized to the range -25..25 using modulo arithmetic.
 *
 * @param {string} str - The input string to encode.
 * @param {number} shift - The number of positions to shift each letter.
 *   Positive values shift forward; negative values shift backward.
 * @returns {string} The encoded string after applying the Caesar cipher.
 */
function caesarCipher(str, shift) {
  shift = shift % numOfCharacters;

  return str
    .split("")
    .map((c) => {
      const code = c.charCodeAt();

      if (!isAlpha(code)) {
        return c;
      }

      const asciiStart = isUpper(code) ? ascii_A : ascii_a;

      const normalized = code - asciiStart;
      const shifted = (normalized + shift + numOfCharacters) % numOfCharacters;
      const shiftedCode = shifted + asciiStart;
      return String.fromCharCode(shiftedCode);
    })
    .join("");
}

/**
 * Determines whether a character code represents an ASCII alphabetic letter.
 *
 * @param {number} code - The character code to test.
 * @returns {boolean} True if the code is in A–Z or a–z; otherwise false.
 */
function isAlpha(code) {
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

/**
 * Determines whether a character code represents an uppercase ASCII letter.
 *
 * @param {number} code - The character code to test.
 * @returns {boolean} True if the code is in A–Z; otherwise false.
 */
function isUpper(code) {
  return code >= 65 && code <= 90;
}

export { caesarCipher };
