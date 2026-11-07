
// Import functions from student.js
const {
    studentIntroduction,
    calculatePercentage
} = require('./student');

// Student information
const name = "Fatima Batool";
const course = "Web Development";

const obtainedMarks = 425;
const totalMarks = 500;

// Call functions
const introduction = studentIntroduction(name, course);

const percentage = calculatePercentage(
    obtainedMarks,
    totalMarks
);

// Display information
console.log("===== Student Information =====");

console.log(introduction);
console.log("Student Name:", name);
console.log("Course:", course);
console.log("Percentage:", percentage + "%");

console.log("Node.js Version:", process.version);
