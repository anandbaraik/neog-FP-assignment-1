import { incrementSalaryAndPromoteSenior } from "./incrementSalaryAndPromoteSenior";

describe("incrementSalaryAndPromoteSenior", () => {
  it("should increment salary by 1000 and add isSenior property for employees with workExperience >= 3", () => {
    const employees = [
      { name: "Raju", salary: 1500, role: "dev", workExperience: 3 },
      { name: "Aakash", salary: 2000, role: "dev", workExperience: 3 },
      { name: "Dinesh", salary: 2000, role: "dev", workExperience: 2.5 },
      { name: "Mohan", salary: 2000, role: "dev", workExperience: 2 },
      { name: "Ramesh", salary: 3070, role: "pm", workExperience: 3 },
      { name: "Jiten", salary: 4800, role: "qa", workExperience: 3 }
    ];
    const expectedOutput = [
      {
        name: "Raju",
        salary: 2500,
        role: "dev",
        workExperience: 3,
        isSenior: true
      },
      {
        name: "Aakash",
        salary: 3000,
        role: "dev",
        workExperience: 3,
        isSenior: true
      },
      { name: "Dinesh", salary: 3000, role: "dev", workExperience: 2.5 },
      { name: "Mohan", salary: 3000, role: "dev", workExperience: 2 },
      {
        name: "Ramesh",
        salary: 4070,
        role: "pm",
        workExperience: 3,
        isSenior: true
      },
      {
        name: "Jiten",
        salary: 5800,
        role: "qa",
        workExperience: 3,
        isSenior: true
      }
    ];
    expect(incrementSalaryAndPromoteSenior(employees)).toEqual(expectedOutput);
  });

  it("should increment salary by 1000 and not add isSenior property for employees with workExperience < 3", () => {
    const employees = [
      { name: "Raju", salary: 1500, role: "dev", workExperience: 2.5 },
      { name: "Aakash", salary: 2000, role: "dev", workExperience: 2 },
      { name: "Dinesh", salary: 2000, role: "dev", workExperience: 2 },
      { name: "Mohan", salary: 2000, role: "dev", workExperience: 1.5 },
      { name: "Ramesh", salary: 3070, role: "pm", workExperience: 2.5 }
    ];
    const expectedOutput = [
      { name: "Raju", salary: 2500, role: "dev", workExperience: 2.5 },
      { name: "Aakash", salary: 3000, role: "dev", workExperience: 2 },
      { name: "Dinesh", salary: 3000, role: "dev", workExperience: 2 },
      { name: "Mohan", salary: 3000, role: "dev", workExperience: 1.5 },
      { name: "Ramesh", salary: 4070, role: "pm", workExperience: 2.5 }
    ];
    expect(incrementSalaryAndPromoteSenior(employees)).toEqual(expectedOutput);
  });
});
