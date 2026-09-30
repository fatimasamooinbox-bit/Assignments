// Question 5: Employee Object Methods

let employee1 = {
    employeeId: 101,
    firstName: "Ali",
    lastName: "Ahmed",
    department: "IT",

    // Method 1
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    },

    // Method 2
    getEmployeeInfo: function() {
        return "Employee ID: " + this.employeeId +
               ", Department: " + this.department;
    }
};

// Call methods
console.log("Employee 1 Name:", employee1.getFullName());

console.log("Employee 1 Info:", employee1.getEmployeeInfo());


// Second employee
let employee2 = {
    employeeId: 102,
    firstName: "Sara",
    lastName: "Khan",
    department: "HR",

    // Method 1
    getFullName: function() {
        return this.firstName + " " + this.lastName;
    },

    // Method 2
    getEmployeeInfo: function() {
        return "Employee ID: " + this.employeeId +
               ", Department: " + this.department;
    }
};

// Call methods for second employee
console.log("Employee 2 Name:", employee2.getFullName());

console.log("Employee 2 Info:", employee2.getEmployeeInfo());