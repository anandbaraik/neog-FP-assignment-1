import { filterByKeyword } from "./filterByKeyword";

describe("filter by keyword", () => {
  it("should return an array of names containing 'Bread'", () => {
    const products = [
      { name: "Bread", price: 480, quantity: 3 },
      { name: "Clips", price: 300, quantity: 5 },
      { name: "green Bread Knife", price: 3077, quantity: 1 },
      { name: "Slipper", price: 150, quantity: 3 }
    ];
    const expected = ["Bread", "green Bread Knife"];
    const result = filterByKeyword(products);
    expect(result).toEqual(expected);
  });

  it("should handle empty input", () => {
    const products = [];
    const expected = [];
    const result = filterByKeyword(products);
    expect(result).toEqual(expected);
  });

  it("should handle input with no matches", () => {
    const products = [
      { name: "Shampoo", price: 250, quantity: 2 },
      { name: "Toothbrush", price: 80, quantity: 5 }
    ];
    const expected = [];
    const result = filterByKeyword(products);
    expect(result).toEqual(expected);
  });
});
