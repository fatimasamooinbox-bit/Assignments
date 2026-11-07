
// Import core modules
const os = require('os');
const path = require('path');
const fs = require('fs');

// Display computer information
console.log("===== Computer Information =====");

console.log("Operating System:", os.platform());
console.log("CPU Architecture:", os.arch());

console.log(
    "Total Memory:",
    (os.totalmem() / (1024 ** 3)).toFixed(2),
    "GB"
);

console.log(
    "Free Memory:",
    (os.freemem() / (1024 ** 3)).toFixed(2),
    "GB"
);

console.log("Home Directory:", os.homedir());

// Create data folder if it does not exist
const folderPath = path.join(__dirname, 'data');

if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
}

// Create file path using path module
const filePath = path.join(folderPath, 'student-notes.txt');

console.log("\n===== File Information =====");
console.log("File Name:", path.basename(filePath));
console.log("File Extension:", path.extname(filePath));

// Write notes into file
const notes = `1. Node.js runs JavaScript outside the browser.
2. npm is used to manage Node.js packages.
3. Core modules provide built-in functionality.`;

fs.writeFileSync(filePath, notes);

console.log("\nNotes file created successfully.");

// Read file contents
console.log("\n===== Original Notes =====");
console.log(fs.readFileSync(filePath, 'utf8'));

// Append another line
fs.appendFileSync(
    filePath,
    '\n4. The fs module is used to manage files.'
);

// Display updated contents
console.log("\n===== Updated Notes =====");
console.log(fs.readFileSync(filePath, 'utf8'));

// Rename file
const newFilePath = path.join(folderPath, 'class-notes.txt');

fs.renameSync(filePath, newFilePath);

console.log("\nFile renamed to class-notes.txt");

// Create temporary file
const tempPath = path.join(folderPath, 'temporary.txt');

fs.writeFileSync(tempPath, 'This is a temporary file.');

console.log("Temporary file created.");

// Remove temporary file after other operations
fs.unlinkSync(tempPath);

console.log("Temporary file removed successfully.");
