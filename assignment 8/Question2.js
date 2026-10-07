//Q2: Student Performance Analyzer

const marks = [45, 78, 92, 61, 88, 54, 73, 95];

//Increase every mark by 5
const increasedMarks = marks.map(mark => mark + 5);

//students whose marks are 70 or above
const marks70OrAbove = marks.filter(mark => mark >= 70);

//First mark greater than 90
const firstMarkGreaterThan90 = marks.find(mark => mark > 90);

//Total of all original marks
const totalMarks = marks.reduce((total, mark) => total + mark, 0);

//Display results
console.log("Original Marks:", marks);
console.log("Marks After Increasing by 5:", increasedMarks);
console.log("Marks 70 or Above:", marks70OrAbove);
console.log("First Mark Greater Than 90:", firstMarkGreaterThan90);
console.log("Total Original Marks:", totalMarks);