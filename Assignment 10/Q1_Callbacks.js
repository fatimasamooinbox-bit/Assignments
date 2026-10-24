
function calculate(num1, num2, callback) {
    callback(num1, num2);
}

function addNumbers(a, b) {
    console.log("Sum:", a + b);
}

calculate(10, 20, addNumbers);


// Calculate the total bill
function calculateBill(price1, price2, price3, callback) {
    callback(price1 + price2 + price3);
}

function displayBill(total) {
    console.log("Total Bill:", total);
}

calculateBill(200, 300, 500, displayBill);


// Withdraw money after 2 seconds
function withdrawMoney(amount, callback) {
    let balance = 10000;

    setTimeout(function () {
        balance = balance - amount;
        callback(balance);
    }, 2000);
}

withdrawMoney(2000, function (remainingBalance) {
    console.log("Remaining Balance:", remainingBalance);
});
