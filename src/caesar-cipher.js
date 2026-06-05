function caesarCipher(str, shift) {
  const charCode = str.charCodeAt();

  if (charCode < 97 || charCode > 122 || Number.isNaN(charCode)) {
    return str;
  }

  const normalizedCharCode = charCode - 97;
  const shifted = (normalizedCharCode + shift) % 26;
  const newCode = shifted + 97;
  return String.fromCharCode(newCode);
}

caesarCipher("");

export { caesarCipher };
