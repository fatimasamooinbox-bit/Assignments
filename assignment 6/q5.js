// Question 5: Product List Manager

let products = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor",
    "Headphones"
];

// length
console.log("Number of products:", products.length);

// at()
console.log("First product:", products.at(0));
console.log("Last product:", products.at(-1));

// push()
products.push("Printer");
console.log("After push:", products);

// unshift()
products.unshift("Webcam");
console.log("After unshift:", products);

// pop()
products.pop();
console.log("After pop:", products);

// shift()
products.shift();
console.log("After shift:", products);

// Second product array
let moreProducts = ["USB", "Speaker"];

// concat()
let allProducts = products.concat(moreProducts);
console.log("After concat:", allProducts);

// slice()
let smallList = allProducts.slice(0, 3);
console.log("Smaller list:", smallList);

// splice()
allProducts.splice(1, 1, "Wireless Mouse");
console.log("After splice:", allProducts);

// join()
console.log("Final product list:", allProducts.join(", "));

// Arrow function
let showProducts = (array) => {
    console.log("Final array:", array);
};

showProducts(allProducts);

// Array.isArray()
console.log("Is final product list an array?", Array.isArray(allProducts));