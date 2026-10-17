
const groupA = ["Ali", "Ahmed", "Hamza"];
const groupB = ["Sara", "Ayesha", "Laiba"];

const profile = {
    name: "Laiba",
    className: "Web Development",
    city: "Karachi"
};

// Combine both groups
const combinedList = [...groupA, ...groupB];

// Copy Group A and add a student
const copiedGroupA = [...groupA];
copiedGroupA.push("Usman");

// Update city without changing original profile
const updatedProfile = { ...profile, city: "Lahore" };

// Add email to a copied profile
const profileWithEmail = {
    ...profile,
    email: "laiba@example.com"
};

// Prepare output
const output = `Original Group A: ${JSON.stringify(groupA)}
Original Group B: ${JSON.stringify(groupB)}
Combined List: ${JSON.stringify(combinedList)}
Copied Group A: ${JSON.stringify(copiedGroupA)}

Original Profile: ${JSON.stringify(profile)}
Updated Profile: ${JSON.stringify(updatedProfile)}
Profile with Email: ${JSON.stringify(profileWithEmail)}`;

console.log(output);
document.getElementById("output").textContent = output;
