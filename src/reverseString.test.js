import { reverseString } from "./reverseString";
import { test, expect, describe } from "@jest/globals";

describe("Happy cases", () => {
  test.each([
    ["a", "a"],
    ["b", "b"],
    ["ab", "ba"],
  ])("capitalize(%p) => %p", (input, output) => {
    expect(reverseString(input)).toBe(output);
  });
});
