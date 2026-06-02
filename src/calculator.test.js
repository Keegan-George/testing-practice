import { calculator } from "./calculator";
import { test, expect } from "@jest/globals";

test("add inputs", () => {
  expect(calculator.add(1, 2)).toBe(3);
});
