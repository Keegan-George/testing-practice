import { caesarCipher } from "./caesar-cipher";
import { test, expect, describe } from "@jest/globals";

describe("Single-characters", () => {
  test.each([
    ["a", 0, "a"],
    ["a", 1, "b"],
    ["a", 25, "z"],
    ["m", 0, "m"],
    ["m", 1, "n"],
    ["m", 13, "z"],
    ["m", 14, "a"],
    ["z", 0, "z"],
    ["z", 1, "a"],
    ["A", 0, "A"],
    ["A", 1, "B"],
    ["A", 25, "Z"],
    ["Z", 0, "Z"],
  ])("caesarCipher(%p,%p) => %p", (str, shift, output) => {
    expect(caesarCipher(str, shift)).toBe(output);
  });
});

describe("Wrap-around", () => {
  test.each([
    ["a", 26, "a"],
    ["a", 27, "b"],
    ["a", 52, "a"],
    ["a", 53, "b"],
    ["m", 26, "m"],
    ["z", 26, "z"],
    ["A", 26, "A"],
    ["A", 27, "B"],
    ["A", 52, "A"],
    ["Z", 26, "Z"],
    ["A", -1, "Z"],
    ["A", -26, "A"],
    ["Z", -25, "A"],
    ["Z", -26, "Z"],
    ["Z", 1, "A"],
    ["A", 520, "A"],
    ["A", 260_000_000_000, "A"],
    ["A", 260_000_000_001, "B"],
    ["A", -260_000_000_000, "A"],
    ["A", -260_000_000_001, "Z"],
  ])("caesarCipher(%p,%p) => %p", (str, shift, output) => {
    expect(caesarCipher(str, shift)).toBe(output);
  });
});

describe("Non-alphabetic", () => {
  test.each([
    ["", 0, ""],
    ["", 1, ""],
    ["%", 1, "%"],
    ["&", 1, "&"],
    ["$", 1, "$"],
    ["0", 0, "0"],
    ["0", 1, "0"],
  ])("caesarCipher(%p,%p) => %p", (str, shift, output) => {
    expect(caesarCipher(str, shift)).toBe(output);
  });
});

describe("Full strings", () => {
  test.each([
    ["abc", 1, "bcd"],
    ["abc", -1, "zab"],
    ["abc", 5, "fgh"],
    ["abc", -5, "vwx"],
    ["ABC", 5, "FGH"],
    ["ABC", -5, "VWX"],
    ["A B C", 5, "F G H"],
    ["A.B.C", 5, "F.G.H"],
    ["HeLLo", 3, "KhOOr"],
    ["Hello, World!", 3, "Khoor, Zruog!"],
    ["Testing 1 2 3 testing", 4, "Xiwxmrk 1 2 3 xiwxmrk"],
  ])("caesarCipher(%p,%p) => %p", (str, shift, output) => {
    expect(caesarCipher(str, shift)).toBe(output);
  });
});

describe("Invalid inputs", () => {
  test.each([
    [null, 0],
    [undefined, 0],
    [NaN, 0],
    [true, 0],
    [false, 0],
    [1, 0],
    [{}, 0],
    ["a", null],
    ["a", undefined],
    ["a", NaN],
    ["a", true],
    ["a", false],
    ["a", {}],
    ["a", "1"],
    ["a", "a"],
    ["a", 0.5],
  ])("caesarCipher(%p,%p) throws", (str, shift) => {
    expect(() => caesarCipher(str, shift)).toThrow();
  });
});

test("cipher can be reversed", () => {
  const original = "Testing 1 2 3 testing";
  const encoded = caesarCipher(original, 4);
  const decoded = caesarCipher(encoded, -4);

  expect(original).toBe(decoded);
});
