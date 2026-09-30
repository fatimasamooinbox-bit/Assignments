// Question 1: Student Search System

let students = [
    "Ali",
    "Sara",
    "Ahmed",
    "Ayesha",
    "Hamza",
    "Sara",
    "Bilal"
];

// Check whether Ayesha is present
console.log("Is Ayesha present?", students.includes("Ayesha"));

// Position of first Sara
console.log("First Sara position:", students.indexOf("Sara"));

// Position of last Sara
console.log("Last Sara position:", students.lastIndexOf("Sara"));

// First student whose name starts with A
let firstAStudent = students.find((student) => student.startsWith("A"));

console.log("First student starting with A:", firstAStudent);

// Position of first student starting with A
let firstAPosition = students.findIndex((student) => student.startsWith("A"));

console.log("Position of first A student:", firstAPosition);

// Last student satisfying a condition
let lastAStudent = students.findLast((student) => student.startsWith("A"));

console.log("Last student starting with A:", lastAStudent);

// Position of last student satisfying the condition
let lastAPosition = students.findLastIndex((student) => student.startsWith("A"));

console.log("Position of last A student:", lastAPosition);