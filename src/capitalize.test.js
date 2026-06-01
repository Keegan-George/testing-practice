import { capitalize } from "./capitalize";
import { test, expect } from "@jest/globals";

test("Single letter - convert 'a' to 'A'", () => {
  expect(capitalize("a")).toMatch("A");
});

test("Single letter - convert 'b' to 'B'", () => {
  expect(capitalize("b")).toMatch("B");
});
