import { filterBySalary } from "./filterBySalary";

describe("filter by salary", () => {
  it("should return an array of names of employees with even salaries", () => {
    const employees = [
      { name: "Raju", salary: 154, role: "dev" },
      { name: "Aakash", salary: 200, role: "dev" },
      { name: "Ramesh", salary: 3077, role: "pm" },
      { name: "Jiten", salary: 487, role: "qa" }
    ];
    const expected = ["Raju", "Aakash"];
    const result = filterBySalary(employees);
    expect(result).toEqual(expected);
  });

  it("should handle empty input", () => {
    const employees = [];
    const expected = [];
    const result = filterBySalary(employees);
    expect(result).toEqual(expected);
  });

  it("should handle input with no matches", () => {
    const employees = [
      { name: "Amit", salary: 221, role: "dev" },
      { name: "Suresh", salary: 333, role: "dev" }
    ];
    const expected = [];
    const result = filterBySalary(employees);
    expect(result).toEqual(expected);
  });
});
