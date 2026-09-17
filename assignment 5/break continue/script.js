let totalCalled = 0;

for (let rollNumber = 1; rollNumber <= 20; rollNumber++) {

    // Skip roll number 13
    if (rollNumber === 13) {
        continue;
    }

    // Stop the loop at roll number 18
    if (rollNumber === 18) {
        break;
    }

    console.log("Calling roll number " + rollNumber);

    totalCalled++;
}

console.log("Total roll numbers called = " + totalCalled);