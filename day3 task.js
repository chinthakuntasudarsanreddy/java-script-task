//Level 1-Functions Basics
//Task 1: Student From Function
function studentForm(name, age, course) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Course:", course);
}

// Call
studentForm("Sudarsan", 22, "MERN");
//name = "Sudarsan";
//age = 22;
//course = "MERN";
//Task 2: Calculator Function
function calc(a, b) {
    console.log("Addition:", a + b);//a = 10, b = 5 => 10 + 5 = 15
    console.log("Subtraction:", a - b);//a = 10, b = 5 => 10 - 5 = 5
    console.log("Multiplication:", a * b);//a = 10, b = 5 => 10 * 5 = 50
}

// Call
calc(10, 5);
//Task 3: Reusable Greeting
function greet(name) {
    console.log("Hello", name);
}

// Calls
greet("Kamal");//Hello Kamal
greet("Praveen");//Hello Praveen
greet("Sai");//Hello Sai
//Level 2-Return & Scope
//Task 4: Return Value
function square(num) {
    return num * num;
}

// Example
console.log(square(5)); // 25
//Task 5: Scope Check
function testScope() {
    let secret = "javascript";
    console.log("Inside:", secret);
}

testScope();

// Try outside
console.log("Outside:", secret); // ReferenceError: secret is not defined
//Level 3-Spread / Rest 
//Task 6: Merge Arrays
let boys = ["car", "bike"];
let girls = ["doll", "teddy"];

let toys = [...boys, ...girls];

console.log(toys);
// ["car","bike","doll","teddy"]
//Task 7: Unlimited numbers
function sumAll(...nums) {
    let total = 0;
    for (let n of nums) {
        total += n;
    }
    console.log(total);
}

// Call
sumAll(10, 20, 30, 40); // 100
//Level 4-Destructuring
//Task 8: Array Destructuring
let colors = ["red", "green", "blue"];

let [c1, c2, c3] = colors;

console.log(c1); // red
console.log(c2); // green
console.log(c3); // blue
//Task 9: Object Destructuring
let emp = {
  name: "Naveen",
  role: "Developer",
  salary: "5LPA"
};

let { name, role } = emp;

console.log(name, role); // Naveen Developer
//Level 5-Real-Time Logic
//Task 10: Offer Generator
function* offerGenerator() {
    yield "10% cashback";
    yield "20% cashback";
    yield "50% cashback";
    yield "Try again";
    return "No more offers";
}

let offers = offerGenerator();

console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value); // undefined after completion
//Level 6-Advanced 
//Task 11: Curry Function
function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

// Call
console.log(add(10)(20)(30)); // 60
//Task 12: Student Marks Analyzer
function marks(...nums) {
    let total = nums.reduce((sum, n) => sum + n, 0);
    let avg = total / nums.length;

    console.log("Total =", total);
    console.log("Average =", avg);
}

// Call
marks(80, 90, 70, 60);
//Challenge Task -Employee Registration System
function register(name, role, ...skills) {
    console.log("Name:", name);
    console.log("Role:", role);
    console.log("Skills:", skills.join(" "));
}

// Call
register("Naveen", "Frontend", "HTML", "CSS", "JS", "React");