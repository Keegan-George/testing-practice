import { calculator } from "./calculator";
import { test, expect, describe } from "@jest/globals";

test("add inputs", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

describe("add", () => {
  test.each([
    [0, 0, 0],
    [1, 2, 3],
    [2, 1, 3],
    [-1, 1, 0],
    [1, -1, 0],
    [1.2, 2.3, 3.5],
    [-1.2, -2.3, -3.5],
    [undefined, undefined, 0],
  ])("add(%p,%p) => %p", (x, y, output) => {
    expect(calculator.add(x, y)).toBe(output);
  });
});

describe("subtract", () => {
  test.each([
    [0, 0, 0],
    [3, 2, 1],
    [-1, 1, -2],
    [1, -1, 2],
    [2.5, 0.2, 2.3],
    [-2.5, -0.2, -2.3],
    [undefined, undefined, 0],
  ])("subtract(%p,%p) => %p", (x, y, output) => {
    expect(calculator.subtract(x, y)).toBe(output);
  });
});
