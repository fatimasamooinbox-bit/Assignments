
const bookRecord = ["BK-104", "JavaScript for Beginners", "Programming", 1200];

// Extract ID, title, skip category, and extract price
const [bookId, bookTitle, , bookPrice] = bookRecord;

// Shorter record: use General if category is missing
const shortRecord = ["BK-105", "Learning ES6"];
const [, , category = "General"] = shortRecord;

// Display book details using a template literal
console.log(`Book ID: ${bookId}, Title: ${bookTitle}, Price: ${bookPrice}`);
console.log(`Category of ${shortRecord[1]}: ${category}`);

// Original arrays remain unchanged
console.log("Original record:", bookRecord);
console.log("Short record:", shortRecord);
