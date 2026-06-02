import { capitalize } from "./capitalize";
import { test, expect } from "@jest/globals";

test("Convert lowercase letter to uppercase - 'a' to 'A'", () => {
  expect(capitalize("a")).toBe("A");
});

test("Convert lowercase letter to uppercase - 'b' to 'B'", () => {
  expect(capitalize("b")).toBe("B");
});

test("An uppercase letter remains uppercase - 'A' is 'A'", () => {
  expect(capitalize("A")).toBe("A");
});

test("First letter to uppercase in a two character string", () => {
  expect(capitalize("it")).toBe("It");
});

test("First character is a number", () => {
  expect(capitalize("1st place")).toBe("1st place");
});

test("First character is punctuation", () => {
  expect(capitalize("...and you'll never know")).toMatch(
    "...and you'll never know",
  );
});

test("First character is whitespace", () => {
  expect(capitalize("   congratulations  ")).toBe("   congratulations  ");
});

test("Empty string", () => {
  expect(capitalize("")).toBe("");
});

test("No string passed", () => {
  expect(capitalize()).toBe("");
});

test("Non-string value throws Error", () => {
  expect(() => capitalize(123)).toThrow();
});
