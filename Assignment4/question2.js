// Question 2 - Student Grade Calculator

let marks = 60;
let grade;


// Check the marks and determine the grade
if (marks >= 90 && marks <= 100) {
    grade = "A";
}
else if (marks >= 80 && marks <= 89) {
    grade = "B";
}
else if (marks >= 70 && marks <= 79) {
    grade = "C";
}
else if (marks >= 60 && marks <= 69) {
    grade = "D";
}
else {
    grade = "F";
}

// Display marks and grade
console.log("Marks:", marks);
console.log("Grade:", grade);