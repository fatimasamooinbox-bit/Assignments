
import courses from "./courses.js";
import formatCourse from "./courseUtils.js";

// Extract course name and fee
const { courseName, fee } = courses[0];

console.log("Selected Course:", courseName);
console.log("Course Fee:", fee);

// Add a new course without changing the original list
const newCourse = {
    courseName: "Data Science",
    instructor: "Ms. Ayesha",
    duration: "4 months",
    fee: 20000
};

const updatedCourses = [...courses, newCourse];

// Update course fee without changing the original object
const updatedCourse = {
    ...courses[0],
    fee: 18000
};

// Prepare output
let output = `Selected Course: ${courseName}
Course Fee: Rs. ${fee}

Original Courses:
`;

courses.forEach(course => {
    output += `${course.courseName} - Rs. ${course.fee}\n`;
});

output += "\nUpdated Course List:\n";

updatedCourses.forEach(course => {
    output += `${course.courseName} - Rs. ${course.fee}\n`;
});

output += `\nUpdated Web Development Fee: Rs. ${updatedCourse.fee}\n`;
output += `Original Web Development Fee: Rs. ${courses[0].fee}\n`;

output += "\nCourse Summaries:\n";

updatedCourses.forEach(course => {
    output += formatCourse(
        course.courseName,
        course.instructor,
        course.fee
    ) + "\n";
});

console.log(output);
document.getElementById("output").textContent = output;
