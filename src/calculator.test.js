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
  ])("subtract(%p,%p) => %p", (x, y, output) => {
    expect(calculator.subtract(x, y)).toBe(output);
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
    expect(calculator.multiply(x, y)).toBe(output);
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
    expect(calculator.divide(x, y)).toBe(output);
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
    expect(calculator.divide(x, y)).toBe(output);
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
