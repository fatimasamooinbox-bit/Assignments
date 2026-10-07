// Question 4 - Store Inventory Using JavaScript Map

// Create inventory Map
const inventory = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

console.log("Initial Inventory:", inventory);

// Add a new product
inventory.set("mangoes", 150);

// Update quantity of an existing product
inventory.set("apples", 600);

// Retrieve quantity of a specific product
console.log("Quantity of Apples:", inventory.get("apples"));

// Check whether a product exists
console.log("Does bananas exist?", inventory.has("bananas"));

// Remove one product
inventory.delete("oranges");

// Display current number of products
console.log("Number of Product Entries:", inventory.size);

// Display all product names
console.log("Product Names:");

inventory.forEach((quantity, product) => {
    console.log(product);
});

// Display all quantities
console.log("Product Quantities:");

inventory.forEach((quantity) => {
    console.log(quantity);
});

// Display product and quantity together
console.log("Current Inventory:");

inventory.forEach((quantity, product) => {
    console.log(product + ": " + quantity);
});

// Empty the inventory
inventory.clear();

// Display final size
console.log("Final Inventory Size:", inventory.size);