import { capitalize } from "./capitalize";
import { test, expect } from "@jest/globals";

test("Convert lowercase letter to uppercase - 'a' to 'A'", () => {
  expect(capitalize("a")).toMatch("A");
});

test("Convert lowercase letter to uppercase - 'b' to 'B'", () => {
  expect(capitalize("b")).toMatch("B");
});

test("An uppercase letter remains uppercase - 'A' is 'A'", () => {
  expect(capitalize("A")).toMatch("A");
});

test("First letter to uppercase in a two character string", () => {
  expect(capitalize("it")).toMatch("It");
});

test("First character is a number", () => {
  expect(capitalize("1st place")).toMatch("1st place");
});

test("First character is punctuation", () => {
  expect(capitalize("...and you'll never know")).toMatch(
    "...and you'll never know",
  );
});

test("First character is whitespace", () => {
  expect(capitalize("   congratulations  ")).toMatch("   congratulations  ");
});
