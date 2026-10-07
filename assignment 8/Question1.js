//Q1: Online Store Sales Report

const orderAmounts = [1200, 450, 3000, 750, 1500, 250, 4200, 900];

// First order amount greater than 2000
const firstOrderGreaterThan2000 = orderAmounts.find(amount => amount > 2000);

// All orders greater than 1000
const ordersGreaterThan1000 = orderAmounts.filter(amount => amount > 1000);

// Total of all order amounts
const totalSales = orderAmounts.reduce((total, amount) => total + amount, 0);

// Display results
console.log("Original Order Amounts:", orderAmounts);
console.log("First Order Greater Than 2000:", firstOrderGreaterThan2000);
console.log("Orders Greater Than 1000:", ordersGreaterThan1000);
console.log("Total Sales:", totalSales);