// Question 3: Class Result Analysis

let marks1 = [78, 45, 92, 66, 88, 54, 91, 73];

let marks2 = [81, 69, 95, 58];

// Combine both groups
let allMarks = marks1.concat(marks2);

console.log("Combined marks:", allMarks);

// Create a smaller list
let selectedMarks = allMarks.slice(2, 7);

console.log("Selected marks:", selectedMarks);

// Change one mark in the middle
allMarks.splice(5, 1, 60);

console.log("After changing a mark:", allMarks);

// Total number of marks
console.log("Total number of marks:", allMarks.length);

// Sort from lowest to highest
allMarks.sort((a, b) => a - b);

console.log("Marks from lowest to highest:", allMarks);

// Reverse the list
allMarks.reverse();

console.log("Reversed marks:", allMarks);

// Arrow function
let showMarks = (marks) => {
    console.log("Final result:", marks);
};

// Call arrow function
showMarks(allMarks);