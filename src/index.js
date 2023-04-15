import { capitalizeLetters } from "./exercise1/capitalizeLetters";
import { filterByKeyword } from "./exercise2/filterByKeyword";
import { filterProducts } from "./exercise3/filterProducts";
import { filterBySalary } from "./exercise4/filterBySalary";
import { sumOfEvenNumbers } from "./exercise5/sumOfEvenNumbers";
import { incrementSalaryAndPromoteSenior } from "./exercise6/incrementSalaryAndPromoteSenior";
import { getQAEmployees } from "./exercise7/getQAEmployees";
import { findBookWithMoreThan500Pages } from "./exercise8/findBookWithMoreThan500Pages";
import { mostActivePerson } from "./exercise9/mostActivePerson";
import { tagRegularStudents } from "./exxercise10/tagRegularStudents";

const sounds = [
  {
    name: "rain",
    sound: "tap tap tap"
  },
  {
    name: "air",
    sound: "hush hush"
  },
  {
    name: "water",
    sound: "slosh slosh"
  }
];

console.log(capitalizeLetters(sounds)); // Output: ["RAIN", "AIR", "WATER"]

const productsKeyword = [
  { name: "Bread", price: 150, quantity: 2 },
  { name: "Clips", price: 200, quantity: 5 },
  { name: "green Bread Knife", price: 3077, quantity: 1 },
  { name: "Slipper", price: 480, quantity: 3 }
];

console.log(filterByKeyword(productsKeyword));
// Output: ["Bread", "green Bread Knife"]

const productsFilter = [
  { name: "Bread", price: 150, quantity: 20 },
  { name: "Hoodie", price: 200, quantity: 50 },
  { name: "Pyjama", price: 307, quantity: 10 },
  { name: "Slipper", price: 480, quantity: 30 }
];

console.log(filterProducts(productsFilter)); // Output: ["Hoodie", "Slipper"]

const employees04 = [
  { name: "Raju", salary: 154, role: "dev" },
  { name: "Aakash", salary: 200, role: "dev" },
  { name: "Ramesh", salary: 3077, role: "pm" },
  { name: "Jiten", salary: 487, role: "qa" }
];

console.log(filterBySalary(employees04)); // Output: ["Raju", "Aakash"]

console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6])); // 12
console.log(sumOfEvenNumbers([1, 3, 5])); // 0

const employees06 = [
  { name: "Raju", salary: 1500, role: "dev", workExperience: 3 },
  { name: "Aakash", salary: 2000, role: "dev", workExperience: 3 },
  { name: "Dinesh", salary: 2000, role: "dev", workExperience: 2.5 },
  { name: "Mohan", salary: 2000, role: "dev", workExperience: 2 },
  { name: "Ramesh", salary: 3070, role: "pm", workExperience: 3 },
  { name: "Jiten", salary: 4800, role: "qa", workExperience: 3 }
];

console.log(incrementSalaryAndPromoteSenior(employees06));

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

console.log(getQAEmployees(teams));

// Output:
// [
//   { name: "Bob", salary: 75000, role: "QA", workExperience: 5 },
//   { name: "Eve", salary: 80000, role: "QA", workExperience: 4 },
// ]

const books = [
  { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", pageCount: 281 },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    pageCount: 193
  },
  { title: "The Name of the Wind", author: "Patrick Rothfuss", pageCount: 662 }
];

console.log(findBookWithMoreThan500Pages(books));
// Output: { title: "The Lord of the Rings", author: "J.R.R. Tolkien", pageCount: 1178 }

const neogCommunity09 = [
  { name: "Raju", role: "student", hours: [1, 2, 3, 1, 2, 3, 0] },
  { name: "Aakash", role: "mentor", hours: [1, 2, 3, 1, 2, 3, 0] },
  { name: "Ramesh", role: "student", hours: [1, 2, 3, 1, 2, 3, 3] },
  { name: "Jiten", role: "TA", hours: [2, 2, 3, 5, 2, 3, 0] },
  { name: "Harsh", role: "student", hours: [1, 7, 3, 2, 2, 3, 0] },
  { name: "Akshay", role: "student", hours: [1, 6, 3, 1, 2, 3, 0] },
  { name: "Rohan", role: "mentor", hours: [1, 2, 3, 12, 2, 3, 0] },
  { name: "Mohan", role: "student", hours: [1, 8, 3, 0, 2, 3, 0] }
];

console.log(mostActivePerson(neogCommunity09));
// Output: { name: "Rohan", role: "mentor", hours: [1, 2, 3, 12, 2, 3, 0] }

const neogCommunity10 = [
  { name: "Raju", role: "student", hours: [1, 2, 3, 1, 2, 3, 0] },
  { name: "Aakash", role: "mentor", hours: [1, 2, 3, 4, 5, 6, 7] },
  { name: "Ramesh", role: "student", hours: [4, 5, 6, 4, 5, 6, 0] },
  { name: "Jiten", role: "TA", hours: [2, 2, 3, 5, 2, 3, 0] },
  { name: "Harsh", role: "student", hours: [7, 8, 9, 7, 8, 9, 0] },
  { name: "Akshay", role: "student", hours: [1, 3, 5, 7, 9, 0, 2] },
  { name: "Rohan", role: "mentor", hours: [1, 2, 3, 12, 2, 3, 0] },
  { name: "Mohan", role: "student", hours: [4, 6, 8, 0, 1, 9, 2] }
];

console.log(tagRegularStudents(neogCommunity10));
