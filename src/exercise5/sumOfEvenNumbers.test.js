import { sumOfEvenNumbers } from "./sumOfEvenNumbers";

describe("sum of even numbers", () => {
  it("returns 0 if input array is empty", () => {
    expect(sumOfEvenNumbers([])).toBe(0);
  });

  it("returns 0 if input array has no even numbers", () => {
    expect(sumOfEvenNumbers([1, 3, 5])).toBe(0);
  });

  it("returns the sum of even numbers in the input array", () => {
    expect(sumOfEvenNumbers([1, 2, 3, 4, 5, 6])).toBe(12);
    expect(sumOfEvenNumbers([2, 4, 6, 8])).toBe(20);
    expect(sumOfEvenNumbers([-2, 0, 2, 4])).toBe(4);
    expect(sumOfEvenNumbers([null, 1, 2, 3, 4, null, 6])).toBe(12);
    expect(sumOfEvenNumbers([undefined, 1, 2, 3, 4, undefined, 6])).toBe(12);
  });
});
