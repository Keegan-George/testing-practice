import { caesarCipher } from "./caesar-cipher";
import { test, expect, describe } from "@jest/globals";

describe("Valid inputs", () => {
  test.each([
    ["a", 0, "a"],
    ["a", 1, "b"],
    ["b", 1, "c"],
    ["a", 25, "z"],
  ])("caesarCipher(%p,%p) => %p", (str, shift, output) => {
    expect(caesarCipher(str, shift)).toBe(output);
  });
});
