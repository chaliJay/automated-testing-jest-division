import { divide } from "../src/calculator.js";

describe("divide", () => {
  // Positive test
  test("divides two valid numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  // Negative tests
  test("throws TypeError when first argument is not a number", () => {
    expect(() => divide("10", 2)).toThrow(TypeError);
    expect(() => divide("10", 2)).toThrow("Both arguments must be numbers");
  });

  test("throws TypeError when second argument is not a number", () => {
    expect(() => divide(10, "2")).toThrow(TypeError);
    expect(() => divide(10, "2")).toThrow("Both arguments must be numbers");
  });

  test("throws TypeError when an argument is NaN", () => {
    expect(() => divide(NaN, 2)).toThrow(TypeError);
    expect(() => divide(NaN, 2)).toThrow("Arguments cannot be NaN");
  });

  test("throws RangeError when dividing by zero", () => {
    expect(() => divide(10, 0)).toThrow(RangeError);
    expect(() => divide(10, 0)).toThrow("Division by zero is not allowed");
  });
});