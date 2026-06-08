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
        arr.reduce((accumulator, current) => accumulator + current) /
        arr.length,
      length: arr.length,
    });
  });
});
