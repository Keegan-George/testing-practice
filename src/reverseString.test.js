import { reverseString } from "./reverseString";
import { test, expect, describe } from "@jest/globals";

describe("Valid inputs", () => {
  test.each([
    ["a", "a"],
    ["A", "A"],
    ["ab", "ba"],
    ["abba", "abba"],
    ["See you there!", "!ereht uoy eeS"],
    ["54321", "12345"],
    ["", ""],
    ["@!%&*", "*&%!@"],
    ["   ", "   "],
    ["", ""],
  ])("reverseString(%p) => %p", (input, output) => {
    expect(reverseString(input)).toBe(output);
  });
});

describe("Invalid inputs", () => {
  test.each([[undefined], [null], [123], [false], [true], [[]], [{}]])(
    "reverseString(%p) => %p",
    (input) => {
      expect(() => reverseString(input)).toThrow();
    },
  );
});
