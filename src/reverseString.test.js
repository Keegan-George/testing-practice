import { reverseString } from "./reverseString";
import { test, expect } from "@jest/globals";

test("a", () => {
  expect(reverseString("a")).toBe("a");
});

test("b", () => {
  expect(reverseString("b")).toBe("b");
});
