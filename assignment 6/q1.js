// Question 3: concat(), slice(), splice() and delete

let fruits = ["cherry", "lychee", "blackberry", "peach"];
let vegetables = ["Potato", "Tomato", "onion"];

// concat()
let combined = fruits.concat(vegetables);
console.log("Combined array:", combined);

// slice()
let selected = fruits.slice(1, 3);
console.log("Slice array:", selected);

// splice() - remove one element
fruits.splice(1, 1);
console.log("After removing with splice:", fruits);

// splice() - add an element
fruits.splice(1, 0, "Banana");
console.log("After adding with splice:", fruits);

// delete
delete fruits[2];

console.log("After delete:", fruits);
console.log("Value at deleted position:", fruits[2]);
console.log("Length after delete:", fruits.length);