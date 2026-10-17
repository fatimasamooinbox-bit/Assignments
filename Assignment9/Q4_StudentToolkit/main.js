
import calculateTotal, { getFullName } from "./studentTools.js";

const fullName = getFullName("Sara", "Ahmed");

const totalMarks = calculateTotal(85, 90, 78, 92);

const output = `Full Name: ${fullName}
Total Marks: ${totalMarks}`;

console.log(output);
document.getElementById("output").textContent = output;
