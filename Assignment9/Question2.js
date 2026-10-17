
const student = {
    name: "Sara Ahmed",
    age: 19,
    department: "Software Engineering",
    address: {
        city: "Karachi",
        country: "Pakistan"
    }
};

// Extract name, age, rename department to program,
// and extract city and country from nested address
const {
    name,
    age,
    department: program,
    address: { city, country }
} = student;

// Use default value if phone is missing
const { phone = "Not provided" } = student;

// Prepare profile summary
const summary = `Name: ${name}
Program: ${program}
City: ${city}
Phone: ${phone}`;

console.log(summary);
console.log("Age:", age);
console.log("Country:", country);

// Display output on webpage
document.getElementById("output").textContent =
    summary + `\nAge: ${age}\nCountry: ${country}`;
