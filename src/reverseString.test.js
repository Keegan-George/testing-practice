import { reverseString } from "./reverseString";
import { test, expect, describe } from "@jest/globals";

describe("Happy cases", () => {
  test.each([
    ["a", "a"],
    ["A", "A"],
    ["ab", "ba"],
    ["abba", "abba"],
    ["See you there!", "!ereht uoy eeS"],
    ["54321", "12345"],
    ["", ""],
  ])("reverseString(%p) => %p", (input, output) => {
    expect(reverseString(input)).toBe(output);
  });
});

describe("Punctuation and whitespace", () => {
  test.each([
    ["@!%&*", "*&%!@"],
    ["   ", "   "],
  ])("reverseString(%p) => %p", (input, output) => {
    expect(reverseString(input)).toBe(output);
  });
});

describe("Error handling", () => {
  test.each([[undefined], [null], [123], [false], [true], [[]], [{}]])(
    "reverseString(%p) => %p",
    (input) => {
      expect(() => reverseString(input)).toThrow();
    },
  );
});
