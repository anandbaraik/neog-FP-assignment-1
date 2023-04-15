import { capitalizeLetters } from "./capitalizeLetters";

describe("capitalize letters", () => {
  it("should return an array with all names capitalized", () => {
    const sounds = [
      {
        name: "rain",
        sound: "tap tap tap"
      },
      {
        name: "fire",
        sound: "blaze"
      },
      {
        name: "water",
        sound: "slosh slosh"
      }
    ];

    const expected = ["RAIN", "FIRE", "WATER"];
    const result = capitalizeLetters(sounds);
    expect(result).toEqual(expected);
  });

  it("should handle empty input", () => {
    const users = [];
    const expected = [];
    const result = capitalizeLetters(users);
    expect(result).toEqual(expected);
  });
});
