
const fs = require('fs');

// Create large.txt
const logData = `
Student Ali registered successfully.
Student Sara logged into the system.
Student Ahmed downloaded course materials.
Student Ayesha submitted an assignment.
Student Usman completed a programming task.
Student Fatima logged out successfully.
`;

fs.writeFileSync('large.txt', logData);

console.log('large.txt created successfully.');

// Create readable stream
const readStream = fs.createReadStream('large.txt', {
    encoding: 'utf8',
    highWaterMark: 30
});

// Display each received chunk
readStream.on('data', (chunk) => {
    console.log('\nReceived Chunk:');
    console.log(chunk);
});

// Reading completed
readStream.on('end', () => {
    console.log('\nFile reading completed.');
});

// Reading error
readStream.on('error', (error) => {
    console.log('Reading Error:', error.message);
});

// Create streams for copying
const source = fs.createReadStream('large.txt');
const destination = fs.createWriteStream('copy.txt');

// Handle errors
source.on('error', (error) => {
    console.log('Source Error:', error.message);
});

destination.on('error', (error) => {
    console.log('Destination Error:', error.message);
});

// Copy file
source.pipe(destination);

// Copy completed
destination.on('finish', () => {
    console.log('\nFile copied successfully into copy.txt');
});
