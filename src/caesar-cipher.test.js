import { caesarCipher } from "./caesar-cipher";
import { test, expect, describe } from "@jest/globals";

describe("Valid inputs", () => {
  test.each([
    ["a", 0, "a"],
    ["a", 1, "b"],
    ["a", 25, "z"],
    ["a", 26, "a"],
    ["a", 27, "b"],
    ["a", 52, "a"],
    ["a", 53, "b"],
    ["m", 0, "m"],
    ["m", 1, "n"],
    ["m", 13, "z"],
    ["m", 14, "a"],
    ["m", 26, "m"],
    ["z", 0, "z"],
    ["z", 1, "a"],
    ["z", 26, "z"],
    ["", 0, ""],
    ["", 1, ""],
    ["%", 1, "%"],
    ["&", 1, "&"],
    ["$", 1, "$"],
    ["0", 0, "0"],
    ["0", 1, "0"],
    ["A", 0, "A"],
    ["A", 1, "B"],
    ["A", 25, "Z"],
    ["A", 26, "A"],
    ["A", 27, "B"],
    ["A", 52, "A"],
    ["Z", 0, "Z"],
    ["Z", 1, "A"],
    ["Z", 26, "Z"],
  ])("caesarCipher(%p,%p) => %p", (str, shift, output) => {
    expect(caesarCipher(str, shift)).toBe(output);
  });
});
