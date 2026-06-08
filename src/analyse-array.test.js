import { analyseArray } from "./analyse-array";
import { test, expect, describe } from "@jest/globals";

describe("valid inputs", () => {
  test.each([[[0]]])("analyzeArray(%p)", (arr) => {
    expect(analyseArray(arr)).toEqual({
      min: 0,
      max: 0,
      average: 0,
      length: 1,
    });
  });
});
