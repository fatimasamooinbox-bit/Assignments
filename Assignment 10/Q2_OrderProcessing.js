
/* function prepareOrder(callback) {
    console.log("Order preparation started");

    setTimeout(function () {
        console.log("Order preparation finished");

        callback();
    }, 1000);
}

function packOrder(callback) {
    console.log("Order packing started");

    setTimeout(function () {
        console.log("Order packing finished");

        callback();
    }, 1000);
}

function notifyCustomer() {
    console.log("Customer notification started");

    setTimeout(function () {
        console.log("Customer notified");
    }, 1000);
}

prepareOrder(function () {
    packOrder(function () {
        notifyCustomer();
    });
});
*/

function prepareOrderPromise() {
    console.log("Order preparation started");

    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Order preparation finished");
            resolve();
        }, 1000);
    });
}

function packOrderPromise() {
    console.log("Order packing started");

    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Order packing finished");
            resolve();
        }, 1000);
    });
}

function notifyCustomerPromise() {
    console.log("Customer notification started");

    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("Customer notified");
            resolve();
        }, 1000);
    });
}

prepareOrderPromise()
    .then(function () {
        return packOrderPromise();
    })
    .then(function () {
        return notifyCustomerPromise();
    })
    .catch(function (error) {
        console.log("Error:", error);
    });

// Nested callbacks become difficult to read as steps increase.
// Promise chaining keeps the sequence cleaner and easier to follow.
