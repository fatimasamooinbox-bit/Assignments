// Question 4: Employee Record Object

let employee = {
    employeeId: 101,
    firstName: "Ali",
    lastName: "Ahmed",
    department: "IT",
    designation: "Web Developer",
    salary: 60000
};

// Dot notation
console.log("First name:", employee.firstName);
console.log("Department:", employee.department);

// Bracket notation
console.log("Designation:", employee["designation"]);
console.log("Salary:", employee["salary"]);

// Add a new property
employee.city = "Hyderabad";

// Change an existing property
employee.salary = 70000;

// Remove a property
delete employee.lastName;

// Display final object
console.log("Final employee object:", employee);