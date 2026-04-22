// Student Data
let students = [
  { id: 1, name: "Naveen", mark: 85, course: "MERN" },
  { id: 2, name: "John", mark: 45, course: "Python" },
  { id: 3, name: "Priya", mark: 72, course: "Java" },
  { id: 4, name: "Arun", mark: 95, course: "React" }
];


//  Task 1: Print All Students
console.log("Task 1: All Students");//Task 1: All Students
students.forEach(s => {
  console.log(s.id, s.name, s.mark, s.course);
  //Output:
  //1 Naveen 85 MERN
  //2 John 45 Python
  //3 Priya 72 Java
  //4 Arun 95 React
});


//  Task 2: Pass / Fail
console.log("\nTask 2: Pass / Fail");
students.forEach(s => {
  let result = s.mark >= 50 ? "Pass" : "Fail";
  console.log(`${s.name} - ${result}`);
  //Naveen - Pass
  //John - Fail
  //Priya - Pass
  //Arun - Pass
});


//  Task 3: Grade System
console.log("\nTask 3: Grades");//Task 3: Grades
students.forEach(s => {
  let grade;
  if (s.mark >= 90) grade = "A Grade";
  else if (s.mark >= 75) grade = "B Grade";
  else if (s.mark >= 50) grade = "C Grade";
  else grade = "Fail";

  console.log(`${s.name} - ${grade}`);
  //Naveen - B Grade
  //John - Fail
  //Priya - C Grade
  //Arun - A Grade
});


// Task 4: Topper Student
let topper = students[0];

students.forEach(s => {
  if (s.mark > topper.mark) {
    topper = s;
  }
});

console.log("\nTask 4: Topper");//Task 4: Topper
console.log(`Topper is ${topper.name} - ${topper.mark}`);//Topper is Arun - 95


//  Task 5: Course Search (React)
console.log("\nTask 5: React Students");//Task 5: React Students
students.forEach(s => {
  if (s.course === "React") {
    console.log(s);
//{id: 4, name: 'Arun', mark: 95, course: 'React'}
  }
});


//  Task 6: Add New Student
students.push({ id: 5, name: "Rahul", mark: 88, course: "Node JS" });

console.log("\nTask 6: After Adding New Student");//Task 6: After Adding New Student
students.forEach(s => {
  console.log(s);
});
// Output:
// {id: 1, name: 'Naveen', mark: 85, course: 'MERN'}
// {id: 2, name: 'John', mark: 45, course: 'Python'}
// {id: 3, name: 'Priya', mark: 72, course: 'Java'}
// {id: 4, name: 'Arun', mark: 95, course: 'React'}
// {id: 5, name: 'Rahul', mark: 88, course: 'Node JS'}



//  Task 7: Attendance System
console.log("\nTask 7: Attendance");//Task 7: Attendance

let status = "present";

switch (status) {
  case "present":
    console.log("Welcome");//Welcome
    break;
  case "absent":
    console.log("Mark Absent");
    break;
  case "leave":
    console.log("Approved Leave");
    break;
  default:
    console.log("Invalid Status");
}


//  Task 8: Login System
console.log("\nTask 8: Login"); //Task 8: Login 

let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login Success"); //login Success
} else {
  console.log("Invalid User");
}