//Q3: Employee Data from an API

const employees = [
    { name: "Ali", department: "IT", salary: 80000 },
    { name: "Sara", department: "HR", salary: 70000 },
    { name: "Ahmed", department: "IT", salary: 95000 },
    { name: "Ayesha", department: "Finance", salary: 85000 }
];

// Employees belonging to IT department
const itEmployees = employees.filter(employee => employee.department === "IT");

// First employee with salary greater than 90000
const highSalaryEmployee = employees.find(employee => employee.salary > 90000);

// List containing only employee names
const employeeNames = employees.map(employee => employee.name);

// Total salary
const totalSalary = employees.reduce(
    (total, employee) => total + employee.salary,
    0
);

// Display results
console.log("IT Employees:", itEmployees);
console.log("First Employee With Salary Greater Than 90000:", highSalaryEmployee);
console.log("Employee Names:", employeeNames);
console.log("Total Salary:", totalSalary);