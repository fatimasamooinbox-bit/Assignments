// Question 4: Array.isArray() and Arrow Functions

let colors = ["Red", "Blue", "Green"];
let name = "Fatima";
let age = 22;

// Array.isArray()
console.log("Is colors an array?", Array.isArray(colors));
console.log("Is name an array?", Array.isArray(name));
console.log("Is age an array?", Array.isArray(age));

// Arrow function with an array
let showArray = (array) => {
    console.log("Array:", array);
};

// Calling the arrow function
showArray(colors);

// Another arrow function
let showValue = (value) => {
    console.log("Value:", value);
};

// Calling the function
showValue("Hello JavaScript");