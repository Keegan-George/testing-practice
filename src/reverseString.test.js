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
  ])("reverseString(%p) => %p", (input, output) => {
    expect(reverseString(input)).toBe(output);
  });
});

describe("Falsy and nullish", () => {
  test.each([
    ["", ""],
    [undefined, ""],
    [null, ""],
  ])("reverseString(%p) => %p", (input, output) => {
    expect(reverseString(input)).toBe(output);
  });
});
