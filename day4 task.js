//Level 1(Basic Practice)
//Task 1: Array Basics
let arr = [10, 20, 30, 40, 50];

console.log("First element:", arr[0]);
console.log("Last element:", arr[arr.length - 1]);
console.log("Total length:", arr.length);
//Task 2: Push & Pop
let arr = [1, 2, 3];

arr.push(4, 5);   // Add 4,5
arr.pop();        // Remove last element

console.log(arr); // [1,2,3,4]
//Task 3: Includes Check
let arr = ["html","css","javascript","react"];

console.log(arr.includes("javascript")); // true
//Level 2(Intermediate)
//Task 4: Filter Salaries
let emp = [
  {name:"A", salary:10000},
  {name:"B", salary:50000},
  {name:"C", salary:30000}
];

let result = emp.filter(e => e.salary > 20000);

console.log(result);
// [{name:"B", salary:50000}, {name:"C", salary:30000}]
//Task 5: Map Names
let names = emp.map(e => e.name);

console.log(names); // ["A","B","C"]
//Task 6: Reduce Sum
let totalSalary = emp.reduce((sum, e) => sum + e.salary, 0);

console.log(totalSalary); // 90000
//Level 3(logic building)
//Task 7: Remove Duplicates
let arr = [1,2,2,3,4,4,5];

let unique = [...new Set(arr)];

console.log(unique); // [1,2,3,4,5]
//Task 8: Find largest Number
let arr = [10, 200, 5, 90];

let max = Math.max(...arr);

console.log(max); // 200
//Task 9:Reverse String(Wthout reverse())
let str = "hello";

let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}

console.log(reversed); // "olleh"
//Level 4(Advanced Thinking)
//Task 10:Group by salary
let emp = [
  {name:"A", salary:10000},
  {name:"B", salary:50000},
  {name:"C", salary:10000}
];

let result = emp.reduce((acc, e) => {
  if (!acc[e.salary]) {
    acc[e.salary] = [];
  }
  acc[e.salary].push(e.name);
  return acc;
}, {});

console.log(result);
// {10000: ["A","C"], 50000: ["B"]}
//Task 11: Flatten Array(without flat)
let arr = [1,[2,[3,[4]]]];

function flatten(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flatten(arr)); // [1,2,3,4]
//Task 12: Custom Sort(Descending)
let arr = [5,2,9,1];

arr.sort((a, b) => b - a);

console.log(arr); // [9,5,2,1]
//Task 13: Find Second Largest
let arr = [10, 50, 20, 40];

let unique = [...new Set(arr)];
unique.sort((a, b) => b - a);

console.log(unique[1]); // 40
//Task 14: Count Characters
let str = "aabbccdde";

let count = {};

for (let ch of str) {
  count[ch] = (count[ch] || 0) + 1;
}

console.log(count);
// {a:2, b:2, c:2, d:2, e:1}