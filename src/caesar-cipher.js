const ascii_A = 65;
const ascii_a = 97;
const numOfCharacters = 26;

function caesarCipher(str, shift) {
  const charCode = str.charCodeAt();

  if (!isAlpha(str)) {
    return str;
  }

  const asciiStart = isUpper(str) ? ascii_A : ascii_a;

  const normalizedCharCode = charCode - asciiStart;
  const shifted = (normalizedCharCode + shift) % numOfCharacters;
  const newCode = shifted + asciiStart;
  return String.fromCharCode(newCode);
}

function isAlpha(char) {
  const code = char.charCodeAt();

  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

function isUpper(char) {
  const code = char.charCodeAt();

  return code >= 65 && code <= 90;
}

export { caesarCipher };
