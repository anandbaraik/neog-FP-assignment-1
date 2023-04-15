import { filterProducts } from "./filterProducts";

describe("filter products", () => {
  it("should return an array of names of products with quantity > 10 and name length > 5", () => {
    const products = [
      { name: "Bread", price: 150, quantity: 20 },
      { name: "Hoodie", price: 200, quantity: 50 },
      { name: "Pyjama", price: 307, quantity: 10 },
      { name: "Slipper", price: 480, quantity: 30 }
    ];
    const expected = ["Hoodie", "Slipper"];
    const result = filterProducts(products);
    expect(result).toEqual(expected);
  });

  it("should handle empty input", () => {
    const products = [];
    const expected = [];
    const result = filterProducts(products);
    expect(result).toEqual(expected);
  });

  it("should handle input with no matches", () => {
    const products = [
      { name: "Shampoo", price: 250, quantity: 2 },
      { name: "Toothbrush", price: 80, quantity: 5 }
    ];
    const expected = [];
    const result = filterProducts(products);
    expect(result).toEqual(expected);
  });
});
