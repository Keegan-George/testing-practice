function reverseString(str) {
  if (!str) {
    return "";
  }

  if (typeof str !== "string") {
    throw new Error("Please enter a string");
  }

  return str.split("").reverse().join("");
}

export { reverseString };
