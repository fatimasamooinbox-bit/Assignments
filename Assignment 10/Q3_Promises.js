
function registerStudent(studentName, seatAvailable) {
    return new Promise(function (resolve, reject) {
        if (seatAvailable) {
            resolve(studentName + " registered successfully!");
        } else {
            reject(new Error("Sorry, the class is full."));
        }
    });
}

// Test 1: Seat available
registerStudent("Ali", true)
    .then(function (message) {
        console.log(message);
    })
    .catch(function (error) {
        console.log(error.message);
    });

// Test 2: No seat available
registerStudent("Sara", false)
    .then(function (message) {
        console.log(message);
    })
    .catch(function (error) {
        console.log(error.message);
    });
