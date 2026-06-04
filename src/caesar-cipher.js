function caesarCipher(str, shift) {
  const charCode = str.charCodeAt();
  const normalizedCharCode = charCode - 97;
  const shifted = (normalizedCharCode + shift) % 26;
  const newCode = shifted + 97;
  return String.fromCharCode(newCode);
}

export { caesarCipher };
