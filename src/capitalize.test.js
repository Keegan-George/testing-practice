import { capitalize } from "./capitalize";
import { test, expect } from "@jest/globals";

test("convert 'a' to 'A'", () => {
  expect(capitalize("a")).toMatch("A");
});
