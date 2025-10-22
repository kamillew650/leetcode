import { expect, test } from "vitest";
import { search } from "./33-search-in-rotated-sorted-array.ts";

test("test 1", () => {
    expect(search([4,5,6,7,0,1,2], 0)).toBe(4);
});

test("test 2", () => {
    expect(search([4,5,6,7,0,1,2], 3)).toBe(-1);
});

test("test 3", () => {
    expect(search([1], 0)).toBe(-1);
});

test("test 4", () => {
    expect(search([4,5,6,7,8,1,2,3], 8)).toBe(4);
});

test("test 5", () => {
    expect(search([4,5,6,7,0,1,2], 0)).toBe(4);
});