// Ask the user to enter a number
let n = parseInt(prompt("Enter a number:"));

// Outer loop for rows
for (let i = 1; i <= n; i++) {

    let row = "";

    // Inner loop to print numbers
    for (let j = 1; j <= i; j++) {

        row = row + j;
    }

    console.log(row);
}