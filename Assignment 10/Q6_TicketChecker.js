
const tickets = [
    {
        ticketId: "T101",
        customerName: "Ali",
        status: "Open"
    },
    {
        ticketId: "T102",
        customerName: "Sara",
        status: "In Progress"
    },
    {
        ticketId: "T103",
        customerName: "Ahmed",
        status: "Resolved"
    }
];

function getTicket(ticketId) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const ticket = tickets.find(function (item) {
                return item.ticketId === ticketId;
            });

            if (ticket) {
                resolve(ticket);
            } else {
                reject(new Error("Ticket ID not found. Please check the ID."));
            }
        }, 2000);
    });
}

async function checkTicket() {
    const ticketId = document.getElementById("ticketId").value.trim();
    const result = document.getElementById("result");

    if (ticketId === "") {
        result.textContent = "Please enter a ticket ID.";
        return;
    }

    result.textContent = "Loading ticket details...";

    try {
        const ticket = await getTicket(ticketId);

        result.textContent =
            "Ticket ID: " + ticket.ticketId +
            " | Customer: " + ticket.customerName +
            " | Status: " + ticket.status;

    } catch (error) {
        result.textContent = error.message;
    }
}

document.getElementById("checkButton").addEventListener(
    "click",
    checkTicket
);
