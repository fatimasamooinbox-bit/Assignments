// Question 2: Product Price Organizer

let prices = [1200, 450, 3000, 750, 1500, 250];

// Lowest to highest
let lowToHigh = [...prices];

lowToHigh.sort((a, b) => a - b);

console.log("Lowest to highest:", lowToHigh);

// Highest to lowest
let highToLow = [...prices];

highToLow.sort((a, b) => b - a);

console.log("Highest to lowest:", highToLow);

// Original list
console.log("Original list:", prices);

// Reversed version
let reversedPrices = [...prices];

reversedPrices.reverse();

console.log("Reversed list:", reversedPrices);

// Random ordering
let randomPrices = [...prices];

randomPrices.sort(() => Math.random() - 0.5);

console.log("Random ordering:", randomPrices);