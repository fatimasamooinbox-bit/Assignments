
// Function to create student introduction
function studentIntroduction(name, course) {
    return `My name is ${name} and I am studying ${course}.`;
}

// Function to calculate percentage
function calculatePercentage(obtainedMarks, totalMarks) {
    return (obtainedMarks / totalMarks) * 100;
}

// Export both functions
module.exports = {
    studentIntroduction,
    calculatePercentage
};
