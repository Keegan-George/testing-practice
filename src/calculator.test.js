import { calculator } from "./calculator";
import { test, expect, describe } from "@jest/globals";

describe("add", () => {
  test.each([
    [0, 0, 0],
    [1, 2, 3],
    [2, 1, 3],
    [-1, 1, 0],
    [1, -1, 0],
    [1.2, 2.3, 3.5],
    [-1.2, -2.3, -3.5],
  ])("add(%p,%p) => %p", (x, y, output) => {
    expect(calculator.add(x, y)).toBeCloseTo(output);
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
  ])("subtract(%p,%p) => %p", (x, y, output) => {
    expect(calculator.subtract(x, y)).toBeCloseTo(output);
  });
});

describe("multiply", () => {
  test.each([
    [0, 0, 0],
    [0, 1, 0],
    [1, 0, 0],
    [1, 1, 1],
    [1, 2, 2],
    [-1, 2, -2],
    [2, -1, -2],
    [2.5, 2, 5],
    [1.5, 1.5, 2.25],
    [-1.5, -1.5, 2.25],
    [1.5, -1.5, -2.25],
  ])("multiply(%p,%p) => %p", (x, y, output) => {
    expect(calculator.multiply(x, y)).toBeCloseTo(output);
  });
});

describe("divide", () => {
  test.each([
    [0, 1, 0],
    [2, 1, 2],
    [2, 2, 1],
    [1, 2, 0.5],
    [-1, 2, -0.5],
    [2.5, 2, 1.25],
    [5, 2, 2.5],
    [1.5, 1.5, 1],
    [1.5, 3, 0.5],
    [3, 1.5, 2],
  ])("divide(%p,%p) => %p", (x, y, output) => {
    expect(calculator.divide(x, y)).toBeCloseTo(output);
  });
});

describe("division by 0 errors", () => {
  test.each([
    [0, 0],
    [1, 0],
  ])("divide(%p,%p) => error ", (x, y) => {
    expect(() => calculator.divide(x, y)).toThrow();
  });
});

describe("invalid inputs", () => {
  const operators = {
    add: calculator.add,
    subtract: calculator.subtract,
    multiply: calculator.multiply,
    divide: calculator.divide,
  };

  test.each([
    [true, true],
    [true, false],
    [false, true],
    [false, false],
    [true, NaN],
    [0, NaN],
    [1, NaN],
    ["1", 0],
    [NaN, "0"],
    [undefined, undefined],
    [undefined, null],
    [undefined, NaN],
    [undefined, 0],
    [undefined, 1],
    [undefined, true],
    [undefined, false],
    [undefined, "0"],
    [null, null],
    [null, undefined],
    [null, NaN],
    [null, 0],
    [null, 1],
    [null, true],
    [null, false],
    [null, "0"],
    [NaN, NaN],
    [NaN, undefined],
    [NaN, null],
    [NaN, 0],
    [NaN, 1],
    [NaN, true],
    [NaN, false],
    [NaN, "0"],
  ])("Inputs %p %p => error", (x, y) => {
    for (const operator of Object.values(operators)) {
      expect(() => operator(x, y)).toThrow();
    }
  });
});
