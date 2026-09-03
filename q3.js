// ========================================
// VARIABLES USING var, let AND const
// ========================================


// var
// var is used to declare a variable.
var studentName = "Fatima";


// let
// let is used to declare a variable
// whose value can be changed.
let age = 20;


// const
// const is used to declare a variable
// whose value cannot be reassigned.
const university = "University of Sindh";


console.log("var studentName:", studentName);
console.log("let age:", age);
console.log("const university:", university);


// ========================================
// 1. STRING
// ========================================

// String represents text.

var name = "Ali";

console.log("String value:", name);
console.log("String type:", typeof name);


// ========================================
// 2. NUMBER
// ========================================

// Number represents numeric values.

var marks = 85;

console.log("Number value:", marks);
console.log("Number type:", typeof marks);


// ========================================
// 3. BOOLEAN
// ========================================

// Boolean represents true or false.

var passed = true;

console.log("Boolean value:", passed);
console.log("Boolean type:", typeof passed);


// ========================================
// 4. UNDEFINED
// ========================================

// Undefined means a variable has been declared
// but no value has been assigned to it.

var result;

console.log("Undefined value:", result);
console.log("Undefined type:", typeof result);


// ========================================
// 5. NULL
// ========================================

// Null represents an intentional empty value.

var data = null;

console.log("Null value:", data);
console.log("Null type:", typeof data);


// ========================================
// 6. OBJECT
// ========================================

// Object stores information using
// key-value pairs.

var student = {
    name: "Sara",
    age: 21,
    course: "IT"
};

console.log("Object value:", student);
console.log("Object type:", typeof student);


// ========================================
// 7. ARRAY
// ========================================

// Array stores multiple values
// in a single variable.

var subjects = [
    "HTML",
    "CSS",
    "JavaScript"
];

console.log("Array value:", subjects);
console.log("Array type:", typeof subjects);


// ========================================
// 8. SYMBOL
// ========================================

// Symbol creates a unique value.

var studentID = Symbol("studentID");

console.log("Symbol value:", studentID);
console.log("Symbol type:", typeof studentID);


// ========================================
// 9. BIGINT
// ========================================

// BigInt is used to represent
// very large integer values.

var largeNumber = 12345678901234567890n;

console.log("BigInt value:", largeNumber);
console.log("BigInt type:", typeof largeNumber);