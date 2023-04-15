import { mostActivePerson } from "./mostActivePerson";

describe("most active person", () => {
  it("returns null if the input array is empty", () => {
    const result = mostActivePerson([]);
    expect(result).toBeNull();
  });

  it("returns the only person in the array if it has length 1", () => {
    const person = {
      name: "Alice",
      role: "student",
      hours: [1, 2, 3, 1, 2, 3, 0]
    };
    const result = mostActivePerson([person]);
    expect(result).toEqual(person);
  });

  it("returns the person with the highest total hours", () => {
    const persons = [
      { name: "Alice", role: "student", hours: [1, 2, 3, 1, 2, 3, 0] },
      { name: "Bob", role: "mentor", hours: [1, 2, 3, 1, 2, 3, 5] },
      { name: "Charlie", role: "student", hours: [1, 2, 3, 1, 2, 3, 3] }
    ];
    const result = mostActivePerson(persons);
    expect(result).toEqual(persons[1]);
  });

  it("returns the first person with the highest total hours if there are multiple", () => {
    const persons = [
      { name: "Alice", role: "student", hours: [1, 2, 3, 1, 2, 3, 5] },
      { name: "Bob", role: "mentor", hours: [1, 2, 3, 1, 2, 3, 5] },
      { name: "Charlie", role: "student", hours: [1, 2, 3, 1, 2, 3, 3] }
    ];
    const result = mostActivePerson(persons);
    expect(result).toEqual(persons[0]);
  });
});
