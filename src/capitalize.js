function capitalize(str) {
  if (!str) {
    return "";
  }

  try {
    return str[0].toUpperCase() + str.slice(1);
  } catch {
    throw new Error("Please enter a string");
  }
}

export { capitalize };
