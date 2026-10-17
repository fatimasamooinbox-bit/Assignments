
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

function calculateTotal(marks1, marks2, marks3, marks4) {
    return marks1 + marks2 + marks3 + marks4;
}

// Named export
export { getFullName };

// Default export
export default calculateTotal;
