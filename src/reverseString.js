function reverseString(str) {
  if (typeof str !== "string") {
    throw new TypeError("reverseString expects a string");
  }

  return str.split("").reverse().join("");
}

export { reverseString };
