function caesarCipher(str, shift) {
  const charCode = str.charCodeAt();
  const newCode = charCode + shift;
  return String.fromCharCode(newCode);
}

export { caesarCipher };
