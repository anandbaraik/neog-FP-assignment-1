import { getQAEmployees } from "./getQAEmployees";

describe("get QA employees", () => {
  test("returns an array of QA employees from all teams", () => {
    const teams = {
      team1: [
        { name: "Alice", salary: 50000, role: "engineer", workExperience: 2 },
        { name: "Bob", salary: 75000, role: "QA", workExperience: 5 },
        { name: "Charlie", salary: 60000, role: "developer", workExperience: 3 }
      ],
      team2: [
        { name: "David", salary: 55000, role: "engineer", workExperience: 3 },
        { name: "Eve", salary: 80000, role: "QA", workExperience: 4 },
        { name: "Frank", salary: 65000, role: "developer", workExperience: 2 }
      ]
    };
    const qaEmployees = getQAEmployees(teams);
    expect(qaEmployees).toEqual([
      { name: "Bob", salary: 75000, role: "QA", workExperience: 5 },
      { name: "Eve", salary: 80000, role: "QA", workExperience: 4 }
    ]);
  });

  test("returns an empty array if no QA employees found", () => {
    const noQATeams = {
      team1: [
        { name: "Alice", salary: 50000, role: "engineer", workExperience: 2 },
        { name: "Charlie", salary: 60000, role: "developer", workExperience: 3 }
      ],
      team2: [
        { name: "David", salary: 55000, role: "engineer", workExperience: 3 },
        { name: "Frank", salary: 65000, role: "developer", workExperience: 2 }
      ]
    };
    const qaEmployees = getQAEmployees(noQATeams);
    expect(qaEmployees).toEqual([]);
  });

  test("returns an empty array if teams object is empty", () => {
    const emptyTeams = { team1: [], team2: [] };
    const qaEmployees = getQAEmployees(emptyTeams);
    expect(qaEmployees).toEqual([]);
  });
});
