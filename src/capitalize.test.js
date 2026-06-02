import { capitalize } from "./capitalize";
import { test, expect, describe } from "@jest/globals";

describe("Valid inputs", () => {
  test.each([
    ["a", "A"],
    ["b", "B"],
    ["A", "A"],
    ["it", "It"],
    ["1st", "1st"],
    ["2nd place", "2nd place"],
    ["...and you'll never know", "...and you'll never know"],
    ["   congratulations  ", "   congratulations  "],
    ["   ", "   "],
  ])("capitalize(%p) => %p", (input, output) => {
    expect(capitalize(input)).toBe(output);
  });
});

describe("Invalid inputs", () => {
  test.each([[""], [undefined], [null], [true], [false], [[]], [{}]])(
    "capitalize(%p) => %p",
    (input) => {
      expect(() => capitalize(input)).toThrow();
    },
  );
});
