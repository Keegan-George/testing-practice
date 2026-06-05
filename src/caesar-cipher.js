const ascii_A = 65;
const ascii_a = 97;
const numOfCharacters = 26;

function caesarCipher(str, shift) {
  return str
    .split("")
    .map((c) => {
      const code = c.charCodeAt();

      if (!isAlpha(code)) {
        return c;
      }

      const asciiStart = isUpper(code) ? ascii_A : ascii_a;

      const normalizedCode = code - asciiStart;
      const shifted =
        (normalizedCode + shift + numOfCharacters) % numOfCharacters;
      const newCode = shifted + asciiStart;
      return String.fromCharCode(newCode);
    })
    .join("");
}

function isAlpha(code) {
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

function isUpper(code) {
  return code >= 65 && code <= 90;
}

export { caesarCipher };
