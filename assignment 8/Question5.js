// Question 5 - Student Result Object

// First student object
const student1 = {
    name: "Fatima",
    class: "BSCS",
    chemistry: 85,
    mathematics: 90,
    Urdu: 80,
    English: 75,

    calculateResult: function () {
        const total =
            this.chemistry +
            this.mathematics +
            this.Urdu +
            this.English;

        const percentage = (total / 400) * 100;

        return percentage;
    }
};

// Display name and class using dot notation
console.log("Student Name:", student1.name);
console.log("Student Class:", student1.class);

// Access property using bracket notation
console.log("Chemistry Marks:", student1["chemistry"]);

// Call the method
const percentage1 = student1.calculateResult();

console.log(
    student1.name + "'s Percentage:",
    percentage1 + "%"
);


// Second student object
const student2 = {
    name: "Ayesha",
    class: "BSCS",
    chemistry: 90,
    mathematics: 85,
    Urdu: 88,
    English: 92,

    calculateResult: function () {
        const total =
            this.chemistry +
            this.mathematics +
            this.Urdu +
            this.English;

        const percentage = (total / 400) * 100;

        return percentage;
    }
};

// Call method for second student
const percentage2 = student2.calculateResult();

console.log(
    student2.name + "'s Percentage:",
    percentage2 + "%"
);


// Remove one property from first student
delete student1.Urdu;

console.log("Final Student 1 Object:", student1);