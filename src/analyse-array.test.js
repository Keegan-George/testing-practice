import { analyseArray } from "./analyse-array";
import { test, expect, describe } from "@jest/globals";

describe("valid inputs", () => {
  test.each([
    [[0]],
    [[0, 0]],
    [[0, 0, 0]],
    [[0, 1]],
    [[0, 2]],
    [[1, 1, 1]],
    [[1, 2, 3]],
  ])("analyzeArray(%p)", (arr) => {
    expect(analyseArray(arr)).toEqual({
      min: Math.min(...arr),
      max: Math.max(...arr),
      average:
        arr.reduce((accumulator, current) => accumulator + current, 0) /
        arr.length,
      length: arr.length,
    });
  });
});

describe("invalid array inputs", () => {
  test.each([
    [["0"]],
    [["0", "0"]],
    [[false]],
    [[true]],
    [[false, false]],
    [[true, true]],
    [["a", "b"]],
    [[null]],
    [[null, null]],
    [[undefined]],
    [[undefined, undefined]],
    [[NaN]],
    [[NaN, NaN]],
    [["1", 2, "5"]],
    [["A", 3, 4, 6]],
    [[false, true, 5, 5, 10]],
    [[]],
  ])("analyzeArray(%p) => throws", (arr) => {
    expect(() => analyseArray(arr)).toThrow();
  });
});

describe("non-array inputs", () => {
  test.each([[""], ["a"], [0], [false], [true], [undefined], [null], [NaN]])(
    "analyzeArray(%p) => throws",
    (arr) => {
      expect(() => analyseArray(arr)).toThrow();
    },
  );
});
