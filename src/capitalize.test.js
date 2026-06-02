import { capitalize } from "./capitalize";
import { test, expect, describe } from "@jest/globals";

describe("Happy cases", () => {
  test.each([
    ["a", "A"],
    ["b", "B"],
    ["A", "A"],
    ["it", "It"],
  ])("capitalize(%p) => %p", (input, output) => {
    expect(capitalize(input)).toBe(output);
  });
});

describe("Falsy and nullish", () => {
  test.each([
    ["", ""],
    [undefined, ""],
    [null, ""],
  ])("capitalize(%p) => %p", (input, output) => {
    expect(capitalize(input)).toBe(output);
  });
});

describe("Non-alpha first character", () => {
  test.each([
    ["1st", "1st"],
    ["2nd place", "2nd place"],
    ["...and you'll never know", "...and you'll never know"],
    ["   congratulations  ", "   congratulations  "],
  ])("capitalize(%p) => %p", (input, output) => {
    expect(capitalize(input)).toBe(output);
  });
});

test("Non-string value throws Error", () => {
  expect(() => capitalize(123)).toThrow();
});
