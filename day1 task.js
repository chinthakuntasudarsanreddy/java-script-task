//task1
let num = 50;

num = 100;

console.log(num); // num is now 100, so it will print 100
//task2
let marks = 80;   // initial value

marks = marks + 10;  // add 10 marks

console.log(marks); // marks is now 90, so it will print 90

//task3
const price = 500;
let finalPrice = price + 100;
console.log(finalPrice); // 600
//task4
console.log("Welcome Team");
console.log(2026);
console.log(true);
//task5
console.log(typeof "JavaScript"); // string
console.log(typeof 250);          // number
console.log(typeof false);        // boolean

//task6
let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
console.log(fruits);                     // full array
console.log(fruits[0]);                  // first fruit
console.log(fruits.at(-1));  // last fruit

//task7
let student = {
  name: "Naveen",
  age: 20,
  course: "MERN"
};
console.log(student.name);
console.log(student.age);

//task8
console.log(20 + 10);
console.log(50 - 25);
console.log(5 * 5);
console.log(100 / 4);
console.log(20 % 3);
//task9
let x = 5;
x++;
console.log(x);

let y = 10;
y--;
console.log(y);
//task10
console.log(10 > 5);
console.log(5 < 2);
console.log(20 == "20");
console.log(15 === "15");
console.log(10 != 8);

//task11
console.log(5 > 2 && 10 > 3);
console.log(7 < 5 || 8 > 2);
console.log(!(10 > 5));

//task12
let age = 18;
console.log(age >= 18 ? "Eligible" : "Not Eligible");